const db = require("../../models"); // Import models
const GL_COA = db.GL_COA;
const GL_COASubCategory = db.GL_COASubCategory;
const GL_COACategory = db.GL_COACategory;
const GL_Voucher_Detail = db.GL_Voucher_Detail;

const express = require("express");
const routes = express.Router();

routes.post("/getAll", async (req, res) => {
  try {

    const COA = await GL_COA.findAll();
    const COASubCategory = await GL_COASubCategory.findAll()
    const COACategory = await GL_COACategory.findAll()
    let temp = []
    COA.forEach((account)=>{
        let temp1 = {
          ...account.dataValues,
          SubCategory: COASubCategory.find((x) => x.Id === account.SubCategoryId),
          Category: COACategory.find((x) => x.Id === account.CategoryId),
        }
        temp.push(temp1)
    })
    let accounts = []
    let pAccounts = []
    let cAccounts = []
    temp.forEach((x, i)=>{
      if(!x.ParentAccountId){
        accounts.push(x)
      }
    })
    temp.forEach((x, i)=>{
      accounts.forEach((y, j)=>{
        if(x.ParentAccountId==y.Id){
          x.Parent = y
          pAccounts.push(x)
        }
      })
    })
    temp.forEach((x, i)=>{
      pAccounts.forEach((y, j)=>{
        if(x.ParentAccountId==y.Id){
          x.Parent = y
          cAccounts.push(x)
        }
      })
    })
    temp.forEach((x, i)=>{
      cAccounts.forEach((y, j)=>{
        if(x.ParentAccountId==y.Id){
          x.ParentAccountId=y.ParentAccountId
          x.Parent = y.Parent
          cAccounts.push(x)
        }
      })
    })
    for(let x of pAccounts){
      const result = await GL_Voucher_Detail.findOne({
        where:{
          COAAccountId: x.Id
        }
      })
      if(result){
        // x.ParentAccountId = x.Id
        // x.Parent = x
        let temp = {
          ...x,
          ParentAccountId: x.Id,
          Parent: x
        }
        cAccounts.push(temp)
      }
    }
    
    res.json({ accounts, pAccounts, cAccounts });
  } catch (error) {
    console.error("Error fetching GL_COA:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = routes;
