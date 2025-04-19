const db = require("../../models"); // Import models
const GL_Voucher = db.GL_Voucher;
const GL_Voucher_Detail = db.GL_Voucher_Detail;
const GL_Currencies = db.GL_Currencies;
const Gen_SubCompanies = db.Gen_SubCompanies;
const GL_COA = db.GL_COA
const Gen_BankSubType = db.Gen_BankSubType
const GL_InvTaxType = db.GL_InvTaxType
const GL_PropertiesLOV = db.GL_PropertiesLOV
const GL_VoucherType = db.GL_VoucherType
const GL_VoucherFormType = db.GL_VoucherFormType
const Gen_TaxFilerStatus = db.Gen_TaxFilerStatus
const Gen_TaxInvNature = db.Gen_TaxInvNature
const GL_ChequeType = db.GL_ChequeType
const GL_Requisition = db.GL_Requisition
const GL_InvMode = db.GL_InvMode;
const GL_Invoices = db.GL_Invoices
const GL_InvAdjustments = db.GL_InvAdjustments;
const GL_COASubCategory = db.GL_COASubCategory;

const express = require("express");
const routes = express.Router();

routes.post("/getAll", async (req, res) => {
    try {
      console.log("Fetching all voucher-related data...");
      
      const [
        Voucher,
        Voucher_Detail,
        Currencies,
        SubCompanies,
        COA,
        BankSubType,
        InvTaxType,
        PropertiesLOV,
        VoucherType,
        VoucherFormType,
        TaxFilerStatus,
        TaxInvNature,
        ChequeType,
        Requisition,
        InvMode,
        Invoices,
        InvAdjustments,
        COASubCategory
      ] = await Promise.all([
        GL_Voucher.findAll(),
        GL_Voucher_Detail.findAll(),
        GL_Currencies.findAll(),
        Gen_SubCompanies.findAll(),
        GL_COA.findAll(),
        Gen_BankSubType.findAll(),
        GL_InvTaxType.findAll(),
        GL_PropertiesLOV.findAll(),
        GL_VoucherType.findAll(),
        GL_VoucherFormType.findAll(),
        Gen_TaxFilerStatus.findAll(),
        Gen_TaxInvNature.findAll(),
        GL_ChequeType.findAll(),
        GL_Requisition.findAll(),
        GL_InvMode.findAll(),
        GL_Invoices.findAll(),
        GL_InvAdjustments.findAll(),
        GL_COASubCategory.findAll()
      ]);
  
      console.log("✅ Data fetched successfully");

      Voucher.forEach((voucher) => {
        if(voucher.VoucherNo == "SNS-CN-00028/25") {
          console.log('voucher', voucher.VoucherNo)
        }
      })
  
      res.json({
        Voucher,
        Voucher_Detail,
        Currencies,
        SubCompanies,
        COA,
        BankSubType,
        InvTaxType,
        PropertiesLOV,
        VoucherType,
        VoucherFormType,
        TaxFilerStatus,
        TaxInvNature,
        ChequeType,
        Requisition,
        InvMode,
        Invoices,
        InvAdjustments,
        COASubCategory
      });
  
    } catch (error) {
      console.error("❌ Error fetching voucher data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  

module.exports = routes;
