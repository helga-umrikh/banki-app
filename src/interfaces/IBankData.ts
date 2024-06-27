export interface Filter {
    amount: number | null
}

export interface Product {
    amount: number | null
    name: string | null
    logo: string | null
}
export interface IBankData {
    filter: Filter | null
    products: Product[] | null
}
