const moment = require("moment");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const routes = require('express').Router();
const { Accounts } = require('../../models/');
const { Invoice } = require("../../functions/Associations/incoiceAssociations");
const { Vouchers, Voucher_Heads } = require("../../functions/Associations/voucherAssociations");
const { Client_Associations, Clients } = require('../../functions/Associations/clientAssociation');
const { Vendor_Associations, Vendors } = require('../../functions/Associations/vendorAssociations');
const { Child_Account, Parent_Account } = require("../../functions/Associations/accountAssociations");
const { SE_Job, SE_Equipments, Bl, Container_Info } = require("../../functions/Associations/jobAssociations/seaExport");

//Voucher Types
// (For Jobs)
// Job Reciept 
// Job Recievable 
// Job Payment 
// Job Payble 
// (For Expense)
// Expenses Payment 

async function getAllAccounts(id){
  let result;
  result = await Accounts.findAll({
    attributes:['id', 'title'],
    include:[{
      model:Parent_Account,
      where:{CompanyId:id},
      attributes:['id', 'title', 'editable', 'AccountId', 'CompanyId', 'code'],
      include:[{
        model:Child_Account,
        attributes:['id', 'title', 'ParentAccountId', 'createdAt', 'editable', 'code', 'subCategory'],
        order: [['id', 'DESC']],
      }]
    }]
  });
  return result;
};

async function getAccount(id){
  let result;
  result = await Child_Account.findOne({
    attributes:['id', 'title'],
    
    where:{id:id}
  });
  return result;
}


routes.post("/createParentAccount", async(req, res) => {
  try {
    const result = await Parent_Account.findOne({
      where: {
        [Op.and]: [
          { title: req.body.title },
          { CompanyId: req.body.CompanyId },
          { AccountId: req.body.AccountId }
        ]
      }
    })
    if(result){
      res.json({status:'exists', result:result});
    }else{
      const code = req.body.CompanyId.toString()+req.body.AccountId.toString();
      const result1 = await Parent_Account.findOne({
        where: {
          code: {
            [Op.like]: `${code}%`
          }
        },
        order: [['code', 'DESC']],
      });
      
      let newCode = 0
      if(result1){
        newCode = parseInt(result1.dataValues.code)+1
      }else{
        newCode = parseInt(code)*100
        newCode++
      }
      let values = req.body
      values.editable=0
      values.code=newCode.toString()
      const result2 = await Parent_Account.create(values);
      let val;
      val = await Parent_Account.findOne({
        where: {
          code: newCode.toString()
        }
      });
      res.json({status:'success', result:val});
    }
  }
  catch (error) {
    console.log(error)
    res.json({status:'error', result:error});
  }
});

routes.post("/createChildAccount", async(req, res) => {
  try {
    const result = await Child_Account.findOne({
      where: {
        [Op.and]: [
          { title: req.body.title },
          { ParentAccountId: req.body.ParentAccountId }
        ]
      }
    })
    if(result){
       res.json({status:'exists'});
    }else{
      const result1 = await Parent_Account.findOne({
        where: {
          id: req.body.ParentAccountId
        },
      });
      const code = result1.dataValues.code
      const result2 = await Child_Account.findOne({
        where: {
          code: {
            [Op.gte]: (parseInt(code)* 10000).toString(),  
            [Op.lt]: ((parseInt(code)+1) * 10000).toString()
          }
        },
        order: [['code', 'DESC']],
      });
      let newCode = 0
      if(result2){
        newCode=parseInt(result2.dataValues.code)+1
      }else{
        newCode = (parseInt(code)*10000)+1
      }

      let values = req.body
      values.subCategory = req.body.category
      values.editable=0
      values.code=newCode.toString()
      values.ParentAccountId = req.body.ParentAccountId
      const result3 = await Child_Account.create(values);
      let val;
      val = await Child_Account.findOne({
        where:{
          code: newCode.toString()
        }
      })
      res.json({status:'success', result:val});
    }
  }
  catch (error) {
    console.error(error)
    res.json({status:'error', result:error});
  }
});

routes.post("/editParentAccount", async(req, res) => {

  const {id, title, AccountId, CompanyId} = req.body
  try {
    const result = await Parent_Account.findOne({where:{title, AccountId, CompanyId}})
    if(result){
      res.json({status:'exists', result:result});
    }else{
      await Parent_Account.update({title:title},{where:{id:id}})
      let val;
      val = await getAllAccounts(CompanyId);
      res.json({status:'success', result:val});
    }
  }
  catch (error) {
    res.send({status:'error', result:error});
  }
});

routes.post("/editChildAccount", async(req, res) => {

  const {id, title, ParentAccountId, CompanyId} = req.body
  try {
    const result = await Child_Account.findOne({where:{title, ParentAccountId}})
    if(result){
      res.json({status:'exists', result:result});
    }else{
      await Child_Account.update({title:title},{where:{id:id}})
      let val;
      val = await getAllAccounts(CompanyId);
      res.json({status:'success', result:val});
    }
  }
  catch (error) {
    res.send({status:'error', result:error});
  }
});

routes.post("/codeParentAccount", async(req, res) => {

  const {id, title, AccountId, CompanyId, code} = req.body
  try {
    result = false
    if(result){
      res.json({status:'exists', result:result});
    }else{
      await Parent_Account.update({title:title, code:code},{where:{id:id}})
      let val;
      val = await getAllAccounts(CompanyId);
      res.json({status:'success', result:val});
    }
  }
  catch (error) {
    res.send({status:'error', result:error});
  }
});

routes.post("/codeChildAccount", async(req, res) => {

  const {id, title, ParentAccountId, CompanyId, code} = req.body
  try {
    let result = false
    if(result){
      res.json({status:'exists', result:result});
    }else{
      await Child_Account.update({title:title, code:code},{where:{id:id}})
      let val;
      val = await getAllAccounts(CompanyId);
      res.json({status:'success', result:val});
    }
  }
  catch (error) {
    res.send({status:'error', result:error});
  }
});

routes.get("/getAllAccounts", async(req, res) => {
  try {
    let result;
    result = await getAllAccounts(req.headers.id);
    res.json({status:'success', result:result});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});

routes.get("/getAccount", async(req, res) => {
  try {
    let result;
    result = await getAccount(req.headers.id);
    res.json({status:'success', result:result});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});

routes.get("/getAccountsForTransaction", async(req, res) => {
    let obj = { };
    let ChildObj = { };
    if(req.headers.type=="Bank") {
        ChildObj = {subCategory:'Bank'}
        obj.CompanyId = req.headers.companyid
      } else if(req.headers.type=="Cash"){
        obj.CompanyId = req.headers.companyid
      ChildObj = {subCategory:'Cash'}
    } else if(req.headers.type=='Adjust') {
        obj.CompanyId = req.headers.companyid
        ChildObj = {subCategory:'General'}
        //   obj = {
        //     [Op.and]: [
        //       { title: { [Op.ne]: "Cash" } },
        //       { title: { [Op.ne]: "Accounts Recievable" } },
        //       { title: { [Op.ne]: "Accounts Payble" } },
        //       { title: { [Op.ne]: "Bank" } }
        //     ]
        //   }
    } else if(req.headers.type=='officevouchers') { 
      obj = {
        [Op.and]: [
          { title: { [Op.ne]: "Cash" } },
          { title: { [Op.ne]: "Accounts Recievable" } },
          { title: { [Op.ne]: "Accounts Payble" } },
          { title: { [Op.ne]: "Bank" } },
          { title: { [Op.ne]: "Income" } }, 
          { title: { [Op.ne]: "Selling Expense" } },
          { title: { [Op.ne]: "Taxes" } },
          { title: { [Op.ne]: "Bad Debts" } },
          { title: { [Op.ne]: "Charges" } },
          { title: { [Op.ne]: "Gain & Loss" } },
        ]
      }
    } else if(req.headers.type=='Charges') {
        ChildObj = {subCategory:'General'}
    } else if(req.headers.type=='Taxes') {
        ChildObj = {subCategory:'General'}
    } else if(req.headers.type=='Income' || 'Selling Expense') {
      obj = {
        title:req.headers.type,
        CompanyId:parseInt(req.headers.companyid),
      }
    } else {
      obj = { title:req.headers.type }
    }
    try {
      const result = await Child_Account.findAll({
        where:ChildObj,
        include:[{
          model:Parent_Account,
          attributes:['title', 'CompanyId'],
          where:obj,
          include:[{
            model:Accounts
          }]
        }]
      });
      res.json({status:'success', result:result});
    }
    catch (error) {
      res.json({status:'error', result:error});
    }
});

routes.get("/getAccountsForTransactionVouchers", async(req, res) => {
  let obj = { };
  let ChildObj = { };
  if(req.headers.type=="Bank") {
      ChildObj = {subCategory:'Bank'}
    } else if(req.headers.type=="Cash"){
    obj = {
    }
    ChildObj = {subCategory:'Cash'}
  } else if(req.headers.type=='Adjust') {
      ChildObj = {subCategory:'General'}
  } else if(req.headers.type=='All') {

  } else if(req.headers.type=='officevouchers') { 
    obj = {
      [Op.and]: [
        { title: { [Op.ne]: "Cash" } },
        { title: { [Op.ne]: "Accounts Recievable" } },
        { title: { [Op.ne]: "Accounts Payble" } },
        { title: { [Op.ne]: "Bank" } },
        { title: { [Op.ne]: "Income" } }, 
        { title: { [Op.ne]: "Selling Expense" } },
        { title: { [Op.ne]: "Taxes" } },
        { title: { [Op.ne]: "Bad Debts" } },
        { title: { [Op.ne]: "Charges" } },
        { title: { [Op.ne]: "Gain & Loss" } },
      ]
    }
  } else if(req.headers.type=='Charges') {
      ChildObj = {subCategory:'General'}
  } else if(req.headers.type=='Taxes') {
      ChildObj = {subCategory:'General'}
  } else if(req.headers.type=='Income' || 'Selling Expense') {
    obj = {
      title:req.headers.type,
      CompanyId:req.headers.companyid,
    }
  }else {
    obj = { 
      title:req.headers.type,
      CompanyId:req.headers.companyid
    }
  }
  try {
    const result = await Child_Account.findAll({
      where:ChildObj,
      include:[{
        model:Parent_Account,
        attributes:['title', 'CompanyId'],
        where:{...obj, CompanyId:req.headers.companyid},
        include:[{
          model:Accounts
        }]
      }]
    });
    res.json({status:'success', result:result});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});

routes.get("/getAllChilds", async(req, res) => {
  try {
    const result = await Child_Account.findAll({
      attributes:["title", "id","code","subCategory"],
      include:[{
        model:Parent_Account,
        where:{CompanyId:req.headers.companyid},
        attributes:["title"]
      }]
    });
    res.json({status:'success', result:result});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});

routes.get("/getAllParents", async(req, res) => {
  try {
    const result = await Parent_Account.findAll({
      attributes:["title", "id","code"],
      where:{CompanyId:req.headers.companyid},
    });
    res.json({status:'success', result:result});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});

routes.get("/getAllParentswithChildsbyAccountId", async(req, res) => {
  try{
    const result = await Parent_Account.findAll({
      attributes:["title", "id", "code", "AccountId"],
      where:{CompanyId:req.headers.companyid},
      include:[{
        model:Child_Account,
        attributes:["title", "id", "code"],
      }]
    })
    res.json({status: 'success', result: result})
  }
  catch (error) {

  }
});

routes.get("/getSEJobChilds", async(req, res) => {
  try {

    const result = await Child_Account.findAll({
      attributes:["title", "id"],
      where:{title:JSON.parse(req.headers.title)},
      include:[{
        model:Parent_Account,
        where:{CompanyId:req.headers.companyid},
        attributes:["title", "CompanyId"]
      }]
    });

    res.json({status:'success', result:result});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});

routes.get("/getSEJobPartyChilds", async(req, res) => {
  const clientObj = {
    model:Client_Associations,
    where:{CompanyId:req.headers.companyid, ClientId:req.headers.clientid},
    attributes:["id"],
    include:[{
      model:Child_Account,
      attributes:["id", "title"],
    }]
  }
  const vendorObj = {
    model:Vendor_Associations,
    where:{CompanyId:req.headers.companyid, VendorId:req.headers.clientid},
    include:[{
      model:Child_Account,
      attributes:["id", "title"],
    }]
  }
  try {
    const result = await Parent_Account.findOne({
      where:{
        title:req.headers.title,
        CompanyId:req.headers.companyid,
      },
      attributes:["id"],
      include:[req.headers.partytype=="vendor"?vendorObj:clientObj]
    });

    res.json({status:'success', result:req.headers.partytype!="vendor"? result.Client_Associations[0].Child_Account : result.Vendor_Associations[0].Child_Account });
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});

routes.get("/childForJobApproval", async(req, res) => {
  const clientObj = {
    model:Client_Associations,
    where:{CompanyId:req.headers.companyid, ClientId:req.headers.clientid},
    attributes:["id"],
    include:[{
      model:Child_Account,
      attributes:["id", "title"],
    }]
  }
  const vendorObj = {
    model:Vendor_Associations,
    where:{CompanyId:req.headers.companyid, VendorId:req.headers.clientid},
    include:[{
      model:Child_Account,
      attributes:["id", "title"],
    }]
  }
  try {
    const result = await Parent_Account.findOne({
      where:{
        //title:req.headers.title,
        CompanyId:req.headers.companyid,
      },
      attributes:["id"],
      include:[req.headers.partytype=="vendor"?vendorObj:clientObj]
    });

    res.json({status:'success', result:req.headers.partytype!="vendor"? result.Client_Associations[0].Child_Account : result.Vendor_Associations[0].Child_Account });
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});

routes.get("/balanceSheet", async(req, res) => {
  try {
    const resultOne = await Accounts.findAll({
      attributes:["title"],
      where:{
        id:3//[ 5,4,3 ]
      },
      include:[{
        model:Parent_Account,
        where:{ CompanyId:req.headers.companyid },
        attributes:["title"],
        include:[{
          model:Child_Account,
          attributes:["title"],
          include:[{
            model:Voucher_Heads,
            attributes:["amount", "type"],
            include:[{
              model:Vouchers,
              attributes:["id"],
              where:{}
            }],
          }]
        }]
      }]
    });
    const resultTwo = await Accounts.findAll({
      attributes:["title"],
      where:{id:4},
      include:[{
        model:Parent_Account,
        where:{ CompanyId:req.headers.companyid },
        attributes:["title"],
        include:[{
          model:Child_Account,
          attributes:["title"],
          include:[{
            model:Voucher_Heads,
            attributes:["amount", "type"],
            include:[{
              model:Vouchers,
              attributes:["id"],
              where:{}
            }]
          }]
        }]
      }]
    });
    const capital = await Accounts.findAll({
      attributes:["title"],
      where:{id:5},
      include:[{
        model:Parent_Account,
        where:{ CompanyId:req.headers.companyid, title:"Capitals" },
        attributes:["title"],
        include:[{
          model:Child_Account,
          attributes:["title"],
          include:[{
            model:Voucher_Heads,
            attributes:["amount", "type"],
            include:[{
              model:Vouchers,
              attributes:["id"],
              where:{}
            }]
          }]
        }]
      }]
    });
    const drawings = await Accounts.findAll({
      attributes:["title"],
      where:{id:5},
      include:[{
        model:Parent_Account,
        where:{ CompanyId:req.headers.companyid, title:"Drawings" },
        attributes:["title"],
        include:[{
          model:Child_Account,
          attributes:["title"],
          include:[{
            model:Voucher_Heads,
            attributes:["amount", "type"],
            include:[{
              model:Vouchers,
              attributes:["id"],
              where:{}
            }]
          }]
        }]
      }]
    });
    const selling = await Accounts.findAll({
      attributes:[ "title" ],
      where:{id:[3]},
      include:[{
        model:Parent_Account,
        where:{ CompanyId:req.headers.companyid, title:["Cash", "Bank"] },
        attributes:[ "title" ],
        include:[{
          model:Child_Account,
          attributes:[ "title" ],
          include:[{
            model:Voucher_Heads,
            attributes:[ "amount", "type" ],
            include:[{
              model:Vouchers,
              where:{type:["Job Reciept"]},
              attributes:["id", "voucher_Id", "type"]
            }]
          }]
        }]
      }]
    });
    const costing = await Accounts.findAll({
      attributes:[ "title" ],
      where:{id:[3]},
      include:[{
        model:Parent_Account,
        where:{ CompanyId:req.headers.companyid, title:["Cash", "Bank"] },
        attributes:["title"],
        include:[{
          model:Child_Account,
          attributes:["title"],
          include:[{
            model:Voucher_Heads,
            attributes:["amount", "type"],
            include:[{
              model:Vouchers,
              where:{type:["Job Payment", "Expenses Payment"]},
              attributes:[ "id", "voucher_Id", "type" ],
            }]
          }]
        }]
      }]
    });
    res.json({ status:'success', 
      result:{
        assets:resultOne,
        liabilities:resultTwo,
        capital:capital,
        drawings:drawings,
        selling:selling,
        costing:costing,
      }
    });
  }
  catch (error) {
    res.json({ status:'error', result:error });
  }
});

routes.get("/voucherLedger", async(req, res) => {
  try {
    const currencyCondition = req.headers.currency!="ALL"?{ currency:req.headers.currency }:null
    const childAccountCondition = req.headers.id
      ? { ChildAccountId: req.headers.id }
      : { ChildAccountId: { [Op.ne]: null } };
      const oldCondition = req.headers.old!=true?{ type: { [Op.ne]: "Opening Invoice" } }:{ type: "Opening Invoice" }
    const result = await Voucher_Heads.count({
      where:{
        ...childAccountCondition,
        ...oldCondition,
        createdAt:{
          [Op.gte]: moment(req.headers.from).toDate(),
          [Op.lte]: moment(req.headers.to).add(1, 'days').toDate(),
        }
      },
      include:{
        model:Vouchers,
        required: false,
        where:{
          CompanyId: req.headers.companyid, 
          ...currencyCondition
        },
      }
    })
    res.json({status:'success', result:result});
  }
  catch (error) {
    console.error(error)
    res.json({status:'error', result:error});
  }
});   

routes.get("/getByDate", async(req, res) => {
  try {
    const result = await Child_Account.findAll({
      where:{ParentAccountId:req.headers.id},
      attributes:['title'],
      include:[
        {
          model:Voucher_Heads,
          where:{
            createdAt: {
              // [Op.gte]: moment(req.headers.from).toDate(),
              [Op.lte]: moment(req.headers.to).add(1, 'days').toDate(),
            }
          },
          attributes:['amount', 'createdAt'],
          include:[{
            model:Vouchers,
            attributes:['voucher_Id', 'vType'],
            where:{}
          }]
        }
      ]
    }) 
    res.json({status:'success', result:result});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});

routes.get("/getLedger", async(req, res) => {
  try {
    const currencyCondition = req.headers.currency!="PKR"?{ currency:req.headers.currency }:null

    const childAccountCondition = req.headers.id!='undefined'
      ? { ChildAccountId: req.headers.id }
      : { ChildAccountId: { [Op.ne]: null } };
      
    // const toDateMoment = moment(req.headers.to, "DD-MM-YYYY", true);

    // if (!toDateMoment.isValid()) {
    //   return res.status(400).json({ status: 'error', message: 'Invalid to date' });
    // }

    // const result = await Voucher_Heads.findAll({
    //   raw: true,
    //   where: {
    //     ...childAccountCondition,
    //     createdAt: {
    //       [Op.lte]: toDateMoment.add(1, "days").toDate(),
    //     },
    //   },
    //   attributes: ['amount', 'type', 'narration', 'createdAt', 'defaultAmount', 'accountType'],
    //   include: [
    //     {
    //       model: Vouchers,
    //       attributes: ['voucher_Id', 'id', 'type', 'currency', 'exRate', 'vType', 'chequeNo', 'chequeDate'],
    //       where: {
    //         ...currencyCondition,
    //         CompanyId: req.headers.company,
    //       },
    //     },
    //     {
    //       model: Child_Account,
    //       attributes: ['title'],
    //     },
    //   ],
    //   order: [["createdAt", "ASC"]],
    // });

    const result = await Voucher_Heads.findAll({
      raw:true,
      where:{
        ...childAccountCondition,
        createdAt:{
          [Op.lte]: moment(req.headers.to, "DD-MM-YYYY", true).add(1, "days").toDate(),
        },

      },
      attributes:['amount', 'type', 'narration', 'createdAt', 'defaultAmount', 'accountType'],
      include:[{
        model:Vouchers,
        attributes:['voucher_Id', 'id', 'type', 'currency', 'exRate', 'vType', 'chequeNo', 'chequeDate'],
        where:{
          ...currencyCondition,
          CompanyId: req.headers.company,
        }
      },
      {
        model:Child_Account,
        attributes:['title'],
      }],
      order:[["createdAt","ASC"]],
    })
    
    res.json({status:'success', result:result});
  } catch (error) {
    console.log(error)
    res.json({status:'error', result:error});
  }
});

routes.get("/getLedgerClosingBalance", async(req, res) => {
  try {
    const result = await Voucher_Heads.findAll({
      raw:true,
      where:{
        ChildAccountId:req.headers.id
      },
      attributes:['amount', 'type', 'defaultAmount'],
      include:[{
        model:Vouchers,
        attributes:['voucher_Id', 'id', 'type', 'currency', 'exRate', 'vType'],
      }],
    })
    res.json({status:'success', result:result});
  } catch (error) {
    res.json({status:'error', result:error});
  }
});

routes.get("/parentAccounts", async(req, res) => {
  try {
    const results = await Parent_Account.findAll({where: {CompanyId : req.headers.id}})
    
      res.json({status:'success', result:results});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});

routes.post("/accountCreate", async(req, res) => {
  let obj = req.body;
  try { 
    for (let i = 1; i <= 3; i++) {
      let newObj = [];
      await obj.forEach((x) => {
        newObj.push({...x, CompanyId:i, editable:'0'});
      })
      await newObj.forEach(async(x) => {
        const result = await Parent_Account.create(x)
        if(x.childAccounts.length > 0) {
          let tempAccounts = [];
          await x.childAccounts.forEach(async(y) => {
            await tempAccounts.push({...y, ParentAccountId:result.id});
          })
          await Child_Account.bulkCreate(tempAccounts).catch((z)=>console.log(z));
        }
      });
    }
    await res.json({status:'success'});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});

routes.post("/createOpeningBalances", async(req, res) => {

  const setVoucherHeads = (id, heads) => {
    let result = [];
    heads.forEach((x) => {
      result.push({
        ...x,
        VoucherId: id,
        amount: `${x.amount}`,
        createdAt:moment().month() < 6
        ? moment().subtract(1, 'year').startOf('year').month(5).endOf('month')
        : moment().startOf('year').month(5).endOf('month'),
      });
    });
    return result;
  };

  try {
    const check = await Vouchers.findOne({
      order:[["voucher_No","DESC"]],
      attributes:["voucher_No"],
      where:{ vType: req.body.vType}
    });
    const result = await Vouchers.create({
      ...req.body,
      createdAt: moment().month() < 6
      ? moment().subtract(1, 'year').startOf('year').month(5).endOf('month')
      : moment().startOf('year').month(5).endOf('month'),
      CompanyId:req.body.companyId,
      voucher_No: check == null ? 1 : parseInt(check.voucher_No) + 1,
      voucher_Id: `${
        req.body.companyId == 1 ?
          "SNS" :
          req.body.companyId == 2?
              "CLS" : "ACS"
          }-${req.body.vType}-${
          check == null ? 1 : parseInt(check.voucher_No) + 1
          }/${moment().format("YY")
      }`,
    });
    let dataz = await setVoucherHeads(result.id, req.body.Voucher_Heads);
    console.log(dataz)
    await Voucher_Heads.bulkCreate(dataz);
    res.json({status:'success', result});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});

routes.get("/getOpeningBalances", async(req, res) => {
  try {
    const results = await Vouchers.findAll({
      where: {
        CompanyId: req.headers.id,
        vType: "OP",
      },
      include: [
        {
          model: Voucher_Heads,
          include: [
            {
              model: Child_Account,
            },
          ],
        },
      ],
    });
    
    res.json({status:'success', result:results});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});

routes.get("/getPartySetupAccounts", async(req, res) => {
  try {
    const parentAccounts = await Parent_Account.findAll({
      attributes:['id', 'title'],
      where:{ [Op.or]: [{AccountId: '3'}, {AccountId:'4'}], CompanyId:1},
      include:[{
        model:Child_Account,
        attributes:['id', 'title']
      }]
    });
    res.json({status:'success', result:parentAccounts});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});



//////////////////// ------------ Backup Routes ----------- /////////////////

routes.post("/deleteAll", async(req, res) => {
  try {
    // await Parent_Account.destroy({where:{}})
    // await Child_Account.destroy({where:{}})
    // await Clients.destroy({where:{}})
    // await Vendors.destroy({where:{}})
    // await Client_Associations.destroy({where:{}})
    // await Vendor_Associations.destroy({where:{}})
    // await Invoice.destroy({where:{}})
    res.json({status:'success'});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});
routes.post("/deleteJobs", async(req, res) => {
  try {
    // await SE_Job.destroy({where:{}})
    // await SE_Equipments.destroy({where:{}})
    // await Bl.destroy({where:{}})
    // await Container_Info.destroy({where:{}})
    res.json({status:'success'});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});
routes.post("/deleteInvoices", async(req, res) => {
  try {
    // const result = await Invoice.destroy({
    //   where:{
    //     companyId:'3',
    //     currency:"USD"
    //   }
    // })
    res.json({status:'success'});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});
routes.post("/testDeleteVouchers", async (req, res) => {
  try {

    // await Vouchers.destroy({where:{}})
    // await Voucher_Heads.destroy({where:{}})
    // await Invoice.destroy({where:{}});
    // await Client_Associations.destroy({where:{}});
    // await Vendor_Associations.destroy({where:{}});
    // await Child_Account.destroy({where:{}});
    // await Parent_Account.destroy({where:{}});

    await res.json({ status: "success"});
  } catch (error) {
    res.json({ status: "error", result: error });
  }
});
routes.post("/countAll", async(req, res) => {
  try {
    const clients = await Clients.count();
    const vendors = await Vendors.count();
    res.json({
      status:'success',
      result:{
        clients,
        vendors
      }
    });
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});
routes.post("/nonGlInBulk", async(req, res) => {

  let obj = req.body;
  try {
    obj.forEach(async(x)=>{
      let value = {...x};
      value.accountRepresentatorId = null;
      value.salesRepresentatorId   = null;
      value.docRepresentatorId     = null;
      value.authorizedById         = null;
      value.createdBy              = "";
      await Clients.create({...value});
    });
    await res.json({status:'success'});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});
routes.post("/createVendorInBulk", async(req, res) => {

  const createAccountList = (parent, id) => {
    let result = [];
    parent.forEach((x)=>{
      x.dataValues.Child_Accounts.forEach((y)=>{
        result.push({ParentAccountId:x.id, ChildAccountId:y.dataValues.id, CompanyId:x.CompanyId, VendorId:id})
      })
    })
    return result;
  }
  let obj = req.body;
  try {
    obj.forEach(async(x)=>{    
      let accountCheck = await Parent_Account.findAll({
        where:{title:x.account.parent},
        attributes:['id', 'title', 'CompanyId'],
        include:[{
          model:Child_Account,
          where:{title:x.account.account_title},
          attributes:['id', 'title'],
        }]
      })
      let value = {...x};
      value.accountRepresentatorId = null;
      value.salesRepresentatorId   = null;
      value.docRepresentatorId     = null;
      value.authorizedById         = null;
      value.createdBy              = "";
      let result = await Vendors.create({...value});
      Vendor_Associations.bulkCreate(createAccountList(accountCheck, result.dataValues.id))
    });
    await res.json({status:'success'});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});
routes.post("/createClientInBulk", async(req, res) => {

  const createAccountList = (parent, id) => {
    let result = [];
    parent.forEach((x)=>{
      x.dataValues.Child_Accounts.forEach((y)=>{
        result.push({ParentAccountId:x.id, ChildAccountId:y.dataValues.id, CompanyId:x.CompanyId, ClientId:id})
      })
    })
    return result;
  }

  let obj = req.body;
  try {
    obj.forEach(async(x) => {
      let accountCheck = await Parent_Account.findAll({
        where:{title:x.account.parent},
        attributes:['id', 'title', 'CompanyId'],
        include:[{
          model:Child_Account,
          where:{title:x.account.account_title},
          attributes:['id', 'title'],
        }]
      });
      let value = {...x};
      value.accountRepresentatorId = null;
      value.salesRepresentatorId   = null;
      value.docRepresentatorId     = null;
      value.authorizedById         = null;
      value.createdBy              = "";
      let result = await Clients.create({...value});
      Client_Associations.bulkCreate(createAccountList(accountCheck, result.dataValues.id));
    })
    await res.json({status:'success'});
  }
  catch (error) {
    res.json({status:'error', result:error});
  }
});
routes.post("/importAccounts", async(req, res) => {
  try{
    let obj = req.body;
    const accounts = await Accounts.findAll()
    for(let x of obj.pAccounts){
      let parentId = 0
      accounts.forEach((y) => {
        if(x.Parent.AccountName==y.title){
          parentId = y.id
        }
      })
      let temp = {
        title:x.AccountName,
        editable: 0,
        AccountId: parentId,
      }
      await Parent_Account.create({
        ...temp,
        CompanyId: 1
      })
      await Parent_Account.create({
        ...temp,
        CompanyId: 3
      })
    }

    const pAccounts = await Parent_Account.findAll()

    for(let x of obj.cAccounts){
      let parentId = 0
      for(let y of pAccounts){
        // console.log(x.Parent.AccountName, y.title)
        if(x.Parent.AccountName==y.title){
          parentId = y.id
          let temp = {
            title:x.AccountName,
            editable: 0,
            subCategory: x.SubCategory?x.SubCategory.SubCategory:"General",
            ParentAccountId: parentId,
          }
          await Child_Account.create({
            ...temp,
          })
        }
      }
    }
    res.json({status:'success'});
  }catch(error){
    console.error(error)
    res.json({status:'error', result:error});
  }
})

module.exports = routes;
