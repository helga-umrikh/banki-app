import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IBankData, IProduct, Sorting } from '../../interfaces/IBankData'

const initialState: IBankData = {
    filter: { amount: null, sorting: null },
    products: null,
}

export const creditSlice = createSlice({
    name: 'creditList',
    initialState,
    reducers: {
        addCreditItems: (state, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload
        },

        setFilter: (state, action: PayloadAction<number | null>) => {
            state.filter.amount = action.payload
        },

        setSorting: (state, action: PayloadAction<Sorting>) => {
            state.filter.sorting = action.payload
        },
    },
})

export const { addCreditItems, setFilter, setSorting } = creditSlice.actions

export default creditSlice.reducer
