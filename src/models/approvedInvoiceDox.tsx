export interface IApprovedInvoiceDoc {
    approvedinvoicedoxid: number,
    contractid: number,
    dateid: number,
    invoicekind: number,
    invoiceno: number,
    invoicedate: Date,
    senddate: Date,
    confirmdate: Date,
    sgp_r: number,
    sgp_fc: number,
    cgp_r: number,
    cgp_fc: number,
    description: string,
    file: File | null,
    filename: string,
    active: boolean,
}

export interface IRequestApprovedInvoiceDoc {
    contractid: number,
    dateid: number,
    invoicekind: number,
    invoiceno: number,
    invoicedate: Date,
    senddate: Date,
    confirmdate: Date,
    sgp_r: number,
    sgp_fc: number,
    cgp_r: number,
    cgp_fc: number,
    description: string,
    file: File | null,
    active: boolean,
}

export interface IRequestPartialApprovedInvoiceDoc{
    contractid: number,
    dateid: number,
    invoicekind: number,
    invoiceno: number,
    invoicedate: Date,
    senddate: Date,
    confirmdate: Date,
    sgp_r: number,
    sgp_fc: number,
    cgp_r: number,
    cgp_fc: number,
    description: string,
}