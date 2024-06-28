export interface Filter {
    amount: number | null
    sorting?: 'min' | 'max' | null
}

export interface Product {
    amount: number
    name: string | null
    logo: string | null
}
export interface IBankData {
    filter: Filter
    products: Product[] | null
}
