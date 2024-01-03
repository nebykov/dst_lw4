import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { IUser } from '../../types/userTypes'

// Define a type for the slice state
interface CounterState {
  value: number,
  isAuth: boolean,
  currentUser: IUser | null
}

const initialState: CounterState = {
  value: 0,
  isAuth: false,
  currentUser: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
       setUser: (state, action: PayloadAction<IUser>) => {
          state.currentUser = action.payload
          state.isAuth = true
       }
  },
})

export const { setUser } = userSlice.actions
export const selectUser = (state: RootState) => state.user.value

export default userSlice.reducer