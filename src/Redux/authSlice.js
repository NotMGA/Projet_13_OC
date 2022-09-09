import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authservice'
import PostUser from './Edituser'
import Get_info_user from './Userinfo'

const user = JSON.parse(localStorage.getItem('user'))
const info = JSON.parse(localStorage.getItem('info'))
const initialState = {
  user: user ? user : null,
  info: info ? info : null,
  isError: false,
  isSucces: false,
  message: ''
}

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    console.log(user)
    return await authService.login(user)
  } catch (error) {
    //add iserror true
    console.log('erreur', error)
    return thunkAPI.rejectWithValue()
  }
})

//get data user

export const getDataUser = createAsyncThunk(
  'auth/getDataUser',
  async (info, thunkAPI) => {
    try {
      return await Get_info_user(info)
    } catch {}
  }
)

// post data

export const Postdatauser = createAsyncThunk(
  'auth/login',
  async (postuser, thunkAPI) => {
    try {
      return await PostUser(postuser)
    } catch (error) {
      return thunkAPI.rejectWithValue()
    }
  }
)

//logout user
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reste: state => {
      state.isLoading = false
      state.isSucces = false
      state.isError = false
      state.message = ''
    }
  },
  extraReducers: builder => {
    builder

      .addCase(login.pending, state => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.fulfilled, state => {
        state.user = null
      })
      .addCase(getDataUser.fulfilled, (state, action) => {
        state.info = action.payload
      })
  }
})

export const { reste } = authSlice.actions
export default authSlice.reducer
