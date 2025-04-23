const { Vouchers, Voucher_Heads, Office_Vouchers } = require("../../functions/Associations/voucherAssociations");
const { Child_Account, Parent_Account } = require("../../functions/Associations/accountAssociations");
const { SE_Job, SE_Equipments, Bl, Container_Info ,Commodity} = require("../../functions/Associations/jobAssociations/seaExport");
const routes = require("express").Router();
const Sequelize = require("sequelize");
const moment = require("moment");
const { Employees } = require("../../functions/Associations/employeeAssociations");
const { Clients, Client_Associations } = require("../../functions/Associations/clientAssociation");
const { Vendors, Vendor_Associations } = require("../../functions/Associations/vendorAssociations");
const { Charge_Head, Invoice, Invoice_Transactions } = require("../../functions/Associations/incoiceAssociations");
const { Accounts } = require('../../models/');
const { Op, literal } = Sequelize;

//Voucher Types
// (For Jobs)
// Job Reciept 
// Job Recievable
// Job Payment 
// Job Payble
// 0 Unpaid
// 1 Fully-paid
// 2 Half-paid

// (For Expense)
// Expenses Payment
// Office_Vouchers

const setVoucherHeads = (id, heads, curr) => {
  let result = [];
  heads.forEach((x) => {
    console.log("X>",x)
    result.push({
      ...x,
      VoucherId: id,
      amount: `${x.amount}`,
      defaultAmount: curr=="PKR"?`${x.amount}`:'0',
      // x.currency=="PKR"?defaultAmount: `${x.amount}`:defaultAmount: `0`,
      // createdAt: "2024-06-30 19:44:20.592+05"
    });
  });
  console.log("Result>",result)
  return result;
};

routes.post("/ApproveOfficeVoucher", async (req, res) => {
  try {
    const result = await Office_Vouchers.update(
      { approved: req.body.approved, VoucherId: req.body.VoucherId },
      { where: { id: req.body.id } }
    );

    res.json({ status: "success", result: result });
  } catch (error) {
    res.json({ status: "error", result: error });
  }
});

routes.post("/recordReverse", async (req, res) => {
  try {
    const result = await Vouchers.findOne({
      where: { id: req.body.VoucherId },
      include: [{ model: Voucher_Heads }]
    })
    await Office_Vouchers.update(
      { reverseAmount: req.body.reverseAmount, paid: req.body.paid },
      { where: { id: req.body.id } }
    );
    res.json({ status: "success", result: result });
  } catch (error) {
    res.json({ status: "error", result: error });
  }
});

routes.post("/OfficeVoucherUpsert", async (req, res) => {
  try {
    const result = await Office_Vouchers.upsert(req.body);
    res.json({ status: "success", result: result });
  } catch (error) {
    res.json({ status: "error", result: error });
  }
});

routes.get("/OfficeVoucherById", async (req, res) => {
  try {
    const result = await Office_Vouchers.findOne({
      where: { id: req.headers.id },
      include: [{ model: Employees, attributes: ['name'] },
      { model: Vouchers, attributes: ['voucher_Id'] }],
    })
    res.json({ status: "success", result: result });
  } catch (error) {
    res.json({ status: "error", result: error });
  }
});

routes.get("/OfficeAllVouchers", async (req, res) => {
  try {
    const result = await Office_Vouchers.findAll({
      attributes: ['id', 'EmployeeId', 'amount', 'requestedBy', 'preparedBy', 'approved', 'paid'],
      where: { CompanyId: req.headers.companyid },
      include: [
        { model: Employees, attributes: ['name'] },
        { model: Vouchers, attributes: ['voucher_Id'] },
      ]
    })
    res.json({ status: "success", result: result });
  } catch (error) {
    res.json({ status: "error", result: error });
  }
});

// routes.get("/getAllVoucehrHeads", async (req, res) => {
//   try{
//     // const result = await Voucher_Heads.findAll({
//     //   include: [
//     //     {
//     //       model: Vouchers,
//     //     },
//     //   ],
//     // });

//     const result = await Invoices.findAll()
    
//     res.json({ status: "success", result: result });
//   }catch (error) {
//     console.log(error)
//     res.json({ status: "error", result: error });
//   }
// })

routes.get("/getAllVoucehrHeads", async (req, res) => {
  try {
    console.log("Running API")
    const invoices = await Invoices.findAll();

    // Update each invoice with the modified invoice_No
    for (const invoice of invoices) {
      const modifiedInvoiceNo = invoice.invoice_No?.endsWith('-O') 
        ? invoice.invoice_No.slice(0, -2) 
        : invoice.invoice_No;
      await invoice.update({ invoice_No: modifiedInvoiceNo });
    }

    res.json({ status: "success", message: "Invoice numbers updated successfully" });
  } catch (error) {
    console.error("Error updating invoice numbers:", error);
    res.status(500).json({ status: "error", result: error.message });
  }
});


routes.post("/voucherCreation", async (req, res) => {
  try {
    console.log("Request Body:",req.body)
    const check = await Vouchers.findOne({
      order: [["voucher_No", "DESC"]],
      attributes: ["voucher_No"],
      where: { vType: req.body.vType, CompanyId: req.body.CompanyId }
    });
      const result = await Vouchers.create({
        ...req.body,
        voucher_No: check == null ? 1 : parseInt(check.voucher_No) + 1,
        voucher_Id: !req.body.voucher_Id?`${req.body.CompanyId == 1 ? "SNS" : req.body.CompanyId == 2 ? "CLS" : "ACS"
        }-${req.body.vType
        }-${check == null ? 1 : parseInt(check.voucher_No) + 1
        }/${moment().month() >= 6 ? moment().add(1, 'year').format('YY') : moment().format('YY')}`:req.body.voucher_Id,
      }).catch();
      let dataz = await setVoucherHeads(result.id, req.body.Voucher_Heads, req.body.currency);
      const VH = await Voucher_Heads.bulkCreate(dataz);
      res.json({ status: "success", result: result });
  } catch (error) {
    console.log(error)
    res.json({ status: "error", result: error });
  }
});

routes.post("/cheaqueReturned", async (req, res) => {
  try {
    const data = req.body
    const {VoucherId, InvoiceId} = data;

   const found = await Vouchers.findOne({
      order: [["voucher_No", "DESC"]],
      where: { id:VoucherId  }
    });
    const { CompanyId, costCenter, currency, exRate, voucher_No, voucher_Id,
      vType, type, subType, partyType, partyName, partyId, onAccount,
      invoices, tranDate
    } = found.dataValues;

    //Create and post Voucher & Voucher Head
    const vId = voucher_Id.replace(/-[^-]+(?=-\d+\/\d+)/, "-CR");
    const vtype = vType.replace(/.*/, "CR");

    const voucher_Data = {
      CompanyId, costCenter, currency, exRate, voucher_No, voucher_Id: vId,
      vType: vtype, type, subType, partyType, partyName, partyId, onAccount,
      invoices, tranDate
    };
    const voucher_created = await Vouchers.create(voucher_Data);
    const vData = {...data, VoucherId: voucher_created.id }
 
    const VHresult = await Voucher_Heads.create(vData);


    const getInvoiceTransaction = await Invoice_Transactions.destroy({
       where:
      { InvoiceId: InvoiceId}
    
      
    })
    // const {...rest} = getInvoiceTransaction.dataValues;

  //   const UpdateInvoiceTransaction = await Invoice_Transactions.update(
  //     {
  //    ...rest,
  //   amount: "0" },
  //    {where:{ InvoiceId: InvoiceId}} 
     
     
  //  )

   const updateInvoice = await Invoice.update(
     {
       recieved: "0",
       status: "1",
     },
     {where:{ id:InvoiceId}}
   )
  //  console.log(updateInvoice)


   res.json({ status: "success", result:updateInvoice });
  } catch (error) {
    console.log(error)
    res.json({ status: "error", result: error });
  }
});

routes.post("/voucherEdit", async (req, res) => {
  try {
    // console.log("Body>>", req.body.Voucher_Heads)
    await Vouchers.update({ ...req.body }, { where: { id: req.body.id } })
    await Voucher_Heads.destroy({ where: { VoucherId: req.body.id } })
    req.body.Voucher_Heads.forEach(async (x) => {
      const result = await Voucher_Heads.upsert({ ...x, VoucherId: req.body.id, createdAt: req.body.createdAt });
      // console.log("Result>>", result)
    });
    await res.json({ status: "success" });
  } catch (error) {
    console.log(error)
    res.json({ status: "error", result: error });
  }
});

routes.post("/deleteVoucher", async (req, res) => {
  try {
    let obj = {};
    // console.log(req.body.id.toString())
    if (req.body.type == "VoucherId Exists") {
      // console.log("If ran")
      obj = { id: req.body.id }
    } else {
      // console.log("else ran")
      obj = {
        invoice_Voucher: "1",
        invoice_Id: req.body.id.toString(),
      }
    }
    const findAll = await Vouchers.findAll({
      where: obj,
    });
    for(let x of findAll){
      // console.log(x.dataValues.id)

      const resultOne = await Voucher_Heads.destroy({
        where: { VoucherId: x.dataValues.id },
      });
      const resultTwo = await Vouchers.destroy({
        where: { id: x.dataValues.id },
      });
    }
    await res.json({ status: "success", result: { findAll } });
  } catch (error) {
    res.json({ status: "error", result: error });
  }
});

routes.get("/getAccountActivity", async (req, res) => {
  try {
    const { debitaccount, creditaccount } = req.headers;
    let obj = {};
    if (debitaccount != "" && creditaccount == "") {
      obj = { ChildAccountId: debitaccount, type: "debit" };
    } else if (debitaccount == "" && creditaccount != "") {
      obj = { ChildAccountId: creditaccount, type: "credit" };
    } else if (debitaccount != "" && creditaccount != "") {
      obj = {
        [Op.or]: [
          { ChildAccountId: debitaccount, type: "debit" },
          { ChildAccountId: creditaccount, type: "credit" },
        ],
      };
    } else if (debitaccount == "" && creditaccount == "") {
      obj = {};
    }
    const resultOne = await Voucher_Heads.findAll({
      where: obj,
      include: [{ model: Vouchers }],
    });
    let items = [];
    resultOne.forEach((x) => {
      items.push(x.dataValues.Voucher.voucher_Id)
    });

    let voucherIds = [...new Set(items)];
    const result = await Vouchers.findAll({
      attributes: ["voucher_Id", "currency", "exRate", "createdAt"],
      where: {
        voucher_Id: voucherIds,
        createdAt: {
          [Op.gte]: moment(req.headers.from).toDate(),
          [Op.lte]: moment(req.headers.to).add(1, "days").toDate(),
        },
      },
      include: [
        {
          model: Voucher_Heads,
          attributes: ["amount", "type", "defaultAmount"],
          include: [
            {
              model: Child_Account,
              attributes: ["id", "title"],
            },
          ],
        },
      ],
      order: [["createdAt", "ASC"]],
    });
    await res.json({ status: "success", result: result });
  } catch (error) {
    res.json({ status: "error", result: error });
  }
});

routes.get("/getAllVouchers", async (req, res) => {
  try {
    const result = await Vouchers.findAll({
      where: {
        CompanyId: req.headers.id,
        [Op.and]: [
          { type: { [Op.ne]: "Job Payment" } },
          { type: { [Op.ne]: "Job Reciept" } },
        ]
      },
      include: [{
        model: Voucher_Heads,
        attributes: ['type', 'amount'],
        where: { type: "debit" }
      }],
      order: [["createdAt", "DESC"]],
    });
    await res.json({ status: "success", result: result, count:1 });
  } catch (error) {
    res.json({ status: "error", result: error });
  }
});

routes.get("/testgetAll", async (req, res) => {
  try {
    const result = await Vouchers.findAll({
      where: {
        CompanyId: req.headers.id,
        // [Op.and]: [
        //   { type: { [Op.ne]: "Job Payment" } },
        //   { type: { [Op.ne]: "Job Reciept" } },
        // ]
      },
      attributes: ['createdAt', 'voucher_Id'],
      // include: [{
      //   model: Voucher_Heads,
      //   attributes: ['type', 'amount'],
      //   where: { type: "debit" }
      // }],
      order: [["createdAt", "DESC"]],
    });
    await res.json({ status: "success", result: result, count:1 });
  } catch (error) {
    res.json({ status: "error", result: error });
  }
});

routes.get("/getAllJobPayRecVouchers", async (req, res) => {
  try {
    let result = await Vouchers.findAll({
      order: [["createdAt", "DESC"]],
      where: {
        CompanyId: req.headers.companyid,
        vType: {
            [Op.notIn]: ["OP", "SI", "PI", "OI", "OB" ]
        },
        type: {
          [Op.notLike]: "%Voucher"
        }
    },
    
      include: [
        {
          model: Invoice_Transactions
        },
        {
        model: Voucher_Heads,
        attributes: ['type', 'amount', 'accountType', 'ChildAccountId'],
        // where: { type: "debit" }
      }],
    });
    invoice=[]
    result.forEach((x) => {
      x.dataValues.invoices!=null?x.dataValues.invoices.split(",").forEach((y) => {
        y!=''?invoice.push(y):null
      }):null
    })
    const invoices = await Invoice.findAll({
      where: {
        // CompanyId: req.headers.companyid,
        id: {
          [Op.in]: invoice, // Filter invoices by IDs
        },
      },
      include:[
        {
          model:SE_Job,
          // attributes:['jobNo', 'subType'],
          include:[
            { model:SE_Equipments, attributes:['qty', 'size'] },
            { model:Bl, required: false, attributes:['mbl', 'hbl'] },
          ]
        }
      ]
    })
    result.forEach((x)=>{
      inv = []
      invoices.forEach((y)=>{
        y.dataValues.receiving = 0.0;
        if(x.dataValues.invoices!=null && x.dataValues.invoices.includes(y.dataValues.id)){
          inv.push(y.dataValues)
        }
      })
      x.dataValues.invoice = inv
    })
    // result.dataValues.invoices = invoices
    await res.json({ status: "success", result: result });
  } catch (error) {
    console.log(error)
    res.json({ status: "error", result: error });
  }
});

routes.get("/getVoucherById", async (req, res) => {
  try {
    console.log(">>>",req.headers.id)
    const result = await Vouchers.findOne({
      where: { id: req.headers.id },
      include: [
        { 
          model: Voucher_Heads,
          include:[{
            model:Child_Account,
            attributes:['title']
          }]
        }
      ],
    });
    console.log("Result>>>", result)
    await res.json({ status: "success", result: result });
  } catch (error) {
    console.error(error)
    res.json({ status: "error", result: error });
  }
});

routes.get("/getVoucherByIdAdvanced", async (req, res) => {
  try {
    const result = await Vouchers.findOne({
      where: { id: req.headers.id },
      include: [{
        model: Voucher_Heads,
        include: [{
          model: Child_Account,
          include: [{
            model: Parent_Account,
            include: [{
              model: Accounts
            }]
          }]
        }]
      }],
    });
    // console.log(result)
    await res.json({ status: "success", result: result });
  } catch (error) {
    res.json({ status: "error", result: error });
  }
});

routes.get("/getVouchersByEmployeeId", async (req, res) => {
  try {
    const result = await Office_Vouchers.findAll({
      where: { EmployeeId: req.headers.id },
    });
    await res.json({ status: "success", result: result });
  } catch (error) {
    res.json({ status: "error", result: error });
  }
});

routes.post("/deleteBaseVoucher", async (req, res) => {
  try {
    await Voucher_Heads.destroy({ where: { VoucherId: req.body.id } })
    await Vouchers.destroy({ where: { id: req.body.id } })
    await res.json({ status: "success" });
  } catch (error) {
    res.json({ status: "error", result: error });
  }
});

routes.post("/testDeleteVouchers", async (req, res) => {
  try {

    await Vouchers.destroy({ where: {} })
    await Voucher_Heads.destroy({ where: {} })
    await res.json({ status: "success" });
  } catch (error) {
    res.json({ status: "error", result: error });
  }
});

routes.post("/getChildAccountIds", async (req, res) => {
  let accountsList = req.body.list;
  let newList = [];
  try {
    const childTwoTest = await Child_Account.findOne({
      where: { title: "CONTRA ACCOUNT OPENINIG" },
      attributes: ['id', 'title'],
      include: [{
        model: Parent_Account,
        where: { CompanyId: 3 },
        attributes: ['CompanyId', 'title']
      }]
    });
    await accountsList.forEach(async (x, i) => {
      await Child_Account.findOne({
        where: { title: x.title },
        attributes: ['id'],
        include: [{
          model: Parent_Account,
          where: { CompanyId: req.body.company }
        }]
      }).then(async (y) => {
        newList.push({
          "type": "Opening Balance",
          "vType": "OP",
          "currency": req.body.currency,
          "exRate": "1",
          "costCenter": "KHI",
          "CompanyId": req.body.company,
          Voucher_Heads: [
            {
              title: "CONTRA ACCOUNT OPENINIG",
              ChildAccountId: childTwoTest.id,
              amount: x.amount,
              type: x.type == "debit" ? "debit" : "credit",
              defaultAmount: x.amount,
            },
            {
              title: x.title,
              ChildAccountId: y?.id,
              amount: x.amount,
              type: x.type == "debit" ? "credit" : "debit",
              defaultAmount: x.amount,
            },
          ]
        })
      })
    });
    const childTwo = await Child_Account.findOne({
      where: { title: "CONTRA ACCOUNT OPENINIG" },
      attributes: ['id', 'title'],
      include: [{
        model: Parent_Account,
        where: { CompanyId: 3 },
        attributes: ['CompanyId', 'title']
      }]
    });
    res.json({ status: "success", result: { newList, childTwo } });
  } catch (error) {
    res.json({ status: "error" });
  }
});

routes.post("/deletePaymentReceipt", async(req, res) => {
  try {
    // console.log(req.body.id)
    const trans = await Invoice_Transactions.findAll({where:{VoucherId:req.body.id}})
    // for(let x of trans){
    //   // console.log(">>",x.dataValues)
    //   const updateInvoice = await Invoice.update(
    //     {
    //       recieved: "0",
    //       paid: "0",
    //       status: "1",
    //     },
    //     {where:{ id:x.dataValues.InvoiceId}}
    //   )
    //   // console.log(">",updateInvoice)
    // }
    for (let x of trans) {
      const invoice = await Invoice.findOne({ where: { id: x.dataValues.InvoiceId } });
      console.log(x)
      if (invoice) {
        let updateData = { status: "1" };
        console.log("Invoice to be deleted>>>",invoice.dataValues)
        if (invoice.dataValues.payType === "Recievable") {
          updateData.recieved = (parseFloat(invoice.dataValues.recieved) - parseFloat(x.dataValues.amount)).toString();
        } else if (invoice.dataValues.payType === "Payble") {
          updateData.paid = (parseFloat(invoice.dataValues.paid) - parseFloat(x.dataValues.amount)).toString();
        }
        console.log("Update Data>>>", updateData)
        const updateInvoice = await Invoice.update(updateData, {
          where: { id: x.dataValues.InvoiceId }
        });
    
        // console.log(">", updateInvoice);
      }
    }
    await Voucher_Heads.destroy({where:{VoucherId:req.body.id}})
    await Invoice_Transactions.destroy({where:{VoucherId:req.body.id}})
    await Vouchers.destroy({where:{id:req.body.id}})

    res.json({status:'success',});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});

routes.post("/makeTransaction", async(req, res) => {
  try {
    console.log("Body: ", req.body)
    let invoices = req.body.invoices;
    let invoicesList = ""
    let narration  = ""
    // console.log("Req Body PayType>>>===", req.body.payType)
    if(req.body.totalReceiving>0){
      narration = `Received ${req.body.subType}`
    }else{
      narration = `Paid ${req.body.subType}`
    }
    if(req.body.advance){
      if(req.body.payType == 'Recievable'){
        narration = `Received ${req.body.subType}`
      }else{
        narration = `Paid ${req.body.subType}`
      }
    }
    narration = req.body.checkNo?narration+" "+req.body.checkNo:narration
    narration = req.body.checkDate?narration+", Date: "+moment(req.body.checkDate).format('YYYY-MM-DD'):narration
    let i = 0
    for(let x of invoices){
      if(x.receiving!=0){
        // console.log("State Edit>>>", !req.body.edit)
        if(!req.body.edit){
          if(x.payType=="Recievable"){
            const updateInvoice = await Invoice.update(
              {
                recieved: literal(`CAST(recieved AS numeric) + ${x.receiving}`), // Cast `recieved` to numeric, then add
                status: "1",
              },
              { where: { id: x.id } }
            );
            
          }else{
            const updateInvoice = await Invoice.update(
              {
                paid: literal(`CAST(recieved AS numeric) + ${x.receiving}`), // Cast `recieved` to numeric, then add
                status: "1",
              },
              { where: { id: x.id } }
            );

          }
        }else{
          // console.log(">>>>>>>>>> ",x.payType)
          if(x.payType=="Recievable"){
            const updateInvoice = await Invoice.update(
              {
                recieved: x.receiving, // Cast `recieved` to numeric, then add
                status: "1",
              },
              { where: { id: x.id } }
            );
            
          }else{

            const updateInvoice = await Invoice.update(
              {
                paid: x.receiving, // Cast `recieved` to numeric, then add
                status: "1",
              },
              { where: { id: x.id } }
            );
          }
        }
        invoicesList += `${x.id},`
        if(i == 0){
          narration = `${narration}, Against`
          x.SE_Job?.Bl?.hbl?narration = `${narration}, HBL# ${x.SE_Job?.Bl?.hbl}`:null
          x.SE_Job?.Bl?.mbl?narration = `${narration}, MBL# ${x.SE_Job?.Bl?.mbl}`:null
        }
        narration = `${narration}, Invoice# ${x.invoice_No}`
        if(i == invoices.length-1){
          narration = `${narration}, Job# ${x.SE_Job?.jobNo}`
          narration = `${narration}, For ${x.party_Name}`
        }
      }
      if(req.body.edit){
        invoicesList += `${x.id},`
      }
      i++
    }
    let vID = req.body.voucherId
    let vouchers
    if(!req.body.edit){

      let v = {
        type: `Job ${req.body.payType=="Recievable"?"Reciept":"Payment"}`,
        vType: `${req.body.transactionMode=="Cash"?"C":"B"}${req.body.payType=="Recievable"?"R":"P"}V`,
        currency: req.body.currency,
        exRate: req.body.exRate,
        chequeNo: req.body.checkNo,
        chequeDate: req.body.checkDate,
        costCenter: 'KHI',
        invoices: invoicesList,
        onAccount: req.body.type,
        partyId: req.body.partyId,
        partyName: req.body.partyName,
        partyType: req.body.partyType,
        tranDate: req.body.tranDate,
        subType: req.body.subType,
        CompanyId: req.body.companyId,
        voucherNarration: req.body.narration==""?narration:req.body.narration,
        createdAt: req.body.tranDate
      }
      const lastVoucher = await Vouchers.findOne({
        where: {
          vType: v.vType,
          CompanyId: v.CompanyId,
        },
        order: [["voucher_No", "DESC"]],
      })
      // console.log("Last Voucher: ", lastVoucher)
      if(lastVoucher==null){
        v.voucher_No = 1
        v.voucher_Id = `${v.CompanyId == 1 ? "SNS" : v.CompanyId == 2 ? "CLS" : "ACS"}-${v.vType}-${v.voucher_No}/${moment().month() >= 6 ? moment().add(1, 'year').format('YY') : moment().format('YY')}`
      }else{
        // console.log("VOUCHER NO", lastVoucher.voucher_No)
        v.voucher_No = lastVoucher.voucher_No + 1
        v.voucher_Id = `${v.CompanyId == 1 ? "SNS" : v.CompanyId == 2 ? "CLS" : "ACS"}-${v.vType}-${v.voucher_No}/${moment().month() >= 6 ? moment().add(1, 'year').format('YY') : moment().format('YY')}`
      }
      // console.log(v.voucher_No)
      vouchers = await Vouchers.create(
        v
      )
      vID = vouchers.id
    }else{
      const vouchers = await Vouchers.update(
        { invoices: invoicesList }, // Data to update
        { where: { id: vID } }      // Query options
      );
      await Voucher_Heads.destroy({
        where:{
          VoucherId: vID
        }
      })
    }
    let account
    if(req.body.partyType=='client'){
      account = await Client_Associations.findOne({
        where: { ClientId: req.body.partyId, CompanyId: req.body.companyId }
      })
    }else{
      account = await Vendor_Associations.findOne({
        where: { VendorId: req.body.partyId, CompanyId: req.body.companyId }
      })
    }
    
    for(let x of req.body.transactions){
      let amount = 0.0
      if(x.type=='credit'){
        amount = x.credit
      }else {
        amount = x.debit
      }
      // console.log("Narration>>>>", req.body.narration)
      if(x.accountName!="Total"){
        console.log(x.accountType, x)
        if(x.accountType=='partyAccount'){
          await Voucher_Heads.create(
            {
              amount: amount,
              defaultAmount: x.currency=="PKR"?amount:amount*req.body.exRate,
              type: x.type,
              accountType: x.accountType,
              VoucherId: vID,
              ChildAccountId: req.body.partyId,
              narration: req.body.narration==""?narration:req.body.narration,
              createdAt: req.body.tranDate
            }
          )
        }else{
          if(x.partyId == req.body.partyId){
            await Voucher_Heads.create(
              {
                amount: amount,
                defaultAmount: x.currency=="PKR"?amount:amount*req.body.exRate,
                type: x.type,
                accountType: x.accountType,
                VoucherId: vID,
                ChildAccountId: req.body.partyId,
                narration: req.body.narration==""?narration:req.body.narration,
                createdAt: req.body.tranDate
              }
            )
          }else{
            await Voucher_Heads.create(
              {
                amount: amount,
                defaultAmount: x.currency=="PKR"?amount:amount*req.body.exRate,
                type: x.type,
                accountType: x.accountType,
                VoucherId: vID,
                ChildAccountId: x.partyId,
                narration: req.body.narration==""?narration:req.body.narration,
                createdAt: req.body.tranDate
              }
            )
          }
        }
    }
    }
    for(let x of invoices){
      if(!req.body.edit){
        if(x.receiving!=0){
          let a = await Invoice_Transactions.create(
            {
              gainLoss: req.body.gainLoss,
              amount: x.receiving,
              InvoiceId: x.id,
              VoucherId: vID
              
            }
          )
        }
      }else{
        let a = await Invoice_Transactions.destroy({
          where: {
            InvoiceId: x.id
          }
        })
        if(x.receiving!=0){
          let b = await Invoice_Transactions.create(
            {
              gainLoss: req.body.gainLoss,
              amount: x.receiving,
              InvoiceId: x.id,
              VoucherId: vID
              
            }
          )
        }
      }
    }
    res.json({status:'success', result: vouchers});
  }
  catch (error) {
    console.log(error)
    res.json({status:'error', result:error});
  }
});

routes.post("/createVoucher", async(req, res) => {
  try{
    console.log("Create Voucher>>", req.body)
    let voucher_Heads = req.body.Voucher_Heads
    const lastVoucher = await Vouchers.findOne({
      where: {
        vType: req.body.vType,
        CompanyId: req.body.CompanyId,
      },
      order: [["voucher_No", "DESC"]],
    })
    if(lastVoucher==null){
      req.body.voucher_No = 1
      req.body.voucher_Id = `${req.body.CompanyId == 1 ? "SNS" : req.body.CompanyId == 2 ? "CLS" : "ACS"}-${req.body.vType}-${req.body.voucher_No}/${moment().month() >= 6 ? moment().add(1, 'year').format('YY') : moment().format('YY')}`
    }else{
      req.body.voucher_No = lastVoucher.voucher_No + 1
      req.body.voucher_Id = `${req.body.CompanyId == 1 ? "SNS" : req.body.CompanyId == 2 ? "CLS" : "ACS"}-${req.body.vType}-${req.body.voucher_No}/${moment().month() >= 6 ? moment().add(1, 'year').format('YY') : moment().format('YY')}`
    }
    const result = await Vouchers.create(req.body)
    for(let x of voucher_Heads){
      x.VoucherId = result.id
      await Voucher_Heads.create(x)
    }
    res.json({status:'success', result: result});
  }catch(e){
    console.log(e)
    res.json({status:'error', result:e});
  }
})
routes.post("/updateVoucher", async(req, res) => {
  try{
    console.log("Update Voucher>>", req.body)
    let voucher_Heads = req.body.Voucher_Heads
    // const lastVoucher = await Vouchers.findOne({
    //   where: {
    //     vType: req.body.vType,
    //     CompanyId: req.body.CompanyId,
    //   },
    //   // order: [["voucher_No", "DESC"]],
    // })
    // if(lastVoucher==null){
    //   req.body.voucher_No = 1
    //   req.body.voucher_Id = `${req.body.CompanyId == 1 ? "SNS" : req.body.CompanyId == 2 ? "CLS" : "ACS"}-${req.body.vType}-${req.body.voucher_No}/${moment().month() >= 6 ? moment().add(1, 'year').format('YY') : moment().format('YY')}`
    // }else{
    //   req.body.voucher_No = lastVoucher.voucher_No + 1
    //   req.body.voucher_Id = `${req.body.CompanyId == 1 ? "SNS" : req.body.CompanyId == 2 ? "CLS" : "ACS"}-${req.body.vType}-${req.body.voucher_No}/${moment().month() >= 6 ? moment().add(1, 'year').format('YY') : moment().format('YY')}`
    // } 
    const result = await Vouchers.upsert(req.body)
    for(let x of voucher_Heads){
      x.VoucherId = result.id
      await Voucher_Heads.upsert(x)
    }
    res.json({status:'success', result: result});
  }catch(e){
    console.log(e)
    res.json({status:'error', result:e});
  }
})
routes.get("/getExRateVouchers", async(req, res) => {
  try{
    const Charges = await Voucher_Heads.update(
      {
        accountType: "Charges Account",
      },
      {
        where: {
          ChildAccountId: { [Op.or]: ['55690', '57542'] }
        }
      }
    );
    // const GainLoss = await Voucher_Heads.update(
    //   {
    //     accountType: "Charges Account",
    //   },
    //   {
    //     where: {
    //       ChildAccountId: { [Op.or]: ['50143', '51988'] }
    //     }
    //   }
    // );
    const CV = await Voucher_Heads.update(
      {
        accountType: "partyAccount",
      },
      {
        where: {
          accountType: { [Op.or]: ['client', 'vendor', 'agent'] }
        }
      }
    );
    const BC = await Voucher_Heads.update(
      {
        accountType: "payAccount",
      },
      {
        where: {
          accountType: { [Op.or]: ['Bank'] }
        }
      }
    );
    res.json({status:'success'});
  }catch(e){
    console.log(e)
    res.json({status:'error', result:e});
  }
})

routes.post("/importVouchers", async (req, res) => {
  try {

    const extractNumber = (str) => {
      const match = str.match(/^(?:[^-]*-){2}(\d+)\//);
      return match ? match[1] : null;
    };

    const extractBetweenDashes = (str) => {
      const match = str.match(/^[^-]+-([^-]+)-/);
      return match ? match[1] : null;
  };

    // console.log(req.body)

    const accounts = await Child_Account.findAll({ include: Parent_Account });
    const accountMap = new Map();
    accounts.forEach((a) => {
      const companyId = a.Parent_Account?.CompanyId;
      if (companyId) {
        accountMap.set(`${a.title}-${companyId}`, { id: a.id, subCategory: a.subCategory });
      }
    });
    let processedInvoices = []
    for(let invoice of req.body){
      // console.log(invoice)
      accounts.forEach((account) => {
        if (invoice.voucher.Voucher_Heads[0].GL_COA.AccountName == account.title && account.Parent_Account.CompanyId == (invoice.InvoiceNumber.includes("SNS") ? 1 : 3)) {
          invoice.party_Id = account.id;
          invoice.party_Name = account.title;
        }
      })
      let invType = extractBetweenDashes(invoice.InvoiceNumber)
      switch (invType) {
        case "OJI":
          invType = "Old Job Invoice"
          break;
        case "OJB":
          invType = "Old Job Bill"
          break;
        case "OA":
          invType = "Agent Invoice"
          break;
        case "JI":
          invType = "Job Invoice"
          break;
        case "JB":
          invType = "Job Bill"
          break;
        case "AI":
          invType = "Agent Invoice"
          break;
      }
      let inv = {
        invoice_No: invoice.InvoiceNumber,
        invoice_Id: extractNumber(invoice.InvoiceNumber),
        type: invType,
        payType: invoice.InvoiceTypeId == 1 ? "Recievable" : "Payble",
        status: 1,
        operation: "SE",
        currency: invoice.GL_Currencies?invoice.GL_Currencies.CurrencyCode:"PKR",
        ex_rate: invoice.ExchangeRate,
        party_Id: invoice.party_Id,
        party_Name: invoice.party_Name,
        paid: '0',
        recieved: '0',
        total: invoice.InvoiceAmount,
        approved: '1',
        companyId: invoice.InvoiceNumber.includes("SNS") ? 1 : 3,
        partyType: invoice.voucher.GL_COA.GL_COASubCategory?invoice.voucher.GL_COA.GL_COASubCategory.SubCategory:"client",
        SEJobId: 14
      };
      // processedInvoices.push(inv)
      const result = await Invoice.create(inv);
        let voucher = {
        voucher_No: invoice.voucher.VoucherNo.split("-")[2].split("/")[0].replace(/^0+/, ""),
        voucher_Id: invoice.voucher.VoucherNo,
        type: invoice.voucher.GL_VoucherType.VoucherType,
        vType: invoice.voucher.GL_VoucherType.TypeCode,
        currency: invoice.voucher.GL_Currencies?.CurrencyCode ?? "PKR",
        exRate: invoice.voucher.ExchangeRate,
        costCenter: "KHI",
        invoice_Id: result.dataValues.id,
        partyId: invoice.party_Id,
        partyName: invoice.party_Name,
        partyType: invoice.voucher.GL_COA.GL_COASubCategory?invoice.voucher.GL_COA.GL_COASubCategory.SubCategory:"client",
        CompanyId: invoice.InvoiceNumber.includes("SNS") ? 1 : 3,
        voucherNarration: invoice.voucher.Narration,
      };
      const check1 = await Vouchers.findOne({
        where: {
          voucher_Id: voucher.voucher_Id
        }
      })
      let result1
      if(check1){
        // console.log("Voucher Already Exists")
      }else{
        const temp = await Vouchers.create(voucher);
        result1 = temp.dataValues.id
        for (let vh of invoice.voucher.Voucher_Heads) {
          let CAID = 0;
          let type = vh.CreditLC !== 0 ? "credit" : "debit";
          accounts.forEach((account) => {
            if (vh.GL_COA.AccountName == account.title && account.Parent_Account.CompanyId == (invoice.InvoiceNumber.includes("SNS") ? 1 : 3)) {
              CAID = account.id;
            }
          })
  
          let voucher_head = {
            defaultAmount: type === "debit" ? vh.DebitLC : vh.CreditLC,
            amount: type === "debit" ? vh.DebitVC : vh.CreditVC,
            type: type,
            narration: invoice.voucher.Narration,
            accountType: invoice.voucher.GL_COA.GL_COASubCategory?invoice.voucher.GL_COA.GL_COASubCategory.SubCategory:"client",
            VoucherId: result1,
            ChildAccountId: CAID
          }
  
          const result2 = await Voucher_Heads.create(voucher_head)
  
        }
      }

      if(invoice.InvAdjustments && invoice.InvAdjustments.length > 0){
        for(let adj of invoice.InvAdjustments){
          let v = adj.voucher
          // console.log("Adj Voucher: ", v.VoucherNo)
          const check = await Vouchers.findOne({
            where: {
              voucher_Id: v.VoucherNo
            }
          })
          if(check){
            const invTran = await Invoice_Transactions.create({
              gainLoss: '0',
              amount: adj.Amount,
              InvoiceId: result.dataValues.id,
              VoucherId: check.dataValues.id
            })
            let temp = check.dataValues.invoices
            check.update({
              invoices: `${result.dataValues.id}, ${temp}`
            })
          }else{
  
            let voucher = {
              voucher_No: v.VoucherNo.split("-")[2].split("/")[0].replace(/^0+/, ""),
              voucher_Id: v.VoucherNo,
              type: v.GL_VoucherType.VoucherType.includes("RECEIPT")?"JOB RECEIPT":"JOB PAYMENT",
              vType: v.GL_VoucherType.TypeCode,
              currency: v.GL_Currencies?.CurrencyCode ?? "PKR",
              exRate: v.ExchangeRate,
              costCenter: "KHI",
              invoices: result.dataValues.id,
              partyId: invoice.party_Id,
              partyName: invoice.party_Name,
              partyType: v.GL_COA.GL_COASubCategory.SubCategory,
              CompanyId: invoice.InvoiceNumber.includes("SNS") ? 1 : 3,
              voucherNarration: v.Narration,
            };
            const result3 = await Vouchers.create(voucher);
            const invTran = await Invoice_Transactions.create({
              gainLoss: '0',
              amount: adj.Amount,
              InvoiceId: result.dataValues.id,
              VoucherId: result3.dataValues.id
            })
            let rec = parseFloat(result.dataValues.recieved) || 0;
            let pa = parseFloat(result.dataValues.paid) || 0;
            const adjAmount = parseFloat(adj.Amount) || 0;
            console.log("Ajdustment Amount: ", adjAmount)
            if (result.dataValues.payType == "Payble") {
              pa += adjAmount;
            } else {
              rec += adjAmount;
            }
            console.log("Updated values → rec:", rec, "pa:", pa);

            await result.update({
              paid: pa,
              recieved: rec
            });
            for (let vh of v.Voucher_Heads) {
              let CAID = 0;
              let type = vh.CreditLC !== 0 ? "credit" : "debit";
      
              const accountKey = `${vh.GL_COA?.AccountName}-${v.Gen_SubCompanies?.ShortName === "SNS" ? 1 : 3}`;
              if (accountMap.has(accountKey)) {
                CAID = accountMap.get(accountKey).id;
              } else {
                console.log(`No matching account for voucher head: ${vh.GL_COA?.AccountName}`);
              }
      
              let voucher_head = {
                defaultAmount: type === "debit" ? vh.DebitLC : vh.CreditLC,
                amount: type === "debit" ? vh.DebitVC : vh.CreditVC,
                type: type,
                narration: v.Narration,
                accountType: v.GL_COA.GL_COASubCategory.SubCategory,
                VoucherId: result3.dataValues.id,
                ChildAccountId: CAID
              }
      
              const result4 = await Voucher_Heads.create(voucher_head)
              // result4?console.log(result4.dataValues):null
      
            }
          }
        }
      }

      processedInvoices.push(result.dataValues)
    }

    res.json({ status: "success", result: processedInvoices });
  } catch (e) {
    console.error("Error in importVouchers:", e);
    res.status(500).json({ status: "error", result: e });
  }
});

routes.post("/importV", async (req, res) => {
  try{
    const accounts = await Child_Account.findAll({ include: Parent_Account });
    const accountMap = new Map();
    accounts.forEach((a) => {
      const companyId = a.Parent_Account?.CompanyId;
      if (companyId) {
        accountMap.set(`${a.title}-${companyId}`, { id: a.id, subCategory: a.subCategory });
      }
    });
    for (let voucher of req.body) {
      let party_Id = 0;
      let party_Name = "";
    
      const companyId = voucher.VoucherNo.includes("SNS") ? 1 : 3;
      const headCOA = voucher.Voucher_Heads[0].GL_COA;
      
      accounts.forEach((account) => {
        if (headCOA?.AccountName === account.title && account.Parent_Account?.CompanyId === companyId) {
          party_Id = account.id;
          party_Name = account.title;
        }
      });
    
      try {
        // console.log(voucher.VoucherNo);
        let v = {
          voucher_No: voucher.VoucherNo.split("-")[2].split("/")[0].replace(/^0+/, ""),
          voucher_Id: voucher.VoucherNo,
          type: voucher.GL_VoucherType.VoucherType,
          vType: voucher.GL_VoucherType.TypeCode,
          currency: voucher.GL_Currencies?.CurrencyCode ?? "PKR",
          exRate: voucher.ExchangeRate,
          costCenter: "KHI",
          partyId: party_Id,
          partyName: party_Name,
          partyType: headCOA?.GL_COASubCategory?.SubCategory || "client",
          CompanyId: companyId,
          voucherNarration: voucher.Narration,
        };
    
        const result3 = await Vouchers.create(v);
    
        for (let vh of voucher.Voucher_Heads) {
          let CAID = 0;
          const type = vh.CreditLC !== 0 ? "credit" : "debit";
    
          const accountKey = `${vh.GL_COA?.AccountName}-${companyId}`;
          if (accountMap.has(accountKey)) {
            CAID = accountMap.get(accountKey).id;
          } else {
            console.warn(`⚠️ No matching account for: ${vh.GL_COA?.AccountName}`);
          }
    
          const voucher_head = {
            defaultAmount: type === "debit" ? vh.DebitLC : vh.CreditLC,
            amount: type === "debit" ? vh.DebitVC : vh.CreditVC,
            type,
            narration: voucher.Narration,
            accountType: headCOA?.GL_COASubCategory?.SubCategory || "client",
            VoucherId: result3.dataValues.id,
            ChildAccountId: CAID,
          };
    
          await Voucher_Heads.create(voucher_head);
        }
      } catch (e) {
        console.error("❌ Failed to import voucher:", voucher.VoucherNo, e);
      }
    }
    
    res.status(200).json({ status: "success", message: "All vouchers imported." });
    
  }catch(e){
    console.error("Error", e)
    res.status(500).json({ status: "error", result: e})
  }
});

module.exports = routes;