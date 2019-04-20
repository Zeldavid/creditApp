export interface User {
    name: string;
    email: string;
    id: number;
    loan: number;
    date?: Date;
    loanState: string;
    paidState: boolean;
}