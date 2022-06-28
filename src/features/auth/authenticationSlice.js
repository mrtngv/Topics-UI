import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: '',
}

export const keySlice = createSlice({
    name: 'key',
    initialState,
    reducers: {
        changeKey: (state, key) => {
            state.value = key;
        },
    },
})

export const { changeKey } = keySlice.actions

export default keySlice.reducer