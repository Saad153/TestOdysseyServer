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

const setVoucherHeads = (id, heads) => {
  let result = [];
  heads.forEach((x) => {
    result.push({
      ...x,
      VoucherId: id,
      amount: `${x.amount}`
    });
  });
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

routes.get("/getAllVoucehrHeads", async (req, res) => {
  try{
    const result = await Voucher_Heads.findAll({
      include: [
        {
          model: Vouchers,
        },
      ],
    });
    
    res.json({ status: "success", result: result });
  }catch (error) {
    console.log(error)
    res.json({ status: "error", result: error });
  }
})

routes.post("/voucherCreation", async (req, res) => {
  try {
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
      let dataz = await setVoucherHeads(result.id, req.body.Voucher_Heads);
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
        }
    },
    
      include: [{
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
    for(let x of trans){
      // console.log(">>",x.dataValues)
      const updateInvoice = await Invoice.update(
        {
          recieved: "0",
          paid: "0",
          status: "1",
        },
        {where:{ id:x.dataValues.InvoiceId}}
      )
      // console.log(">",updateInvoice)
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
    console.log(req.body.invoices)
    let invoices = req.body.invoices;
    let invoicesList = ""
    let narration  = ""
    // console.log("Req Body PayType>>>===", req.body.payType)
    if(req.body.totalReceiving>0){
      narration = `Received ${req.body.subType}`
    }else{
      narration = `Paid ${req.body.subType}`
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
        voucherNarration: req.body.narration
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
        where: { ClientId: req.body.partyId }
      })
    }else{
      account = await Vendor_Associations.findOne({
        where: { VendorId: req.body.partyId }
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
              ChildAccountId: account.ChildAccountId,
              narration: req.body.narration==""?narration:req.body.narration
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
                ChildAccountId: account.ChildAccountId,
                narration: req.body.narration==""?narration:req.body.narration
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
                narration: req.body.narration==""?narration:req.body.narration
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
              amount: req.body.totalReceiving,
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
        let b = await Invoice_Transactions.create(
          {
            gainLoss: req.body.gainLoss,
            amount: req.body.totalReceiving,
            InvoiceId: x.id,
            VoucherId: vID
            
          }
        )
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

module.exports = routes;