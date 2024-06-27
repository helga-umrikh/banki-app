import { configureStore } from '@reduxjs/toolkit'
import creditReducer from './slices/CreditSlice'

export const store = configureStore({
    reducer: {
        creditList: creditReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
