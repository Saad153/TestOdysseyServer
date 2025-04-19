var DataTypes = require("sequelize").DataTypes;
var _AExp_AirExportJob = require("./AExp_AirExportJob");
var _AExp_AirExportJob_AWBReleaseLog = require("./AExp_AirExportJob_AWBReleaseLog");
var _AExp_AirExportJob_ChargesPayb = require("./AExp_AirExportJob_ChargesPayb");
var _AExp_AirExportJob_ChargesPayb_History = require("./AExp_AirExportJob_ChargesPayb_History");
var _AExp_AirExportJob_ChargesPayb_TaxExpShare = require("./AExp_AirExportJob_ChargesPayb_TaxExpShare");
var _AExp_AirExportJob_ChargesRecv = require("./AExp_AirExportJob_ChargesRecv");
var _AExp_AirExportJob_ChargesRecv_History = require("./AExp_AirExportJob_ChargesRecv_History");
var _AExp_AirExportJob_ChargesRecv_TaxRevShare = require("./AExp_AirExportJob_ChargesRecv_TaxRevShare");
var _AExp_AirExportJob_ExtMilestone = require("./AExp_AirExportJob_ExtMilestone");
var _AExp_AirExportJob_LastMilestone = require("./AExp_AirExportJob_LastMilestone");
var _AExp_AirExportJob_OrderDetail = require("./AExp_AirExportJob_OrderDetail");
var _AExp_AirExportJob_TracingDoc = require("./AExp_AirExportJob_TracingDoc");
var _AExp_AirExportJob_TracingOpr = require("./AExp_AirExportJob_TracingOpr");
var _AExp_AirwayBillStock = require("./AExp_AirwayBillStock");
var _AExp_AirwayBillStock_Detail = require("./AExp_AirwayBillStock_Detail");
var _AExp_BL = require("./AExp_BL");
var _AExp_BL_Charges = require("./AExp_BL_Charges");
var _AExp_BL_Dimension = require("./AExp_BL_Dimension");
var _AExp_BL_History = require("./AExp_BL_History");
var _AExp_BL_PrintingLog = require("./AExp_BL_PrintingLog");
var _AExp_BL_Stamp = require("./AExp_BL_Stamp");
var _AImp_AirImportJob = require("./AImp_AirImportJob");
var _AImp_AirImportJob_BL = require("./AImp_AirImportJob_BL");
var _AImp_AirImportJob_BLCharges = require("./AImp_AirImportJob_BLCharges");
var _AImp_AirImportJob_BLDimension = require("./AImp_AirImportJob_BLDimension");
var _AImp_AirImportJob_BLPrintingLog = require("./AImp_AirImportJob_BLPrintingLog");
var _AImp_AirImportJob_ChargesPayb = require("./AImp_AirImportJob_ChargesPayb");
var _AImp_AirImportJob_ChargesPayb_History = require("./AImp_AirImportJob_ChargesPayb_History");
var _AImp_AirImportJob_ChargesPayb_TaxExpShare = require("./AImp_AirImportJob_ChargesPayb_TaxExpShare");
var _AImp_AirImportJob_ChargesRecv = require("./AImp_AirImportJob_ChargesRecv");
var _AImp_AirImportJob_ChargesRecv_History = require("./AImp_AirImportJob_ChargesRecv_History");
var _AImp_AirImportJob_ChargesRecv_TaxRevShare = require("./AImp_AirImportJob_ChargesRecv_TaxRevShare");
var _AImp_AirImportJob_ExtMilestone = require("./AImp_AirImportJob_ExtMilestone");
var _AImp_AirImportJob_LastMilestone = require("./AImp_AirImportJob_LastMilestone");
var _AImp_AirImportJob_OrderDetail = require("./AImp_AirImportJob_OrderDetail");
var _AImp_AirImportJob_TracingDoc = require("./AImp_AirImportJob_TracingDoc");
var _AImp_AirImportJob_TracingOpr = require("./AImp_AirImportJob_TracingOpr");
var _AImp_AirImportJob__LastMilestone = require("./AImp_AirImportJob__LastMilestone");
var _AImp_DeliveryOrder = require("./AImp_DeliveryOrder");
var _AImp_ManifestHeader = require("./AImp_ManifestHeader");
var _Access_Levels = require("./Access_Levels");
var _Accounts = require("./Accounts");
var _AssignTasks = require("./AssignTasks");
var _Bls = require("./Bls");
var _CEAS_User = require("./CEAS_User");
var _CEAS_User_CostCenterRight = require("./CEAS_User_CostCenterRight");
var _CEAS_User_SalesRepRight = require("./CEAS_User_SalesRepRight");
var _CEAS_User_SubCompanyRight = require("./CEAS_User_SubCompanyRight");
var _COASCompanyRegistration = require("./COASCompanyRegistration");
var _COAS_VersionScript = require("./COAS_VersionScript");
var _COAS_VersionScriptLog = require("./COAS_VersionScriptLog");
var _CRM_Activity = require("./CRM_Activity");
var _CRM_Event = require("./CRM_Event");
var _CRM_Opportunity = require("./CRM_Opportunity");
var _CRM_Planning = require("./CRM_Planning");
var _CRM_Planning_Detail = require("./CRM_Planning_Detail");
var _CTrk_Activity = require("./CTrk_Activity");
var _CTrk_Activity_Detail = require("./CTrk_Activity_Detail");
var _CTrk_Container = require("./CTrk_Container");
var _CTrk_ContainerActivity = require("./CTrk_ContainerActivity");
var _CTrk_ContainerCycle = require("./CTrk_ContainerCycle");
var _CTrk_ContainerStatus = require("./CTrk_ContainerStatus");
var _CTrk_EdiActivityMap = require("./CTrk_EdiActivityMap");
var _CTrk_Stage = require("./CTrk_Stage");
var _CVHM_GuaranteeFilling = require("./CVHM_GuaranteeFilling");
var _CVHM_GuaranteeFillingContainer = require("./CVHM_GuaranteeFillingContainer");
var _CVHM_GuaranteeType = require("./CVHM_GuaranteeType");
var _CashBookSaveAccount = require("./CashBookSaveAccount");
var _CashDenominationRecording = require("./CashDenominationRecording");
var _Charge_Heads = require("./Charge_Heads");
var _Charges = require("./Charges");
var _Child_Accounts = require("./Child_Accounts");
var _Client_Associations = require("./Client_Associations");
var _Clients = require("./Clients");
var _Commodities = require("./Commodities");
var _Companies = require("./Companies");
var _Container_Infos = require("./Container_Infos");
var _DEPO_Activity = require("./DEPO_Activity");
var _DEPO_ActivityStatus = require("./DEPO_ActivityStatus");
var _DEPO_ActivityStorageType = require("./DEPO_ActivityStorageType");
var _DEPO_ActivityType = require("./DEPO_ActivityType");
var _DEPO_Activity_PaymentMode = require("./DEPO_Activity_PaymentMode");
var _DEPO_BillingMode = require("./DEPO_BillingMode");
var _DEPO_Container = require("./DEPO_Container");
var _DEPO_ContainerActivity = require("./DEPO_ContainerActivity");
var _DEPO_ContainerActivityCharges = require("./DEPO_ContainerActivityCharges");
var _DEPO_ContainerActivityDetailHistory = require("./DEPO_ContainerActivityDetailHistory");
var _DEPO_ContainerActivityType = require("./DEPO_ContainerActivityType");
var _DEPO_ContainerActivity_Detail = require("./DEPO_ContainerActivity_Detail");
var _DEPO_ContainerCondition = require("./DEPO_ContainerCondition");
var _DEPO_ContainerHold = require("./DEPO_ContainerHold");
var _DEPO_ContainerHold_Detail = require("./DEPO_ContainerHold_Detail");
var _DEPO_ContainerHold_RestrictMode = require("./DEPO_ContainerHold_RestrictMode");
var _DEPO_ContainerKind = require("./DEPO_ContainerKind");
var _DEPO_ContainerStatus = require("./DEPO_ContainerStatus");
var _DEPO_LinesTariff = require("./DEPO_LinesTariff");
var _DEPO_LinesTariff_PerDay = require("./DEPO_LinesTariff_PerDay");
var _DEPO_LinesTariff_PerMove = require("./DEPO_LinesTariff_PerMove");
var _DEPO_LoadingType = require("./DEPO_LoadingType");
var _DEPO_Location = require("./DEPO_Location");
var _DEPO_ManufactureCoding = require("./DEPO_ManufactureCoding");
var _DEPO_Receipt = require("./DEPO_Receipt");
var _DEPO_Receipt_Detail = require("./DEPO_Receipt_Detail");
var _DEPO_ShiftSetup = require("./DEPO_ShiftSetup");
var _DEPO_StackingArea = require("./DEPO_StackingArea");
var _DEPO_SubLine = require("./DEPO_SubLine");
var _Delivery_Orders = require("./Delivery_Orders");
var _Dimensions = require("./Dimensions");
var _DocumentSignRequest = require("./DocumentSignRequest");
var _Employees = require("./Employees");
var _EversignDocumentTemplate = require("./EversignDocumentTemplate");
var _GL_AccSecurityGrp = require("./GL_AccSecurityGrp");
var _GL_AccSecurityGrpDetail = require("./GL_AccSecurityGrpDetail");
var _GL_AccSecurityGrpParentDetail = require("./GL_AccSecurityGrpParentDetail");
var _GL_AccSecurityGrpUserRight = require("./GL_AccSecurityGrpUserRight");
var _GL_AccountBalances = require("./GL_AccountBalances");
var _GL_AccountIntegration = require("./GL_AccountIntegration");
var _GL_AccountIntegration_Charges = require("./GL_AccountIntegration_Charges");
var _GL_AccountIntegration_Charges_Log = require("./GL_AccountIntegration_Charges_Log");
var _GL_AccountIntegration_Common = require("./GL_AccountIntegration_Common");
var _GL_AccountIntegration_Common_Log = require("./GL_AccountIntegration_Common_Log");
var _GL_AccountIntegration_PartyParent = require("./GL_AccountIntegration_PartyParent");
var _GL_AccountIntegration_PartyParent_Log = require("./GL_AccountIntegration_PartyParent_Log");
var _GL_AccountMode = require("./GL_AccountMode");
var _GL_AccountType = require("./GL_AccountType");
var _GL_AgentInvoice = require("./GL_AgentInvoice");
var _GL_AgentInvoiceOpening = require("./GL_AgentInvoiceOpening");
var _GL_AgentInvoice_Charges = require("./GL_AgentInvoice_Charges");
var _GL_AgentInvoice_Charges_Cont = require("./GL_AgentInvoice_Charges_Cont");
var _GL_AgentInvoice_Charges_Tax = require("./GL_AgentInvoice_Charges_Tax");
var _GL_AgentInvoice_History = require("./GL_AgentInvoice_History");
var _GL_AgentInvoice_History_Charges = require("./GL_AgentInvoice_History_Charges");
var _GL_AgentInvoice_TaxInvoice = require("./GL_AgentInvoice_TaxInvoice");
var _GL_AgentPaymentRequisition = require("./GL_AgentPaymentRequisition");
var _GL_AgentPaymentRequisition_Detail = require("./GL_AgentPaymentRequisition_Detail");
var _GL_AgentReceiptPayment = require("./GL_AgentReceiptPayment");
var _GL_AgentReceiptPayment_Detail = require("./GL_AgentReceiptPayment_Detail");
var _GL_AgentReceiptPayment_History = require("./GL_AgentReceiptPayment_History");
var _GL_AgentReceiptPayment_History_Detail = require("./GL_AgentReceiptPayment_History_Detail");
var _GL_BalanceCIH = require("./GL_BalanceCIH");
var _GL_Budget = require("./GL_Budget");
var _GL_Budget_Detail = require("./GL_Budget_Detail");
var _GL_Budget_Detail_MB = require("./GL_Budget_Detail_MB");
var _GL_CCGroup = require("./GL_CCGroup");
var _GL_CCGroup_CostCenter = require("./GL_CCGroup_CostCenter");
var _GL_COA = require("./GL_COA");
var _GL_COACategory = require("./GL_COACategory");
var _GL_COAPNLCategory = require("./GL_COAPNLCategory");
var _GL_COARule = require("./GL_COARule");
var _GL_COASubCategory = require("./GL_COASubCategory");
var _GL_COA_Bank = require("./GL_COA_Bank");
var _GL_COA_Company = require("./GL_COA_Company");
var _GL_COA_Customer = require("./GL_COA_Customer");
var _GL_COA_Employee = require("./GL_COA_Employee");
var _GL_COA_PartyInfo = require("./GL_COA_PartyInfo");
var _GL_COA_PropertyRule = require("./GL_COA_PropertyRule");
var _GL_COA_Supplier = require("./GL_COA_Supplier");
var _GL_ChequeBookStock = require("./GL_ChequeBookStock");
var _GL_ChequeBookStock_Detail = require("./GL_ChequeBookStock_Detail");
var _GL_ChequeOpening = require("./GL_ChequeOpening");
var _GL_ChequeOpening_Properties = require("./GL_ChequeOpening_Properties");
var _GL_ChequeOpening_VDProperties = require("./GL_ChequeOpening_VDProperties");
var _GL_ChequeStatus = require("./GL_ChequeStatus");
var _GL_ChequeType = require("./GL_ChequeType");
var _GL_Currencies = require("./GL_Currencies");
var _GL_FiscalYear = require("./GL_FiscalYear");
var _GL_FiscalYear_Quarter = require("./GL_FiscalYear_Quarter");
var _GL_InvAdjustments = require("./GL_InvAdjustments");
var _GL_InvAdjustments_History = require("./GL_InvAdjustments_History");
var _GL_InvMode = require("./GL_InvMode");
var _GL_InvTaxType = require("./GL_InvTaxType");
var _GL_InvoiceBalance = require("./GL_InvoiceBalance");
var _GL_Invoices = require("./GL_Invoices");
var _GL_Invoices_History = require("./GL_Invoices_History");
var _GL_Invoices_Properties = require("./GL_Invoices_Properties");
var _GL_Invoices_Properties_History = require("./GL_Invoices_Properties_History");
var _GL_JobBill = require("./GL_JobBill");
var _GL_JobBillOpening = require("./GL_JobBillOpening");
var _GL_JobBillOpening_Advance = require("./GL_JobBillOpening_Advance");
var _GL_JobBill_Charges = require("./GL_JobBill_Charges");
var _GL_JobBill_Charges_Cont = require("./GL_JobBill_Charges_Cont");
var _GL_JobBill_Charges_Tax = require("./GL_JobBill_Charges_Tax");
var _GL_JobBill_History = require("./GL_JobBill_History");
var _GL_JobBill_History_Charges = require("./GL_JobBill_History_Charges");
var _GL_JobBill_TaxInvoice = require("./GL_JobBill_TaxInvoice");
var _GL_JobDirectExpRev = require("./GL_JobDirectExpRev");
var _GL_JobDirectExpRev_Charges = require("./GL_JobDirectExpRev_Charges");
var _GL_JobDirectExpRev_Charges_Tax = require("./GL_JobDirectExpRev_Charges_Tax");
var _GL_JobDirectExpRev_History = require("./GL_JobDirectExpRev_History");
var _GL_JobDirectExpRev_History_Charges = require("./GL_JobDirectExpRev_History_Charges");
var _GL_JobInvoice = require("./GL_JobInvoice");
var _GL_JobInvoiceDispute = require("./GL_JobInvoiceDispute");
var _GL_JobInvoiceOpening = require("./GL_JobInvoiceOpening");
var _GL_JobInvoiceOpening_Advance = require("./GL_JobInvoiceOpening_Advance");
var _GL_JobInvoice_Charges = require("./GL_JobInvoice_Charges");
var _GL_JobInvoice_Charges_Cont = require("./GL_JobInvoice_Charges_Cont");
var _GL_JobInvoice_Charges_Cont_DaysBreakup = require("./GL_JobInvoice_Charges_Cont_DaysBreakup");
var _GL_JobInvoice_Charges_Tax = require("./GL_JobInvoice_Charges_Tax");
var _GL_JobInvoice_History = require("./GL_JobInvoice_History");
var _GL_JobInvoice_History_Charges = require("./GL_JobInvoice_History_Charges");
var _GL_JobInvoice_PaidByClient = require("./GL_JobInvoice_PaidByClient");
var _GL_JobInvoice_TaxInvoice = require("./GL_JobInvoice_TaxInvoice");
var _GL_JobOnlineReceipt = require("./GL_JobOnlineReceipt");
var _GL_JobOnlineReceiptACHAddress = require("./GL_JobOnlineReceiptACHAddress");
var _GL_JobOnlineReceiptBillingAddress = require("./GL_JobOnlineReceiptBillingAddress");
var _GL_JobOnlineReceipt_Detail = require("./GL_JobOnlineReceipt_Detail");
var _GL_JobPayment = require("./GL_JobPayment");
var _GL_JobPaymentRequisition = require("./GL_JobPaymentRequisition");
var _GL_JobPaymentRequisition_Detail = require("./GL_JobPaymentRequisition_Detail");
var _GL_JobPayment_Detail = require("./GL_JobPayment_Detail");
var _GL_JobPayment_History = require("./GL_JobPayment_History");
var _GL_JobPayment_History_Detail = require("./GL_JobPayment_History_Detail");
var _GL_JobReceipt = require("./GL_JobReceipt");
var _GL_JobReceipt_Detail = require("./GL_JobReceipt_Detail");
var _GL_JobReceipt_History = require("./GL_JobReceipt_History");
var _GL_JobReceipt_History_Detail = require("./GL_JobReceipt_History_Detail");
var _GL_JobSecurity = require("./GL_JobSecurity");
var _GL_JobSecurityRefundRequisition = require("./GL_JobSecurityRefundRequisition");
var _GL_JobSecurityTran = require("./GL_JobSecurityTran");
var _GL_JobSecurityTranHistory = require("./GL_JobSecurityTranHistory");
var _GL_JobSettlement = require("./GL_JobSettlement");
var _GL_JobSettlement_Detail = require("./GL_JobSettlement_Detail");
var _GL_ModuleIntegerationSetup = require("./GL_ModuleIntegerationSetup");
var _GL_ModuleIntegrationLog = require("./GL_ModuleIntegrationLog");
var _GL_PaymentType = require("./GL_PaymentType");
var _GL_Periods = require("./GL_Periods");
var _GL_PrincipalManualSOA = require("./GL_PrincipalManualSOA");
var _GL_PrincipalManualSOA_Charges = require("./GL_PrincipalManualSOA_Charges");
var _GL_PrincipalManualSOA_Charges_Cont = require("./GL_PrincipalManualSOA_Charges_Cont");
var _GL_PrincipalManualSOA_Charges_Tax = require("./GL_PrincipalManualSOA_Charges_Tax");
var _GL_PrincipalReceiptPayment = require("./GL_PrincipalReceiptPayment");
var _GL_PrincipalReceiptPayment_Detail = require("./GL_PrincipalReceiptPayment_Detail");
var _GL_PrincipleInvoice = require("./GL_PrincipleInvoice");
var _GL_PrincipleInvoiceOpening = require("./GL_PrincipleInvoiceOpening");
var _GL_PrincipleInvoice_Charges = require("./GL_PrincipleInvoice_Charges");
var _GL_PrincipleInvoice_Charges_Cont = require("./GL_PrincipleInvoice_Charges_Cont");
var _GL_PrincipleInvoice_Charges_Tax = require("./GL_PrincipleInvoice_Charges_Tax");
var _GL_PrincipleInvoice_TaxInvoice = require("./GL_PrincipleInvoice_TaxInvoice");
var _GL_ProcessLog = require("./GL_ProcessLog");
var _GL_Properties = require("./GL_Properties");
var _GL_PropertiesLOV = require("./GL_PropertiesLOV");
var _GL_Properties_Usage = require("./GL_Properties_Usage");
var _GL_RecDateSetup = require("./GL_RecDateSetup");
var _GL_ReconciledData = require("./GL_ReconciledData");
var _GL_ReconciledData_Detail = require("./GL_ReconciledData_Detail");
var _GL_ReconciledLockedData = require("./GL_ReconciledLockedData");
var _GL_Requisition = require("./GL_Requisition");
var _GL_Requisition_Detail = require("./GL_Requisition_Detail");
var _GL_Requisition_Detail_Adj = require("./GL_Requisition_Detail_Adj");
var _GL_Requisition_Detail_SetAdj = require("./GL_Requisition_Detail_SetAdj");
var _GL_RunningDetention = require("./GL_RunningDetention");
var _GL_RunningDetention_Charges = require("./GL_RunningDetention_Charges");
var _GL_RunningDetention_Charges_Cont = require("./GL_RunningDetention_Charges_Cont");
var _GL_RunningDetention_Charges_Cont_DaysBreakup = require("./GL_RunningDetention_Charges_Cont_DaysBreakup");
var _GL_SInsAdjustments = require("./GL_SInsAdjustments");
var _GL_SInsAdjustments_History = require("./GL_SInsAdjustments_History");
var _GL_SettlementBalance = require("./GL_SettlementBalance");
var _GL_SettlementInstrument = require("./GL_SettlementInstrument");
var _GL_SettlementInstrument_History = require("./GL_SettlementInstrument_History");
var _GL_TerminalInvoice = require("./GL_TerminalInvoice");
var _GL_TerminalInvoice_Detail = require("./GL_TerminalInvoice_Detail");
var _GL_UDFHeading = require("./GL_UDFHeading");
var _GL_UnAccruedEquipmentInvoice = require("./GL_UnAccruedEquipmentInvoice");
var _GL_UnAccruedEquipmentInvoice_DaysBreakup = require("./GL_UnAccruedEquipmentInvoice_DaysBreakup");
var _GL_Voucher = require("./GL_Voucher");
var _GL_VoucherFormType = require("./GL_VoucherFormType");
var _GL_VoucherType = require("./GL_VoucherType");
var _GL_VoucherUsageCode = require("./GL_VoucherUsageCode");
var _GL_Voucher_Detail = require("./GL_Voucher_Detail");
var _GL_Voucher_Detail_ChequeInfo = require("./GL_Voucher_Detail_ChequeInfo");
var _GL_Voucher_Detail_History = require("./GL_Voucher_Detail_History");
var _GL_Voucher_Detail_Mem = require("./GL_Voucher_Detail_Mem");
var _GL_Voucher_Detail_PaymentChqInfo = require("./GL_Voucher_Detail_PaymentChqInfo");
var _GL_Voucher_Detail_Properties = require("./GL_Voucher_Detail_Properties");
var _GL_Voucher_Detail_Properties_History = require("./GL_Voucher_Detail_Properties_History");
var _GL_Voucher_Detail_Properties_Mem = require("./GL_Voucher_Detail_Properties_Mem");
var _GL_Voucher_History = require("./GL_Voucher_History");
var _GL_Voucher_Mem = require("./GL_Voucher_Mem");
var _GL_Voucher_Properties = require("./GL_Voucher_Properties");
var _GL_Voucher_Properties_History = require("./GL_Voucher_Properties_History");
var _GL_Voucher_Properties_Mem = require("./GL_Voucher_Properties_Mem");
var _GL_WTHDeposit = require("./GL_WTHDeposit");
var _GL_WTHDeposit_Detail = require("./GL_WTHDeposit_Detail");
var _Gen_AEJobNotes = require("./Gen_AEJobNotes");
var _Gen_AIJobNotes = require("./Gen_AIJobNotes");
var _Gen_APDashboardSetup = require("./Gen_APDashboardSetup");
var _Gen_APIData = require("./Gen_APIData");
var _Gen_APUserDashboardPreference = require("./Gen_APUserDashboardPreference");
var _Gen_ActiveInactiveLog = require("./Gen_ActiveInactiveLog");
var _Gen_ActiveInactiveReason = require("./Gen_ActiveInactiveReason");
var _Gen_ActivityAlerts = require("./Gen_ActivityAlerts");
var _Gen_ActivityAlertsSubscription = require("./Gen_ActivityAlertsSubscription");
var _Gen_ActivityAlertsSubscription_Email = require("./Gen_ActivityAlertsSubscription_Email");
var _Gen_ActivityAlertsSubscription_SMS = require("./Gen_ActivityAlertsSubscription_SMS");
var _Gen_ActivityAlertsSubscription_User = require("./Gen_ActivityAlertsSubscription_User");
var _Gen_AlertType = require("./Gen_AlertType");
var _Gen_BLMandatoryFieldsSetup = require("./Gen_BLMandatoryFieldsSetup");
var _Gen_BLTemplate = require("./Gen_BLTemplate");
var _Gen_BLTemplate_AttachSheets = require("./Gen_BLTemplate_AttachSheets");
var _Gen_BankDetailRegister = require("./Gen_BankDetailRegister");
var _Gen_BankSubType = require("./Gen_BankSubType");
var _Gen_Border = require("./Gen_Border");
var _Gen_BulkProcessActions = require("./Gen_BulkProcessActions");
var _Gen_BulkProcessLog = require("./Gen_BulkProcessLog");
var _Gen_CARF = require("./Gen_CARF");
var _Gen_CARFLog = require("./Gen_CARFLog");
var _Gen_CARF_Exception = require("./Gen_CARF_Exception");
var _Gen_CARF_Reason = require("./Gen_CARF_Reason");
var _Gen_CC_RptSetup = require("./Gen_CC_RptSetup");
var _Gen_CNICDetail = require("./Gen_CNICDetail");
var _Gen_CNICDetail_Log = require("./Gen_CNICDetail_Log");
var _Gen_CPDashboardSetup = require("./Gen_CPDashboardSetup");
var _Gen_CPUserDashboardPreference = require("./Gen_CPUserDashboardPreference");
var _Gen_CargoTypeFile = require("./Gen_CargoTypeFile");
var _Gen_Charges = require("./Gen_Charges");
var _Gen_ChargesNature = require("./Gen_ChargesNature");
var _Gen_ChargesReportingGroup = require("./Gen_ChargesReportingGroup");
var _Gen_ChargesTariff = require("./Gen_ChargesTariff");
var _Gen_ChargesTariffGeneralWeightage = require("./Gen_ChargesTariffGeneralWeightage");
var _Gen_ChargesTariff_AirDetail = require("./Gen_ChargesTariff_AirDetail");
var _Gen_ChargesTariff_Cleaning = require("./Gen_ChargesTariff_Cleaning");
var _Gen_ChargesTariff_Detail = require("./Gen_ChargesTariff_Detail");
var _Gen_ChargesTariff_Detention = require("./Gen_ChargesTariff_Detention");
var _Gen_ChargesTariff_LatePickup = require("./Gen_ChargesTariff_LatePickup");
var _Gen_ChargesTariff_Placement = require("./Gen_ChargesTariff_Placement");
var _Gen_ChargesTariff_PlugIn = require("./Gen_ChargesTariff_PlugIn");
var _Gen_ChargesTariff_Storage = require("./Gen_ChargesTariff_Storage");
var _Gen_ChargesVATCategory = require("./Gen_ChargesVATCategory");
var _Gen_Charges_Category = require("./Gen_Charges_Category");
var _Gen_Charges_SubCompanyRight = require("./Gen_Charges_SubCompanyRight");
var _Gen_Charges_TaxAuthority = require("./Gen_Charges_TaxAuthority");
var _Gen_Clauses = require("./Gen_Clauses");
var _Gen_CloudInfo = require("./Gen_CloudInfo");
var _Gen_Commodity = require("./Gen_Commodity");
var _Gen_CommodityCargoType = require("./Gen_CommodityCargoType");
var _Gen_CommodityGroup = require("./Gen_CommodityGroup");
var _Gen_CommonLOV = require("./Gen_CommonLOV");
var _Gen_CommonReportParameter = require("./Gen_CommonReportParameter");
var _Gen_CommonStatus = require("./Gen_CommonStatus");
var _Gen_CompanInfo = require("./Gen_CompanInfo");
var _Gen_ContainerDepot = require("./Gen_ContainerDepot");
var _Gen_ContainerOwner = require("./Gen_ContainerOwner");
var _Gen_CrucialChangesLog = require("./Gen_CrucialChangesLog");
var _Gen_CurrencyMarketRate = require("./Gen_CurrencyMarketRate");
var _Gen_CustomStatus = require("./Gen_CustomStatus");
var _Gen_CustomerGroup = require("./Gen_CustomerGroup");
var _Gen_Dashboard = require("./Gen_Dashboard");
var _Gen_DashboardPolicy = require("./Gen_DashboardPolicy");
var _Gen_DashboardSetup = require("./Gen_DashboardSetup");
var _Gen_DashboardSetupPolicy = require("./Gen_DashboardSetupPolicy");
var _Gen_DashboardType = require("./Gen_DashboardType");
var _Gen_Dashboard_Executive = require("./Gen_Dashboard_Executive");
var _Gen_DeliveryOrderRequest = require("./Gen_DeliveryOrderRequest");
var _Gen_DeliveryType = require("./Gen_DeliveryType");
var _Gen_Department = require("./Gen_Department");
var _Gen_Department_UserRights = require("./Gen_Department_UserRights");
var _Gen_Designation = require("./Gen_Designation");
var _Gen_DetentionTariff = require("./Gen_DetentionTariff");
var _Gen_DetentionTariff_Detention = require("./Gen_DetentionTariff_Detention");
var _Gen_DetentionTariff_History = require("./Gen_DetentionTariff_History");
var _Gen_DetentionTariff_History_Detail = require("./Gen_DetentionTariff_History_Detail");
var _Gen_DetentionTariff_PlugIn = require("./Gen_DetentionTariff_PlugIn");
var _Gen_Dimension = require("./Gen_Dimension");
var _Gen_Dimension_Detail = require("./Gen_Dimension_Detail");
var _Gen_Document = require("./Gen_Document");
var _Gen_DocumentType = require("./Gen_DocumentType");
var _Gen_Document_Deleted = require("./Gen_Document_Deleted");
var _Gen_DrawnBank = require("./Gen_DrawnBank");
var _Gen_EDIFormat = require("./Gen_EDIFormat");
var _Gen_EDIProcessed = require("./Gen_EDIProcessed");
var _Gen_EDIProcessed_BLDetail = require("./Gen_EDIProcessed_BLDetail");
var _Gen_EDIProcessed_Charge = require("./Gen_EDIProcessed_Charge");
var _Gen_EDIProcessed_Container = require("./Gen_EDIProcessed_Container");
var _Gen_EDO = require("./Gen_EDO");
var _Gen_EDOFormat = require("./Gen_EDOFormat");
var _Gen_EDO_AcknowledgeDetail = require("./Gen_EDO_AcknowledgeDetail");
var _Gen_EDO_Process = require("./Gen_EDO_Process");
var _Gen_EDO_Process_Detail = require("./Gen_EDO_Process_Detail");
var _Gen_EDO_SubmissionDetail = require("./Gen_EDO_SubmissionDetail");
var _Gen_EDO_TemplateSetup = require("./Gen_EDO_TemplateSetup");
var _Gen_EPAS_SerialType = require("./Gen_EPAS_SerialType");
var _Gen_EditorType = require("./Gen_EditorType");
var _Gen_EmailRecipient = require("./Gen_EmailRecipient");
var _Gen_EmailTemplate = require("./Gen_EmailTemplate");
var _Gen_EmailTemplateTag = require("./Gen_EmailTemplateTag");
var _Gen_EmailTemplateType = require("./Gen_EmailTemplateType");
var _Gen_Email_Log = require("./Gen_Email_Log");
var _Gen_Email_Log_History = require("./Gen_Email_Log_History");
var _Gen_EquipmentSize = require("./Gen_EquipmentSize");
var _Gen_EquipmentSizeType = require("./Gen_EquipmentSizeType");
var _Gen_EquipmentType = require("./Gen_EquipmentType");
var _Gen_ExchRateRange = require("./Gen_ExchRateRange");
var _Gen_ExchRateRange_Detail = require("./Gen_ExchRateRange_Detail");
var _Gen_Expenses = require("./Gen_Expenses");
var _Gen_FTPSetting = require("./Gen_FTPSetting");
var _Gen_FileCategory = require("./Gen_FileCategory");
var _Gen_Flight_Schedule = require("./Gen_Flight_Schedule");
var _Gen_Flight_Schedule_Detail = require("./Gen_Flight_Schedule_Detail");
var _Gen_Flight_Schedule_ExchRateDetail = require("./Gen_Flight_Schedule_ExchRateDetail");
var _Gen_Forms = require("./Gen_Forms");
var _Gen_Forms_Functions = require("./Gen_Forms_Functions");
var _Gen_FreightClassType = require("./Gen_FreightClassType");
var _Gen_Frequency = require("./Gen_Frequency");
var _Gen_FrequencyPeriod = require("./Gen_FrequencyPeriod");
var _Gen_Functions = require("./Gen_Functions");
var _Gen_HazmatClassType = require("./Gen_HazmatClassType");
var _Gen_HazmatPackingGroup = require("./Gen_HazmatPackingGroup");
var _Gen_HistoryType = require("./Gen_HistoryType");
var _Gen_ISoftCharge = require("./Gen_ISoftCharge");
var _Gen_ISoftCommodityMapping = require("./Gen_ISoftCommodityMapping");
var _Gen_ISoftEmployeeMapping = require("./Gen_ISoftEmployeeMapping");
var _Gen_ISoftEquipmentSizeTypeMapping = require("./Gen_ISoftEquipmentSizeTypeMapping");
var _Gen_ISoftPackingUnit = require("./Gen_ISoftPackingUnit");
var _Gen_ISoftParty = require("./Gen_ISoftParty");
var _Gen_ISoftPartyContact = require("./Gen_ISoftPartyContact");
var _Gen_ISoftPartyLocation = require("./Gen_ISoftPartyLocation");
var _Gen_ISoftVesselMapping = require("./Gen_ISoftVesselMapping");
var _Gen_IncoTerms = require("./Gen_IncoTerms");
var _Gen_IndexType = require("./Gen_IndexType");
var _Gen_InsuranceCompany = require("./Gen_InsuranceCompany");
var _Gen_InsuranceType = require("./Gen_InsuranceType");
var _Gen_JobCancelReason = require("./Gen_JobCancelReason");
var _Gen_JobNature = require("./Gen_JobNature");
var _Gen_JobSubType = require("./Gen_JobSubType");
var _Gen_JobType = require("./Gen_JobType");
var _Gen_LCLStorageTariff = require("./Gen_LCLStorageTariff");
var _Gen_LCLStorageTariff_DG = require("./Gen_LCLStorageTariff_DG");
var _Gen_LCLStorageTariff_General = require("./Gen_LCLStorageTariff_General");
var _Gen_LetterProcessed = require("./Gen_LetterProcessed");
var _Gen_LetterTemplate = require("./Gen_LetterTemplate");
var _Gen_LetterTemplateTag = require("./Gen_LetterTemplateTag");
var _Gen_LocalCustom = require("./Gen_LocalCustom");
var _Gen_Localization = require("./Gen_Localization");
var _Gen_Localize = require("./Gen_Localize");
var _Gen_ManifestHeader = require("./Gen_ManifestHeader");
var _Gen_MileStone = require("./Gen_MileStone");
var _Gen_MileStone_Detail = require("./Gen_MileStone_Detail");
var _Gen_NearByPorts = require("./Gen_NearByPorts");
var _Gen_NewsAlert = require("./Gen_NewsAlert");
var _Gen_NonCommercialDelivery = require("./Gen_NonCommercialDelivery");
var _Gen_NonCommercialPickup = require("./Gen_NonCommercialPickup");
var _Gen_Notification = require("./Gen_Notification");
var _Gen_OperationType = require("./Gen_OperationType");
var _Gen_OverseasAgentNetwork = require("./Gen_OverseasAgentNetwork");
var _Gen_PEDIFileType = require("./Gen_PEDIFileType");
var _Gen_PEDIMapping = require("./Gen_PEDIMapping");
var _Gen_PEDIMappingType = require("./Gen_PEDIMappingType");
var _Gen_PODetails = require("./Gen_PODetails");
var _Gen_Parties = require("./Gen_Parties");
var _Gen_PartiesCommitment = require("./Gen_PartiesCommitment");
var _Gen_PartiesCommitment_Detail = require("./Gen_PartiesCommitment_Detail");
var _Gen_Parties_Alerts = require("./Gen_Parties_Alerts");
var _Gen_Parties_CommodityDetail = require("./Gen_Parties_CommodityDetail");
var _Gen_Parties_CommonDetail = require("./Gen_Parties_CommonDetail");
var _Gen_Parties_Contacts = require("./Gen_Parties_Contacts");
var _Gen_Parties_Contacts_Events = require("./Gen_Parties_Contacts_Events");
var _Gen_Parties_CostCenterRight = require("./Gen_Parties_CostCenterRight");
var _Gen_Parties_Exception = require("./Gen_Parties_Exception");
var _Gen_Parties_InsuranceDetail = require("./Gen_Parties_InsuranceDetail");
var _Gen_Parties_Locations = require("./Gen_Parties_Locations");
var _Gen_Parties_Notification = require("./Gen_Parties_Notification");
var _Gen_Parties_SubCompanyRight = require("./Gen_Parties_SubCompanyRight");
var _Gen_Parties_Terminal = require("./Gen_Parties_Terminal");
var _Gen_PartyMandatoryFieldsSetup = require("./Gen_PartyMandatoryFieldsSetup");
var _Gen_PaymentTerm = require("./Gen_PaymentTerm");
var _Gen_PortCategory = require("./Gen_PortCategory");
var _Gen_PortCountryException = require("./Gen_PortCountryException");
var _Gen_Port_Exception = require("./Gen_Port_Exception");
var _Gen_PrintOn = require("./Gen_PrintOn");
var _Gen_ProductPackageType = require("./Gen_ProductPackageType");
var _Gen_Quotation = require("./Gen_Quotation");
var _Gen_Quotation_Detail = require("./Gen_Quotation_Detail");
var _Gen_Quotation_Equipment = require("./Gen_Quotation_Equipment");
var _Gen_QuoteTemplate = require("./Gen_QuoteTemplate");
var _Gen_QuoteTemplate_Detail = require("./Gen_QuoteTemplate_Detail");
var _Gen_RateGroup = require("./Gen_RateGroup");
var _Gen_RateUnit = require("./Gen_RateUnit");
var _Gen_ReasonForCredit = require("./Gen_ReasonForCredit");
var _Gen_ReceivedFromPayToParties = require("./Gen_ReceivedFromPayToParties");
var _Gen_Region = require("./Gen_Region");
var _Gen_Report = require("./Gen_Report");
var _Gen_ReportConfiguration = require("./Gen_ReportConfiguration");
var _Gen_ReportConfiguration_Detail = require("./Gen_ReportConfiguration_Detail");
var _Gen_ReportDocument = require("./Gen_ReportDocument");
var _Gen_ReportFilter = require("./Gen_ReportFilter");
var _Gen_ReportSubscription = require("./Gen_ReportSubscription");
var _Gen_ReportSubscription_Detail = require("./Gen_ReportSubscription_Detail");
var _Gen_ReportSubscription_Email = require("./Gen_ReportSubscription_Email");
var _Gen_ReportSubscription_Log = require("./Gen_ReportSubscription_Log");
var _Gen_ReportSubscription_LogMaster = require("./Gen_ReportSubscription_LogMaster");
var _Gen_ReportTextDoc = require("./Gen_ReportTextDoc");
var _Gen_Report_Cubical = require("./Gen_Report_Cubical");
var _Gen_Report_Properties = require("./Gen_Report_Properties");
var _Gen_Report_Properties_Value = require("./Gen_Report_Properties_Value");
var _Gen_Roles = require("./Gen_Roles");
var _Gen_Rows = require("./Gen_Rows");
var _Gen_SEJobNotes = require("./Gen_SEJobNotes");
var _Gen_SIJobNotes = require("./Gen_SIJobNotes");
var _Gen_SMS_Log = require("./Gen_SMS_Log");
var _Gen_SMS_Log_History = require("./Gen_SMS_Log_History");
var _Gen_SalesRep_Status = require("./Gen_SalesRep_Status");
var _Gen_SaveDefaultValue = require("./Gen_SaveDefaultValue");
var _Gen_SeaAccessorialCharge = require("./Gen_SeaAccessorialCharge");
var _Gen_SeaInterimRate = require("./Gen_SeaInterimRate");
var _Gen_SeaPublishRate = require("./Gen_SeaPublishRate");
var _Gen_SecurityDepositStatus = require("./Gen_SecurityDepositStatus");
var _Gen_SecurityFile = require("./Gen_SecurityFile");
var _Gen_SecurityFile_Detention = require("./Gen_SecurityFile_Detention");
var _Gen_SecurityFile_Payable = require("./Gen_SecurityFile_Payable");
var _Gen_SecurityGroup = require("./Gen_SecurityGroup");
var _Gen_SecurityGroup_Authority = require("./Gen_SecurityGroup_Authority");
var _Gen_SecurityHold = require("./Gen_SecurityHold");
var _Gen_SecurityLevel = require("./Gen_SecurityLevel");
var _Gen_SecurityTranStatus = require("./Gen_SecurityTranStatus");
var _Gen_SecurityType = require("./Gen_SecurityType");
var _Gen_SequenceCustomized = require("./Gen_SequenceCustomized");
var _Gen_SequenceDef = require("./Gen_SequenceDef");
var _Gen_SequenceSWC = require("./Gen_SequenceSWC");
var _Gen_Sequences = require("./Gen_Sequences");
var _Gen_SerialException = require("./Gen_SerialException");
var _Gen_ServiceActivityLog = require("./Gen_ServiceActivityLog");
var _Gen_ServiceActivityLogType = require("./Gen_ServiceActivityLogType");
var _Gen_Session = require("./Gen_Session");
var _Gen_ShippingAgencyLicense = require("./Gen_ShippingAgencyLicense");
var _Gen_ShippingLineReleaseType = require("./Gen_ShippingLineReleaseType");
var _Gen_Signatures = require("./Gen_Signatures");
var _Gen_SlabType = require("./Gen_SlabType");
var _Gen_SlabType_Detail = require("./Gen_SlabType_Detail");
var _Gen_Stamps = require("./Gen_Stamps");
var _Gen_SubCompanies = require("./Gen_SubCompanies");
var _Gen_SupplierType = require("./Gen_SupplierType");
var _Gen_SysPolCompanyPolicy = require("./Gen_SysPolCompanyPolicy");
var _Gen_SysPolElementSource = require("./Gen_SysPolElementSource");
var _Gen_SysPolElementType = require("./Gen_SysPolElementType");
var _Gen_SysPolElements = require("./Gen_SysPolElements");
var _Gen_SysPolicyDetail = require("./Gen_SysPolicyDetail");
var _Gen_SysPolicyDetail_Log = require("./Gen_SysPolicyDetail_Log");
var _Gen_SysPolicyMaster = require("./Gen_SysPolicyMaster");
var _Gen_SysPolicy_DODocs = require("./Gen_SysPolicy_DODocs");
var _Gen_SysPolicy_SecurityRefundDocs = require("./Gen_SysPolicy_SecurityRefundDocs");
var _Gen_TaxAuthority = require("./Gen_TaxAuthority");
var _Gen_TaxAuthorityGroup = require("./Gen_TaxAuthorityGroup");
var _Gen_TaxAuthorityGroup_Detail = require("./Gen_TaxAuthorityGroup_Detail");
var _Gen_TaxFilerStatus = require("./Gen_TaxFilerStatus");
var _Gen_TaxInvNature = require("./Gen_TaxInvNature");
var _Gen_TaxRevDistribution = require("./Gen_TaxRevDistribution");
var _Gen_TaxRevDistribution_Detail = require("./Gen_TaxRevDistribution_Detail");
var _Gen_Terminal = require("./Gen_Terminal");
var _Gen_TerminalInvoiceLog = require("./Gen_TerminalInvoiceLog");
var _Gen_TerminalStockRequirement = require("./Gen_TerminalStockRequirement");
var _Gen_TerminalStockRequirement_Detail = require("./Gen_TerminalStockRequirement_Detail");
var _Gen_TracingEventDocLog = require("./Gen_TracingEventDocLog");
var _Gen_TracingEventOprLog = require("./Gen_TracingEventOprLog");
var _Gen_TracingEvents = require("./Gen_TracingEvents");
var _Gen_TracingEventsAutoPick = require("./Gen_TracingEventsAutoPick");
var _Gen_TypeOfIGM = require("./Gen_TypeOfIGM");
var _Gen_ULDContainers = require("./Gen_ULDContainers");
var _Gen_UNAirport = require("./Gen_UNAirport");
var _Gen_UNAirport_Aliases = require("./Gen_UNAirport_Aliases");
var _Gen_UNLocation = require("./Gen_UNLocation");
var _Gen_UNLocation_Aliases = require("./Gen_UNLocation_Aliases");
var _Gen_UNLocation_PortCategory = require("./Gen_UNLocation_PortCategory");
var _Gen_UnCommodity = require("./Gen_UnCommodity");
var _Gen_UnLocationState = require("./Gen_UnLocationState");
var _Gen_Units = require("./Gen_Units");
var _Gen_UnitsOfMeasurment = require("./Gen_UnitsOfMeasurment");
var _Gen_UserAlert_Log = require("./Gen_UserAlert_Log");
var _Gen_UserDashboardPreference = require("./Gen_UserDashboardPreference");
var _Gen_UserDashboardPreference_Detail = require("./Gen_UserDashboardPreference_Detail");
var _Gen_Users = require("./Gen_Users");
var _Gen_VendorGroup = require("./Gen_VendorGroup");
var _Gen_Vessel = require("./Gen_Vessel");
var _Gen_Voyage = require("./Gen_Voyage");
var _Gen_Voyage_ExchRateDetail = require("./Gen_Voyage_ExchRateDetail");
var _Gen_Voyage_Terminal = require("./Gen_Voyage_Terminal");
var _Gen_Wharf = require("./Gen_Wharf");
var _Google_Location = require("./Google_Location");
var _Histories = require("./Histories");
var _INQ_QuoteChargeTemplate = require("./INQ_QuoteChargeTemplate");
var _INQ_QuoteChargeTemplate_Detail = require("./INQ_QuoteChargeTemplate_Detail");
var _INQ_RateFromVendor = require("./INQ_RateFromVendor");
var _INQ_RateFromVendor_Charges = require("./INQ_RateFromVendor_Charges");
var _INQ_RateInquiry = require("./INQ_RateInquiry");
var _INQ_RateInquiry_Detail = require("./INQ_RateInquiry_Detail");
var _INQ_RateRequestToVendor = require("./INQ_RateRequestToVendor");
var _INQ_RateToCustomer = require("./INQ_RateToCustomer");
var _INQ_RateToCustomer_Charges = require("./INQ_RateToCustomer_Charges");
var _Inv_GINChangeLog = require("./Inv_GINChangeLog");
var _Invoice_Losses = require("./Invoice_Losses");
var _Invoice_Transactions = require("./Invoice_Transactions");
var _Invoices = require("./Invoices");
var _Item_Details = require("./Item_Details");
var _Job_notes = require("./Job_notes");
var _KRA_ManifestLog = require("./KRA_ManifestLog");
var _Loading_Programs = require("./Loading_Programs");
var _Log_Activity = require("./Log_Activity");
var _Log_ActivityType = require("./Log_ActivityType");
var _Log_Activity_Detail = require("./Log_Activity_Detail");
var _Log_BrandSetup = require("./Log_BrandSetup");
var _Log_CarrierManifest = require("./Log_CarrierManifest");
var _Log_CarrierManifest_Detail = require("./Log_CarrierManifest_Detail");
var _Log_DutyCalculation = require("./Log_DutyCalculation");
var _Log_DutyCalculation_PODetail = require("./Log_DutyCalculation_PODetail");
var _Log_EDILocation = require("./Log_EDILocation");
var _Log_Job = require("./Log_Job");
var _Log_JobActivities = require("./Log_JobActivities");
var _Log_JobStage = require("./Log_JobStage");
var _Log_JobType = require("./Log_JobType");
var _Log_Job_ChargesPayb = require("./Log_Job_ChargesPayb");
var _Log_Job_ChargesPayb_Cont = require("./Log_Job_ChargesPayb_Cont");
var _Log_Job_ChargesPayb_History = require("./Log_Job_ChargesPayb_History");
var _Log_Job_ChargesPayb_TaxExpShare = require("./Log_Job_ChargesPayb_TaxExpShare");
var _Log_Job_ChargesRecv = require("./Log_Job_ChargesRecv");
var _Log_Job_ChargesRecv_Cont = require("./Log_Job_ChargesRecv_Cont");
var _Log_Job_ChargesRecv_History = require("./Log_Job_ChargesRecv_History");
var _Log_Job_ChargesRecv_TaxRevShare = require("./Log_Job_ChargesRecv_TaxRevShare");
var _Log_Job_Container = require("./Log_Job_Container");
var _Log_Job_ExtMilestone = require("./Log_Job_ExtMilestone");
var _Log_Job_LastMilestone = require("./Log_Job_LastMilestone");
var _Log_Job_PaidByClient = require("./Log_Job_PaidByClient");
var _Log_Job_TracingDoc = require("./Log_Job_TracingDoc");
var _Log_Job_TracingOpr = require("./Log_Job_TracingOpr");
var _Log_MakeSetup = require("./Log_MakeSetup");
var _Log_VehicleSetup = require("./Log_VehicleSetup");
var _Manifest_Jobs = require("./Manifest_Jobs");
var _Manifests = require("./Manifests");
var _Non_Gl_Parties = require("./Non_Gl_Parties");
var _Notifications = require("./Notifications");
var _Office_Vouchers = require("./Office_Vouchers");
var _Parent_Accounts = require("./Parent_Accounts");
var _PaymentMode = require("./PaymentMode");
var _Ports = require("./Ports");
var _ReportSetting = require("./ReportSetting");
var _ReportTemplate = require("./ReportTemplate");
var _ReportTemplate_Detail = require("./ReportTemplate_Detail");
var _SE_Equipments = require("./SE_Equipments");
var _SE_Jobs = require("./SE_Jobs");
var _SExp_BL = require("./SExp_BL");
var _SExp_BL_Charges = require("./SExp_BL_Charges");
var _SExp_BL_Detail = require("./SExp_BL_Detail");
var _SExp_BL_Detail_History = require("./SExp_BL_Detail_History");
var _SExp_BL_Equipment = require("./SExp_BL_Equipment");
var _SExp_BL_Equipment_History = require("./SExp_BL_Equipment_History");
var _SExp_BL_PrintingLog = require("./SExp_BL_PrintingLog");
var _SExp_BL_ProductInfo = require("./SExp_BL_ProductInfo");
var _SExp_BL_Stamp = require("./SExp_BL_Stamp");
var _SExp_BookingConfirmFromCarrier = require("./SExp_BookingConfirmFromCarrier");
var _SExp_BookingRequest = require("./SExp_BookingRequest");
var _SExp_BookingRequest_Detail = require("./SExp_BookingRequest_Detail");
var _SExp_BookingRequest_Equipment = require("./SExp_BookingRequest_Equipment");
var _SExp_BookingToCarrier = require("./SExp_BookingToCarrier");
var _SExp_CRO = require("./SExp_CRO");
var _SExp_CRO_Detail = require("./SExp_CRO_Detail");
var _SExp_DeliveryNote = require("./SExp_DeliveryNote");
var _SExp_DeliveryNote_Detail = require("./SExp_DeliveryNote_Detail");
var _SExp_LOGNETBookingRequest = require("./SExp_LOGNETBookingRequest");
var _SExp_LOGNETPODetails = require("./SExp_LOGNETPODetails");
var _SExp_LOGNETProductInfo = require("./SExp_LOGNETProductInfo");
var _SExp_LoadingProgram = require("./SExp_LoadingProgram");
var _SExp_NOC = require("./SExp_NOC");
var _SExp_NOC_Detail = require("./SExp_NOC_Detail");
var _SExp_ReleaseInstructionStatus = require("./SExp_ReleaseInstructionStatus");
var _SExp_ReleaseInstructionType = require("./SExp_ReleaseInstructionType");
var _SExp_SeaExportJob = require("./SExp_SeaExportJob");
var _SExp_SeaExportJobHistory = require("./SExp_SeaExportJobHistory");
var _SExp_SeaExportJob_BLReleaseLog = require("./SExp_SeaExportJob_BLReleaseLog");
var _SExp_SeaExportJob_CarDetail = require("./SExp_SeaExportJob_CarDetail");
var _SExp_SeaExportJob_ChargesPayb = require("./SExp_SeaExportJob_ChargesPayb");
var _SExp_SeaExportJob_ChargesPayb_History = require("./SExp_SeaExportJob_ChargesPayb_History");
var _SExp_SeaExportJob_ChargesPayb_TaxExpShare = require("./SExp_SeaExportJob_ChargesPayb_TaxExpShare");
var _SExp_SeaExportJob_ChargesRecv = require("./SExp_SeaExportJob_ChargesRecv");
var _SExp_SeaExportJob_ChargesRecv_History = require("./SExp_SeaExportJob_ChargesRecv_History");
var _SExp_SeaExportJob_ChargesRecv_TaxRevShare = require("./SExp_SeaExportJob_ChargesRecv_TaxRevShare");
var _SExp_SeaExportJob_Equipment = require("./SExp_SeaExportJob_Equipment");
var _SExp_SeaExportJob_ExtMilestone = require("./SExp_SeaExportJob_ExtMilestone");
var _SExp_SeaExportJob_LastMilestone = require("./SExp_SeaExportJob_LastMilestone");
var _SExp_SeaExportJob_Principle = require("./SExp_SeaExportJob_Principle");
var _SExp_SeaExportJob_Principle_History = require("./SExp_SeaExportJob_Principle_History");
var _SExp_SeaExportJob_ReleaseRequest = require("./SExp_SeaExportJob_ReleaseRequest");
var _SExp_SeaExportJob_TracingDoc = require("./SExp_SeaExportJob_TracingDoc");
var _SExp_SeaExportJob_TracingOpr = require("./SExp_SeaExportJob_TracingOpr");
var _SExp_SeaExportJob_TracingOpr_Cont = require("./SExp_SeaExportJob_TracingOpr_Cont");
var _SExp_ShippingInstruction = require("./SExp_ShippingInstruction");
var _SExp_ShippingInstruction_Equipment = require("./SExp_ShippingInstruction_Equipment");
var _SExp_StuffingPlan = require("./SExp_StuffingPlan");
var _SExp_StuffingPlan_Detail = require("./SExp_StuffingPlan_Detail");
var _SExp_SurrenderType = require("./SExp_SurrenderType");
var _SExp_SwitchBL = require("./SExp_SwitchBL");
var _SExp_SwitchBL_Detail = require("./SExp_SwitchBL_Detail");
var _SExp_SwitchBL_Equipment = require("./SExp_SwitchBL_Equipment");
var _SExp_SwitchBL_Equipment_History = require("./SExp_SwitchBL_Equipment_History");
var _SExp_SwitchBL_Stamp = require("./SExp_SwitchBL_Stamp");
var _SImp_BL = require("./SImp_BL");
var _SImp_BLAmendment = require("./SImp_BLAmendment");
var _SImp_BLAmendmentQueries = require("./SImp_BLAmendmentQueries");
var _SImp_BL_Detail = require("./SImp_BL_Detail");
var _SImp_BL_Equipment = require("./SImp_BL_Equipment");
var _SImp_BL_Equipment_History = require("./SImp_BL_Equipment_History");
var _SImp_BL_ProductInfo = require("./SImp_BL_ProductInfo");
var _SImp_BL_ProductInfo_Cont = require("./SImp_BL_ProductInfo_Cont");
var _SImp_BL_Stamp = require("./SImp_BL_Stamp");
var _SImp_DeliveryOrder = require("./SImp_DeliveryOrder");
var _SImp_PreAlert = require("./SImp_PreAlert");
var _SImp_PreAlert_Container = require("./SImp_PreAlert_Container");
var _SImp_SeaImportJob = require("./SImp_SeaImportJob");
var _SImp_SeaImportJob_CarDetail = require("./SImp_SeaImportJob_CarDetail");
var _SImp_SeaImportJob_ChargesPayb = require("./SImp_SeaImportJob_ChargesPayb");
var _SImp_SeaImportJob_ChargesPayb_History = require("./SImp_SeaImportJob_ChargesPayb_History");
var _SImp_SeaImportJob_ChargesPayb_TaxExpShare = require("./SImp_SeaImportJob_ChargesPayb_TaxExpShare");
var _SImp_SeaImportJob_ChargesRecv = require("./SImp_SeaImportJob_ChargesRecv");
var _SImp_SeaImportJob_ChargesRecv_History = require("./SImp_SeaImportJob_ChargesRecv_History");
var _SImp_SeaImportJob_ChargesRecv_TaxRevShare = require("./SImp_SeaImportJob_ChargesRecv_TaxRevShare");
var _SImp_SeaImportJob_Equipment = require("./SImp_SeaImportJob_Equipment");
var _SImp_SeaImportJob_ExtMilestone = require("./SImp_SeaImportJob_ExtMilestone");
var _SImp_SeaImportJob_LastMilestone = require("./SImp_SeaImportJob_LastMilestone");
var _SImp_SeaImportJob_Principle = require("./SImp_SeaImportJob_Principle");
var _SImp_SeaImportJob_Principle_History = require("./SImp_SeaImportJob_Principle_History");
var _SImp_SeaImportJob_TracingDoc = require("./SImp_SeaImportJob_TracingDoc");
var _SImp_SeaImportJob_TracingOpr = require("./SImp_SeaImportJob_TracingOpr");
var _SeaMilestonePTL = require("./SeaMilestonePTL");
var _Simp_EqpInvOtherChgs = require("./Simp_EqpInvOtherChgs");
var _Stamps = require("./Stamps");
var _Sub_Tasks = require("./Sub_Tasks");
var _SysInfo = require("./SysInfo");
var _TAP_Allowance = require("./TAP_Allowance");
var _TAP_Allowance_Detail = require("./TAP_Allowance_Detail");
var _TAP_Deduction = require("./TAP_Deduction");
var _TAP_Deduction_Detail = require("./TAP_Deduction_Detail");
var _TAP_Employee = require("./TAP_Employee");
var _TAP_EmployeeAttendance = require("./TAP_EmployeeAttendance");
var _TAP_EmployeeDesignation = require("./TAP_EmployeeDesignation");
var _TAP_EmployeeStatus = require("./TAP_EmployeeStatus");
var _TAP_Gender = require("./TAP_Gender");
var _TAP_Loan = require("./TAP_Loan");
var _TAP_LoanRecovery = require("./TAP_LoanRecovery");
var _TAP_Loan_Schedule = require("./TAP_Loan_Schedule");
var _TAP_MaritalStatus = require("./TAP_MaritalStatus");
var _TAP_Nationality = require("./TAP_Nationality");
var _TAP_RecoveryType = require("./TAP_RecoveryType");
var _TAP_Religion = require("./TAP_Religion");
var _TAP_Salaries = require("./TAP_Salaries");
var _TAP_Salaries_Detail = require("./TAP_Salaries_Detail");
var _TAP_Salaries_Detail_GL = require("./TAP_Salaries_Detail_GL");
var _TAP_SalaryAdvance = require("./TAP_SalaryAdvance");
var _TAP_SalaryStructure = require("./TAP_SalaryStructure");
var _TAP_SalaryStructure_Allowance = require("./TAP_SalaryStructure_Allowance");
var _TAP_SalaryStructure_Deduction = require("./TAP_SalaryStructure_Deduction");
var _TAP_Title = require("./TAP_Title");
var _TPGL_Account_List = require("./TPGL_Account_List");
var _TPGL_CurrencyCode = require("./TPGL_CurrencyCode");
var _TPGL_Process_Log = require("./TPGL_Process_Log");
var _TPGL_TaxRateCode = require("./TPGL_TaxRateCode");
var _TPGL_Terms = require("./TPGL_Terms");
var _Task_Logs = require("./Task_Logs");
var _Tasks = require("./Tasks");
var _Transactions = require("./Transactions");
var _UNPacking = require("./UNPacking");
var _UNPacking_EDI = require("./UNPacking_EDI");
var _UNPacking_Map = require("./UNPacking_Map");
var _UserRegistration = require("./UserRegistration");
var _Vendor_Associations = require("./Vendor_Associations");
var _Vendors = require("./Vendors");
var _Version = require("./Version");
var _Version_History = require("./Version_History");
var _Vessels = require("./Vessels");
var _Vouchers = require("./Vouchers");
var _Voyages = require("./Voyages");
var _WMS_Activity = require("./WMS_Activity");
var _WMS_ActivityType = require("./WMS_ActivityType");
var _WMS_BalanceDeliveryOrder = require("./WMS_BalanceDeliveryOrder");
var _WMS_BalanceGRNDetail = require("./WMS_BalanceGRNDetail");
var _WMS_BalanceReceivingOrder = require("./WMS_BalanceReceivingOrder");
var _WMS_CargoDEStuffing = require("./WMS_CargoDEStuffing");
var _WMS_CargoDEStuffing_Detail = require("./WMS_CargoDEStuffing_Detail");
var _WMS_CargoDEStuffing_DetailPD = require("./WMS_CargoDEStuffing_DetailPD");
var _WMS_CargoStuffing = require("./WMS_CargoStuffing");
var _WMS_CargoStuffing_Detail = require("./WMS_CargoStuffing_Detail");
var _WMS_Delivery = require("./WMS_Delivery");
var _WMS_DeliveryOrder = require("./WMS_DeliveryOrder");
var _WMS_DeliveryOrder_Detail = require("./WMS_DeliveryOrder_Detail");
var _WMS_Delivery_Charges = require("./WMS_Delivery_Charges");
var _WMS_Delivery_Detail = require("./WMS_Delivery_Detail");
var _WMS_GRN = require("./WMS_GRN");
var _WMS_GRNMode = require("./WMS_GRNMode");
var _WMS_GRN_Charges = require("./WMS_GRN_Charges");
var _WMS_GRN_Detail = require("./WMS_GRN_Detail");
var _WMS_GRN_Detail_ProductInfo = require("./WMS_GRN_Detail_ProductInfo");
var _WMS_InvDeliveryOrderDetailProductInfoBalance = require("./WMS_InvDeliveryOrderDetailProductInfoBalance");
var _WMS_InvOrderStatus = require("./WMS_InvOrderStatus");
var _WMS_Locations = require("./WMS_Locations");
var _WMS_RateApply = require("./WMS_RateApply");
var _WMS_ReceivedCondition = require("./WMS_ReceivedCondition");
var _WMS_ReceivingOrder = require("./WMS_ReceivingOrder");
var _WMS_ReceivingOrder_Detail = require("./WMS_ReceivingOrder_Detail");
var _WMS_StockTranType = require("./WMS_StockTranType");
var _WMS_StorageMode = require("./WMS_StorageMode");

function initModels(sequelize) {
  var AExp_AirExportJob = _AExp_AirExportJob(sequelize, DataTypes);
  var AExp_AirExportJob_AWBReleaseLog = _AExp_AirExportJob_AWBReleaseLog(sequelize, DataTypes);
  var AExp_AirExportJob_ChargesPayb = _AExp_AirExportJob_ChargesPayb(sequelize, DataTypes);
  var AExp_AirExportJob_ChargesPayb_History = _AExp_AirExportJob_ChargesPayb_History(sequelize, DataTypes);
  var AExp_AirExportJob_ChargesPayb_TaxExpShare = _AExp_AirExportJob_ChargesPayb_TaxExpShare(sequelize, DataTypes);
  var AExp_AirExportJob_ChargesRecv = _AExp_AirExportJob_ChargesRecv(sequelize, DataTypes);
  var AExp_AirExportJob_ChargesRecv_History = _AExp_AirExportJob_ChargesRecv_History(sequelize, DataTypes);
  var AExp_AirExportJob_ChargesRecv_TaxRevShare = _AExp_AirExportJob_ChargesRecv_TaxRevShare(sequelize, DataTypes);
  var AExp_AirExportJob_ExtMilestone = _AExp_AirExportJob_ExtMilestone(sequelize, DataTypes);
  var AExp_AirExportJob_LastMilestone = _AExp_AirExportJob_LastMilestone(sequelize, DataTypes);
  var AExp_AirExportJob_OrderDetail = _AExp_AirExportJob_OrderDetail(sequelize, DataTypes);
  var AExp_AirExportJob_TracingDoc = _AExp_AirExportJob_TracingDoc(sequelize, DataTypes);
  var AExp_AirExportJob_TracingOpr = _AExp_AirExportJob_TracingOpr(sequelize, DataTypes);
  var AExp_AirwayBillStock = _AExp_AirwayBillStock(sequelize, DataTypes);
  var AExp_AirwayBillStock_Detail = _AExp_AirwayBillStock_Detail(sequelize, DataTypes);
  var AExp_BL = _AExp_BL(sequelize, DataTypes);
  var AExp_BL_Charges = _AExp_BL_Charges(sequelize, DataTypes);
  var AExp_BL_Dimension = _AExp_BL_Dimension(sequelize, DataTypes);
  var AExp_BL_History = _AExp_BL_History(sequelize, DataTypes);
  var AExp_BL_PrintingLog = _AExp_BL_PrintingLog(sequelize, DataTypes);
  var AExp_BL_Stamp = _AExp_BL_Stamp(sequelize, DataTypes);
  var AImp_AirImportJob = _AImp_AirImportJob(sequelize, DataTypes);
  var AImp_AirImportJob_BL = _AImp_AirImportJob_BL(sequelize, DataTypes);
  var AImp_AirImportJob_BLCharges = _AImp_AirImportJob_BLCharges(sequelize, DataTypes);
  var AImp_AirImportJob_BLDimension = _AImp_AirImportJob_BLDimension(sequelize, DataTypes);
  var AImp_AirImportJob_BLPrintingLog = _AImp_AirImportJob_BLPrintingLog(sequelize, DataTypes);
  var AImp_AirImportJob_ChargesPayb = _AImp_AirImportJob_ChargesPayb(sequelize, DataTypes);
  var AImp_AirImportJob_ChargesPayb_History = _AImp_AirImportJob_ChargesPayb_History(sequelize, DataTypes);
  var AImp_AirImportJob_ChargesPayb_TaxExpShare = _AImp_AirImportJob_ChargesPayb_TaxExpShare(sequelize, DataTypes);
  var AImp_AirImportJob_ChargesRecv = _AImp_AirImportJob_ChargesRecv(sequelize, DataTypes);
  var AImp_AirImportJob_ChargesRecv_History = _AImp_AirImportJob_ChargesRecv_History(sequelize, DataTypes);
  var AImp_AirImportJob_ChargesRecv_TaxRevShare = _AImp_AirImportJob_ChargesRecv_TaxRevShare(sequelize, DataTypes);
  var AImp_AirImportJob_ExtMilestone = _AImp_AirImportJob_ExtMilestone(sequelize, DataTypes);
  var AImp_AirImportJob_LastMilestone = _AImp_AirImportJob_LastMilestone(sequelize, DataTypes);
  var AImp_AirImportJob_OrderDetail = _AImp_AirImportJob_OrderDetail(sequelize, DataTypes);
  var AImp_AirImportJob_TracingDoc = _AImp_AirImportJob_TracingDoc(sequelize, DataTypes);
  var AImp_AirImportJob_TracingOpr = _AImp_AirImportJob_TracingOpr(sequelize, DataTypes);
  var AImp_AirImportJob__LastMilestone = _AImp_AirImportJob__LastMilestone(sequelize, DataTypes);
  var AImp_DeliveryOrder = _AImp_DeliveryOrder(sequelize, DataTypes);
  var AImp_ManifestHeader = _AImp_ManifestHeader(sequelize, DataTypes);
  var Access_Levels = _Access_Levels(sequelize, DataTypes);
  var Accounts = _Accounts(sequelize, DataTypes);
  var AssignTasks = _AssignTasks(sequelize, DataTypes);
  var Bls = _Bls(sequelize, DataTypes);
  var CEAS_User = _CEAS_User(sequelize, DataTypes);
  var CEAS_User_CostCenterRight = _CEAS_User_CostCenterRight(sequelize, DataTypes);
  var CEAS_User_SalesRepRight = _CEAS_User_SalesRepRight(sequelize, DataTypes);
  var CEAS_User_SubCompanyRight = _CEAS_User_SubCompanyRight(sequelize, DataTypes);
  var COASCompanyRegistration = _COASCompanyRegistration(sequelize, DataTypes);
  var COAS_VersionScript = _COAS_VersionScript(sequelize, DataTypes);
  var COAS_VersionScriptLog = _COAS_VersionScriptLog(sequelize, DataTypes);
  var CRM_Activity = _CRM_Activity(sequelize, DataTypes);
  var CRM_Event = _CRM_Event(sequelize, DataTypes);
  var CRM_Opportunity = _CRM_Opportunity(sequelize, DataTypes);
  var CRM_Planning = _CRM_Planning(sequelize, DataTypes);
  var CRM_Planning_Detail = _CRM_Planning_Detail(sequelize, DataTypes);
  var CTrk_Activity = _CTrk_Activity(sequelize, DataTypes);
  var CTrk_Activity_Detail = _CTrk_Activity_Detail(sequelize, DataTypes);
  var CTrk_Container = _CTrk_Container(sequelize, DataTypes);
  var CTrk_ContainerActivity = _CTrk_ContainerActivity(sequelize, DataTypes);
  var CTrk_ContainerCycle = _CTrk_ContainerCycle(sequelize, DataTypes);
  var CTrk_ContainerStatus = _CTrk_ContainerStatus(sequelize, DataTypes);
  var CTrk_EdiActivityMap = _CTrk_EdiActivityMap(sequelize, DataTypes);
  var CTrk_Stage = _CTrk_Stage(sequelize, DataTypes);
  var CVHM_GuaranteeFilling = _CVHM_GuaranteeFilling(sequelize, DataTypes);
  var CVHM_GuaranteeFillingContainer = _CVHM_GuaranteeFillingContainer(sequelize, DataTypes);
  var CVHM_GuaranteeType = _CVHM_GuaranteeType(sequelize, DataTypes);
  var CashBookSaveAccount = _CashBookSaveAccount(sequelize, DataTypes);
  var CashDenominationRecording = _CashDenominationRecording(sequelize, DataTypes);
  var Charge_Heads = _Charge_Heads(sequelize, DataTypes);
  var Charges = _Charges(sequelize, DataTypes);
  var Child_Accounts = _Child_Accounts(sequelize, DataTypes);
  var Client_Associations = _Client_Associations(sequelize, DataTypes);
  var Clients = _Clients(sequelize, DataTypes);
  var Commodities = _Commodities(sequelize, DataTypes);
  var Companies = _Companies(sequelize, DataTypes);
  var Container_Infos = _Container_Infos(sequelize, DataTypes);
  var DEPO_Activity = _DEPO_Activity(sequelize, DataTypes);
  var DEPO_ActivityStatus = _DEPO_ActivityStatus(sequelize, DataTypes);
  var DEPO_ActivityStorageType = _DEPO_ActivityStorageType(sequelize, DataTypes);
  var DEPO_ActivityType = _DEPO_ActivityType(sequelize, DataTypes);
  var DEPO_Activity_PaymentMode = _DEPO_Activity_PaymentMode(sequelize, DataTypes);
  var DEPO_BillingMode = _DEPO_BillingMode(sequelize, DataTypes);
  var DEPO_Container = _DEPO_Container(sequelize, DataTypes);
  var DEPO_ContainerActivity = _DEPO_ContainerActivity(sequelize, DataTypes);
  var DEPO_ContainerActivityCharges = _DEPO_ContainerActivityCharges(sequelize, DataTypes);
  var DEPO_ContainerActivityDetailHistory = _DEPO_ContainerActivityDetailHistory(sequelize, DataTypes);
  var DEPO_ContainerActivityType = _DEPO_ContainerActivityType(sequelize, DataTypes);
  var DEPO_ContainerActivity_Detail = _DEPO_ContainerActivity_Detail(sequelize, DataTypes);
  var DEPO_ContainerCondition = _DEPO_ContainerCondition(sequelize, DataTypes);
  var DEPO_ContainerHold = _DEPO_ContainerHold(sequelize, DataTypes);
  var DEPO_ContainerHold_Detail = _DEPO_ContainerHold_Detail(sequelize, DataTypes);
  var DEPO_ContainerHold_RestrictMode = _DEPO_ContainerHold_RestrictMode(sequelize, DataTypes);
  var DEPO_ContainerKind = _DEPO_ContainerKind(sequelize, DataTypes);
  var DEPO_ContainerStatus = _DEPO_ContainerStatus(sequelize, DataTypes);
  var DEPO_LinesTariff = _DEPO_LinesTariff(sequelize, DataTypes);
  var DEPO_LinesTariff_PerDay = _DEPO_LinesTariff_PerDay(sequelize, DataTypes);
  var DEPO_LinesTariff_PerMove = _DEPO_LinesTariff_PerMove(sequelize, DataTypes);
  var DEPO_LoadingType = _DEPO_LoadingType(sequelize, DataTypes);
  var DEPO_Location = _DEPO_Location(sequelize, DataTypes);
  var DEPO_ManufactureCoding = _DEPO_ManufactureCoding(sequelize, DataTypes);
  var DEPO_Receipt = _DEPO_Receipt(sequelize, DataTypes);
  var DEPO_Receipt_Detail = _DEPO_Receipt_Detail(sequelize, DataTypes);
  var DEPO_ShiftSetup = _DEPO_ShiftSetup(sequelize, DataTypes);
  var DEPO_StackingArea = _DEPO_StackingArea(sequelize, DataTypes);
  var DEPO_SubLine = _DEPO_SubLine(sequelize, DataTypes);
  var Delivery_Orders = _Delivery_Orders(sequelize, DataTypes);
  var Dimensions = _Dimensions(sequelize, DataTypes);
  var DocumentSignRequest = _DocumentSignRequest(sequelize, DataTypes);
  var Employees = _Employees(sequelize, DataTypes);
  var EversignDocumentTemplate = _EversignDocumentTemplate(sequelize, DataTypes);
  var GL_AccSecurityGrp = _GL_AccSecurityGrp(sequelize, DataTypes);
  var GL_AccSecurityGrpDetail = _GL_AccSecurityGrpDetail(sequelize, DataTypes);
  var GL_AccSecurityGrpParentDetail = _GL_AccSecurityGrpParentDetail(sequelize, DataTypes);
  var GL_AccSecurityGrpUserRight = _GL_AccSecurityGrpUserRight(sequelize, DataTypes);
  var GL_AccountBalances = _GL_AccountBalances(sequelize, DataTypes);
  var GL_AccountIntegration = _GL_AccountIntegration(sequelize, DataTypes);
  var GL_AccountIntegration_Charges = _GL_AccountIntegration_Charges(sequelize, DataTypes);
  var GL_AccountIntegration_Charges_Log = _GL_AccountIntegration_Charges_Log(sequelize, DataTypes);
  var GL_AccountIntegration_Common = _GL_AccountIntegration_Common(sequelize, DataTypes);
  var GL_AccountIntegration_Common_Log = _GL_AccountIntegration_Common_Log(sequelize, DataTypes);
  var GL_AccountIntegration_PartyParent = _GL_AccountIntegration_PartyParent(sequelize, DataTypes);
  var GL_AccountIntegration_PartyParent_Log = _GL_AccountIntegration_PartyParent_Log(sequelize, DataTypes);
  var GL_AccountMode = _GL_AccountMode(sequelize, DataTypes);
  var GL_AccountType = _GL_AccountType(sequelize, DataTypes);
  var GL_AgentInvoice = _GL_AgentInvoice(sequelize, DataTypes);
  var GL_AgentInvoiceOpening = _GL_AgentInvoiceOpening(sequelize, DataTypes);
  var GL_AgentInvoice_Charges = _GL_AgentInvoice_Charges(sequelize, DataTypes);
  var GL_AgentInvoice_Charges_Cont = _GL_AgentInvoice_Charges_Cont(sequelize, DataTypes);
  var GL_AgentInvoice_Charges_Tax = _GL_AgentInvoice_Charges_Tax(sequelize, DataTypes);
  var GL_AgentInvoice_History = _GL_AgentInvoice_History(sequelize, DataTypes);
  var GL_AgentInvoice_History_Charges = _GL_AgentInvoice_History_Charges(sequelize, DataTypes);
  var GL_AgentInvoice_TaxInvoice = _GL_AgentInvoice_TaxInvoice(sequelize, DataTypes);
  var GL_AgentPaymentRequisition = _GL_AgentPaymentRequisition(sequelize, DataTypes);
  var GL_AgentPaymentRequisition_Detail = _GL_AgentPaymentRequisition_Detail(sequelize, DataTypes);
  var GL_AgentReceiptPayment = _GL_AgentReceiptPayment(sequelize, DataTypes);
  var GL_AgentReceiptPayment_Detail = _GL_AgentReceiptPayment_Detail(sequelize, DataTypes);
  var GL_AgentReceiptPayment_History = _GL_AgentReceiptPayment_History(sequelize, DataTypes);
  var GL_AgentReceiptPayment_History_Detail = _GL_AgentReceiptPayment_History_Detail(sequelize, DataTypes);
  var GL_BalanceCIH = _GL_BalanceCIH(sequelize, DataTypes);
  var GL_Budget = _GL_Budget(sequelize, DataTypes);
  var GL_Budget_Detail = _GL_Budget_Detail(sequelize, DataTypes);
  var GL_Budget_Detail_MB = _GL_Budget_Detail_MB(sequelize, DataTypes);
  var GL_CCGroup = _GL_CCGroup(sequelize, DataTypes);
  var GL_CCGroup_CostCenter = _GL_CCGroup_CostCenter(sequelize, DataTypes);
  var GL_COA = _GL_COA(sequelize, DataTypes);
  var GL_COACategory = _GL_COACategory(sequelize, DataTypes);
  var GL_COAPNLCategory = _GL_COAPNLCategory(sequelize, DataTypes);
  var GL_COARule = _GL_COARule(sequelize, DataTypes);
  var GL_COASubCategory = _GL_COASubCategory(sequelize, DataTypes);
  var GL_COA_Bank = _GL_COA_Bank(sequelize, DataTypes);
  var GL_COA_Company = _GL_COA_Company(sequelize, DataTypes);
  var GL_COA_Customer = _GL_COA_Customer(sequelize, DataTypes);
  var GL_COA_Employee = _GL_COA_Employee(sequelize, DataTypes);
  var GL_COA_PartyInfo = _GL_COA_PartyInfo(sequelize, DataTypes);
  var GL_COA_PropertyRule = _GL_COA_PropertyRule(sequelize, DataTypes);
  var GL_COA_Supplier = _GL_COA_Supplier(sequelize, DataTypes);
  var GL_ChequeBookStock = _GL_ChequeBookStock(sequelize, DataTypes);
  var GL_ChequeBookStock_Detail = _GL_ChequeBookStock_Detail(sequelize, DataTypes);
  var GL_ChequeOpening = _GL_ChequeOpening(sequelize, DataTypes);
  var GL_ChequeOpening_Properties = _GL_ChequeOpening_Properties(sequelize, DataTypes);
  var GL_ChequeOpening_VDProperties = _GL_ChequeOpening_VDProperties(sequelize, DataTypes);
  var GL_ChequeStatus = _GL_ChequeStatus(sequelize, DataTypes);
  var GL_ChequeType = _GL_ChequeType(sequelize, DataTypes);
  var GL_Currencies = _GL_Currencies(sequelize, DataTypes);
  var GL_FiscalYear = _GL_FiscalYear(sequelize, DataTypes);
  var GL_FiscalYear_Quarter = _GL_FiscalYear_Quarter(sequelize, DataTypes);
  var GL_InvAdjustments = _GL_InvAdjustments(sequelize, DataTypes);
  var GL_InvAdjustments_History = _GL_InvAdjustments_History(sequelize, DataTypes);
  var GL_InvMode = _GL_InvMode(sequelize, DataTypes);
  var GL_InvTaxType = _GL_InvTaxType(sequelize, DataTypes);
  var GL_InvoiceBalance = _GL_InvoiceBalance(sequelize, DataTypes);
  var GL_Invoices = _GL_Invoices(sequelize, DataTypes);
  var GL_Invoices_History = _GL_Invoices_History(sequelize, DataTypes);
  var GL_Invoices_Properties = _GL_Invoices_Properties(sequelize, DataTypes);
  var GL_Invoices_Properties_History = _GL_Invoices_Properties_History(sequelize, DataTypes);
  var GL_JobBill = _GL_JobBill(sequelize, DataTypes);
  var GL_JobBillOpening = _GL_JobBillOpening(sequelize, DataTypes);
  var GL_JobBillOpening_Advance = _GL_JobBillOpening_Advance(sequelize, DataTypes);
  var GL_JobBill_Charges = _GL_JobBill_Charges(sequelize, DataTypes);
  var GL_JobBill_Charges_Cont = _GL_JobBill_Charges_Cont(sequelize, DataTypes);
  var GL_JobBill_Charges_Tax = _GL_JobBill_Charges_Tax(sequelize, DataTypes);
  var GL_JobBill_History = _GL_JobBill_History(sequelize, DataTypes);
  var GL_JobBill_History_Charges = _GL_JobBill_History_Charges(sequelize, DataTypes);
  var GL_JobBill_TaxInvoice = _GL_JobBill_TaxInvoice(sequelize, DataTypes);
  var GL_JobDirectExpRev = _GL_JobDirectExpRev(sequelize, DataTypes);
  var GL_JobDirectExpRev_Charges = _GL_JobDirectExpRev_Charges(sequelize, DataTypes);
  var GL_JobDirectExpRev_Charges_Tax = _GL_JobDirectExpRev_Charges_Tax(sequelize, DataTypes);
  var GL_JobDirectExpRev_History = _GL_JobDirectExpRev_History(sequelize, DataTypes);
  var GL_JobDirectExpRev_History_Charges = _GL_JobDirectExpRev_History_Charges(sequelize, DataTypes);
  var GL_JobInvoice = _GL_JobInvoice(sequelize, DataTypes);
  var GL_JobInvoiceDispute = _GL_JobInvoiceDispute(sequelize, DataTypes);
  var GL_JobInvoiceOpening = _GL_JobInvoiceOpening(sequelize, DataTypes);
  var GL_JobInvoiceOpening_Advance = _GL_JobInvoiceOpening_Advance(sequelize, DataTypes);
  var GL_JobInvoice_Charges = _GL_JobInvoice_Charges(sequelize, DataTypes);
  var GL_JobInvoice_Charges_Cont = _GL_JobInvoice_Charges_Cont(sequelize, DataTypes);
  var GL_JobInvoice_Charges_Cont_DaysBreakup = _GL_JobInvoice_Charges_Cont_DaysBreakup(sequelize, DataTypes);
  var GL_JobInvoice_Charges_Tax = _GL_JobInvoice_Charges_Tax(sequelize, DataTypes);
  var GL_JobInvoice_History = _GL_JobInvoice_History(sequelize, DataTypes);
  var GL_JobInvoice_History_Charges = _GL_JobInvoice_History_Charges(sequelize, DataTypes);
  var GL_JobInvoice_PaidByClient = _GL_JobInvoice_PaidByClient(sequelize, DataTypes);
  var GL_JobInvoice_TaxInvoice = _GL_JobInvoice_TaxInvoice(sequelize, DataTypes);
  var GL_JobOnlineReceipt = _GL_JobOnlineReceipt(sequelize, DataTypes);
  var GL_JobOnlineReceiptACHAddress = _GL_JobOnlineReceiptACHAddress(sequelize, DataTypes);
  var GL_JobOnlineReceiptBillingAddress = _GL_JobOnlineReceiptBillingAddress(sequelize, DataTypes);
  var GL_JobOnlineReceipt_Detail = _GL_JobOnlineReceipt_Detail(sequelize, DataTypes);
  var GL_JobPayment = _GL_JobPayment(sequelize, DataTypes);
  var GL_JobPaymentRequisition = _GL_JobPaymentRequisition(sequelize, DataTypes);
  var GL_JobPaymentRequisition_Detail = _GL_JobPaymentRequisition_Detail(sequelize, DataTypes);
  var GL_JobPayment_Detail = _GL_JobPayment_Detail(sequelize, DataTypes);
  var GL_JobPayment_History = _GL_JobPayment_History(sequelize, DataTypes);
  var GL_JobPayment_History_Detail = _GL_JobPayment_History_Detail(sequelize, DataTypes);
  var GL_JobReceipt = _GL_JobReceipt(sequelize, DataTypes);
  var GL_JobReceipt_Detail = _GL_JobReceipt_Detail(sequelize, DataTypes);
  var GL_JobReceipt_History = _GL_JobReceipt_History(sequelize, DataTypes);
  var GL_JobReceipt_History_Detail = _GL_JobReceipt_History_Detail(sequelize, DataTypes);
  var GL_JobSecurity = _GL_JobSecurity(sequelize, DataTypes);
  var GL_JobSecurityRefundRequisition = _GL_JobSecurityRefundRequisition(sequelize, DataTypes);
  var GL_JobSecurityTran = _GL_JobSecurityTran(sequelize, DataTypes);
  var GL_JobSecurityTranHistory = _GL_JobSecurityTranHistory(sequelize, DataTypes);
  var GL_JobSettlement = _GL_JobSettlement(sequelize, DataTypes);
  var GL_JobSettlement_Detail = _GL_JobSettlement_Detail(sequelize, DataTypes);
  var GL_ModuleIntegerationSetup = _GL_ModuleIntegerationSetup(sequelize, DataTypes);
  var GL_ModuleIntegrationLog = _GL_ModuleIntegrationLog(sequelize, DataTypes);
  var GL_PaymentType = _GL_PaymentType(sequelize, DataTypes);
  var GL_Periods = _GL_Periods(sequelize, DataTypes);
  var GL_PrincipalManualSOA = _GL_PrincipalManualSOA(sequelize, DataTypes);
  var GL_PrincipalManualSOA_Charges = _GL_PrincipalManualSOA_Charges(sequelize, DataTypes);
  var GL_PrincipalManualSOA_Charges_Cont = _GL_PrincipalManualSOA_Charges_Cont(sequelize, DataTypes);
  var GL_PrincipalManualSOA_Charges_Tax = _GL_PrincipalManualSOA_Charges_Tax(sequelize, DataTypes);
  var GL_PrincipalReceiptPayment = _GL_PrincipalReceiptPayment(sequelize, DataTypes);
  var GL_PrincipalReceiptPayment_Detail = _GL_PrincipalReceiptPayment_Detail(sequelize, DataTypes);
  var GL_PrincipleInvoice = _GL_PrincipleInvoice(sequelize, DataTypes);
  var GL_PrincipleInvoiceOpening = _GL_PrincipleInvoiceOpening(sequelize, DataTypes);
  var GL_PrincipleInvoice_Charges = _GL_PrincipleInvoice_Charges(sequelize, DataTypes);
  var GL_PrincipleInvoice_Charges_Cont = _GL_PrincipleInvoice_Charges_Cont(sequelize, DataTypes);
  var GL_PrincipleInvoice_Charges_Tax = _GL_PrincipleInvoice_Charges_Tax(sequelize, DataTypes);
  var GL_PrincipleInvoice_TaxInvoice = _GL_PrincipleInvoice_TaxInvoice(sequelize, DataTypes);
  var GL_ProcessLog = _GL_ProcessLog(sequelize, DataTypes);
  var GL_Properties = _GL_Properties(sequelize, DataTypes);
  var GL_PropertiesLOV = _GL_PropertiesLOV(sequelize, DataTypes);
  var GL_Properties_Usage = _GL_Properties_Usage(sequelize, DataTypes);
  var GL_RecDateSetup = _GL_RecDateSetup(sequelize, DataTypes);
  var GL_ReconciledData = _GL_ReconciledData(sequelize, DataTypes);
  var GL_ReconciledData_Detail = _GL_ReconciledData_Detail(sequelize, DataTypes);
  var GL_ReconciledLockedData = _GL_ReconciledLockedData(sequelize, DataTypes);
  var GL_Requisition = _GL_Requisition(sequelize, DataTypes);
  var GL_Requisition_Detail = _GL_Requisition_Detail(sequelize, DataTypes);
  var GL_Requisition_Detail_Adj = _GL_Requisition_Detail_Adj(sequelize, DataTypes);
  var GL_Requisition_Detail_SetAdj = _GL_Requisition_Detail_SetAdj(sequelize, DataTypes);
  var GL_RunningDetention = _GL_RunningDetention(sequelize, DataTypes);
  var GL_RunningDetention_Charges = _GL_RunningDetention_Charges(sequelize, DataTypes);
  var GL_RunningDetention_Charges_Cont = _GL_RunningDetention_Charges_Cont(sequelize, DataTypes);
  var GL_RunningDetention_Charges_Cont_DaysBreakup = _GL_RunningDetention_Charges_Cont_DaysBreakup(sequelize, DataTypes);
  var GL_SInsAdjustments = _GL_SInsAdjustments(sequelize, DataTypes);
  var GL_SInsAdjustments_History = _GL_SInsAdjustments_History(sequelize, DataTypes);
  var GL_SettlementBalance = _GL_SettlementBalance(sequelize, DataTypes);
  var GL_SettlementInstrument = _GL_SettlementInstrument(sequelize, DataTypes);
  var GL_SettlementInstrument_History = _GL_SettlementInstrument_History(sequelize, DataTypes);
  var GL_TerminalInvoice = _GL_TerminalInvoice(sequelize, DataTypes);
  var GL_TerminalInvoice_Detail = _GL_TerminalInvoice_Detail(sequelize, DataTypes);
  var GL_UDFHeading = _GL_UDFHeading(sequelize, DataTypes);
  var GL_UnAccruedEquipmentInvoice = _GL_UnAccruedEquipmentInvoice(sequelize, DataTypes);
  var GL_UnAccruedEquipmentInvoice_DaysBreakup = _GL_UnAccruedEquipmentInvoice_DaysBreakup(sequelize, DataTypes);
  var GL_Voucher = _GL_Voucher(sequelize, DataTypes);
  var GL_VoucherFormType = _GL_VoucherFormType(sequelize, DataTypes);
  var GL_VoucherType = _GL_VoucherType(sequelize, DataTypes);
  var GL_VoucherUsageCode = _GL_VoucherUsageCode(sequelize, DataTypes);
  var GL_Voucher_Detail = _GL_Voucher_Detail(sequelize, DataTypes);
  var GL_Voucher_Detail_ChequeInfo = _GL_Voucher_Detail_ChequeInfo(sequelize, DataTypes);
  var GL_Voucher_Detail_History = _GL_Voucher_Detail_History(sequelize, DataTypes);
  var GL_Voucher_Detail_Mem = _GL_Voucher_Detail_Mem(sequelize, DataTypes);
  var GL_Voucher_Detail_PaymentChqInfo = _GL_Voucher_Detail_PaymentChqInfo(sequelize, DataTypes);
  var GL_Voucher_Detail_Properties = _GL_Voucher_Detail_Properties(sequelize, DataTypes);
  var GL_Voucher_Detail_Properties_History = _GL_Voucher_Detail_Properties_History(sequelize, DataTypes);
  var GL_Voucher_Detail_Properties_Mem = _GL_Voucher_Detail_Properties_Mem(sequelize, DataTypes);
  var GL_Voucher_History = _GL_Voucher_History(sequelize, DataTypes);
  var GL_Voucher_Mem = _GL_Voucher_Mem(sequelize, DataTypes);
  var GL_Voucher_Properties = _GL_Voucher_Properties(sequelize, DataTypes);
  var GL_Voucher_Properties_History = _GL_Voucher_Properties_History(sequelize, DataTypes);
  var GL_Voucher_Properties_Mem = _GL_Voucher_Properties_Mem(sequelize, DataTypes);
  var GL_WTHDeposit = _GL_WTHDeposit(sequelize, DataTypes);
  var GL_WTHDeposit_Detail = _GL_WTHDeposit_Detail(sequelize, DataTypes);
  var Gen_AEJobNotes = _Gen_AEJobNotes(sequelize, DataTypes);
  var Gen_AIJobNotes = _Gen_AIJobNotes(sequelize, DataTypes);
  var Gen_APDashboardSetup = _Gen_APDashboardSetup(sequelize, DataTypes);
  var Gen_APIData = _Gen_APIData(sequelize, DataTypes);
  var Gen_APUserDashboardPreference = _Gen_APUserDashboardPreference(sequelize, DataTypes);
  var Gen_ActiveInactiveLog = _Gen_ActiveInactiveLog(sequelize, DataTypes);
  var Gen_ActiveInactiveReason = _Gen_ActiveInactiveReason(sequelize, DataTypes);
  var Gen_ActivityAlerts = _Gen_ActivityAlerts(sequelize, DataTypes);
  var Gen_ActivityAlertsSubscription = _Gen_ActivityAlertsSubscription(sequelize, DataTypes);
  var Gen_ActivityAlertsSubscription_Email = _Gen_ActivityAlertsSubscription_Email(sequelize, DataTypes);
  var Gen_ActivityAlertsSubscription_SMS = _Gen_ActivityAlertsSubscription_SMS(sequelize, DataTypes);
  var Gen_ActivityAlertsSubscription_User = _Gen_ActivityAlertsSubscription_User(sequelize, DataTypes);
  var Gen_AlertType = _Gen_AlertType(sequelize, DataTypes);
  var Gen_BLMandatoryFieldsSetup = _Gen_BLMandatoryFieldsSetup(sequelize, DataTypes);
  var Gen_BLTemplate = _Gen_BLTemplate(sequelize, DataTypes);
  var Gen_BLTemplate_AttachSheets = _Gen_BLTemplate_AttachSheets(sequelize, DataTypes);
  var Gen_BankDetailRegister = _Gen_BankDetailRegister(sequelize, DataTypes);
  var Gen_BankSubType = _Gen_BankSubType(sequelize, DataTypes);
  var Gen_Border = _Gen_Border(sequelize, DataTypes);
  var Gen_BulkProcessActions = _Gen_BulkProcessActions(sequelize, DataTypes);
  var Gen_BulkProcessLog = _Gen_BulkProcessLog(sequelize, DataTypes);
  var Gen_CARF = _Gen_CARF(sequelize, DataTypes);
  var Gen_CARFLog = _Gen_CARFLog(sequelize, DataTypes);
  var Gen_CARF_Exception = _Gen_CARF_Exception(sequelize, DataTypes);
  var Gen_CARF_Reason = _Gen_CARF_Reason(sequelize, DataTypes);
  var Gen_CC_RptSetup = _Gen_CC_RptSetup(sequelize, DataTypes);
  var Gen_CNICDetail = _Gen_CNICDetail(sequelize, DataTypes);
  var Gen_CNICDetail_Log = _Gen_CNICDetail_Log(sequelize, DataTypes);
  var Gen_CPDashboardSetup = _Gen_CPDashboardSetup(sequelize, DataTypes);
  var Gen_CPUserDashboardPreference = _Gen_CPUserDashboardPreference(sequelize, DataTypes);
  var Gen_CargoTypeFile = _Gen_CargoTypeFile(sequelize, DataTypes);
  var Gen_Charges = _Gen_Charges(sequelize, DataTypes);
  var Gen_ChargesNature = _Gen_ChargesNature(sequelize, DataTypes);
  var Gen_ChargesReportingGroup = _Gen_ChargesReportingGroup(sequelize, DataTypes);
  var Gen_ChargesTariff = _Gen_ChargesTariff(sequelize, DataTypes);
  var Gen_ChargesTariffGeneralWeightage = _Gen_ChargesTariffGeneralWeightage(sequelize, DataTypes);
  var Gen_ChargesTariff_AirDetail = _Gen_ChargesTariff_AirDetail(sequelize, DataTypes);
  var Gen_ChargesTariff_Cleaning = _Gen_ChargesTariff_Cleaning(sequelize, DataTypes);
  var Gen_ChargesTariff_Detail = _Gen_ChargesTariff_Detail(sequelize, DataTypes);
  var Gen_ChargesTariff_Detention = _Gen_ChargesTariff_Detention(sequelize, DataTypes);
  var Gen_ChargesTariff_LatePickup = _Gen_ChargesTariff_LatePickup(sequelize, DataTypes);
  var Gen_ChargesTariff_Placement = _Gen_ChargesTariff_Placement(sequelize, DataTypes);
  var Gen_ChargesTariff_PlugIn = _Gen_ChargesTariff_PlugIn(sequelize, DataTypes);
  var Gen_ChargesTariff_Storage = _Gen_ChargesTariff_Storage(sequelize, DataTypes);
  var Gen_ChargesVATCategory = _Gen_ChargesVATCategory(sequelize, DataTypes);
  var Gen_Charges_Category = _Gen_Charges_Category(sequelize, DataTypes);
  var Gen_Charges_SubCompanyRight = _Gen_Charges_SubCompanyRight(sequelize, DataTypes);
  var Gen_Charges_TaxAuthority = _Gen_Charges_TaxAuthority(sequelize, DataTypes);
  var Gen_Clauses = _Gen_Clauses(sequelize, DataTypes);
  var Gen_CloudInfo = _Gen_CloudInfo(sequelize, DataTypes);
  var Gen_Commodity = _Gen_Commodity(sequelize, DataTypes);
  var Gen_CommodityCargoType = _Gen_CommodityCargoType(sequelize, DataTypes);
  var Gen_CommodityGroup = _Gen_CommodityGroup(sequelize, DataTypes);
  var Gen_CommonLOV = _Gen_CommonLOV(sequelize, DataTypes);
  var Gen_CommonReportParameter = _Gen_CommonReportParameter(sequelize, DataTypes);
  var Gen_CommonStatus = _Gen_CommonStatus(sequelize, DataTypes);
  var Gen_CompanInfo = _Gen_CompanInfo(sequelize, DataTypes);
  var Gen_ContainerDepot = _Gen_ContainerDepot(sequelize, DataTypes);
  var Gen_ContainerOwner = _Gen_ContainerOwner(sequelize, DataTypes);
  var Gen_CrucialChangesLog = _Gen_CrucialChangesLog(sequelize, DataTypes);
  var Gen_CurrencyMarketRate = _Gen_CurrencyMarketRate(sequelize, DataTypes);
  var Gen_CustomStatus = _Gen_CustomStatus(sequelize, DataTypes);
  var Gen_CustomerGroup = _Gen_CustomerGroup(sequelize, DataTypes);
  var Gen_Dashboard = _Gen_Dashboard(sequelize, DataTypes);
  var Gen_DashboardPolicy = _Gen_DashboardPolicy(sequelize, DataTypes);
  var Gen_DashboardSetup = _Gen_DashboardSetup(sequelize, DataTypes);
  var Gen_DashboardSetupPolicy = _Gen_DashboardSetupPolicy(sequelize, DataTypes);
  var Gen_DashboardType = _Gen_DashboardType(sequelize, DataTypes);
  var Gen_Dashboard_Executive = _Gen_Dashboard_Executive(sequelize, DataTypes);
  var Gen_DeliveryOrderRequest = _Gen_DeliveryOrderRequest(sequelize, DataTypes);
  var Gen_DeliveryType = _Gen_DeliveryType(sequelize, DataTypes);
  var Gen_Department = _Gen_Department(sequelize, DataTypes);
  var Gen_Department_UserRights = _Gen_Department_UserRights(sequelize, DataTypes);
  var Gen_Designation = _Gen_Designation(sequelize, DataTypes);
  var Gen_DetentionTariff = _Gen_DetentionTariff(sequelize, DataTypes);
  var Gen_DetentionTariff_Detention = _Gen_DetentionTariff_Detention(sequelize, DataTypes);
  var Gen_DetentionTariff_History = _Gen_DetentionTariff_History(sequelize, DataTypes);
  var Gen_DetentionTariff_History_Detail = _Gen_DetentionTariff_History_Detail(sequelize, DataTypes);
  var Gen_DetentionTariff_PlugIn = _Gen_DetentionTariff_PlugIn(sequelize, DataTypes);
  var Gen_Dimension = _Gen_Dimension(sequelize, DataTypes);
  var Gen_Dimension_Detail = _Gen_Dimension_Detail(sequelize, DataTypes);
  var Gen_Document = _Gen_Document(sequelize, DataTypes);
  var Gen_DocumentType = _Gen_DocumentType(sequelize, DataTypes);
  var Gen_Document_Deleted = _Gen_Document_Deleted(sequelize, DataTypes);
  var Gen_DrawnBank = _Gen_DrawnBank(sequelize, DataTypes);
  var Gen_EDIFormat = _Gen_EDIFormat(sequelize, DataTypes);
  var Gen_EDIProcessed = _Gen_EDIProcessed(sequelize, DataTypes);
  var Gen_EDIProcessed_BLDetail = _Gen_EDIProcessed_BLDetail(sequelize, DataTypes);
  var Gen_EDIProcessed_Charge = _Gen_EDIProcessed_Charge(sequelize, DataTypes);
  var Gen_EDIProcessed_Container = _Gen_EDIProcessed_Container(sequelize, DataTypes);
  var Gen_EDO = _Gen_EDO(sequelize, DataTypes);
  var Gen_EDOFormat = _Gen_EDOFormat(sequelize, DataTypes);
  var Gen_EDO_AcknowledgeDetail = _Gen_EDO_AcknowledgeDetail(sequelize, DataTypes);
  var Gen_EDO_Process = _Gen_EDO_Process(sequelize, DataTypes);
  var Gen_EDO_Process_Detail = _Gen_EDO_Process_Detail(sequelize, DataTypes);
  var Gen_EDO_SubmissionDetail = _Gen_EDO_SubmissionDetail(sequelize, DataTypes);
  var Gen_EDO_TemplateSetup = _Gen_EDO_TemplateSetup(sequelize, DataTypes);
  var Gen_EPAS_SerialType = _Gen_EPAS_SerialType(sequelize, DataTypes);
  var Gen_EditorType = _Gen_EditorType(sequelize, DataTypes);
  var Gen_EmailRecipient = _Gen_EmailRecipient(sequelize, DataTypes);
  var Gen_EmailTemplate = _Gen_EmailTemplate(sequelize, DataTypes);
  var Gen_EmailTemplateTag = _Gen_EmailTemplateTag(sequelize, DataTypes);
  var Gen_EmailTemplateType = _Gen_EmailTemplateType(sequelize, DataTypes);
  var Gen_Email_Log = _Gen_Email_Log(sequelize, DataTypes);
  var Gen_Email_Log_History = _Gen_Email_Log_History(sequelize, DataTypes);
  var Gen_EquipmentSize = _Gen_EquipmentSize(sequelize, DataTypes);
  var Gen_EquipmentSizeType = _Gen_EquipmentSizeType(sequelize, DataTypes);
  var Gen_EquipmentType = _Gen_EquipmentType(sequelize, DataTypes);
  var Gen_ExchRateRange = _Gen_ExchRateRange(sequelize, DataTypes);
  var Gen_ExchRateRange_Detail = _Gen_ExchRateRange_Detail(sequelize, DataTypes);
  var Gen_Expenses = _Gen_Expenses(sequelize, DataTypes);
  var Gen_FTPSetting = _Gen_FTPSetting(sequelize, DataTypes);
  var Gen_FileCategory = _Gen_FileCategory(sequelize, DataTypes);
  var Gen_Flight_Schedule = _Gen_Flight_Schedule(sequelize, DataTypes);
  var Gen_Flight_Schedule_Detail = _Gen_Flight_Schedule_Detail(sequelize, DataTypes);
  var Gen_Flight_Schedule_ExchRateDetail = _Gen_Flight_Schedule_ExchRateDetail(sequelize, DataTypes);
  var Gen_Forms = _Gen_Forms(sequelize, DataTypes);
  var Gen_Forms_Functions = _Gen_Forms_Functions(sequelize, DataTypes);
  var Gen_FreightClassType = _Gen_FreightClassType(sequelize, DataTypes);
  var Gen_Frequency = _Gen_Frequency(sequelize, DataTypes);
  var Gen_FrequencyPeriod = _Gen_FrequencyPeriod(sequelize, DataTypes);
  var Gen_Functions = _Gen_Functions(sequelize, DataTypes);
  var Gen_HazmatClassType = _Gen_HazmatClassType(sequelize, DataTypes);
  var Gen_HazmatPackingGroup = _Gen_HazmatPackingGroup(sequelize, DataTypes);
  var Gen_HistoryType = _Gen_HistoryType(sequelize, DataTypes);
  var Gen_ISoftCharge = _Gen_ISoftCharge(sequelize, DataTypes);
  var Gen_ISoftCommodityMapping = _Gen_ISoftCommodityMapping(sequelize, DataTypes);
  var Gen_ISoftEmployeeMapping = _Gen_ISoftEmployeeMapping(sequelize, DataTypes);
  var Gen_ISoftEquipmentSizeTypeMapping = _Gen_ISoftEquipmentSizeTypeMapping(sequelize, DataTypes);
  var Gen_ISoftPackingUnit = _Gen_ISoftPackingUnit(sequelize, DataTypes);
  var Gen_ISoftParty = _Gen_ISoftParty(sequelize, DataTypes);
  var Gen_ISoftPartyContact = _Gen_ISoftPartyContact(sequelize, DataTypes);
  var Gen_ISoftPartyLocation = _Gen_ISoftPartyLocation(sequelize, DataTypes);
  var Gen_ISoftVesselMapping = _Gen_ISoftVesselMapping(sequelize, DataTypes);
  var Gen_IncoTerms = _Gen_IncoTerms(sequelize, DataTypes);
  var Gen_IndexType = _Gen_IndexType(sequelize, DataTypes);
  var Gen_InsuranceCompany = _Gen_InsuranceCompany(sequelize, DataTypes);
  var Gen_InsuranceType = _Gen_InsuranceType(sequelize, DataTypes);
  var Gen_JobCancelReason = _Gen_JobCancelReason(sequelize, DataTypes);
  var Gen_JobNature = _Gen_JobNature(sequelize, DataTypes);
  var Gen_JobSubType = _Gen_JobSubType(sequelize, DataTypes);
  var Gen_JobType = _Gen_JobType(sequelize, DataTypes);
  var Gen_LCLStorageTariff = _Gen_LCLStorageTariff(sequelize, DataTypes);
  var Gen_LCLStorageTariff_DG = _Gen_LCLStorageTariff_DG(sequelize, DataTypes);
  var Gen_LCLStorageTariff_General = _Gen_LCLStorageTariff_General(sequelize, DataTypes);
  var Gen_LetterProcessed = _Gen_LetterProcessed(sequelize, DataTypes);
  var Gen_LetterTemplate = _Gen_LetterTemplate(sequelize, DataTypes);
  var Gen_LetterTemplateTag = _Gen_LetterTemplateTag(sequelize, DataTypes);
  var Gen_LocalCustom = _Gen_LocalCustom(sequelize, DataTypes);
  var Gen_Localization = _Gen_Localization(sequelize, DataTypes);
  var Gen_Localize = _Gen_Localize(sequelize, DataTypes);
  var Gen_ManifestHeader = _Gen_ManifestHeader(sequelize, DataTypes);
  var Gen_MileStone = _Gen_MileStone(sequelize, DataTypes);
  var Gen_MileStone_Detail = _Gen_MileStone_Detail(sequelize, DataTypes);
  var Gen_NearByPorts = _Gen_NearByPorts(sequelize, DataTypes);
  var Gen_NewsAlert = _Gen_NewsAlert(sequelize, DataTypes);
  var Gen_NonCommercialDelivery = _Gen_NonCommercialDelivery(sequelize, DataTypes);
  var Gen_NonCommercialPickup = _Gen_NonCommercialPickup(sequelize, DataTypes);
  var Gen_Notification = _Gen_Notification(sequelize, DataTypes);
  var Gen_OperationType = _Gen_OperationType(sequelize, DataTypes);
  var Gen_OverseasAgentNetwork = _Gen_OverseasAgentNetwork(sequelize, DataTypes);
  var Gen_PEDIFileType = _Gen_PEDIFileType(sequelize, DataTypes);
  var Gen_PEDIMapping = _Gen_PEDIMapping(sequelize, DataTypes);
  var Gen_PEDIMappingType = _Gen_PEDIMappingType(sequelize, DataTypes);
  var Gen_PODetails = _Gen_PODetails(sequelize, DataTypes);
  var Gen_Parties = _Gen_Parties(sequelize, DataTypes);
  var Gen_PartiesCommitment = _Gen_PartiesCommitment(sequelize, DataTypes);
  var Gen_PartiesCommitment_Detail = _Gen_PartiesCommitment_Detail(sequelize, DataTypes);
  var Gen_Parties_Alerts = _Gen_Parties_Alerts(sequelize, DataTypes);
  var Gen_Parties_CommodityDetail = _Gen_Parties_CommodityDetail(sequelize, DataTypes);
  var Gen_Parties_CommonDetail = _Gen_Parties_CommonDetail(sequelize, DataTypes);
  var Gen_Parties_Contacts = _Gen_Parties_Contacts(sequelize, DataTypes);
  var Gen_Parties_Contacts_Events = _Gen_Parties_Contacts_Events(sequelize, DataTypes);
  var Gen_Parties_CostCenterRight = _Gen_Parties_CostCenterRight(sequelize, DataTypes);
  var Gen_Parties_Exception = _Gen_Parties_Exception(sequelize, DataTypes);
  var Gen_Parties_InsuranceDetail = _Gen_Parties_InsuranceDetail(sequelize, DataTypes);
  var Gen_Parties_Locations = _Gen_Parties_Locations(sequelize, DataTypes);
  var Gen_Parties_Notification = _Gen_Parties_Notification(sequelize, DataTypes);
  var Gen_Parties_SubCompanyRight = _Gen_Parties_SubCompanyRight(sequelize, DataTypes);
  var Gen_Parties_Terminal = _Gen_Parties_Terminal(sequelize, DataTypes);
  var Gen_PartyMandatoryFieldsSetup = _Gen_PartyMandatoryFieldsSetup(sequelize, DataTypes);
  var Gen_PaymentTerm = _Gen_PaymentTerm(sequelize, DataTypes);
  var Gen_PortCategory = _Gen_PortCategory(sequelize, DataTypes);
  var Gen_PortCountryException = _Gen_PortCountryException(sequelize, DataTypes);
  var Gen_Port_Exception = _Gen_Port_Exception(sequelize, DataTypes);
  var Gen_PrintOn = _Gen_PrintOn(sequelize, DataTypes);
  var Gen_ProductPackageType = _Gen_ProductPackageType(sequelize, DataTypes);
  var Gen_Quotation = _Gen_Quotation(sequelize, DataTypes);
  var Gen_Quotation_Detail = _Gen_Quotation_Detail(sequelize, DataTypes);
  var Gen_Quotation_Equipment = _Gen_Quotation_Equipment(sequelize, DataTypes);
  var Gen_QuoteTemplate = _Gen_QuoteTemplate(sequelize, DataTypes);
  var Gen_QuoteTemplate_Detail = _Gen_QuoteTemplate_Detail(sequelize, DataTypes);
  var Gen_RateGroup = _Gen_RateGroup(sequelize, DataTypes);
  var Gen_RateUnit = _Gen_RateUnit(sequelize, DataTypes);
  var Gen_ReasonForCredit = _Gen_ReasonForCredit(sequelize, DataTypes);
  var Gen_ReceivedFromPayToParties = _Gen_ReceivedFromPayToParties(sequelize, DataTypes);
  var Gen_Region = _Gen_Region(sequelize, DataTypes);
  var Gen_Report = _Gen_Report(sequelize, DataTypes);
  var Gen_ReportConfiguration = _Gen_ReportConfiguration(sequelize, DataTypes);
  var Gen_ReportConfiguration_Detail = _Gen_ReportConfiguration_Detail(sequelize, DataTypes);
  var Gen_ReportDocument = _Gen_ReportDocument(sequelize, DataTypes);
  var Gen_ReportFilter = _Gen_ReportFilter(sequelize, DataTypes);
  var Gen_ReportSubscription = _Gen_ReportSubscription(sequelize, DataTypes);
  var Gen_ReportSubscription_Detail = _Gen_ReportSubscription_Detail(sequelize, DataTypes);
  var Gen_ReportSubscription_Email = _Gen_ReportSubscription_Email(sequelize, DataTypes);
  var Gen_ReportSubscription_Log = _Gen_ReportSubscription_Log(sequelize, DataTypes);
  var Gen_ReportSubscription_LogMaster = _Gen_ReportSubscription_LogMaster(sequelize, DataTypes);
  var Gen_ReportTextDoc = _Gen_ReportTextDoc(sequelize, DataTypes);
  var Gen_Report_Cubical = _Gen_Report_Cubical(sequelize, DataTypes);
  var Gen_Report_Properties = _Gen_Report_Properties(sequelize, DataTypes);
  var Gen_Report_Properties_Value = _Gen_Report_Properties_Value(sequelize, DataTypes);
  var Gen_Roles = _Gen_Roles(sequelize, DataTypes);
  var Gen_Rows = _Gen_Rows(sequelize, DataTypes);
  var Gen_SEJobNotes = _Gen_SEJobNotes(sequelize, DataTypes);
  var Gen_SIJobNotes = _Gen_SIJobNotes(sequelize, DataTypes);
  var Gen_SMS_Log = _Gen_SMS_Log(sequelize, DataTypes);
  var Gen_SMS_Log_History = _Gen_SMS_Log_History(sequelize, DataTypes);
  var Gen_SalesRep_Status = _Gen_SalesRep_Status(sequelize, DataTypes);
  var Gen_SaveDefaultValue = _Gen_SaveDefaultValue(sequelize, DataTypes);
  var Gen_SeaAccessorialCharge = _Gen_SeaAccessorialCharge(sequelize, DataTypes);
  var Gen_SeaInterimRate = _Gen_SeaInterimRate(sequelize, DataTypes);
  var Gen_SeaPublishRate = _Gen_SeaPublishRate(sequelize, DataTypes);
  var Gen_SecurityDepositStatus = _Gen_SecurityDepositStatus(sequelize, DataTypes);
  var Gen_SecurityFile = _Gen_SecurityFile(sequelize, DataTypes);
  var Gen_SecurityFile_Detention = _Gen_SecurityFile_Detention(sequelize, DataTypes);
  var Gen_SecurityFile_Payable = _Gen_SecurityFile_Payable(sequelize, DataTypes);
  var Gen_SecurityGroup = _Gen_SecurityGroup(sequelize, DataTypes);
  var Gen_SecurityGroup_Authority = _Gen_SecurityGroup_Authority(sequelize, DataTypes);
  var Gen_SecurityHold = _Gen_SecurityHold(sequelize, DataTypes);
  var Gen_SecurityLevel = _Gen_SecurityLevel(sequelize, DataTypes);
  var Gen_SecurityTranStatus = _Gen_SecurityTranStatus(sequelize, DataTypes);
  var Gen_SecurityType = _Gen_SecurityType(sequelize, DataTypes);
  var Gen_SequenceCustomized = _Gen_SequenceCustomized(sequelize, DataTypes);
  var Gen_SequenceDef = _Gen_SequenceDef(sequelize, DataTypes);
  var Gen_SequenceSWC = _Gen_SequenceSWC(sequelize, DataTypes);
  var Gen_Sequences = _Gen_Sequences(sequelize, DataTypes);
  var Gen_SerialException = _Gen_SerialException(sequelize, DataTypes);
  var Gen_ServiceActivityLog = _Gen_ServiceActivityLog(sequelize, DataTypes);
  var Gen_ServiceActivityLogType = _Gen_ServiceActivityLogType(sequelize, DataTypes);
  var Gen_Session = _Gen_Session(sequelize, DataTypes);
  var Gen_ShippingAgencyLicense = _Gen_ShippingAgencyLicense(sequelize, DataTypes);
  var Gen_ShippingLineReleaseType = _Gen_ShippingLineReleaseType(sequelize, DataTypes);
  var Gen_Signatures = _Gen_Signatures(sequelize, DataTypes);
  var Gen_SlabType = _Gen_SlabType(sequelize, DataTypes);
  var Gen_SlabType_Detail = _Gen_SlabType_Detail(sequelize, DataTypes);
  var Gen_Stamps = _Gen_Stamps(sequelize, DataTypes);
  var Gen_SubCompanies = _Gen_SubCompanies(sequelize, DataTypes);
  var Gen_SupplierType = _Gen_SupplierType(sequelize, DataTypes);
  var Gen_SysPolCompanyPolicy = _Gen_SysPolCompanyPolicy(sequelize, DataTypes);
  var Gen_SysPolElementSource = _Gen_SysPolElementSource(sequelize, DataTypes);
  var Gen_SysPolElementType = _Gen_SysPolElementType(sequelize, DataTypes);
  var Gen_SysPolElements = _Gen_SysPolElements(sequelize, DataTypes);
  var Gen_SysPolicyDetail = _Gen_SysPolicyDetail(sequelize, DataTypes);
  var Gen_SysPolicyDetail_Log = _Gen_SysPolicyDetail_Log(sequelize, DataTypes);
  var Gen_SysPolicyMaster = _Gen_SysPolicyMaster(sequelize, DataTypes);
  var Gen_SysPolicy_DODocs = _Gen_SysPolicy_DODocs(sequelize, DataTypes);
  var Gen_SysPolicy_SecurityRefundDocs = _Gen_SysPolicy_SecurityRefundDocs(sequelize, DataTypes);
  var Gen_TaxAuthority = _Gen_TaxAuthority(sequelize, DataTypes);
  var Gen_TaxAuthorityGroup = _Gen_TaxAuthorityGroup(sequelize, DataTypes);
  var Gen_TaxAuthorityGroup_Detail = _Gen_TaxAuthorityGroup_Detail(sequelize, DataTypes);
  var Gen_TaxFilerStatus = _Gen_TaxFilerStatus(sequelize, DataTypes);
  var Gen_TaxInvNature = _Gen_TaxInvNature(sequelize, DataTypes);
  var Gen_TaxRevDistribution = _Gen_TaxRevDistribution(sequelize, DataTypes);
  var Gen_TaxRevDistribution_Detail = _Gen_TaxRevDistribution_Detail(sequelize, DataTypes);
  var Gen_Terminal = _Gen_Terminal(sequelize, DataTypes);
  var Gen_TerminalInvoiceLog = _Gen_TerminalInvoiceLog(sequelize, DataTypes);
  var Gen_TerminalStockRequirement = _Gen_TerminalStockRequirement(sequelize, DataTypes);
  var Gen_TerminalStockRequirement_Detail = _Gen_TerminalStockRequirement_Detail(sequelize, DataTypes);
  var Gen_TracingEventDocLog = _Gen_TracingEventDocLog(sequelize, DataTypes);
  var Gen_TracingEventOprLog = _Gen_TracingEventOprLog(sequelize, DataTypes);
  var Gen_TracingEvents = _Gen_TracingEvents(sequelize, DataTypes);
  var Gen_TracingEventsAutoPick = _Gen_TracingEventsAutoPick(sequelize, DataTypes);
  var Gen_TypeOfIGM = _Gen_TypeOfIGM(sequelize, DataTypes);
  var Gen_ULDContainers = _Gen_ULDContainers(sequelize, DataTypes);
  var Gen_UNAirport = _Gen_UNAirport(sequelize, DataTypes);
  var Gen_UNAirport_Aliases = _Gen_UNAirport_Aliases(sequelize, DataTypes);
  var Gen_UNLocation = _Gen_UNLocation(sequelize, DataTypes);
  var Gen_UNLocation_Aliases = _Gen_UNLocation_Aliases(sequelize, DataTypes);
  var Gen_UNLocation_PortCategory = _Gen_UNLocation_PortCategory(sequelize, DataTypes);
  var Gen_UnCommodity = _Gen_UnCommodity(sequelize, DataTypes);
  var Gen_UnLocationState = _Gen_UnLocationState(sequelize, DataTypes);
  var Gen_Units = _Gen_Units(sequelize, DataTypes);
  var Gen_UnitsOfMeasurment = _Gen_UnitsOfMeasurment(sequelize, DataTypes);
  var Gen_UserAlert_Log = _Gen_UserAlert_Log(sequelize, DataTypes);
  var Gen_UserDashboardPreference = _Gen_UserDashboardPreference(sequelize, DataTypes);
  var Gen_UserDashboardPreference_Detail = _Gen_UserDashboardPreference_Detail(sequelize, DataTypes);
  var Gen_Users = _Gen_Users(sequelize, DataTypes);
  var Gen_VendorGroup = _Gen_VendorGroup(sequelize, DataTypes);
  var Gen_Vessel = _Gen_Vessel(sequelize, DataTypes);
  var Gen_Voyage = _Gen_Voyage(sequelize, DataTypes);
  var Gen_Voyage_ExchRateDetail = _Gen_Voyage_ExchRateDetail(sequelize, DataTypes);
  var Gen_Voyage_Terminal = _Gen_Voyage_Terminal(sequelize, DataTypes);
  var Gen_Wharf = _Gen_Wharf(sequelize, DataTypes);
  var Google_Location = _Google_Location(sequelize, DataTypes);
  var Histories = _Histories(sequelize, DataTypes);
  var INQ_QuoteChargeTemplate = _INQ_QuoteChargeTemplate(sequelize, DataTypes);
  var INQ_QuoteChargeTemplate_Detail = _INQ_QuoteChargeTemplate_Detail(sequelize, DataTypes);
  var INQ_RateFromVendor = _INQ_RateFromVendor(sequelize, DataTypes);
  var INQ_RateFromVendor_Charges = _INQ_RateFromVendor_Charges(sequelize, DataTypes);
  var INQ_RateInquiry = _INQ_RateInquiry(sequelize, DataTypes);
  var INQ_RateInquiry_Detail = _INQ_RateInquiry_Detail(sequelize, DataTypes);
  var INQ_RateRequestToVendor = _INQ_RateRequestToVendor(sequelize, DataTypes);
  var INQ_RateToCustomer = _INQ_RateToCustomer(sequelize, DataTypes);
  var INQ_RateToCustomer_Charges = _INQ_RateToCustomer_Charges(sequelize, DataTypes);
  var Inv_GINChangeLog = _Inv_GINChangeLog(sequelize, DataTypes);
  var Invoice_Losses = _Invoice_Losses(sequelize, DataTypes);
  var Invoice_Transactions = _Invoice_Transactions(sequelize, DataTypes);
  var Invoices = _Invoices(sequelize, DataTypes);
  var Item_Details = _Item_Details(sequelize, DataTypes);
  var Job_notes = _Job_notes(sequelize, DataTypes);
  var KRA_ManifestLog = _KRA_ManifestLog(sequelize, DataTypes);
  var Loading_Programs = _Loading_Programs(sequelize, DataTypes);
  var Log_Activity = _Log_Activity(sequelize, DataTypes);
  var Log_ActivityType = _Log_ActivityType(sequelize, DataTypes);
  var Log_Activity_Detail = _Log_Activity_Detail(sequelize, DataTypes);
  var Log_BrandSetup = _Log_BrandSetup(sequelize, DataTypes);
  var Log_CarrierManifest = _Log_CarrierManifest(sequelize, DataTypes);
  var Log_CarrierManifest_Detail = _Log_CarrierManifest_Detail(sequelize, DataTypes);
  var Log_DutyCalculation = _Log_DutyCalculation(sequelize, DataTypes);
  var Log_DutyCalculation_PODetail = _Log_DutyCalculation_PODetail(sequelize, DataTypes);
  var Log_EDILocation = _Log_EDILocation(sequelize, DataTypes);
  var Log_Job = _Log_Job(sequelize, DataTypes);
  var Log_JobActivities = _Log_JobActivities(sequelize, DataTypes);
  var Log_JobStage = _Log_JobStage(sequelize, DataTypes);
  var Log_JobType = _Log_JobType(sequelize, DataTypes);
  var Log_Job_ChargesPayb = _Log_Job_ChargesPayb(sequelize, DataTypes);
  var Log_Job_ChargesPayb_Cont = _Log_Job_ChargesPayb_Cont(sequelize, DataTypes);
  var Log_Job_ChargesPayb_History = _Log_Job_ChargesPayb_History(sequelize, DataTypes);
  var Log_Job_ChargesPayb_TaxExpShare = _Log_Job_ChargesPayb_TaxExpShare(sequelize, DataTypes);
  var Log_Job_ChargesRecv = _Log_Job_ChargesRecv(sequelize, DataTypes);
  var Log_Job_ChargesRecv_Cont = _Log_Job_ChargesRecv_Cont(sequelize, DataTypes);
  var Log_Job_ChargesRecv_History = _Log_Job_ChargesRecv_History(sequelize, DataTypes);
  var Log_Job_ChargesRecv_TaxRevShare = _Log_Job_ChargesRecv_TaxRevShare(sequelize, DataTypes);
  var Log_Job_Container = _Log_Job_Container(sequelize, DataTypes);
  var Log_Job_ExtMilestone = _Log_Job_ExtMilestone(sequelize, DataTypes);
  var Log_Job_LastMilestone = _Log_Job_LastMilestone(sequelize, DataTypes);
  var Log_Job_PaidByClient = _Log_Job_PaidByClient(sequelize, DataTypes);
  var Log_Job_TracingDoc = _Log_Job_TracingDoc(sequelize, DataTypes);
  var Log_Job_TracingOpr = _Log_Job_TracingOpr(sequelize, DataTypes);
  var Log_MakeSetup = _Log_MakeSetup(sequelize, DataTypes);
  var Log_VehicleSetup = _Log_VehicleSetup(sequelize, DataTypes);
  var Manifest_Jobs = _Manifest_Jobs(sequelize, DataTypes);
  var Manifests = _Manifests(sequelize, DataTypes);
  var Non_Gl_Parties = _Non_Gl_Parties(sequelize, DataTypes);
  var Notifications = _Notifications(sequelize, DataTypes);
  var Office_Vouchers = _Office_Vouchers(sequelize, DataTypes);
  var Parent_Accounts = _Parent_Accounts(sequelize, DataTypes);
  var PaymentMode = _PaymentMode(sequelize, DataTypes);
  var Ports = _Ports(sequelize, DataTypes);
  var ReportSetting = _ReportSetting(sequelize, DataTypes);
  var ReportTemplate = _ReportTemplate(sequelize, DataTypes);
  var ReportTemplate_Detail = _ReportTemplate_Detail(sequelize, DataTypes);
  var SE_Equipments = _SE_Equipments(sequelize, DataTypes);
  var SE_Jobs = _SE_Jobs(sequelize, DataTypes);
  var SExp_BL = _SExp_BL(sequelize, DataTypes);
  var SExp_BL_Charges = _SExp_BL_Charges(sequelize, DataTypes);
  var SExp_BL_Detail = _SExp_BL_Detail(sequelize, DataTypes);
  var SExp_BL_Detail_History = _SExp_BL_Detail_History(sequelize, DataTypes);
  var SExp_BL_Equipment = _SExp_BL_Equipment(sequelize, DataTypes);
  var SExp_BL_Equipment_History = _SExp_BL_Equipment_History(sequelize, DataTypes);
  var SExp_BL_PrintingLog = _SExp_BL_PrintingLog(sequelize, DataTypes);
  var SExp_BL_ProductInfo = _SExp_BL_ProductInfo(sequelize, DataTypes);
  var SExp_BL_Stamp = _SExp_BL_Stamp(sequelize, DataTypes);
  var SExp_BookingConfirmFromCarrier = _SExp_BookingConfirmFromCarrier(sequelize, DataTypes);
  var SExp_BookingRequest = _SExp_BookingRequest(sequelize, DataTypes);
  var SExp_BookingRequest_Detail = _SExp_BookingRequest_Detail(sequelize, DataTypes);
  var SExp_BookingRequest_Equipment = _SExp_BookingRequest_Equipment(sequelize, DataTypes);
  var SExp_BookingToCarrier = _SExp_BookingToCarrier(sequelize, DataTypes);
  var SExp_CRO = _SExp_CRO(sequelize, DataTypes);
  var SExp_CRO_Detail = _SExp_CRO_Detail(sequelize, DataTypes);
  var SExp_DeliveryNote = _SExp_DeliveryNote(sequelize, DataTypes);
  var SExp_DeliveryNote_Detail = _SExp_DeliveryNote_Detail(sequelize, DataTypes);
  var SExp_LOGNETBookingRequest = _SExp_LOGNETBookingRequest(sequelize, DataTypes);
  var SExp_LOGNETPODetails = _SExp_LOGNETPODetails(sequelize, DataTypes);
  var SExp_LOGNETProductInfo = _SExp_LOGNETProductInfo(sequelize, DataTypes);
  var SExp_LoadingProgram = _SExp_LoadingProgram(sequelize, DataTypes);
  var SExp_NOC = _SExp_NOC(sequelize, DataTypes);
  var SExp_NOC_Detail = _SExp_NOC_Detail(sequelize, DataTypes);
  var SExp_ReleaseInstructionStatus = _SExp_ReleaseInstructionStatus(sequelize, DataTypes);
  var SExp_ReleaseInstructionType = _SExp_ReleaseInstructionType(sequelize, DataTypes);
  var SExp_SeaExportJob = _SExp_SeaExportJob(sequelize, DataTypes);
  var SExp_SeaExportJobHistory = _SExp_SeaExportJobHistory(sequelize, DataTypes);
  var SExp_SeaExportJob_BLReleaseLog = _SExp_SeaExportJob_BLReleaseLog(sequelize, DataTypes);
  var SExp_SeaExportJob_CarDetail = _SExp_SeaExportJob_CarDetail(sequelize, DataTypes);
  var SExp_SeaExportJob_ChargesPayb = _SExp_SeaExportJob_ChargesPayb(sequelize, DataTypes);
  var SExp_SeaExportJob_ChargesPayb_History = _SExp_SeaExportJob_ChargesPayb_History(sequelize, DataTypes);
  var SExp_SeaExportJob_ChargesPayb_TaxExpShare = _SExp_SeaExportJob_ChargesPayb_TaxExpShare(sequelize, DataTypes);
  var SExp_SeaExportJob_ChargesRecv = _SExp_SeaExportJob_ChargesRecv(sequelize, DataTypes);
  var SExp_SeaExportJob_ChargesRecv_History = _SExp_SeaExportJob_ChargesRecv_History(sequelize, DataTypes);
  var SExp_SeaExportJob_ChargesRecv_TaxRevShare = _SExp_SeaExportJob_ChargesRecv_TaxRevShare(sequelize, DataTypes);
  var SExp_SeaExportJob_Equipment = _SExp_SeaExportJob_Equipment(sequelize, DataTypes);
  var SExp_SeaExportJob_ExtMilestone = _SExp_SeaExportJob_ExtMilestone(sequelize, DataTypes);
  var SExp_SeaExportJob_LastMilestone = _SExp_SeaExportJob_LastMilestone(sequelize, DataTypes);
  var SExp_SeaExportJob_Principle = _SExp_SeaExportJob_Principle(sequelize, DataTypes);
  var SExp_SeaExportJob_Principle_History = _SExp_SeaExportJob_Principle_History(sequelize, DataTypes);
  var SExp_SeaExportJob_ReleaseRequest = _SExp_SeaExportJob_ReleaseRequest(sequelize, DataTypes);
  var SExp_SeaExportJob_TracingDoc = _SExp_SeaExportJob_TracingDoc(sequelize, DataTypes);
  var SExp_SeaExportJob_TracingOpr = _SExp_SeaExportJob_TracingOpr(sequelize, DataTypes);
  var SExp_SeaExportJob_TracingOpr_Cont = _SExp_SeaExportJob_TracingOpr_Cont(sequelize, DataTypes);
  var SExp_ShippingInstruction = _SExp_ShippingInstruction(sequelize, DataTypes);
  var SExp_ShippingInstruction_Equipment = _SExp_ShippingInstruction_Equipment(sequelize, DataTypes);
  var SExp_StuffingPlan = _SExp_StuffingPlan(sequelize, DataTypes);
  var SExp_StuffingPlan_Detail = _SExp_StuffingPlan_Detail(sequelize, DataTypes);
  var SExp_SurrenderType = _SExp_SurrenderType(sequelize, DataTypes);
  var SExp_SwitchBL = _SExp_SwitchBL(sequelize, DataTypes);
  var SExp_SwitchBL_Detail = _SExp_SwitchBL_Detail(sequelize, DataTypes);
  var SExp_SwitchBL_Equipment = _SExp_SwitchBL_Equipment(sequelize, DataTypes);
  var SExp_SwitchBL_Equipment_History = _SExp_SwitchBL_Equipment_History(sequelize, DataTypes);
  var SExp_SwitchBL_Stamp = _SExp_SwitchBL_Stamp(sequelize, DataTypes);
  var SImp_BL = _SImp_BL(sequelize, DataTypes);
  var SImp_BLAmendment = _SImp_BLAmendment(sequelize, DataTypes);
  var SImp_BLAmendmentQueries = _SImp_BLAmendmentQueries(sequelize, DataTypes);
  var SImp_BL_Detail = _SImp_BL_Detail(sequelize, DataTypes);
  var SImp_BL_Equipment = _SImp_BL_Equipment(sequelize, DataTypes);
  var SImp_BL_Equipment_History = _SImp_BL_Equipment_History(sequelize, DataTypes);
  var SImp_BL_ProductInfo = _SImp_BL_ProductInfo(sequelize, DataTypes);
  var SImp_BL_ProductInfo_Cont = _SImp_BL_ProductInfo_Cont(sequelize, DataTypes);
  var SImp_BL_Stamp = _SImp_BL_Stamp(sequelize, DataTypes);
  var SImp_DeliveryOrder = _SImp_DeliveryOrder(sequelize, DataTypes);
  var SImp_PreAlert = _SImp_PreAlert(sequelize, DataTypes);
  var SImp_PreAlert_Container = _SImp_PreAlert_Container(sequelize, DataTypes);
  var SImp_SeaImportJob = _SImp_SeaImportJob(sequelize, DataTypes);
  var SImp_SeaImportJob_CarDetail = _SImp_SeaImportJob_CarDetail(sequelize, DataTypes);
  var SImp_SeaImportJob_ChargesPayb = _SImp_SeaImportJob_ChargesPayb(sequelize, DataTypes);
  var SImp_SeaImportJob_ChargesPayb_History = _SImp_SeaImportJob_ChargesPayb_History(sequelize, DataTypes);
  var SImp_SeaImportJob_ChargesPayb_TaxExpShare = _SImp_SeaImportJob_ChargesPayb_TaxExpShare(sequelize, DataTypes);
  var SImp_SeaImportJob_ChargesRecv = _SImp_SeaImportJob_ChargesRecv(sequelize, DataTypes);
  var SImp_SeaImportJob_ChargesRecv_History = _SImp_SeaImportJob_ChargesRecv_History(sequelize, DataTypes);
  var SImp_SeaImportJob_ChargesRecv_TaxRevShare = _SImp_SeaImportJob_ChargesRecv_TaxRevShare(sequelize, DataTypes);
  var SImp_SeaImportJob_Equipment = _SImp_SeaImportJob_Equipment(sequelize, DataTypes);
  var SImp_SeaImportJob_ExtMilestone = _SImp_SeaImportJob_ExtMilestone(sequelize, DataTypes);
  var SImp_SeaImportJob_LastMilestone = _SImp_SeaImportJob_LastMilestone(sequelize, DataTypes);
  var SImp_SeaImportJob_Principle = _SImp_SeaImportJob_Principle(sequelize, DataTypes);
  var SImp_SeaImportJob_Principle_History = _SImp_SeaImportJob_Principle_History(sequelize, DataTypes);
  var SImp_SeaImportJob_TracingDoc = _SImp_SeaImportJob_TracingDoc(sequelize, DataTypes);
  var SImp_SeaImportJob_TracingOpr = _SImp_SeaImportJob_TracingOpr(sequelize, DataTypes);
  var SeaMilestonePTL = _SeaMilestonePTL(sequelize, DataTypes);
  var Simp_EqpInvOtherChgs = _Simp_EqpInvOtherChgs(sequelize, DataTypes);
  var Stamps = _Stamps(sequelize, DataTypes);
  var Sub_Tasks = _Sub_Tasks(sequelize, DataTypes);
  var SysInfo = _SysInfo(sequelize, DataTypes);
  var TAP_Allowance = _TAP_Allowance(sequelize, DataTypes);
  var TAP_Allowance_Detail = _TAP_Allowance_Detail(sequelize, DataTypes);
  var TAP_Deduction = _TAP_Deduction(sequelize, DataTypes);
  var TAP_Deduction_Detail = _TAP_Deduction_Detail(sequelize, DataTypes);
  var TAP_Employee = _TAP_Employee(sequelize, DataTypes);
  var TAP_EmployeeAttendance = _TAP_EmployeeAttendance(sequelize, DataTypes);
  var TAP_EmployeeDesignation = _TAP_EmployeeDesignation(sequelize, DataTypes);
  var TAP_EmployeeStatus = _TAP_EmployeeStatus(sequelize, DataTypes);
  var TAP_Gender = _TAP_Gender(sequelize, DataTypes);
  var TAP_Loan = _TAP_Loan(sequelize, DataTypes);
  var TAP_LoanRecovery = _TAP_LoanRecovery(sequelize, DataTypes);
  var TAP_Loan_Schedule = _TAP_Loan_Schedule(sequelize, DataTypes);
  var TAP_MaritalStatus = _TAP_MaritalStatus(sequelize, DataTypes);
  var TAP_Nationality = _TAP_Nationality(sequelize, DataTypes);
  var TAP_RecoveryType = _TAP_RecoveryType(sequelize, DataTypes);
  var TAP_Religion = _TAP_Religion(sequelize, DataTypes);
  var TAP_Salaries = _TAP_Salaries(sequelize, DataTypes);
  var TAP_Salaries_Detail = _TAP_Salaries_Detail(sequelize, DataTypes);
  var TAP_Salaries_Detail_GL = _TAP_Salaries_Detail_GL(sequelize, DataTypes);
  var TAP_SalaryAdvance = _TAP_SalaryAdvance(sequelize, DataTypes);
  var TAP_SalaryStructure = _TAP_SalaryStructure(sequelize, DataTypes);
  var TAP_SalaryStructure_Allowance = _TAP_SalaryStructure_Allowance(sequelize, DataTypes);
  var TAP_SalaryStructure_Deduction = _TAP_SalaryStructure_Deduction(sequelize, DataTypes);
  var TAP_Title = _TAP_Title(sequelize, DataTypes);
  var TPGL_Account_List = _TPGL_Account_List(sequelize, DataTypes);
  var TPGL_CurrencyCode = _TPGL_CurrencyCode(sequelize, DataTypes);
  var TPGL_Process_Log = _TPGL_Process_Log(sequelize, DataTypes);
  var TPGL_TaxRateCode = _TPGL_TaxRateCode(sequelize, DataTypes);
  var TPGL_Terms = _TPGL_Terms(sequelize, DataTypes);
  var Task_Logs = _Task_Logs(sequelize, DataTypes);
  var Tasks = _Tasks(sequelize, DataTypes);
  var Transactions = _Transactions(sequelize, DataTypes);
  var UNPacking = _UNPacking(sequelize, DataTypes);
  var UNPacking_EDI = _UNPacking_EDI(sequelize, DataTypes);
  var UNPacking_Map = _UNPacking_Map(sequelize, DataTypes);
  var UserRegistration = _UserRegistration(sequelize, DataTypes);
  var Vendor_Associations = _Vendor_Associations(sequelize, DataTypes);
  var Vendors = _Vendors(sequelize, DataTypes);
  var Version = _Version(sequelize, DataTypes);
  var Version_History = _Version_History(sequelize, DataTypes);
  var Vessels = _Vessels(sequelize, DataTypes);
  var Vouchers = _Vouchers(sequelize, DataTypes);
  var Voyages = _Voyages(sequelize, DataTypes);
  var WMS_Activity = _WMS_Activity(sequelize, DataTypes);
  var WMS_ActivityType = _WMS_ActivityType(sequelize, DataTypes);
  var WMS_BalanceDeliveryOrder = _WMS_BalanceDeliveryOrder(sequelize, DataTypes);
  var WMS_BalanceGRNDetail = _WMS_BalanceGRNDetail(sequelize, DataTypes);
  var WMS_BalanceReceivingOrder = _WMS_BalanceReceivingOrder(sequelize, DataTypes);
  var WMS_CargoDEStuffing = _WMS_CargoDEStuffing(sequelize, DataTypes);
  var WMS_CargoDEStuffing_Detail = _WMS_CargoDEStuffing_Detail(sequelize, DataTypes);
  var WMS_CargoDEStuffing_DetailPD = _WMS_CargoDEStuffing_DetailPD(sequelize, DataTypes);
  var WMS_CargoStuffing = _WMS_CargoStuffing(sequelize, DataTypes);
  var WMS_CargoStuffing_Detail = _WMS_CargoStuffing_Detail(sequelize, DataTypes);
  var WMS_Delivery = _WMS_Delivery(sequelize, DataTypes);
  var WMS_DeliveryOrder = _WMS_DeliveryOrder(sequelize, DataTypes);
  var WMS_DeliveryOrder_Detail = _WMS_DeliveryOrder_Detail(sequelize, DataTypes);
  var WMS_Delivery_Charges = _WMS_Delivery_Charges(sequelize, DataTypes);
  var WMS_Delivery_Detail = _WMS_Delivery_Detail(sequelize, DataTypes);
  var WMS_GRN = _WMS_GRN(sequelize, DataTypes);
  var WMS_GRNMode = _WMS_GRNMode(sequelize, DataTypes);
  var WMS_GRN_Charges = _WMS_GRN_Charges(sequelize, DataTypes);
  var WMS_GRN_Detail = _WMS_GRN_Detail(sequelize, DataTypes);
  var WMS_GRN_Detail_ProductInfo = _WMS_GRN_Detail_ProductInfo(sequelize, DataTypes);
  var WMS_InvDeliveryOrderDetailProductInfoBalance = _WMS_InvDeliveryOrderDetailProductInfoBalance(sequelize, DataTypes);
  var WMS_InvOrderStatus = _WMS_InvOrderStatus(sequelize, DataTypes);
  var WMS_Locations = _WMS_Locations(sequelize, DataTypes);
  var WMS_RateApply = _WMS_RateApply(sequelize, DataTypes);
  var WMS_ReceivedCondition = _WMS_ReceivedCondition(sequelize, DataTypes);
  var WMS_ReceivingOrder = _WMS_ReceivingOrder(sequelize, DataTypes);
  var WMS_ReceivingOrder_Detail = _WMS_ReceivingOrder_Detail(sequelize, DataTypes);
  var WMS_StockTranType = _WMS_StockTranType(sequelize, DataTypes);
  var WMS_StorageMode = _WMS_StorageMode(sequelize, DataTypes);

  AExp_AirExportJob.belongsTo(AExp_AirExportJob, { foreignKey: "ParentJobId"});
  AExp_AirExportJob.hasMany(AExp_AirExportJob, { foreignKey: "ParentJobId"});
  AExp_AirExportJob.belongsTo(AExp_AirExportJob, { foreignKey: "SplittedJobId"});
  AExp_AirExportJob.hasMany(AExp_AirExportJob, { foreignKey: "SplittedJobId"});
  AExp_AirExportJob_AWBReleaseLog.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(AExp_AirExportJob_AWBReleaseLog, { foreignKey: "AEJobId"});
  AExp_AirExportJob_ChargesPayb.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(AExp_AirExportJob_ChargesPayb, { foreignKey: "AEJobId"});
  AExp_AirExportJob_ChargesPayb_TaxExpShare.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(AExp_AirExportJob_ChargesPayb_TaxExpShare, { foreignKey: "AEJobId"});
  AExp_AirExportJob_ChargesRecv.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(AExp_AirExportJob_ChargesRecv, { foreignKey: "AEJobId"});
  AExp_AirExportJob_ChargesRecv_TaxRevShare.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(AExp_AirExportJob_ChargesRecv_TaxRevShare, { foreignKey: "AEJobId"});
  AExp_AirExportJob_ExtMilestone.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(AExp_AirExportJob_ExtMilestone, { foreignKey: "AEJobId"});
  AExp_AirExportJob_LastMilestone.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(AExp_AirExportJob_LastMilestone, { foreignKey: "AEJobId"});
  AExp_AirExportJob_OrderDetail.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(AExp_AirExportJob_OrderDetail, { foreignKey: "AEJobId"});
  AExp_AirExportJob_TracingDoc.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(AExp_AirExportJob_TracingDoc, { foreignKey: "AEJobId"});
  AExp_AirExportJob_TracingOpr.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(AExp_AirExportJob_TracingOpr, { foreignKey: "AEJobId"});
  AExp_AirwayBillStock_Detail.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(AExp_AirwayBillStock_Detail, { foreignKey: "AEJobId"});
  AExp_BL.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasOne(AExp_BL, { foreignKey: "AEJobId"});
  AExp_BL_PrintingLog.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(AExp_BL_PrintingLog, { foreignKey: "AEJobId"});
  GL_AgentInvoice.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(GL_AgentInvoice, { foreignKey: "AEJobId"});
  GL_AgentInvoice_Charges.belongsTo(AExp_AirExportJob, { foreignKey: "dAEJobId"});
  AExp_AirExportJob.hasMany(GL_AgentInvoice_Charges, { foreignKey: "dAEJobId"});
  GL_AgentInvoice_Charges_Tax.belongsTo(AExp_AirExportJob, { foreignKey: "dAEJobId"});
  AExp_AirExportJob.hasMany(GL_AgentInvoice_Charges_Tax, { foreignKey: "dAEJobId"});
  GL_JobBill.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(GL_JobBill, { foreignKey: "AEJobId"});
  GL_JobBill_Charges.belongsTo(AExp_AirExportJob, { foreignKey: "dAEJobId"});
  AExp_AirExportJob.hasMany(GL_JobBill_Charges, { foreignKey: "dAEJobId"});
  GL_JobBill_Charges_Tax.belongsTo(AExp_AirExportJob, { foreignKey: "dAEJobId"});
  AExp_AirExportJob.hasMany(GL_JobBill_Charges_Tax, { foreignKey: "dAEJobId"});
  GL_JobDirectExpRev.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(GL_JobDirectExpRev, { foreignKey: "AEJobId"});
  GL_JobDirectExpRev_Charges.belongsTo(AExp_AirExportJob, { foreignKey: "dAEJobId"});
  AExp_AirExportJob.hasMany(GL_JobDirectExpRev_Charges, { foreignKey: "dAEJobId"});
  GL_JobInvoice.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(GL_JobInvoice, { foreignKey: "AEJobId"});
  GL_JobInvoice_Charges.belongsTo(AExp_AirExportJob, { foreignKey: "dAEJobId"});
  AExp_AirExportJob.hasMany(GL_JobInvoice_Charges, { foreignKey: "dAEJobId"});
  GL_JobInvoice_Charges_Tax.belongsTo(AExp_AirExportJob, { foreignKey: "dAEJobId"});
  AExp_AirExportJob.hasMany(GL_JobInvoice_Charges_Tax, { foreignKey: "dAEJobId"});
  GL_JobInvoice_TaxInvoice.belongsTo(AExp_AirExportJob, { foreignKey: "dAEJobId"});
  AExp_AirExportJob.hasMany(GL_JobInvoice_TaxInvoice, { foreignKey: "dAEJobId"});
  GL_JobPayment.belongsTo(AExp_AirExportJob, { foreignKey: "crtAEJobId"});
  AExp_AirExportJob.hasMany(GL_JobPayment, { foreignKey: "crtAEJobId"});
  GL_JobPaymentRequisition.belongsTo(AExp_AirExportJob, { foreignKey: "crtAEJobId"});
  AExp_AirExportJob.hasMany(GL_JobPaymentRequisition, { foreignKey: "crtAEJobId"});
  GL_JobReceipt.belongsTo(AExp_AirExportJob, { foreignKey: "crtAEJobId"});
  AExp_AirExportJob.hasMany(GL_JobReceipt, { foreignKey: "crtAEJobId"});
  GL_ProcessLog.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(GL_ProcessLog, { foreignKey: "AEJobId"});
  Gen_AEJobNotes.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(Gen_AEJobNotes, { foreignKey: "AEJobId"});
  Gen_CARF.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(Gen_CARF, { foreignKey: "AEJobId"});
  Gen_CARF_Exception.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(Gen_CARF_Exception, { foreignKey: "AEJobId"});
  Gen_LetterProcessed.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(Gen_LetterProcessed, { foreignKey: "AEJobId"});
  Log_Job.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(Log_Job, { foreignKey: "AEJobId"});
  WMS_CargoStuffing_Detail.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(WMS_CargoStuffing_Detail, { foreignKey: "AEJobId"});
  WMS_Delivery.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(WMS_Delivery, { foreignKey: "AEJobId"});
  WMS_GRN.belongsTo(AExp_AirExportJob, { foreignKey: "AEJobId"});
  AExp_AirExportJob.hasMany(WMS_GRN, { foreignKey: "AEJobId"});
  AExp_AirExportJob_ChargesPayb_TaxExpShare.belongsTo(AExp_AirExportJob_ChargesPayb, { foreignKey: "AExpChargesPaybId"});
  AExp_AirExportJob_ChargesPayb.hasMany(AExp_AirExportJob_ChargesPayb_TaxExpShare, { foreignKey: "AExpChargesPaybId"});
  GL_AgentInvoice_Charges.belongsTo(AExp_AirExportJob_ChargesPayb, { foreignKey: "AEJobChargesPaybId"});
  AExp_AirExportJob_ChargesPayb.hasMany(GL_AgentInvoice_Charges, { foreignKey: "AEJobChargesPaybId"});
  GL_JobBill_Charges.belongsTo(AExp_AirExportJob_ChargesPayb, { foreignKey: "AEJobChargesPaybId"});
  AExp_AirExportJob_ChargesPayb.hasMany(GL_JobBill_Charges, { foreignKey: "AEJobChargesPaybId"});
  AExp_AirExportJob_ChargesRecv_TaxRevShare.belongsTo(AExp_AirExportJob_ChargesRecv, { foreignKey: "AExpChargesRecvId"});
  AExp_AirExportJob_ChargesRecv.hasMany(AExp_AirExportJob_ChargesRecv_TaxRevShare, { foreignKey: "AExpChargesRecvId"});
  GL_AgentInvoice_Charges.belongsTo(AExp_AirExportJob_ChargesRecv, { foreignKey: "AEJobChargesRecvId"});
  AExp_AirExportJob_ChargesRecv.hasMany(GL_AgentInvoice_Charges, { foreignKey: "AEJobChargesRecvId"});
  GL_JobInvoice_Charges.belongsTo(AExp_AirExportJob_ChargesRecv, { foreignKey: "AEJobChargesRecvId"});
  AExp_AirExportJob_ChargesRecv.hasMany(GL_JobInvoice_Charges, { foreignKey: "AEJobChargesRecvId"});
  AExp_AirwayBillStock_Detail.belongsTo(AExp_AirwayBillStock, { foreignKey: "AEAWBStockId"});
  AExp_AirwayBillStock.hasMany(AExp_AirwayBillStock_Detail, { foreignKey: "AEAWBStockId"});
  AExp_AirExportJob.belongsTo(AExp_AirwayBillStock_Detail, { foreignKey: "AEAWBStockDetailId"});
  AExp_AirwayBillStock_Detail.hasMany(AExp_AirExportJob, { foreignKey: "AEAWBStockDetailId"});
  AExp_AirwayBillStock_Detail.belongsTo(AExp_BL, { foreignKey: "AEBLId"});
  AExp_BL.hasMany(AExp_AirwayBillStock_Detail, { foreignKey: "AEBLId"});
  AExp_BL_Charges.belongsTo(AExp_BL, { foreignKey: "AEBLId"});
  AExp_BL.hasMany(AExp_BL_Charges, { foreignKey: "AEBLId"});
  AExp_BL_Dimension.belongsTo(AExp_BL, { foreignKey: "AEBLId"});
  AExp_BL.hasMany(AExp_BL_Dimension, { foreignKey: "AEBLId"});
  AExp_BL_History.belongsTo(AExp_BL, { foreignKey: "AEBLId"});
  AExp_BL.hasMany(AExp_BL_History, { foreignKey: "AEBLId"});
  AExp_BL_PrintingLog.belongsTo(AExp_BL, { foreignKey: "AEBLId"});
  AExp_BL.hasMany(AExp_BL_PrintingLog, { foreignKey: "AEBLId"});
  AExp_BL_Stamp.belongsTo(AExp_BL, { foreignKey: "AEBLId"});
  AExp_BL.hasMany(AExp_BL_Stamp, { foreignKey: "AEBLId"});
  GL_JobPayment.belongsTo(AExp_BL, { foreignKey: "crtAEHAWBId"});
  AExp_BL.hasMany(GL_JobPayment, { foreignKey: "crtAEHAWBId"});
  GL_JobPayment.belongsTo(AExp_BL, { foreignKey: "crtAEMAWBId"});
  AExp_BL.hasMany(GL_JobPayment, { foreignKey: "crtAEMAWBId"});
  GL_JobPaymentRequisition.belongsTo(AExp_BL, { foreignKey: "crtAEHAWBId"});
  AExp_BL.hasMany(GL_JobPaymentRequisition, { foreignKey: "crtAEHAWBId"});
  GL_JobPaymentRequisition.belongsTo(AExp_BL, { foreignKey: "crtAEMAWBId"});
  AExp_BL.hasMany(GL_JobPaymentRequisition, { foreignKey: "crtAEMAWBId"});
  GL_JobReceipt.belongsTo(AExp_BL, { foreignKey: "crtAEHAWBId"});
  AExp_BL.hasMany(GL_JobReceipt, { foreignKey: "crtAEHAWBId"});
  GL_JobReceipt.belongsTo(AExp_BL, { foreignKey: "crtAEMAWBId"});
  AExp_BL.hasMany(GL_JobReceipt, { foreignKey: "crtAEMAWBId"});
  AImp_AirImportJob.belongsTo(AImp_AirImportJob, { foreignKey: "ParentJobId"});
  AImp_AirImportJob.hasMany(AImp_AirImportJob, { foreignKey: "ParentJobId"});
  AImp_AirImportJob_BL.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasOne(AImp_AirImportJob_BL, { foreignKey: "AIJobId"});
  AImp_AirImportJob_BLCharges.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(AImp_AirImportJob_BLCharges, { foreignKey: "AIJobId"});
  AImp_AirImportJob_BLDimension.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(AImp_AirImportJob_BLDimension, { foreignKey: "AIJobId"});
  AImp_AirImportJob_BLPrintingLog.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(AImp_AirImportJob_BLPrintingLog, { foreignKey: "AIJobId"});
  AImp_AirImportJob_ChargesPayb.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(AImp_AirImportJob_ChargesPayb, { foreignKey: "AIJobId"});
  AImp_AirImportJob_ChargesPayb_History.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(AImp_AirImportJob_ChargesPayb_History, { foreignKey: "AIJobId"});
  AImp_AirImportJob_ChargesPayb_TaxExpShare.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(AImp_AirImportJob_ChargesPayb_TaxExpShare, { foreignKey: "AIJobId"});
  AImp_AirImportJob_ChargesRecv.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(AImp_AirImportJob_ChargesRecv, { foreignKey: "AIJobId"});
  AImp_AirImportJob_ChargesRecv_History.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(AImp_AirImportJob_ChargesRecv_History, { foreignKey: "AIJobId"});
  AImp_AirImportJob_ChargesRecv_TaxRevShare.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(AImp_AirImportJob_ChargesRecv_TaxRevShare, { foreignKey: "AIJobId"});
  AImp_AirImportJob_ExtMilestone.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(AImp_AirImportJob_ExtMilestone, { foreignKey: "AIJobId"});
  AImp_AirImportJob_LastMilestone.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(AImp_AirImportJob_LastMilestone, { foreignKey: "AIJobId"});
  AImp_AirImportJob_OrderDetail.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(AImp_AirImportJob_OrderDetail, { foreignKey: "AIJobId"});
  AImp_AirImportJob_TracingDoc.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(AImp_AirImportJob_TracingDoc, { foreignKey: "AIJobId"});
  AImp_AirImportJob_TracingOpr.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(AImp_AirImportJob_TracingOpr, { foreignKey: "AIJobId"});
  AImp_AirImportJob__LastMilestone.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(AImp_AirImportJob__LastMilestone, { foreignKey: "AIJobId"});
  AImp_DeliveryOrder.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(AImp_DeliveryOrder, { foreignKey: "AIJobId"});
  GL_AgentInvoice.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(GL_AgentInvoice, { foreignKey: "AIJobId"});
  GL_AgentInvoice_Charges.belongsTo(AImp_AirImportJob, { foreignKey: "dAIJobId"});
  AImp_AirImportJob.hasMany(GL_AgentInvoice_Charges, { foreignKey: "dAIJobId"});
  GL_AgentInvoice_Charges_Tax.belongsTo(AImp_AirImportJob, { foreignKey: "dAIJobId"});
  AImp_AirImportJob.hasMany(GL_AgentInvoice_Charges_Tax, { foreignKey: "dAIJobId"});
  GL_JobBill.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(GL_JobBill, { foreignKey: "AIJobId"});
  GL_JobBill_Charges.belongsTo(AImp_AirImportJob, { foreignKey: "dAIJobId"});
  AImp_AirImportJob.hasMany(GL_JobBill_Charges, { foreignKey: "dAIJobId"});
  GL_JobBill_Charges_Tax.belongsTo(AImp_AirImportJob, { foreignKey: "dAIJobId"});
  AImp_AirImportJob.hasMany(GL_JobBill_Charges_Tax, { foreignKey: "dAIJobId"});
  GL_JobDirectExpRev.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(GL_JobDirectExpRev, { foreignKey: "AIJobId"});
  GL_JobDirectExpRev_Charges.belongsTo(AImp_AirImportJob, { foreignKey: "dAIJobId"});
  AImp_AirImportJob.hasMany(GL_JobDirectExpRev_Charges, { foreignKey: "dAIJobId"});
  GL_JobInvoice.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(GL_JobInvoice, { foreignKey: "AIJobId"});
  GL_JobInvoice_Charges.belongsTo(AImp_AirImportJob, { foreignKey: "dAIJobId"});
  AImp_AirImportJob.hasMany(GL_JobInvoice_Charges, { foreignKey: "dAIJobId"});
  GL_JobInvoice_Charges_Tax.belongsTo(AImp_AirImportJob, { foreignKey: "dAIJobId"});
  AImp_AirImportJob.hasMany(GL_JobInvoice_Charges_Tax, { foreignKey: "dAIJobId"});
  GL_JobInvoice_TaxInvoice.belongsTo(AImp_AirImportJob, { foreignKey: "dAIJobId"});
  AImp_AirImportJob.hasMany(GL_JobInvoice_TaxInvoice, { foreignKey: "dAIJobId"});
  GL_JobPayment.belongsTo(AImp_AirImportJob, { foreignKey: "crtAIJobId"});
  AImp_AirImportJob.hasMany(GL_JobPayment, { foreignKey: "crtAIJobId"});
  GL_JobPaymentRequisition.belongsTo(AImp_AirImportJob, { foreignKey: "crtAIJobId"});
  AImp_AirImportJob.hasMany(GL_JobPaymentRequisition, { foreignKey: "crtAIJobId"});
  GL_JobReceipt.belongsTo(AImp_AirImportJob, { foreignKey: "crtAIJobId"});
  AImp_AirImportJob.hasMany(GL_JobReceipt, { foreignKey: "crtAIJobId"});
  GL_ProcessLog.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(GL_ProcessLog, { foreignKey: "AIJobId"});
  Gen_CARF.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(Gen_CARF, { foreignKey: "AIJobId"});
  Gen_CARF_Exception.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(Gen_CARF_Exception, { foreignKey: "AIJobId"});
  Gen_DeliveryOrderRequest.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(Gen_DeliveryOrderRequest, { foreignKey: "AIJobId"});
  Gen_LetterProcessed.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(Gen_LetterProcessed, { foreignKey: "AIJobId"});
  Log_Job.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(Log_Job, { foreignKey: "AIJobId"});
  WMS_CargoDEStuffing.belongsTo(AImp_AirImportJob, { foreignKey: "CAIJobId"});
  AImp_AirImportJob.hasMany(WMS_CargoDEStuffing, { foreignKey: "CAIJobId"});
  WMS_CargoDEStuffing_Detail.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(WMS_CargoDEStuffing_Detail, { foreignKey: "AIJobId"});
  WMS_Delivery.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(WMS_Delivery, { foreignKey: "AIJobId"});
  WMS_GRN.belongsTo(AImp_AirImportJob, { foreignKey: "AIJobId"});
  AImp_AirImportJob.hasMany(WMS_GRN, { foreignKey: "AIJobId"});
  GL_JobPaymentRequisition.belongsTo(AImp_AirImportJob_BL, { foreignKey: "crtAIHAWBId"});
  AImp_AirImportJob_BL.hasMany(GL_JobPaymentRequisition, { foreignKey: "crtAIHAWBId"});
  GL_JobPaymentRequisition.belongsTo(AImp_AirImportJob_BL, { foreignKey: "crtAIMAWBId"});
  AImp_AirImportJob_BL.hasMany(GL_JobPaymentRequisition, { foreignKey: "crtAIMAWBId"});
  AImp_AirImportJob_ChargesPayb_TaxExpShare.belongsTo(AImp_AirImportJob_ChargesPayb, { foreignKey: "AImpChargesPaybId"});
  AImp_AirImportJob_ChargesPayb.hasMany(AImp_AirImportJob_ChargesPayb_TaxExpShare, { foreignKey: "AImpChargesPaybId"});
  GL_AgentInvoice_Charges.belongsTo(AImp_AirImportJob_ChargesPayb, { foreignKey: "AIJobChargesPaybId"});
  AImp_AirImportJob_ChargesPayb.hasMany(GL_AgentInvoice_Charges, { foreignKey: "AIJobChargesPaybId"});
  GL_JobBill_Charges.belongsTo(AImp_AirImportJob_ChargesPayb, { foreignKey: "AIJobChargesPaybId"});
  AImp_AirImportJob_ChargesPayb.hasMany(GL_JobBill_Charges, { foreignKey: "AIJobChargesPaybId"});
  AImp_AirImportJob_ChargesRecv_TaxRevShare.belongsTo(AImp_AirImportJob_ChargesRecv, { foreignKey: "AImpChargesRecvId"});
  AImp_AirImportJob_ChargesRecv.hasMany(AImp_AirImportJob_ChargesRecv_TaxRevShare, { foreignKey: "AImpChargesRecvId"});
  GL_AgentInvoice_Charges.belongsTo(AImp_AirImportJob_ChargesRecv, { foreignKey: "AIJobChargesRecvId"});
  AImp_AirImportJob_ChargesRecv.hasMany(GL_AgentInvoice_Charges, { foreignKey: "AIJobChargesRecvId"});
  GL_JobInvoice_Charges.belongsTo(AImp_AirImportJob_ChargesRecv, { foreignKey: "AIJobChargesRecvId"});
  AImp_AirImportJob_ChargesRecv.hasMany(GL_JobInvoice_Charges, { foreignKey: "AIJobChargesRecvId"});
  AImp_AirImportJob.belongsTo(AImp_ManifestHeader, { foreignKey: "ManifestHeaderId"});
  AImp_ManifestHeader.hasMany(AImp_AirImportJob, { foreignKey: "ManifestHeaderId"});
  Gen_LetterProcessed.belongsTo(AImp_ManifestHeader, { foreignKey: "AIManifestId"});
  AImp_ManifestHeader.hasMany(Gen_LetterProcessed, { foreignKey: "AIManifestId"});
  Parent_Accounts.belongsTo(Accounts, { foreignKey: "AccountId"});
  Accounts.hasMany(Parent_Accounts, { foreignKey: "AccountId"});
  Container_Infos.belongsTo(Bls, { foreignKey: "BlId"});
  Bls.hasMany(Container_Infos, { foreignKey: "BlId"});
  Dimensions.belongsTo(Bls, { foreignKey: "BlId"});
  Bls.hasMany(Dimensions, { foreignKey: "BlId"});
  Item_Details.belongsTo(Bls, { foreignKey: "BlId"});
  Bls.hasMany(Item_Details, { foreignKey: "BlId"});
  Stamps.belongsTo(Bls, { foreignKey: "BlId"});
  Bls.hasMany(Stamps, { foreignKey: "BlId"});
  CEAS_User_CostCenterRight.belongsTo(CEAS_User, { foreignKey: "CEASUserId"});
  CEAS_User.hasMany(CEAS_User_CostCenterRight, { foreignKey: "CEASUserId"});
  CEAS_User_SalesRepRight.belongsTo(CEAS_User, { foreignKey: "CEASUserId"});
  CEAS_User.hasMany(CEAS_User_SalesRepRight, { foreignKey: "CEASUserId"});
  CEAS_User_SubCompanyRight.belongsTo(CEAS_User, { foreignKey: "CEASUserId"});
  CEAS_User.hasMany(CEAS_User_SubCompanyRight, { foreignKey: "CEASUserId"});
  CRM_Opportunity.belongsTo(CRM_Activity, { foreignKey: "ActivityId"});
  CRM_Activity.hasMany(CRM_Opportunity, { foreignKey: "ActivityId"});
  Gen_Parties_Contacts_Events.belongsTo(CRM_Event, { foreignKey: "EventTypeId"});
  CRM_Event.hasMany(Gen_Parties_Contacts_Events, { foreignKey: "EventTypeId"});
  CRM_Activity.belongsTo(CRM_Planning, { foreignKey: "PlanId"});
  CRM_Planning.hasMany(CRM_Activity, { foreignKey: "PlanId"});
  CRM_Planning_Detail.belongsTo(CRM_Planning, { foreignKey: "PlanId"});
  CRM_Planning.hasMany(CRM_Planning_Detail, { foreignKey: "PlanId"});
  CTrk_Activity_Detail.belongsTo(CTrk_Activity, { foreignKey: "ActivityId"});
  CTrk_Activity.hasMany(CTrk_Activity_Detail, { foreignKey: "ActivityId"});
  CTrk_Activity_Detail.belongsTo(CTrk_Activity, { foreignKey: "NextActivityId"});
  CTrk_Activity.hasMany(CTrk_Activity_Detail, { foreignKey: "NextActivityId"});
  CTrk_ContainerActivity.belongsTo(CTrk_Activity, { foreignKey: "ActivityId"});
  CTrk_Activity.hasMany(CTrk_ContainerActivity, { foreignKey: "ActivityId"});
  CTrk_ContainerCycle.belongsTo(CTrk_Activity, { foreignKey: "LastActivityId"});
  CTrk_Activity.hasMany(CTrk_ContainerCycle, { foreignKey: "LastActivityId"});
  CTrk_ContainerActivity.belongsTo(CTrk_Container, { foreignKey: "ContainerID"});
  CTrk_Container.hasMany(CTrk_ContainerActivity, { foreignKey: "ContainerID"});
  CTrk_ContainerCycle.belongsTo(CTrk_Container, { foreignKey: "ContainerId"});
  CTrk_Container.hasMany(CTrk_ContainerCycle, { foreignKey: "ContainerId"});
  SImp_PreAlert_Container.belongsTo(CTrk_Container, { foreignKey: "ContainerID"});
  CTrk_Container.hasMany(SImp_PreAlert_Container, { foreignKey: "ContainerID"});
  CTrk_ContainerCycle.belongsTo(CTrk_ContainerActivity, { foreignKey: "LastContainerActivityId"});
  CTrk_ContainerActivity.hasMany(CTrk_ContainerCycle, { foreignKey: "LastContainerActivityId"});
  CTrk_ContainerActivity.belongsTo(CTrk_ContainerCycle, { foreignKey: "CycleId"});
  CTrk_ContainerCycle.hasMany(CTrk_ContainerActivity, { foreignKey: "CycleId"});
  CTrk_ContainerActivity.belongsTo(CTrk_ContainerStatus, { foreignKey: "ContainerStatusId"});
  CTrk_ContainerStatus.hasMany(CTrk_ContainerActivity, { foreignKey: "ContainerStatusId"});
  DEPO_ContainerActivity_Detail.belongsTo(CTrk_ContainerStatus, { foreignKey: "ContainerCondId"});
  CTrk_ContainerStatus.hasMany(DEPO_ContainerActivity_Detail, { foreignKey: "ContainerCondId"});
  DEPO_ContainerActivity_Detail.belongsTo(CTrk_ContainerStatus, { foreignKey: "OldContainerCondId"});
  CTrk_ContainerStatus.hasMany(DEPO_ContainerActivity_Detail, { foreignKey: "OldContainerCondId"});
  CTrk_ContainerCycle.belongsTo(CTrk_Stage, { foreignKey: "CurrentStageId"});
  CTrk_Stage.hasMany(CTrk_ContainerCycle, { foreignKey: "CurrentStageId"});
  CVHM_GuaranteeFilling.belongsTo(CVHM_GuaranteeFilling, { foreignKey: "GuaranteeFillingId"});
  CVHM_GuaranteeFilling.hasMany(CVHM_GuaranteeFilling, { foreignKey: "GuaranteeFillingId"});
  CVHM_GuaranteeFilling.belongsTo(CVHM_GuaranteeType, { foreignKey: "GuaranteeTypeId"});
  CVHM_GuaranteeType.hasMany(CVHM_GuaranteeFilling, { foreignKey: "GuaranteeTypeId"});
  Gen_LetterProcessed.belongsTo(CVHM_GuaranteeType, { foreignKey: "GuaranteeTypeId"});
  CVHM_GuaranteeType.hasMany(Gen_LetterProcessed, { foreignKey: "GuaranteeTypeId"});
  Gen_LetterTemplate.belongsTo(CVHM_GuaranteeType, { foreignKey: "GuaranteeTypeId"});
  CVHM_GuaranteeType.hasMany(Gen_LetterTemplate, { foreignKey: "GuaranteeTypeId"});
  Client_Associations.belongsTo(Child_Accounts, { foreignKey: "ChildAccountId"});
  Child_Accounts.hasMany(Client_Associations, { foreignKey: "ChildAccountId"});
  Vendor_Associations.belongsTo(Child_Accounts, { foreignKey: "ChildAccountId"});
  Child_Accounts.hasMany(Vendor_Associations, { foreignKey: "ChildAccountId"});
  Bls.belongsTo(Clients, { foreignKey: "notifyPartyOneId"});
  Clients.hasMany(Bls, { foreignKey: "notifyPartyOneId"});
  Bls.belongsTo(Clients, { foreignKey: "notifyPartyTwoId"});
  Clients.hasMany(Bls, { foreignKey: "notifyPartyTwoId"});
  Client_Associations.belongsTo(Clients, { foreignKey: "ClientId"});
  Clients.hasMany(Client_Associations, { foreignKey: "ClientId"});
  SE_Jobs.belongsTo(Clients, { foreignKey: "ClientId"});
  Clients.hasMany(SE_Jobs, { foreignKey: "ClientId"});
  SE_Jobs.belongsTo(Clients, { foreignKey: "consigneeId"});
  Clients.hasMany(SE_Jobs, { foreignKey: "consigneeId"});
  SE_Jobs.belongsTo(Clients, { foreignKey: "shipperId"});
  Clients.hasMany(SE_Jobs, { foreignKey: "shipperId"});
  SE_Jobs.belongsTo(Commodities, { foreignKey: "commodityId"});
  Commodities.hasMany(SE_Jobs, { foreignKey: "commodityId"});
  Client_Associations.belongsTo(Companies, { foreignKey: "CompanyId"});
  Companies.hasMany(Client_Associations, { foreignKey: "CompanyId"});
  Parent_Accounts.belongsTo(Companies, { foreignKey: "CompanyId"});
  Companies.hasMany(Parent_Accounts, { foreignKey: "CompanyId"});
  Vendor_Associations.belongsTo(Companies, { foreignKey: "CompanyId"});
  Companies.hasMany(Vendor_Associations, { foreignKey: "CompanyId"});
  Vouchers.belongsTo(Companies, { foreignKey: "CompanyId"});
  Companies.hasMany(Vouchers, { foreignKey: "CompanyId"});
  DEPO_Activity_PaymentMode.belongsTo(DEPO_Activity, { foreignKey: "ActivityId"});
  DEPO_Activity.hasMany(DEPO_Activity_PaymentMode, { foreignKey: "ActivityId"});
  DEPO_ContainerActivity.belongsTo(DEPO_Activity, { foreignKey: "ActivityId"});
  DEPO_Activity.hasMany(DEPO_ContainerActivity, { foreignKey: "ActivityId"});
  DEPO_LinesTariff_PerMove.belongsTo(DEPO_Activity, { foreignKey: "ActivityId"});
  DEPO_Activity.hasMany(DEPO_LinesTariff_PerMove, { foreignKey: "ActivityId"});
  DEPO_Receipt.belongsTo(DEPO_Activity, { foreignKey: "ActivityId"});
  DEPO_Activity.hasMany(DEPO_Receipt, { foreignKey: "ActivityId"});
  DEPO_Activity.belongsTo(DEPO_ActivityStatus, { foreignKey: "ActvStatusId"});
  DEPO_ActivityStatus.hasMany(DEPO_Activity, { foreignKey: "ActvStatusId"});
  DEPO_ContainerActivity.belongsTo(DEPO_ActivityStatus, { foreignKey: "MovementTypeId"});
  DEPO_ActivityStatus.hasMany(DEPO_ContainerActivity, { foreignKey: "MovementTypeId"});
  DEPO_Activity.belongsTo(DEPO_ActivityStorageType, { foreignKey: "ActvStorageId"});
  DEPO_ActivityStorageType.hasMany(DEPO_Activity, { foreignKey: "ActvStorageId"});
  DEPO_Activity.belongsTo(DEPO_ActivityType, { foreignKey: "ActvTypeId"});
  DEPO_ActivityType.hasMany(DEPO_Activity, { foreignKey: "ActvTypeId"});
  DEPO_ContainerActivity.belongsTo(DEPO_ActivityType, { foreignKey: "ActivityTypeId"});
  DEPO_ActivityType.hasMany(DEPO_ContainerActivity, { foreignKey: "ActivityTypeId"});
  DEPO_ContainerActivityDetailHistory.belongsTo(DEPO_ActivityType, { foreignKey: "ActivityTypeId"});
  DEPO_ActivityType.hasMany(DEPO_ContainerActivityDetailHistory, { foreignKey: "ActivityTypeId"});
  DEPO_ContainerActivity_Detail.belongsTo(DEPO_ActivityType, { foreignKey: "ActivityTypeId"});
  DEPO_ActivityType.hasMany(DEPO_ContainerActivity_Detail, { foreignKey: "ActivityTypeId"});
  DEPO_ContainerActivity.belongsTo(DEPO_BillingMode, { foreignKey: "BillModeId"});
  DEPO_BillingMode.hasMany(DEPO_ContainerActivity, { foreignKey: "BillModeId"});
  DEPO_ContainerActivityCharges.belongsTo(DEPO_Container, { foreignKey: "ContainerId"});
  DEPO_Container.hasMany(DEPO_ContainerActivityCharges, { foreignKey: "ContainerId"});
  DEPO_ContainerActivityDetailHistory.belongsTo(DEPO_Container, { foreignKey: "ContainerId"});
  DEPO_Container.hasMany(DEPO_ContainerActivityDetailHistory, { foreignKey: "ContainerId"});
  DEPO_ContainerActivity_Detail.belongsTo(DEPO_Container, { foreignKey: "ContainerId"});
  DEPO_Container.hasMany(DEPO_ContainerActivity_Detail, { foreignKey: "ContainerId"});
  DEPO_ContainerHold_Detail.belongsTo(DEPO_Container, { foreignKey: "ContainerId"});
  DEPO_Container.hasMany(DEPO_ContainerHold_Detail, { foreignKey: "ContainerId"});
  DEPO_Receipt_Detail.belongsTo(DEPO_Container, { foreignKey: "ContainerId"});
  DEPO_Container.hasMany(DEPO_Receipt_Detail, { foreignKey: "ContainerId"});
  DEPO_ContainerActivityCharges.belongsTo(DEPO_ContainerActivity, { foreignKey: "CATranId"});
  DEPO_ContainerActivity.hasMany(DEPO_ContainerActivityCharges, { foreignKey: "CATranId"});
  DEPO_ContainerActivityDetailHistory.belongsTo(DEPO_ContainerActivity, { foreignKey: "CATranId"});
  DEPO_ContainerActivity.hasMany(DEPO_ContainerActivityDetailHistory, { foreignKey: "CATranId"});
  DEPO_ContainerActivity_Detail.belongsTo(DEPO_ContainerActivity, { foreignKey: "CAId"});
  DEPO_ContainerActivity.hasMany(DEPO_ContainerActivity_Detail, { foreignKey: "CAId"});
  DEPO_Receipt.belongsTo(DEPO_ContainerActivity, { foreignKey: "CAId"});
  DEPO_ContainerActivity.hasMany(DEPO_Receipt, { foreignKey: "CAId"});
  DEPO_Receipt_Detail.belongsTo(DEPO_ContainerActivityCharges, { foreignKey: "CAChargesId"});
  DEPO_ContainerActivityCharges.hasMany(DEPO_Receipt_Detail, { foreignKey: "CAChargesId"});
  DEPO_ContainerActivity.belongsTo(DEPO_ContainerActivityType, { foreignKey: "TransTypeId"});
  DEPO_ContainerActivityType.hasMany(DEPO_ContainerActivity, { foreignKey: "TransTypeId"});
  CTrk_ContainerActivity.belongsTo(DEPO_ContainerActivity_Detail, { foreignKey: "DEPOCADetailId"});
  DEPO_ContainerActivity_Detail.hasMany(CTrk_ContainerActivity, { foreignKey: "DEPOCADetailId"});
  DEPO_ContainerHold_Detail.belongsTo(DEPO_ContainerActivity_Detail, { foreignKey: "CADetailId"});
  DEPO_ContainerActivity_Detail.hasMany(DEPO_ContainerHold_Detail, { foreignKey: "CADetailId"});
  DEPO_ContainerActivityDetailHistory.belongsTo(DEPO_ContainerCondition, { foreignKey: "ConditionId"});
  DEPO_ContainerCondition.hasMany(DEPO_ContainerActivityDetailHistory, { foreignKey: "ConditionId"});
  DEPO_ContainerActivityDetailHistory.belongsTo(DEPO_ContainerCondition, { foreignKey: "OldConditionID"});
  DEPO_ContainerCondition.hasMany(DEPO_ContainerActivityDetailHistory, { foreignKey: "OldConditionID"});
  DEPO_ContainerHold_Detail.belongsTo(DEPO_ContainerHold, { foreignKey: "CHId"});
  DEPO_ContainerHold.hasMany(DEPO_ContainerHold_Detail, { foreignKey: "CHId"});
  DEPO_ContainerHold_Detail.belongsTo(DEPO_ContainerHold_RestrictMode, { foreignKey: "RestrictModeId"});
  DEPO_ContainerHold_RestrictMode.hasMany(DEPO_ContainerHold_Detail, { foreignKey: "RestrictModeId"});
  DEPO_ContainerActivity_Detail.belongsTo(DEPO_ContainerKind, { foreignKey: "ContainerKindId"});
  DEPO_ContainerKind.hasMany(DEPO_ContainerActivity_Detail, { foreignKey: "ContainerKindId"});
  DEPO_ContainerActivityDetailHistory.belongsTo(DEPO_ContainerStatus, { foreignKey: "CStatusId"});
  DEPO_ContainerStatus.hasMany(DEPO_ContainerActivityDetailHistory, { foreignKey: "CStatusId"});
  DEPO_ContainerActivity_Detail.belongsTo(DEPO_ContainerStatus, { foreignKey: "CStatusId"});
  DEPO_ContainerStatus.hasMany(DEPO_ContainerActivity_Detail, { foreignKey: "CStatusId"});
  DEPO_ContainerActivityCharges.belongsTo(DEPO_LinesTariff, { foreignKey: "LineTariffId"});
  DEPO_LinesTariff.hasMany(DEPO_ContainerActivityCharges, { foreignKey: "LineTariffId"});
  DEPO_LinesTariff_PerDay.belongsTo(DEPO_LinesTariff, { foreignKey: "LineTariffId"});
  DEPO_LinesTariff.hasMany(DEPO_LinesTariff_PerDay, { foreignKey: "LineTariffId"});
  DEPO_LinesTariff_PerMove.belongsTo(DEPO_LinesTariff, { foreignKey: "LineTariffId"});
  DEPO_LinesTariff.hasMany(DEPO_LinesTariff_PerMove, { foreignKey: "LineTariffId"});
  DEPO_ContainerActivityDetailHistory.belongsTo(DEPO_LoadingType, { foreignKey: "LoadingTypeId"});
  DEPO_LoadingType.hasMany(DEPO_ContainerActivityDetailHistory, { foreignKey: "LoadingTypeId"});
  DEPO_ContainerActivity_Detail.belongsTo(DEPO_LoadingType, { foreignKey: "LoadingTypeId"});
  DEPO_LoadingType.hasMany(DEPO_ContainerActivity_Detail, { foreignKey: "LoadingTypeId"});
  DEPO_ContainerActivity_Detail.belongsTo(DEPO_Location, { foreignKey: "LocationId"});
  DEPO_Location.hasMany(DEPO_ContainerActivity_Detail, { foreignKey: "LocationId"});
  DEPO_ContainerActivityDetailHistory.belongsTo(DEPO_ManufactureCoding, { foreignKey: "GenSetMfgId"});
  DEPO_ManufactureCoding.hasMany(DEPO_ContainerActivityDetailHistory, { foreignKey: "GenSetMfgId"});
  DEPO_ContainerActivity_Detail.belongsTo(DEPO_ManufactureCoding, { foreignKey: "GenSetMfgId"});
  DEPO_ManufactureCoding.hasMany(DEPO_ContainerActivity_Detail, { foreignKey: "GenSetMfgId"});
  DEPO_Receipt_Detail.belongsTo(DEPO_Receipt, { foreignKey: "ReceiptId"});
  DEPO_Receipt.hasMany(DEPO_Receipt_Detail, { foreignKey: "ReceiptId"});
  GL_ProcessLog.belongsTo(DEPO_Receipt, { foreignKey: "DEPOReceiptId"});
  DEPO_Receipt.hasMany(GL_ProcessLog, { foreignKey: "DEPOReceiptId"});
  DEPO_ContainerActivity.belongsTo(DEPO_ShiftSetup, { foreignKey: "ShiftId"});
  DEPO_ShiftSetup.hasMany(DEPO_ContainerActivity, { foreignKey: "ShiftId"});
  DEPO_Receipt.belongsTo(DEPO_ShiftSetup, { foreignKey: "ShiftId"});
  DEPO_ShiftSetup.hasMany(DEPO_Receipt, { foreignKey: "ShiftId"});
  DEPO_ContainerActivityDetailHistory.belongsTo(DEPO_StackingArea, { foreignKey: "StackAreaId"});
  DEPO_StackingArea.hasMany(DEPO_ContainerActivityDetailHistory, { foreignKey: "StackAreaId"});
  DEPO_ContainerActivity_Detail.belongsTo(DEPO_StackingArea, { foreignKey: "StackAreaId"});
  DEPO_StackingArea.hasMany(DEPO_ContainerActivity_Detail, { foreignKey: "StackAreaId"});
  DEPO_ContainerActivity.belongsTo(DEPO_SubLine, { foreignKey: "SubLineId"});
  DEPO_SubLine.hasMany(DEPO_ContainerActivity, { foreignKey: "SubLineId"});
  UserRegistration.belongsTo(DocumentSignRequest, { foreignKey: "DocSignRequestId"});
  DocumentSignRequest.hasMany(UserRegistration, { foreignKey: "DocSignRequestId"});
  Access_Levels.belongsTo(Employees, { foreignKey: "EmployeeId"});
  Employees.hasMany(Access_Levels, { foreignKey: "EmployeeId"});
  AssignTasks.belongsTo(Employees, { foreignKey: "assignedById"});
  Employees.hasMany(AssignTasks, { foreignKey: "assignedById"});
  AssignTasks.belongsTo(Employees, { foreignKey: "EmployeeId"});
  Employees.hasMany(AssignTasks, { foreignKey: "EmployeeId"});
  Clients.belongsTo(Employees, { foreignKey: "accountRepresentatorId"});
  Employees.hasMany(Clients, { foreignKey: "accountRepresentatorId"});
  Clients.belongsTo(Employees, { foreignKey: "authorizedById"});
  Employees.hasMany(Clients, { foreignKey: "authorizedById"});
  Clients.belongsTo(Employees, { foreignKey: "docRepresentatorId"});
  Employees.hasMany(Clients, { foreignKey: "docRepresentatorId"});
  Clients.belongsTo(Employees, { foreignKey: "salesRepresentatorId"});
  Employees.hasMany(Clients, { foreignKey: "salesRepresentatorId"});
  Histories.belongsTo(Employees, { foreignKey: "EmployeeId"});
  Employees.hasMany(Histories, { foreignKey: "EmployeeId"});
  Notifications.belongsTo(Employees, { foreignKey: "createdById"});
  Employees.hasMany(Notifications, { foreignKey: "createdById"});
  Office_Vouchers.belongsTo(Employees, { foreignKey: "EmployeeId"});
  Employees.hasMany(Office_Vouchers, { foreignKey: "EmployeeId"});
  SE_Jobs.belongsTo(Employees, { foreignKey: "createdById"});
  Employees.hasMany(SE_Jobs, { foreignKey: "createdById"});
  SE_Jobs.belongsTo(Employees, { foreignKey: "salesRepresentatorId"});
  Employees.hasMany(SE_Jobs, { foreignKey: "salesRepresentatorId"});
  Tasks.belongsTo(Employees, { foreignKey: "EmployeeId"});
  Employees.hasMany(Tasks, { foreignKey: "EmployeeId"});
  Vendors.belongsTo(Employees, { foreignKey: "accountRepresentatorId"});
  Employees.hasMany(Vendors, { foreignKey: "accountRepresentatorId"});
  Vendors.belongsTo(Employees, { foreignKey: "authorizedById"});
  Employees.hasMany(Vendors, { foreignKey: "authorizedById"});
  DocumentSignRequest.belongsTo(EversignDocumentTemplate, { foreignKey: "EversignTemplateId"});
  EversignDocumentTemplate.hasMany(DocumentSignRequest, { foreignKey: "EversignTemplateId"});
  GL_AccSecurityGrpDetail.belongsTo(GL_AccSecurityGrp, { foreignKey: "AccSecurityGrpId"});
  GL_AccSecurityGrp.hasMany(GL_AccSecurityGrpDetail, { foreignKey: "AccSecurityGrpId"});
  GL_AccSecurityGrpParentDetail.belongsTo(GL_AccSecurityGrp, { foreignKey: "AccSecurityGrpId"});
  GL_AccSecurityGrp.hasMany(GL_AccSecurityGrpParentDetail, { foreignKey: "AccSecurityGrpId"});
  GL_AccSecurityGrpUserRight.belongsTo(GL_AccSecurityGrp, { foreignKey: "AccSecurityGrpId"});
  GL_AccSecurityGrp.hasMany(GL_AccSecurityGrpUserRight, { foreignKey: "AccSecurityGrpId"});
  GL_AccountIntegration_Charges.belongsTo(GL_AccountIntegration, { foreignKey: "IntegrationId"});
  GL_AccountIntegration.hasMany(GL_AccountIntegration_Charges, { foreignKey: "IntegrationId"});
  GL_AccountIntegration_Common.belongsTo(GL_AccountIntegration, { foreignKey: "IntegrationId"});
  GL_AccountIntegration.hasMany(GL_AccountIntegration_Common, { foreignKey: "IntegrationId"});
  GL_AccountIntegration_PartyParent.belongsTo(GL_AccountIntegration, { foreignKey: "IntegrationId"});
  GL_AccountIntegration.hasMany(GL_AccountIntegration_PartyParent, { foreignKey: "IntegrationId"});
  GL_AccountIntegration_Charges.belongsTo(GL_AccountType, { foreignKey: "AccountTypeId"});
  GL_AccountType.hasMany(GL_AccountIntegration_Charges, { foreignKey: "AccountTypeId"});
  GL_AccountIntegration_Charges_Log.belongsTo(GL_AccountType, { foreignKey: "AccountTypeId"});
  GL_AccountType.hasMany(GL_AccountIntegration_Charges_Log, { foreignKey: "AccountTypeId"});
  GL_AccountIntegration_Common.belongsTo(GL_AccountType, { foreignKey: "AccountTypeId"});
  GL_AccountType.hasMany(GL_AccountIntegration_Common, { foreignKey: "AccountTypeId"});
  GL_AccountIntegration_Common_Log.belongsTo(GL_AccountType, { foreignKey: "AccountTypeId"});
  GL_AccountType.hasMany(GL_AccountIntegration_Common_Log, { foreignKey: "AccountTypeId"});
  GL_AgentInvoice_Charges.belongsTo(GL_AgentInvoice, { foreignKey: "AgentInvoiceId"});
  GL_AgentInvoice.hasMany(GL_AgentInvoice_Charges, { foreignKey: "AgentInvoiceId"});
  GL_AgentInvoice_TaxInvoice.belongsTo(GL_AgentInvoice, { foreignKey: "AgentInvoiceId"});
  GL_AgentInvoice.hasMany(GL_AgentInvoice_TaxInvoice, { foreignKey: "AgentInvoiceId"});
  GL_AgentPaymentRequisition_Detail.belongsTo(GL_AgentInvoice, { foreignKey: "AgentInvoiceId"});
  GL_AgentInvoice.hasMany(GL_AgentPaymentRequisition_Detail, { foreignKey: "AgentInvoiceId"});
  GL_AgentReceiptPayment_Detail.belongsTo(GL_AgentInvoice, { foreignKey: "AgentInvoiceId"});
  GL_AgentInvoice.hasMany(GL_AgentReceiptPayment_Detail, { foreignKey: "AgentInvoiceId"});
  GL_ProcessLog.belongsTo(GL_AgentInvoice, { foreignKey: "GLAgentInvoiceId"});
  GL_AgentInvoice.hasMany(GL_ProcessLog, { foreignKey: "GLAgentInvoiceId"});
  Gen_Document.belongsTo(GL_AgentInvoice, { foreignKey: "AgentInvoiceId"});
  GL_AgentInvoice.hasMany(Gen_Document, { foreignKey: "AgentInvoiceId"});
  GL_AgentInvoice.belongsTo(GL_AgentInvoiceOpening, { foreignKey: "AgentInvOpeningId"});
  GL_AgentInvoiceOpening.hasMany(GL_AgentInvoice, { foreignKey: "AgentInvOpeningId"});
  GL_AgentInvoice_Charges_Cont.belongsTo(GL_AgentInvoice_Charges, { foreignKey: "AgentInvoiceChargesId"});
  GL_AgentInvoice_Charges.hasMany(GL_AgentInvoice_Charges_Cont, { foreignKey: "AgentInvoiceChargesId"});
  GL_AgentInvoice_Charges_Tax.belongsTo(GL_AgentInvoice_Charges, { foreignKey: "AgentInvoiceChargesId"});
  GL_AgentInvoice_Charges.hasMany(GL_AgentInvoice_Charges_Tax, { foreignKey: "AgentInvoiceChargesId"});
  GL_AgentInvoice_History_Charges.belongsTo(GL_AgentInvoice_History, { foreignKey: "AgentInvoiceHistoryId"});
  GL_AgentInvoice_History.hasMany(GL_AgentInvoice_History_Charges, { foreignKey: "AgentInvoiceHistoryId"});
  GL_AgentPaymentRequisition_Detail.belongsTo(GL_AgentPaymentRequisition, { foreignKey: "AgentReqId"});
  GL_AgentPaymentRequisition.hasMany(GL_AgentPaymentRequisition_Detail, { foreignKey: "AgentReqId"});
  GL_AgentReceiptPayment.belongsTo(GL_AgentPaymentRequisition, { foreignKey: "AgentPaymentReqId"});
  GL_AgentPaymentRequisition.hasMany(GL_AgentReceiptPayment, { foreignKey: "AgentPaymentReqId"});
  GL_AgentReceiptPayment.belongsTo(GL_AgentReceiptPayment, { foreignKey: "ReversalId"});
  GL_AgentReceiptPayment.hasMany(GL_AgentReceiptPayment, { foreignKey: "ReversalId"});
  GL_AgentReceiptPayment_Detail.belongsTo(GL_AgentReceiptPayment, { foreignKey: "AgentReceiptPaymentId"});
  GL_AgentReceiptPayment.hasMany(GL_AgentReceiptPayment_Detail, { foreignKey: "AgentReceiptPaymentId"});
  GL_ProcessLog.belongsTo(GL_AgentReceiptPayment, { foreignKey: "GLAgentReceiptPaymentId"});
  GL_AgentReceiptPayment.hasMany(GL_ProcessLog, { foreignKey: "GLAgentReceiptPaymentId"});
  GL_AgentReceiptPayment_History_Detail.belongsTo(GL_AgentReceiptPayment_History, { foreignKey: "AgentReceiptPaymentHistoryId"});
  GL_AgentReceiptPayment_History.hasMany(GL_AgentReceiptPayment_History_Detail, { foreignKey: "AgentReceiptPaymentHistoryId"});
  GL_Voucher_Detail_PaymentChqInfo.belongsTo(GL_BalanceCIH, { foreignKey: "BalanceCIHId"});
  GL_BalanceCIH.hasMany(GL_Voucher_Detail_PaymentChqInfo, { foreignKey: "BalanceCIHId"});
  GL_Budget_Detail.belongsTo(GL_Budget, { foreignKey: "BudgetId"});
  GL_Budget.hasMany(GL_Budget_Detail, { foreignKey: "BudgetId"});
  GL_Budget_Detail_MB.belongsTo(GL_Budget_Detail, { foreignKey: "BudgetDetId"});
  GL_Budget_Detail.hasMany(GL_Budget_Detail_MB, { foreignKey: "BudgetDetId"});
  GL_CCGroup_CostCenter.belongsTo(GL_CCGroup, { foreignKey: "CCGroupId"});
  GL_CCGroup.hasMany(GL_CCGroup_CostCenter, { foreignKey: "CCGroupId"});
  CashDenominationRecording.belongsTo(GL_COA, { foreignKey: "COAAccountId"});
  GL_COA.hasMany(CashDenominationRecording, { foreignKey: "COAAccountId"});
  DEPO_Receipt.belongsTo(GL_COA, { foreignKey: "AccountId"});
  GL_COA.hasMany(DEPO_Receipt, { foreignKey: "AccountId"});
  GL_AccSecurityGrpDetail.belongsTo(GL_COA, { foreignKey: "GLAccountId"});
  GL_COA.hasMany(GL_AccSecurityGrpDetail, { foreignKey: "GLAccountId"});
  GL_AccSecurityGrpParentDetail.belongsTo(GL_COA, { foreignKey: "GLParentAccountId"});
  GL_COA.hasMany(GL_AccSecurityGrpParentDetail, { foreignKey: "GLParentAccountId"});
  GL_AccountBalances.belongsTo(GL_COA, { foreignKey: "COAAccountId"});
  GL_COA.hasMany(GL_AccountBalances, { foreignKey: "COAAccountId"});
  GL_AccountIntegration_Charges.belongsTo(GL_COA, { foreignKey: "COAId"});
  GL_COA.hasMany(GL_AccountIntegration_Charges, { foreignKey: "COAId"});
  GL_AccountIntegration_Charges_Log.belongsTo(GL_COA, { foreignKey: "COAId"});
  GL_COA.hasMany(GL_AccountIntegration_Charges_Log, { foreignKey: "COAId"});
  GL_AccountIntegration_Common.belongsTo(GL_COA, { foreignKey: "COAId"});
  GL_COA.hasMany(GL_AccountIntegration_Common, { foreignKey: "COAId"});
  GL_AccountIntegration_Common_Log.belongsTo(GL_COA, { foreignKey: "COAId"});
  GL_COA.hasMany(GL_AccountIntegration_Common_Log, { foreignKey: "COAId"});
  GL_AccountIntegration_PartyParent.belongsTo(GL_COA, { foreignKey: "COAId"});
  GL_COA.hasMany(GL_AccountIntegration_PartyParent, { foreignKey: "COAId"});
  GL_AccountIntegration_PartyParent_Log.belongsTo(GL_COA, { foreignKey: "COAId"});
  GL_COA.hasMany(GL_AccountIntegration_PartyParent_Log, { foreignKey: "COAId"});
  GL_AgentInvoiceOpening.belongsTo(GL_COA, { foreignKey: "SettlementAccountId"});
  GL_COA.hasMany(GL_AgentInvoiceOpening, { foreignKey: "SettlementAccountId"});
  GL_AgentInvoice_Charges.belongsTo(GL_COA, { foreignKey: "AdjustAccountId"});
  GL_COA.hasMany(GL_AgentInvoice_Charges, { foreignKey: "AdjustAccountId"});
  GL_AgentReceiptPayment.belongsTo(GL_COA, { foreignKey: "SettlementAccountId"});
  GL_COA.hasMany(GL_AgentReceiptPayment, { foreignKey: "SettlementAccountId"});
  GL_AgentReceiptPayment.belongsTo(GL_COA, { foreignKey: "BankChargesAccountId"});
  GL_COA.hasMany(GL_AgentReceiptPayment, { foreignKey: "BankChargesAccountId"});
  GL_AgentReceiptPayment.belongsTo(GL_COA, { foreignKey: "ExRateGainLossAccountId"});
  GL_COA.hasMany(GL_AgentReceiptPayment, { foreignKey: "ExRateGainLossAccountId"});
  GL_AgentReceiptPayment.belongsTo(GL_COA, { foreignKey: "TaxAccountId"});
  GL_COA.hasMany(GL_AgentReceiptPayment, { foreignKey: "TaxAccountId"});
  GL_BalanceCIH.belongsTo(GL_COA, { foreignKey: "PartyId"});
  GL_COA.hasMany(GL_BalanceCIH, { foreignKey: "PartyId"});
  GL_Budget_Detail.belongsTo(GL_COA, { foreignKey: "COAAccountId"});
  GL_COA.hasMany(GL_Budget_Detail, { foreignKey: "COAAccountId"});
  GL_COA.belongsTo(GL_COA, { foreignKey: "ParentAccountId"});
  GL_COA.hasMany(GL_COA, { foreignKey: "ParentAccountId"});
  GL_COA_Bank.belongsTo(GL_COA, { foreignKey: "COAAccountId"});
  GL_COA.hasMany(GL_COA_Bank, { foreignKey: "COAAccountId"});
  GL_COA_Company.belongsTo(GL_COA, { foreignKey: "COAAccountId"});
  GL_COA.hasMany(GL_COA_Company, { foreignKey: "COAAccountId"});
  GL_COA_Customer.belongsTo(GL_COA, { foreignKey: "COAAccountId"});
  GL_COA.hasMany(GL_COA_Customer, { foreignKey: "COAAccountId"});
  GL_COA_Employee.belongsTo(GL_COA, { foreignKey: "COAAccountId"});
  GL_COA.hasMany(GL_COA_Employee, { foreignKey: "COAAccountId"});
  GL_COA_PartyInfo.belongsTo(GL_COA, { foreignKey: "COAAccountId"});
  GL_COA.hasMany(GL_COA_PartyInfo, { foreignKey: "COAAccountId"});
  GL_COA_PropertyRule.belongsTo(GL_COA, { foreignKey: "AccountId"});
  GL_COA.hasMany(GL_COA_PropertyRule, { foreignKey: "AccountId"});
  GL_COA_Supplier.belongsTo(GL_COA, { foreignKey: "COAAccountId"});
  GL_COA.hasMany(GL_COA_Supplier, { foreignKey: "COAAccountId"});
  GL_ChequeBookStock.belongsTo(GL_COA, { foreignKey: "COABankAccountId"});
  GL_COA.hasMany(GL_ChequeBookStock, { foreignKey: "COABankAccountId"});
  GL_ChequeOpening.belongsTo(GL_COA, { foreignKey: "COAAccountId"});
  GL_COA.hasMany(GL_ChequeOpening, { foreignKey: "COAAccountId"});
  GL_JobBillOpening.belongsTo(GL_COA, { foreignKey: "SettlementAccountId"});
  GL_COA.hasMany(GL_JobBillOpening, { foreignKey: "SettlementAccountId"});
  GL_JobDirectExpRev.belongsTo(GL_COA, { foreignKey: "SettlementAccountId"});
  GL_COA.hasMany(GL_JobDirectExpRev, { foreignKey: "SettlementAccountId"});
  GL_JobInvoiceOpening.belongsTo(GL_COA, { foreignKey: "SettlementAccountId"});
  GL_COA.hasMany(GL_JobInvoiceOpening, { foreignKey: "SettlementAccountId"});
  GL_JobPayment.belongsTo(GL_COA, { foreignKey: "SettlementAccountId"});
  GL_COA.hasMany(GL_JobPayment, { foreignKey: "SettlementAccountId"});
  GL_JobPayment.belongsTo(GL_COA, { foreignKey: "BankChargesAccountId"});
  GL_COA.hasMany(GL_JobPayment, { foreignKey: "BankChargesAccountId"});
  GL_JobPayment.belongsTo(GL_COA, { foreignKey: "ExRateGainLossAccountId"});
  GL_COA.hasMany(GL_JobPayment, { foreignKey: "ExRateGainLossAccountId"});
  GL_JobPayment.belongsTo(GL_COA, { foreignKey: "TaxAccountId"});
  GL_COA.hasMany(GL_JobPayment, { foreignKey: "TaxAccountId"});
  GL_JobPayment.belongsTo(GL_COA, { foreignKey: "TaxAccountId2"});
  GL_COA.hasMany(GL_JobPayment, { foreignKey: "TaxAccountId2"});
  GL_JobPayment.belongsTo(GL_COA, { foreignKey: "TaxAccountId3"});
  GL_COA.hasMany(GL_JobPayment, { foreignKey: "TaxAccountId3"});
  GL_JobReceipt.belongsTo(GL_COA, { foreignKey: "SettlementAccountId"});
  GL_COA.hasMany(GL_JobReceipt, { foreignKey: "SettlementAccountId"});
  GL_JobReceipt.belongsTo(GL_COA, { foreignKey: "BankChargesAccountId"});
  GL_COA.hasMany(GL_JobReceipt, { foreignKey: "BankChargesAccountId"});
  GL_JobReceipt.belongsTo(GL_COA, { foreignKey: "ExRateGainLossAccountId"});
  GL_COA.hasMany(GL_JobReceipt, { foreignKey: "ExRateGainLossAccountId"});
  GL_JobReceipt.belongsTo(GL_COA, { foreignKey: "TaxAccountId"});
  GL_COA.hasMany(GL_JobReceipt, { foreignKey: "TaxAccountId"});
  GL_JobSecurityTran.belongsTo(GL_COA, { foreignKey: "ContraAccountId"});
  GL_COA.hasMany(GL_JobSecurityTran, { foreignKey: "ContraAccountId"});
  GL_JobSecurityTranHistory.belongsTo(GL_COA, { foreignKey: "SettlementAccountId"});
  GL_COA.hasMany(GL_JobSecurityTranHistory, { foreignKey: "SettlementAccountId"});
  GL_JobSettlement.belongsTo(GL_COA, { foreignKey: "ExRateGainLossAccountId"});
  GL_COA.hasMany(GL_JobSettlement, { foreignKey: "ExRateGainLossAccountId"});
  GL_PrincipalReceiptPayment.belongsTo(GL_COA, { foreignKey: "SettlementAccountId"});
  GL_COA.hasMany(GL_PrincipalReceiptPayment, { foreignKey: "SettlementAccountId"});
  GL_PrincipalReceiptPayment.belongsTo(GL_COA, { foreignKey: "BankChargesAccountId"});
  GL_COA.hasMany(GL_PrincipalReceiptPayment, { foreignKey: "BankChargesAccountId"});
  GL_PrincipalReceiptPayment.belongsTo(GL_COA, { foreignKey: "ExRateGainLossAccountId"});
  GL_COA.hasMany(GL_PrincipalReceiptPayment, { foreignKey: "ExRateGainLossAccountId"});
  GL_PrincipalReceiptPayment.belongsTo(GL_COA, { foreignKey: "TaxAccountId"});
  GL_COA.hasMany(GL_PrincipalReceiptPayment, { foreignKey: "TaxAccountId"});
  GL_PrincipleInvoiceOpening.belongsTo(GL_COA, { foreignKey: "SettlementAccountId"});
  GL_COA.hasMany(GL_PrincipleInvoiceOpening, { foreignKey: "SettlementAccountId"});
  GL_ReconciledData.belongsTo(GL_COA, { foreignKey: "BankId"});
  GL_COA.hasMany(GL_ReconciledData, { foreignKey: "BankId"});
  GL_ReconciledLockedData.belongsTo(GL_COA, { foreignKey: "AccountId"});
  GL_COA.hasMany(GL_ReconciledLockedData, { foreignKey: "AccountId"});
  GL_Requisition.belongsTo(GL_COA, { foreignKey: "PartyId"});
  GL_COA.hasMany(GL_Requisition, { foreignKey: "PartyId"});
  GL_Requisition_Detail.belongsTo(GL_COA, { foreignKey: "COAAccountId"});
  GL_COA.hasMany(GL_Requisition_Detail, { foreignKey: "COAAccountId"});
  GL_SettlementInstrument.belongsTo(GL_COA, { foreignKey: "BankId"});
  GL_COA.hasMany(GL_SettlementInstrument, { foreignKey: "BankId"});
  GL_Voucher.belongsTo(GL_COA, { foreignKey: "SettlementAccountId"});
  GL_COA.hasMany(GL_Voucher, { foreignKey: "SettlementAccountId"});
  GL_Voucher_Detail.belongsTo(GL_COA, { foreignKey: "COAAccountId"});
  GL_COA.hasMany(GL_Voucher_Detail, { foreignKey: "COAAccountId"});
  GL_Voucher_Detail_ChequeInfo.belongsTo(GL_COA, { foreignKey: "PartyId"});
  GL_COA.hasMany(GL_Voucher_Detail_ChequeInfo, { foreignKey: "PartyId"});
  GL_Voucher_Detail_Mem.belongsTo(GL_COA, { foreignKey: "COAAccountId"});
  GL_COA.hasMany(GL_Voucher_Detail_Mem, { foreignKey: "COAAccountId"});
  GL_Voucher_Mem.belongsTo(GL_COA, { foreignKey: "SettlementAccountId"});
  GL_COA.hasMany(GL_Voucher_Mem, { foreignKey: "SettlementAccountId"});
  GL_WTHDeposit.belongsTo(GL_COA, { foreignKey: "GLAccountid"});
  GL_COA.hasMany(GL_WTHDeposit, { foreignKey: "GLAccountid"});
  GL_WTHDeposit.belongsTo(GL_COA, { foreignKey: "CashBankAccountId"});
  GL_COA.hasMany(GL_WTHDeposit, { foreignKey: "CashBankAccountId"});
  GL_WTHDeposit.belongsTo(GL_COA, { foreignKey: "PartyAccountId"});
  GL_COA.hasMany(GL_WTHDeposit, { foreignKey: "PartyAccountId"});
  Gen_Parties.belongsTo(GL_COA, { foreignKey: "ContraAccountId"});
  GL_COA.hasMany(Gen_Parties, { foreignKey: "ContraAccountId"});
  Gen_Parties.belongsTo(GL_COA, { foreignKey: "AccountId"});
  GL_COA.hasMany(Gen_Parties, { foreignKey: "AccountId"});
  Gen_Parties.belongsTo(GL_COA, { foreignKey: "ParentAccountId"});
  GL_COA.hasMany(Gen_Parties, { foreignKey: "ParentAccountId"});
  Gen_ReportFilter.belongsTo(GL_COA, { foreignKey: "AccountId"});
  GL_COA.hasMany(Gen_ReportFilter, { foreignKey: "AccountId"});
  Gen_SecurityFile.belongsTo(GL_COA, { foreignKey: "RefundAccountId"});
  GL_COA.hasMany(Gen_SecurityFile, { foreignKey: "RefundAccountId"});
  Gen_SecurityFile.belongsTo(GL_COA, { foreignKey: "SecReceivableAccId"});
  GL_COA.hasMany(Gen_SecurityFile, { foreignKey: "SecReceivableAccId"});
  Gen_TaxAuthority.belongsTo(GL_COA, { foreignKey: "AccountId"});
  GL_COA.hasMany(Gen_TaxAuthority, { foreignKey: "AccountId"});
  Gen_TaxAuthority.belongsTo(GL_COA, { foreignKey: "AccountPayableId"});
  GL_COA.hasMany(Gen_TaxAuthority, { foreignKey: "AccountPayableId"});
  Gen_TaxAuthority.belongsTo(GL_COA, { foreignKey: "AccountPrincipalId"});
  GL_COA.hasMany(Gen_TaxAuthority, { foreignKey: "AccountPrincipalId"});
  Gen_TaxAuthority.belongsTo(GL_COA, { foreignKey: "WithHeldAcctId"});
  GL_COA.hasMany(Gen_TaxAuthority, { foreignKey: "WithHeldAcctId"});
  TAP_Allowance_Detail.belongsTo(GL_COA, { foreignKey: "GLAccountId"});
  GL_COA.hasMany(TAP_Allowance_Detail, { foreignKey: "GLAccountId"});
  TAP_Deduction_Detail.belongsTo(GL_COA, { foreignKey: "GLAccountId"});
  GL_COA.hasMany(TAP_Deduction_Detail, { foreignKey: "GLAccountId"});
  TAP_Loan.belongsTo(GL_COA, { foreignKey: "LoanAccountId"});
  GL_COA.hasMany(TAP_Loan, { foreignKey: "LoanAccountId"});
  TAP_Loan.belongsTo(GL_COA, { foreignKey: "LoanPayableAccountId"});
  GL_COA.hasMany(TAP_Loan, { foreignKey: "LoanPayableAccountId"});
  TAP_Salaries.belongsTo(GL_COA, { foreignKey: "SalaryPayableAccountId"});
  GL_COA.hasMany(TAP_Salaries, { foreignKey: "SalaryPayableAccountId"});
  TAP_Salaries_Detail_GL.belongsTo(GL_COA, { foreignKey: "GLCOAId"});
  GL_COA.hasMany(TAP_Salaries_Detail_GL, { foreignKey: "GLCOAId"});
  TAP_SalaryAdvance.belongsTo(GL_COA, { foreignKey: "GLAccountId"});
  GL_COA.hasMany(TAP_SalaryAdvance, { foreignKey: "GLAccountId"});
  GL_COA.belongsTo(GL_COACategory, { foreignKey: "CategoryId"});
  GL_COACategory.hasMany(GL_COA, { foreignKey: "CategoryId"});
  GL_COA.belongsTo(GL_COAPNLCategory, { foreignKey: "PNLCategoryId"});
  GL_COAPNLCategory.hasMany(GL_COA, { foreignKey: "PNLCategoryId"});
  GL_COA_PropertyRule.belongsTo(GL_COARule, { foreignKey: "RuleId"});
  GL_COARule.hasMany(GL_COA_PropertyRule, { foreignKey: "RuleId"});
  GL_COA.belongsTo(GL_COASubCategory, { foreignKey: "SubCategoryId"});
  GL_COASubCategory.hasMany(GL_COA, { foreignKey: "SubCategoryId"});
  GL_PaymentType.belongsTo(GL_COASubCategory, { foreignKey: "SubCategoryId"});
  GL_COASubCategory.hasMany(GL_PaymentType, { foreignKey: "SubCategoryId"});
  GL_ChequeBookStock_Detail.belongsTo(GL_ChequeBookStock, { foreignKey: "ChequeBookStockId"});
  GL_ChequeBookStock.hasMany(GL_ChequeBookStock_Detail, { foreignKey: "ChequeBookStockId"});
  GL_ChequeOpening_Properties.belongsTo(GL_ChequeOpening, { foreignKey: "ChOpeningId"});
  GL_ChequeOpening.hasMany(GL_ChequeOpening_Properties, { foreignKey: "ChOpeningId"});
  GL_ChequeOpening_VDProperties.belongsTo(GL_ChequeOpening, { foreignKey: "ChOpeningId"});
  GL_ChequeOpening.hasMany(GL_ChequeOpening_VDProperties, { foreignKey: "ChOpeningId"});
  GL_BalanceCIH.belongsTo(GL_ChequeStatus, { foreignKey: "ChequeStatusId"});
  GL_ChequeStatus.hasMany(GL_BalanceCIH, { foreignKey: "ChequeStatusId"});
  GL_Voucher_Detail_PaymentChqInfo.belongsTo(GL_ChequeStatus, { foreignKey: "ChequeStatusId"});
  GL_ChequeStatus.hasMany(GL_Voucher_Detail_PaymentChqInfo, { foreignKey: "ChequeStatusId"});
  GL_BalanceCIH.belongsTo(GL_ChequeType, { foreignKey: "ChequeTypeId"});
  GL_ChequeType.hasMany(GL_BalanceCIH, { foreignKey: "ChequeTypeId"});
  GL_Voucher.belongsTo(GL_ChequeType, { foreignKey: "ChequeTypeId"});
  GL_ChequeType.hasMany(GL_Voucher, { foreignKey: "ChequeTypeId"});
  AExp_AirExportJob_ChargesPayb.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(AExp_AirExportJob_ChargesPayb, { foreignKey: "CurrencyId"});
  AExp_AirExportJob_ChargesPayb_History.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(AExp_AirExportJob_ChargesPayb_History, { foreignKey: "CurrencyId"});
  AExp_AirExportJob_ChargesRecv.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(AExp_AirExportJob_ChargesRecv, { foreignKey: "CurrencyId"});
  AExp_AirExportJob_ChargesRecv_History.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(AExp_AirExportJob_ChargesRecv_History, { foreignKey: "CurrencyId"});
  AImp_AirImportJob_ChargesPayb.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(AImp_AirImportJob_ChargesPayb, { foreignKey: "CurrencyId"});
  AImp_AirImportJob_ChargesPayb_History.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(AImp_AirImportJob_ChargesPayb_History, { foreignKey: "CurrencyId"});
  AImp_AirImportJob_ChargesRecv.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(AImp_AirImportJob_ChargesRecv, { foreignKey: "CurrencyId"});
  AImp_AirImportJob_ChargesRecv_History.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(AImp_AirImportJob_ChargesRecv_History, { foreignKey: "CurrencyId"});
  CashDenominationRecording.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(CashDenominationRecording, { foreignKey: "CurrencyId"});
  DEPO_ContainerActivityCharges.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(DEPO_ContainerActivityCharges, { foreignKey: "CurrencyId"});
  DEPO_LinesTariff.belongsTo(GL_Currencies, { foreignKey: "CurrencyID"});
  GL_Currencies.hasMany(DEPO_LinesTariff, { foreignKey: "CurrencyID"});
  DEPO_LinesTariff_PerMove.belongsTo(GL_Currencies, { foreignKey: "CurrencyID"});
  GL_Currencies.hasMany(DEPO_LinesTariff_PerMove, { foreignKey: "CurrencyID"});
  GL_AccountBalances.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_AccountBalances, { foreignKey: "CurrencyId"});
  GL_AgentInvoice.belongsTo(GL_Currencies, { foreignKey: "InvoiceCurrencyId"});
  GL_Currencies.hasMany(GL_AgentInvoice, { foreignKey: "InvoiceCurrencyId"});
  GL_AgentInvoiceOpening.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_AgentInvoiceOpening, { foreignKey: "CurrencyId"});
  GL_AgentInvoice_Charges.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_AgentInvoice_Charges, { foreignKey: "CurrencyId"});
  GL_AgentPaymentRequisition.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_AgentPaymentRequisition, { foreignKey: "CurrencyId"});
  GL_AgentPaymentRequisition_Detail.belongsTo(GL_Currencies, { foreignKey: "dCurrencyId"});
  GL_Currencies.hasMany(GL_AgentPaymentRequisition_Detail, { foreignKey: "dCurrencyId"});
  GL_AgentReceiptPayment.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_AgentReceiptPayment, { foreignKey: "CurrencyId"});
  GL_AgentReceiptPayment_Detail.belongsTo(GL_Currencies, { foreignKey: "dCurrencyId"});
  GL_Currencies.hasMany(GL_AgentReceiptPayment_Detail, { foreignKey: "dCurrencyId"});
  GL_ChequeOpening.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_ChequeOpening, { foreignKey: "CurrencyId"});
  GL_Invoices.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_Invoices, { foreignKey: "CurrencyId"});
  GL_Invoices_History.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_Invoices_History, { foreignKey: "CurrencyId"});
  GL_JobBill.belongsTo(GL_Currencies, { foreignKey: "BillCurrencyId"});
  GL_Currencies.hasMany(GL_JobBill, { foreignKey: "BillCurrencyId"});
  GL_JobBillOpening.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_JobBillOpening, { foreignKey: "CurrencyId"});
  GL_JobBillOpening_Advance.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_JobBillOpening_Advance, { foreignKey: "CurrencyId"});
  GL_JobBill_Charges.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_JobBill_Charges, { foreignKey: "CurrencyId"});
  GL_JobDirectExpRev.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_JobDirectExpRev, { foreignKey: "CurrencyId"});
  GL_JobDirectExpRev_Charges.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_JobDirectExpRev_Charges, { foreignKey: "CurrencyId"});
  GL_JobInvoice.belongsTo(GL_Currencies, { foreignKey: "InvoiceCurrencyId"});
  GL_Currencies.hasMany(GL_JobInvoice, { foreignKey: "InvoiceCurrencyId"});
  GL_JobInvoiceOpening.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_JobInvoiceOpening, { foreignKey: "CurrencyId"});
  GL_JobInvoiceOpening_Advance.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_JobInvoiceOpening_Advance, { foreignKey: "CurrencyId"});
  GL_JobInvoice_Charges.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_JobInvoice_Charges, { foreignKey: "CurrencyId"});
  GL_JobInvoice_Charges_Cont.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_JobInvoice_Charges_Cont, { foreignKey: "CurrencyId"});
  GL_JobInvoice_PaidByClient.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_JobInvoice_PaidByClient, { foreignKey: "CurrencyId"});
  GL_JobPayment.belongsTo(GL_Currencies, { foreignKey: "PaymentCurrencyId"});
  GL_Currencies.hasMany(GL_JobPayment, { foreignKey: "PaymentCurrencyId"});
  GL_JobPaymentRequisition.belongsTo(GL_Currencies, { foreignKey: "PaymentCurrencyId"});
  GL_Currencies.hasMany(GL_JobPaymentRequisition, { foreignKey: "PaymentCurrencyId"});
  GL_JobPaymentRequisition_Detail.belongsTo(GL_Currencies, { foreignKey: "dCurrencyId"});
  GL_Currencies.hasMany(GL_JobPaymentRequisition_Detail, { foreignKey: "dCurrencyId"});
  GL_JobPayment_Detail.belongsTo(GL_Currencies, { foreignKey: "dCurrencyId"});
  GL_Currencies.hasMany(GL_JobPayment_Detail, { foreignKey: "dCurrencyId"});
  GL_JobReceipt.belongsTo(GL_Currencies, { foreignKey: "ReceiptCurrencyId"});
  GL_Currencies.hasMany(GL_JobReceipt, { foreignKey: "ReceiptCurrencyId"});
  GL_JobReceipt_Detail.belongsTo(GL_Currencies, { foreignKey: "dCurrencyId"});
  GL_Currencies.hasMany(GL_JobReceipt_Detail, { foreignKey: "dCurrencyId"});
  GL_JobSettlement.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_JobSettlement, { foreignKey: "CurrencyId"});
  GL_JobSettlement_Detail.belongsTo(GL_Currencies, { foreignKey: "dCurrencyId"});
  GL_Currencies.hasMany(GL_JobSettlement_Detail, { foreignKey: "dCurrencyId"});
  GL_PrincipalManualSOA.belongsTo(GL_Currencies, { foreignKey: "InvoiceCurrencyId"});
  GL_Currencies.hasMany(GL_PrincipalManualSOA, { foreignKey: "InvoiceCurrencyId"});
  GL_PrincipalReceiptPayment.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_PrincipalReceiptPayment, { foreignKey: "CurrencyId"});
  GL_PrincipalReceiptPayment_Detail.belongsTo(GL_Currencies, { foreignKey: "dCurrencyId"});
  GL_Currencies.hasMany(GL_PrincipalReceiptPayment_Detail, { foreignKey: "dCurrencyId"});
  GL_PrincipleInvoiceOpening.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_PrincipleInvoiceOpening, { foreignKey: "CurrencyId"});
  GL_PrincipleInvoice_Charges.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_PrincipleInvoice_Charges, { foreignKey: "CurrencyId"});
  GL_Requisition.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_Requisition, { foreignKey: "CurrencyId"});
  GL_RunningDetention.belongsTo(GL_Currencies, { foreignKey: "InvoiceCurrencyId"});
  GL_Currencies.hasMany(GL_RunningDetention, { foreignKey: "InvoiceCurrencyId"});
  GL_RunningDetention_Charges.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_RunningDetention_Charges, { foreignKey: "CurrencyId"});
  GL_RunningDetention_Charges_Cont.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_RunningDetention_Charges_Cont, { foreignKey: "CurrencyId"});
  GL_SettlementInstrument.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_SettlementInstrument, { foreignKey: "CurrencyId"});
  GL_SettlementInstrument_History.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_SettlementInstrument_History, { foreignKey: "CurrencyId"});
  GL_TerminalInvoice.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_TerminalInvoice, { foreignKey: "CurrencyId"});
  GL_TerminalInvoice_Detail.belongsTo(GL_Currencies, { foreignKey: "dCurrencyId"});
  GL_Currencies.hasMany(GL_TerminalInvoice_Detail, { foreignKey: "dCurrencyId"});
  GL_UnAccruedEquipmentInvoice.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_UnAccruedEquipmentInvoice, { foreignKey: "CurrencyId"});
  GL_Voucher.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_Voucher, { foreignKey: "CurrencyId"});
  GL_Voucher_Detail.belongsTo(GL_Currencies, { foreignKey: "CurrencyIdVD"});
  GL_Currencies.hasMany(GL_Voucher_Detail, { foreignKey: "CurrencyIdVD"});
  GL_Voucher_Detail_History.belongsTo(GL_Currencies, { foreignKey: "CurrencyIdVD"});
  GL_Currencies.hasMany(GL_Voucher_Detail_History, { foreignKey: "CurrencyIdVD"});
  GL_Voucher_Detail_Mem.belongsTo(GL_Currencies, { foreignKey: "CurrencyIdVD"});
  GL_Currencies.hasMany(GL_Voucher_Detail_Mem, { foreignKey: "CurrencyIdVD"});
  GL_Voucher_History.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_Voucher_History, { foreignKey: "CurrencyId"});
  GL_Voucher_Mem.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(GL_Voucher_Mem, { foreignKey: "CurrencyId"});
  Gen_Charges.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_Charges, { foreignKey: "CurrencyId"});
  Gen_ChargesTariff.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_ChargesTariff, { foreignKey: "CurrencyId"});
  Gen_ChargesTariff_Cleaning.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_ChargesTariff_Cleaning, { foreignKey: "CurrencyId"});
  Gen_ChargesTariff_Placement.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_ChargesTariff_Placement, { foreignKey: "CurrencyId"});
  Gen_ChargesTariff_Storage.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_ChargesTariff_Storage, { foreignKey: "CurrencyId"});
  Gen_Charges_SubCompanyRight.belongsTo(GL_Currencies, { foreignKey: "dCurrencyId"});
  GL_Currencies.hasMany(Gen_Charges_SubCompanyRight, { foreignKey: "dCurrencyId"});
  Gen_CurrencyMarketRate.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_CurrencyMarketRate, { foreignKey: "CurrencyId"});
  Gen_DetentionTariff.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_DetentionTariff, { foreignKey: "CurrencyId"});
  Gen_EDIProcessed_Charge.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_EDIProcessed_Charge, { foreignKey: "CurrencyId"});
  Gen_ExchRateRange.belongsTo(GL_Currencies, { foreignKey: "DefaultCurrencyId"});
  GL_Currencies.hasMany(Gen_ExchRateRange, { foreignKey: "DefaultCurrencyId"});
  Gen_ExchRateRange_Detail.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_ExchRateRange_Detail, { foreignKey: "CurrencyId"});
  Gen_Flight_Schedule_ExchRateDetail.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_Flight_Schedule_ExchRateDetail, { foreignKey: "CurrencyId"});
  Gen_PEDIMapping.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_PEDIMapping, { foreignKey: "CurrencyId"});
  Gen_Parties.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_Parties, { foreignKey: "CurrencyId"});
  Gen_Quotation.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_Quotation, { foreignKey: "CurrencyId"});
  Gen_Quotation_Detail.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_Quotation_Detail, { foreignKey: "CurrencyId"});
  Gen_ReportFilter.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_ReportFilter, { foreignKey: "CurrencyId"});
  Gen_SeaAccessorialCharge.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_SeaAccessorialCharge, { foreignKey: "CurrencyId"});
  Gen_SubCompanies.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_SubCompanies, { foreignKey: "CurrencyId"});
  Gen_Voyage_ExchRateDetail.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Gen_Voyage_ExchRateDetail, { foreignKey: "CurrencyId"});
  INQ_RateFromVendor_Charges.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(INQ_RateFromVendor_Charges, { foreignKey: "CurrencyId"});
  INQ_RateToCustomer_Charges.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(INQ_RateToCustomer_Charges, { foreignKey: "CurrencyId"});
  Log_DutyCalculation_PODetail.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Log_DutyCalculation_PODetail, { foreignKey: "CurrencyId"});
  Log_Job.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Log_Job, { foreignKey: "CurrencyId"});
  Log_Job_ChargesPayb.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Log_Job_ChargesPayb, { foreignKey: "CurrencyId"});
  Log_Job_ChargesPayb_History.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Log_Job_ChargesPayb_History, { foreignKey: "CurrencyId"});
  Log_Job_ChargesRecv.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Log_Job_ChargesRecv, { foreignKey: "CurrencyId"});
  Log_Job_ChargesRecv_History.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Log_Job_ChargesRecv_History, { foreignKey: "CurrencyId"});
  Log_Job_PaidByClient.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(Log_Job_PaidByClient, { foreignKey: "CurrencyId"});
  SExp_BL_Charges.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(SExp_BL_Charges, { foreignKey: "CurrencyId"});
  SExp_BookingRequest.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(SExp_BookingRequest, { foreignKey: "CurrencyId"});
  SExp_SeaExportJob_ChargesPayb.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(SExp_SeaExportJob_ChargesPayb, { foreignKey: "CurrencyId"});
  SExp_SeaExportJob_ChargesPayb_History.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(SExp_SeaExportJob_ChargesPayb_History, { foreignKey: "CurrencyId"});
  SExp_SeaExportJob_ChargesRecv.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(SExp_SeaExportJob_ChargesRecv, { foreignKey: "CurrencyId"});
  SExp_SeaExportJob_ChargesRecv_History.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(SExp_SeaExportJob_ChargesRecv_History, { foreignKey: "CurrencyId"});
  SExp_SeaExportJob_Principle.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(SExp_SeaExportJob_Principle, { foreignKey: "CurrencyId"});
  SExp_SeaExportJob_Principle_History.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(SExp_SeaExportJob_Principle_History, { foreignKey: "CurrencyId"});
  SImp_SeaImportJob_ChargesPayb.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(SImp_SeaImportJob_ChargesPayb, { foreignKey: "CurrencyId"});
  SImp_SeaImportJob_ChargesPayb_History.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(SImp_SeaImportJob_ChargesPayb_History, { foreignKey: "CurrencyId"});
  SImp_SeaImportJob_ChargesRecv.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(SImp_SeaImportJob_ChargesRecv, { foreignKey: "CurrencyId"});
  SImp_SeaImportJob_ChargesRecv_History.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(SImp_SeaImportJob_ChargesRecv_History, { foreignKey: "CurrencyId"});
  SImp_SeaImportJob_Principle.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(SImp_SeaImportJob_Principle, { foreignKey: "CurrencyId"});
  SImp_SeaImportJob_Principle_History.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(SImp_SeaImportJob_Principle_History, { foreignKey: "CurrencyId"});
  WMS_Delivery.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(WMS_Delivery, { foreignKey: "CurrencyId"});
  WMS_GRN.belongsTo(GL_Currencies, { foreignKey: "CurrencyId"});
  GL_Currencies.hasMany(WMS_GRN, { foreignKey: "CurrencyId"});
  GL_Budget.belongsTo(GL_FiscalYear, { foreignKey: "FiscalYearId"});
  GL_FiscalYear.hasMany(GL_Budget, { foreignKey: "FiscalYearId"});
  GL_FiscalYear_Quarter.belongsTo(GL_FiscalYear, { foreignKey: "FiscalId"});
  GL_FiscalYear.hasMany(GL_FiscalYear_Quarter, { foreignKey: "FiscalId"});
  GL_Periods.belongsTo(GL_FiscalYear, { foreignKey: "FiscalId"});
  GL_FiscalYear.hasMany(GL_Periods, { foreignKey: "FiscalId"});
  Gen_PartiesCommitment.belongsTo(GL_FiscalYear, { foreignKey: "FiscalYearId"});
  GL_FiscalYear.hasMany(Gen_PartiesCommitment, { foreignKey: "FiscalYearId"});
  Gen_SequenceCustomized.belongsTo(GL_FiscalYear, { foreignKey: "FiscalYearId"});
  GL_FiscalYear.hasMany(Gen_SequenceCustomized, { foreignKey: "FiscalYearId"});
  Gen_SequenceSWC.belongsTo(GL_FiscalYear, { foreignKey: "FiscalYearId"});
  GL_FiscalYear.hasMany(Gen_SequenceSWC, { foreignKey: "FiscalYearId"});
  Gen_Sequences.belongsTo(GL_FiscalYear, { foreignKey: "FiscalYearId"});
  GL_FiscalYear.hasMany(Gen_Sequences, { foreignKey: "FiscalYearId"});
  Gen_TaxAuthorityGroup_Detail.belongsTo(GL_FiscalYear, { foreignKey: "FiscalYearId"});
  GL_FiscalYear.hasMany(Gen_TaxAuthorityGroup_Detail, { foreignKey: "FiscalYearId"});
  GL_Invoices.belongsTo(GL_InvMode, { foreignKey: "InvoiceTypeId"});
  GL_InvMode.hasMany(GL_Invoices, { foreignKey: "InvoiceTypeId"});
  GL_Invoices_History.belongsTo(GL_InvMode, { foreignKey: "InvoiceTypeId"});
  GL_InvMode.hasMany(GL_Invoices_History, { foreignKey: "InvoiceTypeId"});
  GL_SettlementInstrument.belongsTo(GL_InvMode, { foreignKey: "InsTypeId"});
  GL_InvMode.hasMany(GL_SettlementInstrument, { foreignKey: "InsTypeId"});
  GL_SettlementInstrument_History.belongsTo(GL_InvMode, { foreignKey: "InsTypeId"});
  GL_InvMode.hasMany(GL_SettlementInstrument_History, { foreignKey: "InsTypeId"});
  GL_Voucher_Detail.belongsTo(GL_InvTaxType, { foreignKey: "TaxTypeId"});
  GL_InvTaxType.hasMany(GL_Voucher_Detail, { foreignKey: "TaxTypeId"});
  GL_Voucher_Detail_History.belongsTo(GL_InvTaxType, { foreignKey: "TaxTypeId"});
  GL_InvTaxType.hasMany(GL_Voucher_Detail_History, { foreignKey: "TaxTypeId"});
  GL_Voucher_Detail_Mem.belongsTo(GL_InvTaxType, { foreignKey: "TaxTypeId"});
  GL_InvTaxType.hasMany(GL_Voucher_Detail_Mem, { foreignKey: "TaxTypeId"});
  GL_AgentInvoice.belongsTo(GL_Invoices, { foreignKey: "GLInvoiceId"});
  GL_Invoices.hasMany(GL_AgentInvoice, { foreignKey: "GLInvoiceId"});
  GL_InvAdjustments.belongsTo(GL_Invoices, { foreignKey: "InvoiceId"});
  GL_Invoices.hasMany(GL_InvAdjustments, { foreignKey: "InvoiceId"});
  GL_InvoiceBalance.belongsTo(GL_Invoices, { foreignKey: "InvId"});
  GL_Invoices.hasMany(GL_InvoiceBalance, { foreignKey: "InvId"});
  GL_Invoices_Properties.belongsTo(GL_Invoices, { foreignKey: "InvoiceId"});
  GL_Invoices.hasMany(GL_Invoices_Properties, { foreignKey: "InvoiceId"});
  GL_JobBill.belongsTo(GL_Invoices, { foreignKey: "GLInvoiceId"});
  GL_Invoices.hasMany(GL_JobBill, { foreignKey: "GLInvoiceId"});
  GL_JobInvoice.belongsTo(GL_Invoices, { foreignKey: "GLInvoiceId"});
  GL_Invoices.hasMany(GL_JobInvoice, { foreignKey: "GLInvoiceId"});
  GL_Requisition_Detail_Adj.belongsTo(GL_Invoices, { foreignKey: "InvoiceId"});
  GL_Invoices.hasMany(GL_Requisition_Detail_Adj, { foreignKey: "InvoiceId"});
  GL_RunningDetention.belongsTo(GL_Invoices, { foreignKey: "GLInvoiceId"});
  GL_Invoices.hasMany(GL_RunningDetention, { foreignKey: "GLInvoiceId"});
  GL_Invoices_Properties_History.belongsTo(GL_Invoices_History, { foreignKey: "InvoiceHistoryId"});
  GL_Invoices_History.hasMany(GL_Invoices_Properties_History, { foreignKey: "InvoiceHistoryId"});
  GL_JobBill.belongsTo(GL_JobBill, { foreignKey: "DNBillId"});
  GL_JobBill.hasMany(GL_JobBill, { foreignKey: "DNBillId"});
  GL_JobBill_Charges.belongsTo(GL_JobBill, { foreignKey: "JobBillId"});
  GL_JobBill.hasMany(GL_JobBill_Charges, { foreignKey: "JobBillId"});
  GL_JobBill_TaxInvoice.belongsTo(GL_JobBill, { foreignKey: "JobBillId"});
  GL_JobBill.hasMany(GL_JobBill_TaxInvoice, { foreignKey: "JobBillId"});
  GL_JobPaymentRequisition_Detail.belongsTo(GL_JobBill, { foreignKey: "JobBillId"});
  GL_JobBill.hasMany(GL_JobPaymentRequisition_Detail, { foreignKey: "JobBillId"});
  GL_JobPayment_Detail.belongsTo(GL_JobBill, { foreignKey: "JobBillId"});
  GL_JobBill.hasMany(GL_JobPayment_Detail, { foreignKey: "JobBillId"});
  GL_JobSettlement_Detail.belongsTo(GL_JobBill, { foreignKey: "JobBillId"});
  GL_JobBill.hasMany(GL_JobSettlement_Detail, { foreignKey: "JobBillId"});
  GL_JobSettlement_Detail.belongsTo(GL_JobBill, { foreignKey: "UnSettleJobBillId"});
  GL_JobBill.hasMany(GL_JobSettlement_Detail, { foreignKey: "UnSettleJobBillId"});
  GL_ProcessLog.belongsTo(GL_JobBill, { foreignKey: "GLJobBillId"});
  GL_JobBill.hasMany(GL_ProcessLog, { foreignKey: "GLJobBillId"});
  GL_JobBill.belongsTo(GL_JobBillOpening, { foreignKey: "JobBillOpeningId"});
  GL_JobBillOpening.hasMany(GL_JobBill, { foreignKey: "JobBillOpeningId"});
  GL_JobBillOpening_Advance.belongsTo(GL_JobBillOpening, { foreignKey: "BillOpeningId"});
  GL_JobBillOpening.hasMany(GL_JobBillOpening_Advance, { foreignKey: "BillOpeningId"});
  GL_JobSettlement_Detail.belongsTo(GL_JobBillOpening_Advance, { foreignKey: "JobBillOpeningAdvId"});
  GL_JobBillOpening_Advance.hasMany(GL_JobSettlement_Detail, { foreignKey: "JobBillOpeningAdvId"});
  GL_JobBill_Charges_Cont.belongsTo(GL_JobBill_Charges, { foreignKey: "JobBillChargesId"});
  GL_JobBill_Charges.hasMany(GL_JobBill_Charges_Cont, { foreignKey: "JobBillChargesId"});
  GL_JobBill_Charges_Tax.belongsTo(GL_JobBill_Charges, { foreignKey: "JobBillChargesId"});
  GL_JobBill_Charges.hasMany(GL_JobBill_Charges_Tax, { foreignKey: "JobBillChargesId"});
  GL_JobBill_History_Charges.belongsTo(GL_JobBill_History, { foreignKey: "JobBillHistoryId"});
  GL_JobBill_History.hasMany(GL_JobBill_History_Charges, { foreignKey: "JobBillHistoryId"});
  GL_JobDirectExpRev_Charges.belongsTo(GL_JobDirectExpRev, { foreignKey: "JobDirectId"});
  GL_JobDirectExpRev.hasMany(GL_JobDirectExpRev_Charges, { foreignKey: "JobDirectId"});
  GL_ProcessLog.belongsTo(GL_JobDirectExpRev, { foreignKey: "GLJobDirectId"});
  GL_JobDirectExpRev.hasMany(GL_ProcessLog, { foreignKey: "GLJobDirectId"});
  GL_JobDirectExpRev_Charges_Tax.belongsTo(GL_JobDirectExpRev_Charges, { foreignKey: "JobDirectChargesId"});
  GL_JobDirectExpRev_Charges.hasMany(GL_JobDirectExpRev_Charges_Tax, { foreignKey: "JobDirectChargesId"});
  GL_JobDirectExpRev_History_Charges.belongsTo(GL_JobDirectExpRev_History, { foreignKey: "JobDirectHistoryId"});
  GL_JobDirectExpRev_History.hasMany(GL_JobDirectExpRev_History_Charges, { foreignKey: "JobDirectHistoryId"});
  GL_JobInvoice.belongsTo(GL_JobInvoice, { foreignKey: "CNInvoiceId"});
  GL_JobInvoice.hasMany(GL_JobInvoice, { foreignKey: "CNInvoiceId"});
  GL_JobInvoiceDispute.belongsTo(GL_JobInvoice, { foreignKey: "JobInvoiceId"});
  GL_JobInvoice.hasMany(GL_JobInvoiceDispute, { foreignKey: "JobInvoiceId"});
  GL_JobInvoice_Charges.belongsTo(GL_JobInvoice, { foreignKey: "JobInvoiceId"});
  GL_JobInvoice.hasMany(GL_JobInvoice_Charges, { foreignKey: "JobInvoiceId"});
  GL_JobInvoice_Charges_Cont_DaysBreakup.belongsTo(GL_JobInvoice, { foreignKey: "JobInvoiceId"});
  GL_JobInvoice.hasMany(GL_JobInvoice_Charges_Cont_DaysBreakup, { foreignKey: "JobInvoiceId"});
  GL_JobInvoice_PaidByClient.belongsTo(GL_JobInvoice, { foreignKey: "JobInvoiceId"});
  GL_JobInvoice.hasMany(GL_JobInvoice_PaidByClient, { foreignKey: "JobInvoiceId"});
  GL_JobInvoice_TaxInvoice.belongsTo(GL_JobInvoice, { foreignKey: "JobInvoiceId"});
  GL_JobInvoice.hasMany(GL_JobInvoice_TaxInvoice, { foreignKey: "JobInvoiceId"});
  GL_JobOnlineReceipt_Detail.belongsTo(GL_JobInvoice, { foreignKey: "JobInvoiceId"});
  GL_JobInvoice.hasMany(GL_JobOnlineReceipt_Detail, { foreignKey: "JobInvoiceId"});
  GL_JobReceipt_Detail.belongsTo(GL_JobInvoice, { foreignKey: "JobInvoiceId"});
  GL_JobInvoice.hasMany(GL_JobReceipt_Detail, { foreignKey: "JobInvoiceId"});
  GL_JobSettlement_Detail.belongsTo(GL_JobInvoice, { foreignKey: "JobInvoiceId"});
  GL_JobInvoice.hasMany(GL_JobSettlement_Detail, { foreignKey: "JobInvoiceId"});
  GL_JobSettlement_Detail.belongsTo(GL_JobInvoice, { foreignKey: "UnSettleJobInvId"});
  GL_JobInvoice.hasMany(GL_JobSettlement_Detail, { foreignKey: "UnSettleJobInvId"});
  GL_ProcessLog.belongsTo(GL_JobInvoice, { foreignKey: "GLJobInvoiceId"});
  GL_JobInvoice.hasMany(GL_ProcessLog, { foreignKey: "GLJobInvoiceId"});
  Gen_Document.belongsTo(GL_JobInvoice, { foreignKey: "JobInvoiceId"});
  GL_JobInvoice.hasMany(Gen_Document, { foreignKey: "JobInvoiceId"});
  Gen_Signatures.belongsTo(GL_JobInvoice, { foreignKey: "JobInvoiceId"});
  GL_JobInvoice.hasMany(Gen_Signatures, { foreignKey: "JobInvoiceId"});
  Simp_EqpInvOtherChgs.belongsTo(GL_JobInvoice, { foreignKey: "EqpInvId"});
  GL_JobInvoice.hasMany(Simp_EqpInvOtherChgs, { foreignKey: "EqpInvId"});
  GL_JobInvoice.belongsTo(GL_JobInvoiceOpening, { foreignKey: "JobInvOpeningId"});
  GL_JobInvoiceOpening.hasMany(GL_JobInvoice, { foreignKey: "JobInvOpeningId"});
  GL_JobInvoiceOpening_Advance.belongsTo(GL_JobInvoiceOpening, { foreignKey: "InvOpeningId"});
  GL_JobInvoiceOpening.hasMany(GL_JobInvoiceOpening_Advance, { foreignKey: "InvOpeningId"});
  GL_JobSettlement_Detail.belongsTo(GL_JobInvoiceOpening_Advance, { foreignKey: "JobInvOpeningAdvId"});
  GL_JobInvoiceOpening_Advance.hasMany(GL_JobSettlement_Detail, { foreignKey: "JobInvOpeningAdvId"});
  GL_JobInvoice_Charges_Cont.belongsTo(GL_JobInvoice_Charges, { foreignKey: "JobInvoiceChargesId"});
  GL_JobInvoice_Charges.hasMany(GL_JobInvoice_Charges_Cont, { foreignKey: "JobInvoiceChargesId"});
  GL_JobInvoice_Charges_Cont_DaysBreakup.belongsTo(GL_JobInvoice_Charges, { foreignKey: "JobInvoiceChargesId"});
  GL_JobInvoice_Charges.hasMany(GL_JobInvoice_Charges_Cont_DaysBreakup, { foreignKey: "JobInvoiceChargesId"});
  GL_JobInvoice_Charges_Tax.belongsTo(GL_JobInvoice_Charges, { foreignKey: "JobInvoiceChargesId"});
  GL_JobInvoice_Charges.hasMany(GL_JobInvoice_Charges_Tax, { foreignKey: "JobInvoiceChargesId"});
  GL_JobInvoice_Charges_Cont_DaysBreakup.belongsTo(GL_JobInvoice_Charges_Cont, { foreignKey: "JobInvoiceChargesContId"});
  GL_JobInvoice_Charges_Cont.hasMany(GL_JobInvoice_Charges_Cont_DaysBreakup, { foreignKey: "JobInvoiceChargesContId"});
  GL_JobInvoice_History_Charges.belongsTo(GL_JobInvoice_History, { foreignKey: "JobInvoiceHistoryId"});
  GL_JobInvoice_History.hasMany(GL_JobInvoice_History_Charges, { foreignKey: "JobInvoiceHistoryId"});
  GL_JobOnlineReceipt_Detail.belongsTo(GL_JobOnlineReceipt, { foreignKey: "ReceiptId"});
  GL_JobOnlineReceipt.hasMany(GL_JobOnlineReceipt_Detail, { foreignKey: "ReceiptId"});
  GL_JobReceipt.belongsTo(GL_JobOnlineReceipt, { foreignKey: "OnlineReceiptId"});
  GL_JobOnlineReceipt.hasMany(GL_JobReceipt, { foreignKey: "OnlineReceiptId"});
  GL_JobPayment.belongsTo(GL_JobPayment, { foreignKey: "ReversalId"});
  GL_JobPayment.hasMany(GL_JobPayment, { foreignKey: "ReversalId"});
  GL_JobPayment_Detail.belongsTo(GL_JobPayment, { foreignKey: "JobPaymentId"});
  GL_JobPayment.hasMany(GL_JobPayment_Detail, { foreignKey: "JobPaymentId"});
  GL_JobSettlement_Detail.belongsTo(GL_JobPayment, { foreignKey: "JobPaymentId"});
  GL_JobPayment.hasMany(GL_JobSettlement_Detail, { foreignKey: "JobPaymentId"});
  GL_ProcessLog.belongsTo(GL_JobPayment, { foreignKey: "GLJobPaymentId"});
  GL_JobPayment.hasMany(GL_ProcessLog, { foreignKey: "GLJobPaymentId"});
  GL_JobPayment.belongsTo(GL_JobPaymentRequisition, { foreignKey: "JobPaymentRequId"});
  GL_JobPaymentRequisition.hasMany(GL_JobPayment, { foreignKey: "JobPaymentRequId"});
  GL_JobPaymentRequisition_Detail.belongsTo(GL_JobPaymentRequisition, { foreignKey: "JobPaymentRequId"});
  GL_JobPaymentRequisition.hasMany(GL_JobPaymentRequisition_Detail, { foreignKey: "JobPaymentRequId"});
  GL_JobPayment_History_Detail.belongsTo(GL_JobPayment_History, { foreignKey: "JobPaymentHistoryId"});
  GL_JobPayment_History.hasMany(GL_JobPayment_History_Detail, { foreignKey: "JobPaymentHistoryId"});
  GL_JobReceipt.belongsTo(GL_JobReceipt, { foreignKey: "ReversalId"});
  GL_JobReceipt.hasMany(GL_JobReceipt, { foreignKey: "ReversalId"});
  GL_JobReceipt_Detail.belongsTo(GL_JobReceipt, { foreignKey: "JobReceiptId"});
  GL_JobReceipt.hasMany(GL_JobReceipt_Detail, { foreignKey: "JobReceiptId"});
  GL_JobSettlement.belongsTo(GL_JobReceipt, { foreignKey: "ReversalId"});
  GL_JobReceipt.hasMany(GL_JobSettlement, { foreignKey: "ReversalId"});
  GL_JobSettlement_Detail.belongsTo(GL_JobReceipt, { foreignKey: "JobReceiptId"});
  GL_JobReceipt.hasMany(GL_JobSettlement_Detail, { foreignKey: "JobReceiptId"});
  GL_ProcessLog.belongsTo(GL_JobReceipt, { foreignKey: "GLJobReceiptId"});
  GL_JobReceipt.hasMany(GL_ProcessLog, { foreignKey: "GLJobReceiptId"});
  Gen_Document.belongsTo(GL_JobReceipt, { foreignKey: "JobReceiptId"});
  GL_JobReceipt.hasMany(Gen_Document, { foreignKey: "JobReceiptId"});
  GL_JobSecurityTran.belongsTo(GL_JobReceipt_Detail, { foreignKey: "ReceiptDetailId"});
  GL_JobReceipt_Detail.hasMany(GL_JobSecurityTran, { foreignKey: "ReceiptDetailId"});
  GL_JobReceipt_History_Detail.belongsTo(GL_JobReceipt_History, { foreignKey: "JobReceiptHistoryId"});
  GL_JobReceipt_History.hasMany(GL_JobReceipt_History_Detail, { foreignKey: "JobReceiptHistoryId"});
  GL_JobSecurityRefundRequisition.belongsTo(GL_JobSecurity, { foreignKey: "JobSecurityId"});
  GL_JobSecurity.hasMany(GL_JobSecurityRefundRequisition, { foreignKey: "JobSecurityId"});
  GL_JobSecurityTran.belongsTo(GL_JobSecurity, { foreignKey: "JobSecurityId"});
  GL_JobSecurity.hasMany(GL_JobSecurityTran, { foreignKey: "JobSecurityId"});
  GL_JobSecurityTranHistory.belongsTo(GL_JobSecurity, { foreignKey: "JobSecurityId"});
  GL_JobSecurity.hasMany(GL_JobSecurityTranHistory, { foreignKey: "JobSecurityId"});
  GL_JobSecurityTran.belongsTo(GL_JobSecurityRefundRequisition, { foreignKey: "RefundRequisitionId"});
  GL_JobSecurityRefundRequisition.hasMany(GL_JobSecurityTran, { foreignKey: "RefundRequisitionId"});
  GL_JobSecurityTranHistory.belongsTo(GL_JobSecurityTran, { foreignKey: "JobSecurityTranId"});
  GL_JobSecurityTran.hasMany(GL_JobSecurityTranHistory, { foreignKey: "JobSecurityTranId"});
  GL_ProcessLog.belongsTo(GL_JobSecurityTranHistory, { foreignKey: "GLJobSecurityTranHistoryId"});
  GL_JobSecurityTranHistory.hasMany(GL_ProcessLog, { foreignKey: "GLJobSecurityTranHistoryId"});
  GL_JobSettlement_Detail.belongsTo(GL_JobSettlement, { foreignKey: "JobSettlementId"});
  GL_JobSettlement.hasMany(GL_JobSettlement_Detail, { foreignKey: "JobSettlementId"});
  GL_ProcessLog.belongsTo(GL_JobSettlement, { foreignKey: "GLJobSettlementId"});
  GL_JobSettlement.hasMany(GL_ProcessLog, { foreignKey: "GLJobSettlementId"});
  Gen_SequenceSWC.belongsTo(GL_Periods, { foreignKey: "PeriodId"});
  GL_Periods.hasMany(Gen_SequenceSWC, { foreignKey: "PeriodId"});
  GL_PrincipalManualSOA_Charges_Cont.belongsTo(GL_PrincipalManualSOA_Charges, { foreignKey: "PrincipalManualSOAChargesId"});
  GL_PrincipalManualSOA_Charges.hasMany(GL_PrincipalManualSOA_Charges_Cont, { foreignKey: "PrincipalManualSOAChargesId"});
  GL_PrincipalManualSOA_Charges_Tax.belongsTo(GL_PrincipalManualSOA_Charges, { foreignKey: "PrincipalManualSOAChargesId"});
  GL_PrincipalManualSOA_Charges.hasMany(GL_PrincipalManualSOA_Charges_Tax, { foreignKey: "PrincipalManualSOAChargesId"});
  GL_PrincipleInvoice_Charges.belongsTo(GL_PrincipalManualSOA_Charges, { foreignKey: "PrincipalManualSOAChargesId"});
  GL_PrincipalManualSOA_Charges.hasMany(GL_PrincipleInvoice_Charges, { foreignKey: "PrincipalManualSOAChargesId"});
  GL_PrincipalReceiptPayment.belongsTo(GL_PrincipalReceiptPayment, { foreignKey: "ReversalId"});
  GL_PrincipalReceiptPayment.hasMany(GL_PrincipalReceiptPayment, { foreignKey: "ReversalId"});
  GL_PrincipalReceiptPayment_Detail.belongsTo(GL_PrincipalReceiptPayment, { foreignKey: "PrincipalReceiptPaymentId"});
  GL_PrincipalReceiptPayment.hasMany(GL_PrincipalReceiptPayment_Detail, { foreignKey: "PrincipalReceiptPaymentId"});
  GL_ProcessLog.belongsTo(GL_PrincipalReceiptPayment, { foreignKey: "GLPrincipalReceiptPaymentId"});
  GL_PrincipalReceiptPayment.hasMany(GL_ProcessLog, { foreignKey: "GLPrincipalReceiptPaymentId"});
  GL_PrincipalReceiptPayment_Detail.belongsTo(GL_PrincipleInvoice, { foreignKey: "PrincipalInvoiceId"});
  GL_PrincipleInvoice.hasMany(GL_PrincipalReceiptPayment_Detail, { foreignKey: "PrincipalInvoiceId"});
  GL_PrincipleInvoice_Charges.belongsTo(GL_PrincipleInvoice, { foreignKey: "PrincipleInvoiceId"});
  GL_PrincipleInvoice.hasMany(GL_PrincipleInvoice_Charges, { foreignKey: "PrincipleInvoiceId"});
  GL_PrincipleInvoice_TaxInvoice.belongsTo(GL_PrincipleInvoice, { foreignKey: "PrincipleInvoiceId"});
  GL_PrincipleInvoice.hasMany(GL_PrincipleInvoice_TaxInvoice, { foreignKey: "PrincipleInvoiceId"});
  GL_ProcessLog.belongsTo(GL_PrincipleInvoice, { foreignKey: "GLPrincipleInvoiceId"});
  GL_PrincipleInvoice.hasMany(GL_ProcessLog, { foreignKey: "GLPrincipleInvoiceId"});
  GL_PrincipleInvoice_Charges_Cont.belongsTo(GL_PrincipleInvoice_Charges, { foreignKey: "PrincipleInvoiceChargesId"});
  GL_PrincipleInvoice_Charges.hasMany(GL_PrincipleInvoice_Charges_Cont, { foreignKey: "PrincipleInvoiceChargesId"});
  GL_PrincipleInvoice_Charges_Tax.belongsTo(GL_PrincipleInvoice_Charges, { foreignKey: "PrincipleInvoiceChargesId"});
  GL_PrincipleInvoice_Charges.hasMany(GL_PrincipleInvoice_Charges_Tax, { foreignKey: "PrincipleInvoiceChargesId"});
  GL_COA_PropertyRule.belongsTo(GL_Properties, { foreignKey: "PropertyId"});
  GL_Properties.hasMany(GL_COA_PropertyRule, { foreignKey: "PropertyId"});
  GL_ChequeOpening_Properties.belongsTo(GL_Properties, { foreignKey: "PropertyId"});
  GL_Properties.hasMany(GL_ChequeOpening_Properties, { foreignKey: "PropertyId"});
  GL_ChequeOpening_VDProperties.belongsTo(GL_Properties, { foreignKey: "PropertyId"});
  GL_Properties.hasMany(GL_ChequeOpening_VDProperties, { foreignKey: "PropertyId"});
  GL_Invoices_Properties.belongsTo(GL_Properties, { foreignKey: "PropertyId"});
  GL_Properties.hasMany(GL_Invoices_Properties, { foreignKey: "PropertyId"});
  GL_Invoices_Properties_History.belongsTo(GL_Properties, { foreignKey: "PropertyId"});
  GL_Properties.hasMany(GL_Invoices_Properties_History, { foreignKey: "PropertyId"});
  GL_PropertiesLOV.belongsTo(GL_Properties, { foreignKey: "GLPropertyId"});
  GL_Properties.hasMany(GL_PropertiesLOV, { foreignKey: "GLPropertyId"});
  GL_Properties_Usage.belongsTo(GL_Properties, { foreignKey: "GLPropertyId"});
  GL_Properties.hasMany(GL_Properties_Usage, { foreignKey: "GLPropertyId"});
  GL_Voucher_Detail_Properties.belongsTo(GL_Properties, { foreignKey: "PropertyId"});
  GL_Properties.hasMany(GL_Voucher_Detail_Properties, { foreignKey: "PropertyId"});
  GL_Voucher_Detail_Properties_History.belongsTo(GL_Properties, { foreignKey: "PropertyId"});
  GL_Properties.hasMany(GL_Voucher_Detail_Properties_History, { foreignKey: "PropertyId"});
  GL_Voucher_Detail_Properties_Mem.belongsTo(GL_Properties, { foreignKey: "PropertyId"});
  GL_Properties.hasMany(GL_Voucher_Detail_Properties_Mem, { foreignKey: "PropertyId"});
  GL_Voucher_Properties.belongsTo(GL_Properties, { foreignKey: "PropertyId"});
  GL_Properties.hasMany(GL_Voucher_Properties, { foreignKey: "PropertyId"});
  GL_Voucher_Properties_History.belongsTo(GL_Properties, { foreignKey: "PropertyId"});
  GL_Properties.hasMany(GL_Voucher_Properties_History, { foreignKey: "PropertyId"});
  GL_Voucher_Properties_Mem.belongsTo(GL_Properties, { foreignKey: "PropertyId"});
  GL_Properties.hasMany(GL_Voucher_Properties_Mem, { foreignKey: "PropertyId"});
  AExp_AirExportJob.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(AExp_AirExportJob, { foreignKey: "CostCenterId"});
  AImp_AirImportJob.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(AImp_AirImportJob, { foreignKey: "CostCenterId"});
  AImp_ManifestHeader.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(AImp_ManifestHeader, { foreignKey: "CostCenterId"});
  CEAS_User.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(CEAS_User, { foreignKey: "CostCenterId"});
  CEAS_User_CostCenterRight.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(CEAS_User_CostCenterRight, { foreignKey: "CostCenterId"});
  CashDenominationRecording.belongsTo(GL_PropertiesLOV, { foreignKey: "BranchId"});
  GL_PropertiesLOV.hasMany(CashDenominationRecording, { foreignKey: "BranchId"});
  DEPO_ContainerActivity.belongsTo(GL_PropertiesLOV, { foreignKey: "CCenterId"});
  GL_PropertiesLOV.hasMany(DEPO_ContainerActivity, { foreignKey: "CCenterId"});
  DEPO_ContainerActivityDetailHistory.belongsTo(GL_PropertiesLOV, { foreignKey: "DCostCenterId"});
  GL_PropertiesLOV.hasMany(DEPO_ContainerActivityDetailHistory, { foreignKey: "DCostCenterId"});
  DEPO_LinesTariff.belongsTo(GL_PropertiesLOV, { foreignKey: "CCenterId"});
  GL_PropertiesLOV.hasMany(DEPO_LinesTariff, { foreignKey: "CCenterId"});
  DEPO_Location.belongsTo(GL_PropertiesLOV, { foreignKey: "CCenterId"});
  GL_PropertiesLOV.hasMany(DEPO_Location, { foreignKey: "CCenterId"});
  DEPO_Receipt.belongsTo(GL_PropertiesLOV, { foreignKey: "CCenterId"});
  GL_PropertiesLOV.hasMany(DEPO_Receipt, { foreignKey: "CCenterId"});
  DEPO_StackingArea.belongsTo(GL_PropertiesLOV, { foreignKey: "CCenterId"});
  GL_PropertiesLOV.hasMany(DEPO_StackingArea, { foreignKey: "CCenterId"});
  GL_AccountBalances.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_AccountBalances, { foreignKey: "CostCenterId"});
  GL_AgentInvoice.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_AgentInvoice, { foreignKey: "CostCenterId"});
  GL_AgentPaymentRequisition.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_AgentPaymentRequisition, { foreignKey: "CostCenterId"});
  GL_AgentReceiptPayment.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_AgentReceiptPayment, { foreignKey: "CostCenterId"});
  GL_BalanceCIH.belongsTo(GL_PropertiesLOV, { foreignKey: "DrawnBankId"});
  GL_PropertiesLOV.hasMany(GL_BalanceCIH, { foreignKey: "DrawnBankId"});
  GL_BalanceCIH.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_BalanceCIH, { foreignKey: "CostCenterId"});
  GL_Budget_Detail.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_Budget_Detail, { foreignKey: "CostCenterId"});
  GL_CCGroup_CostCenter.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_CCGroup_CostCenter, { foreignKey: "CostCenterId"});
  GL_ChequeOpening.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_ChequeOpening, { foreignKey: "CostCenterId"});
  GL_ChequeOpening_Properties.belongsTo(GL_PropertiesLOV, { foreignKey: "PropertyValueId"});
  GL_PropertiesLOV.hasMany(GL_ChequeOpening_Properties, { foreignKey: "PropertyValueId"});
  GL_ChequeOpening_VDProperties.belongsTo(GL_PropertiesLOV, { foreignKey: "PropertyValueId"});
  GL_PropertiesLOV.hasMany(GL_ChequeOpening_VDProperties, { foreignKey: "PropertyValueId"});
  GL_Invoices_Properties.belongsTo(GL_PropertiesLOV, { foreignKey: "PropertyValueId"});
  GL_PropertiesLOV.hasMany(GL_Invoices_Properties, { foreignKey: "PropertyValueId"});
  GL_Invoices_Properties_History.belongsTo(GL_PropertiesLOV, { foreignKey: "PropertyValueId"});
  GL_PropertiesLOV.hasMany(GL_Invoices_Properties_History, { foreignKey: "PropertyValueId"});
  GL_JobBill.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_JobBill, { foreignKey: "CostCenterId"});
  GL_JobBillOpening_Advance.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_JobBillOpening_Advance, { foreignKey: "CostCenterId"});
  GL_JobDirectExpRev.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_JobDirectExpRev, { foreignKey: "CostCenterId"});
  GL_JobInvoice.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_JobInvoice, { foreignKey: "CostCenterId"});
  GL_JobInvoiceOpening_Advance.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_JobInvoiceOpening_Advance, { foreignKey: "CostCenterId"});
  GL_JobPayment.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_JobPayment, { foreignKey: "CostCenterId"});
  GL_JobPaymentRequisition.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_JobPaymentRequisition, { foreignKey: "CostCenterId"});
  GL_JobReceipt.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_JobReceipt, { foreignKey: "CostCenterId"});
  GL_JobSettlement.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_JobSettlement, { foreignKey: "CostCenterId"});
  GL_PrincipalManualSOA.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_PrincipalManualSOA, { foreignKey: "CostCenterId"});
  GL_PrincipalReceiptPayment.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_PrincipalReceiptPayment, { foreignKey: "CostCenterId"});
  GL_Requisition.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_Requisition, { foreignKey: "CostCenterId"});
  GL_Requisition_Detail.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_Requisition_Detail, { foreignKey: "CostCenterId"});
  GL_RunningDetention.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_RunningDetention, { foreignKey: "CostCenterId"});
  GL_Voucher_Detail.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_Voucher_Detail, { foreignKey: "CostCenterId"});
  GL_Voucher_Detail_ChequeInfo.belongsTo(GL_PropertiesLOV, { foreignKey: "DrawnBankId"});
  GL_PropertiesLOV.hasMany(GL_Voucher_Detail_ChequeInfo, { foreignKey: "DrawnBankId"});
  GL_Voucher_Detail_History.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_Voucher_Detail_History, { foreignKey: "CostCenterId"});
  GL_Voucher_Detail_Mem.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_Voucher_Detail_Mem, { foreignKey: "CostCenterId"});
  GL_Voucher_Detail_Properties.belongsTo(GL_PropertiesLOV, { foreignKey: "PropertyValueId"});
  GL_PropertiesLOV.hasMany(GL_Voucher_Detail_Properties, { foreignKey: "PropertyValueId"});
  GL_Voucher_Detail_Properties_History.belongsTo(GL_PropertiesLOV, { foreignKey: "PropertyValueId"});
  GL_PropertiesLOV.hasMany(GL_Voucher_Detail_Properties_History, { foreignKey: "PropertyValueId"});
  GL_Voucher_Detail_Properties_Mem.belongsTo(GL_PropertiesLOV, { foreignKey: "PropertyValueId"});
  GL_PropertiesLOV.hasMany(GL_Voucher_Detail_Properties_Mem, { foreignKey: "PropertyValueId"});
  GL_Voucher_Properties.belongsTo(GL_PropertiesLOV, { foreignKey: "PropertyValueId"});
  GL_PropertiesLOV.hasMany(GL_Voucher_Properties, { foreignKey: "PropertyValueId"});
  GL_Voucher_Properties_History.belongsTo(GL_PropertiesLOV, { foreignKey: "PropertyValueId"});
  GL_PropertiesLOV.hasMany(GL_Voucher_Properties_History, { foreignKey: "PropertyValueId"});
  GL_Voucher_Properties_Mem.belongsTo(GL_PropertiesLOV, { foreignKey: "PropertyValueId"});
  GL_PropertiesLOV.hasMany(GL_Voucher_Properties_Mem, { foreignKey: "PropertyValueId"});
  GL_WTHDeposit.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(GL_WTHDeposit, { foreignKey: "CostCenterId"});
  Gen_CC_RptSetup.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(Gen_CC_RptSetup, { foreignKey: "CostCenterId"});
  Gen_EDIProcessed.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(Gen_EDIProcessed, { foreignKey: "CostCenterId"});
  Gen_ManifestHeader.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(Gen_ManifestHeader, { foreignKey: "CostCenterId"});
  Gen_Parties_CostCenterRight.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(Gen_Parties_CostCenterRight, { foreignKey: "CostCenterId"});
  Gen_Quotation.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(Gen_Quotation, { foreignKey: "CostCenterId"});
  Gen_ReportFilter.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(Gen_ReportFilter, { foreignKey: "CostCenterId"});
  Gen_ReportFilter.belongsTo(GL_PropertiesLOV, { foreignKey: "DepartmentId"});
  GL_PropertiesLOV.hasMany(Gen_ReportFilter, { foreignKey: "DepartmentId"});
  Gen_ReportFilter.belongsTo(GL_PropertiesLOV, { foreignKey: "LocationId"});
  GL_PropertiesLOV.hasMany(Gen_ReportFilter, { foreignKey: "LocationId"});
  Gen_ReportFilter.belongsTo(GL_PropertiesLOV, { foreignKey: "Projectid"});
  GL_PropertiesLOV.hasMany(Gen_ReportFilter, { foreignKey: "Projectid"});
  Gen_SequenceSWC.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(Gen_SequenceSWC, { foreignKey: "CostCenterId"});
  Gen_TaxAuthority.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(Gen_TaxAuthority, { foreignKey: "CostCenterId"});
  Gen_TaxAuthorityGroup.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(Gen_TaxAuthorityGroup, { foreignKey: "CostCenterId"});
  Log_Job.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(Log_Job, { foreignKey: "CostCenterId"});
  SExp_BookingRequest.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(SExp_BookingRequest, { foreignKey: "CostCenterId"});
  SExp_LoadingProgram.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(SExp_LoadingProgram, { foreignKey: "CostCenterId"});
  SExp_SeaExportJob.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(SExp_SeaExportJob, { foreignKey: "CostCenterId"});
  SExp_ShippingInstruction.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(SExp_ShippingInstruction, { foreignKey: "CostCenterId"});
  SImp_SeaImportJob.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(SImp_SeaImportJob, { foreignKey: "CostCenterId"});
  TAP_Employee.belongsTo(GL_PropertiesLOV, { foreignKey: "LocationId"});
  GL_PropertiesLOV.hasMany(TAP_Employee, { foreignKey: "LocationId"});
  TAP_Employee.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(TAP_Employee, { foreignKey: "CostCenterId"});
  TAP_Employee.belongsTo(GL_PropertiesLOV, { foreignKey: "DepartmentId"});
  GL_PropertiesLOV.hasMany(TAP_Employee, { foreignKey: "DepartmentId"});
  TAP_Salaries.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(TAP_Salaries, { foreignKey: "CostCenterId"});
  TAP_SalaryAdvance.belongsTo(GL_PropertiesLOV, { foreignKey: "CostCenterId"});
  GL_PropertiesLOV.hasMany(TAP_SalaryAdvance, { foreignKey: "CostCenterId"});
  GL_ReconciledData_Detail.belongsTo(GL_ReconciledData, { foreignKey: "Id"});
  GL_ReconciledData.hasOne(GL_ReconciledData_Detail, { foreignKey: "Id"});
  GL_Requisition_Detail.belongsTo(GL_Requisition, { foreignKey: "ReqId"});
  GL_Requisition.hasMany(GL_Requisition_Detail, { foreignKey: "ReqId"});
  GL_Voucher.belongsTo(GL_Requisition, { foreignKey: "ReqId"});
  GL_Requisition.hasMany(GL_Voucher, { foreignKey: "ReqId"});
  GL_Requisition_Detail_Adj.belongsTo(GL_Requisition_Detail, { foreignKey: "ReqDetId"});
  GL_Requisition_Detail.hasMany(GL_Requisition_Detail_Adj, { foreignKey: "ReqDetId"});
  GL_Requisition_Detail_SetAdj.belongsTo(GL_Requisition_Detail, { foreignKey: "ReqDetId"});
  GL_Requisition_Detail.hasMany(GL_Requisition_Detail_SetAdj, { foreignKey: "ReqDetId"});
  GL_JobReceipt_Detail.belongsTo(GL_RunningDetention, { foreignKey: "RunningDetentionId"});
  GL_RunningDetention.hasMany(GL_JobReceipt_Detail, { foreignKey: "RunningDetentionId"});
  GL_ProcessLog.belongsTo(GL_RunningDetention, { foreignKey: "GLRunningDetentionId"});
  GL_RunningDetention.hasMany(GL_ProcessLog, { foreignKey: "GLRunningDetentionId"});
  GL_RunningDetention.belongsTo(GL_RunningDetention, { foreignKey: "CNInvoiceId"});
  GL_RunningDetention.hasMany(GL_RunningDetention, { foreignKey: "CNInvoiceId"});
  GL_RunningDetention_Charges.belongsTo(GL_RunningDetention, { foreignKey: "RunningDetentionId"});
  GL_RunningDetention.hasMany(GL_RunningDetention_Charges, { foreignKey: "RunningDetentionId"});
  GL_RunningDetention_Charges_Cont_DaysBreakup.belongsTo(GL_RunningDetention, { foreignKey: "RunningDetentionId"});
  GL_RunningDetention.hasMany(GL_RunningDetention_Charges_Cont_DaysBreakup, { foreignKey: "RunningDetentionId"});
  GL_RunningDetention_Charges_Cont.belongsTo(GL_RunningDetention_Charges, { foreignKey: "RunningDetentionChargesId"});
  GL_RunningDetention_Charges.hasMany(GL_RunningDetention_Charges_Cont, { foreignKey: "RunningDetentionChargesId"});
  GL_RunningDetention_Charges_Cont_DaysBreakup.belongsTo(GL_RunningDetention_Charges, { foreignKey: "RunningDetentionChargesId"});
  GL_RunningDetention_Charges.hasMany(GL_RunningDetention_Charges_Cont_DaysBreakup, { foreignKey: "RunningDetentionChargesId"});
  GL_JobInvoice_Charges_Cont.belongsTo(GL_RunningDetention_Charges_Cont, { foreignKey: "RunningDetentionContId"});
  GL_RunningDetention_Charges_Cont.hasMany(GL_JobInvoice_Charges_Cont, { foreignKey: "RunningDetentionContId"});
  GL_RunningDetention_Charges_Cont.belongsTo(GL_RunningDetention_Charges_Cont, { foreignKey: "ContMasterEntryReferenceId"});
  GL_RunningDetention_Charges_Cont.hasMany(GL_RunningDetention_Charges_Cont, { foreignKey: "ContMasterEntryReferenceId"});
  GL_RunningDetention_Charges_Cont_DaysBreakup.belongsTo(GL_RunningDetention_Charges_Cont, { foreignKey: "RunningDetentionChargesContId"});
  GL_RunningDetention_Charges_Cont.hasMany(GL_RunningDetention_Charges_Cont_DaysBreakup, { foreignKey: "RunningDetentionChargesContId"});
  GL_JobBillOpening_Advance.belongsTo(GL_SettlementInstrument, { foreignKey: "SettlementInsId"});
  GL_SettlementInstrument.hasMany(GL_JobBillOpening_Advance, { foreignKey: "SettlementInsId"});
  GL_JobInvoiceOpening_Advance.belongsTo(GL_SettlementInstrument, { foreignKey: "SettlementInsId"});
  GL_SettlementInstrument.hasMany(GL_JobInvoiceOpening_Advance, { foreignKey: "SettlementInsId"});
  GL_JobSettlement_Detail.belongsTo(GL_SettlementInstrument, { foreignKey: "JobPaymentSInsId"});
  GL_SettlementInstrument.hasMany(GL_JobSettlement_Detail, { foreignKey: "JobPaymentSInsId"});
  GL_JobSettlement_Detail.belongsTo(GL_SettlementInstrument, { foreignKey: "JobReceiptSInsId"});
  GL_SettlementInstrument.hasMany(GL_JobSettlement_Detail, { foreignKey: "JobReceiptSInsId"});
  GL_Requisition_Detail_SetAdj.belongsTo(GL_SettlementInstrument, { foreignKey: "SetId"});
  GL_SettlementInstrument.hasMany(GL_Requisition_Detail_SetAdj, { foreignKey: "SetId"});
  GL_SInsAdjustments.belongsTo(GL_SettlementInstrument, { foreignKey: "SInsId"});
  GL_SettlementInstrument.hasMany(GL_SInsAdjustments, { foreignKey: "SInsId"});
  GL_SettlementBalance.belongsTo(GL_SettlementInstrument, { foreignKey: "SInsId"});
  GL_SettlementInstrument.hasMany(GL_SettlementBalance, { foreignKey: "SInsId"});
  GL_TerminalInvoice_Detail.belongsTo(GL_TerminalInvoice, { foreignKey: "TerminalInvoiceId"});
  GL_TerminalInvoice.hasMany(GL_TerminalInvoice_Detail, { foreignKey: "TerminalInvoiceId"});
  SExp_SeaExportJob_ChargesPayb.belongsTo(GL_TerminalInvoice_Detail, { foreignKey: "GlTerminalInvoiceDetailId"});
  GL_TerminalInvoice_Detail.hasMany(SExp_SeaExportJob_ChargesPayb, { foreignKey: "GlTerminalInvoiceDetailId"});
  SExp_SeaExportJob_ChargesRecv.belongsTo(GL_TerminalInvoice_Detail, { foreignKey: "GlTerminalInvoiceDetailId"});
  GL_TerminalInvoice_Detail.hasMany(SExp_SeaExportJob_ChargesRecv, { foreignKey: "GlTerminalInvoiceDetailId"});
  SImp_SeaImportJob_ChargesPayb.belongsTo(GL_TerminalInvoice_Detail, { foreignKey: "GlTerminalInvoiceDetailId"});
  GL_TerminalInvoice_Detail.hasMany(SImp_SeaImportJob_ChargesPayb, { foreignKey: "GlTerminalInvoiceDetailId"});
  SImp_SeaImportJob_ChargesRecv.belongsTo(GL_TerminalInvoice_Detail, { foreignKey: "GlTerminalInvoiceDetailId"});
  GL_TerminalInvoice_Detail.hasMany(SImp_SeaImportJob_ChargesRecv, { foreignKey: "GlTerminalInvoiceDetailId"});
  GL_UnAccruedEquipmentInvoice_DaysBreakup.belongsTo(GL_UnAccruedEquipmentInvoice, { foreignKey: "UnAccruedEquipmentInvoiceId"});
  GL_UnAccruedEquipmentInvoice.hasMany(GL_UnAccruedEquipmentInvoice_DaysBreakup, { foreignKey: "UnAccruedEquipmentInvoiceId"});
  AExp_AirExportJob.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(AExp_AirExportJob, { foreignKey: "VoucherId"});
  AImp_AirImportJob.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(AImp_AirImportJob, { foreignKey: "VoucherId"});
  DEPO_Receipt.belongsTo(GL_Voucher, { foreignKey: "GLVoucherId"});
  GL_Voucher.hasMany(DEPO_Receipt, { foreignKey: "GLVoucherId"});
  GL_AgentInvoice.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_AgentInvoice, { foreignKey: "VoucherId"});
  GL_AgentInvoiceOpening.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_AgentInvoiceOpening, { foreignKey: "VoucherId"});
  GL_AgentReceiptPayment.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_AgentReceiptPayment, { foreignKey: "VoucherId"});
  GL_JobBill.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_JobBill, { foreignKey: "VoucherId"});
  GL_JobBillOpening.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_JobBillOpening, { foreignKey: "VoucherId"});
  GL_JobDirectExpRev.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_JobDirectExpRev, { foreignKey: "VoucherId"});
  GL_JobInvoice.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_JobInvoice, { foreignKey: "VoucherId"});
  GL_JobInvoiceOpening.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_JobInvoiceOpening, { foreignKey: "VoucherId"});
  GL_JobPayment.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_JobPayment, { foreignKey: "VoucherId"});
  GL_JobReceipt.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_JobReceipt, { foreignKey: "VoucherId"});
  GL_JobSecurityTranHistory.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_JobSecurityTranHistory, { foreignKey: "VoucherId"});
  GL_JobSettlement.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_JobSettlement, { foreignKey: "VoucherId"});
  GL_PrincipalReceiptPayment.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_PrincipalReceiptPayment, { foreignKey: "VoucherId"});
  GL_PrincipleInvoiceOpening.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_PrincipleInvoiceOpening, { foreignKey: "VoucherId"});
  GL_ProcessLog.belongsTo(GL_Voucher, { foreignKey: "GLVoucherId"});
  GL_Voucher.hasMany(GL_ProcessLog, { foreignKey: "GLVoucherId"});
  GL_RunningDetention.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_RunningDetention, { foreignKey: "VoucherId"});
  GL_Voucher.belongsTo(GL_Voucher, { foreignKey: "ChequeReturnId"});
  GL_Voucher.hasMany(GL_Voucher, { foreignKey: "ChequeReturnId"});
  GL_Voucher_Detail.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_Voucher_Detail, { foreignKey: "VoucherId"});
  GL_Voucher_History.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_Voucher_History, { foreignKey: "VoucherId"});
  GL_Voucher_Mem.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_Voucher_Mem, { foreignKey: "VoucherId"});
  GL_Voucher_Properties.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(GL_Voucher_Properties, { foreignKey: "VoucherId"});
  Gen_SecurityFile.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(Gen_SecurityFile, { foreignKey: "VoucherId"});
  Log_Job.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(Log_Job, { foreignKey: "VoucherId"});
  SExp_SeaExportJob.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(SExp_SeaExportJob, { foreignKey: "VoucherId"});
  SImp_SeaImportJob.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(SImp_SeaImportJob, { foreignKey: "VoucherId"});
  TAP_Loan.belongsTo(GL_Voucher, { foreignKey: "VoucherId"});
  GL_Voucher.hasMany(TAP_Loan, { foreignKey: "VoucherId"});
  TAP_Salaries.belongsTo(GL_Voucher, { foreignKey: "GLVoucherId"});
  GL_Voucher.hasMany(TAP_Salaries, { foreignKey: "GLVoucherId"});
  TAP_SalaryAdvance.belongsTo(GL_Voucher, { foreignKey: "GLVoucherId"});
  GL_Voucher.hasMany(TAP_SalaryAdvance, { foreignKey: "GLVoucherId"});
  GL_Voucher.belongsTo(GL_VoucherFormType, { foreignKey: "VoucherFormId"});
  GL_VoucherFormType.hasMany(GL_Voucher, { foreignKey: "VoucherFormId"});
  GL_Voucher_History.belongsTo(GL_VoucherFormType, { foreignKey: "VoucherFormId"});
  GL_VoucherFormType.hasMany(GL_Voucher_History, { foreignKey: "VoucherFormId"});
  GL_Voucher_Mem.belongsTo(GL_VoucherFormType, { foreignKey: "VoucherFormId"});
  GL_VoucherFormType.hasMany(GL_Voucher_Mem, { foreignKey: "VoucherFormId"});
  GL_ChequeOpening.belongsTo(GL_VoucherType, { foreignKey: "VoucherTypeId"});
  GL_VoucherType.hasMany(GL_ChequeOpening, { foreignKey: "VoucherTypeId"});
  GL_Voucher.belongsTo(GL_VoucherType, { foreignKey: "VoucherTypeId"});
  GL_VoucherType.hasMany(GL_Voucher, { foreignKey: "VoucherTypeId"});
  GL_Voucher_History.belongsTo(GL_VoucherType, { foreignKey: "VoucherTypeId"});
  GL_VoucherType.hasMany(GL_Voucher_History, { foreignKey: "VoucherTypeId"});
  GL_Voucher_Mem.belongsTo(GL_VoucherType, { foreignKey: "VoucherTypeId"});
  GL_VoucherType.hasMany(GL_Voucher_Mem, { foreignKey: "VoucherTypeId"});
  GL_Properties_Usage.belongsTo(GL_VoucherUsageCode, { foreignKey: "UsageCodeId"});
  GL_VoucherUsageCode.hasMany(GL_Properties_Usage, { foreignKey: "UsageCodeId"});
  GL_ChequeBookStock_Detail.belongsTo(GL_Voucher_Detail, { foreignKey: "GVDetailId"});
  GL_Voucher_Detail.hasMany(GL_ChequeBookStock_Detail, { foreignKey: "GVDetailId"});
  GL_InvAdjustments.belongsTo(GL_Voucher_Detail, { foreignKey: "GVDetailId"});
  GL_Voucher_Detail.hasMany(GL_InvAdjustments, { foreignKey: "GVDetailId"});
  GL_Invoices.belongsTo(GL_Voucher_Detail, { foreignKey: "GVDetailId"});
  GL_Voucher_Detail.hasMany(GL_Invoices, { foreignKey: "GVDetailId"});
  GL_SInsAdjustments.belongsTo(GL_Voucher_Detail, { foreignKey: "GVDetailId"});
  GL_Voucher_Detail.hasMany(GL_SInsAdjustments, { foreignKey: "GVDetailId"});
  GL_SettlementInstrument.belongsTo(GL_Voucher_Detail, { foreignKey: "GVDetailId"});
  GL_Voucher_Detail.hasMany(GL_SettlementInstrument, { foreignKey: "GVDetailId"});
  GL_Voucher_Detail_ChequeInfo.belongsTo(GL_Voucher_Detail, { foreignKey: "GvDetId"});
  GL_Voucher_Detail.hasMany(GL_Voucher_Detail_ChequeInfo, { foreignKey: "GvDetId"});
  GL_Voucher_Detail_Mem.belongsTo(GL_Voucher_Detail, { foreignKey: "GVDetailId"});
  GL_Voucher_Detail.hasMany(GL_Voucher_Detail_Mem, { foreignKey: "GVDetailId"});
  GL_Voucher_Detail_PaymentChqInfo.belongsTo(GL_Voucher_Detail, { foreignKey: "GLVDId"});
  GL_Voucher_Detail.hasMany(GL_Voucher_Detail_PaymentChqInfo, { foreignKey: "GLVDId"});
  GL_Voucher_Detail_Properties.belongsTo(GL_Voucher_Detail, { foreignKey: "GVDetailId"});
  GL_Voucher_Detail.hasMany(GL_Voucher_Detail_Properties, { foreignKey: "GVDetailId"});
  GL_WTHDeposit_Detail.belongsTo(GL_Voucher_Detail, { foreignKey: "GLVoucherDetailId"});
  GL_Voucher_Detail.hasMany(GL_WTHDeposit_Detail, { foreignKey: "GLVoucherDetailId"});
  GL_BalanceCIH.belongsTo(GL_Voucher_Detail_ChequeInfo, { foreignKey: "GLVCDetId"});
  GL_Voucher_Detail_ChequeInfo.hasMany(GL_BalanceCIH, { foreignKey: "GLVCDetId"});
  GL_InvAdjustments_History.belongsTo(GL_Voucher_Detail_History, { foreignKey: "GVDetailHistoryId"});
  GL_Voucher_Detail_History.hasMany(GL_InvAdjustments_History, { foreignKey: "GVDetailHistoryId"});
  GL_Invoices_History.belongsTo(GL_Voucher_Detail_History, { foreignKey: "GVDetailHistoryId"});
  GL_Voucher_Detail_History.hasMany(GL_Invoices_History, { foreignKey: "GVDetailHistoryId"});
  GL_SInsAdjustments_History.belongsTo(GL_Voucher_Detail_History, { foreignKey: "GVDetailHistoryId"});
  GL_Voucher_Detail_History.hasMany(GL_SInsAdjustments_History, { foreignKey: "GVDetailHistoryId"});
  GL_SettlementInstrument_History.belongsTo(GL_Voucher_Detail_History, { foreignKey: "GVDetailHistoryId"});
  GL_Voucher_Detail_History.hasMany(GL_SettlementInstrument_History, { foreignKey: "GVDetailHistoryId"});
  GL_Voucher_Detail_Properties_History.belongsTo(GL_Voucher_Detail_History, { foreignKey: "GVDetailHistoryId"});
  GL_Voucher_Detail_History.hasMany(GL_Voucher_Detail_Properties_History, { foreignKey: "GVDetailHistoryId"});
  GL_Voucher_Detail_Properties_Mem.belongsTo(GL_Voucher_Detail_Mem, { foreignKey: "GVDetailMemId"});
  GL_Voucher_Detail_Mem.hasMany(GL_Voucher_Detail_Properties_Mem, { foreignKey: "GVDetailMemId"});
  GL_Voucher_Detail_History.belongsTo(GL_Voucher_History, { foreignKey: "VoucherHistoryId"});
  GL_Voucher_History.hasMany(GL_Voucher_Detail_History, { foreignKey: "VoucherHistoryId"});
  GL_Voucher_Properties_History.belongsTo(GL_Voucher_History, { foreignKey: "VoucherHistoryId"});
  GL_Voucher_History.hasMany(GL_Voucher_Properties_History, { foreignKey: "VoucherHistoryId"});
  GL_Voucher_Detail_Mem.belongsTo(GL_Voucher_Mem, { foreignKey: "VoucherMemId"});
  GL_Voucher_Mem.hasMany(GL_Voucher_Detail_Mem, { foreignKey: "VoucherMemId"});
  GL_Voucher_Properties_Mem.belongsTo(GL_Voucher_Mem, { foreignKey: "VoucherMemId"});
  GL_Voucher_Mem.hasMany(GL_Voucher_Properties_Mem, { foreignKey: "VoucherMemId"});
  GL_WTHDeposit_Detail.belongsTo(GL_WTHDeposit, { foreignKey: "WHTDepositId"});
  GL_WTHDeposit.hasMany(GL_WTHDeposit_Detail, { foreignKey: "WHTDepositId"});
  Gen_APUserDashboardPreference.belongsTo(Gen_APDashboardSetup, { foreignKey: "DashboardSetupId"});
  Gen_APDashboardSetup.hasMany(Gen_APUserDashboardPreference, { foreignKey: "DashboardSetupId"});
  Gen_ActiveInactiveLog.belongsTo(Gen_ActiveInactiveReason, { foreignKey: "ReasonId"});
  Gen_ActiveInactiveReason.hasMany(Gen_ActiveInactiveLog, { foreignKey: "ReasonId"});
  Gen_ActivityAlertsSubscription.belongsTo(Gen_ActivityAlerts, { foreignKey: "ActivityAlertId"});
  Gen_ActivityAlerts.hasMany(Gen_ActivityAlertsSubscription, { foreignKey: "ActivityAlertId"});
  Gen_ActivityAlertsSubscription_Email.belongsTo(Gen_ActivityAlertsSubscription, { foreignKey: "AlertsSubscriptionId"});
  Gen_ActivityAlertsSubscription.hasMany(Gen_ActivityAlertsSubscription_Email, { foreignKey: "AlertsSubscriptionId"});
  Gen_ActivityAlertsSubscription_SMS.belongsTo(Gen_ActivityAlertsSubscription, { foreignKey: "AlertsSubscriptionId"});
  Gen_ActivityAlertsSubscription.hasMany(Gen_ActivityAlertsSubscription_SMS, { foreignKey: "AlertsSubscriptionId"});
  Gen_ActivityAlertsSubscription_User.belongsTo(Gen_ActivityAlertsSubscription, { foreignKey: "AlertsSubscriptionId"});
  Gen_ActivityAlertsSubscription.hasMany(Gen_ActivityAlertsSubscription_User, { foreignKey: "AlertsSubscriptionId"});
  AExp_BL.belongsTo(Gen_BLTemplate, { foreignKey: "BLTemplateId"});
  Gen_BLTemplate.hasMany(AExp_BL, { foreignKey: "BLTemplateId"});
  AExp_BL_History.belongsTo(Gen_BLTemplate, { foreignKey: "BLTemplateId"});
  Gen_BLTemplate.hasMany(AExp_BL_History, { foreignKey: "BLTemplateId"});
  AExp_BL_PrintingLog.belongsTo(Gen_BLTemplate, { foreignKey: "BLTemplateId"});
  Gen_BLTemplate.hasMany(AExp_BL_PrintingLog, { foreignKey: "BLTemplateId"});
  AImp_AirImportJob_BLPrintingLog.belongsTo(Gen_BLTemplate, { foreignKey: "BLTemplateId"});
  Gen_BLTemplate.hasMany(AImp_AirImportJob_BLPrintingLog, { foreignKey: "BLTemplateId"});
  Gen_BLTemplate_AttachSheets.belongsTo(Gen_BLTemplate, { foreignKey: "BLTemplateId"});
  Gen_BLTemplate.hasMany(Gen_BLTemplate_AttachSheets, { foreignKey: "BLTemplateId"});
  SExp_BL.belongsTo(Gen_BLTemplate, { foreignKey: "BLTemplateId"});
  Gen_BLTemplate.hasMany(SExp_BL, { foreignKey: "BLTemplateId"});
  SExp_BL_PrintingLog.belongsTo(Gen_BLTemplate, { foreignKey: "BLTemplateId"});
  Gen_BLTemplate.hasMany(SExp_BL_PrintingLog, { foreignKey: "BLTemplateId"});
  GL_AgentInvoice.belongsTo(Gen_BankDetailRegister, { foreignKey: "BankDetailRegID"});
  Gen_BankDetailRegister.hasMany(GL_AgentInvoice, { foreignKey: "BankDetailRegID"});
  GL_JobInvoice.belongsTo(Gen_BankDetailRegister, { foreignKey: "BankDetailRegID"});
  Gen_BankDetailRegister.hasMany(GL_JobInvoice, { foreignKey: "BankDetailRegID"});
  GL_PrincipleInvoice.belongsTo(Gen_BankDetailRegister, { foreignKey: "BankDetailId"});
  Gen_BankDetailRegister.hasMany(GL_PrincipleInvoice, { foreignKey: "BankDetailId"});
  GL_RunningDetention.belongsTo(Gen_BankDetailRegister, { foreignKey: "BankDetailRegID"});
  Gen_BankDetailRegister.hasMany(GL_RunningDetention, { foreignKey: "BankDetailRegID"});
  GL_AgentReceiptPayment.belongsTo(Gen_BankSubType, { foreignKey: "TranModeSubTypeId"});
  Gen_BankSubType.hasMany(GL_AgentReceiptPayment, { foreignKey: "TranModeSubTypeId"});
  GL_JobDirectExpRev.belongsTo(Gen_BankSubType, { foreignKey: "TranModeSubTypeId"});
  Gen_BankSubType.hasMany(GL_JobDirectExpRev, { foreignKey: "TranModeSubTypeId"});
  GL_JobReceipt.belongsTo(Gen_BankSubType, { foreignKey: "TranModeSubTypeId"});
  Gen_BankSubType.hasMany(GL_JobReceipt, { foreignKey: "TranModeSubTypeId"});
  GL_PrincipalReceiptPayment.belongsTo(Gen_BankSubType, { foreignKey: "TranModeSubTypeId"});
  Gen_BankSubType.hasMany(GL_PrincipalReceiptPayment, { foreignKey: "TranModeSubTypeId"});
  GL_Voucher.belongsTo(Gen_BankSubType, { foreignKey: "BankSubTypeId"});
  Gen_BankSubType.hasMany(GL_Voucher, { foreignKey: "BankSubTypeId"});
  GL_Voucher_Detail.belongsTo(Gen_BankSubType, { foreignKey: "BankSubTypeId"});
  Gen_BankSubType.hasMany(GL_Voucher_Detail, { foreignKey: "BankSubTypeId"});
  Log_JobActivities.belongsTo(Gen_Border, { foreignKey: "BorderId"});
  Gen_Border.hasMany(Log_JobActivities, { foreignKey: "BorderId"});
  Gen_CARFLog.belongsTo(Gen_CARF, { foreignKey: "CARFId"});
  Gen_CARF.hasMany(Gen_CARFLog, { foreignKey: "CARFId"});
  Gen_CARF_Exception.belongsTo(Gen_CARF, { foreignKey: "CARFId"});
  Gen_CARF.hasMany(Gen_CARF_Exception, { foreignKey: "CARFId"});
  Gen_CARF_Reason.belongsTo(Gen_CARF, { foreignKey: "CARFId"});
  Gen_CARF.hasMany(Gen_CARF_Reason, { foreignKey: "CARFId"});
  Gen_CNICDetail_Log.belongsTo(Gen_CNICDetail, { foreignKey: "NICDetailId"});
  Gen_CNICDetail.hasMany(Gen_CNICDetail_Log, { foreignKey: "NICDetailId"});
  Gen_CPUserDashboardPreference.belongsTo(Gen_CPDashboardSetup, { foreignKey: "DashboardSetupId"});
  Gen_CPDashboardSetup.hasMany(Gen_CPUserDashboardPreference, { foreignKey: "DashboardSetupId"});
  AExp_AirExportJob.belongsTo(Gen_CargoTypeFile, { foreignKey: "CargoTypeFileId"});
  Gen_CargoTypeFile.hasMany(AExp_AirExportJob, { foreignKey: "CargoTypeFileId"});
  AImp_AirImportJob.belongsTo(Gen_CargoTypeFile, { foreignKey: "CargoTypeFileId"});
  Gen_CargoTypeFile.hasMany(AImp_AirImportJob, { foreignKey: "CargoTypeFileId"});
  SExp_SeaExportJob.belongsTo(Gen_CargoTypeFile, { foreignKey: "CargoTypeFileId"});
  Gen_CargoTypeFile.hasMany(SExp_SeaExportJob, { foreignKey: "CargoTypeFileId"});
  SImp_SeaImportJob.belongsTo(Gen_CargoTypeFile, { foreignKey: "CargoTypeFileId"});
  Gen_CargoTypeFile.hasMany(SImp_SeaImportJob, { foreignKey: "CargoTypeFileId"});
  AExp_AirExportJob_ChargesPayb.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(AExp_AirExportJob_ChargesPayb, { foreignKey: "ChargesId"});
  AExp_AirExportJob_ChargesPayb_History.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(AExp_AirExportJob_ChargesPayb_History, { foreignKey: "ChargesId"});
  AExp_AirExportJob_ChargesPayb_TaxExpShare.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(AExp_AirExportJob_ChargesPayb_TaxExpShare, { foreignKey: "ChargesId"});
  AExp_AirExportJob_ChargesRecv.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(AExp_AirExportJob_ChargesRecv, { foreignKey: "ChargesId"});
  AExp_AirExportJob_ChargesRecv_History.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(AExp_AirExportJob_ChargesRecv_History, { foreignKey: "ChargesId"});
  AExp_AirExportJob_ChargesRecv_TaxRevShare.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(AExp_AirExportJob_ChargesRecv_TaxRevShare, { foreignKey: "ChargesId"});
  AExp_BL_Charges.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(AExp_BL_Charges, { foreignKey: "ChargesId"});
  AImp_AirImportJob_BLCharges.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(AImp_AirImportJob_BLCharges, { foreignKey: "ChargesId"});
  AImp_AirImportJob_ChargesPayb.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(AImp_AirImportJob_ChargesPayb, { foreignKey: "ChargesId"});
  AImp_AirImportJob_ChargesPayb_History.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(AImp_AirImportJob_ChargesPayb_History, { foreignKey: "ChargesId"});
  AImp_AirImportJob_ChargesPayb_TaxExpShare.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(AImp_AirImportJob_ChargesPayb_TaxExpShare, { foreignKey: "ChargesId"});
  AImp_AirImportJob_ChargesRecv.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(AImp_AirImportJob_ChargesRecv, { foreignKey: "ChargesId"});
  AImp_AirImportJob_ChargesRecv_History.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(AImp_AirImportJob_ChargesRecv_History, { foreignKey: "ChargesId"});
  AImp_AirImportJob_ChargesRecv_TaxRevShare.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(AImp_AirImportJob_ChargesRecv_TaxRevShare, { foreignKey: "ChargesId"});
  DEPO_ContainerActivityCharges.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(DEPO_ContainerActivityCharges, { foreignKey: "ChargesId"});
  DEPO_LinesTariff_PerDay.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(DEPO_LinesTariff_PerDay, { foreignKey: "ChargesId"});
  DEPO_LinesTariff_PerMove.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(DEPO_LinesTariff_PerMove, { foreignKey: "ChargesId"});
  DEPO_Receipt_Detail.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(DEPO_Receipt_Detail, { foreignKey: "ChargesId"});
  GL_AccountIntegration_Charges.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_AccountIntegration_Charges, { foreignKey: "ChargesId"});
  GL_AccountIntegration_Charges_Log.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_AccountIntegration_Charges_Log, { foreignKey: "ChargesId"});
  GL_AgentInvoice_Charges.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_AgentInvoice_Charges, { foreignKey: "ChargesId"});
  GL_AgentInvoice_Charges_Cont.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_AgentInvoice_Charges_Cont, { foreignKey: "ChargesId"});
  GL_AgentInvoice_Charges_Tax.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_AgentInvoice_Charges_Tax, { foreignKey: "ChargesId"});
  GL_JobBill.belongsTo(Gen_Charges, { foreignKey: "crtChargesId"});
  Gen_Charges.hasMany(GL_JobBill, { foreignKey: "crtChargesId"});
  GL_JobBill_Charges.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_JobBill_Charges, { foreignKey: "ChargesId"});
  GL_JobBill_Charges_Cont.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_JobBill_Charges_Cont, { foreignKey: "ChargesId"});
  GL_JobBill_Charges_Tax.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_JobBill_Charges_Tax, { foreignKey: "ChargesId"});
  GL_JobDirectExpRev_Charges.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_JobDirectExpRev_Charges, { foreignKey: "ChargesId"});
  GL_JobInvoice_Charges.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_JobInvoice_Charges, { foreignKey: "ChargesId"});
  GL_JobInvoice_Charges_Cont.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_JobInvoice_Charges_Cont, { foreignKey: "ChargesId"});
  GL_JobInvoice_Charges_Tax.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_JobInvoice_Charges_Tax, { foreignKey: "ChargesId"});
  GL_JobInvoice_PaidByClient.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_JobInvoice_PaidByClient, { foreignKey: "ChargesId"});
  GL_PrincipalManualSOA_Charges_Cont.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_PrincipalManualSOA_Charges_Cont, { foreignKey: "ChargesId"});
  GL_PrincipalManualSOA_Charges_Tax.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_PrincipalManualSOA_Charges_Tax, { foreignKey: "ChargesId"});
  GL_PrincipleInvoice_Charges.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_PrincipleInvoice_Charges, { foreignKey: "ChargesId"});
  GL_PrincipleInvoice_Charges_Cont.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_PrincipleInvoice_Charges_Cont, { foreignKey: "ChargesId"});
  GL_PrincipleInvoice_Charges_Tax.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_PrincipleInvoice_Charges_Tax, { foreignKey: "ChargesId"});
  GL_RunningDetention_Charges.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_RunningDetention_Charges, { foreignKey: "ChargesId"});
  GL_RunningDetention_Charges_Cont.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_RunningDetention_Charges_Cont, { foreignKey: "ChargesId"});
  GL_TerminalInvoice_Detail.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_TerminalInvoice_Detail, { foreignKey: "ChargesId"});
  GL_UnAccruedEquipmentInvoice.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(GL_UnAccruedEquipmentInvoice, { foreignKey: "ChargesId"});
  Gen_ChargesTariff.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Gen_ChargesTariff, { foreignKey: "ChargesId"});
  Gen_Charges_SubCompanyRight.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Gen_Charges_SubCompanyRight, { foreignKey: "ChargesId"});
  Gen_Charges_TaxAuthority.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Gen_Charges_TaxAuthority, { foreignKey: "ChargesId"});
  Gen_DetentionTariff.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Gen_DetentionTariff, { foreignKey: "ChargesId"});
  Gen_EDIProcessed_Charge.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Gen_EDIProcessed_Charge, { foreignKey: "ChargesId"});
  Gen_ISoftCharge.belongsTo(Gen_Charges, { foreignKey: "CSULChargeId"});
  Gen_Charges.hasMany(Gen_ISoftCharge, { foreignKey: "CSULChargeId"});
  Gen_PEDIMapping.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Gen_PEDIMapping, { foreignKey: "ChargesId"});
  Gen_Quotation_Detail.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Gen_Quotation_Detail, { foreignKey: "ChargesId"});
  Gen_QuoteTemplate_Detail.belongsTo(Gen_Charges, { foreignKey: "ChargeId"});
  Gen_Charges.hasMany(Gen_QuoteTemplate_Detail, { foreignKey: "ChargeId"});
  Gen_SeaAccessorialCharge.belongsTo(Gen_Charges, { foreignKey: "ChargeId"});
  Gen_Charges.hasMany(Gen_SeaAccessorialCharge, { foreignKey: "ChargeId"});
  Gen_SecurityFile_Detention.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Gen_SecurityFile_Detention, { foreignKey: "ChargesId"});
  INQ_QuoteChargeTemplate_Detail.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(INQ_QuoteChargeTemplate_Detail, { foreignKey: "ChargesId"});
  INQ_RateFromVendor_Charges.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(INQ_RateFromVendor_Charges, { foreignKey: "ChargesId"});
  INQ_RateToCustomer_Charges.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(INQ_RateToCustomer_Charges, { foreignKey: "ChargesId"});
  Log_DutyCalculation_PODetail.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Log_DutyCalculation_PODetail, { foreignKey: "ChargesId"});
  Log_Job_ChargesPayb.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Log_Job_ChargesPayb, { foreignKey: "ChargesId"});
  Log_Job_ChargesPayb_Cont.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Log_Job_ChargesPayb_Cont, { foreignKey: "ChargesId"});
  Log_Job_ChargesPayb_History.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Log_Job_ChargesPayb_History, { foreignKey: "ChargesId"});
  Log_Job_ChargesPayb_TaxExpShare.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Log_Job_ChargesPayb_TaxExpShare, { foreignKey: "ChargesId"});
  Log_Job_ChargesRecv.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Log_Job_ChargesRecv, { foreignKey: "ChargesId"});
  Log_Job_ChargesRecv_Cont.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Log_Job_ChargesRecv_Cont, { foreignKey: "ChargesId"});
  Log_Job_ChargesRecv_History.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Log_Job_ChargesRecv_History, { foreignKey: "ChargesId"});
  Log_Job_ChargesRecv_TaxRevShare.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Log_Job_ChargesRecv_TaxRevShare, { foreignKey: "ChargesId"});
  Log_Job_PaidByClient.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Log_Job_PaidByClient, { foreignKey: "ChargesId"});
  SExp_BL_Charges.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(SExp_BL_Charges, { foreignKey: "ChargesId"});
  SExp_SeaExportJob_ChargesPayb.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(SExp_SeaExportJob_ChargesPayb, { foreignKey: "ChargesId"});
  SExp_SeaExportJob_ChargesPayb_History.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(SExp_SeaExportJob_ChargesPayb_History, { foreignKey: "ChargesId"});
  SExp_SeaExportJob_ChargesPayb_TaxExpShare.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(SExp_SeaExportJob_ChargesPayb_TaxExpShare, { foreignKey: "ChargesId"});
  SExp_SeaExportJob_ChargesRecv.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(SExp_SeaExportJob_ChargesRecv, { foreignKey: "ChargesId"});
  SExp_SeaExportJob_ChargesRecv_History.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(SExp_SeaExportJob_ChargesRecv_History, { foreignKey: "ChargesId"});
  SExp_SeaExportJob_ChargesRecv_TaxRevShare.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(SExp_SeaExportJob_ChargesRecv_TaxRevShare, { foreignKey: "ChargesId"});
  SExp_SeaExportJob_Principle.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(SExp_SeaExportJob_Principle, { foreignKey: "ChargesId"});
  SExp_SeaExportJob_Principle_History.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(SExp_SeaExportJob_Principle_History, { foreignKey: "ChargesId"});
  SImp_SeaImportJob_ChargesPayb.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(SImp_SeaImportJob_ChargesPayb, { foreignKey: "ChargesId"});
  SImp_SeaImportJob_ChargesPayb_History.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(SImp_SeaImportJob_ChargesPayb_History, { foreignKey: "ChargesId"});
  SImp_SeaImportJob_ChargesPayb_TaxExpShare.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(SImp_SeaImportJob_ChargesPayb_TaxExpShare, { foreignKey: "ChargesId"});
  SImp_SeaImportJob_ChargesRecv.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(SImp_SeaImportJob_ChargesRecv, { foreignKey: "ChargesId"});
  SImp_SeaImportJob_ChargesRecv_History.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(SImp_SeaImportJob_ChargesRecv_History, { foreignKey: "ChargesId"});
  SImp_SeaImportJob_ChargesRecv_TaxRevShare.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(SImp_SeaImportJob_ChargesRecv_TaxRevShare, { foreignKey: "ChargesId"});
  SImp_SeaImportJob_Principle.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(SImp_SeaImportJob_Principle, { foreignKey: "ChargesId"});
  SImp_SeaImportJob_Principle_History.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(SImp_SeaImportJob_Principle_History, { foreignKey: "ChargesId"});
  Simp_EqpInvOtherChgs.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(Simp_EqpInvOtherChgs, { foreignKey: "ChargesId"});
  WMS_Delivery_Charges.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(WMS_Delivery_Charges, { foreignKey: "ChargesId"});
  WMS_GRN_Charges.belongsTo(Gen_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.hasMany(WMS_GRN_Charges, { foreignKey: "ChargesId"});
  Gen_Charges.belongsTo(Gen_ChargesNature, { foreignKey: "ChargesNatureId"});
  Gen_ChargesNature.hasMany(Gen_Charges, { foreignKey: "ChargesNatureId"});
  Gen_Charges.belongsTo(Gen_ChargesReportingGroup, { foreignKey: "ReportingGroupId"});
  Gen_ChargesReportingGroup.hasMany(Gen_Charges, { foreignKey: "ReportingGroupId"});
  Gen_ChargesTariff_AirDetail.belongsTo(Gen_ChargesTariff, { foreignKey: "ChargesTariffId"});
  Gen_ChargesTariff.hasMany(Gen_ChargesTariff_AirDetail, { foreignKey: "ChargesTariffId"});
  Gen_ChargesTariff_Cleaning.belongsTo(Gen_ChargesTariff, { foreignKey: "ChargesTariffId"});
  Gen_ChargesTariff.hasMany(Gen_ChargesTariff_Cleaning, { foreignKey: "ChargesTariffId"});
  Gen_ChargesTariff_Detail.belongsTo(Gen_ChargesTariff, { foreignKey: "ChargesTariffId"});
  Gen_ChargesTariff.hasMany(Gen_ChargesTariff_Detail, { foreignKey: "ChargesTariffId"});
  Gen_ChargesTariff_Detention.belongsTo(Gen_ChargesTariff, { foreignKey: "ChargesTariffId"});
  Gen_ChargesTariff.hasMany(Gen_ChargesTariff_Detention, { foreignKey: "ChargesTariffId"});
  Gen_ChargesTariff_LatePickup.belongsTo(Gen_ChargesTariff, { foreignKey: "ChargesTariffId"});
  Gen_ChargesTariff.hasMany(Gen_ChargesTariff_LatePickup, { foreignKey: "ChargesTariffId"});
  Gen_ChargesTariff_Placement.belongsTo(Gen_ChargesTariff, { foreignKey: "ChargesTariffId"});
  Gen_ChargesTariff.hasMany(Gen_ChargesTariff_Placement, { foreignKey: "ChargesTariffId"});
  Gen_ChargesTariff_PlugIn.belongsTo(Gen_ChargesTariff, { foreignKey: "ChargesTariffId"});
  Gen_ChargesTariff.hasMany(Gen_ChargesTariff_PlugIn, { foreignKey: "ChargesTariffId"});
  Gen_ChargesTariff_Storage.belongsTo(Gen_ChargesTariff, { foreignKey: "ChargesTariffId"});
  Gen_ChargesTariff.hasMany(Gen_ChargesTariff_Storage, { foreignKey: "ChargesTariffId"});
  AExp_AirExportJob_ChargesPayb.belongsTo(Gen_ChargesVATCategory, { foreignKey: "VatCategoryId"});
  Gen_ChargesVATCategory.hasMany(AExp_AirExportJob_ChargesPayb, { foreignKey: "VatCategoryId"});
  AExp_AirExportJob_ChargesRecv.belongsTo(Gen_ChargesVATCategory, { foreignKey: "VatCategoryId"});
  Gen_ChargesVATCategory.hasMany(AExp_AirExportJob_ChargesRecv, { foreignKey: "VatCategoryId"});
  AImp_AirImportJob_ChargesPayb.belongsTo(Gen_ChargesVATCategory, { foreignKey: "VatCategoryId"});
  Gen_ChargesVATCategory.hasMany(AImp_AirImportJob_ChargesPayb, { foreignKey: "VatCategoryId"});
  AImp_AirImportJob_ChargesRecv.belongsTo(Gen_ChargesVATCategory, { foreignKey: "VatCategoryId"});
  Gen_ChargesVATCategory.hasMany(AImp_AirImportJob_ChargesRecv, { foreignKey: "VatCategoryId"});
  GL_JobDirectExpRev_Charges.belongsTo(Gen_ChargesVATCategory, { foreignKey: "VatCategoryId"});
  Gen_ChargesVATCategory.hasMany(GL_JobDirectExpRev_Charges, { foreignKey: "VatCategoryId"});
  Gen_Charges.belongsTo(Gen_ChargesVATCategory, { foreignKey: "VATCategoryId"});
  Gen_ChargesVATCategory.hasMany(Gen_Charges, { foreignKey: "VATCategoryId"});
  Log_Job_ChargesPayb.belongsTo(Gen_ChargesVATCategory, { foreignKey: "VatCategoryId"});
  Gen_ChargesVATCategory.hasMany(Log_Job_ChargesPayb, { foreignKey: "VatCategoryId"});
  Log_Job_ChargesRecv.belongsTo(Gen_ChargesVATCategory, { foreignKey: "VatCategoryId"});
  Gen_ChargesVATCategory.hasMany(Log_Job_ChargesRecv, { foreignKey: "VatCategoryId"});
  SExp_SeaExportJob_ChargesPayb.belongsTo(Gen_ChargesVATCategory, { foreignKey: "VatCategoryId"});
  Gen_ChargesVATCategory.hasMany(SExp_SeaExportJob_ChargesPayb, { foreignKey: "VatCategoryId"});
  SExp_SeaExportJob_ChargesRecv.belongsTo(Gen_ChargesVATCategory, { foreignKey: "VatCategoryId"});
  Gen_ChargesVATCategory.hasMany(SExp_SeaExportJob_ChargesRecv, { foreignKey: "VatCategoryId"});
  SImp_SeaImportJob_ChargesPayb.belongsTo(Gen_ChargesVATCategory, { foreignKey: "VatCategoryId"});
  Gen_ChargesVATCategory.hasMany(SImp_SeaImportJob_ChargesPayb, { foreignKey: "VatCategoryId"});
  SImp_SeaImportJob_ChargesRecv.belongsTo(Gen_ChargesVATCategory, { foreignKey: "VatCategoryId"});
  Gen_ChargesVATCategory.hasMany(SImp_SeaImportJob_ChargesRecv, { foreignKey: "VatCategoryId"});
  Gen_Charges.belongsTo(Gen_Charges_Category, { foreignKey: "ChargesCategoryId"});
  Gen_Charges_Category.hasMany(Gen_Charges, { foreignKey: "ChargesCategoryId"});
  Gen_Quotation_Detail.belongsTo(Gen_Charges_Category, { foreignKey: "ChargesCategoryId"});
  Gen_Charges_Category.hasMany(Gen_Quotation_Detail, { foreignKey: "ChargesCategoryId"});
  Gen_Document.belongsTo(Gen_CloudInfo, { foreignKey: "CloudInfoId"});
  Gen_CloudInfo.hasMany(Gen_Document, { foreignKey: "CloudInfoId"});
  Gen_Document_Deleted.belongsTo(Gen_CloudInfo, { foreignKey: "CloudInfoId"});
  Gen_CloudInfo.hasMany(Gen_Document_Deleted, { foreignKey: "CloudInfoId"});
  AExp_AirExportJob.belongsTo(Gen_Commodity, { foreignKey: "CommodityId"});
  Gen_Commodity.hasMany(AExp_AirExportJob, { foreignKey: "CommodityId"});
  AImp_AirImportJob.belongsTo(Gen_Commodity, { foreignKey: "CommodityId"});
  Gen_Commodity.hasMany(AImp_AirImportJob, { foreignKey: "CommodityId"});
  Gen_EDIProcessed.belongsTo(Gen_Commodity, { foreignKey: "CommodityId"});
  Gen_Commodity.hasMany(Gen_EDIProcessed, { foreignKey: "CommodityId"});
  Gen_ISoftCommodityMapping.belongsTo(Gen_Commodity, { foreignKey: "CSULCommodityId"});
  Gen_Commodity.hasMany(Gen_ISoftCommodityMapping, { foreignKey: "CSULCommodityId"});
  Gen_PEDIMapping.belongsTo(Gen_Commodity, { foreignKey: "CommodityId"});
  Gen_Commodity.hasMany(Gen_PEDIMapping, { foreignKey: "CommodityId"});
  Gen_Parties_CommodityDetail.belongsTo(Gen_Commodity, { foreignKey: "CommodityId"});
  Gen_Commodity.hasMany(Gen_Parties_CommodityDetail, { foreignKey: "CommodityId"});
  Gen_Quotation.belongsTo(Gen_Commodity, { foreignKey: "CommodityId"});
  Gen_Commodity.hasMany(Gen_Quotation, { foreignKey: "CommodityId"});
  Gen_SeaAccessorialCharge.belongsTo(Gen_Commodity, { foreignKey: "CommodityId"});
  Gen_Commodity.hasMany(Gen_SeaAccessorialCharge, { foreignKey: "CommodityId"});
  Gen_SeaInterimRate.belongsTo(Gen_Commodity, { foreignKey: "CommodityId"});
  Gen_Commodity.hasMany(Gen_SeaInterimRate, { foreignKey: "CommodityId"});
  Gen_SeaPublishRate.belongsTo(Gen_Commodity, { foreignKey: "CommodityId"});
  Gen_Commodity.hasMany(Gen_SeaPublishRate, { foreignKey: "CommodityId"});
  INQ_RateInquiry.belongsTo(Gen_Commodity, { foreignKey: "CommodityId"});
  Gen_Commodity.hasMany(INQ_RateInquiry, { foreignKey: "CommodityId"});
  Log_DutyCalculation.belongsTo(Gen_Commodity, { foreignKey: "CommodityId"});
  Gen_Commodity.hasMany(Log_DutyCalculation, { foreignKey: "CommodityId"});
  SExp_BookingConfirmFromCarrier.belongsTo(Gen_Commodity, { foreignKey: "CommodityId"});
  Gen_Commodity.hasMany(SExp_BookingConfirmFromCarrier, { foreignKey: "CommodityId"});
  SExp_BookingRequest.belongsTo(Gen_Commodity, { foreignKey: "CommodityId"});
  Gen_Commodity.hasMany(SExp_BookingRequest, { foreignKey: "CommodityId"});
  SExp_CRO.belongsTo(Gen_Commodity, { foreignKey: "CommodityId"});
  Gen_Commodity.hasMany(SExp_CRO, { foreignKey: "CommodityId"});
  SExp_SeaExportJob.belongsTo(Gen_Commodity, { foreignKey: "CommodityId"});
  Gen_Commodity.hasMany(SExp_SeaExportJob, { foreignKey: "CommodityId"});
  SImp_SeaImportJob.belongsTo(Gen_Commodity, { foreignKey: "CommodityId"});
  Gen_Commodity.hasMany(SImp_SeaImportJob, { foreignKey: "CommodityId"});
  WMS_CargoStuffing_Detail.belongsTo(Gen_Commodity, { foreignKey: "CommodityId"});
  Gen_Commodity.hasMany(WMS_CargoStuffing_Detail, { foreignKey: "CommodityId"});
  WMS_DeliveryOrder_Detail.belongsTo(Gen_Commodity, { foreignKey: "ItemId"});
  Gen_Commodity.hasMany(WMS_DeliveryOrder_Detail, { foreignKey: "ItemId"});
  WMS_Delivery_Detail.belongsTo(Gen_Commodity, { foreignKey: "ItemId"});
  Gen_Commodity.hasMany(WMS_Delivery_Detail, { foreignKey: "ItemId"});
  WMS_GRN_Detail.belongsTo(Gen_Commodity, { foreignKey: "ItemId"});
  Gen_Commodity.hasMany(WMS_GRN_Detail, { foreignKey: "ItemId"});
  WMS_ReceivingOrder_Detail.belongsTo(Gen_Commodity, { foreignKey: "ItemId"});
  Gen_Commodity.hasMany(WMS_ReceivingOrder_Detail, { foreignKey: "ItemId"});
  Gen_Commodity.belongsTo(Gen_CommodityCargoType, { foreignKey: "CCargoTypeID"});
  Gen_CommodityCargoType.hasMany(Gen_Commodity, { foreignKey: "CCargoTypeID"});
  Gen_ChargesTariff_AirDetail.belongsTo(Gen_CommodityGroup, { foreignKey: "CommodityGroupId"});
  Gen_CommodityGroup.hasMany(Gen_ChargesTariff_AirDetail, { foreignKey: "CommodityGroupId"});
  Gen_ChargesTariff_Detail.belongsTo(Gen_CommodityGroup, { foreignKey: "CommodityGroupId"});
  Gen_CommodityGroup.hasMany(Gen_ChargesTariff_Detail, { foreignKey: "CommodityGroupId"});
  Gen_ChargesTariff_PlugIn.belongsTo(Gen_CommodityGroup, { foreignKey: "CommodityGroupId"});
  Gen_CommodityGroup.hasMany(Gen_ChargesTariff_PlugIn, { foreignKey: "CommodityGroupId"});
  Gen_Commodity.belongsTo(Gen_CommodityGroup, { foreignKey: "CommodityGroupId"});
  Gen_CommodityGroup.hasMany(Gen_Commodity, { foreignKey: "CommodityGroupId"});
  Gen_DetentionTariff_PlugIn.belongsTo(Gen_CommodityGroup, { foreignKey: "CommodityGroupId"});
  Gen_CommodityGroup.hasMany(Gen_DetentionTariff_PlugIn, { foreignKey: "CommodityGroupId"});
  GL_FiscalYear.belongsTo(Gen_CommonStatus, { foreignKey: "StatusId"});
  Gen_CommonStatus.hasMany(GL_FiscalYear, { foreignKey: "StatusId"});
  GL_FiscalYear.belongsTo(Gen_CommonStatus, { foreignKey: "PeriodStatusId"});
  Gen_CommonStatus.hasMany(GL_FiscalYear, { foreignKey: "PeriodStatusId"});
  GL_Periods.belongsTo(Gen_CommonStatus, { foreignKey: "StatusId"});
  Gen_CommonStatus.hasMany(GL_Periods, { foreignKey: "StatusId"});
  Gen_Parties.belongsTo(Gen_CustomerGroup, { foreignKey: "CustomerGroupId"});
  Gen_CustomerGroup.hasMany(Gen_Parties, { foreignKey: "CustomerGroupId"});
  Gen_Dashboard_Executive.belongsTo(Gen_Dashboard, { foreignKey: "DashboardId"});
  Gen_Dashboard.hasMany(Gen_Dashboard_Executive, { foreignKey: "DashboardId"});
  Gen_DashboardSetup.belongsTo(Gen_DashboardPolicy, { foreignKey: "DashboardPolicyId"});
  Gen_DashboardPolicy.hasMany(Gen_DashboardSetup, { foreignKey: "DashboardPolicyId"});
  Gen_DashboardPolicy.belongsTo(Gen_DashboardType, { foreignKey: "DashboardTypeId"});
  Gen_DashboardType.hasMany(Gen_DashboardPolicy, { foreignKey: "DashboardTypeId"});
  Gen_DashboardSetup.belongsTo(Gen_DashboardType, { foreignKey: "DashboardTypeId"});
  Gen_DashboardType.hasMany(Gen_DashboardSetup, { foreignKey: "DashboardTypeId"});
  CTrk_ContainerCycle.belongsTo(Gen_DeliveryType, { foreignKey: "ExpDeliveryTypeId"});
  Gen_DeliveryType.hasMany(CTrk_ContainerCycle, { foreignKey: "ExpDeliveryTypeId"});
  CTrk_ContainerCycle.belongsTo(Gen_DeliveryType, { foreignKey: "ImpDeliveryTypeId"});
  Gen_DeliveryType.hasMany(CTrk_ContainerCycle, { foreignKey: "ImpDeliveryTypeId"});
  Gen_Quotation.belongsTo(Gen_DeliveryType, { foreignKey: "ServiceId"});
  Gen_DeliveryType.hasMany(Gen_Quotation, { foreignKey: "ServiceId"});
  Gen_Quotation_Detail.belongsTo(Gen_DeliveryType, { foreignKey: "ServiceId"});
  Gen_DeliveryType.hasMany(Gen_Quotation_Detail, { foreignKey: "ServiceId"});
  SExp_BookingRequest.belongsTo(Gen_DeliveryType, { foreignKey: "ServiceId"});
  Gen_DeliveryType.hasMany(SExp_BookingRequest, { foreignKey: "ServiceId"});
  SExp_SeaExportJob.belongsTo(Gen_DeliveryType, { foreignKey: "DeliveryTypeId"});
  Gen_DeliveryType.hasMany(SExp_SeaExportJob, { foreignKey: "DeliveryTypeId"});
  SImp_SeaImportJob.belongsTo(Gen_DeliveryType, { foreignKey: "DeliveryTypeId"});
  Gen_DeliveryType.hasMany(SImp_SeaImportJob, { foreignKey: "DeliveryTypeId"});
  AExp_AirExportJob_TracingDoc.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(AExp_AirExportJob_TracingDoc, { foreignKey: "DepartmentId"});
  AExp_AirExportJob_TracingOpr.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(AExp_AirExportJob_TracingOpr, { foreignKey: "DepartmentId"});
  AImp_AirImportJob_TracingDoc.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(AImp_AirImportJob_TracingDoc, { foreignKey: "DepartmentId"});
  AImp_AirImportJob_TracingOpr.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(AImp_AirImportJob_TracingOpr, { foreignKey: "DepartmentId"});
  CEAS_User.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(CEAS_User, { foreignKey: "DepartmentId"});
  Gen_AEJobNotes.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(Gen_AEJobNotes, { foreignKey: "DepartmentId"});
  Gen_AIJobNotes.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(Gen_AIJobNotes, { foreignKey: "DepartmentId"});
  Gen_Department_UserRights.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(Gen_Department_UserRights, { foreignKey: "DepartmentId"});
  Gen_MileStone.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(Gen_MileStone, { foreignKey: "DepartmentId"});
  Gen_MileStone_Detail.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(Gen_MileStone_Detail, { foreignKey: "DepartmentId"});
  Gen_Parties_Exception.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(Gen_Parties_Exception, { foreignKey: "DepartmentId"});
  Gen_Port_Exception.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(Gen_Port_Exception, { foreignKey: "DepartmentId"});
  Gen_SEJobNotes.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(Gen_SEJobNotes, { foreignKey: "DepartmentId"});
  Gen_SIJobNotes.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(Gen_SIJobNotes, { foreignKey: "DepartmentId"});
  Gen_TracingEvents.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(Gen_TracingEvents, { foreignKey: "DepartmentId"});
  Log_Job_TracingDoc.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(Log_Job_TracingDoc, { foreignKey: "DepartmentId"});
  Log_Job_TracingOpr.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(Log_Job_TracingOpr, { foreignKey: "DepartmentId"});
  SExp_SeaExportJob_TracingDoc.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(SExp_SeaExportJob_TracingDoc, { foreignKey: "DepartmentId"});
  SExp_SeaExportJob_TracingOpr.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(SExp_SeaExportJob_TracingOpr, { foreignKey: "DepartmentId"});
  SImp_SeaImportJob_TracingDoc.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(SImp_SeaImportJob_TracingDoc, { foreignKey: "DepartmentId"});
  SImp_SeaImportJob_TracingOpr.belongsTo(Gen_Department, { foreignKey: "DepartmentId"});
  Gen_Department.hasMany(SImp_SeaImportJob_TracingOpr, { foreignKey: "DepartmentId"});
  Gen_DetentionTariff_Detention.belongsTo(Gen_DetentionTariff, { foreignKey: "DetentionTariffId"});
  Gen_DetentionTariff.hasMany(Gen_DetentionTariff_Detention, { foreignKey: "DetentionTariffId"});
  Gen_DetentionTariff_PlugIn.belongsTo(Gen_DetentionTariff, { foreignKey: "DetentionTariffId"});
  Gen_DetentionTariff.hasMany(Gen_DetentionTariff_PlugIn, { foreignKey: "DetentionTariffId"});
  Gen_DetentionTariff_History_Detail.belongsTo(Gen_DetentionTariff_History, { foreignKey: "DetentionTariffHistoryId"});
  Gen_DetentionTariff_History.hasMany(Gen_DetentionTariff_History_Detail, { foreignKey: "DetentionTariffHistoryId"});
  AExp_AirExportJob.belongsTo(Gen_Dimension, { foreignKey: "DimentionId"});
  Gen_Dimension.hasMany(AExp_AirExportJob, { foreignKey: "DimentionId"});
  AImp_AirImportJob.belongsTo(Gen_Dimension, { foreignKey: "DimentionId"});
  Gen_Dimension.hasMany(AImp_AirImportJob, { foreignKey: "DimentionId"});
  Gen_Dimension_Detail.belongsTo(Gen_Dimension, { foreignKey: "DimentionId"});
  Gen_Dimension.hasMany(Gen_Dimension_Detail, { foreignKey: "DimentionId"});
  Gen_Quotation.belongsTo(Gen_Dimension, { foreignKey: "DimentionId"});
  Gen_Dimension.hasMany(Gen_Quotation, { foreignKey: "DimentionId"});
  AExp_AirExportJob.belongsTo(Gen_DocumentType, { foreignKey: "DocumentTypeId"});
  Gen_DocumentType.hasMany(AExp_AirExportJob, { foreignKey: "DocumentTypeId"});
  AImp_AirImportJob.belongsTo(Gen_DocumentType, { foreignKey: "DocumentTypeId"});
  Gen_DocumentType.hasMany(AImp_AirImportJob, { foreignKey: "DocumentTypeId"});
  Gen_Parties_Exception.belongsTo(Gen_DocumentType, { foreignKey: "DocumentTypeId"});
  Gen_DocumentType.hasMany(Gen_Parties_Exception, { foreignKey: "DocumentTypeId"});
  Gen_Port_Exception.belongsTo(Gen_DocumentType, { foreignKey: "DocumentTypeId"});
  Gen_DocumentType.hasMany(Gen_Port_Exception, { foreignKey: "DocumentTypeId"});
  SExp_SeaExportJob.belongsTo(Gen_DocumentType, { foreignKey: "DocumentTypeId"});
  Gen_DocumentType.hasMany(SExp_SeaExportJob, { foreignKey: "DocumentTypeId"});
  SImp_SeaImportJob.belongsTo(Gen_DocumentType, { foreignKey: "DocumentTypeId"});
  Gen_DocumentType.hasMany(SImp_SeaImportJob, { foreignKey: "DocumentTypeId"});
  Gen_EDIProcessed_BLDetail.belongsTo(Gen_EDIProcessed, { foreignKey: "EDIProcessId"});
  Gen_EDIProcessed.hasMany(Gen_EDIProcessed_BLDetail, { foreignKey: "EDIProcessId"});
  Gen_EDIProcessed_Charge.belongsTo(Gen_EDIProcessed, { foreignKey: "EDIProcessId"});
  Gen_EDIProcessed.hasMany(Gen_EDIProcessed_Charge, { foreignKey: "EDIProcessId"});
  Gen_EDIProcessed_Container.belongsTo(Gen_EDIProcessed, { foreignKey: "EDIProcessId"});
  Gen_EDIProcessed.hasMany(Gen_EDIProcessed_Container, { foreignKey: "EDIProcessId"});
  Gen_EDO_AcknowledgeDetail.belongsTo(Gen_EDO, { foreignKey: "EDOId"});
  Gen_EDO.hasMany(Gen_EDO_AcknowledgeDetail, { foreignKey: "EDOId"});
  Gen_EDO_SubmissionDetail.belongsTo(Gen_EDO, { foreignKey: "EDOId"});
  Gen_EDO.hasMany(Gen_EDO_SubmissionDetail, { foreignKey: "EDOId"});
  Gen_Parties_Locations.belongsTo(Gen_EDOFormat, { foreignKey: "EDOFormatId"});
  Gen_EDOFormat.hasMany(Gen_Parties_Locations, { foreignKey: "EDOFormatId"});
  Gen_EDO_Process_Detail.belongsTo(Gen_EDO_Process, { foreignKey: "EDOProcessId"});
  Gen_EDO_Process.hasMany(Gen_EDO_Process_Detail, { foreignKey: "EDOProcessId"});
  SImp_BL_Detail.belongsTo(Gen_EPAS_SerialType, { foreignKey: "SerialTypeId"});
  Gen_EPAS_SerialType.hasMany(SImp_BL_Detail, { foreignKey: "SerialTypeId"});
  Gen_DashboardPolicy.belongsTo(Gen_EditorType, { foreignKey: "EditorTypeId"});
  Gen_EditorType.hasMany(Gen_DashboardPolicy, { foreignKey: "EditorTypeId"});
  Gen_DashboardSetup.belongsTo(Gen_EditorType, { foreignKey: "EditorTypeId"});
  Gen_EditorType.hasMany(Gen_DashboardSetup, { foreignKey: "EditorTypeId"});
  Gen_EmailTemplate.belongsTo(Gen_EmailRecipient, { foreignKey: "EmailCCId"});
  Gen_EmailRecipient.hasMany(Gen_EmailTemplate, { foreignKey: "EmailCCId"});
  Gen_EmailTemplate.belongsTo(Gen_EmailRecipient, { foreignKey: "EmailToId"});
  Gen_EmailRecipient.hasMany(Gen_EmailTemplate, { foreignKey: "EmailToId"});
  Gen_LetterTemplate.belongsTo(Gen_EmailRecipient, { foreignKey: "LetterToId"});
  Gen_EmailRecipient.hasMany(Gen_LetterTemplate, { foreignKey: "LetterToId"});
  Gen_EDO_TemplateSetup.belongsTo(Gen_EmailTemplate, { foreignKey: "EmailTemplate"});
  Gen_EmailTemplate.hasMany(Gen_EDO_TemplateSetup, { foreignKey: "EmailTemplate"});
  Gen_EmailTemplate.belongsTo(Gen_EmailTemplateType, { foreignKey: "TemplateTypeId"});
  Gen_EmailTemplateType.hasMany(Gen_EmailTemplate, { foreignKey: "TemplateTypeId"});
  Gen_EquipmentSizeType.belongsTo(Gen_EquipmentSize, { foreignKey: "EquipSizeId"});
  Gen_EquipmentSize.hasMany(Gen_EquipmentSizeType, { foreignKey: "EquipSizeId"});
  CTrk_Container.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(CTrk_Container, { foreignKey: "EquipCode"});
  CVHM_GuaranteeFillingContainer.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(CVHM_GuaranteeFillingContainer, { foreignKey: "EquipCode"});
  DEPO_Container.belongsTo(Gen_EquipmentSizeType, { foreignKey: "SizeTypeCode"});
  Gen_EquipmentSizeType.hasMany(DEPO_Container, { foreignKey: "SizeTypeCode"});
  DEPO_ContainerActivity_Detail.belongsTo(Gen_EquipmentSizeType, { foreignKey: "SizeTypeCode"});
  Gen_EquipmentSizeType.hasMany(DEPO_ContainerActivity_Detail, { foreignKey: "SizeTypeCode"});
  DEPO_LinesTariff_PerDay.belongsTo(Gen_EquipmentSizeType, { foreignKey: "SizeTypeCode"});
  Gen_EquipmentSizeType.hasMany(DEPO_LinesTariff_PerDay, { foreignKey: "SizeTypeCode"});
  DEPO_LinesTariff_PerMove.belongsTo(Gen_EquipmentSizeType, { foreignKey: "SizeTypeCode"});
  Gen_EquipmentSizeType.hasMany(DEPO_LinesTariff_PerMove, { foreignKey: "SizeTypeCode"});
  GL_AgentInvoice_Charges.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(GL_AgentInvoice_Charges, { foreignKey: "EquipCode"});
  GL_AgentInvoice_Charges_Cont.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(GL_AgentInvoice_Charges_Cont, { foreignKey: "EquipCode"});
  GL_JobBill_Charges.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(GL_JobBill_Charges, { foreignKey: "EquipCode"});
  GL_JobBill_Charges_Cont.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(GL_JobBill_Charges_Cont, { foreignKey: "EquipCode"});
  GL_JobDirectExpRev_Charges.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(GL_JobDirectExpRev_Charges, { foreignKey: "EquipCode"});
  GL_JobInvoice_Charges.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(GL_JobInvoice_Charges, { foreignKey: "EquipCode"});
  GL_JobInvoice_Charges_Cont.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(GL_JobInvoice_Charges_Cont, { foreignKey: "EquipCode"});
  GL_PrincipalManualSOA_Charges_Cont.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(GL_PrincipalManualSOA_Charges_Cont, { foreignKey: "EquipCode"});
  GL_PrincipleInvoice_Charges.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(GL_PrincipleInvoice_Charges, { foreignKey: "EquipCode"});
  GL_PrincipleInvoice_Charges_Cont.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(GL_PrincipleInvoice_Charges_Cont, { foreignKey: "EquipCode"});
  GL_RunningDetention_Charges.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(GL_RunningDetention_Charges, { foreignKey: "EquipCode"});
  GL_RunningDetention_Charges_Cont.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(GL_RunningDetention_Charges_Cont, { foreignKey: "EquipCode"});
  GL_TerminalInvoice_Detail.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(GL_TerminalInvoice_Detail, { foreignKey: "EquipCode"});
  GL_UnAccruedEquipmentInvoice.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(GL_UnAccruedEquipmentInvoice, { foreignKey: "EquipCode"});
  Gen_ChargesTariff_Cleaning.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(Gen_ChargesTariff_Cleaning, { foreignKey: "EquipCode"});
  Gen_ChargesTariff_Detention.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(Gen_ChargesTariff_Detention, { foreignKey: "EquipCode"});
  Gen_ChargesTariff_Placement.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(Gen_ChargesTariff_Placement, { foreignKey: "EquipCode"});
  Gen_ChargesTariff_Storage.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(Gen_ChargesTariff_Storage, { foreignKey: "EquipCode"});
  Gen_EDIProcessed_Charge.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(Gen_EDIProcessed_Charge, { foreignKey: "EquipCode"});
  Gen_EDIProcessed_Container.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(Gen_EDIProcessed_Container, { foreignKey: "EquipCode"});
  Gen_ISoftEquipmentSizeTypeMapping.belongsTo(Gen_EquipmentSizeType, { foreignKey: "CSULEquipSizeCode"});
  Gen_EquipmentSizeType.hasMany(Gen_ISoftEquipmentSizeTypeMapping, { foreignKey: "CSULEquipSizeCode"});
  Gen_PEDIMapping.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(Gen_PEDIMapping, { foreignKey: "EquipCode"});
  Gen_Quotation.belongsTo(Gen_EquipmentSizeType, { foreignKey: "ShipmentSizeCode"});
  Gen_EquipmentSizeType.hasMany(Gen_Quotation, { foreignKey: "ShipmentSizeCode"});
  Gen_Quotation_Detail.belongsTo(Gen_EquipmentSizeType, { foreignKey: "SizeTypeCode"});
  Gen_EquipmentSizeType.hasMany(Gen_Quotation_Detail, { foreignKey: "SizeTypeCode"});
  Gen_Quotation_Equipment.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(Gen_Quotation_Equipment, { foreignKey: "EquipCode"});
  Gen_SeaAccessorialCharge.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(Gen_SeaAccessorialCharge, { foreignKey: "EquipCode"});
  Gen_SeaInterimRate.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(Gen_SeaInterimRate, { foreignKey: "EquipCode"});
  Gen_SeaPublishRate.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(Gen_SeaPublishRate, { foreignKey: "EquipCode"});
  Gen_SecurityFile_Payable.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(Gen_SecurityFile_Payable, { foreignKey: "EquipCode"});
  Gen_TerminalStockRequirement_Detail.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(Gen_TerminalStockRequirement_Detail, { foreignKey: "EquipCode"});
  INQ_RateInquiry_Detail.belongsTo(Gen_EquipmentSizeType, { foreignKey: "SeaSizeTypeId"});
  Gen_EquipmentSizeType.hasMany(INQ_RateInquiry_Detail, { foreignKey: "SeaSizeTypeId"});
  Log_Job_ChargesPayb_Cont.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(Log_Job_ChargesPayb_Cont, { foreignKey: "EquipCode"});
  Log_Job_ChargesRecv_Cont.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(Log_Job_ChargesRecv_Cont, { foreignKey: "EquipCode"});
  Log_Job_Container.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(Log_Job_Container, { foreignKey: "EquipCode"});
  SExp_BL_Equipment.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SExp_BL_Equipment, { foreignKey: "EquipCode"});
  SExp_BL_Equipment_History.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SExp_BL_Equipment_History, { foreignKey: "EquipCode"});
  SExp_BookingRequest_Detail.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SExp_BookingRequest_Detail, { foreignKey: "EquipCode"});
  SExp_BookingRequest_Equipment.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SExp_BookingRequest_Equipment, { foreignKey: "EquipCode"});
  SExp_CRO.belongsTo(Gen_EquipmentSizeType, { foreignKey: "SizeType"});
  Gen_EquipmentSizeType.hasMany(SExp_CRO, { foreignKey: "SizeType"});
  SExp_SeaExportJob_ChargesPayb.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SExp_SeaExportJob_ChargesPayb, { foreignKey: "EquipCode"});
  SExp_SeaExportJob_ChargesPayb_History.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SExp_SeaExportJob_ChargesPayb_History, { foreignKey: "EquipCode"});
  SExp_SeaExportJob_ChargesRecv.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SExp_SeaExportJob_ChargesRecv, { foreignKey: "EquipCode"});
  SExp_SeaExportJob_ChargesRecv_History.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SExp_SeaExportJob_ChargesRecv_History, { foreignKey: "EquipCode"});
  SExp_SeaExportJob_Equipment.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SExp_SeaExportJob_Equipment, { foreignKey: "EquipCode"});
  SExp_SeaExportJob_Principle.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SExp_SeaExportJob_Principle, { foreignKey: "EquipCode"});
  SExp_SeaExportJob_Principle_History.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SExp_SeaExportJob_Principle_History, { foreignKey: "EquipCode"});
  SExp_SeaExportJob_TracingOpr_Cont.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SExp_SeaExportJob_TracingOpr_Cont, { foreignKey: "EquipCode"});
  SExp_ShippingInstruction_Equipment.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SExp_ShippingInstruction_Equipment, { foreignKey: "EquipCode"});
  SExp_StuffingPlan.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SExp_StuffingPlan, { foreignKey: "EquipCode"});
  SExp_StuffingPlan_Detail.belongsTo(Gen_EquipmentSizeType, { foreignKey: "SizeTypeCode"});
  Gen_EquipmentSizeType.hasMany(SExp_StuffingPlan_Detail, { foreignKey: "SizeTypeCode"});
  SExp_SwitchBL_Equipment.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SExp_SwitchBL_Equipment, { foreignKey: "EquipCode"});
  SExp_SwitchBL_Equipment_History.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SExp_SwitchBL_Equipment_History, { foreignKey: "EquipCode"});
  SImp_BL_Equipment.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SImp_BL_Equipment, { foreignKey: "EquipCode"});
  SImp_BL_Equipment_History.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SImp_BL_Equipment_History, { foreignKey: "EquipCode"});
  SImp_PreAlert_Container.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SImp_PreAlert_Container, { foreignKey: "EquipCode"});
  SImp_SeaImportJob_ChargesPayb.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SImp_SeaImportJob_ChargesPayb, { foreignKey: "EquipCode"});
  SImp_SeaImportJob_ChargesPayb_History.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SImp_SeaImportJob_ChargesPayb_History, { foreignKey: "EquipCode"});
  SImp_SeaImportJob_ChargesRecv.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SImp_SeaImportJob_ChargesRecv, { foreignKey: "EquipCode"});
  SImp_SeaImportJob_ChargesRecv_History.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SImp_SeaImportJob_ChargesRecv_History, { foreignKey: "EquipCode"});
  SImp_SeaImportJob_Equipment.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SImp_SeaImportJob_Equipment, { foreignKey: "EquipCode"});
  SImp_SeaImportJob_Principle.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SImp_SeaImportJob_Principle, { foreignKey: "EquipCode"});
  SImp_SeaImportJob_Principle_History.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(SImp_SeaImportJob_Principle_History, { foreignKey: "EquipCode"});
  Simp_EqpInvOtherChgs.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(Simp_EqpInvOtherChgs, { foreignKey: "EquipCode"});
  WMS_CargoStuffing.belongsTo(Gen_EquipmentSizeType, { foreignKey: "EquipCode"});
  Gen_EquipmentSizeType.hasMany(WMS_CargoStuffing, { foreignKey: "EquipCode"});
  Gen_ChargesTariff_PlugIn.belongsTo(Gen_EquipmentType, { foreignKey: "EquipTypeId"});
  Gen_EquipmentType.hasMany(Gen_ChargesTariff_PlugIn, { foreignKey: "EquipTypeId"});
  Gen_EquipmentSizeType.belongsTo(Gen_EquipmentType, { foreignKey: "EquipTypeId"});
  Gen_EquipmentType.hasMany(Gen_EquipmentSizeType, { foreignKey: "EquipTypeId"});
  Gen_ExchRateRange_Detail.belongsTo(Gen_ExchRateRange, { foreignKey: "ExchRateRangeId"});
  Gen_ExchRateRange.hasMany(Gen_ExchRateRange_Detail, { foreignKey: "ExchRateRangeId"});
  Gen_Parties_Locations.belongsTo(Gen_FTPSetting, { foreignKey: "FTPSettingId"});
  Gen_FTPSetting.hasMany(Gen_Parties_Locations, { foreignKey: "FTPSettingId"});
  Gen_SysPolicy_DODocs.belongsTo(Gen_FileCategory, { foreignKey: "CategoryId"});
  Gen_FileCategory.hasMany(Gen_SysPolicy_DODocs, { foreignKey: "CategoryId"});
  Gen_SysPolicy_SecurityRefundDocs.belongsTo(Gen_FileCategory, { foreignKey: "CategoryId"});
  Gen_FileCategory.hasMany(Gen_SysPolicy_SecurityRefundDocs, { foreignKey: "CategoryId"});
  AExp_AirExportJob.belongsTo(Gen_Flight_Schedule, { foreignKey: "FlightScheduleId"});
  Gen_Flight_Schedule.hasMany(AExp_AirExportJob, { foreignKey: "FlightScheduleId"});
  AImp_AirImportJob.belongsTo(Gen_Flight_Schedule, { foreignKey: "FlightScheduleId"});
  Gen_Flight_Schedule.hasMany(AImp_AirImportJob, { foreignKey: "FlightScheduleId"});
  AImp_ManifestHeader.belongsTo(Gen_Flight_Schedule, { foreignKey: "FlightScheduleId"});
  Gen_Flight_Schedule.hasMany(AImp_ManifestHeader, { foreignKey: "FlightScheduleId"});
  Gen_Flight_Schedule_Detail.belongsTo(Gen_Flight_Schedule, { foreignKey: "FlightId"});
  Gen_Flight_Schedule.hasMany(Gen_Flight_Schedule_Detail, { foreignKey: "FlightId"});
  Gen_Flight_Schedule_ExchRateDetail.belongsTo(Gen_Flight_Schedule, { foreignKey: "FlightId"});
  Gen_Flight_Schedule.hasMany(Gen_Flight_Schedule_ExchRateDetail, { foreignKey: "FlightId"});
  Gen_Forms_Functions.belongsTo(Gen_Forms, { foreignKey: "GenFormId"});
  Gen_Forms.hasMany(Gen_Forms_Functions, { foreignKey: "GenFormId"});
  Gen_SecurityGroup_Authority.belongsTo(Gen_Forms_Functions, { foreignKey: "GenFormFunctionId"});
  Gen_Forms_Functions.hasMany(Gen_SecurityGroup_Authority, { foreignKey: "GenFormFunctionId"});
  Gen_Parties_CommodityDetail.belongsTo(Gen_FreightClassType, { foreignKey: "FreightClassTypeID"});
  Gen_FreightClassType.hasMany(Gen_Parties_CommodityDetail, { foreignKey: "FreightClassTypeID"});
  GL_Voucher_Mem.belongsTo(Gen_Frequency, { foreignKey: "FrequencyId"});
  Gen_Frequency.hasMany(GL_Voucher_Mem, { foreignKey: "FrequencyId"});
  Gen_FrequencyPeriod.belongsTo(Gen_Frequency, { foreignKey: "FrequencyId"});
  Gen_Frequency.hasMany(Gen_FrequencyPeriod, { foreignKey: "FrequencyId"});
  Gen_Forms_Functions.belongsTo(Gen_Functions, { foreignKey: "GenFunctionId"});
  Gen_Functions.hasMany(Gen_Forms_Functions, { foreignKey: "GenFunctionId"});
  Gen_Commodity.belongsTo(Gen_HazmatClassType, { foreignKey: "HazmatClassTypeID"});
  Gen_HazmatClassType.hasMany(Gen_Commodity, { foreignKey: "HazmatClassTypeID"});
  INQ_RateInquiry.belongsTo(Gen_HazmatClassType, { foreignKey: "IMOClassId"});
  Gen_HazmatClassType.hasMany(INQ_RateInquiry, { foreignKey: "IMOClassId"});
  SExp_BL_Detail.belongsTo(Gen_HazmatClassType, { foreignKey: "HazmatClassTypeID"});
  Gen_HazmatClassType.hasMany(SExp_BL_Detail, { foreignKey: "HazmatClassTypeID"});
  SImp_BL_Detail.belongsTo(Gen_HazmatClassType, { foreignKey: "HazmatClassTypeID"});
  Gen_HazmatClassType.hasMany(SImp_BL_Detail, { foreignKey: "HazmatClassTypeID"});
  Gen_Commodity.belongsTo(Gen_HazmatPackingGroup, { foreignKey: "HazmatPackingGroupID"});
  Gen_HazmatPackingGroup.hasMany(Gen_Commodity, { foreignKey: "HazmatPackingGroupID"});
  SExp_BL_Detail.belongsTo(Gen_HazmatPackingGroup, { foreignKey: "HazmatPackingGroupID"});
  Gen_HazmatPackingGroup.hasMany(SExp_BL_Detail, { foreignKey: "HazmatPackingGroupID"});
  SImp_BL_Detail.belongsTo(Gen_HazmatPackingGroup, { foreignKey: "HazmatPackingGroupID"});
  Gen_HazmatPackingGroup.hasMany(SImp_BL_Detail, { foreignKey: "HazmatPackingGroupID"});
  GL_Voucher_History.belongsTo(Gen_HistoryType, { foreignKey: "HistoryTypeId"});
  Gen_HistoryType.hasMany(GL_Voucher_History, { foreignKey: "HistoryTypeId"});
  Gen_Quotation.belongsTo(Gen_ISoftCommodityMapping, { foreignKey: "ISoftCommodityId"});
  Gen_ISoftCommodityMapping.hasMany(Gen_Quotation, { foreignKey: "ISoftCommodityId"});
  SExp_BookingConfirmFromCarrier.belongsTo(Gen_ISoftCommodityMapping, { foreignKey: "ISoftCommodityId"});
  Gen_ISoftCommodityMapping.hasMany(SExp_BookingConfirmFromCarrier, { foreignKey: "ISoftCommodityId"});
  SExp_BookingRequest.belongsTo(Gen_ISoftEmployeeMapping, { foreignKey: "ISoftSalesRepId"});
  Gen_ISoftEmployeeMapping.hasMany(SExp_BookingRequest, { foreignKey: "ISoftSalesRepId"});
  SExp_BookingRequest_Detail.belongsTo(Gen_ISoftEquipmentSizeTypeMapping, { foreignKey: "ISoftEquipSizeId"});
  Gen_ISoftEquipmentSizeTypeMapping.hasMany(SExp_BookingRequest_Detail, { foreignKey: "ISoftEquipSizeId"});
  SExp_BookingRequest_Equipment.belongsTo(Gen_ISoftEquipmentSizeTypeMapping, { foreignKey: "ISoftEquipSizeId"});
  Gen_ISoftEquipmentSizeTypeMapping.hasMany(SExp_BookingRequest_Equipment, { foreignKey: "ISoftEquipSizeId"});
  SExp_BookingToCarrier.belongsTo(Gen_ISoftPackingUnit, { foreignKey: "IsoftInnerPackingUnitId"});
  Gen_ISoftPackingUnit.hasMany(SExp_BookingToCarrier, { foreignKey: "IsoftInnerPackingUnitId"});
  SExp_BookingToCarrier.belongsTo(Gen_ISoftPackingUnit, { foreignKey: "ISoftOuterPackingUnitId"});
  Gen_ISoftPackingUnit.hasMany(SExp_BookingToCarrier, { foreignKey: "ISoftOuterPackingUnitId"});
  SExp_BookingToCarrier.belongsTo(Gen_ISoftPackingUnit, { foreignKey: "ISoftPackingUnitId"});
  Gen_ISoftPackingUnit.hasMany(SExp_BookingToCarrier, { foreignKey: "ISoftPackingUnitId"});
  Gen_ISoftPartyContact.belongsTo(Gen_ISoftParty, { foreignKey: "PartyId"});
  Gen_ISoftParty.hasMany(Gen_ISoftPartyContact, { foreignKey: "PartyId"});
  Gen_ISoftPartyLocation.belongsTo(Gen_ISoftParty, { foreignKey: "PartyId"});
  Gen_ISoftParty.hasMany(Gen_ISoftPartyLocation, { foreignKey: "PartyId"});
  SExp_BookingConfirmFromCarrier.belongsTo(Gen_ISoftParty, { foreignKey: "ISoftCarrierId"});
  Gen_ISoftParty.hasMany(SExp_BookingConfirmFromCarrier, { foreignKey: "ISoftCarrierId"});
  SExp_BookingConfirmFromCarrier.belongsTo(Gen_ISoftParty, { foreignKey: "ISoftClientId"});
  Gen_ISoftParty.hasMany(SExp_BookingConfirmFromCarrier, { foreignKey: "ISoftClientId"});
  SExp_BookingRequest.belongsTo(Gen_ISoftParty, { foreignKey: "ISoftClientId"});
  Gen_ISoftParty.hasMany(SExp_BookingRequest, { foreignKey: "ISoftClientId"});
  SExp_BookingRequest.belongsTo(Gen_ISoftParty, { foreignKey: "ISoftConsigneeId"});
  Gen_ISoftParty.hasMany(SExp_BookingRequest, { foreignKey: "ISoftConsigneeId"});
  SExp_BookingRequest.belongsTo(Gen_ISoftParty, { foreignKey: "ISoftChaChbId"});
  Gen_ISoftParty.hasMany(SExp_BookingRequest, { foreignKey: "ISoftChaChbId"});
  SExp_BookingRequest.belongsTo(Gen_ISoftParty, { foreignKey: "ISoftLocalVendorId"});
  Gen_ISoftParty.hasMany(SExp_BookingRequest, { foreignKey: "ISoftLocalVendorId"});
  SExp_BookingRequest.belongsTo(Gen_ISoftParty, { foreignKey: "ISoftOverseasAgentId"});
  Gen_ISoftParty.hasMany(SExp_BookingRequest, { foreignKey: "ISoftOverseasAgentId"});
  SExp_BookingRequest.belongsTo(Gen_ISoftParty, { foreignKey: "ISoftShipperId"});
  Gen_ISoftParty.hasMany(SExp_BookingRequest, { foreignKey: "ISoftShipperId"});
  SExp_BookingRequest.belongsTo(Gen_ISoftParty, { foreignKey: "ISoftShippingLineId"});
  Gen_ISoftParty.hasMany(SExp_BookingRequest, { foreignKey: "ISoftShippingLineId"});
  SExp_BookingRequest.belongsTo(Gen_ISoftParty, { foreignKey: "ISoftBuyerId"});
  Gen_ISoftParty.hasMany(SExp_BookingRequest, { foreignKey: "ISoftBuyerId"});
  SExp_BookingToCarrier.belongsTo(Gen_ISoftParty, { foreignKey: "ISoftConsigneeId"});
  Gen_ISoftParty.hasMany(SExp_BookingToCarrier, { foreignKey: "ISoftConsigneeId"});
  SExp_BookingRequest.belongsTo(Gen_ISoftPartyLocation, { foreignKey: "ISoftConsigneeLocationId"});
  Gen_ISoftPartyLocation.hasMany(SExp_BookingRequest, { foreignKey: "ISoftConsigneeLocationId"});
  SExp_BookingRequest.belongsTo(Gen_ISoftPartyLocation, { foreignKey: "ISoftContainerDepotId"});
  Gen_ISoftPartyLocation.hasMany(SExp_BookingRequest, { foreignKey: "ISoftContainerDepotId"});
  SExp_BookingRequest.belongsTo(Gen_ISoftPartyLocation, { foreignKey: "ISoftShipperLocationId"});
  Gen_ISoftPartyLocation.hasMany(SExp_BookingRequest, { foreignKey: "ISoftShipperLocationId"});
  SExp_BookingToCarrier.belongsTo(Gen_ISoftPartyLocation, { foreignKey: "ISoftConsigneeLocationId"});
  Gen_ISoftPartyLocation.hasMany(SExp_BookingToCarrier, { foreignKey: "ISoftConsigneeLocationId"});
  SExp_BookingConfirmFromCarrier.belongsTo(Gen_ISoftVesselMapping, { foreignKey: "ISoftVesselId"});
  Gen_ISoftVesselMapping.hasMany(SExp_BookingConfirmFromCarrier, { foreignKey: "ISoftVesselId"});
  AExp_AirExportJob.belongsTo(Gen_IncoTerms, { foreignKey: "IncoTermsId"});
  Gen_IncoTerms.hasMany(AExp_AirExportJob, { foreignKey: "IncoTermsId"});
  AImp_AirImportJob.belongsTo(Gen_IncoTerms, { foreignKey: "IncoTermsId"});
  Gen_IncoTerms.hasMany(AImp_AirImportJob, { foreignKey: "IncoTermsId"});
  Gen_MileStone.belongsTo(Gen_IncoTerms, { foreignKey: "IncoTermsId"});
  Gen_IncoTerms.hasMany(Gen_MileStone, { foreignKey: "IncoTermsId"});
  Gen_MileStone_Detail.belongsTo(Gen_IncoTerms, { foreignKey: "IncoTermsId"});
  Gen_IncoTerms.hasMany(Gen_MileStone_Detail, { foreignKey: "IncoTermsId"});
  Gen_Quotation.belongsTo(Gen_IncoTerms, { foreignKey: "IncoTermsId"});
  Gen_IncoTerms.hasMany(Gen_Quotation, { foreignKey: "IncoTermsId"});
  Gen_QuoteTemplate.belongsTo(Gen_IncoTerms, { foreignKey: "IncoTermsId"});
  Gen_IncoTerms.hasMany(Gen_QuoteTemplate, { foreignKey: "IncoTermsId"});
  INQ_RateInquiry.belongsTo(Gen_IncoTerms, { foreignKey: "IncoTermId"});
  Gen_IncoTerms.hasMany(INQ_RateInquiry, { foreignKey: "IncoTermId"});
  Log_Job.belongsTo(Gen_IncoTerms, { foreignKey: "IncoTermsId"});
  Gen_IncoTerms.hasMany(Log_Job, { foreignKey: "IncoTermsId"});
  SExp_SeaExportJob.belongsTo(Gen_IncoTerms, { foreignKey: "IncoTermsId"});
  Gen_IncoTerms.hasMany(SExp_SeaExportJob, { foreignKey: "IncoTermsId"});
  SImp_SeaImportJob.belongsTo(Gen_IncoTerms, { foreignKey: "IncoTermsId"});
  Gen_IncoTerms.hasMany(SImp_SeaImportJob, { foreignKey: "IncoTermsId"});
  Gen_ChargesTariff_Detail.belongsTo(Gen_IndexType, { foreignKey: "IndexTypeId"});
  Gen_IndexType.hasMany(Gen_ChargesTariff_Detail, { foreignKey: "IndexTypeId"});
  SImp_BL.belongsTo(Gen_IndexType, { foreignKey: "IndexTypeId"});
  Gen_IndexType.hasMany(SImp_BL, { foreignKey: "IndexTypeId"});
  Gen_Parties_InsuranceDetail.belongsTo(Gen_InsuranceCompany, { foreignKey: "InsuranceCompanyId"});
  Gen_InsuranceCompany.hasMany(Gen_Parties_InsuranceDetail, { foreignKey: "InsuranceCompanyId"});
  Gen_Parties_InsuranceDetail.belongsTo(Gen_InsuranceType, { foreignKey: "InsuranceTypeId"});
  Gen_InsuranceType.hasMany(Gen_Parties_InsuranceDetail, { foreignKey: "InsuranceTypeId"});
  AExp_AirExportJob.belongsTo(Gen_JobCancelReason, { foreignKey: "JobCancelReasonId"});
  Gen_JobCancelReason.hasMany(AExp_AirExportJob, { foreignKey: "JobCancelReasonId"});
  AImp_AirImportJob.belongsTo(Gen_JobCancelReason, { foreignKey: "JobCancelReasonId"});
  Gen_JobCancelReason.hasMany(AImp_AirImportJob, { foreignKey: "JobCancelReasonId"});
  Log_Job.belongsTo(Gen_JobCancelReason, { foreignKey: "JobClosingReasonId"});
  Gen_JobCancelReason.hasMany(Log_Job, { foreignKey: "JobClosingReasonId"});
  SExp_SeaExportJob.belongsTo(Gen_JobCancelReason, { foreignKey: "JobCancelReasonId"});
  Gen_JobCancelReason.hasMany(SExp_SeaExportJob, { foreignKey: "JobCancelReasonId"});
  SImp_SeaImportJob.belongsTo(Gen_JobCancelReason, { foreignKey: "JobCancelReasonId"});
  Gen_JobCancelReason.hasMany(SImp_SeaImportJob, { foreignKey: "JobCancelReasonId"});
  WMS_CargoDEStuffing.belongsTo(Gen_JobNature, { foreignKey: "JobNatureId"});
  Gen_JobNature.hasMany(WMS_CargoDEStuffing, { foreignKey: "JobNatureId"});
  WMS_CargoStuffing.belongsTo(Gen_JobNature, { foreignKey: "JobNatureId"});
  Gen_JobNature.hasMany(WMS_CargoStuffing, { foreignKey: "JobNatureId"});
  GL_AccountIntegration_Charges.belongsTo(Gen_JobSubType, { foreignKey: "JobSubTypeId"});
  Gen_JobSubType.hasMany(GL_AccountIntegration_Charges, { foreignKey: "JobSubTypeId"});
  GL_AccountIntegration_Charges_Log.belongsTo(Gen_JobSubType, { foreignKey: "JobSubTypeId"});
  Gen_JobSubType.hasMany(GL_AccountIntegration_Charges_Log, { foreignKey: "JobSubTypeId"});
  GL_AccountIntegration_Common.belongsTo(Gen_JobSubType, { foreignKey: "JobSubTypeId"});
  Gen_JobSubType.hasMany(GL_AccountIntegration_Common, { foreignKey: "JobSubTypeId"});
  GL_AccountIntegration_Common_Log.belongsTo(Gen_JobSubType, { foreignKey: "JobSubTypeId"});
  Gen_JobSubType.hasMany(GL_AccountIntegration_Common_Log, { foreignKey: "JobSubTypeId"});
  GL_AgentInvoice.belongsTo(Gen_JobSubType, { foreignKey: "ActualSubTypeId"});
  Gen_JobSubType.hasMany(GL_AgentInvoice, { foreignKey: "ActualSubTypeId"});
  GL_JobBill.belongsTo(Gen_JobSubType, { foreignKey: "ActualSubTypeId"});
  Gen_JobSubType.hasMany(GL_JobBill, { foreignKey: "ActualSubTypeId"});
  GL_JobInvoice.belongsTo(Gen_JobSubType, { foreignKey: "ActualSubTypeId"});
  Gen_JobSubType.hasMany(GL_JobInvoice, { foreignKey: "ActualSubTypeId"});
  Gen_ChargesTariff.belongsTo(Gen_JobSubType, { foreignKey: "JobSubTypeId"});
  Gen_JobSubType.hasMany(Gen_ChargesTariff, { foreignKey: "JobSubTypeId"});
  Gen_DetentionTariff.belongsTo(Gen_JobSubType, { foreignKey: "JobSubTypeId"});
  Gen_JobSubType.hasMany(Gen_DetentionTariff, { foreignKey: "JobSubTypeId"});
  Gen_MileStone.belongsTo(Gen_JobSubType, { foreignKey: "SubTypeId"});
  Gen_JobSubType.hasMany(Gen_MileStone, { foreignKey: "SubTypeId"});
  Gen_Parties_Exception.belongsTo(Gen_JobSubType, { foreignKey: "JobSubTypeId"});
  Gen_JobSubType.hasMany(Gen_Parties_Exception, { foreignKey: "JobSubTypeId"});
  Gen_Port_Exception.belongsTo(Gen_JobSubType, { foreignKey: "JobSubTypeId"});
  Gen_JobSubType.hasMany(Gen_Port_Exception, { foreignKey: "JobSubTypeId"});
  SExp_BookingRequest.belongsTo(Gen_JobSubType, { foreignKey: "SubTypeId"});
  Gen_JobSubType.hasMany(SExp_BookingRequest, { foreignKey: "SubTypeId"});
  GL_AccountIntegration_Charges.belongsTo(Gen_JobType, { foreignKey: "JobTypeId"});
  Gen_JobType.hasMany(GL_AccountIntegration_Charges, { foreignKey: "JobTypeId"});
  GL_AccountIntegration_Charges_Log.belongsTo(Gen_JobType, { foreignKey: "JobTypeId"});
  Gen_JobType.hasMany(GL_AccountIntegration_Charges_Log, { foreignKey: "JobTypeId"});
  GL_AccountIntegration_Common.belongsTo(Gen_JobType, { foreignKey: "JobTypeId"});
  Gen_JobType.hasMany(GL_AccountIntegration_Common, { foreignKey: "JobTypeId"});
  GL_AccountIntegration_Common_Log.belongsTo(Gen_JobType, { foreignKey: "JobTypeId"});
  Gen_JobType.hasMany(GL_AccountIntegration_Common_Log, { foreignKey: "JobTypeId"});
  Gen_ChargesTariff.belongsTo(Gen_JobType, { foreignKey: "JobTypeId"});
  Gen_JobType.hasMany(Gen_ChargesTariff, { foreignKey: "JobTypeId"});
  Gen_MileStone.belongsTo(Gen_JobType, { foreignKey: "JobTypeId"});
  Gen_JobType.hasMany(Gen_MileStone, { foreignKey: "JobTypeId"});
  Gen_MileStone_Detail.belongsTo(Gen_JobType, { foreignKey: "JobTypeId"});
  Gen_JobType.hasMany(Gen_MileStone_Detail, { foreignKey: "JobTypeId"});
  SExp_BookingRequest.belongsTo(Gen_JobType, { foreignKey: "JobTypeId"});
  Gen_JobType.hasMany(SExp_BookingRequest, { foreignKey: "JobTypeId"});
  Gen_LCLStorageTariff_DG.belongsTo(Gen_LCLStorageTariff, { foreignKey: "LCLStorageTariffId"});
  Gen_LCLStorageTariff.hasMany(Gen_LCLStorageTariff_DG, { foreignKey: "LCLStorageTariffId"});
  Gen_LCLStorageTariff_General.belongsTo(Gen_LCLStorageTariff, { foreignKey: "LCLStorageTariffId"});
  Gen_LCLStorageTariff.hasMany(Gen_LCLStorageTariff_General, { foreignKey: "LCLStorageTariffId"});
  SExp_SeaExportJob_BLReleaseLog.belongsTo(Gen_LetterProcessed, { foreignKey: "LetterProcessedId"});
  Gen_LetterProcessed.hasMany(SExp_SeaExportJob_BLReleaseLog, { foreignKey: "LetterProcessedId"});
  Gen_LetterProcessed.belongsTo(Gen_LetterTemplate, { foreignKey: "LetterTemplateId"});
  Gen_LetterTemplate.hasMany(Gen_LetterProcessed, { foreignKey: "LetterTemplateId"});
  AImp_DeliveryOrder.belongsTo(Gen_LocalCustom, { foreignKey: "LocalCustomId"});
  Gen_LocalCustom.hasMany(AImp_DeliveryOrder, { foreignKey: "LocalCustomId"});
  AImp_ManifestHeader.belongsTo(Gen_LocalCustom, { foreignKey: "LocalCustomId"});
  Gen_LocalCustom.hasMany(AImp_ManifestHeader, { foreignKey: "LocalCustomId"});
  Gen_ManifestHeader.belongsTo(Gen_LocalCustom, { foreignKey: "LocalCustomId"});
  Gen_LocalCustom.hasMany(Gen_ManifestHeader, { foreignKey: "LocalCustomId"});
  SExp_LoadingProgram.belongsTo(Gen_LocalCustom, { foreignKey: "LocalCustomId"});
  Gen_LocalCustom.hasMany(SExp_LoadingProgram, { foreignKey: "LocalCustomId"});
  SImp_DeliveryOrder.belongsTo(Gen_LocalCustom, { foreignKey: "LocalCustomId"});
  Gen_LocalCustom.hasMany(SImp_DeliveryOrder, { foreignKey: "LocalCustomId"});
  Gen_SubCompanies.belongsTo(Gen_Localization, { foreignKey: "LocalizationId"});
  Gen_Localization.hasMany(Gen_SubCompanies, { foreignKey: "LocalizationId"});
  AExp_AirExportJob.belongsTo(Gen_ManifestHeader, { foreignKey: "ManifestHeaderId"});
  Gen_ManifestHeader.hasMany(AExp_AirExportJob, { foreignKey: "ManifestHeaderId"});
  CTrk_ContainerCycle.belongsTo(Gen_ManifestHeader, { foreignKey: "ManifestHeaderId"});
  Gen_ManifestHeader.hasMany(CTrk_ContainerCycle, { foreignKey: "ManifestHeaderId"});
  CVHM_GuaranteeFillingContainer.belongsTo(Gen_ManifestHeader, { foreignKey: "ManifestHeaderId"});
  Gen_ManifestHeader.hasMany(CVHM_GuaranteeFillingContainer, { foreignKey: "ManifestHeaderId"});
  GL_TerminalInvoice.belongsTo(Gen_ManifestHeader, { foreignKey: "ManifestId"});
  Gen_ManifestHeader.hasMany(GL_TerminalInvoice, { foreignKey: "ManifestId"});
  Gen_LetterProcessed.belongsTo(Gen_ManifestHeader, { foreignKey: "ManifestHeaderId"});
  Gen_ManifestHeader.hasMany(Gen_LetterProcessed, { foreignKey: "ManifestHeaderId"});
  Gen_MileStone_Detail.belongsTo(Gen_MileStone, { foreignKey: "MileStoneId"});
  Gen_MileStone.hasMany(Gen_MileStone_Detail, { foreignKey: "MileStoneId"});
  Gen_Parties_CommonDetail.belongsTo(Gen_NonCommercialDelivery, { foreignKey: "DeliveryNCId"});
  Gen_NonCommercialDelivery.hasMany(Gen_Parties_CommonDetail, { foreignKey: "DeliveryNCId"});
  Gen_Parties_CommonDetail.belongsTo(Gen_NonCommercialPickup, { foreignKey: "PickupNCId"});
  Gen_NonCommercialPickup.hasMany(Gen_Parties_CommonDetail, { foreignKey: "PickupNCId"});
  Gen_Parties_Notification.belongsTo(Gen_Notification, { foreignKey: "NotificationId"});
  Gen_Notification.hasMany(Gen_Parties_Notification, { foreignKey: "NotificationId"});
  GL_AccountIntegration_Charges.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(GL_AccountIntegration_Charges, { foreignKey: "OperationTypeId"});
  GL_AccountIntegration_Charges_Log.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(GL_AccountIntegration_Charges_Log, { foreignKey: "OperationTypeId"});
  GL_AccountIntegration_Common.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(GL_AccountIntegration_Common, { foreignKey: "OperationTypeId"});
  GL_AccountIntegration_Common_Log.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(GL_AccountIntegration_Common_Log, { foreignKey: "OperationTypeId"});
  GL_AccountIntegration_PartyParent.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(GL_AccountIntegration_PartyParent, { foreignKey: "OperationTypeId"});
  GL_AccountIntegration_PartyParent_Log.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(GL_AccountIntegration_PartyParent_Log, { foreignKey: "OperationTypeId"});
  GL_JobPayment.belongsTo(Gen_OperationType, { foreignKey: "crtOperationTypeId"});
  Gen_OperationType.hasMany(GL_JobPayment, { foreignKey: "crtOperationTypeId"});
  GL_JobPaymentRequisition.belongsTo(Gen_OperationType, { foreignKey: "crtOperationTypeId"});
  Gen_OperationType.hasMany(GL_JobPaymentRequisition, { foreignKey: "crtOperationTypeId"});
  GL_JobReceipt.belongsTo(Gen_OperationType, { foreignKey: "crtOperationTypeId"});
  Gen_OperationType.hasMany(GL_JobReceipt, { foreignKey: "crtOperationTypeId"});
  GL_JobSecurityRefundRequisition.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(GL_JobSecurityRefundRequisition, { foreignKey: "OperationTypeId"});
  GL_PrincipleInvoice_Charges.belongsTo(Gen_OperationType, { foreignKey: "dOperationTypeId"});
  Gen_OperationType.hasMany(GL_PrincipleInvoice_Charges, { foreignKey: "dOperationTypeId"});
  Gen_ChargesTariff.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(Gen_ChargesTariff, { foreignKey: "OperationTypeId"});
  Gen_DetentionTariff.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(Gen_DetentionTariff, { foreignKey: "OperationTypeId"});
  Gen_EDIProcessed.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(Gen_EDIProcessed, { foreignKey: "OperationTypeId"});
  Gen_LetterProcessed.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(Gen_LetterProcessed, { foreignKey: "OperationTypeId"});
  Gen_LetterTemplate.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(Gen_LetterTemplate, { foreignKey: "OperationTypeId"});
  Gen_MileStone.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(Gen_MileStone, { foreignKey: "OperationTypeId"});
  Gen_MileStone_Detail.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(Gen_MileStone_Detail, { foreignKey: "OperationTypeId"});
  Gen_Parties_Exception.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(Gen_Parties_Exception, { foreignKey: "OperationTypeId"});
  Gen_Parties_Notification.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(Gen_Parties_Notification, { foreignKey: "OperationTypeId"});
  Gen_Port_Exception.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(Gen_Port_Exception, { foreignKey: "OperationTypeId"});
  Gen_Quotation.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(Gen_Quotation, { foreignKey: "OperationTypeId"});
  Gen_SequenceCustomized.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(Gen_SequenceCustomized, { foreignKey: "OperationTypeId"});
  Log_Job.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(Log_Job, { foreignKey: "OperationTypeId"});
  SExp_BookingRequest.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(SExp_BookingRequest, { foreignKey: "OperationTypeId"});
  WMS_CargoDEStuffing.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(WMS_CargoDEStuffing, { foreignKey: "OperationTypeId"});
  WMS_CargoDEStuffing_Detail.belongsTo(Gen_OperationType, { foreignKey: "JobTypeId"});
  Gen_OperationType.hasMany(WMS_CargoDEStuffing_Detail, { foreignKey: "JobTypeId"});
  WMS_CargoStuffing.belongsTo(Gen_OperationType, { foreignKey: "JobTypeId"});
  Gen_OperationType.hasMany(WMS_CargoStuffing, { foreignKey: "JobTypeId"});
  WMS_Delivery.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(WMS_Delivery, { foreignKey: "OperationTypeId"});
  WMS_GRN.belongsTo(Gen_OperationType, { foreignKey: "OperationTypeId"});
  Gen_OperationType.hasMany(WMS_GRN, { foreignKey: "OperationTypeId"});
  Gen_Parties.belongsTo(Gen_OverseasAgentNetwork, { foreignKey: "OverseasAgentNetworkId"});
  Gen_OverseasAgentNetwork.hasMany(Gen_Parties, { foreignKey: "OverseasAgentNetworkId"});
  Gen_PEDIMapping.belongsTo(Gen_PEDIMappingType, { foreignKey: "MappingTypeId"});
  Gen_PEDIMappingType.hasMany(Gen_PEDIMapping, { foreignKey: "MappingTypeId"});
  AExp_AirExportJob.belongsTo(Gen_Parties, { foreignKey: "ClientId"});
  Gen_Parties.hasMany(AExp_AirExportJob, { foreignKey: "ClientId"});
  AExp_AirExportJob.belongsTo(Gen_Parties, { foreignKey: "AirLineId"});
  Gen_Parties.hasMany(AExp_AirExportJob, { foreignKey: "AirLineId"});
  AExp_AirExportJob.belongsTo(Gen_Parties, { foreignKey: "APOT1AirLineId"});
  Gen_Parties.hasMany(AExp_AirExportJob, { foreignKey: "APOT1AirLineId"});
  AExp_AirExportJob.belongsTo(Gen_Parties, { foreignKey: "APOTAirLineId"});
  Gen_Parties.hasMany(AExp_AirExportJob, { foreignKey: "APOTAirLineId"});
  AExp_AirExportJob.belongsTo(Gen_Parties, { foreignKey: "BuyerId"});
  Gen_Parties.hasMany(AExp_AirExportJob, { foreignKey: "BuyerId"});
  AExp_AirExportJob.belongsTo(Gen_Parties, { foreignKey: "ConsigneeId"});
  Gen_Parties.hasMany(AExp_AirExportJob, { foreignKey: "ConsigneeId"});
  AExp_AirExportJob.belongsTo(Gen_Parties, { foreignKey: "CustomClearanceId"});
  Gen_Parties.hasMany(AExp_AirExportJob, { foreignKey: "CustomClearanceId"});
  AExp_AirExportJob.belongsTo(Gen_Parties, { foreignKey: "ForwarderId"});
  Gen_Parties.hasMany(AExp_AirExportJob, { foreignKey: "ForwarderId"});
  AExp_AirExportJob.belongsTo(Gen_Parties, { foreignKey: "LocalVendorId"});
  Gen_Parties.hasMany(AExp_AirExportJob, { foreignKey: "LocalVendorId"});
  AExp_AirExportJob.belongsTo(Gen_Parties, { foreignKey: "NotifyParty1Id"});
  Gen_Parties.hasMany(AExp_AirExportJob, { foreignKey: "NotifyParty1Id"});
  AExp_AirExportJob.belongsTo(Gen_Parties, { foreignKey: "NotifyParty2Id"});
  Gen_Parties.hasMany(AExp_AirExportJob, { foreignKey: "NotifyParty2Id"});
  AExp_AirExportJob.belongsTo(Gen_Parties, { foreignKey: "OverseasAgentId"});
  Gen_Parties.hasMany(AExp_AirExportJob, { foreignKey: "OverseasAgentId"});
  AExp_AirExportJob.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(AExp_AirExportJob, { foreignKey: "ShipperId"});
  AExp_AirExportJob.belongsTo(Gen_Parties, { foreignKey: "TransporterId"});
  Gen_Parties.hasMany(AExp_AirExportJob, { foreignKey: "TransporterId"});
  AExp_AirExportJob_ChargesPayb.belongsTo(Gen_Parties, { foreignKey: "VendorId"});
  Gen_Parties.hasMany(AExp_AirExportJob_ChargesPayb, { foreignKey: "VendorId"});
  AExp_AirExportJob_ChargesPayb_History.belongsTo(Gen_Parties, { foreignKey: "VendorId"});
  Gen_Parties.hasMany(AExp_AirExportJob_ChargesPayb_History, { foreignKey: "VendorId"});
  AExp_AirExportJob_ChargesRecv.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(AExp_AirExportJob_ChargesRecv, { foreignKey: "CustomerId"});
  AExp_AirExportJob_ChargesRecv_History.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(AExp_AirExportJob_ChargesRecv_History, { foreignKey: "CustomerId"});
  AExp_AirExportJob_LastMilestone.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(AExp_AirExportJob_LastMilestone, { foreignKey: "CustomerId"});
  AExp_AirwayBillStock.belongsTo(Gen_Parties, { foreignKey: "AirLineId"});
  Gen_Parties.hasMany(AExp_AirwayBillStock, { foreignKey: "AirLineId"});
  AExp_AirwayBillStock.belongsTo(Gen_Parties, { foreignKey: "LocalVendorId"});
  Gen_Parties.hasMany(AExp_AirwayBillStock, { foreignKey: "LocalVendorId"});
  AExp_AirwayBillStock_Detail.belongsTo(Gen_Parties, { foreignKey: "ClientId"});
  Gen_Parties.hasMany(AExp_AirwayBillStock_Detail, { foreignKey: "ClientId"});
  AExp_BL.belongsTo(Gen_Parties, { foreignKey: "AirLineId"});
  Gen_Parties.hasMany(AExp_BL, { foreignKey: "AirLineId"});
  AExp_BL.belongsTo(Gen_Parties, { foreignKey: "ConsigneeId"});
  Gen_Parties.hasMany(AExp_BL, { foreignKey: "ConsigneeId"});
  AExp_BL.belongsTo(Gen_Parties, { foreignKey: "DeliveryAgentId"});
  Gen_Parties.hasMany(AExp_BL, { foreignKey: "DeliveryAgentId"});
  AExp_BL.belongsTo(Gen_Parties, { foreignKey: "NotifyParty1Id"});
  Gen_Parties.hasMany(AExp_BL, { foreignKey: "NotifyParty1Id"});
  AExp_BL.belongsTo(Gen_Parties, { foreignKey: "NotifyParty2Id"});
  Gen_Parties.hasMany(AExp_BL, { foreignKey: "NotifyParty2Id"});
  AExp_BL.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(AExp_BL, { foreignKey: "ShipperId"});
  AExp_BL_History.belongsTo(Gen_Parties, { foreignKey: "AirLineId"});
  Gen_Parties.hasMany(AExp_BL_History, { foreignKey: "AirLineId"});
  AExp_BL_History.belongsTo(Gen_Parties, { foreignKey: "ConsigneeId"});
  Gen_Parties.hasMany(AExp_BL_History, { foreignKey: "ConsigneeId"});
  AExp_BL_History.belongsTo(Gen_Parties, { foreignKey: "DeliveryAgentId"});
  Gen_Parties.hasMany(AExp_BL_History, { foreignKey: "DeliveryAgentId"});
  AExp_BL_History.belongsTo(Gen_Parties, { foreignKey: "NotifyParty1Id"});
  Gen_Parties.hasMany(AExp_BL_History, { foreignKey: "NotifyParty1Id"});
  AExp_BL_History.belongsTo(Gen_Parties, { foreignKey: "NotifyParty2Id"});
  Gen_Parties.hasMany(AExp_BL_History, { foreignKey: "NotifyParty2Id"});
  AExp_BL_History.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(AExp_BL_History, { foreignKey: "ShipperId"});
  AImp_AirImportJob.belongsTo(Gen_Parties, { foreignKey: "AirLineId"});
  Gen_Parties.hasMany(AImp_AirImportJob, { foreignKey: "AirLineId"});
  AImp_AirImportJob.belongsTo(Gen_Parties, { foreignKey: "BuyerId"});
  Gen_Parties.hasMany(AImp_AirImportJob, { foreignKey: "BuyerId"});
  AImp_AirImportJob.belongsTo(Gen_Parties, { foreignKey: "ClientId"});
  Gen_Parties.hasMany(AImp_AirImportJob, { foreignKey: "ClientId"});
  AImp_AirImportJob.belongsTo(Gen_Parties, { foreignKey: "ConsigneeId"});
  Gen_Parties.hasMany(AImp_AirImportJob, { foreignKey: "ConsigneeId"});
  AImp_AirImportJob.belongsTo(Gen_Parties, { foreignKey: "CustomClearanceId"});
  Gen_Parties.hasMany(AImp_AirImportJob, { foreignKey: "CustomClearanceId"});
  AImp_AirImportJob.belongsTo(Gen_Parties, { foreignKey: "ForwarderId"});
  Gen_Parties.hasMany(AImp_AirImportJob, { foreignKey: "ForwarderId"});
  AImp_AirImportJob.belongsTo(Gen_Parties, { foreignKey: "LocalVendorId"});
  Gen_Parties.hasMany(AImp_AirImportJob, { foreignKey: "LocalVendorId"});
  AImp_AirImportJob.belongsTo(Gen_Parties, { foreignKey: "NotifyParty1Id"});
  Gen_Parties.hasMany(AImp_AirImportJob, { foreignKey: "NotifyParty1Id"});
  AImp_AirImportJob.belongsTo(Gen_Parties, { foreignKey: "NotifyParty2Id"});
  Gen_Parties.hasMany(AImp_AirImportJob, { foreignKey: "NotifyParty2Id"});
  AImp_AirImportJob.belongsTo(Gen_Parties, { foreignKey: "OverseasAgentId"});
  Gen_Parties.hasMany(AImp_AirImportJob, { foreignKey: "OverseasAgentId"});
  AImp_AirImportJob.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(AImp_AirImportJob, { foreignKey: "ShipperId"});
  AImp_AirImportJob.belongsTo(Gen_Parties, { foreignKey: "TransporterId"});
  Gen_Parties.hasMany(AImp_AirImportJob, { foreignKey: "TransporterId"});
  AImp_AirImportJob_BL.belongsTo(Gen_Parties, { foreignKey: "AirLineId"});
  Gen_Parties.hasMany(AImp_AirImportJob_BL, { foreignKey: "AirLineId"});
  AImp_AirImportJob_BL.belongsTo(Gen_Parties, { foreignKey: "ConsigneeId"});
  Gen_Parties.hasMany(AImp_AirImportJob_BL, { foreignKey: "ConsigneeId"});
  AImp_AirImportJob_BL.belongsTo(Gen_Parties, { foreignKey: "DeliveryAgentId"});
  Gen_Parties.hasMany(AImp_AirImportJob_BL, { foreignKey: "DeliveryAgentId"});
  AImp_AirImportJob_BL.belongsTo(Gen_Parties, { foreignKey: "NotifyParty1Id"});
  Gen_Parties.hasMany(AImp_AirImportJob_BL, { foreignKey: "NotifyParty1Id"});
  AImp_AirImportJob_BL.belongsTo(Gen_Parties, { foreignKey: "NotifyParty2Id"});
  Gen_Parties.hasMany(AImp_AirImportJob_BL, { foreignKey: "NotifyParty2Id"});
  AImp_AirImportJob_BL.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(AImp_AirImportJob_BL, { foreignKey: "ShipperId"});
  AImp_AirImportJob_ChargesPayb.belongsTo(Gen_Parties, { foreignKey: "VendorId"});
  Gen_Parties.hasMany(AImp_AirImportJob_ChargesPayb, { foreignKey: "VendorId"});
  AImp_AirImportJob_ChargesPayb_History.belongsTo(Gen_Parties, { foreignKey: "VendorId"});
  Gen_Parties.hasMany(AImp_AirImportJob_ChargesPayb_History, { foreignKey: "VendorId"});
  AImp_AirImportJob_ChargesRecv.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(AImp_AirImportJob_ChargesRecv, { foreignKey: "CustomerId"});
  AImp_AirImportJob_ChargesRecv_History.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(AImp_AirImportJob_ChargesRecv_History, { foreignKey: "CustomerId"});
  AImp_AirImportJob_LastMilestone.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(AImp_AirImportJob_LastMilestone, { foreignKey: "CustomerId"});
  AImp_AirImportJob__LastMilestone.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(AImp_AirImportJob__LastMilestone, { foreignKey: "CustomerId"});
  AImp_DeliveryOrder.belongsTo(Gen_Parties, { foreignKey: "ClearingAgentId"});
  Gen_Parties.hasMany(AImp_DeliveryOrder, { foreignKey: "ClearingAgentId"});
  AImp_ManifestHeader.belongsTo(Gen_Parties, { foreignKey: "AirLineId"});
  Gen_Parties.hasMany(AImp_ManifestHeader, { foreignKey: "AirLineId"});
  CRM_Activity.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(CRM_Activity, { foreignKey: "CustomerId"});
  CRM_Opportunity.belongsTo(Gen_Parties, { foreignKey: "LineAgentId"});
  Gen_Parties.hasMany(CRM_Opportunity, { foreignKey: "LineAgentId"});
  CRM_Planning.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(CRM_Planning, { foreignKey: "CustomerId"});
  CTrk_Container.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(CTrk_Container, { foreignKey: "PrincipalId"});
  CTrk_ContainerCycle.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(CTrk_ContainerCycle, { foreignKey: "PrincipalId"});
  CVHM_GuaranteeFilling.belongsTo(Gen_Parties, { foreignKey: "ShippingLineID"});
  Gen_Parties.hasMany(CVHM_GuaranteeFilling, { foreignKey: "ShippingLineID"});
  DEPO_Activity_PaymentMode.belongsTo(Gen_Parties, { foreignKey: "LineId"});
  Gen_Parties.hasMany(DEPO_Activity_PaymentMode, { foreignKey: "LineId"});
  DEPO_ContainerActivity.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(DEPO_ContainerActivity, { foreignKey: "PartyId"});
  DEPO_ContainerActivity.belongsTo(Gen_Parties, { foreignKey: "CashClientId"});
  Gen_Parties.hasMany(DEPO_ContainerActivity, { foreignKey: "CashClientId"});
  DEPO_ContainerActivity.belongsTo(Gen_Parties, { foreignKey: "ClearingAgentId"});
  Gen_Parties.hasMany(DEPO_ContainerActivity, { foreignKey: "ClearingAgentId"});
  DEPO_ContainerActivity.belongsTo(Gen_Parties, { foreignKey: "CMClientID"});
  Gen_Parties.hasMany(DEPO_ContainerActivity, { foreignKey: "CMClientID"});
  DEPO_ContainerActivity.belongsTo(Gen_Parties, { foreignKey: "CNeeId"});
  Gen_Parties.hasMany(DEPO_ContainerActivity, { foreignKey: "CNeeId"});
  DEPO_ContainerActivity.belongsTo(Gen_Parties, { foreignKey: "ForwarderId"});
  Gen_Parties.hasMany(DEPO_ContainerActivity, { foreignKey: "ForwarderId"});
  DEPO_ContainerActivity.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(DEPO_ContainerActivity, { foreignKey: "ShipperId"});
  DEPO_ContainerActivity.belongsTo(Gen_Parties, { foreignKey: "TransporterId"});
  Gen_Parties.hasMany(DEPO_ContainerActivity, { foreignKey: "TransporterId"});
  DEPO_ContainerHold.belongsTo(Gen_Parties, { foreignKey: "LineId"});
  Gen_Parties.hasMany(DEPO_ContainerHold, { foreignKey: "LineId"});
  DEPO_LinesTariff.belongsTo(Gen_Parties, { foreignKey: "LineID"});
  Gen_Parties.hasMany(DEPO_LinesTariff, { foreignKey: "LineID"});
  DEPO_Receipt.belongsTo(Gen_Parties, { foreignKey: "CashClientId"});
  Gen_Parties.hasMany(DEPO_Receipt, { foreignKey: "CashClientId"});
  DEPO_Receipt.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(DEPO_Receipt, { foreignKey: "PartyId"});
  DEPO_SubLine.belongsTo(Gen_Parties, { foreignKey: "LineId"});
  Gen_Parties.hasMany(DEPO_SubLine, { foreignKey: "LineId"});
  GL_AgentInvoice.belongsTo(Gen_Parties, { foreignKey: "OverseasAgentId"});
  Gen_Parties.hasMany(GL_AgentInvoice, { foreignKey: "OverseasAgentId"});
  GL_AgentInvoice.belongsTo(Gen_Parties, { foreignKey: "CarrierId"});
  Gen_Parties.hasMany(GL_AgentInvoice, { foreignKey: "CarrierId"});
  GL_AgentInvoiceOpening.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(GL_AgentInvoiceOpening, { foreignKey: "PartyId"});
  GL_AgentPaymentRequisition.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(GL_AgentPaymentRequisition, { foreignKey: "PartyId"});
  GL_AgentReceiptPayment.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(GL_AgentReceiptPayment, { foreignKey: "PartyId"});
  GL_JobBill.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(GL_JobBill, { foreignKey: "PartyId"});
  GL_JobBill.belongsTo(Gen_Parties, { foreignKey: "CarrierId"});
  Gen_Parties.hasMany(GL_JobBill, { foreignKey: "CarrierId"});
  GL_JobBillOpening.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(GL_JobBillOpening, { foreignKey: "PartyId"});
  GL_JobBill_Charges.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(GL_JobBill_Charges, { foreignKey: "PrincipalId"});
  GL_JobDirectExpRev.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(GL_JobDirectExpRev, { foreignKey: "PartyId"});
  GL_JobInvoice.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(GL_JobInvoice, { foreignKey: "PartyId"});
  GL_JobInvoice.belongsTo(Gen_Parties, { foreignKey: "BillingPartyId"});
  Gen_Parties.hasMany(GL_JobInvoice, { foreignKey: "BillingPartyId"});
  GL_JobInvoice.belongsTo(Gen_Parties, { foreignKey: "CarrierId"});
  Gen_Parties.hasMany(GL_JobInvoice, { foreignKey: "CarrierId"});
  GL_JobInvoice.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(GL_JobInvoice, { foreignKey: "PrincipalId"});
  GL_JobInvoiceDispute.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(GL_JobInvoiceDispute, { foreignKey: "PartyId"});
  GL_JobInvoiceOpening.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(GL_JobInvoiceOpening, { foreignKey: "PartyId"});
  GL_JobInvoice_PaidByClient.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(GL_JobInvoice_PaidByClient, { foreignKey: "PartyId"});
  GL_JobOnlineReceipt.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(GL_JobOnlineReceipt, { foreignKey: "CustomerId"});
  GL_JobOnlineReceiptACHAddress.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(GL_JobOnlineReceiptACHAddress, { foreignKey: "CustomerId"});
  GL_JobOnlineReceiptBillingAddress.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(GL_JobOnlineReceiptBillingAddress, { foreignKey: "CustomerId"});
  GL_JobPayment.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(GL_JobPayment, { foreignKey: "PartyId"});
  GL_JobPaymentRequisition.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(GL_JobPaymentRequisition, { foreignKey: "PartyId"});
  GL_JobReceipt.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(GL_JobReceipt, { foreignKey: "PartyId"});
  GL_JobSettlement.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(GL_JobSettlement, { foreignKey: "PartyId"});
  GL_PrincipalManualSOA.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(GL_PrincipalManualSOA, { foreignKey: "PrincipalId"});
  GL_PrincipalReceiptPayment.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(GL_PrincipalReceiptPayment, { foreignKey: "PartyId"});
  GL_PrincipleInvoiceOpening.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(GL_PrincipleInvoiceOpening, { foreignKey: "PartyId"});
  GL_RunningDetention.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(GL_RunningDetention, { foreignKey: "PartyId"});
  GL_RunningDetention.belongsTo(Gen_Parties, { foreignKey: "BillingPartyId"});
  Gen_Parties.hasMany(GL_RunningDetention, { foreignKey: "BillingPartyId"});
  GL_RunningDetention.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(GL_RunningDetention, { foreignKey: "PrincipalId"});
  GL_TerminalInvoice.belongsTo(Gen_Parties, { foreignKey: "TerminalId"});
  Gen_Parties.hasMany(GL_TerminalInvoice, { foreignKey: "TerminalId"});
  GL_UnAccruedEquipmentInvoice.belongsTo(Gen_Parties, { foreignKey: "ClientId"});
  Gen_Parties.hasMany(GL_UnAccruedEquipmentInvoice, { foreignKey: "ClientId"});
  GL_UnAccruedEquipmentInvoice.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(GL_UnAccruedEquipmentInvoice, { foreignKey: "PrincipalId"});
  Gen_BLTemplate.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(Gen_BLTemplate, { foreignKey: "PrincipalId"});
  Gen_CARF.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(Gen_CARF, { foreignKey: "PartyId"});
  Gen_Charges.belongsTo(Gen_Parties, { foreignKey: "CarrierId"});
  Gen_Parties.hasMany(Gen_Charges, { foreignKey: "CarrierId"});
  Gen_Charges.belongsTo(Gen_Parties, { foreignKey: "CustVendId"});
  Gen_Parties.hasMany(Gen_Charges, { foreignKey: "CustVendId"});
  Gen_ChargesTariff.belongsTo(Gen_Parties, { foreignKey: "AirLineId"});
  Gen_Parties.hasMany(Gen_ChargesTariff, { foreignKey: "AirLineId"});
  Gen_ChargesTariff.belongsTo(Gen_Parties, { foreignKey: "ClientId"});
  Gen_Parties.hasMany(Gen_ChargesTariff, { foreignKey: "ClientId"});
  Gen_ChargesTariff.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(Gen_ChargesTariff, { foreignKey: "PrincipalId"});
  Gen_ChargesTariff_AirDetail.belongsTo(Gen_Parties, { foreignKey: "AirLineId"});
  Gen_Parties.hasMany(Gen_ChargesTariff_AirDetail, { foreignKey: "AirLineId"});
  Gen_ChargesTariff_Detail.belongsTo(Gen_Parties, { foreignKey: "ShippingLineId"});
  Gen_Parties.hasMany(Gen_ChargesTariff_Detail, { foreignKey: "ShippingLineId"});
  Gen_Commodity.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(Gen_Commodity, { foreignKey: "CustomerId"});
  Gen_ContainerDepot.belongsTo(Gen_Parties, { foreignKey: "StevedoreId"});
  Gen_Parties.hasMany(Gen_ContainerDepot, { foreignKey: "StevedoreId"});
  Gen_DetentionTariff.belongsTo(Gen_Parties, { foreignKey: "ClientId"});
  Gen_Parties.hasMany(Gen_DetentionTariff, { foreignKey: "ClientId"});
  Gen_DetentionTariff.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(Gen_DetentionTariff, { foreignKey: "PrincipalId"});
  Gen_EDIProcessed.belongsTo(Gen_Parties, { foreignKey: "ClientId"});
  Gen_Parties.hasMany(Gen_EDIProcessed, { foreignKey: "ClientId"});
  Gen_EDIProcessed.belongsTo(Gen_Parties, { foreignKey: "ConsigneeId"});
  Gen_Parties.hasMany(Gen_EDIProcessed, { foreignKey: "ConsigneeId"});
  Gen_EDIProcessed.belongsTo(Gen_Parties, { foreignKey: "ForwarderId"});
  Gen_Parties.hasMany(Gen_EDIProcessed, { foreignKey: "ForwarderId"});
  Gen_EDIProcessed.belongsTo(Gen_Parties, { foreignKey: "NotifyParty1Id"});
  Gen_Parties.hasMany(Gen_EDIProcessed, { foreignKey: "NotifyParty1Id"});
  Gen_EDIProcessed.belongsTo(Gen_Parties, { foreignKey: "NotifyParty2Id"});
  Gen_Parties.hasMany(Gen_EDIProcessed, { foreignKey: "NotifyParty2Id"});
  Gen_EDIProcessed.belongsTo(Gen_Parties, { foreignKey: "OverseasAgentId"});
  Gen_Parties.hasMany(Gen_EDIProcessed, { foreignKey: "OverseasAgentId"});
  Gen_EDIProcessed.belongsTo(Gen_Parties, { foreignKey: "PortOfTranshipment1AgentId"});
  Gen_Parties.hasMany(Gen_EDIProcessed, { foreignKey: "PortOfTranshipment1AgentId"});
  Gen_EDIProcessed.belongsTo(Gen_Parties, { foreignKey: "PortOfTranshipment2AgentId"});
  Gen_Parties.hasMany(Gen_EDIProcessed, { foreignKey: "PortOfTranshipment2AgentId"});
  Gen_EDIProcessed.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(Gen_EDIProcessed, { foreignKey: "PrincipalId"});
  Gen_EDIProcessed.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(Gen_EDIProcessed, { foreignKey: "ShipperId"});
  Gen_EDIProcessed_Container.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(Gen_EDIProcessed_Container, { foreignKey: "PrincipalId"});
  Gen_Flight_Schedule.belongsTo(Gen_Parties, { foreignKey: "AirLineId"});
  Gen_Parties.hasMany(Gen_Flight_Schedule, { foreignKey: "AirLineId"});
  Gen_ISoftParty.belongsTo(Gen_Parties, { foreignKey: "CSULPartyId"});
  Gen_Parties.hasMany(Gen_ISoftParty, { foreignKey: "CSULPartyId"});
  Gen_ManifestHeader.belongsTo(Gen_Parties, { foreignKey: "ShippingLineId"});
  Gen_Parties.hasMany(Gen_ManifestHeader, { foreignKey: "ShippingLineId"});
  Gen_PEDIMapping.belongsTo(Gen_Parties, { foreignKey: "ConsigneeId"});
  Gen_Parties.hasMany(Gen_PEDIMapping, { foreignKey: "ConsigneeId"});
  Gen_PEDIMapping.belongsTo(Gen_Parties, { foreignKey: "NotifyPartyId"});
  Gen_Parties.hasMany(Gen_PEDIMapping, { foreignKey: "NotifyPartyId"});
  Gen_PEDIMapping.belongsTo(Gen_Parties, { foreignKey: "OverSeasAgentId"});
  Gen_Parties.hasMany(Gen_PEDIMapping, { foreignKey: "OverSeasAgentId"});
  Gen_PEDIMapping.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(Gen_PEDIMapping, { foreignKey: "PrincipalId"});
  Gen_PEDIMapping.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(Gen_PEDIMapping, { foreignKey: "ShipperId"});
  Gen_Parties.belongsTo(Gen_Parties, { foreignKey: "ParentPartyId"});
  Gen_Parties.hasMany(Gen_Parties, { foreignKey: "ParentPartyId"});
  Gen_PartiesCommitment.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(Gen_PartiesCommitment, { foreignKey: "PartyId"});
  Gen_Parties_Alerts.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(Gen_Parties_Alerts, { foreignKey: "PartyId"});
  Gen_Parties_CommodityDetail.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(Gen_Parties_CommodityDetail, { foreignKey: "PartyId"});
  Gen_Parties_CommonDetail.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(Gen_Parties_CommonDetail, { foreignKey: "PartyId"});
  Gen_Parties_Contacts.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(Gen_Parties_Contacts, { foreignKey: "PartyId"});
  Gen_Parties_CostCenterRight.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(Gen_Parties_CostCenterRight, { foreignKey: "PartyId"});
  Gen_Parties_Exception.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(Gen_Parties_Exception, { foreignKey: "PartyId"});
  Gen_Parties_InsuranceDetail.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(Gen_Parties_InsuranceDetail, { foreignKey: "PartyId"});
  Gen_Parties_Locations.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(Gen_Parties_Locations, { foreignKey: "PartyId"});
  Gen_Parties_Notification.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(Gen_Parties_Notification, { foreignKey: "PartyId"});
  Gen_Parties_SubCompanyRight.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(Gen_Parties_SubCompanyRight, { foreignKey: "PartyId"});
  Gen_Parties_Terminal.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(Gen_Parties_Terminal, { foreignKey: "PartyId"});
  Gen_Port_Exception.belongsTo(Gen_Parties, { foreignKey: "CarrierId"});
  Gen_Parties.hasMany(Gen_Port_Exception, { foreignKey: "CarrierId"});
  Gen_Quotation.belongsTo(Gen_Parties, { foreignKey: "AirLineId"});
  Gen_Parties.hasMany(Gen_Quotation, { foreignKey: "AirLineId"});
  Gen_Quotation.belongsTo(Gen_Parties, { foreignKey: "ClientId"});
  Gen_Parties.hasMany(Gen_Quotation, { foreignKey: "ClientId"});
  Gen_Quotation.belongsTo(Gen_Parties, { foreignKey: "ConsigneeId"});
  Gen_Parties.hasMany(Gen_Quotation, { foreignKey: "ConsigneeId"});
  Gen_Quotation.belongsTo(Gen_Parties, { foreignKey: "CustomClearanceId"});
  Gen_Parties.hasMany(Gen_Quotation, { foreignKey: "CustomClearanceId"});
  Gen_Quotation.belongsTo(Gen_Parties, { foreignKey: "OverseasAgentId"});
  Gen_Parties.hasMany(Gen_Quotation, { foreignKey: "OverseasAgentId"});
  Gen_Quotation.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(Gen_Quotation, { foreignKey: "ShipperId"});
  Gen_Quotation.belongsTo(Gen_Parties, { foreignKey: "ShipingLineId"});
  Gen_Parties.hasMany(Gen_Quotation, { foreignKey: "ShipingLineId"});
  Gen_Quotation.belongsTo(Gen_Parties, { foreignKey: "TransporterId"});
  Gen_Parties.hasMany(Gen_Quotation, { foreignKey: "TransporterId"});
  Gen_Quotation_Detail.belongsTo(Gen_Parties, { foreignKey: "AirLineId"});
  Gen_Parties.hasMany(Gen_Quotation_Detail, { foreignKey: "AirLineId"});
  Gen_Quotation_Detail.belongsTo(Gen_Parties, { foreignKey: "PaybVendorId"});
  Gen_Parties.hasMany(Gen_Quotation_Detail, { foreignKey: "PaybVendorId"});
  Gen_Quotation_Detail.belongsTo(Gen_Parties, { foreignKey: "ShippingLineId"});
  Gen_Parties.hasMany(Gen_Quotation_Detail, { foreignKey: "ShippingLineId"});
  Gen_SeaAccessorialCharge.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(Gen_SeaAccessorialCharge, { foreignKey: "CustomerId"});
  Gen_SeaAccessorialCharge.belongsTo(Gen_Parties, { foreignKey: "ShippingLineId"});
  Gen_Parties.hasMany(Gen_SeaAccessorialCharge, { foreignKey: "ShippingLineId"});
  Gen_SeaInterimRate.belongsTo(Gen_Parties, { foreignKey: "ShippingLineId"});
  Gen_Parties.hasMany(Gen_SeaInterimRate, { foreignKey: "ShippingLineId"});
  Gen_SeaPublishRate.belongsTo(Gen_Parties, { foreignKey: "ShippingLineId"});
  Gen_Parties.hasMany(Gen_SeaPublishRate, { foreignKey: "ShippingLineId"});
  Gen_SecurityFile.belongsTo(Gen_Parties, { foreignKey: "TransporterId"});
  Gen_Parties.hasMany(Gen_SecurityFile, { foreignKey: "TransporterId"});
  Gen_Users.belongsTo(Gen_Parties, { foreignKey: "AgentCodeId"});
  Gen_Parties.hasMany(Gen_Users, { foreignKey: "AgentCodeId"});
  Gen_Users.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(Gen_Users, { foreignKey: "CustomerId"});
  Gen_Users.belongsTo(Gen_Parties, { foreignKey: "PrincipleId"});
  Gen_Parties.hasMany(Gen_Users, { foreignKey: "PrincipleId"});
  Gen_Voyage_ExchRateDetail.belongsTo(Gen_Parties, { foreignKey: "ShippingLineId"});
  Gen_Parties.hasMany(Gen_Voyage_ExchRateDetail, { foreignKey: "ShippingLineId"});
  Gen_Voyage_Terminal.belongsTo(Gen_Parties, { foreignKey: "SlotOperatorPartyId"});
  Gen_Parties.hasMany(Gen_Voyage_Terminal, { foreignKey: "SlotOperatorPartyId"});
  INQ_RateFromVendor.belongsTo(Gen_Parties, { foreignKey: "CarrierId"});
  Gen_Parties.hasMany(INQ_RateFromVendor, { foreignKey: "CarrierId"});
  INQ_RateInquiry.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(INQ_RateInquiry, { foreignKey: "PartyId"});
  INQ_RateToCustomer.belongsTo(Gen_Parties, { foreignKey: "CarrierId"});
  Gen_Parties.hasMany(INQ_RateToCustomer, { foreignKey: "CarrierId"});
  Log_CarrierManifest.belongsTo(Gen_Parties, { foreignKey: "TransporterId"});
  Gen_Parties.hasMany(Log_CarrierManifest, { foreignKey: "TransporterId"});
  Log_DutyCalculation_PODetail.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(Log_DutyCalculation_PODetail, { foreignKey: "PartyId"});
  Log_Job.belongsTo(Gen_Parties, { foreignKey: "AirLineId"});
  Gen_Parties.hasMany(Log_Job, { foreignKey: "AirLineId"});
  Log_Job.belongsTo(Gen_Parties, { foreignKey: "ClearingAgentId"});
  Gen_Parties.hasMany(Log_Job, { foreignKey: "ClearingAgentId"});
  Log_Job.belongsTo(Gen_Parties, { foreignKey: "ConsigneeId"});
  Gen_Parties.hasMany(Log_Job, { foreignKey: "ConsigneeId"});
  Log_Job.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(Log_Job, { foreignKey: "CustomerId"});
  Log_Job.belongsTo(Gen_Parties, { foreignKey: "ForwarderId"});
  Gen_Parties.hasMany(Log_Job, { foreignKey: "ForwarderId"});
  Log_Job.belongsTo(Gen_Parties, { foreignKey: "OverSeasAgentId"});
  Gen_Parties.hasMany(Log_Job, { foreignKey: "OverSeasAgentId"});
  Log_Job.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(Log_Job, { foreignKey: "ShipperId"});
  Log_Job.belongsTo(Gen_Parties, { foreignKey: "ShippingAgentId"});
  Gen_Parties.hasMany(Log_Job, { foreignKey: "ShippingAgentId"});
  Log_Job.belongsTo(Gen_Parties, { foreignKey: "ShippingLineId"});
  Gen_Parties.hasMany(Log_Job, { foreignKey: "ShippingLineId"});
  Log_Job.belongsTo(Gen_Parties, { foreignKey: "TransporterId"});
  Gen_Parties.hasMany(Log_Job, { foreignKey: "TransporterId"});
  Log_JobActivities.belongsTo(Gen_Parties, { foreignKey: "TransporterId"});
  Gen_Parties.hasMany(Log_JobActivities, { foreignKey: "TransporterId"});
  Log_Job_ChargesPayb.belongsTo(Gen_Parties, { foreignKey: "VendorId"});
  Gen_Parties.hasMany(Log_Job_ChargesPayb, { foreignKey: "VendorId"});
  Log_Job_ChargesPayb_History.belongsTo(Gen_Parties, { foreignKey: "VendorId"});
  Gen_Parties.hasMany(Log_Job_ChargesPayb_History, { foreignKey: "VendorId"});
  Log_Job_ChargesRecv.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(Log_Job_ChargesRecv, { foreignKey: "CustomerId"});
  Log_Job_ChargesRecv_History.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(Log_Job_ChargesRecv_History, { foreignKey: "CustomerId"});
  Log_Job_LastMilestone.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(Log_Job_LastMilestone, { foreignKey: "CustomerId"});
  Log_Job_PaidByClient.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(Log_Job_PaidByClient, { foreignKey: "PartyId"});
  Log_VehicleSetup.belongsTo(Gen_Parties, { foreignKey: "TransporterId"});
  Gen_Parties.hasMany(Log_VehicleSetup, { foreignKey: "TransporterId"});
  ReportTemplate_Detail.belongsTo(Gen_Parties, { foreignKey: "PartyId"});
  Gen_Parties.hasMany(ReportTemplate_Detail, { foreignKey: "PartyId"});
  SExp_BL.belongsTo(Gen_Parties, { foreignKey: "ConsigneeId"});
  Gen_Parties.hasMany(SExp_BL, { foreignKey: "ConsigneeId"});
  SExp_BL.belongsTo(Gen_Parties, { foreignKey: "NotifyParty1Id"});
  Gen_Parties.hasMany(SExp_BL, { foreignKey: "NotifyParty1Id"});
  SExp_BL.belongsTo(Gen_Parties, { foreignKey: "NotifyParty2Id"});
  Gen_Parties.hasMany(SExp_BL, { foreignKey: "NotifyParty2Id"});
  SExp_BL.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(SExp_BL, { foreignKey: "ShipperId"});
  SExp_BL_Detail.belongsTo(Gen_Parties, { foreignKey: "DeliveryAgentId"});
  Gen_Parties.hasMany(SExp_BL_Detail, { foreignKey: "DeliveryAgentId"});
  SExp_BL_Detail_History.belongsTo(Gen_Parties, { foreignKey: "DeliveryAgentId"});
  Gen_Parties.hasMany(SExp_BL_Detail_History, { foreignKey: "DeliveryAgentId"});
  SExp_BL_Equipment.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(SExp_BL_Equipment, { foreignKey: "PrincipalId"});
  SExp_BL_Equipment_History.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(SExp_BL_Equipment_History, { foreignKey: "PrincipalId"});
  SExp_BookingConfirmFromCarrier.belongsTo(Gen_Parties, { foreignKey: "CarrierId"});
  Gen_Parties.hasMany(SExp_BookingConfirmFromCarrier, { foreignKey: "CarrierId"});
  SExp_BookingConfirmFromCarrier.belongsTo(Gen_Parties, { foreignKey: "ClientId"});
  Gen_Parties.hasMany(SExp_BookingConfirmFromCarrier, { foreignKey: "ClientId"});
  SExp_BookingRequest.belongsTo(Gen_Parties, { foreignKey: "ClientId"});
  Gen_Parties.hasMany(SExp_BookingRequest, { foreignKey: "ClientId"});
  SExp_BookingRequest.belongsTo(Gen_Parties, { foreignKey: "ConsigneeId"});
  Gen_Parties.hasMany(SExp_BookingRequest, { foreignKey: "ConsigneeId"});
  SExp_BookingRequest.belongsTo(Gen_Parties, { foreignKey: "LocalVendorId"});
  Gen_Parties.hasMany(SExp_BookingRequest, { foreignKey: "LocalVendorId"});
  SExp_BookingRequest.belongsTo(Gen_Parties, { foreignKey: "OverseasAgentId"});
  Gen_Parties.hasMany(SExp_BookingRequest, { foreignKey: "OverseasAgentId"});
  SExp_BookingRequest.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(SExp_BookingRequest, { foreignKey: "ShipperId"});
  SExp_BookingRequest.belongsTo(Gen_Parties, { foreignKey: "ShipingLineId"});
  Gen_Parties.hasMany(SExp_BookingRequest, { foreignKey: "ShipingLineId"});
  SExp_BookingRequest.belongsTo(Gen_Parties, { foreignKey: "ChaChbId"});
  Gen_Parties.hasMany(SExp_BookingRequest, { foreignKey: "ChaChbId"});
  SExp_BookingRequest.belongsTo(Gen_Parties, { foreignKey: "BuyerId"});
  Gen_Parties.hasMany(SExp_BookingRequest, { foreignKey: "BuyerId"});
  SExp_BookingToCarrier.belongsTo(Gen_Parties, { foreignKey: "ConsigneeId"});
  Gen_Parties.hasMany(SExp_BookingToCarrier, { foreignKey: "ConsigneeId"});
  SExp_CRO.belongsTo(Gen_Parties, { foreignKey: "ClientId"});
  Gen_Parties.hasMany(SExp_CRO, { foreignKey: "ClientId"});
  SExp_CRO.belongsTo(Gen_Parties, { foreignKey: "ClearingAgentId"});
  Gen_Parties.hasMany(SExp_CRO, { foreignKey: "ClearingAgentId"});
  SExp_CRO.belongsTo(Gen_Parties, { foreignKey: "OverseasAgentId"});
  Gen_Parties.hasMany(SExp_CRO, { foreignKey: "OverseasAgentId"});
  SExp_CRO.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(SExp_CRO, { foreignKey: "PrincipalId"});
  SExp_CRO.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(SExp_CRO, { foreignKey: "ShipperId"});
  SExp_CRO.belongsTo(Gen_Parties, { foreignKey: "SoldToPartyId"});
  Gen_Parties.hasMany(SExp_CRO, { foreignKey: "SoldToPartyId"});
  SExp_CRO.belongsTo(Gen_Parties, { foreignKey: "TransporterId"});
  Gen_Parties.hasMany(SExp_CRO, { foreignKey: "TransporterId"});
  SExp_DeliveryNote.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(SExp_DeliveryNote, { foreignKey: "CustomerId"});
  SExp_LoadingProgram.belongsTo(Gen_Parties, { foreignKey: "ClearingAgentId"});
  Gen_Parties.hasMany(SExp_LoadingProgram, { foreignKey: "ClearingAgentId"});
  SExp_NOC.belongsTo(Gen_Parties, { foreignKey: "ShippingLineId"});
  Gen_Parties.hasMany(SExp_NOC, { foreignKey: "ShippingLineId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties, { foreignKey: "ClientId"});
  Gen_Parties.hasMany(SExp_SeaExportJob, { foreignKey: "ClientId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties, { foreignKey: "BuyerId"});
  Gen_Parties.hasMany(SExp_SeaExportJob, { foreignKey: "BuyerId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties, { foreignKey: "BuyingHouseId"});
  Gen_Parties.hasMany(SExp_SeaExportJob, { foreignKey: "BuyingHouseId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties, { foreignKey: "ConsigneeId"});
  Gen_Parties.hasMany(SExp_SeaExportJob, { foreignKey: "ConsigneeId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties, { foreignKey: "CustomClearanceId"});
  Gen_Parties.hasMany(SExp_SeaExportJob, { foreignKey: "CustomClearanceId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties, { foreignKey: "ForwarderId"});
  Gen_Parties.hasMany(SExp_SeaExportJob, { foreignKey: "ForwarderId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties, { foreignKey: "LocalAgentId"});
  Gen_Parties.hasMany(SExp_SeaExportJob, { foreignKey: "LocalAgentId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties, { foreignKey: "NotifyParty1Id"});
  Gen_Parties.hasMany(SExp_SeaExportJob, { foreignKey: "NotifyParty1Id"});
  SExp_SeaExportJob.belongsTo(Gen_Parties, { foreignKey: "NotifyParty2Id"});
  Gen_Parties.hasMany(SExp_SeaExportJob, { foreignKey: "NotifyParty2Id"});
  SExp_SeaExportJob.belongsTo(Gen_Parties, { foreignKey: "OverseasAgentId"});
  Gen_Parties.hasMany(SExp_SeaExportJob, { foreignKey: "OverseasAgentId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(SExp_SeaExportJob, { foreignKey: "PrincipalId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(SExp_SeaExportJob, { foreignKey: "ShipperId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties, { foreignKey: "ShippingLineId"});
  Gen_Parties.hasMany(SExp_SeaExportJob, { foreignKey: "ShippingLineId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties, { foreignKey: "TransporterId"});
  Gen_Parties.hasMany(SExp_SeaExportJob, { foreignKey: "TransporterId"});
  SExp_SeaExportJob_ChargesPayb.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(SExp_SeaExportJob_ChargesPayb, { foreignKey: "PrincipalId"});
  SExp_SeaExportJob_ChargesPayb.belongsTo(Gen_Parties, { foreignKey: "VendorId"});
  Gen_Parties.hasMany(SExp_SeaExportJob_ChargesPayb, { foreignKey: "VendorId"});
  SExp_SeaExportJob_ChargesPayb_History.belongsTo(Gen_Parties, { foreignKey: "VendorId"});
  Gen_Parties.hasMany(SExp_SeaExportJob_ChargesPayb_History, { foreignKey: "VendorId"});
  SExp_SeaExportJob_ChargesRecv.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(SExp_SeaExportJob_ChargesRecv, { foreignKey: "CustomerId"});
  SExp_SeaExportJob_ChargesRecv.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(SExp_SeaExportJob_ChargesRecv, { foreignKey: "PrincipalId"});
  SExp_SeaExportJob_ChargesRecv_History.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(SExp_SeaExportJob_ChargesRecv_History, { foreignKey: "CustomerId"});
  SExp_SeaExportJob_Equipment.belongsTo(Gen_Parties, { foreignKey: "dPrincipalId"});
  Gen_Parties.hasMany(SExp_SeaExportJob_Equipment, { foreignKey: "dPrincipalId"});
  SExp_SeaExportJob_LastMilestone.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(SExp_SeaExportJob_LastMilestone, { foreignKey: "CustomerId"});
  SExp_SeaExportJob_Principle.belongsTo(Gen_Parties, { foreignKey: "dPrincipalId"});
  Gen_Parties.hasMany(SExp_SeaExportJob_Principle, { foreignKey: "dPrincipalId"});
  SExp_SeaExportJob_Principle_History.belongsTo(Gen_Parties, { foreignKey: "dPrincipalId"});
  Gen_Parties.hasMany(SExp_SeaExportJob_Principle_History, { foreignKey: "dPrincipalId"});
  SExp_SeaExportJob_Principle_History.belongsTo(Gen_Parties, { foreignKey: "CusVenId"});
  Gen_Parties.hasMany(SExp_SeaExportJob_Principle_History, { foreignKey: "CusVenId"});
  SExp_ShippingInstruction.belongsTo(Gen_Parties, { foreignKey: "ConsigneeId"});
  Gen_Parties.hasMany(SExp_ShippingInstruction, { foreignKey: "ConsigneeId"});
  SExp_ShippingInstruction.belongsTo(Gen_Parties, { foreignKey: "DeliveryAgentId"});
  Gen_Parties.hasMany(SExp_ShippingInstruction, { foreignKey: "DeliveryAgentId"});
  SExp_ShippingInstruction.belongsTo(Gen_Parties, { foreignKey: "NotifyParty1Id"});
  Gen_Parties.hasMany(SExp_ShippingInstruction, { foreignKey: "NotifyParty1Id"});
  SExp_ShippingInstruction.belongsTo(Gen_Parties, { foreignKey: "NotifyParty2Id"});
  Gen_Parties.hasMany(SExp_ShippingInstruction, { foreignKey: "NotifyParty2Id"});
  SExp_ShippingInstruction.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(SExp_ShippingInstruction, { foreignKey: "ShipperId"});
  SExp_StuffingPlan.belongsTo(Gen_Parties, { foreignKey: "OverseasAgentId"});
  Gen_Parties.hasMany(SExp_StuffingPlan, { foreignKey: "OverseasAgentId"});
  SExp_StuffingPlan.belongsTo(Gen_Parties, { foreignKey: "ShippingLineId"});
  Gen_Parties.hasMany(SExp_StuffingPlan, { foreignKey: "ShippingLineId"});
  SExp_SwitchBL.belongsTo(Gen_Parties, { foreignKey: "ConsigneeId"});
  Gen_Parties.hasMany(SExp_SwitchBL, { foreignKey: "ConsigneeId"});
  SExp_SwitchBL.belongsTo(Gen_Parties, { foreignKey: "NotifyParty1Id"});
  Gen_Parties.hasMany(SExp_SwitchBL, { foreignKey: "NotifyParty1Id"});
  SExp_SwitchBL.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(SExp_SwitchBL, { foreignKey: "ShipperId"});
  SExp_SwitchBL_Detail.belongsTo(Gen_Parties, { foreignKey: "DeliveryAgentId"});
  Gen_Parties.hasMany(SExp_SwitchBL_Detail, { foreignKey: "DeliveryAgentId"});
  SExp_SwitchBL_Equipment.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(SExp_SwitchBL_Equipment, { foreignKey: "PrincipalId"});
  SExp_SwitchBL_Equipment_History.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(SExp_SwitchBL_Equipment_History, { foreignKey: "PrincipalId"});
  SImp_BL.belongsTo(Gen_Parties, { foreignKey: "ConsigneeId"});
  Gen_Parties.hasMany(SImp_BL, { foreignKey: "ConsigneeId"});
  SImp_BL.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(SImp_BL, { foreignKey: "ShipperId"});
  SImp_BLAmendment.belongsTo(Gen_Parties, { foreignKey: "CLAgentId"});
  Gen_Parties.hasMany(SImp_BLAmendment, { foreignKey: "CLAgentId"});
  SImp_BL_Detail.belongsTo(Gen_Parties, { foreignKey: "DeliveryAgentId"});
  Gen_Parties.hasMany(SImp_BL_Detail, { foreignKey: "DeliveryAgentId"});
  SImp_BL_Equipment.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(SImp_BL_Equipment, { foreignKey: "PrincipalId"});
  SImp_BL_Equipment_History.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(SImp_BL_Equipment_History, { foreignKey: "PrincipalId"});
  SImp_DeliveryOrder.belongsTo(Gen_Parties, { foreignKey: "ClearingAgentId"});
  Gen_Parties.hasMany(SImp_DeliveryOrder, { foreignKey: "ClearingAgentId"});
  SImp_PreAlert.belongsTo(Gen_Parties, { foreignKey: "OverseasAgentID"});
  Gen_Parties.hasMany(SImp_PreAlert, { foreignKey: "OverseasAgentID"});
  SImp_PreAlert_Container.belongsTo(Gen_Parties, { foreignKey: "PrincipalID"});
  Gen_Parties.hasMany(SImp_PreAlert_Container, { foreignKey: "PrincipalID"});
  SImp_SeaImportJob.belongsTo(Gen_Parties, { foreignKey: "ClientId"});
  Gen_Parties.hasMany(SImp_SeaImportJob, { foreignKey: "ClientId"});
  SImp_SeaImportJob.belongsTo(Gen_Parties, { foreignKey: "BuyerId"});
  Gen_Parties.hasMany(SImp_SeaImportJob, { foreignKey: "BuyerId"});
  SImp_SeaImportJob.belongsTo(Gen_Parties, { foreignKey: "BuyingHouseId"});
  Gen_Parties.hasMany(SImp_SeaImportJob, { foreignKey: "BuyingHouseId"});
  SImp_SeaImportJob.belongsTo(Gen_Parties, { foreignKey: "ConsigneeId"});
  Gen_Parties.hasMany(SImp_SeaImportJob, { foreignKey: "ConsigneeId"});
  SImp_SeaImportJob.belongsTo(Gen_Parties, { foreignKey: "CustomClearanceId"});
  Gen_Parties.hasMany(SImp_SeaImportJob, { foreignKey: "CustomClearanceId"});
  SImp_SeaImportJob.belongsTo(Gen_Parties, { foreignKey: "ForwarderId"});
  Gen_Parties.hasMany(SImp_SeaImportJob, { foreignKey: "ForwarderId"});
  SImp_SeaImportJob.belongsTo(Gen_Parties, { foreignKey: "LocalAgentId"});
  Gen_Parties.hasMany(SImp_SeaImportJob, { foreignKey: "LocalAgentId"});
  SImp_SeaImportJob.belongsTo(Gen_Parties, { foreignKey: "NotifyParty1Id"});
  Gen_Parties.hasMany(SImp_SeaImportJob, { foreignKey: "NotifyParty1Id"});
  SImp_SeaImportJob.belongsTo(Gen_Parties, { foreignKey: "NotifyParty2Id"});
  Gen_Parties.hasMany(SImp_SeaImportJob, { foreignKey: "NotifyParty2Id"});
  SImp_SeaImportJob.belongsTo(Gen_Parties, { foreignKey: "OverseasAgentId"});
  Gen_Parties.hasMany(SImp_SeaImportJob, { foreignKey: "OverseasAgentId"});
  SImp_SeaImportJob.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(SImp_SeaImportJob, { foreignKey: "PrincipalId"});
  SImp_SeaImportJob.belongsTo(Gen_Parties, { foreignKey: "ShipperId"});
  Gen_Parties.hasMany(SImp_SeaImportJob, { foreignKey: "ShipperId"});
  SImp_SeaImportJob.belongsTo(Gen_Parties, { foreignKey: "ShippingLineId"});
  Gen_Parties.hasMany(SImp_SeaImportJob, { foreignKey: "ShippingLineId"});
  SImp_SeaImportJob.belongsTo(Gen_Parties, { foreignKey: "TransporterId"});
  Gen_Parties.hasMany(SImp_SeaImportJob, { foreignKey: "TransporterId"});
  SImp_SeaImportJob_ChargesPayb.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(SImp_SeaImportJob_ChargesPayb, { foreignKey: "PrincipalId"});
  SImp_SeaImportJob_ChargesPayb.belongsTo(Gen_Parties, { foreignKey: "VendorId"});
  Gen_Parties.hasMany(SImp_SeaImportJob_ChargesPayb, { foreignKey: "VendorId"});
  SImp_SeaImportJob_ChargesPayb_History.belongsTo(Gen_Parties, { foreignKey: "VendorId"});
  Gen_Parties.hasMany(SImp_SeaImportJob_ChargesPayb_History, { foreignKey: "VendorId"});
  SImp_SeaImportJob_ChargesRecv.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(SImp_SeaImportJob_ChargesRecv, { foreignKey: "CustomerId"});
  SImp_SeaImportJob_ChargesRecv.belongsTo(Gen_Parties, { foreignKey: "PrincipalId"});
  Gen_Parties.hasMany(SImp_SeaImportJob_ChargesRecv, { foreignKey: "PrincipalId"});
  SImp_SeaImportJob_ChargesRecv_History.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(SImp_SeaImportJob_ChargesRecv_History, { foreignKey: "CustomerId"});
  SImp_SeaImportJob_Equipment.belongsTo(Gen_Parties, { foreignKey: "dPrincipalId"});
  Gen_Parties.hasMany(SImp_SeaImportJob_Equipment, { foreignKey: "dPrincipalId"});
  SImp_SeaImportJob_LastMilestone.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(SImp_SeaImportJob_LastMilestone, { foreignKey: "CustomerId"});
  SImp_SeaImportJob_Principle.belongsTo(Gen_Parties, { foreignKey: "dPrincipalId"});
  Gen_Parties.hasMany(SImp_SeaImportJob_Principle, { foreignKey: "dPrincipalId"});
  SImp_SeaImportJob_Principle_History.belongsTo(Gen_Parties, { foreignKey: "dPrincipalId"});
  Gen_Parties.hasMany(SImp_SeaImportJob_Principle_History, { foreignKey: "dPrincipalId"});
  SImp_SeaImportJob_Principle_History.belongsTo(Gen_Parties, { foreignKey: "CusVenId"});
  Gen_Parties.hasMany(SImp_SeaImportJob_Principle_History, { foreignKey: "CusVenId"});
  UserRegistration.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(UserRegistration, { foreignKey: "CustomerId"});
  WMS_CargoDEStuffing.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(WMS_CargoDEStuffing, { foreignKey: "CustomerId"});
  WMS_CargoStuffing.belongsTo(Gen_Parties, { foreignKey: "OverseasAgentId"});
  Gen_Parties.hasMany(WMS_CargoStuffing, { foreignKey: "OverseasAgentId"});
  WMS_Delivery.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(WMS_Delivery, { foreignKey: "CustomerId"});
  WMS_DeliveryOrder.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(WMS_DeliveryOrder, { foreignKey: "CustomerId"});
  WMS_Delivery_Detail.belongsTo(Gen_Parties, { foreignKey: "DCustomerId"});
  Gen_Parties.hasMany(WMS_Delivery_Detail, { foreignKey: "DCustomerId"});
  WMS_GRN.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(WMS_GRN, { foreignKey: "CustomerId"});
  WMS_GRN.belongsTo(Gen_Parties, { foreignKey: "OverseasAgentId"});
  Gen_Parties.hasMany(WMS_GRN, { foreignKey: "OverseasAgentId"});
  WMS_GRN.belongsTo(Gen_Parties, { foreignKey: "ShippingLineId"});
  Gen_Parties.hasMany(WMS_GRN, { foreignKey: "ShippingLineId"});
  WMS_GRN_Detail.belongsTo(Gen_Parties, { foreignKey: "DCustomerId"});
  Gen_Parties.hasMany(WMS_GRN_Detail, { foreignKey: "DCustomerId"});
  WMS_ReceivingOrder.belongsTo(Gen_Parties, { foreignKey: "CustomerId"});
  Gen_Parties.hasMany(WMS_ReceivingOrder, { foreignKey: "CustomerId"});
  Gen_PartiesCommitment_Detail.belongsTo(Gen_PartiesCommitment, { foreignKey: "PartyCommitmentId"});
  Gen_PartiesCommitment.hasMany(Gen_PartiesCommitment_Detail, { foreignKey: "PartyCommitmentId"});
  CRM_Activity.belongsTo(Gen_Parties_Contacts, { foreignKey: "ContactId"});
  Gen_Parties_Contacts.hasMany(CRM_Activity, { foreignKey: "ContactId"});
  CRM_Planning.belongsTo(Gen_Parties_Contacts, { foreignKey: "ContactId"});
  Gen_Parties_Contacts.hasMany(CRM_Planning, { foreignKey: "ContactId"});
  Gen_Parties_Contacts_Events.belongsTo(Gen_Parties_Contacts, { foreignKey: "PartiesContactId"});
  Gen_Parties_Contacts.hasMany(Gen_Parties_Contacts_Events, { foreignKey: "PartiesContactId"});
  AExp_AirExportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "CargoDropOffLocationId"});
  Gen_Parties_Locations.hasMany(AExp_AirExportJob, { foreignKey: "CargoDropOffLocationId"});
  AExp_AirExportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "CargoPickUpLocationId"});
  Gen_Parties_Locations.hasMany(AExp_AirExportJob, { foreignKey: "CargoPickUpLocationId"});
  AExp_AirExportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "TerminalId"});
  Gen_Parties_Locations.hasMany(AExp_AirExportJob, { foreignKey: "TerminalId"});
  AImp_AirImportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "CargoDropOffLocationId"});
  Gen_Parties_Locations.hasMany(AImp_AirImportJob, { foreignKey: "CargoDropOffLocationId"});
  AImp_AirImportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "CargoPickUpLocationId"});
  Gen_Parties_Locations.hasMany(AImp_AirImportJob, { foreignKey: "CargoPickUpLocationId"});
  AImp_AirImportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "TerminalId"});
  Gen_Parties_Locations.hasMany(AImp_AirImportJob, { foreignKey: "TerminalId"});
  AImp_ManifestHeader.belongsTo(Gen_Parties_Locations, { foreignKey: "TerminalId"});
  Gen_Parties_Locations.hasMany(AImp_ManifestHeader, { foreignKey: "TerminalId"});
  CTrk_Activity.belongsTo(Gen_Parties_Locations, { foreignKey: "LocationId"});
  Gen_Parties_Locations.hasMany(CTrk_Activity, { foreignKey: "LocationId"});
  CTrk_ContainerActivity.belongsTo(Gen_Parties_Locations, { foreignKey: "LocationId"});
  Gen_Parties_Locations.hasMany(CTrk_ContainerActivity, { foreignKey: "LocationId"});
  CVHM_GuaranteeFilling.belongsTo(Gen_Parties_Locations, { foreignKey: "TerminalId"});
  Gen_Parties_Locations.hasMany(CVHM_GuaranteeFilling, { foreignKey: "TerminalId"});
  DEPO_ContainerActivity_Detail.belongsTo(Gen_Parties_Locations, { foreignKey: "PartyLocationId"});
  Gen_Parties_Locations.hasMany(DEPO_ContainerActivity_Detail, { foreignKey: "PartyLocationId"});
  GL_JobInvoice.belongsTo(Gen_Parties_Locations, { foreignKey: "ReturnTerminalId"});
  Gen_Parties_Locations.hasMany(GL_JobInvoice, { foreignKey: "ReturnTerminalId"});
  GL_JobInvoice.belongsTo(Gen_Parties_Locations, { foreignKey: "TerminalId"});
  Gen_Parties_Locations.hasMany(GL_JobInvoice, { foreignKey: "TerminalId"});
  GL_RunningDetention.belongsTo(Gen_Parties_Locations, { foreignKey: "ReturnTerminalId"});
  Gen_Parties_Locations.hasMany(GL_RunningDetention, { foreignKey: "ReturnTerminalId"});
  GL_RunningDetention.belongsTo(Gen_Parties_Locations, { foreignKey: "TerminalId"});
  Gen_Parties_Locations.hasMany(GL_RunningDetention, { foreignKey: "TerminalId"});
  Gen_ChargesTariff_Placement.belongsTo(Gen_Parties_Locations, { foreignKey: "PartyLocationId"});
  Gen_Parties_Locations.hasMany(Gen_ChargesTariff_Placement, { foreignKey: "PartyLocationId"});
  Gen_ChargesTariff_Storage.belongsTo(Gen_Parties_Locations, { foreignKey: "PartyLocationId"});
  Gen_Parties_Locations.hasMany(Gen_ChargesTariff_Storage, { foreignKey: "PartyLocationId"});
  Gen_DetentionTariff_PlugIn.belongsTo(Gen_Parties_Locations, { foreignKey: "TerminalId"});
  Gen_Parties_Locations.hasMany(Gen_DetentionTariff_PlugIn, { foreignKey: "TerminalId"});
  Gen_ISoftPartyLocation.belongsTo(Gen_Parties_Locations, { foreignKey: "CSULPartyLocationId"});
  Gen_Parties_Locations.hasMany(Gen_ISoftPartyLocation, { foreignKey: "CSULPartyLocationId"});
  Gen_LCLStorageTariff.belongsTo(Gen_Parties_Locations, { foreignKey: "CFSDepotFacilityId"});
  Gen_Parties_Locations.hasMany(Gen_LCLStorageTariff, { foreignKey: "CFSDepotFacilityId"});
  Gen_ManifestHeader.belongsTo(Gen_Parties_Locations, { foreignKey: "CFSFacilityId"});
  Gen_Parties_Locations.hasMany(Gen_ManifestHeader, { foreignKey: "CFSFacilityId"});
  Gen_ManifestHeader.belongsTo(Gen_Parties_Locations, { foreignKey: "TerminalId"});
  Gen_Parties_Locations.hasMany(Gen_ManifestHeader, { foreignKey: "TerminalId"});
  Gen_PEDIMapping.belongsTo(Gen_Parties_Locations, { foreignKey: "TerminalId"});
  Gen_Parties_Locations.hasMany(Gen_PEDIMapping, { foreignKey: "TerminalId"});
  Gen_Parties_Terminal.belongsTo(Gen_Parties_Locations, { foreignKey: "TerminalId"});
  Gen_Parties_Locations.hasMany(Gen_Parties_Terminal, { foreignKey: "TerminalId"});
  Gen_Quotation.belongsTo(Gen_Parties_Locations, { foreignKey: "DropOffLocationId"});
  Gen_Parties_Locations.hasMany(Gen_Quotation, { foreignKey: "DropOffLocationId"});
  Gen_Quotation.belongsTo(Gen_Parties_Locations, { foreignKey: "PickupLocationId"});
  Gen_Parties_Locations.hasMany(Gen_Quotation, { foreignKey: "PickupLocationId"});
  Gen_TerminalStockRequirement_Detail.belongsTo(Gen_Parties_Locations, { foreignKey: "TerminalId"});
  Gen_Parties_Locations.hasMany(Gen_TerminalStockRequirement_Detail, { foreignKey: "TerminalId"});
  Gen_Voyage_Terminal.belongsTo(Gen_Parties_Locations, { foreignKey: "TerminalId"});
  Gen_Parties_Locations.hasMany(Gen_Voyage_Terminal, { foreignKey: "TerminalId"});
  INQ_RateFromVendor.belongsTo(Gen_Parties_Locations, { foreignKey: "VendorLocationId"});
  Gen_Parties_Locations.hasMany(INQ_RateFromVendor, { foreignKey: "VendorLocationId"});
  INQ_RateRequestToVendor.belongsTo(Gen_Parties_Locations, { foreignKey: "VendorLocationId"});
  Gen_Parties_Locations.hasMany(INQ_RateRequestToVendor, { foreignKey: "VendorLocationId"});
  INQ_RateToCustomer.belongsTo(Gen_Parties_Locations, { foreignKey: "VendorLocationId"});
  Gen_Parties_Locations.hasMany(INQ_RateToCustomer, { foreignKey: "VendorLocationId"});
  Log_Job.belongsTo(Gen_Parties_Locations, { foreignKey: "DeliveryLocationId"});
  Gen_Parties_Locations.hasMany(Log_Job, { foreignKey: "DeliveryLocationId"});
  Log_Job.belongsTo(Gen_Parties_Locations, { foreignKey: "PickupLocationId"});
  Gen_Parties_Locations.hasMany(Log_Job, { foreignKey: "PickupLocationId"});
  Log_Job.belongsTo(Gen_Parties_Locations, { foreignKey: "TerminalId"});
  Gen_Parties_Locations.hasMany(Log_Job, { foreignKey: "TerminalId"});
  SExp_BookingRequest.belongsTo(Gen_Parties_Locations, { foreignKey: "ConsigneeLocationId"});
  Gen_Parties_Locations.hasMany(SExp_BookingRequest, { foreignKey: "ConsigneeLocationId"});
  SExp_BookingRequest.belongsTo(Gen_Parties_Locations, { foreignKey: "ContainerDepotId"});
  Gen_Parties_Locations.hasMany(SExp_BookingRequest, { foreignKey: "ContainerDepotId"});
  SExp_BookingRequest.belongsTo(Gen_Parties_Locations, { foreignKey: "DropOffLocationId"});
  Gen_Parties_Locations.hasMany(SExp_BookingRequest, { foreignKey: "DropOffLocationId"});
  SExp_BookingRequest.belongsTo(Gen_Parties_Locations, { foreignKey: "PickupLocationId"});
  Gen_Parties_Locations.hasMany(SExp_BookingRequest, { foreignKey: "PickupLocationId"});
  SExp_BookingRequest.belongsTo(Gen_Parties_Locations, { foreignKey: "ShipperLocationId"});
  Gen_Parties_Locations.hasMany(SExp_BookingRequest, { foreignKey: "ShipperLocationId"});
  SExp_BookingToCarrier.belongsTo(Gen_Parties_Locations, { foreignKey: "ConsigneeLocationId"});
  Gen_Parties_Locations.hasMany(SExp_BookingToCarrier, { foreignKey: "ConsigneeLocationId"});
  SExp_CRO.belongsTo(Gen_Parties_Locations, { foreignKey: "PickUpId"});
  Gen_Parties_Locations.hasMany(SExp_CRO, { foreignKey: "PickUpId"});
  SExp_CRO.belongsTo(Gen_Parties_Locations, { foreignKey: "EmptyDepotId"});
  Gen_Parties_Locations.hasMany(SExp_CRO, { foreignKey: "EmptyDepotId"});
  SExp_CRO.belongsTo(Gen_Parties_Locations, { foreignKey: "MoveToId"});
  Gen_Parties_Locations.hasMany(SExp_CRO, { foreignKey: "MoveToId"});
  SExp_DeliveryNote.belongsTo(Gen_Parties_Locations, { foreignKey: "WareHouseLocationId"});
  Gen_Parties_Locations.hasMany(SExp_DeliveryNote, { foreignKey: "WareHouseLocationId"});
  SExp_LoadingProgram.belongsTo(Gen_Parties_Locations, { foreignKey: "ContainerPickUpLocationId"});
  Gen_Parties_Locations.hasMany(SExp_LoadingProgram, { foreignKey: "ContainerPickUpLocationId"});
  SExp_LoadingProgram.belongsTo(Gen_Parties_Locations, { foreignKey: "OriginTerminalId"});
  Gen_Parties_Locations.hasMany(SExp_LoadingProgram, { foreignKey: "OriginTerminalId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "CargoDropOffLocationId"});
  Gen_Parties_Locations.hasMany(SExp_SeaExportJob, { foreignKey: "CargoDropOffLocationId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "CargoPickUpLocationId"});
  Gen_Parties_Locations.hasMany(SExp_SeaExportJob, { foreignKey: "CargoPickUpLocationId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "CFSFacilityId"});
  Gen_Parties_Locations.hasMany(SExp_SeaExportJob, { foreignKey: "CFSFacilityId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "ContainerDropOffLocationId"});
  Gen_Parties_Locations.hasMany(SExp_SeaExportJob, { foreignKey: "ContainerDropOffLocationId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "ContainerPickUpLocationId"});
  Gen_Parties_Locations.hasMany(SExp_SeaExportJob, { foreignKey: "ContainerPickUpLocationId"});
  SExp_SeaExportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "TerminalId"});
  Gen_Parties_Locations.hasMany(SExp_SeaExportJob, { foreignKey: "TerminalId"});
  SExp_ShippingInstruction.belongsTo(Gen_Parties_Locations, { foreignKey: "ConsigneeLocationId"});
  Gen_Parties_Locations.hasMany(SExp_ShippingInstruction, { foreignKey: "ConsigneeLocationId"});
  SExp_ShippingInstruction.belongsTo(Gen_Parties_Locations, { foreignKey: "Notify1LocationId"});
  Gen_Parties_Locations.hasMany(SExp_ShippingInstruction, { foreignKey: "Notify1LocationId"});
  SExp_ShippingInstruction.belongsTo(Gen_Parties_Locations, { foreignKey: "Notify2LocationId"});
  Gen_Parties_Locations.hasMany(SExp_ShippingInstruction, { foreignKey: "Notify2LocationId"});
  SExp_ShippingInstruction.belongsTo(Gen_Parties_Locations, { foreignKey: "ShipperLocationId"});
  Gen_Parties_Locations.hasMany(SExp_ShippingInstruction, { foreignKey: "ShipperLocationId"});
  SImp_BL_Equipment.belongsTo(Gen_Parties_Locations, { foreignKey: "EmptyReturnAtId"});
  Gen_Parties_Locations.hasMany(SImp_BL_Equipment, { foreignKey: "EmptyReturnAtId"});
  SImp_DeliveryOrder.belongsTo(Gen_Parties_Locations, { foreignKey: "EmptyReturnAtId"});
  Gen_Parties_Locations.hasMany(SImp_DeliveryOrder, { foreignKey: "EmptyReturnAtId"});
  SImp_SeaImportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "CargoDropOffLocationId"});
  Gen_Parties_Locations.hasMany(SImp_SeaImportJob, { foreignKey: "CargoDropOffLocationId"});
  SImp_SeaImportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "CargoPickUpLocationId"});
  Gen_Parties_Locations.hasMany(SImp_SeaImportJob, { foreignKey: "CargoPickUpLocationId"});
  SImp_SeaImportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "CFSFacilityId"});
  Gen_Parties_Locations.hasMany(SImp_SeaImportJob, { foreignKey: "CFSFacilityId"});
  SImp_SeaImportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "ContainerDropOffLocationId"});
  Gen_Parties_Locations.hasMany(SImp_SeaImportJob, { foreignKey: "ContainerDropOffLocationId"});
  SImp_SeaImportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "ContainerPickUpLocationId"});
  Gen_Parties_Locations.hasMany(SImp_SeaImportJob, { foreignKey: "ContainerPickUpLocationId"});
  SImp_SeaImportJob.belongsTo(Gen_Parties_Locations, { foreignKey: "TerminalId"});
  Gen_Parties_Locations.hasMany(SImp_SeaImportJob, { foreignKey: "TerminalId"});
  WMS_CargoDEStuffing.belongsTo(Gen_Parties_Locations, { foreignKey: "WareHouseId"});
  Gen_Parties_Locations.hasMany(WMS_CargoDEStuffing, { foreignKey: "WareHouseId"});
  WMS_CargoStuffing.belongsTo(Gen_Parties_Locations, { foreignKey: "WareHouseId"});
  Gen_Parties_Locations.hasMany(WMS_CargoStuffing, { foreignKey: "WareHouseId"});
  WMS_Delivery.belongsTo(Gen_Parties_Locations, { foreignKey: "WareHouseId"});
  Gen_Parties_Locations.hasMany(WMS_Delivery, { foreignKey: "WareHouseId"});
  WMS_DeliveryOrder.belongsTo(Gen_Parties_Locations, { foreignKey: "WareHouseId"});
  Gen_Parties_Locations.hasMany(WMS_DeliveryOrder, { foreignKey: "WareHouseId"});
  WMS_DeliveryOrder_Detail.belongsTo(Gen_Parties_Locations, { foreignKey: "DWareHouseId"});
  Gen_Parties_Locations.hasMany(WMS_DeliveryOrder_Detail, { foreignKey: "DWareHouseId"});
  WMS_Delivery_Detail.belongsTo(Gen_Parties_Locations, { foreignKey: "WareHouseId"});
  Gen_Parties_Locations.hasMany(WMS_Delivery_Detail, { foreignKey: "WareHouseId"});
  WMS_GRN.belongsTo(Gen_Parties_Locations, { foreignKey: "WareHouseId"});
  Gen_Parties_Locations.hasMany(WMS_GRN, { foreignKey: "WareHouseId"});
  WMS_GRN_Detail.belongsTo(Gen_Parties_Locations, { foreignKey: "DWareHouseId"});
  Gen_Parties_Locations.hasMany(WMS_GRN_Detail, { foreignKey: "DWareHouseId"});
  WMS_Locations.belongsTo(Gen_Parties_Locations, { foreignKey: "WareHouseId"});
  Gen_Parties_Locations.hasMany(WMS_Locations, { foreignKey: "WareHouseId"});
  WMS_ReceivingOrder.belongsTo(Gen_Parties_Locations, { foreignKey: "WareHouseId"});
  Gen_Parties_Locations.hasMany(WMS_ReceivingOrder, { foreignKey: "WareHouseId"});
  WMS_ReceivingOrder_Detail.belongsTo(Gen_Parties_Locations, { foreignKey: "DWareHouseId"});
  Gen_Parties_Locations.hasMany(WMS_ReceivingOrder_Detail, { foreignKey: "DWareHouseId"});
  TAP_Salaries.belongsTo(Gen_PaymentTerm, { foreignKey: "ModeId"});
  Gen_PaymentTerm.hasMany(TAP_Salaries, { foreignKey: "ModeId"});
  Gen_SeaAccessorialCharge.belongsTo(Gen_PortCategory, { foreignKey: "POFDCategoryId"});
  Gen_PortCategory.hasMany(Gen_SeaAccessorialCharge, { foreignKey: "POFDCategoryId"});
  Gen_SeaAccessorialCharge.belongsTo(Gen_PortCategory, { foreignKey: "PORCategoryId"});
  Gen_PortCategory.hasMany(Gen_SeaAccessorialCharge, { foreignKey: "PORCategoryId"});
  Gen_UNLocation_PortCategory.belongsTo(Gen_PortCategory, { foreignKey: "PortCategoryId"});
  Gen_PortCategory.hasMany(Gen_UNLocation_PortCategory, { foreignKey: "PortCategoryId"});
  Gen_Parties_CommodityDetail.belongsTo(Gen_ProductPackageType, { foreignKey: "UnitTypeCode"});
  Gen_ProductPackageType.hasMany(Gen_Parties_CommodityDetail, { foreignKey: "UnitTypeCode"});
  AExp_AirExportJob.belongsTo(Gen_Quotation, { foreignKey: "QuotaionId"});
  Gen_Quotation.hasMany(AExp_AirExportJob, { foreignKey: "QuotaionId"});
  AImp_AirImportJob.belongsTo(Gen_Quotation, { foreignKey: "QuotaionId"});
  Gen_Quotation.hasMany(AImp_AirImportJob, { foreignKey: "QuotaionId"});
  Gen_Quotation_Detail.belongsTo(Gen_Quotation, { foreignKey: "QuotationId"});
  Gen_Quotation.hasMany(Gen_Quotation_Detail, { foreignKey: "QuotationId"});
  Gen_Quotation_Equipment.belongsTo(Gen_Quotation, { foreignKey: "QuotationId"});
  Gen_Quotation.hasMany(Gen_Quotation_Equipment, { foreignKey: "QuotationId"});
  Log_Job.belongsTo(Gen_Quotation, { foreignKey: "QuotationId"});
  Gen_Quotation.hasMany(Log_Job, { foreignKey: "QuotationId"});
  SExp_SeaExportJob.belongsTo(Gen_Quotation, { foreignKey: "QuotationId"});
  Gen_Quotation.hasMany(SExp_SeaExportJob, { foreignKey: "QuotationId"});
  SImp_SeaImportJob.belongsTo(Gen_Quotation, { foreignKey: "QuotationId"});
  Gen_Quotation.hasMany(SImp_SeaImportJob, { foreignKey: "QuotationId"});
  AExp_AirExportJob_ChargesPayb.belongsTo(Gen_Quotation_Detail, { foreignKey: "QuotationChargesId"});
  Gen_Quotation_Detail.hasMany(AExp_AirExportJob_ChargesPayb, { foreignKey: "QuotationChargesId"});
  AExp_AirExportJob_ChargesPayb_History.belongsTo(Gen_Quotation_Detail, { foreignKey: "QuotationChargesId"});
  Gen_Quotation_Detail.hasMany(AExp_AirExportJob_ChargesPayb_History, { foreignKey: "QuotationChargesId"});
  AExp_AirExportJob_ChargesRecv.belongsTo(Gen_Quotation_Detail, { foreignKey: "QuotationChargesId"});
  Gen_Quotation_Detail.hasMany(AExp_AirExportJob_ChargesRecv, { foreignKey: "QuotationChargesId"});
  AExp_AirExportJob_ChargesRecv_History.belongsTo(Gen_Quotation_Detail, { foreignKey: "QuotationChargesId"});
  Gen_Quotation_Detail.hasMany(AExp_AirExportJob_ChargesRecv_History, { foreignKey: "QuotationChargesId"});
  AImp_AirImportJob_ChargesPayb.belongsTo(Gen_Quotation_Detail, { foreignKey: "QuotationChargesId"});
  Gen_Quotation_Detail.hasMany(AImp_AirImportJob_ChargesPayb, { foreignKey: "QuotationChargesId"});
  AImp_AirImportJob_ChargesPayb_History.belongsTo(Gen_Quotation_Detail, { foreignKey: "QuotationChargesId"});
  Gen_Quotation_Detail.hasMany(AImp_AirImportJob_ChargesPayb_History, { foreignKey: "QuotationChargesId"});
  AImp_AirImportJob_ChargesRecv.belongsTo(Gen_Quotation_Detail, { foreignKey: "QuotationChargesId"});
  Gen_Quotation_Detail.hasMany(AImp_AirImportJob_ChargesRecv, { foreignKey: "QuotationChargesId"});
  AImp_AirImportJob_ChargesRecv_History.belongsTo(Gen_Quotation_Detail, { foreignKey: "QuotationChargesId"});
  Gen_Quotation_Detail.hasMany(AImp_AirImportJob_ChargesRecv_History, { foreignKey: "QuotationChargesId"});
  Log_Job_ChargesPayb.belongsTo(Gen_Quotation_Detail, { foreignKey: "QuotationChargesId"});
  Gen_Quotation_Detail.hasMany(Log_Job_ChargesPayb, { foreignKey: "QuotationChargesId"});
  Log_Job_ChargesRecv.belongsTo(Gen_Quotation_Detail, { foreignKey: "QuotationChargesId"});
  Gen_Quotation_Detail.hasMany(Log_Job_ChargesRecv, { foreignKey: "QuotationChargesId"});
  SExp_SeaExportJob_ChargesPayb.belongsTo(Gen_Quotation_Detail, { foreignKey: "QuotationChargesId"});
  Gen_Quotation_Detail.hasMany(SExp_SeaExportJob_ChargesPayb, { foreignKey: "QuotationChargesId"});
  SExp_SeaExportJob_ChargesRecv.belongsTo(Gen_Quotation_Detail, { foreignKey: "QuotationChargesId"});
  Gen_Quotation_Detail.hasMany(SExp_SeaExportJob_ChargesRecv, { foreignKey: "QuotationChargesId"});
  SImp_SeaImportJob_ChargesPayb.belongsTo(Gen_Quotation_Detail, { foreignKey: "QuotationChargesId"});
  Gen_Quotation_Detail.hasMany(SImp_SeaImportJob_ChargesPayb, { foreignKey: "QuotationChargesId"});
  SImp_SeaImportJob_ChargesRecv.belongsTo(Gen_Quotation_Detail, { foreignKey: "QuotationChargesId"});
  Gen_Quotation_Detail.hasMany(SImp_SeaImportJob_ChargesRecv, { foreignKey: "QuotationChargesId"});
  Gen_QuoteTemplate_Detail.belongsTo(Gen_QuoteTemplate, { foreignKey: "GenQuoteTemplateId"});
  Gen_QuoteTemplate.hasMany(Gen_QuoteTemplate_Detail, { foreignKey: "GenQuoteTemplateId"});
  Gen_CARF_Reason.belongsTo(Gen_ReasonForCredit, { foreignKey: "CARFReasonId"});
  Gen_ReasonForCredit.hasMany(Gen_CARF_Reason, { foreignKey: "CARFReasonId"});
  GL_JobReceipt.belongsTo(Gen_ReceivedFromPayToParties, { foreignKey: "ReceivedFromId"});
  Gen_ReceivedFromPayToParties.hasMany(GL_JobReceipt, { foreignKey: "ReceivedFromId"});
  Gen_Localize.belongsTo(Gen_Region, { foreignKey: "RegionId"});
  Gen_Region.hasMany(Gen_Localize, { foreignKey: "RegionId"});
  Gen_SubCompanies.belongsTo(Gen_Region, { foreignKey: "RegionId"});
  Gen_Region.hasMany(Gen_SubCompanies, { foreignKey: "RegionId"});
  Gen_Report_Properties.belongsTo(Gen_Report, { foreignKey: "ReportId"});
  Gen_Report.hasMany(Gen_Report_Properties, { foreignKey: "ReportId"});
  Gen_ReportConfiguration_Detail.belongsTo(Gen_ReportConfiguration, { foreignKey: "ReportConfigurationId"});
  Gen_ReportConfiguration.hasMany(Gen_ReportConfiguration_Detail, { foreignKey: "ReportConfigurationId"});
  Gen_ReportSubscription_Detail.belongsTo(Gen_ReportSubscription, { foreignKey: "ReportSubscriptionId"});
  Gen_ReportSubscription.hasMany(Gen_ReportSubscription_Detail, { foreignKey: "ReportSubscriptionId"});
  Gen_ReportSubscription_Email.belongsTo(Gen_ReportSubscription, { foreignKey: "ReportSubscriptionId"});
  Gen_ReportSubscription.hasMany(Gen_ReportSubscription_Email, { foreignKey: "ReportSubscriptionId"});
  Gen_ReportSubscription_Log.belongsTo(Gen_ReportSubscription, { foreignKey: "ReportSubscriptionId"});
  Gen_ReportSubscription.hasMany(Gen_ReportSubscription_Log, { foreignKey: "ReportSubscriptionId"});
  Gen_ReportSubscription_LogMaster.belongsTo(Gen_ReportSubscription, { foreignKey: "ReportSubscriptionId"});
  Gen_ReportSubscription.hasMany(Gen_ReportSubscription_LogMaster, { foreignKey: "ReportSubscriptionId"});
  Gen_Report_Properties_Value.belongsTo(Gen_Report_Properties, { foreignKey: "RptPropertiesId"});
  Gen_Report_Properties.hasMany(Gen_Report_Properties_Value, { foreignKey: "RptPropertiesId"});
  Gen_SecurityGroup.belongsTo(Gen_Roles, { foreignKey: "GenRoleId"});
  Gen_Roles.hasMany(Gen_SecurityGroup, { foreignKey: "GenRoleId"});
  Gen_Users.belongsTo(Gen_Roles, { foreignKey: "GenRolesId"});
  Gen_Roles.hasMany(Gen_Users, { foreignKey: "GenRolesId"});
  Gen_SMS_Log_History.belongsTo(Gen_SMS_Log, { foreignKey: "SMSLogId"});
  Gen_SMS_Log.hasMany(Gen_SMS_Log_History, { foreignKey: "SMSLogId"});
  GL_JobSecurityTran.belongsTo(Gen_SecurityDepositStatus, { foreignKey: "DepositStatusId"});
  Gen_SecurityDepositStatus.hasMany(GL_JobSecurityTran, { foreignKey: "DepositStatusId"});
  GL_JobSecurityTranHistory.belongsTo(Gen_SecurityDepositStatus, { foreignKey: "DepositStatusId"});
  Gen_SecurityDepositStatus.hasMany(GL_JobSecurityTranHistory, { foreignKey: "DepositStatusId"});
  GL_ProcessLog.belongsTo(Gen_SecurityFile, { foreignKey: "GenSecurityFileId"});
  Gen_SecurityFile.hasMany(GL_ProcessLog, { foreignKey: "GenSecurityFileId"});
  Gen_SecurityGroup_Authority.belongsTo(Gen_SecurityGroup, { foreignKey: "GenSecurityGroupId"});
  Gen_SecurityGroup.hasMany(Gen_SecurityGroup_Authority, { foreignKey: "GenSecurityGroupId"});
  Gen_Users.belongsTo(Gen_SecurityGroup, { foreignKey: "GenSecurityGroupId"});
  Gen_SecurityGroup.hasMany(Gen_Users, { foreignKey: "GenSecurityGroupId"});
  Gen_SecurityGroup.belongsTo(Gen_SecurityLevel, { foreignKey: "GenSecurityLevelId"});
  Gen_SecurityLevel.hasMany(Gen_SecurityGroup, { foreignKey: "GenSecurityLevelId"});
  GL_JobSecurityTranHistory.belongsTo(Gen_SecurityTranStatus, { foreignKey: "SecurityTranStatusId"});
  Gen_SecurityTranStatus.hasMany(GL_JobSecurityTranHistory, { foreignKey: "SecurityTranStatusId"});
  GL_JobSecurityTran.belongsTo(Gen_SecurityType, { foreignKey: "SecurityTypeId"});
  Gen_SecurityType.hasMany(GL_JobSecurityTran, { foreignKey: "SecurityTypeId"});
  GL_JobSecurityTranHistory.belongsTo(Gen_SecurityType, { foreignKey: "SecurityTypeId"});
  Gen_SecurityType.hasMany(GL_JobSecurityTranHistory, { foreignKey: "SecurityTypeId"});
  Gen_SequenceSWC.belongsTo(Gen_SequenceDef, { foreignKey: "SeqDefId"});
  Gen_SequenceDef.hasMany(Gen_SequenceSWC, { foreignKey: "SeqDefId"});
  Gen_Sequences.belongsTo(Gen_SequenceDef, { foreignKey: "SeqDefId"});
  Gen_SequenceDef.hasMany(Gen_Sequences, { foreignKey: "SeqDefId"});
  Gen_ServiceActivityLog.belongsTo(Gen_ServiceActivityLogType, { foreignKey: "SALTypeId"});
  Gen_ServiceActivityLogType.hasMany(Gen_ServiceActivityLog, { foreignKey: "SALTypeId"});
  AImp_ManifestHeader.belongsTo(Gen_ShippingAgencyLicense, { foreignKey: "AirLicenseId"});
  Gen_ShippingAgencyLicense.hasMany(AImp_ManifestHeader, { foreignKey: "AirLicenseId"});
  CVHM_GuaranteeFilling.belongsTo(Gen_ShippingAgencyLicense, { foreignKey: "ShippingLicenseId"});
  Gen_ShippingAgencyLicense.hasMany(CVHM_GuaranteeFilling, { foreignKey: "ShippingLicenseId"});
  Gen_ManifestHeader.belongsTo(Gen_ShippingAgencyLicense, { foreignKey: "ShippingLicenseId"});
  Gen_ShippingAgencyLicense.hasMany(Gen_ManifestHeader, { foreignKey: "ShippingLicenseId"});
  GL_JobInvoice.belongsTo(Gen_SlabType, { foreignKey: "SlabTypeId"});
  Gen_SlabType.hasMany(GL_JobInvoice, { foreignKey: "SlabTypeId"});
  Gen_DetentionTariff_Detention.belongsTo(Gen_SlabType, { foreignKey: "SlabTypeId"});
  Gen_SlabType.hasMany(Gen_DetentionTariff_Detention, { foreignKey: "SlabTypeId"});
  Gen_SlabType_Detail.belongsTo(Gen_SlabType, { foreignKey: "SlabTypeId"});
  Gen_SlabType.hasMany(Gen_SlabType_Detail, { foreignKey: "SlabTypeId"});
  AExp_BL_Stamp.belongsTo(Gen_Stamps, { foreignKey: "StampId"});
  Gen_Stamps.hasMany(AExp_BL_Stamp, { foreignKey: "StampId"});
  SExp_BL_Stamp.belongsTo(Gen_Stamps, { foreignKey: "StampId"});
  Gen_Stamps.hasMany(SExp_BL_Stamp, { foreignKey: "StampId"});
  SExp_SwitchBL_Stamp.belongsTo(Gen_Stamps, { foreignKey: "StampId"});
  Gen_Stamps.hasMany(SExp_SwitchBL_Stamp, { foreignKey: "StampId"});
  SImp_BL_Stamp.belongsTo(Gen_Stamps, { foreignKey: "StampId"});
  Gen_Stamps.hasMany(SImp_BL_Stamp, { foreignKey: "StampId"});
  AImp_ManifestHeader.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(AImp_ManifestHeader, { foreignKey: "SubCompanyId"});
  CEAS_User.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(CEAS_User, { foreignKey: "SubCompanyId"});
  CEAS_User_SubCompanyRight.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(CEAS_User_SubCompanyRight, { foreignKey: "SubCompanyId"});
  COASCompanyRegistration.belongsTo(Gen_SubCompanies, { foreignKey: "CompanyId"});
  Gen_SubCompanies.hasMany(COASCompanyRegistration, { foreignKey: "CompanyId"});
  GL_AccountBalances.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_AccountBalances, { foreignKey: "SubCompanyId"});
  GL_AccountIntegration.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_AccountIntegration, { foreignKey: "SubCompanyId"});
  GL_AgentInvoiceOpening.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_AgentInvoiceOpening, { foreignKey: "SubCompanyId"});
  GL_BalanceCIH.belongsTo(Gen_SubCompanies, { foreignKey: "CompanyId"});
  Gen_SubCompanies.hasMany(GL_BalanceCIH, { foreignKey: "CompanyId"});
  GL_Budget.belongsTo(Gen_SubCompanies, { foreignKey: "CompanyId"});
  Gen_SubCompanies.hasMany(GL_Budget, { foreignKey: "CompanyId"});
  GL_COA_Company.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_COA_Company, { foreignKey: "SubCompanyId"});
  GL_ChequeBookStock.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_ChequeBookStock, { foreignKey: "SubCompanyId"});
  GL_ChequeOpening.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_ChequeOpening, { foreignKey: "SubCompanyId"});
  GL_FiscalYear.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_FiscalYear, { foreignKey: "SubCompanyId"});
  GL_JobBillOpening.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_JobBillOpening, { foreignKey: "SubCompanyId"});
  GL_JobBillOpening_Advance.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_JobBillOpening_Advance, { foreignKey: "SubCompanyId"});
  GL_JobDirectExpRev.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_JobDirectExpRev, { foreignKey: "SubCompanyId"});
  GL_JobInvoiceOpening.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_JobInvoiceOpening, { foreignKey: "SubCompanyId"});
  GL_JobInvoiceOpening_Advance.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_JobInvoiceOpening_Advance, { foreignKey: "SubCompanyId"});
  GL_PrincipleInvoiceOpening.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_PrincipleInvoiceOpening, { foreignKey: "SubCompanyId"});
  GL_PropertiesLOV.belongsTo(Gen_SubCompanies, { foreignKey: "CompanyId"});
  Gen_SubCompanies.hasMany(GL_PropertiesLOV, { foreignKey: "CompanyId"});
  GL_RecDateSetup.belongsTo(Gen_SubCompanies, { foreignKey: "CompanyId"});
  Gen_SubCompanies.hasMany(GL_RecDateSetup, { foreignKey: "CompanyId"});
  GL_ReconciledData.belongsTo(Gen_SubCompanies, { foreignKey: "CompanyId"});
  Gen_SubCompanies.hasMany(GL_ReconciledData, { foreignKey: "CompanyId"});
  GL_ReconciledLockedData.belongsTo(Gen_SubCompanies, { foreignKey: "CompanyId"});
  Gen_SubCompanies.hasMany(GL_ReconciledLockedData, { foreignKey: "CompanyId"});
  GL_Requisition.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_Requisition, { foreignKey: "SubCompanyId"});
  GL_Voucher.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_Voucher, { foreignKey: "SubCompanyId"});
  GL_Voucher_Detail.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_Voucher_Detail, { foreignKey: "SubCompanyId"});
  GL_Voucher_Detail_History.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_Voucher_Detail_History, { foreignKey: "SubCompanyId"});
  GL_Voucher_Detail_Mem.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_Voucher_Detail_Mem, { foreignKey: "SubCompanyId"});
  GL_Voucher_History.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_Voucher_History, { foreignKey: "SubCompanyId"});
  GL_Voucher_Mem.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_Voucher_Mem, { foreignKey: "SubCompanyId"});
  GL_WTHDeposit.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(GL_WTHDeposit, { foreignKey: "SubCompanyId"});
  Gen_BLTemplate.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_BLTemplate, { foreignKey: "SubCompanyId"});
  Gen_Charges_SubCompanyRight.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_Charges_SubCompanyRight, { foreignKey: "SubCompanyId"});
  Gen_CrucialChangesLog.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_CrucialChangesLog, { foreignKey: "SubCompanyId"});
  Gen_CustomStatus.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_CustomStatus, { foreignKey: "SubCompanyId"});
  Gen_DashboardSetup.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_DashboardSetup, { foreignKey: "SubCompanyId"});
  Gen_DashboardSetupPolicy.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_DashboardSetupPolicy, { foreignKey: "SubCompanyId"});
  Gen_EDIProcessed.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_EDIProcessed, { foreignKey: "SubCompanyId"});
  Gen_LetterTemplate.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_LetterTemplate, { foreignKey: "SubCompanyId"});
  Gen_ManifestHeader.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_ManifestHeader, { foreignKey: "SubCompanyId"});
  Gen_PartiesCommitment.belongsTo(Gen_SubCompanies, { foreignKey: "CompanyId"});
  Gen_SubCompanies.hasMany(Gen_PartiesCommitment, { foreignKey: "CompanyId"});
  Gen_Parties_SubCompanyRight.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_Parties_SubCompanyRight, { foreignKey: "SubCompanyId"});
  Gen_QuoteTemplate.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_QuoteTemplate, { foreignKey: "SubCompanyId"});
  Gen_QuoteTemplate_Detail.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_QuoteTemplate_Detail, { foreignKey: "SubCompanyId"});
  Gen_ReportFilter.belongsTo(Gen_SubCompanies, { foreignKey: "CompanyId"});
  Gen_SubCompanies.hasMany(Gen_ReportFilter, { foreignKey: "CompanyId"});
  Gen_ReportTextDoc.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_ReportTextDoc, { foreignKey: "SubCompanyId"});
  Gen_SequenceCustomized.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_SequenceCustomized, { foreignKey: "SubCompanyId"});
  Gen_SequenceSWC.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompID"});
  Gen_SubCompanies.hasMany(Gen_SequenceSWC, { foreignKey: "SubCompID"});
  Gen_SysPolCompanyPolicy.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasOne(Gen_SysPolCompanyPolicy, { foreignKey: "SubCompanyId"});
  Gen_SysPolicyMaster.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_SysPolicyMaster, { foreignKey: "SubCompanyId"});
  Gen_TaxAuthority.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_TaxAuthority, { foreignKey: "SubCompanyId"});
  Gen_TaxAuthorityGroup.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_TaxAuthorityGroup, { foreignKey: "SubCompanyId"});
  Gen_UserDashboardPreference.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Gen_UserDashboardPreference, { foreignKey: "SubCompanyId"});
  INQ_QuoteChargeTemplate.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(INQ_QuoteChargeTemplate, { foreignKey: "SubCompanyId"});
  INQ_RateInquiry.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(INQ_RateInquiry, { foreignKey: "SubCompanyId"});
  INQ_RateInquiry_Detail.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(INQ_RateInquiry_Detail, { foreignKey: "SubCompanyId"});
  Log_Job.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(Log_Job, { foreignKey: "SubCompanyId"});
  SExp_BookingRequest.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(SExp_BookingRequest, { foreignKey: "SubCompanyId"});
  SExp_BookingToCarrier.belongsTo(Gen_SubCompanies, { foreignKey: "CompanyId"});
  Gen_SubCompanies.hasMany(SExp_BookingToCarrier, { foreignKey: "CompanyId"});
  SExp_ShippingInstruction.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(SExp_ShippingInstruction, { foreignKey: "SubCompanyId"});
  TAP_Allowance_Detail.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(TAP_Allowance_Detail, { foreignKey: "SubCompanyId"});
  TAP_Deduction_Detail.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(TAP_Deduction_Detail, { foreignKey: "SubCompanyId"});
  TAP_Employee.belongsTo(Gen_SubCompanies, { foreignKey: "CompanyId"});
  Gen_SubCompanies.hasMany(TAP_Employee, { foreignKey: "CompanyId"});
  TAP_Loan.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(TAP_Loan, { foreignKey: "SubCompanyId"});
  TAP_Salaries.belongsTo(Gen_SubCompanies, { foreignKey: "CompanyId"});
  Gen_SubCompanies.hasMany(TAP_Salaries, { foreignKey: "CompanyId"});
  TAP_SalaryAdvance.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(TAP_SalaryAdvance, { foreignKey: "SubCompanyId"});
  WMS_CargoDEStuffing.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(WMS_CargoDEStuffing, { foreignKey: "SubCompanyId"});
  WMS_Delivery.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(WMS_Delivery, { foreignKey: "SubCompanyId"});
  WMS_DeliveryOrder.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(WMS_DeliveryOrder, { foreignKey: "SubCompanyId"});
  WMS_GRN.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(WMS_GRN, { foreignKey: "SubCompanyId"});
  WMS_ReceivingOrder.belongsTo(Gen_SubCompanies, { foreignKey: "SubCompanyId"});
  Gen_SubCompanies.hasMany(WMS_ReceivingOrder, { foreignKey: "SubCompanyId"});
  Gen_SysPolElements.belongsTo(Gen_SysPolElementSource, { foreignKey: "SourceId"});
  Gen_SysPolElementSource.hasMany(Gen_SysPolElements, { foreignKey: "SourceId"});
  Gen_SysPolElements.belongsTo(Gen_SysPolElementType, { foreignKey: "ElementTypeId"});
  Gen_SysPolElementType.hasMany(Gen_SysPolElements, { foreignKey: "ElementTypeId"});
  Gen_SysPolCompanyPolicy.belongsTo(Gen_SysPolElements, { foreignKey: "ElementId"});
  Gen_SysPolElements.hasMany(Gen_SysPolCompanyPolicy, { foreignKey: "ElementId"});
  Gen_SysPolicyDetail.belongsTo(Gen_SysPolElements, { foreignKey: "ElementId"});
  Gen_SysPolElements.hasMany(Gen_SysPolicyDetail, { foreignKey: "ElementId"});
  Gen_SequenceSWC.belongsTo(Gen_SysPolicyMaster, { foreignKey: "SysPolId"});
  Gen_SysPolicyMaster.hasMany(Gen_SequenceSWC, { foreignKey: "SysPolId"});
  Gen_Sequences.belongsTo(Gen_SysPolicyMaster, { foreignKey: "SysPolId"});
  Gen_SysPolicyMaster.hasMany(Gen_Sequences, { foreignKey: "SysPolId"});
  Gen_SysPolCompanyPolicy.belongsTo(Gen_SysPolicyMaster, { foreignKey: "SysPolId"});
  Gen_SysPolicyMaster.hasMany(Gen_SysPolCompanyPolicy, { foreignKey: "SysPolId"});
  Gen_SysPolicyDetail.belongsTo(Gen_SysPolicyMaster, { foreignKey: "SysPolId"});
  Gen_SysPolicyMaster.hasMany(Gen_SysPolicyDetail, { foreignKey: "SysPolId"});
  Gen_SysPolicy_DODocs.belongsTo(Gen_SysPolicyMaster, { foreignKey: "SysPolId"});
  Gen_SysPolicyMaster.hasMany(Gen_SysPolicy_DODocs, { foreignKey: "SysPolId"});
  Gen_SysPolicy_SecurityRefundDocs.belongsTo(Gen_SysPolicyMaster, { foreignKey: "SysPolId"});
  Gen_SysPolicyMaster.hasMany(Gen_SysPolicy_SecurityRefundDocs, { foreignKey: "SysPolId"});
  AExp_AirExportJob_ChargesPayb_TaxExpShare.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(AExp_AirExportJob_ChargesPayb_TaxExpShare, { foreignKey: "TaxAuthorityId"});
  AExp_AirExportJob_ChargesRecv_TaxRevShare.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(AExp_AirExportJob_ChargesRecv_TaxRevShare, { foreignKey: "TaxAuthorityId"});
  AImp_AirImportJob_ChargesPayb_TaxExpShare.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(AImp_AirImportJob_ChargesPayb_TaxExpShare, { foreignKey: "TaxAuthorityId"});
  AImp_AirImportJob_ChargesRecv_TaxRevShare.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(AImp_AirImportJob_ChargesRecv_TaxRevShare, { foreignKey: "TaxAuthorityId"});
  GL_AgentInvoice_Charges_Tax.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(GL_AgentInvoice_Charges_Tax, { foreignKey: "TaxAuthorityId"});
  GL_AgentInvoice_TaxInvoice.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(GL_AgentInvoice_TaxInvoice, { foreignKey: "TaxAuthorityId"});
  GL_JobBill.belongsTo(Gen_TaxAuthority, { foreignKey: "STWHAuthorityId1"});
  Gen_TaxAuthority.hasMany(GL_JobBill, { foreignKey: "STWHAuthorityId1"});
  GL_JobBill.belongsTo(Gen_TaxAuthority, { foreignKey: "STWHAuthorityId2"});
  Gen_TaxAuthority.hasMany(GL_JobBill, { foreignKey: "STWHAuthorityId2"});
  GL_JobBill_Charges_Tax.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(GL_JobBill_Charges_Tax, { foreignKey: "TaxAuthorityId"});
  GL_JobBill_TaxInvoice.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(GL_JobBill_TaxInvoice, { foreignKey: "TaxAuthorityId"});
  GL_JobDirectExpRev_Charges_Tax.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(GL_JobDirectExpRev_Charges_Tax, { foreignKey: "TaxAuthorityId"});
  GL_JobInvoice_Charges_Tax.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(GL_JobInvoice_Charges_Tax, { foreignKey: "TaxAuthorityId"});
  GL_JobInvoice_TaxInvoice.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(GL_JobInvoice_TaxInvoice, { foreignKey: "TaxAuthorityId"});
  GL_JobPayment.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityID"});
  Gen_TaxAuthority.hasMany(GL_JobPayment, { foreignKey: "TaxAuthorityID"});
  GL_JobPaymentRequisition.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityID"});
  Gen_TaxAuthority.hasMany(GL_JobPaymentRequisition, { foreignKey: "TaxAuthorityID"});
  GL_PrincipalManualSOA_Charges_Tax.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(GL_PrincipalManualSOA_Charges_Tax, { foreignKey: "TaxAuthorityId"});
  GL_PrincipleInvoice_Charges_Tax.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(GL_PrincipleInvoice_Charges_Tax, { foreignKey: "TaxAuthorityId"});
  GL_PrincipleInvoice_TaxInvoice.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(GL_PrincipleInvoice_TaxInvoice, { foreignKey: "TaxAuthorityId"});
  Gen_Charges_TaxAuthority.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(Gen_Charges_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxRevDistribution_Detail.belongsTo(Gen_TaxAuthority, { foreignKey: "AuthorityId"});
  Gen_TaxAuthority.hasMany(Gen_TaxRevDistribution_Detail, { foreignKey: "AuthorityId"});
  Log_Job_ChargesPayb_TaxExpShare.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(Log_Job_ChargesPayb_TaxExpShare, { foreignKey: "TaxAuthorityId"});
  Log_Job_ChargesRecv_TaxRevShare.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(Log_Job_ChargesRecv_TaxRevShare, { foreignKey: "TaxAuthorityId"});
  SExp_SeaExportJob_ChargesPayb_TaxExpShare.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(SExp_SeaExportJob_ChargesPayb_TaxExpShare, { foreignKey: "TaxAuthorityId"});
  SExp_SeaExportJob_ChargesRecv_TaxRevShare.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(SExp_SeaExportJob_ChargesRecv_TaxRevShare, { foreignKey: "TaxAuthorityId"});
  SImp_SeaImportJob_ChargesPayb_TaxExpShare.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(SImp_SeaImportJob_ChargesPayb_TaxExpShare, { foreignKey: "TaxAuthorityId"});
  SImp_SeaImportJob_ChargesRecv_TaxRevShare.belongsTo(Gen_TaxAuthority, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthority.hasMany(SImp_SeaImportJob_ChargesRecv_TaxRevShare, { foreignKey: "TaxAuthorityId"});
  Gen_TaxAuthorityGroup_Detail.belongsTo(Gen_TaxAuthorityGroup, { foreignKey: "TaxAuthorityGroupId"});
  Gen_TaxAuthorityGroup.hasMany(Gen_TaxAuthorityGroup_Detail, { foreignKey: "TaxAuthorityGroupId"});
  GL_COA_PartyInfo.belongsTo(Gen_TaxFilerStatus, { foreignKey: "FilerStatusId"});
  Gen_TaxFilerStatus.hasMany(GL_COA_PartyInfo, { foreignKey: "FilerStatusId"});
  GL_Voucher.belongsTo(Gen_TaxFilerStatus, { foreignKey: "FilerStatusId"});
  Gen_TaxFilerStatus.hasMany(GL_Voucher, { foreignKey: "FilerStatusId"});
  GL_COA_PartyInfo.belongsTo(Gen_TaxInvNature, { foreignKey: "TaxNatureId"});
  Gen_TaxInvNature.hasMany(GL_COA_PartyInfo, { foreignKey: "TaxNatureId"});
  GL_Voucher.belongsTo(Gen_TaxInvNature, { foreignKey: "TaxNatureId"});
  Gen_TaxInvNature.hasMany(GL_Voucher, { foreignKey: "TaxNatureId"});
  AExp_AirExportJob.belongsTo(Gen_TaxRevDistribution, { foreignKey: "TaxDistributionId"});
  Gen_TaxRevDistribution.hasMany(AExp_AirExportJob, { foreignKey: "TaxDistributionId"});
  AExp_AirExportJob_ChargesPayb.belongsTo(Gen_TaxRevDistribution, { foreignKey: "DistributionId"});
  Gen_TaxRevDistribution.hasMany(AExp_AirExportJob_ChargesPayb, { foreignKey: "DistributionId"});
  AExp_AirExportJob_ChargesRecv.belongsTo(Gen_TaxRevDistribution, { foreignKey: "DistributionId"});
  Gen_TaxRevDistribution.hasMany(AExp_AirExportJob_ChargesRecv, { foreignKey: "DistributionId"});
  AImp_AirImportJob.belongsTo(Gen_TaxRevDistribution, { foreignKey: "TaxDistributionId"});
  Gen_TaxRevDistribution.hasMany(AImp_AirImportJob, { foreignKey: "TaxDistributionId"});
  AImp_AirImportJob_ChargesPayb.belongsTo(Gen_TaxRevDistribution, { foreignKey: "DistributionId"});
  Gen_TaxRevDistribution.hasMany(AImp_AirImportJob_ChargesPayb, { foreignKey: "DistributionId"});
  AImp_AirImportJob_ChargesRecv.belongsTo(Gen_TaxRevDistribution, { foreignKey: "DistributionId"});
  Gen_TaxRevDistribution.hasMany(AImp_AirImportJob_ChargesRecv, { foreignKey: "DistributionId"});
  Gen_Parties_CostCenterRight.belongsTo(Gen_TaxRevDistribution, { foreignKey: "DistributionId"});
  Gen_TaxRevDistribution.hasMany(Gen_Parties_CostCenterRight, { foreignKey: "DistributionId"});
  Gen_TaxRevDistribution_Detail.belongsTo(Gen_TaxRevDistribution, { foreignKey: "DistriID"});
  Gen_TaxRevDistribution.hasMany(Gen_TaxRevDistribution_Detail, { foreignKey: "DistriID"});
  Log_Job.belongsTo(Gen_TaxRevDistribution, { foreignKey: "TaxDistributionId"});
  Gen_TaxRevDistribution.hasMany(Log_Job, { foreignKey: "TaxDistributionId"});
  Log_Job_ChargesPayb.belongsTo(Gen_TaxRevDistribution, { foreignKey: "DistributionId"});
  Gen_TaxRevDistribution.hasMany(Log_Job_ChargesPayb, { foreignKey: "DistributionId"});
  Log_Job_ChargesRecv.belongsTo(Gen_TaxRevDistribution, { foreignKey: "DistributionId"});
  Gen_TaxRevDistribution.hasMany(Log_Job_ChargesRecv, { foreignKey: "DistributionId"});
  SExp_SeaExportJob.belongsTo(Gen_TaxRevDistribution, { foreignKey: "DistributionId"});
  Gen_TaxRevDistribution.hasMany(SExp_SeaExportJob, { foreignKey: "DistributionId"});
  SExp_SeaExportJob_ChargesPayb.belongsTo(Gen_TaxRevDistribution, { foreignKey: "DistributionId"});
  Gen_TaxRevDistribution.hasMany(SExp_SeaExportJob_ChargesPayb, { foreignKey: "DistributionId"});
  SExp_SeaExportJob_ChargesRecv.belongsTo(Gen_TaxRevDistribution, { foreignKey: "DistributionId"});
  Gen_TaxRevDistribution.hasMany(SExp_SeaExportJob_ChargesRecv, { foreignKey: "DistributionId"});
  SImp_SeaImportJob.belongsTo(Gen_TaxRevDistribution, { foreignKey: "TaxDistributionId"});
  Gen_TaxRevDistribution.hasMany(SImp_SeaImportJob, { foreignKey: "TaxDistributionId"});
  SImp_SeaImportJob_ChargesPayb.belongsTo(Gen_TaxRevDistribution, { foreignKey: "DistributionId"});
  Gen_TaxRevDistribution.hasMany(SImp_SeaImportJob_ChargesPayb, { foreignKey: "DistributionId"});
  SImp_SeaImportJob_ChargesRecv.belongsTo(Gen_TaxRevDistribution, { foreignKey: "DistributionId"});
  Gen_TaxRevDistribution.hasMany(SImp_SeaImportJob_ChargesRecv, { foreignKey: "DistributionId"});
  Gen_TerminalStockRequirement_Detail.belongsTo(Gen_TerminalStockRequirement, { foreignKey: "StockReqId"});
  Gen_TerminalStockRequirement.hasMany(Gen_TerminalStockRequirement_Detail, { foreignKey: "StockReqId"});
  AExp_AirExportJob_TracingDoc.belongsTo(Gen_TracingEvents, { foreignKey: "ParentTracingId"});
  Gen_TracingEvents.hasMany(AExp_AirExportJob_TracingDoc, { foreignKey: "ParentTracingId"});
  AExp_AirExportJob_TracingDoc.belongsTo(Gen_TracingEvents, { foreignKey: "TracingEventId"});
  Gen_TracingEvents.hasMany(AExp_AirExportJob_TracingDoc, { foreignKey: "TracingEventId"});
  AExp_AirExportJob_TracingOpr.belongsTo(Gen_TracingEvents, { foreignKey: "ParentTracingId"});
  Gen_TracingEvents.hasMany(AExp_AirExportJob_TracingOpr, { foreignKey: "ParentTracingId"});
  AExp_AirExportJob_TracingOpr.belongsTo(Gen_TracingEvents, { foreignKey: "TracingEventId"});
  Gen_TracingEvents.hasMany(AExp_AirExportJob_TracingOpr, { foreignKey: "TracingEventId"});
  AImp_AirImportJob_TracingDoc.belongsTo(Gen_TracingEvents, { foreignKey: "ParentTracingId"});
  Gen_TracingEvents.hasMany(AImp_AirImportJob_TracingDoc, { foreignKey: "ParentTracingId"});
  AImp_AirImportJob_TracingDoc.belongsTo(Gen_TracingEvents, { foreignKey: "TracingEventId"});
  Gen_TracingEvents.hasMany(AImp_AirImportJob_TracingDoc, { foreignKey: "TracingEventId"});
  AImp_AirImportJob_TracingOpr.belongsTo(Gen_TracingEvents, { foreignKey: "ParentTracingId"});
  Gen_TracingEvents.hasMany(AImp_AirImportJob_TracingOpr, { foreignKey: "ParentTracingId"});
  AImp_AirImportJob_TracingOpr.belongsTo(Gen_TracingEvents, { foreignKey: "TracingEventId"});
  Gen_TracingEvents.hasMany(AImp_AirImportJob_TracingOpr, { foreignKey: "TracingEventId"});
  Gen_MileStone_Detail.belongsTo(Gen_TracingEvents, { foreignKey: "ParentTracingId"});
  Gen_TracingEvents.hasMany(Gen_MileStone_Detail, { foreignKey: "ParentTracingId"});
  Gen_MileStone_Detail.belongsTo(Gen_TracingEvents, { foreignKey: "TracingId"});
  Gen_TracingEvents.hasMany(Gen_MileStone_Detail, { foreignKey: "TracingId"});
  Gen_Parties_Exception.belongsTo(Gen_TracingEvents, { foreignKey: "TracingEventId"});
  Gen_TracingEvents.hasMany(Gen_Parties_Exception, { foreignKey: "TracingEventId"});
  Gen_Port_Exception.belongsTo(Gen_TracingEvents, { foreignKey: "TracingEventId"});
  Gen_TracingEvents.hasMany(Gen_Port_Exception, { foreignKey: "TracingEventId"});
  Log_Job_TracingDoc.belongsTo(Gen_TracingEvents, { foreignKey: "ParentTracingId"});
  Gen_TracingEvents.hasMany(Log_Job_TracingDoc, { foreignKey: "ParentTracingId"});
  Log_Job_TracingDoc.belongsTo(Gen_TracingEvents, { foreignKey: "TracingEventId"});
  Gen_TracingEvents.hasMany(Log_Job_TracingDoc, { foreignKey: "TracingEventId"});
  Log_Job_TracingOpr.belongsTo(Gen_TracingEvents, { foreignKey: "ParentTracingId"});
  Gen_TracingEvents.hasMany(Log_Job_TracingOpr, { foreignKey: "ParentTracingId"});
  Log_Job_TracingOpr.belongsTo(Gen_TracingEvents, { foreignKey: "TracingEventId"});
  Gen_TracingEvents.hasMany(Log_Job_TracingOpr, { foreignKey: "TracingEventId"});
  SExp_SeaExportJob_TracingDoc.belongsTo(Gen_TracingEvents, { foreignKey: "ParentTracingId"});
  Gen_TracingEvents.hasMany(SExp_SeaExportJob_TracingDoc, { foreignKey: "ParentTracingId"});
  SExp_SeaExportJob_TracingDoc.belongsTo(Gen_TracingEvents, { foreignKey: "TracingEventId"});
  Gen_TracingEvents.hasMany(SExp_SeaExportJob_TracingDoc, { foreignKey: "TracingEventId"});
  SExp_SeaExportJob_TracingOpr.belongsTo(Gen_TracingEvents, { foreignKey: "ParentTracingId"});
  Gen_TracingEvents.hasMany(SExp_SeaExportJob_TracingOpr, { foreignKey: "ParentTracingId"});
  SExp_SeaExportJob_TracingOpr.belongsTo(Gen_TracingEvents, { foreignKey: "TracingEventId"});
  Gen_TracingEvents.hasMany(SExp_SeaExportJob_TracingOpr, { foreignKey: "TracingEventId"});
  SImp_SeaImportJob_TracingDoc.belongsTo(Gen_TracingEvents, { foreignKey: "ParentTracingId"});
  Gen_TracingEvents.hasMany(SImp_SeaImportJob_TracingDoc, { foreignKey: "ParentTracingId"});
  SImp_SeaImportJob_TracingDoc.belongsTo(Gen_TracingEvents, { foreignKey: "TracingEventId"});
  Gen_TracingEvents.hasMany(SImp_SeaImportJob_TracingDoc, { foreignKey: "TracingEventId"});
  SImp_SeaImportJob_TracingOpr.belongsTo(Gen_TracingEvents, { foreignKey: "ParentTracingId"});
  Gen_TracingEvents.hasMany(SImp_SeaImportJob_TracingOpr, { foreignKey: "ParentTracingId"});
  SImp_SeaImportJob_TracingOpr.belongsTo(Gen_TracingEvents, { foreignKey: "TracingEventId"});
  Gen_TracingEvents.hasMany(SImp_SeaImportJob_TracingOpr, { foreignKey: "TracingEventId"});
  AExp_AirExportJob_TracingDoc.belongsTo(Gen_TracingEventsAutoPick, { foreignKey: "BasedOnId"});
  Gen_TracingEventsAutoPick.hasMany(AExp_AirExportJob_TracingDoc, { foreignKey: "BasedOnId"});
  AExp_AirExportJob_TracingOpr.belongsTo(Gen_TracingEventsAutoPick, { foreignKey: "BasedOnId"});
  Gen_TracingEventsAutoPick.hasMany(AExp_AirExportJob_TracingOpr, { foreignKey: "BasedOnId"});
  AImp_AirImportJob_TracingDoc.belongsTo(Gen_TracingEventsAutoPick, { foreignKey: "BasedOnId"});
  Gen_TracingEventsAutoPick.hasMany(AImp_AirImportJob_TracingDoc, { foreignKey: "BasedOnId"});
  AImp_AirImportJob_TracingOpr.belongsTo(Gen_TracingEventsAutoPick, { foreignKey: "BasedOnId"});
  Gen_TracingEventsAutoPick.hasMany(AImp_AirImportJob_TracingOpr, { foreignKey: "BasedOnId"});
  Gen_MileStone_Detail.belongsTo(Gen_TracingEventsAutoPick, { foreignKey: "BasedOnId"});
  Gen_TracingEventsAutoPick.hasMany(Gen_MileStone_Detail, { foreignKey: "BasedOnId"});
  Gen_TracingEvents.belongsTo(Gen_TracingEventsAutoPick, { foreignKey: "AutoPickId"});
  Gen_TracingEventsAutoPick.hasMany(Gen_TracingEvents, { foreignKey: "AutoPickId"});
  Log_Job_TracingDoc.belongsTo(Gen_TracingEventsAutoPick, { foreignKey: "BasedOnId"});
  Gen_TracingEventsAutoPick.hasMany(Log_Job_TracingDoc, { foreignKey: "BasedOnId"});
  Log_Job_TracingOpr.belongsTo(Gen_TracingEventsAutoPick, { foreignKey: "BasedOnId"});
  Gen_TracingEventsAutoPick.hasMany(Log_Job_TracingOpr, { foreignKey: "BasedOnId"});
  SExp_SeaExportJob_TracingDoc.belongsTo(Gen_TracingEventsAutoPick, { foreignKey: "BasedOnId"});
  Gen_TracingEventsAutoPick.hasMany(SExp_SeaExportJob_TracingDoc, { foreignKey: "BasedOnId"});
  SExp_SeaExportJob_TracingOpr.belongsTo(Gen_TracingEventsAutoPick, { foreignKey: "BasedOnId"});
  Gen_TracingEventsAutoPick.hasMany(SExp_SeaExportJob_TracingOpr, { foreignKey: "BasedOnId"});
  SImp_SeaImportJob_TracingDoc.belongsTo(Gen_TracingEventsAutoPick, { foreignKey: "BasedOnId"});
  Gen_TracingEventsAutoPick.hasMany(SImp_SeaImportJob_TracingDoc, { foreignKey: "BasedOnId"});
  SImp_SeaImportJob_TracingOpr.belongsTo(Gen_TracingEventsAutoPick, { foreignKey: "BasedOnId"});
  Gen_TracingEventsAutoPick.hasMany(SImp_SeaImportJob_TracingOpr, { foreignKey: "BasedOnId"});
  INQ_RateInquiry_Detail.belongsTo(Gen_ULDContainers, { foreignKey: "AirContainerTypeId"});
  Gen_ULDContainers.hasMany(INQ_RateInquiry_Detail, { foreignKey: "AirContainerTypeId"});
  AExp_AirExportJob.belongsTo(Gen_UNAirport, { foreignKey: "AirPortOfDischargeId"});
  Gen_UNAirport.hasMany(AExp_AirExportJob, { foreignKey: "AirPortOfDischargeId"});
  AExp_AirExportJob.belongsTo(Gen_UNAirport, { foreignKey: "AirPortOfLoadingId"});
  Gen_UNAirport.hasMany(AExp_AirExportJob, { foreignKey: "AirPortOfLoadingId"});
  AExp_AirExportJob.belongsTo(Gen_UNAirport, { foreignKey: "AirPortOfTranshipmentId"});
  Gen_UNAirport.hasMany(AExp_AirExportJob, { foreignKey: "AirPortOfTranshipmentId"});
  AExp_AirExportJob.belongsTo(Gen_UNAirport, { foreignKey: "AirPortOfTranshipment1Id"});
  Gen_UNAirport.hasMany(AExp_AirExportJob, { foreignKey: "AirPortOfTranshipment1Id"});
  AExp_AirExportJob.belongsTo(Gen_UNAirport, { foreignKey: "AirPortOfTranshipment2Id"});
  Gen_UNAirport.hasMany(AExp_AirExportJob, { foreignKey: "AirPortOfTranshipment2Id"});
  AExp_AirExportJob_LastMilestone.belongsTo(Gen_UNAirport, { foreignKey: "PortOfDischargeCode"});
  Gen_UNAirport.hasMany(AExp_AirExportJob_LastMilestone, { foreignKey: "PortOfDischargeCode"});
  AExp_AirExportJob_LastMilestone.belongsTo(Gen_UNAirport, { foreignKey: "PortOfLoadingCode"});
  Gen_UNAirport.hasMany(AExp_AirExportJob_LastMilestone, { foreignKey: "PortOfLoadingCode"});
  AImp_AirImportJob.belongsTo(Gen_UNAirport, { foreignKey: "AirPortOfDischargeId"});
  Gen_UNAirport.hasMany(AImp_AirImportJob, { foreignKey: "AirPortOfDischargeId"});
  AImp_AirImportJob.belongsTo(Gen_UNAirport, { foreignKey: "AirPortOfLoadingId"});
  Gen_UNAirport.hasMany(AImp_AirImportJob, { foreignKey: "AirPortOfLoadingId"});
  AImp_AirImportJob.belongsTo(Gen_UNAirport, { foreignKey: "AirPortOfTranshipmentId"});
  Gen_UNAirport.hasMany(AImp_AirImportJob, { foreignKey: "AirPortOfTranshipmentId"});
  AImp_AirImportJob_LastMilestone.belongsTo(Gen_UNAirport, { foreignKey: "PortOfDischargeCode"});
  Gen_UNAirport.hasMany(AImp_AirImportJob_LastMilestone, { foreignKey: "PortOfDischargeCode"});
  AImp_AirImportJob_LastMilestone.belongsTo(Gen_UNAirport, { foreignKey: "PortOfLoadingCode"});
  Gen_UNAirport.hasMany(AImp_AirImportJob_LastMilestone, { foreignKey: "PortOfLoadingCode"});
  AImp_AirImportJob__LastMilestone.belongsTo(Gen_UNAirport, { foreignKey: "PortOfDischargeCode"});
  Gen_UNAirport.hasMany(AImp_AirImportJob__LastMilestone, { foreignKey: "PortOfDischargeCode"});
  AImp_AirImportJob__LastMilestone.belongsTo(Gen_UNAirport, { foreignKey: "PortOfLoadingCode"});
  Gen_UNAirport.hasMany(AImp_AirImportJob__LastMilestone, { foreignKey: "PortOfLoadingCode"});
  AImp_ManifestHeader.belongsTo(Gen_UNAirport, { foreignKey: "LocalAirPortId"});
  Gen_UNAirport.hasMany(AImp_ManifestHeader, { foreignKey: "LocalAirPortId"});
  Gen_ChargesTariff_AirDetail.belongsTo(Gen_UNAirport, { foreignKey: "AirPortOfDischargeId"});
  Gen_UNAirport.hasMany(Gen_ChargesTariff_AirDetail, { foreignKey: "AirPortOfDischargeId"});
  Gen_ChargesTariff_AirDetail.belongsTo(Gen_UNAirport, { foreignKey: "AirPortOfLoadingId"});
  Gen_UNAirport.hasMany(Gen_ChargesTariff_AirDetail, { foreignKey: "AirPortOfLoadingId"});
  Gen_Quotation.belongsTo(Gen_UNAirport, { foreignKey: "AirPortOfDischargeId"});
  Gen_UNAirport.hasMany(Gen_Quotation, { foreignKey: "AirPortOfDischargeId"});
  Gen_Quotation.belongsTo(Gen_UNAirport, { foreignKey: "AirPortOfLoadingId"});
  Gen_UNAirport.hasMany(Gen_Quotation, { foreignKey: "AirPortOfLoadingId"});
  Gen_Quotation_Detail.belongsTo(Gen_UNAirport, { foreignKey: "AirPortofDischargeId"});
  Gen_UNAirport.hasMany(Gen_Quotation_Detail, { foreignKey: "AirPortofDischargeId"});
  Gen_Quotation_Detail.belongsTo(Gen_UNAirport, { foreignKey: "AirPortofLoadingId"});
  Gen_UNAirport.hasMany(Gen_Quotation_Detail, { foreignKey: "AirPortofLoadingId"});
  Gen_UNAirport_Aliases.belongsTo(Gen_UNAirport, { foreignKey: "AirportId"});
  Gen_UNAirport.hasMany(Gen_UNAirport_Aliases, { foreignKey: "AirportId"});
  INQ_RateInquiry.belongsTo(Gen_UNAirport, { foreignKey: "DestinationAirportId"});
  Gen_UNAirport.hasMany(INQ_RateInquiry, { foreignKey: "DestinationAirportId"});
  INQ_RateInquiry.belongsTo(Gen_UNAirport, { foreignKey: "OriginAirportId"});
  Gen_UNAirport.hasMany(INQ_RateInquiry, { foreignKey: "OriginAirportId"});
  AExp_AirExportJob.belongsTo(Gen_UNLocation, { foreignKey: "FinalDestinationCode"});
  Gen_UNLocation.hasMany(AExp_AirExportJob, { foreignKey: "FinalDestinationCode"});
  AExp_AirExportJob.belongsTo(Gen_UNLocation, { foreignKey: "PortOfReceiptCode"});
  Gen_UNLocation.hasMany(AExp_AirExportJob, { foreignKey: "PortOfReceiptCode"});
  AExp_AirExportJob_ExtMilestone.belongsTo(Gen_UNLocation, { foreignKey: "LocationCode"});
  Gen_UNLocation.hasMany(AExp_AirExportJob_ExtMilestone, { foreignKey: "LocationCode"});
  AExp_AirExportJob_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "LastLocationCode"});
  Gen_UNLocation.hasMany(AExp_AirExportJob_LastMilestone, { foreignKey: "LastLocationCode"});
  AExp_AirExportJob_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfFinalDestinationCode"});
  Gen_UNLocation.hasMany(AExp_AirExportJob_LastMilestone, { foreignKey: "PortOfFinalDestinationCode"});
  AExp_AirExportJob_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfReceiptCode"});
  Gen_UNLocation.hasMany(AExp_AirExportJob_LastMilestone, { foreignKey: "PortOfReceiptCode"});
  AImp_AirImportJob.belongsTo(Gen_UNLocation, { foreignKey: "FinalDestinationCode"});
  Gen_UNLocation.hasMany(AImp_AirImportJob, { foreignKey: "FinalDestinationCode"});
  AImp_AirImportJob.belongsTo(Gen_UNLocation, { foreignKey: "PortOfReceiptCode"});
  Gen_UNLocation.hasMany(AImp_AirImportJob, { foreignKey: "PortOfReceiptCode"});
  AImp_AirImportJob_ExtMilestone.belongsTo(Gen_UNLocation, { foreignKey: "LocationCode"});
  Gen_UNLocation.hasMany(AImp_AirImportJob_ExtMilestone, { foreignKey: "LocationCode"});
  AImp_AirImportJob_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "LastLocationCode"});
  Gen_UNLocation.hasMany(AImp_AirImportJob_LastMilestone, { foreignKey: "LastLocationCode"});
  AImp_AirImportJob_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfFinalDestinationCode"});
  Gen_UNLocation.hasMany(AImp_AirImportJob_LastMilestone, { foreignKey: "PortOfFinalDestinationCode"});
  AImp_AirImportJob_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfReceiptCode"});
  Gen_UNLocation.hasMany(AImp_AirImportJob_LastMilestone, { foreignKey: "PortOfReceiptCode"});
  AImp_AirImportJob__LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "LastLocationCode"});
  Gen_UNLocation.hasMany(AImp_AirImportJob__LastMilestone, { foreignKey: "LastLocationCode"});
  AImp_AirImportJob__LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfFinalDestinationCode"});
  Gen_UNLocation.hasMany(AImp_AirImportJob__LastMilestone, { foreignKey: "PortOfFinalDestinationCode"});
  AImp_AirImportJob__LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfReceiptCode"});
  Gen_UNLocation.hasMany(AImp_AirImportJob__LastMilestone, { foreignKey: "PortOfReceiptCode"});
  AImp_ManifestHeader.belongsTo(Gen_UNLocation, { foreignKey: "CountryCode"});
  Gen_UNLocation.hasMany(AImp_ManifestHeader, { foreignKey: "CountryCode"});
  AImp_ManifestHeader.belongsTo(Gen_UNLocation, { foreignKey: "LastPortofCallCode"});
  Gen_UNLocation.hasMany(AImp_ManifestHeader, { foreignKey: "LastPortofCallCode"});
  CTrk_ContainerActivity.belongsTo(Gen_UNLocation, { foreignKey: "CorrespondingPort"});
  Gen_UNLocation.hasMany(CTrk_ContainerActivity, { foreignKey: "CorrespondingPort"});
  CTrk_ContainerActivity.belongsTo(Gen_UNLocation, { foreignKey: "PortCode"});
  Gen_UNLocation.hasMany(CTrk_ContainerActivity, { foreignKey: "PortCode"});
  CTrk_ContainerCycle.belongsTo(Gen_UNLocation, { foreignKey: "ExpPortOfDischargeCode"});
  Gen_UNLocation.hasMany(CTrk_ContainerCycle, { foreignKey: "ExpPortOfDischargeCode"});
  CTrk_ContainerCycle.belongsTo(Gen_UNLocation, { foreignKey: "ExpPortOfFinalDestCode"});
  Gen_UNLocation.hasMany(CTrk_ContainerCycle, { foreignKey: "ExpPortOfFinalDestCode"});
  CTrk_ContainerCycle.belongsTo(Gen_UNLocation, { foreignKey: "ExpPortOfLoadingCode"});
  Gen_UNLocation.hasMany(CTrk_ContainerCycle, { foreignKey: "ExpPortOfLoadingCode"});
  CTrk_ContainerCycle.belongsTo(Gen_UNLocation, { foreignKey: "ExpPortOfTranshipmentCode"});
  Gen_UNLocation.hasMany(CTrk_ContainerCycle, { foreignKey: "ExpPortOfTranshipmentCode"});
  CTrk_ContainerCycle.belongsTo(Gen_UNLocation, { foreignKey: "ImpPortOfDischargeCode"});
  Gen_UNLocation.hasMany(CTrk_ContainerCycle, { foreignKey: "ImpPortOfDischargeCode"});
  CTrk_ContainerCycle.belongsTo(Gen_UNLocation, { foreignKey: "ImpPortOfFinalDestCode"});
  Gen_UNLocation.hasMany(CTrk_ContainerCycle, { foreignKey: "ImpPortOfFinalDestCode"});
  CTrk_ContainerCycle.belongsTo(Gen_UNLocation, { foreignKey: "ImpPortOfLoadingCode"});
  Gen_UNLocation.hasMany(CTrk_ContainerCycle, { foreignKey: "ImpPortOfLoadingCode"});
  CTrk_ContainerCycle.belongsTo(Gen_UNLocation, { foreignKey: "ImpPortOfTranshipmentCode"});
  Gen_UNLocation.hasMany(CTrk_ContainerCycle, { foreignKey: "ImpPortOfTranshipmentCode"});
  DEPO_ContainerActivity.belongsTo(Gen_UNLocation, { foreignKey: "PortDestCode"});
  Gen_UNLocation.hasMany(DEPO_ContainerActivity, { foreignKey: "PortDestCode"});
  DEPO_ContainerActivity.belongsTo(Gen_UNLocation, { foreignKey: "PortDischgCode"});
  Gen_UNLocation.hasMany(DEPO_ContainerActivity, { foreignKey: "PortDischgCode"});
  DEPO_ContainerActivity.belongsTo(Gen_UNLocation, { foreignKey: "PortPOLCode"});
  Gen_UNLocation.hasMany(DEPO_ContainerActivity, { foreignKey: "PortPOLCode"});
  GL_AccountIntegration_PartyParent.belongsTo(Gen_UNLocation, { foreignKey: "CityCode"});
  Gen_UNLocation.hasMany(GL_AccountIntegration_PartyParent, { foreignKey: "CityCode"});
  GL_AccountIntegration_PartyParent_Log.belongsTo(Gen_UNLocation, { foreignKey: "CityCode"});
  Gen_UNLocation.hasMany(GL_AccountIntegration_PartyParent_Log, { foreignKey: "CityCode"});
  GL_AgentInvoice.belongsTo(Gen_UNLocation, { foreignKey: "PortCode"});
  Gen_UNLocation.hasMany(GL_AgentInvoice, { foreignKey: "PortCode"});
  GL_AgentInvoice.belongsTo(Gen_UNLocation, { foreignKey: "PortOfDischargeCode"});
  Gen_UNLocation.hasMany(GL_AgentInvoice, { foreignKey: "PortOfDischargeCode"});
  GL_JobBill.belongsTo(Gen_UNLocation, { foreignKey: "PortCode"});
  Gen_UNLocation.hasMany(GL_JobBill, { foreignKey: "PortCode"});
  GL_JobInvoice.belongsTo(Gen_UNLocation, { foreignKey: "PortCode"});
  Gen_UNLocation.hasMany(GL_JobInvoice, { foreignKey: "PortCode"});
  GL_RunningDetention.belongsTo(Gen_UNLocation, { foreignKey: "TerminalCode"});
  Gen_UNLocation.hasMany(GL_RunningDetention, { foreignKey: "TerminalCode"});
  Gen_ChargesTariff_Detail.belongsTo(Gen_UNLocation, { foreignKey: "ConsigneeCity"});
  Gen_UNLocation.hasMany(Gen_ChargesTariff_Detail, { foreignKey: "ConsigneeCity"});
  Gen_ChargesTariff_Detail.belongsTo(Gen_UNLocation, { foreignKey: "PODCode"});
  Gen_UNLocation.hasMany(Gen_ChargesTariff_Detail, { foreignKey: "PODCode"});
  Gen_ChargesTariff_Detail.belongsTo(Gen_UNLocation, { foreignKey: "POLCode"});
  Gen_UNLocation.hasMany(Gen_ChargesTariff_Detail, { foreignKey: "POLCode"});
  Gen_ChargesTariff_PlugIn.belongsTo(Gen_UNLocation, { foreignKey: "TerminalCode"});
  Gen_UNLocation.hasMany(Gen_ChargesTariff_PlugIn, { foreignKey: "TerminalCode"});
  Gen_ContainerDepot.belongsTo(Gen_UNLocation, { foreignKey: "UNLocCode"});
  Gen_UNLocation.hasMany(Gen_ContainerDepot, { foreignKey: "UNLocCode"});
  Gen_DetentionTariff.belongsTo(Gen_UNLocation, { foreignKey: "PODCode"});
  Gen_UNLocation.hasMany(Gen_DetentionTariff, { foreignKey: "PODCode"});
  Gen_DetentionTariff.belongsTo(Gen_UNLocation, { foreignKey: "POLCode"});
  Gen_UNLocation.hasMany(Gen_DetentionTariff, { foreignKey: "POLCode"});
  Gen_DetentionTariff_Detention.belongsTo(Gen_UNLocation, { foreignKey: "dPODCode"});
  Gen_UNLocation.hasMany(Gen_DetentionTariff_Detention, { foreignKey: "dPODCode"});
  Gen_DetentionTariff_Detention.belongsTo(Gen_UNLocation, { foreignKey: "dPOLCode"});
  Gen_UNLocation.hasMany(Gen_DetentionTariff_Detention, { foreignKey: "dPOLCode"});
  Gen_DetentionTariff_Detention.belongsTo(Gen_UNLocation, { foreignKey: "TerminalCode"});
  Gen_UNLocation.hasMany(Gen_DetentionTariff_Detention, { foreignKey: "TerminalCode"});
  Gen_DetentionTariff_PlugIn.belongsTo(Gen_UNLocation, { foreignKey: "TerminalCode"});
  Gen_UNLocation.hasMany(Gen_DetentionTariff_PlugIn, { foreignKey: "TerminalCode"});
  Gen_EDIProcessed.belongsTo(Gen_UNLocation, { foreignKey: "PortOfReceiptCode"});
  Gen_UNLocation.hasMany(Gen_EDIProcessed, { foreignKey: "PortOfReceiptCode"});
  Gen_EDIProcessed.belongsTo(Gen_UNLocation, { foreignKey: "PortOfDischargeCode"});
  Gen_UNLocation.hasMany(Gen_EDIProcessed, { foreignKey: "PortOfDischargeCode"});
  Gen_EDIProcessed.belongsTo(Gen_UNLocation, { foreignKey: "PortOfFinalDestCode"});
  Gen_UNLocation.hasMany(Gen_EDIProcessed, { foreignKey: "PortOfFinalDestCode"});
  Gen_EDIProcessed.belongsTo(Gen_UNLocation, { foreignKey: "PortOfLoadingCode"});
  Gen_UNLocation.hasMany(Gen_EDIProcessed, { foreignKey: "PortOfLoadingCode"});
  Gen_EDIProcessed.belongsTo(Gen_UNLocation, { foreignKey: "PortOfTranshipment1Code"});
  Gen_UNLocation.hasMany(Gen_EDIProcessed, { foreignKey: "PortOfTranshipment1Code"});
  Gen_EDIProcessed.belongsTo(Gen_UNLocation, { foreignKey: "PortOfTranshipment2Code"});
  Gen_UNLocation.hasMany(Gen_EDIProcessed, { foreignKey: "PortOfTranshipment2Code"});
  Gen_EDIProcessed.belongsTo(Gen_UNLocation, { foreignKey: "ViaPortCode"});
  Gen_UNLocation.hasMany(Gen_EDIProcessed, { foreignKey: "ViaPortCode"});
  Gen_Flight_Schedule.belongsTo(Gen_UNLocation, { foreignKey: "AirPortOfFlight"});
  Gen_UNLocation.hasMany(Gen_Flight_Schedule, { foreignKey: "AirPortOfFlight"});
  Gen_ManifestHeader.belongsTo(Gen_UNLocation, { foreignKey: "CountryCode"});
  Gen_UNLocation.hasMany(Gen_ManifestHeader, { foreignKey: "CountryCode"});
  Gen_ManifestHeader.belongsTo(Gen_UNLocation, { foreignKey: "LastPortofCallCode"});
  Gen_UNLocation.hasMany(Gen_ManifestHeader, { foreignKey: "LastPortofCallCode"});
  Gen_ManifestHeader.belongsTo(Gen_UNLocation, { foreignKey: "LocalPortCode"});
  Gen_UNLocation.hasMany(Gen_ManifestHeader, { foreignKey: "LocalPortCode"});
  Gen_NearByPorts.belongsTo(Gen_UNLocation, { foreignKey: "NearByPort"});
  Gen_UNLocation.hasMany(Gen_NearByPorts, { foreignKey: "NearByPort"});
  Gen_NearByPorts.belongsTo(Gen_UNLocation, { foreignKey: "PortCode"});
  Gen_UNLocation.hasMany(Gen_NearByPorts, { foreignKey: "PortCode"});
  Gen_Parties.belongsTo(Gen_UNLocation, { foreignKey: "CityCode"});
  Gen_UNLocation.hasMany(Gen_Parties, { foreignKey: "CityCode"});
  Gen_Parties.belongsTo(Gen_UNLocation, { foreignKey: "CountryCode"});
  Gen_UNLocation.hasMany(Gen_Parties, { foreignKey: "CountryCode"});
  Gen_PartiesCommitment_Detail.belongsTo(Gen_UNLocation, { foreignKey: "PortCode"});
  Gen_UNLocation.hasMany(Gen_PartiesCommitment_Detail, { foreignKey: "PortCode"});
  Gen_Parties_Locations.belongsTo(Gen_UNLocation, { foreignKey: "CityCode"});
  Gen_UNLocation.hasMany(Gen_Parties_Locations, { foreignKey: "CityCode"});
  Gen_Parties_Locations.belongsTo(Gen_UNLocation, { foreignKey: "CountryCode"});
  Gen_UNLocation.hasMany(Gen_Parties_Locations, { foreignKey: "CountryCode"});
  Gen_Parties_Locations.belongsTo(Gen_UNLocation, { foreignKey: "PortCode"});
  Gen_UNLocation.hasMany(Gen_Parties_Locations, { foreignKey: "PortCode"});
  Gen_PortCountryException.belongsTo(Gen_UNLocation, { foreignKey: "CityCode"});
  Gen_UNLocation.hasMany(Gen_PortCountryException, { foreignKey: "CityCode"});
  Gen_PortCountryException.belongsTo(Gen_UNLocation, { foreignKey: "CountryCode"});
  Gen_UNLocation.hasMany(Gen_PortCountryException, { foreignKey: "CountryCode"});
  Gen_Port_Exception.belongsTo(Gen_UNLocation, { foreignKey: "PODCode"});
  Gen_UNLocation.hasMany(Gen_Port_Exception, { foreignKey: "PODCode"});
  Gen_Port_Exception.belongsTo(Gen_UNLocation, { foreignKey: "POFDCode"});
  Gen_UNLocation.hasMany(Gen_Port_Exception, { foreignKey: "POFDCode"});
  Gen_Port_Exception.belongsTo(Gen_UNLocation, { foreignKey: "POLCode"});
  Gen_UNLocation.hasMany(Gen_Port_Exception, { foreignKey: "POLCode"});
  Gen_Port_Exception.belongsTo(Gen_UNLocation, { foreignKey: "PORCode"});
  Gen_UNLocation.hasMany(Gen_Port_Exception, { foreignKey: "PORCode"});
  Gen_Quotation.belongsTo(Gen_UNLocation, { foreignKey: "PortOfDischargeCode"});
  Gen_UNLocation.hasMany(Gen_Quotation, { foreignKey: "PortOfDischargeCode"});
  Gen_Quotation.belongsTo(Gen_UNLocation, { foreignKey: "PortOfFinalDestCode"});
  Gen_UNLocation.hasMany(Gen_Quotation, { foreignKey: "PortOfFinalDestCode"});
  Gen_Quotation.belongsTo(Gen_UNLocation, { foreignKey: "PortOfLoadingCode"});
  Gen_UNLocation.hasMany(Gen_Quotation, { foreignKey: "PortOfLoadingCode"});
  Gen_Quotation.belongsTo(Gen_UNLocation, { foreignKey: "PortOfReceiptCode"});
  Gen_UNLocation.hasMany(Gen_Quotation, { foreignKey: "PortOfReceiptCode"});
  Gen_Quotation_Detail.belongsTo(Gen_UNLocation, { foreignKey: "FromPortCode"});
  Gen_UNLocation.hasMany(Gen_Quotation_Detail, { foreignKey: "FromPortCode"});
  Gen_Quotation_Detail.belongsTo(Gen_UNLocation, { foreignKey: "TillPortCode"});
  Gen_UNLocation.hasMany(Gen_Quotation_Detail, { foreignKey: "TillPortCode"});
  Gen_Quotation_Detail.belongsTo(Gen_UNLocation, { foreignKey: "ViaPortCode"});
  Gen_UNLocation.hasMany(Gen_Quotation_Detail, { foreignKey: "ViaPortCode"});
  Gen_SeaAccessorialCharge.belongsTo(Gen_UNLocation, { foreignKey: "PODCode"});
  Gen_UNLocation.hasMany(Gen_SeaAccessorialCharge, { foreignKey: "PODCode"});
  Gen_SeaAccessorialCharge.belongsTo(Gen_UNLocation, { foreignKey: "POFDCode"});
  Gen_UNLocation.hasMany(Gen_SeaAccessorialCharge, { foreignKey: "POFDCode"});
  Gen_SeaAccessorialCharge.belongsTo(Gen_UNLocation, { foreignKey: "POLCode"});
  Gen_UNLocation.hasMany(Gen_SeaAccessorialCharge, { foreignKey: "POLCode"});
  Gen_SeaAccessorialCharge.belongsTo(Gen_UNLocation, { foreignKey: "PORCode"});
  Gen_UNLocation.hasMany(Gen_SeaAccessorialCharge, { foreignKey: "PORCode"});
  Gen_SeaInterimRate.belongsTo(Gen_UNLocation, { foreignKey: "PODCode"});
  Gen_UNLocation.hasMany(Gen_SeaInterimRate, { foreignKey: "PODCode"});
  Gen_SeaInterimRate.belongsTo(Gen_UNLocation, { foreignKey: "POFDCode"});
  Gen_UNLocation.hasMany(Gen_SeaInterimRate, { foreignKey: "POFDCode"});
  Gen_SeaInterimRate.belongsTo(Gen_UNLocation, { foreignKey: "POLCode"});
  Gen_UNLocation.hasMany(Gen_SeaInterimRate, { foreignKey: "POLCode"});
  Gen_SeaInterimRate.belongsTo(Gen_UNLocation, { foreignKey: "PORCode"});
  Gen_UNLocation.hasMany(Gen_SeaInterimRate, { foreignKey: "PORCode"});
  Gen_SeaPublishRate.belongsTo(Gen_UNLocation, { foreignKey: "PODCode"});
  Gen_UNLocation.hasMany(Gen_SeaPublishRate, { foreignKey: "PODCode"});
  Gen_SeaPublishRate.belongsTo(Gen_UNLocation, { foreignKey: "POFDCode"});
  Gen_UNLocation.hasMany(Gen_SeaPublishRate, { foreignKey: "POFDCode"});
  Gen_SeaPublishRate.belongsTo(Gen_UNLocation, { foreignKey: "POLCode"});
  Gen_UNLocation.hasMany(Gen_SeaPublishRate, { foreignKey: "POLCode"});
  Gen_SeaPublishRate.belongsTo(Gen_UNLocation, { foreignKey: "PORCode"});
  Gen_UNLocation.hasMany(Gen_SeaPublishRate, { foreignKey: "PORCode"});
  Gen_SubCompanies.belongsTo(Gen_UNLocation, { foreignKey: "CountryCode"});
  Gen_UNLocation.hasMany(Gen_SubCompanies, { foreignKey: "CountryCode"});
  Gen_UNAirport.belongsTo(Gen_UNLocation, { foreignKey: "CityUNCode"});
  Gen_UNLocation.hasMany(Gen_UNAirport, { foreignKey: "CityUNCode"});
  Gen_UNAirport.belongsTo(Gen_UNLocation, { foreignKey: "CountryUNCode"});
  Gen_UNLocation.hasMany(Gen_UNAirport, { foreignKey: "CountryUNCode"});
  Gen_UNLocation.belongsTo(Gen_UNLocation, { foreignKey: "AlternatePortCode"});
  Gen_UNLocation.hasMany(Gen_UNLocation, { foreignKey: "AlternatePortCode"});
  Gen_UNLocation.belongsTo(Gen_UNLocation, { foreignKey: "CountryCode"});
  Gen_UNLocation.hasMany(Gen_UNLocation, { foreignKey: "CountryCode"});
  Gen_UNLocation_Aliases.belongsTo(Gen_UNLocation, { foreignKey: "UNLocCode"});
  Gen_UNLocation.hasMany(Gen_UNLocation_Aliases, { foreignKey: "UNLocCode"});
  Gen_UNLocation_PortCategory.belongsTo(Gen_UNLocation, { foreignKey: "UNLocCode"});
  Gen_UNLocation.hasMany(Gen_UNLocation_PortCategory, { foreignKey: "UNLocCode"});
  Gen_Users.belongsTo(Gen_UNLocation, { foreignKey: "UserPortCode"});
  Gen_UNLocation.hasMany(Gen_Users, { foreignKey: "UserPortCode"});
  Gen_Vessel.belongsTo(Gen_UNLocation, { foreignKey: "CountryOfRegistry"});
  Gen_UNLocation.hasMany(Gen_Vessel, { foreignKey: "CountryOfRegistry"});
  Gen_Voyage.belongsTo(Gen_UNLocation, { foreignKey: "TerminalCode"});
  Gen_UNLocation.hasMany(Gen_Voyage, { foreignKey: "TerminalCode"});
  Gen_Voyage.belongsTo(Gen_UNLocation, { foreignKey: "PortOfDischarge"});
  Gen_UNLocation.hasMany(Gen_Voyage, { foreignKey: "PortOfDischarge"});
  Gen_Voyage.belongsTo(Gen_UNLocation, { foreignKey: "PortOfLoadingCode"});
  Gen_UNLocation.hasMany(Gen_Voyage, { foreignKey: "PortOfLoadingCode"});
  Gen_Voyage_Terminal.belongsTo(Gen_UNLocation, { foreignKey: "LocalPortCode"});
  Gen_UNLocation.hasMany(Gen_Voyage_Terminal, { foreignKey: "LocalPortCode"});
  INQ_RateInquiry.belongsTo(Gen_UNLocation, { foreignKey: "DestinationCityId"});
  Gen_UNLocation.hasMany(INQ_RateInquiry, { foreignKey: "DestinationCityId"});
  INQ_RateInquiry.belongsTo(Gen_UNLocation, { foreignKey: "OriginCityId"});
  Gen_UNLocation.hasMany(INQ_RateInquiry, { foreignKey: "OriginCityId"});
  Log_DutyCalculation.belongsTo(Gen_UNLocation, { foreignKey: "PortOfOriginCode"});
  Gen_UNLocation.hasMany(Log_DutyCalculation, { foreignKey: "PortOfOriginCode"});
  Log_Job.belongsTo(Gen_UNLocation, { foreignKey: "PODCode"});
  Gen_UNLocation.hasMany(Log_Job, { foreignKey: "PODCode"});
  Log_Job.belongsTo(Gen_UNLocation, { foreignKey: "POFDCode"});
  Gen_UNLocation.hasMany(Log_Job, { foreignKey: "POFDCode"});
  Log_Job.belongsTo(Gen_UNLocation, { foreignKey: "POLCode"});
  Gen_UNLocation.hasMany(Log_Job, { foreignKey: "POLCode"});
  Log_JobActivities.belongsTo(Gen_UNLocation, { foreignKey: "LocCode"});
  Gen_UNLocation.hasMany(Log_JobActivities, { foreignKey: "LocCode"});
  Log_JobActivities.belongsTo(Gen_UNLocation, { foreignKey: "NextLocCode"});
  Gen_UNLocation.hasMany(Log_JobActivities, { foreignKey: "NextLocCode"});
  Log_Job_ExtMilestone.belongsTo(Gen_UNLocation, { foreignKey: "LocationCode"});
  Gen_UNLocation.hasMany(Log_Job_ExtMilestone, { foreignKey: "LocationCode"});
  Log_Job_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "LastLocationCode"});
  Gen_UNLocation.hasMany(Log_Job_LastMilestone, { foreignKey: "LastLocationCode"});
  Log_Job_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfDischargeCode"});
  Gen_UNLocation.hasMany(Log_Job_LastMilestone, { foreignKey: "PortOfDischargeCode"});
  Log_Job_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfFinalDestinationCode"});
  Gen_UNLocation.hasMany(Log_Job_LastMilestone, { foreignKey: "PortOfFinalDestinationCode"});
  Log_Job_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfLoadingCode"});
  Gen_UNLocation.hasMany(Log_Job_LastMilestone, { foreignKey: "PortOfLoadingCode"});
  Log_Job_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfReceiptCode"});
  Gen_UNLocation.hasMany(Log_Job_LastMilestone, { foreignKey: "PortOfReceiptCode"});
  SExp_BL_ProductInfo.belongsTo(Gen_UNLocation, { foreignKey: "CountryOfOriginCode"});
  Gen_UNLocation.hasMany(SExp_BL_ProductInfo, { foreignKey: "CountryOfOriginCode"});
  SExp_BookingConfirmFromCarrier.belongsTo(Gen_UNLocation, { foreignKey: "PortOfDischargeCode"});
  Gen_UNLocation.hasMany(SExp_BookingConfirmFromCarrier, { foreignKey: "PortOfDischargeCode"});
  SExp_BookingConfirmFromCarrier.belongsTo(Gen_UNLocation, { foreignKey: "PortOfFinalDestCode"});
  Gen_UNLocation.hasMany(SExp_BookingConfirmFromCarrier, { foreignKey: "PortOfFinalDestCode"});
  SExp_BookingConfirmFromCarrier.belongsTo(Gen_UNLocation, { foreignKey: "PortOfLoadingCode"});
  Gen_UNLocation.hasMany(SExp_BookingConfirmFromCarrier, { foreignKey: "PortOfLoadingCode"});
  SExp_BookingConfirmFromCarrier.belongsTo(Gen_UNLocation, { foreignKey: "PortOfReceiptCode"});
  Gen_UNLocation.hasMany(SExp_BookingConfirmFromCarrier, { foreignKey: "PortOfReceiptCode"});
  SExp_BookingRequest.belongsTo(Gen_UNLocation, { foreignKey: "PortOfDischargeCode"});
  Gen_UNLocation.hasMany(SExp_BookingRequest, { foreignKey: "PortOfDischargeCode"});
  SExp_BookingRequest.belongsTo(Gen_UNLocation, { foreignKey: "PortOfFinalDestCode"});
  Gen_UNLocation.hasMany(SExp_BookingRequest, { foreignKey: "PortOfFinalDestCode"});
  SExp_BookingRequest.belongsTo(Gen_UNLocation, { foreignKey: "PortOfLoadingCode"});
  Gen_UNLocation.hasMany(SExp_BookingRequest, { foreignKey: "PortOfLoadingCode"});
  SExp_BookingRequest.belongsTo(Gen_UNLocation, { foreignKey: "PortOfReceiptCode"});
  Gen_UNLocation.hasMany(SExp_BookingRequest, { foreignKey: "PortOfReceiptCode"});
  SExp_CRO.belongsTo(Gen_UNLocation, { foreignKey: "DischargePortCode"});
  Gen_UNLocation.hasMany(SExp_CRO, { foreignKey: "DischargePortCode"});
  SExp_CRO.belongsTo(Gen_UNLocation, { foreignKey: "FinalDestPortCode"});
  Gen_UNLocation.hasMany(SExp_CRO, { foreignKey: "FinalDestPortCode"});
  SExp_CRO.belongsTo(Gen_UNLocation, { foreignKey: "LoadingPortCode"});
  Gen_UNLocation.hasMany(SExp_CRO, { foreignKey: "LoadingPortCode"});
  SExp_DeliveryNote.belongsTo(Gen_UNLocation, { foreignKey: "DestinationCode"});
  Gen_UNLocation.hasMany(SExp_DeliveryNote, { foreignKey: "DestinationCode"});
  SExp_LoadingProgram.belongsTo(Gen_UNLocation, { foreignKey: "DestinationTerminalCode"});
  Gen_UNLocation.hasMany(SExp_LoadingProgram, { foreignKey: "DestinationTerminalCode"});
  SExp_LoadingProgram.belongsTo(Gen_UNLocation, { foreignKey: "OriginTerminalCode"});
  Gen_UNLocation.hasMany(SExp_LoadingProgram, { foreignKey: "OriginTerminalCode"});
  SExp_LoadingProgram.belongsTo(Gen_UNLocation, { foreignKey: "PortOfDischargeCode"});
  Gen_UNLocation.hasMany(SExp_LoadingProgram, { foreignKey: "PortOfDischargeCode"});
  SExp_LoadingProgram.belongsTo(Gen_UNLocation, { foreignKey: "PortOfLoadingCode"});
  Gen_UNLocation.hasMany(SExp_LoadingProgram, { foreignKey: "PortOfLoadingCode"});
  SExp_LoadingProgram.belongsTo(Gen_UNLocation, { foreignKey: "PortOfReceiptCode"});
  Gen_UNLocation.hasMany(SExp_LoadingProgram, { foreignKey: "PortOfReceiptCode"});
  SExp_SeaExportJob.belongsTo(Gen_UNLocation, { foreignKey: "FinalDestinationCode"});
  Gen_UNLocation.hasMany(SExp_SeaExportJob, { foreignKey: "FinalDestinationCode"});
  SExp_SeaExportJob.belongsTo(Gen_UNLocation, { foreignKey: "FreightPayableAtCode"});
  Gen_UNLocation.hasMany(SExp_SeaExportJob, { foreignKey: "FreightPayableAtCode"});
  SExp_SeaExportJob.belongsTo(Gen_UNLocation, { foreignKey: "PortOfReceiptCode"});
  Gen_UNLocation.hasMany(SExp_SeaExportJob, { foreignKey: "PortOfReceiptCode"});
  SExp_SeaExportJob.belongsTo(Gen_UNLocation, { foreignKey: "PortOfDischargeCode"});
  Gen_UNLocation.hasMany(SExp_SeaExportJob, { foreignKey: "PortOfDischargeCode"});
  SExp_SeaExportJob.belongsTo(Gen_UNLocation, { foreignKey: "PortOfFinalDestCode"});
  Gen_UNLocation.hasMany(SExp_SeaExportJob, { foreignKey: "PortOfFinalDestCode"});
  SExp_SeaExportJob.belongsTo(Gen_UNLocation, { foreignKey: "PortOfLoadingCode"});
  Gen_UNLocation.hasMany(SExp_SeaExportJob, { foreignKey: "PortOfLoadingCode"});
  SExp_SeaExportJob.belongsTo(Gen_UNLocation, { foreignKey: "PortOfTranshipmentCode"});
  Gen_UNLocation.hasMany(SExp_SeaExportJob, { foreignKey: "PortOfTranshipmentCode"});
  SExp_SeaExportJob.belongsTo(Gen_UNLocation, { foreignKey: "PortOfTranshipment1Code"});
  Gen_UNLocation.hasMany(SExp_SeaExportJob, { foreignKey: "PortOfTranshipment1Code"});
  SExp_SeaExportJob.belongsTo(Gen_UNLocation, { foreignKey: "PortOfTranshipment2Code"});
  Gen_UNLocation.hasMany(SExp_SeaExportJob, { foreignKey: "PortOfTranshipment2Code"});
  SExp_SeaExportJob.belongsTo(Gen_UNLocation, { foreignKey: "ViaPortCode"});
  Gen_UNLocation.hasMany(SExp_SeaExportJob, { foreignKey: "ViaPortCode"});
  SExp_SeaExportJob_ExtMilestone.belongsTo(Gen_UNLocation, { foreignKey: "LocationCode"});
  Gen_UNLocation.hasMany(SExp_SeaExportJob_ExtMilestone, { foreignKey: "LocationCode"});
  SExp_SeaExportJob_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "LastLocationCode"});
  Gen_UNLocation.hasMany(SExp_SeaExportJob_LastMilestone, { foreignKey: "LastLocationCode"});
  SExp_SeaExportJob_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfDischargeCode"});
  Gen_UNLocation.hasMany(SExp_SeaExportJob_LastMilestone, { foreignKey: "PortOfDischargeCode"});
  SExp_SeaExportJob_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfFinalDestinationCode"});
  Gen_UNLocation.hasMany(SExp_SeaExportJob_LastMilestone, { foreignKey: "PortOfFinalDestinationCode"});
  SExp_SeaExportJob_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfLoadingCode"});
  Gen_UNLocation.hasMany(SExp_SeaExportJob_LastMilestone, { foreignKey: "PortOfLoadingCode"});
  SExp_SeaExportJob_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfReceiptCode"});
  Gen_UNLocation.hasMany(SExp_SeaExportJob_LastMilestone, { foreignKey: "PortOfReceiptCode"});
  SExp_ShippingInstruction.belongsTo(Gen_UNLocation, { foreignKey: "PODCode"});
  Gen_UNLocation.hasMany(SExp_ShippingInstruction, { foreignKey: "PODCode"});
  SExp_ShippingInstruction.belongsTo(Gen_UNLocation, { foreignKey: "POFDCode"});
  Gen_UNLocation.hasMany(SExp_ShippingInstruction, { foreignKey: "POFDCode"});
  SExp_ShippingInstruction.belongsTo(Gen_UNLocation, { foreignKey: "POLCode"});
  Gen_UNLocation.hasMany(SExp_ShippingInstruction, { foreignKey: "POLCode"});
  SExp_ShippingInstruction.belongsTo(Gen_UNLocation, { foreignKey: "PORCode"});
  Gen_UNLocation.hasMany(SExp_ShippingInstruction, { foreignKey: "PORCode"});
  SExp_StuffingPlan.belongsTo(Gen_UNLocation, { foreignKey: "PortOfDischargeCode"});
  Gen_UNLocation.hasMany(SExp_StuffingPlan, { foreignKey: "PortOfDischargeCode"});
  SExp_SwitchBL_Detail.belongsTo(Gen_UNLocation, { foreignKey: "FreightPayableAtCode"});
  Gen_UNLocation.hasMany(SExp_SwitchBL_Detail, { foreignKey: "FreightPayableAtCode"});
  SExp_SwitchBL_Detail.belongsTo(Gen_UNLocation, { foreignKey: "PortOfReceiptCode"});
  Gen_UNLocation.hasMany(SExp_SwitchBL_Detail, { foreignKey: "PortOfReceiptCode"});
  SExp_SwitchBL_Detail.belongsTo(Gen_UNLocation, { foreignKey: "PortOfDeliveryCode"});
  Gen_UNLocation.hasMany(SExp_SwitchBL_Detail, { foreignKey: "PortOfDeliveryCode"});
  SExp_SwitchBL_Detail.belongsTo(Gen_UNLocation, { foreignKey: "PortOfDischargeCode"});
  Gen_UNLocation.hasMany(SExp_SwitchBL_Detail, { foreignKey: "PortOfDischargeCode"});
  SExp_SwitchBL_Detail.belongsTo(Gen_UNLocation, { foreignKey: "PortOfLoadingCode"});
  Gen_UNLocation.hasMany(SExp_SwitchBL_Detail, { foreignKey: "PortOfLoadingCode"});
  SImp_BL_Detail.belongsTo(Gen_UNLocation, { foreignKey: "ConsigneeCityCode"});
  Gen_UNLocation.hasMany(SImp_BL_Detail, { foreignKey: "ConsigneeCityCode"});
  SImp_BL_Detail.belongsTo(Gen_UNLocation, { foreignKey: "CountryOfOriginCode"});
  Gen_UNLocation.hasMany(SImp_BL_Detail, { foreignKey: "CountryOfOriginCode"});
  SImp_BL_Detail.belongsTo(Gen_UNLocation, { foreignKey: "ShipperCityCode"});
  Gen_UNLocation.hasMany(SImp_BL_Detail, { foreignKey: "ShipperCityCode"});
  SImp_BL_ProductInfo.belongsTo(Gen_UNLocation, { foreignKey: "CountryOfOriginCode"});
  Gen_UNLocation.hasMany(SImp_BL_ProductInfo, { foreignKey: "CountryOfOriginCode"});
  SImp_SeaImportJob.belongsTo(Gen_UNLocation, { foreignKey: "FinalDestinationCode"});
  Gen_UNLocation.hasMany(SImp_SeaImportJob, { foreignKey: "FinalDestinationCode"});
  SImp_SeaImportJob.belongsTo(Gen_UNLocation, { foreignKey: "FreightPayableAtCode"});
  Gen_UNLocation.hasMany(SImp_SeaImportJob, { foreignKey: "FreightPayableAtCode"});
  SImp_SeaImportJob.belongsTo(Gen_UNLocation, { foreignKey: "PortOfReceiptCode"});
  Gen_UNLocation.hasMany(SImp_SeaImportJob, { foreignKey: "PortOfReceiptCode"});
  SImp_SeaImportJob.belongsTo(Gen_UNLocation, { foreignKey: "PortOfDischargeCode"});
  Gen_UNLocation.hasMany(SImp_SeaImportJob, { foreignKey: "PortOfDischargeCode"});
  SImp_SeaImportJob.belongsTo(Gen_UNLocation, { foreignKey: "PortOfFinalDestCode"});
  Gen_UNLocation.hasMany(SImp_SeaImportJob, { foreignKey: "PortOfFinalDestCode"});
  SImp_SeaImportJob.belongsTo(Gen_UNLocation, { foreignKey: "PortOfLoadingCode"});
  Gen_UNLocation.hasMany(SImp_SeaImportJob, { foreignKey: "PortOfLoadingCode"});
  SImp_SeaImportJob.belongsTo(Gen_UNLocation, { foreignKey: "PortOfTranshipmentCode"});
  Gen_UNLocation.hasMany(SImp_SeaImportJob, { foreignKey: "PortOfTranshipmentCode"});
  SImp_SeaImportJob.belongsTo(Gen_UNLocation, { foreignKey: "ViaPortCode"});
  Gen_UNLocation.hasMany(SImp_SeaImportJob, { foreignKey: "ViaPortCode"});
  SImp_SeaImportJob_ExtMilestone.belongsTo(Gen_UNLocation, { foreignKey: "LocationCode"});
  Gen_UNLocation.hasMany(SImp_SeaImportJob_ExtMilestone, { foreignKey: "LocationCode"});
  SImp_SeaImportJob_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "LastLocationCode"});
  Gen_UNLocation.hasMany(SImp_SeaImportJob_LastMilestone, { foreignKey: "LastLocationCode"});
  SImp_SeaImportJob_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfDischargeCode"});
  Gen_UNLocation.hasMany(SImp_SeaImportJob_LastMilestone, { foreignKey: "PortOfDischargeCode"});
  SImp_SeaImportJob_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfFinalDestinationCode"});
  Gen_UNLocation.hasMany(SImp_SeaImportJob_LastMilestone, { foreignKey: "PortOfFinalDestinationCode"});
  SImp_SeaImportJob_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfLoadingCode"});
  Gen_UNLocation.hasMany(SImp_SeaImportJob_LastMilestone, { foreignKey: "PortOfLoadingCode"});
  SImp_SeaImportJob_LastMilestone.belongsTo(Gen_UNLocation, { foreignKey: "PortOfReceiptCode"});
  Gen_UNLocation.hasMany(SImp_SeaImportJob_LastMilestone, { foreignKey: "PortOfReceiptCode"});
  WMS_CargoStuffing.belongsTo(Gen_UNLocation, { foreignKey: "PortCode"});
  Gen_UNLocation.hasMany(WMS_CargoStuffing, { foreignKey: "PortCode"});
  WMS_GRN.belongsTo(Gen_UNLocation, { foreignKey: "PortOfDischargeCode"});
  Gen_UNLocation.hasMany(WMS_GRN, { foreignKey: "PortOfDischargeCode"});
  Gen_Commodity.belongsTo(Gen_UnCommodity, { foreignKey: "HSCode"});
  Gen_UnCommodity.hasMany(Gen_Commodity, { foreignKey: "HSCode"});
  SExp_BL_Detail.belongsTo(Gen_UnCommodity, { foreignKey: "HSCode"});
  Gen_UnCommodity.hasMany(SExp_BL_Detail, { foreignKey: "HSCode"});
  SExp_ShippingInstruction.belongsTo(Gen_UnCommodity, { foreignKey: "HSCode"});
  Gen_UnCommodity.hasMany(SExp_ShippingInstruction, { foreignKey: "HSCode"});
  SImp_BL_Detail.belongsTo(Gen_UnCommodity, { foreignKey: "HSCode"});
  Gen_UnCommodity.hasMany(SImp_BL_Detail, { foreignKey: "HSCode"});
  SImp_BL_Detail.belongsTo(Gen_UnitsOfMeasurment, { foreignKey: "QuantityUnitId"});
  Gen_UnitsOfMeasurment.hasMany(SImp_BL_Detail, { foreignKey: "QuantityUnitId"});
  Gen_UserDashboardPreference_Detail.belongsTo(Gen_UserDashboardPreference, { foreignKey: "UserDashboardPreferanceId"});
  Gen_UserDashboardPreference.hasMany(Gen_UserDashboardPreference_Detail, { foreignKey: "UserDashboardPreferanceId"});
  DocumentSignRequest.belongsTo(Gen_Users, { foreignKey: "CustomerId"});
  Gen_Users.hasMany(DocumentSignRequest, { foreignKey: "CustomerId"});
  Gen_Session.belongsTo(Gen_Users, { foreignKey: "UserId"});
  Gen_Users.hasMany(Gen_Session, { foreignKey: "UserId"});
  Gen_Parties.belongsTo(Gen_VendorGroup, { foreignKey: "VendorGroupId"});
  Gen_VendorGroup.hasMany(Gen_Parties, { foreignKey: "VendorGroupId"});
  CTrk_ContainerCycle.belongsTo(Gen_Vessel, { foreignKey: "ExpVesselId"});
  Gen_Vessel.hasMany(CTrk_ContainerCycle, { foreignKey: "ExpVesselId"});
  CTrk_ContainerCycle.belongsTo(Gen_Vessel, { foreignKey: "ImpVesselId"});
  Gen_Vessel.hasMany(CTrk_ContainerCycle, { foreignKey: "ImpVesselId"});
  CVHM_GuaranteeFilling.belongsTo(Gen_Vessel, { foreignKey: "VesselID"});
  Gen_Vessel.hasMany(CVHM_GuaranteeFilling, { foreignKey: "VesselID"});
  CVHM_GuaranteeFillingContainer.belongsTo(Gen_Vessel, { foreignKey: "DischargeVesselID"});
  Gen_Vessel.hasMany(CVHM_GuaranteeFillingContainer, { foreignKey: "DischargeVesselID"});
  CVHM_GuaranteeFillingContainer.belongsTo(Gen_Vessel, { foreignKey: "LoadingVesselID"});
  Gen_Vessel.hasMany(CVHM_GuaranteeFillingContainer, { foreignKey: "LoadingVesselID"});
  DEPO_ContainerActivity.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(DEPO_ContainerActivity, { foreignKey: "VesselId"});
  GL_JobBill.belongsTo(Gen_Vessel, { foreignKey: "crtVesselId"});
  Gen_Vessel.hasMany(GL_JobBill, { foreignKey: "crtVesselId"});
  Gen_EDIProcessed.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(Gen_EDIProcessed, { foreignKey: "VesselId"});
  Gen_ISoftVesselMapping.belongsTo(Gen_Vessel, { foreignKey: "CSULVesselId"});
  Gen_Vessel.hasMany(Gen_ISoftVesselMapping, { foreignKey: "CSULVesselId"});
  Gen_ManifestHeader.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(Gen_ManifestHeader, { foreignKey: "VesselId"});
  Gen_PEDIMapping.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(Gen_PEDIMapping, { foreignKey: "VesselId"});
  Gen_Voyage.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(Gen_Voyage, { foreignKey: "VesselId"});
  INQ_RateToCustomer.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(INQ_RateToCustomer, { foreignKey: "VesselId"});
  Log_Job.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(Log_Job, { foreignKey: "VesselId"});
  SExp_BL.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(SExp_BL, { foreignKey: "VesselId"});
  SExp_BookingConfirmFromCarrier.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(SExp_BookingConfirmFromCarrier, { foreignKey: "VesselId"});
  SExp_BookingRequest.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(SExp_BookingRequest, { foreignKey: "VesselId"});
  SExp_CRO.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(SExp_CRO, { foreignKey: "VesselId"});
  SExp_NOC.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(SExp_NOC, { foreignKey: "VesselId"});
  SExp_SeaExportJob.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(SExp_SeaExportJob, { foreignKey: "VesselId"});
  SExp_SeaExportJob.belongsTo(Gen_Vessel, { foreignKey: "MotherVesselId"});
  Gen_Vessel.hasMany(SExp_SeaExportJob, { foreignKey: "MotherVesselId"});
  SExp_SeaExportJob.belongsTo(Gen_Vessel, { foreignKey: "POT1VesselId"});
  Gen_Vessel.hasMany(SExp_SeaExportJob, { foreignKey: "POT1VesselId"});
  SExp_SeaExportJob.belongsTo(Gen_Vessel, { foreignKey: "POTVesselId"});
  Gen_Vessel.hasMany(SExp_SeaExportJob, { foreignKey: "POTVesselId"});
  SExp_SwitchBL.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(SExp_SwitchBL, { foreignKey: "VesselId"});
  SImp_BL.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(SImp_BL, { foreignKey: "VesselId"});
  SImp_PreAlert.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(SImp_PreAlert, { foreignKey: "VesselId"});
  SImp_SeaImportJob.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(SImp_SeaImportJob, { foreignKey: "VesselId"});
  SImp_SeaImportJob.belongsTo(Gen_Vessel, { foreignKey: "MotherVesselId"});
  Gen_Vessel.hasMany(SImp_SeaImportJob, { foreignKey: "MotherVesselId"});
  WMS_CargoStuffing.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(WMS_CargoStuffing, { foreignKey: "VesselId"});
  WMS_GRN.belongsTo(Gen_Vessel, { foreignKey: "VesselId"});
  Gen_Vessel.hasMany(WMS_GRN, { foreignKey: "VesselId"});
  Gen_Voyage_ExchRateDetail.belongsTo(Gen_Voyage, { foreignKey: "VoyageId"});
  Gen_Voyage.hasMany(Gen_Voyage_ExchRateDetail, { foreignKey: "VoyageId"});
  Gen_Voyage_Terminal.belongsTo(Gen_Voyage, { foreignKey: "VoyageId"});
  Gen_Voyage.hasMany(Gen_Voyage_Terminal, { foreignKey: "VoyageId"});
  SExp_LoadingProgram.belongsTo(Gen_Wharf, { foreignKey: "WharfId"});
  Gen_Wharf.hasMany(SExp_LoadingProgram, { foreignKey: "WharfId"});
  INQ_QuoteChargeTemplate_Detail.belongsTo(INQ_QuoteChargeTemplate, { foreignKey: "QuoteTemplateId"});
  INQ_QuoteChargeTemplate.hasMany(INQ_QuoteChargeTemplate_Detail, { foreignKey: "QuoteTemplateId"});
  INQ_RateFromVendor_Charges.belongsTo(INQ_RateFromVendor, { foreignKey: "RateFromVendorId"});
  INQ_RateFromVendor.hasMany(INQ_RateFromVendor_Charges, { foreignKey: "RateFromVendorId"});
  INQ_RateFromVendor.belongsTo(INQ_RateInquiry, { foreignKey: "InquiryId"});
  INQ_RateInquiry.hasMany(INQ_RateFromVendor, { foreignKey: "InquiryId"});
  INQ_RateInquiry_Detail.belongsTo(INQ_RateInquiry, { foreignKey: "RateInquiryId"});
  INQ_RateInquiry.hasMany(INQ_RateInquiry_Detail, { foreignKey: "RateInquiryId"});
  INQ_RateRequestToVendor.belongsTo(INQ_RateInquiry, { foreignKey: "InquiryId"});
  INQ_RateInquiry.hasMany(INQ_RateRequestToVendor, { foreignKey: "InquiryId"});
  INQ_RateToCustomer.belongsTo(INQ_RateInquiry, { foreignKey: "InquiryId"});
  INQ_RateInquiry.hasMany(INQ_RateToCustomer, { foreignKey: "InquiryId"});
  INQ_RateToCustomer_Charges.belongsTo(INQ_RateToCustomer, { foreignKey: "RateToCustomerId"});
  INQ_RateToCustomer.hasMany(INQ_RateToCustomer_Charges, { foreignKey: "RateToCustomerId"});
  Charge_Heads.belongsTo(Invoices, { foreignKey: "InvoiceId"});
  Invoices.hasMany(Charge_Heads, { foreignKey: "InvoiceId"});
  Invoice_Losses.belongsTo(Invoices, { foreignKey: "InvoiceId"});
  Invoices.hasMany(Invoice_Losses, { foreignKey: "InvoiceId"});
  Invoice_Transactions.belongsTo(Invoices, { foreignKey: "InvoiceId"});
  Invoices.hasMany(Invoice_Transactions, { foreignKey: "InvoiceId"});
  Log_Activity_Detail.belongsTo(Log_Activity, { foreignKey: "LogActivityId"});
  Log_Activity.hasMany(Log_Activity_Detail, { foreignKey: "LogActivityId"});
  Log_Activity_Detail.belongsTo(Log_Activity, { foreignKey: "NextActivityId"});
  Log_Activity.hasMany(Log_Activity_Detail, { foreignKey: "NextActivityId"});
  Log_JobActivities.belongsTo(Log_Activity, { foreignKey: "ActivityId"});
  Log_Activity.hasMany(Log_JobActivities, { foreignKey: "ActivityId"});
  Log_Activity.belongsTo(Log_ActivityType, { foreignKey: "ActivityTypeId"});
  Log_ActivityType.hasMany(Log_Activity, { foreignKey: "ActivityTypeId"});
  Log_VehicleSetup.belongsTo(Log_BrandSetup, { foreignKey: "BrandId"});
  Log_BrandSetup.hasMany(Log_VehicleSetup, { foreignKey: "BrandId"});
  Log_CarrierManifest_Detail.belongsTo(Log_CarrierManifest, { foreignKey: "CMId"});
  Log_CarrierManifest.hasMany(Log_CarrierManifest_Detail, { foreignKey: "CMId"});
  Log_DutyCalculation_PODetail.belongsTo(Log_DutyCalculation, { foreignKey: "DutyCalculationId"});
  Log_DutyCalculation.hasMany(Log_DutyCalculation_PODetail, { foreignKey: "DutyCalculationId"});
  GL_AgentInvoice.belongsTo(Log_Job, { foreignKey: "LGJobId"});
  Log_Job.hasMany(GL_AgentInvoice, { foreignKey: "LGJobId"});
  GL_AgentInvoice_Charges.belongsTo(Log_Job, { foreignKey: "dLGJobId"});
  Log_Job.hasMany(GL_AgentInvoice_Charges, { foreignKey: "dLGJobId"});
  GL_AgentInvoice_Charges_Tax.belongsTo(Log_Job, { foreignKey: "dLGJobId"});
  Log_Job.hasMany(GL_AgentInvoice_Charges_Tax, { foreignKey: "dLGJobId"});
  GL_JobBill.belongsTo(Log_Job, { foreignKey: "LGJobId"});
  Log_Job.hasMany(GL_JobBill, { foreignKey: "LGJobId"});
  GL_JobBill_Charges.belongsTo(Log_Job, { foreignKey: "dLGJobId"});
  Log_Job.hasMany(GL_JobBill_Charges, { foreignKey: "dLGJobId"});
  GL_JobBill_Charges_Cont.belongsTo(Log_Job, { foreignKey: "dLGJobId"});
  Log_Job.hasMany(GL_JobBill_Charges_Cont, { foreignKey: "dLGJobId"});
  GL_JobBill_Charges_Tax.belongsTo(Log_Job, { foreignKey: "dLGJobId"});
  Log_Job.hasMany(GL_JobBill_Charges_Tax, { foreignKey: "dLGJobId"});
  GL_JobDirectExpRev.belongsTo(Log_Job, { foreignKey: "LGJobId"});
  Log_Job.hasMany(GL_JobDirectExpRev, { foreignKey: "LGJobId"});
  GL_JobDirectExpRev_Charges.belongsTo(Log_Job, { foreignKey: "dLGJobId"});
  Log_Job.hasMany(GL_JobDirectExpRev_Charges, { foreignKey: "dLGJobId"});
  GL_JobInvoice.belongsTo(Log_Job, { foreignKey: "LGJobId"});
  Log_Job.hasMany(GL_JobInvoice, { foreignKey: "LGJobId"});
  GL_JobInvoice_Charges.belongsTo(Log_Job, { foreignKey: "dLGJobId"});
  Log_Job.hasMany(GL_JobInvoice_Charges, { foreignKey: "dLGJobId"});
  GL_JobInvoice_Charges_Cont.belongsTo(Log_Job, { foreignKey: "dLGJobId"});
  Log_Job.hasMany(GL_JobInvoice_Charges_Cont, { foreignKey: "dLGJobId"});
  GL_JobInvoice_Charges_Tax.belongsTo(Log_Job, { foreignKey: "dLGJobId"});
  Log_Job.hasMany(GL_JobInvoice_Charges_Tax, { foreignKey: "dLGJobId"});
  GL_JobPayment.belongsTo(Log_Job, { foreignKey: "crtLGJobId"});
  Log_Job.hasMany(GL_JobPayment, { foreignKey: "crtLGJobId"});
  GL_JobReceipt.belongsTo(Log_Job, { foreignKey: "crtLGJobId"});
  Log_Job.hasMany(GL_JobReceipt, { foreignKey: "crtLGJobId"});
  GL_ProcessLog.belongsTo(Log_Job, { foreignKey: "LGJobId"});
  Log_Job.hasMany(GL_ProcessLog, { foreignKey: "LGJobId"});
  Gen_LetterProcessed.belongsTo(Log_Job, { foreignKey: "LGJobId"});
  Log_Job.hasMany(Gen_LetterProcessed, { foreignKey: "LGJobId"});
  Gen_SecurityFile.belongsTo(Log_Job, { foreignKey: "LGJobId"});
  Log_Job.hasMany(Gen_SecurityFile, { foreignKey: "LGJobId"});
  Gen_SecurityFile_Detention.belongsTo(Log_Job, { foreignKey: "LGJobId"});
  Log_Job.hasMany(Gen_SecurityFile_Detention, { foreignKey: "LGJobId"});
  Gen_SecurityFile_Payable.belongsTo(Log_Job, { foreignKey: "LGJobId"});
  Log_Job.hasMany(Gen_SecurityFile_Payable, { foreignKey: "LGJobId"});
  Log_CarrierManifest_Detail.belongsTo(Log_Job, { foreignKey: "LogJobId"});
  Log_Job.hasMany(Log_CarrierManifest_Detail, { foreignKey: "LogJobId"});
  Log_DutyCalculation.belongsTo(Log_Job, { foreignKey: "LogJobId"});
  Log_Job.hasMany(Log_DutyCalculation, { foreignKey: "LogJobId"});
  Log_DutyCalculation_PODetail.belongsTo(Log_Job, { foreignKey: "LogJobId"});
  Log_Job.hasMany(Log_DutyCalculation_PODetail, { foreignKey: "LogJobId"});
  Log_JobActivities.belongsTo(Log_Job, { foreignKey: "LogJobId"});
  Log_Job.hasMany(Log_JobActivities, { foreignKey: "LogJobId"});
  Log_Job_ChargesPayb.belongsTo(Log_Job, { foreignKey: "LogJobId"});
  Log_Job.hasMany(Log_Job_ChargesPayb, { foreignKey: "LogJobId"});
  Log_Job_ChargesPayb_Cont.belongsTo(Log_Job, { foreignKey: "dLogJobId"});
  Log_Job.hasMany(Log_Job_ChargesPayb_Cont, { foreignKey: "dLogJobId"});
  Log_Job_ChargesPayb_History.belongsTo(Log_Job, { foreignKey: "LogJobId"});
  Log_Job.hasMany(Log_Job_ChargesPayb_History, { foreignKey: "LogJobId"});
  Log_Job_ChargesPayb_TaxExpShare.belongsTo(Log_Job, { foreignKey: "dLogJobId"});
  Log_Job.hasMany(Log_Job_ChargesPayb_TaxExpShare, { foreignKey: "dLogJobId"});
  Log_Job_ChargesRecv.belongsTo(Log_Job, { foreignKey: "LogJobId"});
  Log_Job.hasMany(Log_Job_ChargesRecv, { foreignKey: "LogJobId"});
  Log_Job_ChargesRecv_Cont.belongsTo(Log_Job, { foreignKey: "dLogJobId"});
  Log_Job.hasMany(Log_Job_ChargesRecv_Cont, { foreignKey: "dLogJobId"});
  Log_Job_ChargesRecv_History.belongsTo(Log_Job, { foreignKey: "LogJobId"});
  Log_Job.hasMany(Log_Job_ChargesRecv_History, { foreignKey: "LogJobId"});
  Log_Job_ChargesRecv_TaxRevShare.belongsTo(Log_Job, { foreignKey: "dLogJobId"});
  Log_Job.hasMany(Log_Job_ChargesRecv_TaxRevShare, { foreignKey: "dLogJobId"});
  Log_Job_Container.belongsTo(Log_Job, { foreignKey: "LogJobId"});
  Log_Job.hasMany(Log_Job_Container, { foreignKey: "LogJobId"});
  Log_Job_ExtMilestone.belongsTo(Log_Job, { foreignKey: "LogJobId"});
  Log_Job.hasMany(Log_Job_ExtMilestone, { foreignKey: "LogJobId"});
  Log_Job_LastMilestone.belongsTo(Log_Job, { foreignKey: "LogJobId"});
  Log_Job.hasMany(Log_Job_LastMilestone, { foreignKey: "LogJobId"});
  Log_Job_PaidByClient.belongsTo(Log_Job, { foreignKey: "LogJobId"});
  Log_Job.hasMany(Log_Job_PaidByClient, { foreignKey: "LogJobId"});
  Log_Job_TracingDoc.belongsTo(Log_Job, { foreignKey: "LogJobId"});
  Log_Job.hasMany(Log_Job_TracingDoc, { foreignKey: "LogJobId"});
  Log_Job_TracingOpr.belongsTo(Log_Job, { foreignKey: "LogJobId"});
  Log_Job.hasMany(Log_Job_TracingOpr, { foreignKey: "LogJobId"});
  WMS_Delivery.belongsTo(Log_Job, { foreignKey: "LogJobId"});
  Log_Job.hasMany(WMS_Delivery, { foreignKey: "LogJobId"});
  WMS_GRN.belongsTo(Log_Job, { foreignKey: "LogJobId"});
  Log_Job.hasMany(WMS_GRN, { foreignKey: "LogJobId"});
  Log_Job.belongsTo(Log_JobStage, { foreignKey: "JobStageId"});
  Log_JobStage.hasMany(Log_Job, { foreignKey: "JobStageId"});
  Gen_MileStone.belongsTo(Log_JobType, { foreignKey: "LogJobTypeId"});
  Log_JobType.hasMany(Gen_MileStone, { foreignKey: "LogJobTypeId"});
  Gen_MileStone_Detail.belongsTo(Log_JobType, { foreignKey: "LogJobTypeId"});
  Log_JobType.hasMany(Gen_MileStone_Detail, { foreignKey: "LogJobTypeId"});
  Gen_Quotation.belongsTo(Log_JobType, { foreignKey: "JobTypeId"});
  Log_JobType.hasMany(Gen_Quotation, { foreignKey: "JobTypeId"});
  Log_Job.belongsTo(Log_JobType, { foreignKey: "JobTypeId"});
  Log_JobType.hasMany(Log_Job, { foreignKey: "JobTypeId"});
  GL_AgentInvoice_Charges.belongsTo(Log_Job_ChargesPayb, { foreignKey: "LGJobChargesPaybId"});
  Log_Job_ChargesPayb.hasMany(GL_AgentInvoice_Charges, { foreignKey: "LGJobChargesPaybId"});
  GL_JobBill_Charges.belongsTo(Log_Job_ChargesPayb, { foreignKey: "LGJobChargesPaybId"});
  Log_Job_ChargesPayb.hasMany(GL_JobBill_Charges, { foreignKey: "LGJobChargesPaybId"});
  Log_Job_ChargesPayb_Cont.belongsTo(Log_Job_ChargesPayb, { foreignKey: "LGJobChargesPaybId"});
  Log_Job_ChargesPayb.hasMany(Log_Job_ChargesPayb_Cont, { foreignKey: "LGJobChargesPaybId"});
  Log_Job_ChargesPayb_TaxExpShare.belongsTo(Log_Job_ChargesPayb, { foreignKey: "LGJobChargesPaybId"});
  Log_Job_ChargesPayb.hasMany(Log_Job_ChargesPayb_TaxExpShare, { foreignKey: "LGJobChargesPaybId"});
  GL_AgentInvoice_Charges.belongsTo(Log_Job_ChargesRecv, { foreignKey: "LGJobChargesRecvId"});
  Log_Job_ChargesRecv.hasMany(GL_AgentInvoice_Charges, { foreignKey: "LGJobChargesRecvId"});
  GL_JobInvoice_Charges.belongsTo(Log_Job_ChargesRecv, { foreignKey: "LGJobChargesRecvId"});
  Log_Job_ChargesRecv.hasMany(GL_JobInvoice_Charges, { foreignKey: "LGJobChargesRecvId"});
  Log_Job_ChargesRecv_Cont.belongsTo(Log_Job_ChargesRecv, { foreignKey: "LGJobChargesRecvId"});
  Log_Job_ChargesRecv.hasMany(Log_Job_ChargesRecv_Cont, { foreignKey: "LGJobChargesRecvId"});
  Log_Job_ChargesRecv_TaxRevShare.belongsTo(Log_Job_ChargesRecv, { foreignKey: "LGJobChargesRecvId"});
  Log_Job_ChargesRecv.hasMany(Log_Job_ChargesRecv_TaxRevShare, { foreignKey: "LGJobChargesRecvId"});
  Log_JobActivities.belongsTo(Log_Job_Container, { foreignKey: "LogJobContainerId"});
  Log_Job_Container.hasMany(Log_JobActivities, { foreignKey: "LogJobContainerId"});
  Log_Job_ChargesPayb_Cont.belongsTo(Log_Job_Container, { foreignKey: "LGJobContainerId"});
  Log_Job_Container.hasMany(Log_Job_ChargesPayb_Cont, { foreignKey: "LGJobContainerId"});
  Log_Job_ChargesRecv_Cont.belongsTo(Log_Job_Container, { foreignKey: "LGJobContainerId"});
  Log_Job_Container.hasMany(Log_Job_ChargesRecv_Cont, { foreignKey: "LGJobContainerId"});
  Log_VehicleSetup.belongsTo(Log_MakeSetup, { foreignKey: "MakeId"});
  Log_MakeSetup.hasMany(Log_VehicleSetup, { foreignKey: "MakeId"});
  Log_CarrierManifest.belongsTo(Log_VehicleSetup, { foreignKey: "VehicleId"});
  Log_VehicleSetup.hasMany(Log_CarrierManifest, { foreignKey: "VehicleId"});
  Manifest_Jobs.belongsTo(Manifests, { foreignKey: "ManifestId"});
  Manifests.hasMany(Manifest_Jobs, { foreignKey: "ManifestId"});
  Child_Accounts.belongsTo(Parent_Accounts, { foreignKey: "ParentAccountId"});
  Parent_Accounts.hasMany(Child_Accounts, { foreignKey: "ParentAccountId"});
  Client_Associations.belongsTo(Parent_Accounts, { foreignKey: "ParentAccountId"});
  Parent_Accounts.hasMany(Client_Associations, { foreignKey: "ParentAccountId"});
  Vendor_Associations.belongsTo(Parent_Accounts, { foreignKey: "ParentAccountId"});
  Parent_Accounts.hasMany(Vendor_Associations, { foreignKey: "ParentAccountId"});
  GL_COA.belongsTo(ReportTemplate, { foreignKey: "PaymentTemplateId"});
  ReportTemplate.hasMany(GL_COA, { foreignKey: "PaymentTemplateId"});
  GL_COA.belongsTo(ReportTemplate, { foreignKey: "ReportTemplateId"});
  ReportTemplate.hasMany(GL_COA, { foreignKey: "ReportTemplateId"});
  Gen_ReportTextDoc.belongsTo(ReportTemplate, { foreignKey: "ReportId"});
  ReportTemplate.hasMany(Gen_ReportTextDoc, { foreignKey: "ReportId"});
  ReportTemplate_Detail.belongsTo(ReportTemplate, { foreignKey: "ReportTemplateId"});
  ReportTemplate.hasMany(ReportTemplate_Detail, { foreignKey: "ReportTemplateId"});
  Gen_EDO_TemplateSetup.belongsTo(ReportTemplate_Detail, { foreignKey: "ReportTemplate"});
  ReportTemplate_Detail.hasMany(Gen_EDO_TemplateSetup, { foreignKey: "ReportTemplate"});
  Bls.belongsTo(SE_Jobs, { foreignKey: "SEJobId"});
  SE_Jobs.hasMany(Bls, { foreignKey: "SEJobId"});
  Charge_Heads.belongsTo(SE_Jobs, { foreignKey: "SEJobId"});
  SE_Jobs.hasMany(Charge_Heads, { foreignKey: "SEJobId"});
  Delivery_Orders.belongsTo(SE_Jobs, { foreignKey: "SEJobId"});
  SE_Jobs.hasMany(Delivery_Orders, { foreignKey: "SEJobId"});
  Invoices.belongsTo(SE_Jobs, { foreignKey: "SEJobId"});
  SE_Jobs.hasMany(Invoices, { foreignKey: "SEJobId"});
  Job_notes.belongsTo(SE_Jobs, { foreignKey: "SEJobId"});
  SE_Jobs.hasMany(Job_notes, { foreignKey: "SEJobId"});
  Loading_Programs.belongsTo(SE_Jobs, { foreignKey: "SEJobId"});
  SE_Jobs.hasMany(Loading_Programs, { foreignKey: "SEJobId"});
  Manifest_Jobs.belongsTo(SE_Jobs, { foreignKey: "SEJobId"});
  SE_Jobs.hasMany(Manifest_Jobs, { foreignKey: "SEJobId"});
  SE_Equipments.belongsTo(SE_Jobs, { foreignKey: "SEJobId"});
  SE_Jobs.hasMany(SE_Equipments, { foreignKey: "SEJobId"});
  GL_JobPayment.belongsTo(SExp_BL, { foreignKey: "crtSEHBLId"});
  SExp_BL.hasMany(GL_JobPayment, { foreignKey: "crtSEHBLId"});
  GL_JobPayment.belongsTo(SExp_BL, { foreignKey: "crtSEMBLId"});
  SExp_BL.hasMany(GL_JobPayment, { foreignKey: "crtSEMBLId"});
  GL_JobPaymentRequisition.belongsTo(SExp_BL, { foreignKey: "crtSEHBLId"});
  SExp_BL.hasMany(GL_JobPaymentRequisition, { foreignKey: "crtSEHBLId"});
  GL_JobPaymentRequisition.belongsTo(SExp_BL, { foreignKey: "crtSEMBLId"});
  SExp_BL.hasMany(GL_JobPaymentRequisition, { foreignKey: "crtSEMBLId"});
  GL_JobReceipt.belongsTo(SExp_BL, { foreignKey: "crtSEHBLId"});
  SExp_BL.hasMany(GL_JobReceipt, { foreignKey: "crtSEHBLId"});
  GL_JobReceipt.belongsTo(SExp_BL, { foreignKey: "crtSEMBLId"});
  SExp_BL.hasMany(GL_JobReceipt, { foreignKey: "crtSEMBLId"});
  SExp_BL_Charges.belongsTo(SExp_BL, { foreignKey: "SEBLId"});
  SExp_BL.hasMany(SExp_BL_Charges, { foreignKey: "SEBLId"});
  SExp_BL_Detail.belongsTo(SExp_BL, { foreignKey: "SEBLId"});
  SExp_BL.hasMany(SExp_BL_Detail, { foreignKey: "SEBLId"});
  SExp_BL_Detail_History.belongsTo(SExp_BL, { foreignKey: "SEBLId"});
  SExp_BL.hasMany(SExp_BL_Detail_History, { foreignKey: "SEBLId"});
  SExp_BL_Equipment.belongsTo(SExp_BL, { foreignKey: "SEBLId"});
  SExp_BL.hasMany(SExp_BL_Equipment, { foreignKey: "SEBLId"});
  SExp_BL_Equipment_History.belongsTo(SExp_BL, { foreignKey: "SEBLId"});
  SExp_BL.hasMany(SExp_BL_Equipment_History, { foreignKey: "SEBLId"});
  SExp_BL_PrintingLog.belongsTo(SExp_BL, { foreignKey: "SEBLId"});
  SExp_BL.hasMany(SExp_BL_PrintingLog, { foreignKey: "SEBLId"});
  SExp_BL_ProductInfo.belongsTo(SExp_BL, { foreignKey: "SEBLId"});
  SExp_BL.hasMany(SExp_BL_ProductInfo, { foreignKey: "SEBLId"});
  SExp_BL_Stamp.belongsTo(SExp_BL, { foreignKey: "SEBLId"});
  SExp_BL.hasMany(SExp_BL_Stamp, { foreignKey: "SEBLId"});
  SExp_SwitchBL.belongsTo(SExp_BL, { foreignKey: "SEBLId"});
  SExp_BL.hasMany(SExp_SwitchBL, { foreignKey: "SEBLId"});
  GL_AgentInvoice_Charges_Cont.belongsTo(SExp_BL_Equipment, { foreignKey: "SEBLEquipmentId"});
  SExp_BL_Equipment.hasMany(GL_AgentInvoice_Charges_Cont, { foreignKey: "SEBLEquipmentId"});
  GL_JobBill_Charges_Cont.belongsTo(SExp_BL_Equipment, { foreignKey: "SEBLEquipmentId"});
  SExp_BL_Equipment.hasMany(GL_JobBill_Charges_Cont, { foreignKey: "SEBLEquipmentId"});
  GL_JobInvoice_Charges_Cont.belongsTo(SExp_BL_Equipment, { foreignKey: "SEBLEquipmentId"});
  SExp_BL_Equipment.hasMany(GL_JobInvoice_Charges_Cont, { foreignKey: "SEBLEquipmentId"});
  GL_PrincipalManualSOA_Charges_Cont.belongsTo(SExp_BL_Equipment, { foreignKey: "SEBLEquipmentId"});
  SExp_BL_Equipment.hasMany(GL_PrincipalManualSOA_Charges_Cont, { foreignKey: "SEBLEquipmentId"});
  GL_PrincipleInvoice_Charges_Cont.belongsTo(SExp_BL_Equipment, { foreignKey: "SEBLEquipmentId"});
  SExp_BL_Equipment.hasMany(GL_PrincipleInvoice_Charges_Cont, { foreignKey: "SEBLEquipmentId"});
  GL_RunningDetention_Charges_Cont.belongsTo(SExp_BL_Equipment, { foreignKey: "SEBLEquipmentId"});
  SExp_BL_Equipment.hasMany(GL_RunningDetention_Charges_Cont, { foreignKey: "SEBLEquipmentId"});
  GL_UnAccruedEquipmentInvoice.belongsTo(SExp_BL_Equipment, { foreignKey: "SEBLEquipmentId"});
  SExp_BL_Equipment.hasMany(GL_UnAccruedEquipmentInvoice, { foreignKey: "SEBLEquipmentId"});
  Log_Job_Container.belongsTo(SExp_BL_Equipment, { foreignKey: "SEBLEquipmentId"});
  SExp_BL_Equipment.hasMany(Log_Job_Container, { foreignKey: "SEBLEquipmentId"});
  AExp_AirExportJob.belongsTo(SExp_BookingRequest, { foreignKey: "AEBookingRequestId"});
  SExp_BookingRequest.hasMany(AExp_AirExportJob, { foreignKey: "AEBookingRequestId"});
  SExp_BookingConfirmFromCarrier.belongsTo(SExp_BookingRequest, { foreignKey: "BookingId"});
  SExp_BookingRequest.hasMany(SExp_BookingConfirmFromCarrier, { foreignKey: "BookingId"});
  SExp_BookingRequest_Detail.belongsTo(SExp_BookingRequest, { foreignKey: "BookingId"});
  SExp_BookingRequest.hasMany(SExp_BookingRequest_Detail, { foreignKey: "BookingId"});
  SExp_BookingRequest_Equipment.belongsTo(SExp_BookingRequest, { foreignKey: "BookingRequestId"});
  SExp_BookingRequest.hasMany(SExp_BookingRequest_Equipment, { foreignKey: "BookingRequestId"});
  SExp_BookingToCarrier.belongsTo(SExp_BookingRequest, { foreignKey: "BookingId"});
  SExp_BookingRequest.hasMany(SExp_BookingToCarrier, { foreignKey: "BookingId"});
  SExp_SeaExportJob.belongsTo(SExp_BookingRequest, { foreignKey: "SEBookingRequestId"});
  SExp_BookingRequest.hasMany(SExp_SeaExportJob, { foreignKey: "SEBookingRequestId"});
  SExp_SeaExportJob_LastMilestone.belongsTo(SExp_BookingRequest, { foreignKey: "BookingId"});
  SExp_BookingRequest.hasMany(SExp_SeaExportJob_LastMilestone, { foreignKey: "BookingId"});
  SExp_ShippingInstruction.belongsTo(SExp_BookingRequest, { foreignKey: "SEBookingRequestId"});
  SExp_BookingRequest.hasMany(SExp_ShippingInstruction, { foreignKey: "SEBookingRequestId"});
  DEPO_ContainerActivity.belongsTo(SExp_CRO, { foreignKey: "CROId"});
  SExp_CRO.hasMany(DEPO_ContainerActivity, { foreignKey: "CROId"});
  SExp_CRO_Detail.belongsTo(SExp_CRO, { foreignKey: "CROId"});
  SExp_CRO.hasMany(SExp_CRO_Detail, { foreignKey: "CROId"});
  SExp_DeliveryNote_Detail.belongsTo(SExp_DeliveryNote, { foreignKey: "DeliveryNoteId"});
  SExp_DeliveryNote.hasMany(SExp_DeliveryNote_Detail, { foreignKey: "DeliveryNoteId"});
  SExp_NOC_Detail.belongsTo(SExp_NOC, { foreignKey: "NOCId"});
  SExp_NOC.hasMany(SExp_NOC_Detail, { foreignKey: "NOCId"});
  CTrk_ContainerCycle.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(CTrk_ContainerCycle, { foreignKey: "SEJobId"});
  DEPO_ContainerActivity.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(DEPO_ContainerActivity, { foreignKey: "SEJobId"});
  GL_AgentInvoice.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(GL_AgentInvoice, { foreignKey: "SEJobId"});
  GL_AgentInvoice_Charges.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_AgentInvoice_Charges, { foreignKey: "dSEJobId"});
  GL_AgentInvoice_Charges_Cont.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_AgentInvoice_Charges_Cont, { foreignKey: "dSEJobId"});
  GL_AgentInvoice_Charges_Tax.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_AgentInvoice_Charges_Tax, { foreignKey: "dSEJobId"});
  GL_AgentInvoice_TaxInvoice.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_AgentInvoice_TaxInvoice, { foreignKey: "dSEJobId"});
  GL_JobBill.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobBill, { foreignKey: "SEJobId"});
  GL_JobBill_Charges.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobBill_Charges, { foreignKey: "dSEJobId"});
  GL_JobBill_Charges_Cont.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobBill_Charges_Cont, { foreignKey: "dSEJobId"});
  GL_JobBill_Charges_Tax.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobBill_Charges_Tax, { foreignKey: "dSEJobId"});
  GL_JobBill_TaxInvoice.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobBill_TaxInvoice, { foreignKey: "dSEJobId"});
  GL_JobDirectExpRev.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobDirectExpRev, { foreignKey: "SEJobId"});
  GL_JobDirectExpRev_Charges.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobDirectExpRev_Charges, { foreignKey: "dSEJobId"});
  GL_JobInvoice.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobInvoice, { foreignKey: "SEJobId"});
  GL_JobInvoice_Charges.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobInvoice_Charges, { foreignKey: "dSEJobId"});
  GL_JobInvoice_Charges_Cont.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobInvoice_Charges_Cont, { foreignKey: "dSEJobId"});
  GL_JobInvoice_Charges_Tax.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobInvoice_Charges_Tax, { foreignKey: "dSEJobId"});
  GL_JobInvoice_TaxInvoice.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobInvoice_TaxInvoice, { foreignKey: "dSEJobId"});
  GL_JobPayment.belongsTo(SExp_SeaExportJob, { foreignKey: "crtSEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobPayment, { foreignKey: "crtSEJobId"});
  GL_JobPaymentRequisition.belongsTo(SExp_SeaExportJob, { foreignKey: "crtSEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobPaymentRequisition, { foreignKey: "crtSEJobId"});
  GL_JobReceipt.belongsTo(SExp_SeaExportJob, { foreignKey: "crtSEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobReceipt, { foreignKey: "crtSEJobId"});
  GL_JobSecurity.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobSecurity, { foreignKey: "SEJobId"});
  GL_JobSecurityRefundRequisition.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobSecurityRefundRequisition, { foreignKey: "SEJobId"});
  GL_JobSecurityTran.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(GL_JobSecurityTran, { foreignKey: "SEJobId"});
  GL_PrincipalManualSOA_Charges_Cont.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_PrincipalManualSOA_Charges_Cont, { foreignKey: "dSEJobId"});
  GL_PrincipalManualSOA_Charges_Tax.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_PrincipalManualSOA_Charges_Tax, { foreignKey: "dSEJobId"});
  GL_PrincipleInvoice_Charges.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_PrincipleInvoice_Charges, { foreignKey: "dSEJobId"});
  GL_PrincipleInvoice_Charges_Cont.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_PrincipleInvoice_Charges_Cont, { foreignKey: "dSEJobId"});
  GL_PrincipleInvoice_Charges_Tax.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_PrincipleInvoice_Charges_Tax, { foreignKey: "dSEJobId"});
  GL_PrincipleInvoice_TaxInvoice.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_PrincipleInvoice_TaxInvoice, { foreignKey: "dSEJobId"});
  GL_ProcessLog.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(GL_ProcessLog, { foreignKey: "SEJobId"});
  GL_RunningDetention.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(GL_RunningDetention, { foreignKey: "SEJobId"});
  GL_RunningDetention_Charges.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_RunningDetention_Charges, { foreignKey: "dSEJobId"});
  GL_RunningDetention_Charges_Cont.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_RunningDetention_Charges_Cont, { foreignKey: "dSEJobId"});
  GL_TerminalInvoice.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(GL_TerminalInvoice, { foreignKey: "SEJobId"});
  GL_TerminalInvoice_Detail.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_TerminalInvoice_Detail, { foreignKey: "dSEJobId"});
  GL_UnAccruedEquipmentInvoice.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(GL_UnAccruedEquipmentInvoice, { foreignKey: "dSEJobId"});
  Gen_CARF.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(Gen_CARF, { foreignKey: "SEJobId"});
  Gen_CARF_Exception.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(Gen_CARF_Exception, { foreignKey: "SEJobId"});
  Gen_CrucialChangesLog.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(Gen_CrucialChangesLog, { foreignKey: "SEJobId"});
  Gen_LetterProcessed.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(Gen_LetterProcessed, { foreignKey: "SEJobId"});
  Gen_SEJobNotes.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(Gen_SEJobNotes, { foreignKey: "SEJobId"});
  Log_Job.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(Log_Job, { foreignKey: "SEJobId"});
  SExp_BL.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasOne(SExp_BL, { foreignKey: "SEJobId"});
  SExp_BL_Equipment.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(SExp_BL_Equipment, { foreignKey: "dSEJobId"});
  SExp_BL_PrintingLog.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_BL_PrintingLog, { foreignKey: "SEJobId"});
  SExp_CRO.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_CRO, { foreignKey: "SEJobId"});
  SExp_LoadingProgram.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_LoadingProgram, { foreignKey: "SEJobId"});
  SExp_NOC_Detail.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_NOC_Detail, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.belongsTo(SExp_SeaExportJob, { foreignKey: "ParentJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob, { foreignKey: "ParentJobId"});
  SExp_SeaExportJob.belongsTo(SExp_SeaExportJob, { foreignKey: "SplittedJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob, { foreignKey: "SplittedJobId"});
  SExp_SeaExportJob_BLReleaseLog.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob_BLReleaseLog, { foreignKey: "SEJobId"});
  SExp_SeaExportJob_CarDetail.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob_CarDetail, { foreignKey: "SEJobId"});
  SExp_SeaExportJob_ChargesPayb.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob_ChargesPayb, { foreignKey: "SEJobId"});
  SExp_SeaExportJob_ChargesPayb_History.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob_ChargesPayb_History, { foreignKey: "SEJobId"});
  SExp_SeaExportJob_ChargesPayb_TaxExpShare.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob_ChargesPayb_TaxExpShare, { foreignKey: "SEJobId"});
  SExp_SeaExportJob_ChargesRecv.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob_ChargesRecv, { foreignKey: "SEJobId"});
  SExp_SeaExportJob_ChargesRecv_History.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob_ChargesRecv_History, { foreignKey: "SEJobId"});
  SExp_SeaExportJob_ChargesRecv_TaxRevShare.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob_ChargesRecv_TaxRevShare, { foreignKey: "SEJobId"});
  SExp_SeaExportJob_Equipment.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob_Equipment, { foreignKey: "SEJobId"});
  SExp_SeaExportJob_ExtMilestone.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob_ExtMilestone, { foreignKey: "SEJobId"});
  SExp_SeaExportJob_LastMilestone.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob_LastMilestone, { foreignKey: "SEJobId"});
  SExp_SeaExportJob_Principle.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob_Principle, { foreignKey: "SEJobId"});
  SExp_SeaExportJob_Principle_History.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob_Principle_History, { foreignKey: "SEJobId"});
  SExp_SeaExportJob_ReleaseRequest.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob_ReleaseRequest, { foreignKey: "SEJobId"});
  SExp_SeaExportJob_TracingDoc.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob_TracingDoc, { foreignKey: "SEJobId"});
  SExp_SeaExportJob_TracingOpr.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SeaExportJob_TracingOpr, { foreignKey: "SEJobId"});
  SExp_ShippingInstruction.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_ShippingInstruction, { foreignKey: "SEJobId"});
  SExp_ShippingInstruction_Equipment.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(SExp_ShippingInstruction_Equipment, { foreignKey: "dSEJobId"});
  SExp_StuffingPlan.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_StuffingPlan, { foreignKey: "SEJobId"});
  SExp_StuffingPlan_Detail.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_StuffingPlan_Detail, { foreignKey: "SEJobId"});
  SExp_SwitchBL.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SwitchBL, { foreignKey: "SEJobId"});
  SExp_SwitchBL_Equipment.belongsTo(SExp_SeaExportJob, { foreignKey: "dSEJobId"});
  SExp_SeaExportJob.hasMany(SExp_SwitchBL_Equipment, { foreignKey: "dSEJobId"});
  WMS_CargoStuffing.belongsTo(SExp_SeaExportJob, { foreignKey: "CSEJobId"});
  SExp_SeaExportJob.hasMany(WMS_CargoStuffing, { foreignKey: "CSEJobId"});
  WMS_CargoStuffing_Detail.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(WMS_CargoStuffing_Detail, { foreignKey: "SEJobId"});
  WMS_Delivery.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(WMS_Delivery, { foreignKey: "SEJobId"});
  WMS_GRN.belongsTo(SExp_SeaExportJob, { foreignKey: "SEJobId"});
  SExp_SeaExportJob.hasMany(WMS_GRN, { foreignKey: "SEJobId"});
  GL_AgentInvoice_Charges.belongsTo(SExp_SeaExportJob_ChargesPayb, { foreignKey: "SEJobChargesPaybId"});
  SExp_SeaExportJob_ChargesPayb.hasMany(GL_AgentInvoice_Charges, { foreignKey: "SEJobChargesPaybId"});
  GL_JobBill_Charges.belongsTo(SExp_SeaExportJob_ChargesPayb, { foreignKey: "SEJobChargesPaybId"});
  SExp_SeaExportJob_ChargesPayb.hasMany(GL_JobBill_Charges, { foreignKey: "SEJobChargesPaybId"});
  SExp_SeaExportJob_ChargesPayb_TaxExpShare.belongsTo(SExp_SeaExportJob_ChargesPayb, { foreignKey: "SExpChargesPaybId"});
  SExp_SeaExportJob_ChargesPayb.hasMany(SExp_SeaExportJob_ChargesPayb_TaxExpShare, { foreignKey: "SExpChargesPaybId"});
  GL_AgentInvoice_Charges.belongsTo(SExp_SeaExportJob_ChargesRecv, { foreignKey: "SEJobChargesRecvId"});
  SExp_SeaExportJob_ChargesRecv.hasMany(GL_AgentInvoice_Charges, { foreignKey: "SEJobChargesRecvId"});
  GL_JobInvoice_Charges.belongsTo(SExp_SeaExportJob_ChargesRecv, { foreignKey: "SEJobChargesRecvId"});
  SExp_SeaExportJob_ChargesRecv.hasMany(GL_JobInvoice_Charges, { foreignKey: "SEJobChargesRecvId"});
  GL_RunningDetention_Charges.belongsTo(SExp_SeaExportJob_ChargesRecv, { foreignKey: "SEJobChargesRecvId"});
  SExp_SeaExportJob_ChargesRecv.hasMany(GL_RunningDetention_Charges, { foreignKey: "SEJobChargesRecvId"});
  SExp_SeaExportJob_ChargesRecv_TaxRevShare.belongsTo(SExp_SeaExportJob_ChargesRecv, { foreignKey: "SExpChargesRecvId"});
  SExp_SeaExportJob_ChargesRecv.hasMany(SExp_SeaExportJob_ChargesRecv_TaxRevShare, { foreignKey: "SExpChargesRecvId"});
  GL_PrincipleInvoice_Charges.belongsTo(SExp_SeaExportJob_Principle, { foreignKey: "SEJobPrincipleChargesId"});
  SExp_SeaExportJob_Principle.hasMany(GL_PrincipleInvoice_Charges, { foreignKey: "SEJobPrincipleChargesId"});
  SExp_SeaExportJob_TracingOpr_Cont.belongsTo(SExp_SeaExportJob_TracingOpr, { foreignKey: "TracingOprId"});
  SExp_SeaExportJob_TracingOpr.hasMany(SExp_SeaExportJob_TracingOpr_Cont, { foreignKey: "TracingOprId"});
  SExp_BL.belongsTo(SExp_ShippingInstruction, { foreignKey: "SESInsId"});
  SExp_ShippingInstruction.hasMany(SExp_BL, { foreignKey: "SESInsId"});
  SExp_ShippingInstruction_Equipment.belongsTo(SExp_ShippingInstruction, { foreignKey: "SESInsId"});
  SExp_ShippingInstruction.hasMany(SExp_ShippingInstruction_Equipment, { foreignKey: "SESInsId"});
  SExp_StuffingPlan_Detail.belongsTo(SExp_StuffingPlan, { foreignKey: "StuffingPlanId"});
  SExp_StuffingPlan.hasMany(SExp_StuffingPlan_Detail, { foreignKey: "StuffingPlanId"});
  SExp_SwitchBL_Detail.belongsTo(SExp_SwitchBL, { foreignKey: "SESwBLId"});
  SExp_SwitchBL.hasMany(SExp_SwitchBL_Detail, { foreignKey: "SESwBLId"});
  SExp_SwitchBL_Equipment.belongsTo(SExp_SwitchBL, { foreignKey: "SESwBLId"});
  SExp_SwitchBL.hasMany(SExp_SwitchBL_Equipment, { foreignKey: "SESwBLId"});
  SExp_SwitchBL_Equipment_History.belongsTo(SExp_SwitchBL, { foreignKey: "SESwBLId"});
  SExp_SwitchBL.hasMany(SExp_SwitchBL_Equipment_History, { foreignKey: "SESwBLId"});
  SExp_SwitchBL_Stamp.belongsTo(SExp_SwitchBL, { foreignKey: "SESwBLId"});
  SExp_SwitchBL.hasMany(SExp_SwitchBL_Stamp, { foreignKey: "SESwBLId"});
  GL_JobPayment.belongsTo(SImp_BL, { foreignKey: "crtSIHBLId"});
  SImp_BL.hasMany(GL_JobPayment, { foreignKey: "crtSIHBLId"});
  GL_JobPayment.belongsTo(SImp_BL, { foreignKey: "crtSIMBLId"});
  SImp_BL.hasMany(GL_JobPayment, { foreignKey: "crtSIMBLId"});
  GL_JobPaymentRequisition.belongsTo(SImp_BL, { foreignKey: "crtSIHBLId"});
  SImp_BL.hasMany(GL_JobPaymentRequisition, { foreignKey: "crtSIHBLId"});
  GL_JobPaymentRequisition.belongsTo(SImp_BL, { foreignKey: "crtSIMBLId"});
  SImp_BL.hasMany(GL_JobPaymentRequisition, { foreignKey: "crtSIMBLId"});
  GL_JobReceipt.belongsTo(SImp_BL, { foreignKey: "crtSIHBLId"});
  SImp_BL.hasMany(GL_JobReceipt, { foreignKey: "crtSIHBLId"});
  GL_JobReceipt.belongsTo(SImp_BL, { foreignKey: "crtSIMBLId"});
  SImp_BL.hasMany(GL_JobReceipt, { foreignKey: "crtSIMBLId"});
  SImp_BL_Detail.belongsTo(SImp_BL, { foreignKey: "SIBLId"});
  SImp_BL.hasMany(SImp_BL_Detail, { foreignKey: "SIBLId"});
  SImp_BL_Equipment.belongsTo(SImp_BL, { foreignKey: "SIBLId"});
  SImp_BL.hasMany(SImp_BL_Equipment, { foreignKey: "SIBLId"});
  SImp_BL_Equipment_History.belongsTo(SImp_BL, { foreignKey: "SIBLId"});
  SImp_BL.hasMany(SImp_BL_Equipment_History, { foreignKey: "SIBLId"});
  SImp_BL_ProductInfo.belongsTo(SImp_BL, { foreignKey: "SIBLId"});
  SImp_BL.hasMany(SImp_BL_ProductInfo, { foreignKey: "SIBLId"});
  SImp_BL_Stamp.belongsTo(SImp_BL, { foreignKey: "SIBLId"});
  SImp_BL.hasMany(SImp_BL_Stamp, { foreignKey: "SIBLId"});
  GL_AgentInvoice_Charges_Cont.belongsTo(SImp_BL_Equipment, { foreignKey: "SIBLEquipmentId"});
  SImp_BL_Equipment.hasMany(GL_AgentInvoice_Charges_Cont, { foreignKey: "SIBLEquipmentId"});
  GL_JobBill_Charges_Cont.belongsTo(SImp_BL_Equipment, { foreignKey: "SIBLEquipmentId"});
  SImp_BL_Equipment.hasMany(GL_JobBill_Charges_Cont, { foreignKey: "SIBLEquipmentId"});
  GL_JobInvoice_Charges_Cont.belongsTo(SImp_BL_Equipment, { foreignKey: "SIBLEquipmentId"});
  SImp_BL_Equipment.hasMany(GL_JobInvoice_Charges_Cont, { foreignKey: "SIBLEquipmentId"});
  GL_PrincipalManualSOA_Charges_Cont.belongsTo(SImp_BL_Equipment, { foreignKey: "SIBLEquipmentId"});
  SImp_BL_Equipment.hasMany(GL_PrincipalManualSOA_Charges_Cont, { foreignKey: "SIBLEquipmentId"});
  GL_PrincipleInvoice_Charges_Cont.belongsTo(SImp_BL_Equipment, { foreignKey: "SIBLEquipmentId"});
  SImp_BL_Equipment.hasMany(GL_PrincipleInvoice_Charges_Cont, { foreignKey: "SIBLEquipmentId"});
  GL_RunningDetention_Charges_Cont.belongsTo(SImp_BL_Equipment, { foreignKey: "SIBLEquipmentId"});
  SImp_BL_Equipment.hasMany(GL_RunningDetention_Charges_Cont, { foreignKey: "SIBLEquipmentId"});
  GL_UnAccruedEquipmentInvoice.belongsTo(SImp_BL_Equipment, { foreignKey: "SIBLEquipmentId"});
  SImp_BL_Equipment.hasMany(GL_UnAccruedEquipmentInvoice, { foreignKey: "SIBLEquipmentId"});
  Log_Job_Container.belongsTo(SImp_BL_Equipment, { foreignKey: "SIBLEquipmentId"});
  SImp_BL_Equipment.hasMany(Log_Job_Container, { foreignKey: "SIBLEquipmentId"});
  SImp_BL_ProductInfo_Cont.belongsTo(SImp_BL_ProductInfo, { foreignKey: "SIBLProdInfoId"});
  SImp_BL_ProductInfo.hasMany(SImp_BL_ProductInfo_Cont, { foreignKey: "SIBLProdInfoId"});
  Gen_EDO_Process_Detail.belongsTo(SImp_DeliveryOrder, { foreignKey: "DOId"});
  SImp_DeliveryOrder.hasMany(Gen_EDO_Process_Detail, { foreignKey: "DOId"});
  SImp_PreAlert_Container.belongsTo(SImp_PreAlert, { foreignKey: "SIPreAlertId"});
  SImp_PreAlert.hasMany(SImp_PreAlert_Container, { foreignKey: "SIPreAlertId"});
  SImp_BL_Equipment.belongsTo(SImp_PreAlert_Container, { foreignKey: "SIPreAlertContainerId"});
  SImp_PreAlert_Container.hasMany(SImp_BL_Equipment, { foreignKey: "SIPreAlertContainerId"});
  CTrk_ContainerCycle.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(CTrk_ContainerCycle, { foreignKey: "SIJobId"});
  DEPO_ContainerActivity.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(DEPO_ContainerActivity, { foreignKey: "SIJobId"});
  GL_AgentInvoice.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(GL_AgentInvoice, { foreignKey: "SIJobId"});
  GL_AgentInvoice_Charges.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_AgentInvoice_Charges, { foreignKey: "dSIJobId"});
  GL_AgentInvoice_Charges_Cont.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_AgentInvoice_Charges_Cont, { foreignKey: "dSIJobId"});
  GL_AgentInvoice_Charges_Tax.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_AgentInvoice_Charges_Tax, { foreignKey: "dSIJobId"});
  GL_AgentInvoice_TaxInvoice.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_AgentInvoice_TaxInvoice, { foreignKey: "dSIJobId"});
  GL_JobBill.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobBill, { foreignKey: "SIJobId"});
  GL_JobBill_Charges.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobBill_Charges, { foreignKey: "dSIJobId"});
  GL_JobBill_Charges_Cont.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobBill_Charges_Cont, { foreignKey: "dSIJobId"});
  GL_JobBill_Charges_Tax.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobBill_Charges_Tax, { foreignKey: "dSIJobId"});
  GL_JobBill_TaxInvoice.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobBill_TaxInvoice, { foreignKey: "dSIJobId"});
  GL_JobDirectExpRev.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobDirectExpRev, { foreignKey: "SIJobId"});
  GL_JobDirectExpRev_Charges.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobDirectExpRev_Charges, { foreignKey: "dSIJobId"});
  GL_JobInvoice.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobInvoice, { foreignKey: "SIJobId"});
  GL_JobInvoice_Charges.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobInvoice_Charges, { foreignKey: "dSIJobId"});
  GL_JobInvoice_Charges_Cont.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobInvoice_Charges_Cont, { foreignKey: "dSIJobId"});
  GL_JobInvoice_Charges_Tax.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobInvoice_Charges_Tax, { foreignKey: "dSIJobId"});
  GL_JobInvoice_TaxInvoice.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobInvoice_TaxInvoice, { foreignKey: "dSIJobId"});
  GL_JobPayment.belongsTo(SImp_SeaImportJob, { foreignKey: "crtSIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobPayment, { foreignKey: "crtSIJobId"});
  GL_JobPaymentRequisition.belongsTo(SImp_SeaImportJob, { foreignKey: "crtSIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobPaymentRequisition, { foreignKey: "crtSIJobId"});
  GL_JobReceipt.belongsTo(SImp_SeaImportJob, { foreignKey: "crtSIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobReceipt, { foreignKey: "crtSIJobId"});
  GL_JobSecurity.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobSecurity, { foreignKey: "SIJobId"});
  GL_JobSecurityRefundRequisition.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobSecurityRefundRequisition, { foreignKey: "SIJobId"});
  GL_JobSecurityTran.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(GL_JobSecurityTran, { foreignKey: "SIJobId"});
  GL_PrincipalManualSOA_Charges_Cont.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_PrincipalManualSOA_Charges_Cont, { foreignKey: "dSIJobId"});
  GL_PrincipalManualSOA_Charges_Tax.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_PrincipalManualSOA_Charges_Tax, { foreignKey: "dSIJobId"});
  GL_PrincipleInvoice_Charges.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_PrincipleInvoice_Charges, { foreignKey: "dSIJobId"});
  GL_PrincipleInvoice_Charges_Cont.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_PrincipleInvoice_Charges_Cont, { foreignKey: "dSIJobId"});
  GL_PrincipleInvoice_Charges_Tax.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_PrincipleInvoice_Charges_Tax, { foreignKey: "dSIJobId"});
  GL_PrincipleInvoice_TaxInvoice.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_PrincipleInvoice_TaxInvoice, { foreignKey: "dSIJobId"});
  GL_ProcessLog.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(GL_ProcessLog, { foreignKey: "SIJobId"});
  GL_RunningDetention.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(GL_RunningDetention, { foreignKey: "SIJobId"});
  GL_RunningDetention_Charges.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_RunningDetention_Charges, { foreignKey: "dSIJobId"});
  GL_RunningDetention_Charges_Cont.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_RunningDetention_Charges_Cont, { foreignKey: "dSIJobId"});
  GL_TerminalInvoice.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(GL_TerminalInvoice, { foreignKey: "SIJobId"});
  GL_TerminalInvoice_Detail.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_TerminalInvoice_Detail, { foreignKey: "dSIJobId"});
  GL_UnAccruedEquipmentInvoice.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(GL_UnAccruedEquipmentInvoice, { foreignKey: "dSIJobId"});
  Gen_CARF.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(Gen_CARF, { foreignKey: "SIJobId"});
  Gen_CARF_Exception.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(Gen_CARF_Exception, { foreignKey: "SIJobId"});
  Gen_CrucialChangesLog.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(Gen_CrucialChangesLog, { foreignKey: "SIJobId"});
  Gen_DeliveryOrderRequest.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(Gen_DeliveryOrderRequest, { foreignKey: "SIJobId"});
  Gen_LetterProcessed.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(Gen_LetterProcessed, { foreignKey: "SIJobId"});
  Gen_SIJobNotes.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(Gen_SIJobNotes, { foreignKey: "SIJobId"});
  Gen_SecurityFile.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(Gen_SecurityFile, { foreignKey: "SIJobId"});
  Gen_SecurityFile_Detention.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(Gen_SecurityFile_Detention, { foreignKey: "SIJobId"});
  Gen_SecurityFile_Payable.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(Gen_SecurityFile_Payable, { foreignKey: "SIJobId"});
  Gen_SecurityHold.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(Gen_SecurityHold, { foreignKey: "SIJobId"});
  Log_Job.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(Log_Job, { foreignKey: "SIJobId"});
  SExp_SeaExportJob.belongsTo(SImp_SeaImportJob, { foreignKey: "TranshipmentSIJobId"});
  SImp_SeaImportJob.hasMany(SExp_SeaExportJob, { foreignKey: "TranshipmentSIJobId"});
  SImp_BL.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasOne(SImp_BL, { foreignKey: "SIJobId"});
  SImp_BLAmendment.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(SImp_BLAmendment, { foreignKey: "SIJobId"});
  SImp_BL_Equipment.belongsTo(SImp_SeaImportJob, { foreignKey: "dSIJobId"});
  SImp_SeaImportJob.hasMany(SImp_BL_Equipment, { foreignKey: "dSIJobId"});
  SImp_DeliveryOrder.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(SImp_DeliveryOrder, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.belongsTo(SImp_SeaImportJob, { foreignKey: "ParentJobId"});
  SImp_SeaImportJob.hasMany(SImp_SeaImportJob, { foreignKey: "ParentJobId"});
  SImp_SeaImportJob.belongsTo(SImp_SeaImportJob, { foreignKey: "SplittedJobId"});
  SImp_SeaImportJob.hasMany(SImp_SeaImportJob, { foreignKey: "SplittedJobId"});
  SImp_SeaImportJob_CarDetail.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(SImp_SeaImportJob_CarDetail, { foreignKey: "SIJobId"});
  SImp_SeaImportJob_ChargesPayb.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(SImp_SeaImportJob_ChargesPayb, { foreignKey: "SIJobId"});
  SImp_SeaImportJob_ChargesPayb_History.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(SImp_SeaImportJob_ChargesPayb_History, { foreignKey: "SIJobId"});
  SImp_SeaImportJob_ChargesPayb_TaxExpShare.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(SImp_SeaImportJob_ChargesPayb_TaxExpShare, { foreignKey: "SIJobId"});
  SImp_SeaImportJob_ChargesRecv.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(SImp_SeaImportJob_ChargesRecv, { foreignKey: "SIJobId"});
  SImp_SeaImportJob_ChargesRecv_History.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(SImp_SeaImportJob_ChargesRecv_History, { foreignKey: "SIJobId"});
  SImp_SeaImportJob_ChargesRecv_TaxRevShare.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(SImp_SeaImportJob_ChargesRecv_TaxRevShare, { foreignKey: "SIJobId"});
  SImp_SeaImportJob_Equipment.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(SImp_SeaImportJob_Equipment, { foreignKey: "SIJobId"});
  SImp_SeaImportJob_ExtMilestone.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(SImp_SeaImportJob_ExtMilestone, { foreignKey: "SIJobId"});
  SImp_SeaImportJob_LastMilestone.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(SImp_SeaImportJob_LastMilestone, { foreignKey: "SIJobId"});
  SImp_SeaImportJob_Principle.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(SImp_SeaImportJob_Principle, { foreignKey: "SIJobId"});
  SImp_SeaImportJob_Principle_History.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(SImp_SeaImportJob_Principle_History, { foreignKey: "SIJobId"});
  SImp_SeaImportJob_TracingDoc.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(SImp_SeaImportJob_TracingDoc, { foreignKey: "SIJobId"});
  SImp_SeaImportJob_TracingOpr.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(SImp_SeaImportJob_TracingOpr, { foreignKey: "SIJobId"});
  Simp_EqpInvOtherChgs.belongsTo(SImp_SeaImportJob, { foreignKey: "SImpId"});
  SImp_SeaImportJob.hasMany(Simp_EqpInvOtherChgs, { foreignKey: "SImpId"});
  WMS_CargoDEStuffing.belongsTo(SImp_SeaImportJob, { foreignKey: "CSIJobId"});
  SImp_SeaImportJob.hasMany(WMS_CargoDEStuffing, { foreignKey: "CSIJobId"});
  WMS_CargoDEStuffing_Detail.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(WMS_CargoDEStuffing_Detail, { foreignKey: "SIJobId"});
  WMS_Delivery.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(WMS_Delivery, { foreignKey: "SIJobId"});
  WMS_GRN.belongsTo(SImp_SeaImportJob, { foreignKey: "SIJobId"});
  SImp_SeaImportJob.hasMany(WMS_GRN, { foreignKey: "SIJobId"});
  GL_AgentInvoice_Charges.belongsTo(SImp_SeaImportJob_ChargesPayb, { foreignKey: "SIJobChargesPaybId"});
  SImp_SeaImportJob_ChargesPayb.hasMany(GL_AgentInvoice_Charges, { foreignKey: "SIJobChargesPaybId"});
  GL_JobBill_Charges.belongsTo(SImp_SeaImportJob_ChargesPayb, { foreignKey: "SIJobChargesPaybId"});
  SImp_SeaImportJob_ChargesPayb.hasMany(GL_JobBill_Charges, { foreignKey: "SIJobChargesPaybId"});
  SImp_SeaImportJob_ChargesPayb_TaxExpShare.belongsTo(SImp_SeaImportJob_ChargesPayb, { foreignKey: "SImpChargesPaybId"});
  SImp_SeaImportJob_ChargesPayb.hasMany(SImp_SeaImportJob_ChargesPayb_TaxExpShare, { foreignKey: "SImpChargesPaybId"});
  GL_AgentInvoice_Charges.belongsTo(SImp_SeaImportJob_ChargesRecv, { foreignKey: "SIJobChargesRecvId"});
  SImp_SeaImportJob_ChargesRecv.hasMany(GL_AgentInvoice_Charges, { foreignKey: "SIJobChargesRecvId"});
  GL_JobInvoice_Charges.belongsTo(SImp_SeaImportJob_ChargesRecv, { foreignKey: "SIJobChargesRecvId"});
  SImp_SeaImportJob_ChargesRecv.hasMany(GL_JobInvoice_Charges, { foreignKey: "SIJobChargesRecvId"});
  GL_RunningDetention_Charges.belongsTo(SImp_SeaImportJob_ChargesRecv, { foreignKey: "SIJobChargesRecvId"});
  SImp_SeaImportJob_ChargesRecv.hasMany(GL_RunningDetention_Charges, { foreignKey: "SIJobChargesRecvId"});
  SImp_SeaImportJob_ChargesRecv_TaxRevShare.belongsTo(SImp_SeaImportJob_ChargesRecv, { foreignKey: "SImpChargesRecvId"});
  SImp_SeaImportJob_ChargesRecv.hasMany(SImp_SeaImportJob_ChargesRecv_TaxRevShare, { foreignKey: "SImpChargesRecvId"});
  GL_PrincipleInvoice_Charges.belongsTo(SImp_SeaImportJob_Principle, { foreignKey: "SIJobPrincipleChargesId"});
  SImp_SeaImportJob_Principle.hasMany(GL_PrincipleInvoice_Charges, { foreignKey: "SIJobPrincipleChargesId"});
  GL_JobInvoice_Charges_Cont.belongsTo(Simp_EqpInvOtherChgs, { foreignKey: "SImp_EqpInvOtherChgsId"});
  Simp_EqpInvOtherChgs.hasMany(GL_JobInvoice_Charges_Cont, { foreignKey: "SImp_EqpInvOtherChgsId"});
  TAP_Allowance_Detail.belongsTo(TAP_Allowance, { foreignKey: "AllowanceId"});
  TAP_Allowance.hasMany(TAP_Allowance_Detail, { foreignKey: "AllowanceId"});
  TAP_Salaries_Detail_GL.belongsTo(TAP_Allowance, { foreignKey: "AllowanceId"});
  TAP_Allowance.hasMany(TAP_Salaries_Detail_GL, { foreignKey: "AllowanceId"});
  TAP_SalaryStructure_Allowance.belongsTo(TAP_Allowance, { foreignKey: "AllowanceId"});
  TAP_Allowance.hasMany(TAP_SalaryStructure_Allowance, { foreignKey: "AllowanceId"});
  TAP_Deduction_Detail.belongsTo(TAP_Deduction, { foreignKey: "DeductionId"});
  TAP_Deduction.hasMany(TAP_Deduction_Detail, { foreignKey: "DeductionId"});
  TAP_Salaries_Detail_GL.belongsTo(TAP_Deduction, { foreignKey: "DeductionId"});
  TAP_Deduction.hasMany(TAP_Salaries_Detail_GL, { foreignKey: "DeductionId"});
  TAP_SalaryStructure_Deduction.belongsTo(TAP_Deduction, { foreignKey: "DeductionId"});
  TAP_Deduction.hasMany(TAP_SalaryStructure_Deduction, { foreignKey: "DeductionId"});
  AExp_AirExportJob.belongsTo(TAP_Employee, { foreignKey: "SalesRepId"});
  TAP_Employee.hasMany(AExp_AirExportJob, { foreignKey: "SalesRepId"});
  AImp_AirImportJob.belongsTo(TAP_Employee, { foreignKey: "SalesRepId"});
  TAP_Employee.hasMany(AImp_AirImportJob, { foreignKey: "SalesRepId"});
  CEAS_User.belongsTo(TAP_Employee, { foreignKey: "SalesRepId"});
  TAP_Employee.hasMany(CEAS_User, { foreignKey: "SalesRepId"});
  CEAS_User_SalesRepRight.belongsTo(TAP_Employee, { foreignKey: "SalesRepId"});
  TAP_Employee.hasMany(CEAS_User_SalesRepRight, { foreignKey: "SalesRepId"});
  CRM_Activity.belongsTo(TAP_Employee, { foreignKey: "SalesmanId"});
  TAP_Employee.hasMany(CRM_Activity, { foreignKey: "SalesmanId"});
  CRM_Planning.belongsTo(TAP_Employee, { foreignKey: "SalesmanId"});
  TAP_Employee.hasMany(CRM_Planning, { foreignKey: "SalesmanId"});
  CRM_Planning_Detail.belongsTo(TAP_Employee, { foreignKey: "dSalesmanId"});
  TAP_Employee.hasMany(CRM_Planning_Detail, { foreignKey: "dSalesmanId"});
  GL_AgentInvoice.belongsTo(TAP_Employee, { foreignKey: "SalesRepId"});
  TAP_Employee.hasMany(GL_AgentInvoice, { foreignKey: "SalesRepId"});
  GL_JobBill.belongsTo(TAP_Employee, { foreignKey: "SalesRepId"});
  TAP_Employee.hasMany(GL_JobBill, { foreignKey: "SalesRepId"});
  GL_JobInvoice.belongsTo(TAP_Employee, { foreignKey: "SalesRepId"});
  TAP_Employee.hasMany(GL_JobInvoice, { foreignKey: "SalesRepId"});
  Gen_EDIProcessed.belongsTo(TAP_Employee, { foreignKey: "SalesmanId"});
  TAP_Employee.hasMany(Gen_EDIProcessed, { foreignKey: "SalesmanId"});
  Gen_ISoftEmployeeMapping.belongsTo(TAP_Employee, { foreignKey: "CSULEmployeeId"});
  TAP_Employee.hasMany(Gen_ISoftEmployeeMapping, { foreignKey: "CSULEmployeeId"});
  Gen_Parties.belongsTo(TAP_Employee, { foreignKey: "AccountsRepId"});
  TAP_Employee.hasMany(Gen_Parties, { foreignKey: "AccountsRepId"});
  Gen_Parties.belongsTo(TAP_Employee, { foreignKey: "DocsRepId"});
  TAP_Employee.hasMany(Gen_Parties, { foreignKey: "DocsRepId"});
  Gen_Parties.belongsTo(TAP_Employee, { foreignKey: "SalesPersonId"});
  TAP_Employee.hasMany(Gen_Parties, { foreignKey: "SalesPersonId"});
  Gen_Quotation.belongsTo(TAP_Employee, { foreignKey: "SalesRepId"});
  TAP_Employee.hasMany(Gen_Quotation, { foreignKey: "SalesRepId"});
  Gen_SalesRep_Status.belongsTo(TAP_Employee, { foreignKey: "SalesRepId"});
  TAP_Employee.hasMany(Gen_SalesRep_Status, { foreignKey: "SalesRepId"});
  INQ_RateInquiry.belongsTo(TAP_Employee, { foreignKey: "SalesRepId"});
  TAP_Employee.hasMany(INQ_RateInquiry, { foreignKey: "SalesRepId"});
  Log_Job.belongsTo(TAP_Employee, { foreignKey: "OperatorId"});
  TAP_Employee.hasMany(Log_Job, { foreignKey: "OperatorId"});
  Log_Job.belongsTo(TAP_Employee, { foreignKey: "SalesRepId"});
  TAP_Employee.hasMany(Log_Job, { foreignKey: "SalesRepId"});
  SExp_BookingRequest.belongsTo(TAP_Employee, { foreignKey: "SalesRepId"});
  TAP_Employee.hasMany(SExp_BookingRequest, { foreignKey: "SalesRepId"});
  SExp_SeaExportJob.belongsTo(TAP_Employee, { foreignKey: "SalesRepId"});
  TAP_Employee.hasMany(SExp_SeaExportJob, { foreignKey: "SalesRepId"});
  SExp_StuffingPlan_Detail.belongsTo(TAP_Employee, { foreignKey: "SalesRepId"});
  TAP_Employee.hasMany(SExp_StuffingPlan_Detail, { foreignKey: "SalesRepId"});
  SImp_SeaImportJob.belongsTo(TAP_Employee, { foreignKey: "SalesmanId"});
  TAP_Employee.hasMany(SImp_SeaImportJob, { foreignKey: "SalesmanId"});
  TAP_Employee.belongsTo(TAP_Employee, { foreignKey: "LineManagerId"});
  TAP_Employee.hasMany(TAP_Employee, { foreignKey: "LineManagerId"});
  TAP_EmployeeAttendance.belongsTo(TAP_Employee, { foreignKey: "EmployeeId"});
  TAP_Employee.hasMany(TAP_EmployeeAttendance, { foreignKey: "EmployeeId"});
  TAP_Loan.belongsTo(TAP_Employee, { foreignKey: "EmployeeId"});
  TAP_Employee.hasMany(TAP_Loan, { foreignKey: "EmployeeId"});
  TAP_Loan.belongsTo(TAP_Employee, { foreignKey: "ApproveBy"});
  TAP_Employee.hasMany(TAP_Loan, { foreignKey: "ApproveBy"});
  TAP_Salaries_Detail.belongsTo(TAP_Employee, { foreignKey: "EmployeeId"});
  TAP_Employee.hasMany(TAP_Salaries_Detail, { foreignKey: "EmployeeId"});
  TAP_SalaryAdvance.belongsTo(TAP_Employee, { foreignKey: "EmployeeId"});
  TAP_Employee.hasMany(TAP_SalaryAdvance, { foreignKey: "EmployeeId"});
  TAP_SalaryStructure.belongsTo(TAP_Employee, { foreignKey: "EmployeeId"});
  TAP_Employee.hasMany(TAP_SalaryStructure, { foreignKey: "EmployeeId"});
  TAP_Employee.belongsTo(TAP_EmployeeDesignation, { foreignKey: "EmpDesignationId"});
  TAP_EmployeeDesignation.hasMany(TAP_Employee, { foreignKey: "EmpDesignationId"});
  TAP_Employee.belongsTo(TAP_EmployeeStatus, { foreignKey: "EmploymentStatusId"});
  TAP_EmployeeStatus.hasMany(TAP_Employee, { foreignKey: "EmploymentStatusId"});
  TAP_Employee.belongsTo(TAP_Gender, { foreignKey: "GenderId"});
  TAP_Gender.hasMany(TAP_Employee, { foreignKey: "GenderId"});
  GL_ProcessLog.belongsTo(TAP_Loan, { foreignKey: "LoanId"});
  TAP_Loan.hasMany(GL_ProcessLog, { foreignKey: "LoanId"});
  TAP_LoanRecovery.belongsTo(TAP_Loan, { foreignKey: "LoanId"});
  TAP_Loan.hasMany(TAP_LoanRecovery, { foreignKey: "LoanId"});
  TAP_Loan_Schedule.belongsTo(TAP_Loan, { foreignKey: "LoanId"});
  TAP_Loan.hasMany(TAP_Loan_Schedule, { foreignKey: "LoanId"});
  TAP_Salaries_Detail_GL.belongsTo(TAP_Loan_Schedule, { foreignKey: "LoanScheduleId"});
  TAP_Loan_Schedule.hasMany(TAP_Salaries_Detail_GL, { foreignKey: "LoanScheduleId"});
  TAP_Employee.belongsTo(TAP_MaritalStatus, { foreignKey: "MaritalStatusId"});
  TAP_MaritalStatus.hasMany(TAP_Employee, { foreignKey: "MaritalStatusId"});
  TAP_Employee.belongsTo(TAP_Nationality, { foreignKey: "NationalityId"});
  TAP_Nationality.hasMany(TAP_Employee, { foreignKey: "NationalityId"});
  TAP_LoanRecovery.belongsTo(TAP_RecoveryType, { foreignKey: "RecoveryTypeId"});
  TAP_RecoveryType.hasMany(TAP_LoanRecovery, { foreignKey: "RecoveryTypeId"});
  TAP_Employee.belongsTo(TAP_Religion, { foreignKey: "ReligionId"});
  TAP_Religion.hasMany(TAP_Employee, { foreignKey: "ReligionId"});
  GL_ProcessLog.belongsTo(TAP_Salaries, { foreignKey: "SalaryId"});
  TAP_Salaries.hasMany(GL_ProcessLog, { foreignKey: "SalaryId"});
  TAP_Salaries_Detail.belongsTo(TAP_Salaries, { foreignKey: "SalariesId"});
  TAP_Salaries.hasMany(TAP_Salaries_Detail, { foreignKey: "SalariesId"});
  TAP_Salaries_Detail_GL.belongsTo(TAP_Salaries_Detail, { foreignKey: "SalariesDetailId"});
  TAP_Salaries_Detail.hasMany(TAP_Salaries_Detail_GL, { foreignKey: "SalariesDetailId"});
  GL_ProcessLog.belongsTo(TAP_SalaryAdvance, { foreignKey: "SalaryAdvanceId"});
  TAP_SalaryAdvance.hasMany(GL_ProcessLog, { foreignKey: "SalaryAdvanceId"});
  TAP_Salaries_Detail_GL.belongsTo(TAP_SalaryAdvance, { foreignKey: "AdvanceId"});
  TAP_SalaryAdvance.hasMany(TAP_Salaries_Detail_GL, { foreignKey: "AdvanceId"});
  TAP_Salaries_Detail.belongsTo(TAP_SalaryStructure, { foreignKey: "SalaryStructureId"});
  TAP_SalaryStructure.hasMany(TAP_Salaries_Detail, { foreignKey: "SalaryStructureId"});
  TAP_SalaryStructure_Allowance.belongsTo(TAP_SalaryStructure, { foreignKey: "SalaryStructureId"});
  TAP_SalaryStructure.hasMany(TAP_SalaryStructure_Allowance, { foreignKey: "SalaryStructureId"});
  TAP_SalaryStructure_Deduction.belongsTo(TAP_SalaryStructure, { foreignKey: "SalaryStructureId"});
  TAP_SalaryStructure.hasMany(TAP_SalaryStructure_Deduction, { foreignKey: "SalaryStructureId"});
  TAP_Employee.belongsTo(TAP_Title, { foreignKey: "TitleId"});
  TAP_Title.hasMany(TAP_Employee, { foreignKey: "TitleId"});
  Gen_Charges.belongsTo(TPGL_Account_List, { foreignKey: "TPGL_AccountExpenseId"});
  TPGL_Account_List.hasMany(Gen_Charges, { foreignKey: "TPGL_AccountExpenseId"});
  Gen_Charges.belongsTo(TPGL_Account_List, { foreignKey: "TPGL_AccountRevenueId"});
  TPGL_Account_List.hasMany(Gen_Charges, { foreignKey: "TPGL_AccountRevenueId"});
  Gen_Parties.belongsTo(TPGL_Account_List, { foreignKey: "TPGL_AccountCustomerID"});
  TPGL_Account_List.hasMany(Gen_Parties, { foreignKey: "TPGL_AccountCustomerID"});
  Gen_Parties.belongsTo(TPGL_Account_List, { foreignKey: "TPGL_AccountVendorID"});
  TPGL_Account_List.hasMany(Gen_Parties, { foreignKey: "TPGL_AccountVendorID"});
  GL_Currencies.belongsTo(TPGL_CurrencyCode, { foreignKey: "TPGL_CurrencyCodeID"});
  TPGL_CurrencyCode.hasMany(GL_Currencies, { foreignKey: "TPGL_CurrencyCodeID"});
  Gen_TaxAuthority.belongsTo(TPGL_TaxRateCode, { foreignKey: "TPGLTaxRateCode"});
  TPGL_TaxRateCode.hasMany(Gen_TaxAuthority, { foreignKey: "TPGLTaxRateCode"});
  Gen_Parties.belongsTo(TPGL_Terms, { foreignKey: "TPGL_TermsId"});
  TPGL_Terms.hasMany(Gen_Parties, { foreignKey: "TPGL_TermsId"});
  Sub_Tasks.belongsTo(Tasks, { foreignKey: "TaskId"});
  Tasks.hasMany(Sub_Tasks, { foreignKey: "TaskId"});
  Task_Logs.belongsTo(Tasks, { foreignKey: "TaskId"});
  Tasks.hasMany(Task_Logs, { foreignKey: "TaskId"});
  AExp_AirExportJob.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(AExp_AirExportJob, { foreignKey: "PackagesCode"});
  AExp_AirExportJob_OrderDetail.belongsTo(UNPacking, { foreignKey: "PackCode"});
  UNPacking.hasMany(AExp_AirExportJob_OrderDetail, { foreignKey: "PackCode"});
  AExp_BL.belongsTo(UNPacking, { foreignKey: "UnitOfPcs1"});
  UNPacking.hasMany(AExp_BL, { foreignKey: "UnitOfPcs1"});
  AExp_BL.belongsTo(UNPacking, { foreignKey: "UnitOfPcs2"});
  UNPacking.hasMany(AExp_BL, { foreignKey: "UnitOfPcs2"});
  AExp_BL.belongsTo(UNPacking, { foreignKey: "UnitOfPcs3"});
  UNPacking.hasMany(AExp_BL, { foreignKey: "UnitOfPcs3"});
  AExp_BL.belongsTo(UNPacking, { foreignKey: "UnitOfPcs4"});
  UNPacking.hasMany(AExp_BL, { foreignKey: "UnitOfPcs4"});
  AExp_BL_History.belongsTo(UNPacking, { foreignKey: "UnitOfPcs1"});
  UNPacking.hasMany(AExp_BL_History, { foreignKey: "UnitOfPcs1"});
  AExp_BL_History.belongsTo(UNPacking, { foreignKey: "UnitOfPcs2"});
  UNPacking.hasMany(AExp_BL_History, { foreignKey: "UnitOfPcs2"});
  AExp_BL_History.belongsTo(UNPacking, { foreignKey: "UnitOfPcs3"});
  UNPacking.hasMany(AExp_BL_History, { foreignKey: "UnitOfPcs3"});
  AExp_BL_History.belongsTo(UNPacking, { foreignKey: "UnitOfPcs4"});
  UNPacking.hasMany(AExp_BL_History, { foreignKey: "UnitOfPcs4"});
  AImp_AirImportJob.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(AImp_AirImportJob, { foreignKey: "PackagesCode"});
  AImp_AirImportJob_BL.belongsTo(UNPacking, { foreignKey: "UnitOfPcs1"});
  UNPacking.hasMany(AImp_AirImportJob_BL, { foreignKey: "UnitOfPcs1"});
  AImp_AirImportJob_BL.belongsTo(UNPacking, { foreignKey: "UnitOfPcs2"});
  UNPacking.hasMany(AImp_AirImportJob_BL, { foreignKey: "UnitOfPcs2"});
  AImp_AirImportJob_BL.belongsTo(UNPacking, { foreignKey: "UnitOfPcs3"});
  UNPacking.hasMany(AImp_AirImportJob_BL, { foreignKey: "UnitOfPcs3"});
  AImp_AirImportJob_BL.belongsTo(UNPacking, { foreignKey: "UnitOfPcs4"});
  UNPacking.hasMany(AImp_AirImportJob_BL, { foreignKey: "UnitOfPcs4"});
  AImp_AirImportJob_OrderDetail.belongsTo(UNPacking, { foreignKey: "PackCode"});
  UNPacking.hasMany(AImp_AirImportJob_OrderDetail, { foreignKey: "PackCode"});
  Gen_Commodity.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(Gen_Commodity, { foreignKey: "PackagesCode"});
  Gen_ISoftPackingUnit.belongsTo(UNPacking, { foreignKey: "CSULPackCode"});
  UNPacking.hasMany(Gen_ISoftPackingUnit, { foreignKey: "CSULPackCode"});
  Gen_PEDIMapping.belongsTo(UNPacking, { foreignKey: "PackageUnit"});
  UNPacking.hasMany(Gen_PEDIMapping, { foreignKey: "PackageUnit"});
  INQ_RateInquiry_Detail.belongsTo(UNPacking, { foreignKey: "PackageType"});
  UNPacking.hasMany(INQ_RateInquiry_Detail, { foreignKey: "PackageType"});
  Log_Job.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(Log_Job, { foreignKey: "PackagesCode"});
  Log_Job_Container.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(Log_Job_Container, { foreignKey: "PackagesCode"});
  SExp_BL_Equipment.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(SExp_BL_Equipment, { foreignKey: "PackagesCode"});
  SExp_BL_Equipment_History.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(SExp_BL_Equipment_History, { foreignKey: "PackagesCode"});
  SExp_BookingRequest.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(SExp_BookingRequest, { foreignKey: "PackagesCode"});
  SExp_BookingToCarrier.belongsTo(UNPacking, { foreignKey: "InnerPackingUnitCode"});
  UNPacking.hasMany(SExp_BookingToCarrier, { foreignKey: "InnerPackingUnitCode"});
  SExp_BookingToCarrier.belongsTo(UNPacking, { foreignKey: "OuterPackingUnitCode"});
  UNPacking.hasMany(SExp_BookingToCarrier, { foreignKey: "OuterPackingUnitCode"});
  SExp_BookingToCarrier.belongsTo(UNPacking, { foreignKey: "PackingUnitCode"});
  UNPacking.hasMany(SExp_BookingToCarrier, { foreignKey: "PackingUnitCode"});
  SExp_SeaExportJob.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(SExp_SeaExportJob, { foreignKey: "PackagesCode"});
  SExp_ShippingInstruction_Equipment.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(SExp_ShippingInstruction_Equipment, { foreignKey: "PackagesCode"});
  SExp_SwitchBL_Equipment.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(SExp_SwitchBL_Equipment, { foreignKey: "PackagesCode"});
  SExp_SwitchBL_Equipment_History.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(SExp_SwitchBL_Equipment_History, { foreignKey: "PackagesCode"});
  SImp_BL_Equipment.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(SImp_BL_Equipment, { foreignKey: "PackagesCode"});
  SImp_BL_Equipment_History.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(SImp_BL_Equipment_History, { foreignKey: "PackagesCode"});
  SImp_SeaImportJob.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(SImp_SeaImportJob, { foreignKey: "PackagesCode"});
  WMS_CargoDEStuffing_Detail.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(WMS_CargoDEStuffing_Detail, { foreignKey: "PackagesCode"});
  WMS_CargoDEStuffing_DetailPD.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(WMS_CargoDEStuffing_DetailPD, { foreignKey: "PackagesCode"});
  WMS_DeliveryOrder_Detail.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(WMS_DeliveryOrder_Detail, { foreignKey: "PackagesCode"});
  WMS_Delivery_Charges.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(WMS_Delivery_Charges, { foreignKey: "PackagesCode"});
  WMS_Delivery_Detail.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(WMS_Delivery_Detail, { foreignKey: "PackagesCode"});
  WMS_GRN_Charges.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(WMS_GRN_Charges, { foreignKey: "PackagesCode"});
  WMS_GRN_Detail.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(WMS_GRN_Detail, { foreignKey: "PackagesCode"});
  WMS_ReceivingOrder_Detail.belongsTo(UNPacking, { foreignKey: "PackagesCode"});
  UNPacking.hasMany(WMS_ReceivingOrder_Detail, { foreignKey: "PackagesCode"});
  SE_Jobs.belongsTo(Vendors, { foreignKey: "airLineId"});
  Vendors.hasMany(SE_Jobs, { foreignKey: "airLineId"});
  SE_Jobs.belongsTo(Vendors, { foreignKey: "customAgentId"});
  Vendors.hasMany(SE_Jobs, { foreignKey: "customAgentId"});
  SE_Jobs.belongsTo(Vendors, { foreignKey: "forwarderId"});
  Vendors.hasMany(SE_Jobs, { foreignKey: "forwarderId"});
  SE_Jobs.belongsTo(Vendors, { foreignKey: "localVendorId"});
  Vendors.hasMany(SE_Jobs, { foreignKey: "localVendorId"});
  SE_Jobs.belongsTo(Vendors, { foreignKey: "overseasAgentId"});
  Vendors.hasMany(SE_Jobs, { foreignKey: "overseasAgentId"});
  SE_Jobs.belongsTo(Vendors, { foreignKey: "shippingLineId"});
  Vendors.hasMany(SE_Jobs, { foreignKey: "shippingLineId"});
  SE_Jobs.belongsTo(Vendors, { foreignKey: "transporterId"});
  Vendors.hasMany(SE_Jobs, { foreignKey: "transporterId"});
  Vendor_Associations.belongsTo(Vendors, { foreignKey: "VendorId"});
  Vendors.hasMany(Vendor_Associations, { foreignKey: "VendorId"});
  SE_Jobs.belongsTo(Vessels, { foreignKey: "vesselId"});
  Vessels.hasMany(SE_Jobs, { foreignKey: "vesselId"});
  Voyages.belongsTo(Vessels, { foreignKey: "VesselId"});
  Vessels.hasMany(Voyages, { foreignKey: "VesselId"});
  Invoice_Transactions.belongsTo(Vouchers, { foreignKey: "VoucherId"});
  Vouchers.hasMany(Invoice_Transactions, { foreignKey: "VoucherId"});
  Office_Vouchers.belongsTo(Vouchers, { foreignKey: "VoucherId"});
  Vouchers.hasMany(Office_Vouchers, { foreignKey: "VoucherId"});
  SE_Jobs.belongsTo(Voyages, { foreignKey: "VoyageId"});
  Voyages.hasMany(SE_Jobs, { foreignKey: "VoyageId"});
  WMS_Delivery.belongsTo(WMS_Activity, { foreignKey: "ActivityId"});
  WMS_Activity.hasMany(WMS_Delivery, { foreignKey: "ActivityId"});
  WMS_DeliveryOrder.belongsTo(WMS_Activity, { foreignKey: "ActivityId"});
  WMS_Activity.hasMany(WMS_DeliveryOrder, { foreignKey: "ActivityId"});
  WMS_GRN.belongsTo(WMS_Activity, { foreignKey: "ActivityId"});
  WMS_Activity.hasMany(WMS_GRN, { foreignKey: "ActivityId"});
  WMS_ReceivingOrder.belongsTo(WMS_Activity, { foreignKey: "ActivityId"});
  WMS_Activity.hasMany(WMS_ReceivingOrder, { foreignKey: "ActivityId"});
  WMS_Activity.belongsTo(WMS_ActivityType, { foreignKey: "ActivityTypeId"});
  WMS_ActivityType.hasMany(WMS_Activity, { foreignKey: "ActivityTypeId"});
  WMS_CargoDEStuffing_Detail.belongsTo(WMS_CargoDEStuffing, { foreignKey: "WMSDEStuffingId"});
  WMS_CargoDEStuffing.hasMany(WMS_CargoDEStuffing_Detail, { foreignKey: "WMSDEStuffingId"});
  WMS_CargoDEStuffing_DetailPD.belongsTo(WMS_CargoDEStuffing, { foreignKey: "WMSDEStuffingId"});
  WMS_CargoDEStuffing.hasMany(WMS_CargoDEStuffing_DetailPD, { foreignKey: "WMSDEStuffingId"});
  WMS_GRN.belongsTo(WMS_CargoDEStuffing, { foreignKey: "DEStuffingId"});
  WMS_CargoDEStuffing.hasMany(WMS_GRN, { foreignKey: "DEStuffingId"});
  WMS_CargoDEStuffing_DetailPD.belongsTo(WMS_CargoDEStuffing_Detail, { foreignKey: "WMSDEStuffingDetailId"});
  WMS_CargoDEStuffing_Detail.hasMany(WMS_CargoDEStuffing_DetailPD, { foreignKey: "WMSDEStuffingDetailId"});
  WMS_GRN_Detail.belongsTo(WMS_CargoDEStuffing_Detail, { foreignKey: "DEStuffingDetailId"});
  WMS_CargoDEStuffing_Detail.hasMany(WMS_GRN_Detail, { foreignKey: "DEStuffingDetailId"});
  WMS_CargoStuffing_Detail.belongsTo(WMS_CargoStuffing, { foreignKey: "StuffingId"});
  WMS_CargoStuffing.hasMany(WMS_CargoStuffing_Detail, { foreignKey: "StuffingId"});
  WMS_Delivery_Charges.belongsTo(WMS_Delivery, { foreignKey: "DeliveryId"});
  WMS_Delivery.hasMany(WMS_Delivery_Charges, { foreignKey: "DeliveryId"});
  WMS_Delivery_Detail.belongsTo(WMS_Delivery, { foreignKey: "DeliveryId"});
  WMS_Delivery.hasMany(WMS_Delivery_Detail, { foreignKey: "DeliveryId"});
  WMS_DeliveryOrder_Detail.belongsTo(WMS_DeliveryOrder, { foreignKey: "DeliveryOrderId"});
  WMS_DeliveryOrder.hasMany(WMS_DeliveryOrder_Detail, { foreignKey: "DeliveryOrderId"});
  WMS_BalanceDeliveryOrder.belongsTo(WMS_DeliveryOrder_Detail, { foreignKey: "DeliveryOrderDetailId"});
  WMS_DeliveryOrder_Detail.hasMany(WMS_BalanceDeliveryOrder, { foreignKey: "DeliveryOrderDetailId"});
  WMS_Delivery_Detail.belongsTo(WMS_DeliveryOrder_Detail, { foreignKey: "DeliveryOrderDetailId"});
  WMS_DeliveryOrder_Detail.hasMany(WMS_Delivery_Detail, { foreignKey: "DeliveryOrderDetailId"});
  WMS_GRN_Charges.belongsTo(WMS_GRN, { foreignKey: "GRNId"});
  WMS_GRN.hasMany(WMS_GRN_Charges, { foreignKey: "GRNId"});
  WMS_GRN_Detail.belongsTo(WMS_GRN, { foreignKey: "GRNId"});
  WMS_GRN.hasMany(WMS_GRN_Detail, { foreignKey: "GRNId"});
  WMS_Delivery.belongsTo(WMS_GRNMode, { foreignKey: "DeliveryModeId"});
  WMS_GRNMode.hasMany(WMS_Delivery, { foreignKey: "DeliveryModeId"});
  WMS_GRN.belongsTo(WMS_GRNMode, { foreignKey: "ModeId"});
  WMS_GRNMode.hasMany(WMS_GRN, { foreignKey: "ModeId"});
  WMS_BalanceGRNDetail.belongsTo(WMS_GRN_Detail, { foreignKey: "GRNDetailId"});
  WMS_GRN_Detail.hasMany(WMS_BalanceGRNDetail, { foreignKey: "GRNDetailId"});
  WMS_Delivery_Detail.belongsTo(WMS_GRN_Detail, { foreignKey: "GRNDetailId"});
  WMS_GRN_Detail.hasMany(WMS_Delivery_Detail, { foreignKey: "GRNDetailId"});
  WMS_GRN_Detail_ProductInfo.belongsTo(WMS_GRN_Detail, { foreignKey: "GRNDetailId"});
  WMS_GRN_Detail.hasMany(WMS_GRN_Detail_ProductInfo, { foreignKey: "GRNDetailId"});
  WMS_DeliveryOrder.belongsTo(WMS_InvOrderStatus, { foreignKey: "InvOrderStatusId"});
  WMS_InvOrderStatus.hasMany(WMS_DeliveryOrder, { foreignKey: "InvOrderStatusId"});
  WMS_ReceivingOrder.belongsTo(WMS_InvOrderStatus, { foreignKey: "InvOrderStatusId"});
  WMS_InvOrderStatus.hasMany(WMS_ReceivingOrder, { foreignKey: "InvOrderStatusId"});
  WMS_DeliveryOrder_Detail.belongsTo(WMS_Locations, { foreignKey: "LocationId"});
  WMS_Locations.hasMany(WMS_DeliveryOrder_Detail, { foreignKey: "LocationId"});
  WMS_Delivery_Detail.belongsTo(WMS_Locations, { foreignKey: "LocationId"});
  WMS_Locations.hasMany(WMS_Delivery_Detail, { foreignKey: "LocationId"});
  WMS_GRN_Detail.belongsTo(WMS_Locations, { foreignKey: "LocationId"});
  WMS_Locations.hasMany(WMS_GRN_Detail, { foreignKey: "LocationId"});
  WMS_ReceivingOrder_Detail.belongsTo(WMS_Locations, { foreignKey: "LocationId"});
  WMS_Locations.hasMany(WMS_ReceivingOrder_Detail, { foreignKey: "LocationId"});
  WMS_GRN_Charges.belongsTo(WMS_RateApply, { foreignKey: "RateApplyId"});
  WMS_RateApply.hasMany(WMS_GRN_Charges, { foreignKey: "RateApplyId"});
  WMS_Delivery_Detail.belongsTo(WMS_ReceivedCondition, { foreignKey: "ReceivedConditionId"});
  WMS_ReceivedCondition.hasMany(WMS_Delivery_Detail, { foreignKey: "ReceivedConditionId"});
  WMS_GRN_Detail.belongsTo(WMS_ReceivedCondition, { foreignKey: "ReceivedConditionId"});
  WMS_ReceivedCondition.hasMany(WMS_GRN_Detail, { foreignKey: "ReceivedConditionId"});
  WMS_ReceivingOrder_Detail.belongsTo(WMS_ReceivingOrder, { foreignKey: "ReceivingOrderId"});
  WMS_ReceivingOrder.hasMany(WMS_ReceivingOrder_Detail, { foreignKey: "ReceivingOrderId"});
  WMS_BalanceReceivingOrder.belongsTo(WMS_ReceivingOrder_Detail, { foreignKey: "ReceivingOrderDetailId"});
  WMS_ReceivingOrder_Detail.hasMany(WMS_BalanceReceivingOrder, { foreignKey: "ReceivingOrderDetailId"});
  WMS_GRN_Detail.belongsTo(WMS_ReceivingOrder_Detail, { foreignKey: "ReceivingOrderDetailId"});
  WMS_ReceivingOrder_Detail.hasMany(WMS_GRN_Detail, { foreignKey: "ReceivingOrderDetailId"});
  WMS_GRN.belongsTo(WMS_StorageMode, { foreignKey: "StorageModeId"});
  WMS_StorageMode.hasMany(WMS_GRN, { foreignKey: "StorageModeId"});

  return {
    AExp_AirExportJob,
    AExp_AirExportJob_AWBReleaseLog,
    AExp_AirExportJob_ChargesPayb,
    AExp_AirExportJob_ChargesPayb_History,
    AExp_AirExportJob_ChargesPayb_TaxExpShare,
    AExp_AirExportJob_ChargesRecv,
    AExp_AirExportJob_ChargesRecv_History,
    AExp_AirExportJob_ChargesRecv_TaxRevShare,
    AExp_AirExportJob_ExtMilestone,
    AExp_AirExportJob_LastMilestone,
    AExp_AirExportJob_OrderDetail,
    AExp_AirExportJob_TracingDoc,
    AExp_AirExportJob_TracingOpr,
    AExp_AirwayBillStock,
    AExp_AirwayBillStock_Detail,
    AExp_BL,
    AExp_BL_Charges,
    AExp_BL_Dimension,
    AExp_BL_History,
    AExp_BL_PrintingLog,
    AExp_BL_Stamp,
    AImp_AirImportJob,
    AImp_AirImportJob_BL,
    AImp_AirImportJob_BLCharges,
    AImp_AirImportJob_BLDimension,
    AImp_AirImportJob_BLPrintingLog,
    AImp_AirImportJob_ChargesPayb,
    AImp_AirImportJob_ChargesPayb_History,
    AImp_AirImportJob_ChargesPayb_TaxExpShare,
    AImp_AirImportJob_ChargesRecv,
    AImp_AirImportJob_ChargesRecv_History,
    AImp_AirImportJob_ChargesRecv_TaxRevShare,
    AImp_AirImportJob_ExtMilestone,
    AImp_AirImportJob_LastMilestone,
    AImp_AirImportJob_OrderDetail,
    AImp_AirImportJob_TracingDoc,
    AImp_AirImportJob_TracingOpr,
    AImp_AirImportJob__LastMilestone,
    AImp_DeliveryOrder,
    AImp_ManifestHeader,
    Access_Levels,
    Accounts,
    AssignTasks,
    Bls,
    CEAS_User,
    CEAS_User_CostCenterRight,
    CEAS_User_SalesRepRight,
    CEAS_User_SubCompanyRight,
    COASCompanyRegistration,
    COAS_VersionScript,
    COAS_VersionScriptLog,
    CRM_Activity,
    CRM_Event,
    CRM_Opportunity,
    CRM_Planning,
    CRM_Planning_Detail,
    CTrk_Activity,
    CTrk_Activity_Detail,
    CTrk_Container,
    CTrk_ContainerActivity,
    CTrk_ContainerCycle,
    CTrk_ContainerStatus,
    CTrk_EdiActivityMap,
    CTrk_Stage,
    CVHM_GuaranteeFilling,
    CVHM_GuaranteeFillingContainer,
    CVHM_GuaranteeType,
    CashBookSaveAccount,
    CashDenominationRecording,
    Charge_Heads,
    Charges,
    Child_Accounts,
    Client_Associations,
    Clients,
    Commodities,
    Companies,
    Container_Infos,
    DEPO_Activity,
    DEPO_ActivityStatus,
    DEPO_ActivityStorageType,
    DEPO_ActivityType,
    DEPO_Activity_PaymentMode,
    DEPO_BillingMode,
    DEPO_Container,
    DEPO_ContainerActivity,
    DEPO_ContainerActivityCharges,
    DEPO_ContainerActivityDetailHistory,
    DEPO_ContainerActivityType,
    DEPO_ContainerActivity_Detail,
    DEPO_ContainerCondition,
    DEPO_ContainerHold,
    DEPO_ContainerHold_Detail,
    DEPO_ContainerHold_RestrictMode,
    DEPO_ContainerKind,
    DEPO_ContainerStatus,
    DEPO_LinesTariff,
    DEPO_LinesTariff_PerDay,
    DEPO_LinesTariff_PerMove,
    DEPO_LoadingType,
    DEPO_Location,
    DEPO_ManufactureCoding,
    DEPO_Receipt,
    DEPO_Receipt_Detail,
    DEPO_ShiftSetup,
    DEPO_StackingArea,
    DEPO_SubLine,
    Delivery_Orders,
    Dimensions,
    DocumentSignRequest,
    Employees,
    EversignDocumentTemplate,
    GL_AccSecurityGrp,
    GL_AccSecurityGrpDetail,
    GL_AccSecurityGrpParentDetail,
    GL_AccSecurityGrpUserRight,
    GL_AccountBalances,
    GL_AccountIntegration,
    GL_AccountIntegration_Charges,
    GL_AccountIntegration_Charges_Log,
    GL_AccountIntegration_Common,
    GL_AccountIntegration_Common_Log,
    GL_AccountIntegration_PartyParent,
    GL_AccountIntegration_PartyParent_Log,
    GL_AccountMode,
    GL_AccountType,
    GL_AgentInvoice,
    GL_AgentInvoiceOpening,
    GL_AgentInvoice_Charges,
    GL_AgentInvoice_Charges_Cont,
    GL_AgentInvoice_Charges_Tax,
    GL_AgentInvoice_History,
    GL_AgentInvoice_History_Charges,
    GL_AgentInvoice_TaxInvoice,
    GL_AgentPaymentRequisition,
    GL_AgentPaymentRequisition_Detail,
    GL_AgentReceiptPayment,
    GL_AgentReceiptPayment_Detail,
    GL_AgentReceiptPayment_History,
    GL_AgentReceiptPayment_History_Detail,
    GL_BalanceCIH,
    GL_Budget,
    GL_Budget_Detail,
    GL_Budget_Detail_MB,
    GL_CCGroup,
    GL_CCGroup_CostCenter,
    GL_COA,
    GL_COACategory,
    GL_COAPNLCategory,
    GL_COARule,
    GL_COASubCategory,
    GL_COA_Bank,
    GL_COA_Company,
    GL_COA_Customer,
    GL_COA_Employee,
    GL_COA_PartyInfo,
    GL_COA_PropertyRule,
    GL_COA_Supplier,
    GL_ChequeBookStock,
    GL_ChequeBookStock_Detail,
    GL_ChequeOpening,
    GL_ChequeOpening_Properties,
    GL_ChequeOpening_VDProperties,
    GL_ChequeStatus,
    GL_ChequeType,
    GL_Currencies,
    GL_FiscalYear,
    GL_FiscalYear_Quarter,
    GL_InvAdjustments,
    GL_InvAdjustments_History,
    GL_InvMode,
    GL_InvTaxType,
    GL_InvoiceBalance,
    GL_Invoices,
    GL_Invoices_History,
    GL_Invoices_Properties,
    GL_Invoices_Properties_History,
    GL_JobBill,
    GL_JobBillOpening,
    GL_JobBillOpening_Advance,
    GL_JobBill_Charges,
    GL_JobBill_Charges_Cont,
    GL_JobBill_Charges_Tax,
    GL_JobBill_History,
    GL_JobBill_History_Charges,
    GL_JobBill_TaxInvoice,
    GL_JobDirectExpRev,
    GL_JobDirectExpRev_Charges,
    GL_JobDirectExpRev_Charges_Tax,
    GL_JobDirectExpRev_History,
    GL_JobDirectExpRev_History_Charges,
    GL_JobInvoice,
    GL_JobInvoiceDispute,
    GL_JobInvoiceOpening,
    GL_JobInvoiceOpening_Advance,
    GL_JobInvoice_Charges,
    GL_JobInvoice_Charges_Cont,
    GL_JobInvoice_Charges_Cont_DaysBreakup,
    GL_JobInvoice_Charges_Tax,
    GL_JobInvoice_History,
    GL_JobInvoice_History_Charges,
    GL_JobInvoice_PaidByClient,
    GL_JobInvoice_TaxInvoice,
    GL_JobOnlineReceipt,
    GL_JobOnlineReceiptACHAddress,
    GL_JobOnlineReceiptBillingAddress,
    GL_JobOnlineReceipt_Detail,
    GL_JobPayment,
    GL_JobPaymentRequisition,
    GL_JobPaymentRequisition_Detail,
    GL_JobPayment_Detail,
    GL_JobPayment_History,
    GL_JobPayment_History_Detail,
    GL_JobReceipt,
    GL_JobReceipt_Detail,
    GL_JobReceipt_History,
    GL_JobReceipt_History_Detail,
    GL_JobSecurity,
    GL_JobSecurityRefundRequisition,
    GL_JobSecurityTran,
    GL_JobSecurityTranHistory,
    GL_JobSettlement,
    GL_JobSettlement_Detail,
    GL_ModuleIntegerationSetup,
    GL_ModuleIntegrationLog,
    GL_PaymentType,
    GL_Periods,
    GL_PrincipalManualSOA,
    GL_PrincipalManualSOA_Charges,
    GL_PrincipalManualSOA_Charges_Cont,
    GL_PrincipalManualSOA_Charges_Tax,
    GL_PrincipalReceiptPayment,
    GL_PrincipalReceiptPayment_Detail,
    GL_PrincipleInvoice,
    GL_PrincipleInvoiceOpening,
    GL_PrincipleInvoice_Charges,
    GL_PrincipleInvoice_Charges_Cont,
    GL_PrincipleInvoice_Charges_Tax,
    GL_PrincipleInvoice_TaxInvoice,
    GL_ProcessLog,
    GL_Properties,
    GL_PropertiesLOV,
    GL_Properties_Usage,
    GL_RecDateSetup,
    GL_ReconciledData,
    GL_ReconciledData_Detail,
    GL_ReconciledLockedData,
    GL_Requisition,
    GL_Requisition_Detail,
    GL_Requisition_Detail_Adj,
    GL_Requisition_Detail_SetAdj,
    GL_RunningDetention,
    GL_RunningDetention_Charges,
    GL_RunningDetention_Charges_Cont,
    GL_RunningDetention_Charges_Cont_DaysBreakup,
    GL_SInsAdjustments,
    GL_SInsAdjustments_History,
    GL_SettlementBalance,
    GL_SettlementInstrument,
    GL_SettlementInstrument_History,
    GL_TerminalInvoice,
    GL_TerminalInvoice_Detail,
    GL_UDFHeading,
    GL_UnAccruedEquipmentInvoice,
    GL_UnAccruedEquipmentInvoice_DaysBreakup,
    GL_Voucher,
    GL_VoucherFormType,
    GL_VoucherType,
    GL_VoucherUsageCode,
    GL_Voucher_Detail,
    GL_Voucher_Detail_ChequeInfo,
    GL_Voucher_Detail_History,
    GL_Voucher_Detail_Mem,
    GL_Voucher_Detail_PaymentChqInfo,
    GL_Voucher_Detail_Properties,
    GL_Voucher_Detail_Properties_History,
    GL_Voucher_Detail_Properties_Mem,
    GL_Voucher_History,
    GL_Voucher_Mem,
    GL_Voucher_Properties,
    GL_Voucher_Properties_History,
    GL_Voucher_Properties_Mem,
    GL_WTHDeposit,
    GL_WTHDeposit_Detail,
    Gen_AEJobNotes,
    Gen_AIJobNotes,
    Gen_APDashboardSetup,
    Gen_APIData,
    Gen_APUserDashboardPreference,
    Gen_ActiveInactiveLog,
    Gen_ActiveInactiveReason,
    Gen_ActivityAlerts,
    Gen_ActivityAlertsSubscription,
    Gen_ActivityAlertsSubscription_Email,
    Gen_ActivityAlertsSubscription_SMS,
    Gen_ActivityAlertsSubscription_User,
    Gen_AlertType,
    Gen_BLMandatoryFieldsSetup,
    Gen_BLTemplate,
    Gen_BLTemplate_AttachSheets,
    Gen_BankDetailRegister,
    Gen_BankSubType,
    Gen_Border,
    Gen_BulkProcessActions,
    Gen_BulkProcessLog,
    Gen_CARF,
    Gen_CARFLog,
    Gen_CARF_Exception,
    Gen_CARF_Reason,
    Gen_CC_RptSetup,
    Gen_CNICDetail,
    Gen_CNICDetail_Log,
    Gen_CPDashboardSetup,
    Gen_CPUserDashboardPreference,
    Gen_CargoTypeFile,
    Gen_Charges,
    Gen_ChargesNature,
    Gen_ChargesReportingGroup,
    Gen_ChargesTariff,
    Gen_ChargesTariffGeneralWeightage,
    Gen_ChargesTariff_AirDetail,
    Gen_ChargesTariff_Cleaning,
    Gen_ChargesTariff_Detail,
    Gen_ChargesTariff_Detention,
    Gen_ChargesTariff_LatePickup,
    Gen_ChargesTariff_Placement,
    Gen_ChargesTariff_PlugIn,
    Gen_ChargesTariff_Storage,
    Gen_ChargesVATCategory,
    Gen_Charges_Category,
    Gen_Charges_SubCompanyRight,
    Gen_Charges_TaxAuthority,
    Gen_Clauses,
    Gen_CloudInfo,
    Gen_Commodity,
    Gen_CommodityCargoType,
    Gen_CommodityGroup,
    Gen_CommonLOV,
    Gen_CommonReportParameter,
    Gen_CommonStatus,
    Gen_CompanInfo,
    Gen_ContainerDepot,
    Gen_ContainerOwner,
    Gen_CrucialChangesLog,
    Gen_CurrencyMarketRate,
    Gen_CustomStatus,
    Gen_CustomerGroup,
    Gen_Dashboard,
    Gen_DashboardPolicy,
    Gen_DashboardSetup,
    Gen_DashboardSetupPolicy,
    Gen_DashboardType,
    Gen_Dashboard_Executive,
    Gen_DeliveryOrderRequest,
    Gen_DeliveryType,
    Gen_Department,
    Gen_Department_UserRights,
    Gen_Designation,
    Gen_DetentionTariff,
    Gen_DetentionTariff_Detention,
    Gen_DetentionTariff_History,
    Gen_DetentionTariff_History_Detail,
    Gen_DetentionTariff_PlugIn,
    Gen_Dimension,
    Gen_Dimension_Detail,
    Gen_Document,
    Gen_DocumentType,
    Gen_Document_Deleted,
    Gen_DrawnBank,
    Gen_EDIFormat,
    Gen_EDIProcessed,
    Gen_EDIProcessed_BLDetail,
    Gen_EDIProcessed_Charge,
    Gen_EDIProcessed_Container,
    Gen_EDO,
    Gen_EDOFormat,
    Gen_EDO_AcknowledgeDetail,
    Gen_EDO_Process,
    Gen_EDO_Process_Detail,
    Gen_EDO_SubmissionDetail,
    Gen_EDO_TemplateSetup,
    Gen_EPAS_SerialType,
    Gen_EditorType,
    Gen_EmailRecipient,
    Gen_EmailTemplate,
    Gen_EmailTemplateTag,
    Gen_EmailTemplateType,
    Gen_Email_Log,
    Gen_Email_Log_History,
    Gen_EquipmentSize,
    Gen_EquipmentSizeType,
    Gen_EquipmentType,
    Gen_ExchRateRange,
    Gen_ExchRateRange_Detail,
    Gen_Expenses,
    Gen_FTPSetting,
    Gen_FileCategory,
    Gen_Flight_Schedule,
    Gen_Flight_Schedule_Detail,
    Gen_Flight_Schedule_ExchRateDetail,
    Gen_Forms,
    Gen_Forms_Functions,
    Gen_FreightClassType,
    Gen_Frequency,
    Gen_FrequencyPeriod,
    Gen_Functions,
    Gen_HazmatClassType,
    Gen_HazmatPackingGroup,
    Gen_HistoryType,
    Gen_ISoftCharge,
    Gen_ISoftCommodityMapping,
    Gen_ISoftEmployeeMapping,
    Gen_ISoftEquipmentSizeTypeMapping,
    Gen_ISoftPackingUnit,
    Gen_ISoftParty,
    Gen_ISoftPartyContact,
    Gen_ISoftPartyLocation,
    Gen_ISoftVesselMapping,
    Gen_IncoTerms,
    Gen_IndexType,
    Gen_InsuranceCompany,
    Gen_InsuranceType,
    Gen_JobCancelReason,
    Gen_JobNature,
    Gen_JobSubType,
    Gen_JobType,
    Gen_LCLStorageTariff,
    Gen_LCLStorageTariff_DG,
    Gen_LCLStorageTariff_General,
    Gen_LetterProcessed,
    Gen_LetterTemplate,
    Gen_LetterTemplateTag,
    Gen_LocalCustom,
    Gen_Localization,
    Gen_Localize,
    Gen_ManifestHeader,
    Gen_MileStone,
    Gen_MileStone_Detail,
    Gen_NearByPorts,
    Gen_NewsAlert,
    Gen_NonCommercialDelivery,
    Gen_NonCommercialPickup,
    Gen_Notification,
    Gen_OperationType,
    Gen_OverseasAgentNetwork,
    Gen_PEDIFileType,
    Gen_PEDIMapping,
    Gen_PEDIMappingType,
    Gen_PODetails,
    Gen_Parties,
    Gen_PartiesCommitment,
    Gen_PartiesCommitment_Detail,
    Gen_Parties_Alerts,
    Gen_Parties_CommodityDetail,
    Gen_Parties_CommonDetail,
    Gen_Parties_Contacts,
    Gen_Parties_Contacts_Events,
    Gen_Parties_CostCenterRight,
    Gen_Parties_Exception,
    Gen_Parties_InsuranceDetail,
    Gen_Parties_Locations,
    Gen_Parties_Notification,
    Gen_Parties_SubCompanyRight,
    Gen_Parties_Terminal,
    Gen_PartyMandatoryFieldsSetup,
    Gen_PaymentTerm,
    Gen_PortCategory,
    Gen_PortCountryException,
    Gen_Port_Exception,
    Gen_PrintOn,
    Gen_ProductPackageType,
    Gen_Quotation,
    Gen_Quotation_Detail,
    Gen_Quotation_Equipment,
    Gen_QuoteTemplate,
    Gen_QuoteTemplate_Detail,
    Gen_RateGroup,
    Gen_RateUnit,
    Gen_ReasonForCredit,
    Gen_ReceivedFromPayToParties,
    Gen_Region,
    Gen_Report,
    Gen_ReportConfiguration,
    Gen_ReportConfiguration_Detail,
    Gen_ReportDocument,
    Gen_ReportFilter,
    Gen_ReportSubscription,
    Gen_ReportSubscription_Detail,
    Gen_ReportSubscription_Email,
    Gen_ReportSubscription_Log,
    Gen_ReportSubscription_LogMaster,
    Gen_ReportTextDoc,
    Gen_Report_Cubical,
    Gen_Report_Properties,
    Gen_Report_Properties_Value,
    Gen_Roles,
    Gen_Rows,
    Gen_SEJobNotes,
    Gen_SIJobNotes,
    Gen_SMS_Log,
    Gen_SMS_Log_History,
    Gen_SalesRep_Status,
    Gen_SaveDefaultValue,
    Gen_SeaAccessorialCharge,
    Gen_SeaInterimRate,
    Gen_SeaPublishRate,
    Gen_SecurityDepositStatus,
    Gen_SecurityFile,
    Gen_SecurityFile_Detention,
    Gen_SecurityFile_Payable,
    Gen_SecurityGroup,
    Gen_SecurityGroup_Authority,
    Gen_SecurityHold,
    Gen_SecurityLevel,
    Gen_SecurityTranStatus,
    Gen_SecurityType,
    Gen_SequenceCustomized,
    Gen_SequenceDef,
    Gen_SequenceSWC,
    Gen_Sequences,
    Gen_SerialException,
    Gen_ServiceActivityLog,
    Gen_ServiceActivityLogType,
    Gen_Session,
    Gen_ShippingAgencyLicense,
    Gen_ShippingLineReleaseType,
    Gen_Signatures,
    Gen_SlabType,
    Gen_SlabType_Detail,
    Gen_Stamps,
    Gen_SubCompanies,
    Gen_SupplierType,
    Gen_SysPolCompanyPolicy,
    Gen_SysPolElementSource,
    Gen_SysPolElementType,
    Gen_SysPolElements,
    Gen_SysPolicyDetail,
    Gen_SysPolicyDetail_Log,
    Gen_SysPolicyMaster,
    Gen_SysPolicy_DODocs,
    Gen_SysPolicy_SecurityRefundDocs,
    Gen_TaxAuthority,
    Gen_TaxAuthorityGroup,
    Gen_TaxAuthorityGroup_Detail,
    Gen_TaxFilerStatus,
    Gen_TaxInvNature,
    Gen_TaxRevDistribution,
    Gen_TaxRevDistribution_Detail,
    Gen_Terminal,
    Gen_TerminalInvoiceLog,
    Gen_TerminalStockRequirement,
    Gen_TerminalStockRequirement_Detail,
    Gen_TracingEventDocLog,
    Gen_TracingEventOprLog,
    Gen_TracingEvents,
    Gen_TracingEventsAutoPick,
    Gen_TypeOfIGM,
    Gen_ULDContainers,
    Gen_UNAirport,
    Gen_UNAirport_Aliases,
    Gen_UNLocation,
    Gen_UNLocation_Aliases,
    Gen_UNLocation_PortCategory,
    Gen_UnCommodity,
    Gen_UnLocationState,
    Gen_Units,
    Gen_UnitsOfMeasurment,
    Gen_UserAlert_Log,
    Gen_UserDashboardPreference,
    Gen_UserDashboardPreference_Detail,
    Gen_Users,
    Gen_VendorGroup,
    Gen_Vessel,
    Gen_Voyage,
    Gen_Voyage_ExchRateDetail,
    Gen_Voyage_Terminal,
    Gen_Wharf,
    Google_Location,
    Histories,
    INQ_QuoteChargeTemplate,
    INQ_QuoteChargeTemplate_Detail,
    INQ_RateFromVendor,
    INQ_RateFromVendor_Charges,
    INQ_RateInquiry,
    INQ_RateInquiry_Detail,
    INQ_RateRequestToVendor,
    INQ_RateToCustomer,
    INQ_RateToCustomer_Charges,
    Inv_GINChangeLog,
    Invoice_Losses,
    Invoice_Transactions,
    Invoices,
    Item_Details,
    Job_notes,
    KRA_ManifestLog,
    Loading_Programs,
    Log_Activity,
    Log_ActivityType,
    Log_Activity_Detail,
    Log_BrandSetup,
    Log_CarrierManifest,
    Log_CarrierManifest_Detail,
    Log_DutyCalculation,
    Log_DutyCalculation_PODetail,
    Log_EDILocation,
    Log_Job,
    Log_JobActivities,
    Log_JobStage,
    Log_JobType,
    Log_Job_ChargesPayb,
    Log_Job_ChargesPayb_Cont,
    Log_Job_ChargesPayb_History,
    Log_Job_ChargesPayb_TaxExpShare,
    Log_Job_ChargesRecv,
    Log_Job_ChargesRecv_Cont,
    Log_Job_ChargesRecv_History,
    Log_Job_ChargesRecv_TaxRevShare,
    Log_Job_Container,
    Log_Job_ExtMilestone,
    Log_Job_LastMilestone,
    Log_Job_PaidByClient,
    Log_Job_TracingDoc,
    Log_Job_TracingOpr,
    Log_MakeSetup,
    Log_VehicleSetup,
    Manifest_Jobs,
    Manifests,
    Non_Gl_Parties,
    Notifications,
    Office_Vouchers,
    Parent_Accounts,
    PaymentMode,
    Ports,
    ReportSetting,
    ReportTemplate,
    ReportTemplate_Detail,
    SE_Equipments,
    SE_Jobs,
    SExp_BL,
    SExp_BL_Charges,
    SExp_BL_Detail,
    SExp_BL_Detail_History,
    SExp_BL_Equipment,
    SExp_BL_Equipment_History,
    SExp_BL_PrintingLog,
    SExp_BL_ProductInfo,
    SExp_BL_Stamp,
    SExp_BookingConfirmFromCarrier,
    SExp_BookingRequest,
    SExp_BookingRequest_Detail,
    SExp_BookingRequest_Equipment,
    SExp_BookingToCarrier,
    SExp_CRO,
    SExp_CRO_Detail,
    SExp_DeliveryNote,
    SExp_DeliveryNote_Detail,
    SExp_LOGNETBookingRequest,
    SExp_LOGNETPODetails,
    SExp_LOGNETProductInfo,
    SExp_LoadingProgram,
    SExp_NOC,
    SExp_NOC_Detail,
    SExp_ReleaseInstructionStatus,
    SExp_ReleaseInstructionType,
    SExp_SeaExportJob,
    SExp_SeaExportJobHistory,
    SExp_SeaExportJob_BLReleaseLog,
    SExp_SeaExportJob_CarDetail,
    SExp_SeaExportJob_ChargesPayb,
    SExp_SeaExportJob_ChargesPayb_History,
    SExp_SeaExportJob_ChargesPayb_TaxExpShare,
    SExp_SeaExportJob_ChargesRecv,
    SExp_SeaExportJob_ChargesRecv_History,
    SExp_SeaExportJob_ChargesRecv_TaxRevShare,
    SExp_SeaExportJob_Equipment,
    SExp_SeaExportJob_ExtMilestone,
    SExp_SeaExportJob_LastMilestone,
    SExp_SeaExportJob_Principle,
    SExp_SeaExportJob_Principle_History,
    SExp_SeaExportJob_ReleaseRequest,
    SExp_SeaExportJob_TracingDoc,
    SExp_SeaExportJob_TracingOpr,
    SExp_SeaExportJob_TracingOpr_Cont,
    SExp_ShippingInstruction,
    SExp_ShippingInstruction_Equipment,
    SExp_StuffingPlan,
    SExp_StuffingPlan_Detail,
    SExp_SurrenderType,
    SExp_SwitchBL,
    SExp_SwitchBL_Detail,
    SExp_SwitchBL_Equipment,
    SExp_SwitchBL_Equipment_History,
    SExp_SwitchBL_Stamp,
    SImp_BL,
    SImp_BLAmendment,
    SImp_BLAmendmentQueries,
    SImp_BL_Detail,
    SImp_BL_Equipment,
    SImp_BL_Equipment_History,
    SImp_BL_ProductInfo,
    SImp_BL_ProductInfo_Cont,
    SImp_BL_Stamp,
    SImp_DeliveryOrder,
    SImp_PreAlert,
    SImp_PreAlert_Container,
    SImp_SeaImportJob,
    SImp_SeaImportJob_CarDetail,
    SImp_SeaImportJob_ChargesPayb,
    SImp_SeaImportJob_ChargesPayb_History,
    SImp_SeaImportJob_ChargesPayb_TaxExpShare,
    SImp_SeaImportJob_ChargesRecv,
    SImp_SeaImportJob_ChargesRecv_History,
    SImp_SeaImportJob_ChargesRecv_TaxRevShare,
    SImp_SeaImportJob_Equipment,
    SImp_SeaImportJob_ExtMilestone,
    SImp_SeaImportJob_LastMilestone,
    SImp_SeaImportJob_Principle,
    SImp_SeaImportJob_Principle_History,
    SImp_SeaImportJob_TracingDoc,
    SImp_SeaImportJob_TracingOpr,
    SeaMilestonePTL,
    Simp_EqpInvOtherChgs,
    Stamps,
    Sub_Tasks,
    SysInfo,
    TAP_Allowance,
    TAP_Allowance_Detail,
    TAP_Deduction,
    TAP_Deduction_Detail,
    TAP_Employee,
    TAP_EmployeeAttendance,
    TAP_EmployeeDesignation,
    TAP_EmployeeStatus,
    TAP_Gender,
    TAP_Loan,
    TAP_LoanRecovery,
    TAP_Loan_Schedule,
    TAP_MaritalStatus,
    TAP_Nationality,
    TAP_RecoveryType,
    TAP_Religion,
    TAP_Salaries,
    TAP_Salaries_Detail,
    TAP_Salaries_Detail_GL,
    TAP_SalaryAdvance,
    TAP_SalaryStructure,
    TAP_SalaryStructure_Allowance,
    TAP_SalaryStructure_Deduction,
    TAP_Title,
    TPGL_Account_List,
    TPGL_CurrencyCode,
    TPGL_Process_Log,
    TPGL_TaxRateCode,
    TPGL_Terms,
    Task_Logs,
    Tasks,
    Transactions,
    UNPacking,
    UNPacking_EDI,
    UNPacking_Map,
    UserRegistration,
    Vendor_Associations,
    Vendors,
    Version,
    Version_History,
    Vessels,
    Vouchers,
    Voyages,
    WMS_Activity,
    WMS_ActivityType,
    WMS_BalanceDeliveryOrder,
    WMS_BalanceGRNDetail,
    WMS_BalanceReceivingOrder,
    WMS_CargoDEStuffing,
    WMS_CargoDEStuffing_Detail,
    WMS_CargoDEStuffing_DetailPD,
    WMS_CargoStuffing,
    WMS_CargoStuffing_Detail,
    WMS_Delivery,
    WMS_DeliveryOrder,
    WMS_DeliveryOrder_Detail,
    WMS_Delivery_Charges,
    WMS_Delivery_Detail,
    WMS_GRN,
    WMS_GRNMode,
    WMS_GRN_Charges,
    WMS_GRN_Detail,
    WMS_GRN_Detail_ProductInfo,
    WMS_InvDeliveryOrderDetailProductInfoBalance,
    WMS_InvOrderStatus,
    WMS_Locations,
    WMS_RateApply,
    WMS_ReceivedCondition,
    WMS_ReceivingOrder,
    WMS_ReceivingOrder_Detail,
    WMS_StockTranType,
    WMS_StorageMode,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
