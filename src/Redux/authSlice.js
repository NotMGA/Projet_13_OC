// Use to store all the data send from the authservice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authservice'
import PostUser from './Edituser.js'
import Get_info_user from './Userinfo.js'

const user = JSON.parse(localStorage.getItem('user'))
// state initiale
const initialState = {
  user: user ? user : null,
  info: null,
  userdata: null,
  // userdata: '',
  isError: false,
  isSucces: false,
  message: ''
}

// Login user
//get Login data
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
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
    } catch (error) {
      console.log('erreur', error)
      return thunkAPI.rejectWithValue()
    }
  }
)

export const Postdatauser = createAsyncThunk(
  'auth/newdata',
  async (userdata, thunkAPI) => {
    try {
      return await PostUser(userdata)
    } catch (error) {
      console.log('erreur', error)
      return thunkAPI.rejectWithValue()
    }
  }
)

//logout user
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})
//store
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reste: state => {
      state.isLoading = false
      state.isSucces = false
      state.isError = false
      state.message = ''
      state.postisLoading = false
    }
  },
  extraReducers: builder => {
    builder
      //if login is pending udate state
      .addCase(login.pending, state => {
        state.isLoading = true
      })
      //if login is fulfilled udate state
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      //if login is rejected udate state
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      //clear the state
      .addCase(logout.fulfilled, state => {
        state.user = null
      })
      //store getdatauser in state info
      .addCase(getDataUser.fulfilled, (state, action) => {
        state.info = action.payload
      })
      .addCase(getDataUser.pending, state => {
        state.postisLoading = true
      })
      .addCase(Postdatauser.pending, state => {
        state.postisLoading = true
      })

      .addCase(Postdatauser.fulfilled, (state, action) => {
        state.userdata = action.payload
      })
  }
})

export const { reste } = authSlice.actions
export default authSlice.reducer
