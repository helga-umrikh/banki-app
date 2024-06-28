export interface IFilter {
    amount: number | null
    sorting?: 'min' | 'max' | null
}

export interface IProduct {
    amount: number
    name: string | null
    logo: string | null
}
export interface IBankData {
    filter: IFilter
    products: IProduct[] | null
}

export type Sorting = 'min' | 'max' | null