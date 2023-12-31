export interface IFinancialInfo {
    financialinfoid: number,
    contractid: number,
    dateid: number,
    lastclaimedinvoice_r: number | null,
    lastclaimedinvoice_fc: number | null,
    lci_no: number | null,
    lastverifiedinvoice_r: number | null,
    lastverifiedinvoice_fc: number | null,
    lvi_no: number | null,
    lastclaimedadjustmentinvoice_r: number | null,
    lastclaimedadjustmentinvoice_fc: number | null,
    lcai_no: number | null,
    lastverifiedadjustmentinvoice_r: number | null,
    lastverifiedadjustmentinvoice_fc: number | null,
    lvai_no: number | null,
    lastclaimedextraworkinvoice_r: number | null,
    lastclaimedextraworkinvoice_fc: number | null,
    lcewi_no: number | null,
    lastverifiedextraworkinvoice_r: number | null,
    lastverifiedextraworkinvoice_fc: number | null,
    lvewi_no: number | null,
    lastclaimbill_r: number | null,
    lastclaimbill_fc: number | null,
    lcb_no: number | null,
    lastclaimbillverified_r: number | null,
    lastclaimbillverified_fc: number | null,
    lcbv_no: number | null,
    lastclaimbillrecievedamount_r: number | null,
    lastclaimbillrecievedamount_fc: number | null,
    cumulativeclientpayment_r: number | null,
    cumulativeclientpayment_fc: number | null,
    clientprepaymentdeferment_r: number | null,
    clientprepaymentdeferment_fc: number | null,
    estcost_r: number | null,
    estcost_fc: number | null,
    estclientpayment_r: number | null,
    estclientpayment_fc: number | null,
    estdebitcredit_r: number | null,
    estdebitcredit_fc: number | null
}

export interface IAddFinancialInfo {
    contractid: number,
    dateid: number,
    lastclaimedinvoice_r: number | null,
    lastclaimedinvoice_fc: number | null,
    lci_no: number | null,
    lastverifiedinvoice_r: number | null,
    lastverifiedinvoice_fc: number | null,
    lvi_no: number | null,
    lastclaimedadjustmentinvoice_r: number | null,
    lastclaimedadjustmentinvoice_fc: number | null,
    lcai_no: number | null,
    lastverifiedadjustmentinvoice_r: number | null,
    lastverifiedadjustmentinvoice_fc: number | null,
    lvai_no: number | null,
    lastclaimedextraworkinvoice_r: number | null,
    lastclaimedextraworkinvoice_fc: number | null,
    lcewi_no: number | null,
    lastverifiedextraworkinvoice_r: number | null,
    lastverifiedextraworkinvoice_fc: number | null,
    lvewi_no: number | null,
    lastclaimbill_r: number | null,
    lastclaimbill_fc: number | null,
    lcb_no: number | null,
    lastclaimbillverified_r: number | null,
    lastclaimbillverified_fc: number | null,
    lcbv_no: number | null,
    lastclaimbillrecievedamount_r: number | null,
    lastclaimbillrecievedamount_fc: number | null,
    cumulativeclientpayment_r: number | null,
    cumulativeclientpayment_fc: number | null,
    clientprepaymentdeferment_r: number | null,
    clientprepaymentdeferment_fc: number | null,
    estcost_r: number | null,
    estcost_fc: number | null,
    estclientpayment_r: number | null,
    estclientpayment_fc: number | null,
    estdebitcredit_r: number | null,
    estdebitcredit_fc: number | null
}