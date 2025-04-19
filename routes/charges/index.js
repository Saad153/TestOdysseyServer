const db = require("../../models"); // Import models
const Gen_Charges = db.Gen_Charges;
const GL_Currencies = db.GL_Currencies;
// const Gen_Charges_Category = db.Gen_Charges_Category;
const Gen_ChargesVATCategory = db.Gen_ChargesVATCategory
// const TPGL_Account_List = db.TPGL_Account_List
const Gen_ChargesNature = db.Gen_ChargesNature
// const Gen_Parties = db.Gen_Parties
const Gen_ChargesReportingGroup = db.Gen_ChargesReportingGroup

const express = require("express");
const routes = express.Router();

routes.post("/getAll", async (req, res) => {
  try {

    const charges = await Gen_Charges.findAll();
    const currencies = await GL_Currencies.findAll();
    // const catagory = await Gen_Charges_Category.findAll();
    const VATCategory = await Gen_ChargesVATCategory.findAll();
    // const TPGL_Accounts = await TPGL_Account_List.findAll();
    const ChargesNature = await Gen_ChargesNature.findAll();
    // const Parties = await Gen_Parties.findAll();
    const ChargesReportingGroup = await Gen_ChargesReportingGroup.findAll();
    let temp = []
    charges.forEach((charge)=>{
        let temp1 = {
          ...charge.dataValues,
          GL_Currencies: currencies.find((currency) => currency.Id === charge.CurrencyId),
          // Gen_Charges_Category: catagory.find((category) => category.Id === charge.ChargesCatagoryId),
          Gen_ChargesVATCategory: VATCategory.find((vatcategory) => vatcategory.Id === charge.VATCategoryId),
          // TPGL_AccountRevenue: TPGL_Accounts.find((TPGL_Account) => TPGL_Account.Id === charge.TPGL_AccountRevenueId),
          // TPGL_AccountExpense: TPGL_Accounts.find((TPGL_Account) => TPGL_Account.Id === charge.TPGL_AccountExpenseId),
          ChargesNature: ChargesNature.find((ChargesNatures) => ChargesNatures.Id === charge.ChargesNatureId),
          // Carrier: Parties.find((Party) => Party.Id === charge.CarrierId),
          // CustVend: Parties.find((Party) => Party.Id === charge.CustVendId),
          ReportingGroup: ChargesReportingGroup.find((x) => x.Id === charge.ReportingGroupId),
        }
        temp.push(temp1)
    })
    res.json(temp);
  } catch (error) {
    console.error("Error fetching Gen_Charges:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = routes;
