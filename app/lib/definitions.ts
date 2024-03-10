export type Bill = {
    id: number,
    date: Date,
    server_id: number,
    server: string,
    amount: number,
    tip: number,
    tax: number,
    total: number
}