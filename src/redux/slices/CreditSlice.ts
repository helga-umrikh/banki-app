import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IBankData } from '../../interfaces/IBankData'

const initialState: IBankData = {
    filter: null,
    products: null,
}

export const creditSlice = createSlice({
    name: 'creditList',
    initialState,
    reducers: {
        addCreditItems: (state, action: PayloadAction<IBankData>) => {
            state.products = action.payload.products
        },
    },
})

export const { addCreditItems } = creditSlice.actions

export default creditSlice.reducer
