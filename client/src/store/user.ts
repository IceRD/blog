import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    token: string | null
    login: string | null
    role_id: number | null
}

const initialState: UserState = {
    token: null,
    login: null,
    role_id: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state = action.payload
        },
    },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
