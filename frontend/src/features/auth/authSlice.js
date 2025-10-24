// hna kanimportiw 2 fct mn redux toolkit
// createSlice: kat3awnna ncreiwi slice (state + actions + reducers)
// createAsyncThunk: kat3awnna ndirou fct li async (b7al login, register)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// hna kanimportiw authService li fih les fct li kay3amlo call l API (register, login, logout)
import authService from './authService'

// hna kanjibou l user mn localStorage ila kan da5al 9bl had lmarra
// bach ila rja3 l site yb9a connecte
const user = JSON.parse(localStorage.getItem('user'))

// hadi hia lstate l asasiya ta3 l auth (9bal manbda)
const initialState = {
  user: user ? user : null, // ila kan user f localStorage ihatho hna sinon ib9a null
  isError: false, // had prop kat3ni wach 9a3 error
  isSuccess: false, // hadi kat3ni wach loperation njhat
  isLoading: false, // hadi kat3ni wach ldata ba9i katloada
  message: '', // hadi kat7t message d lerror ola success
}

// =====================================================
// hna kancreiwi fct register (async) li katdir call l API bach tsajel user
export const register = createAsyncThunk(
  'auth/register', // smiya ta3 l action
  async (user, thunkAPI) => { // user: data li dayzin f form, thunkAPI bach n3amlo rejectWithValue ila 9a3 error
    try {
      // hna kanmchiw l authService.register li katdir request l backend
      return await authService.register(user)
    } catch (error) {
      // ila 9a3 chi error, had l code kayjib message dyal l error men response
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      // hna kanrj3o error l redux bach yb9a f state.message
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// =====================================================
// hna b7al register, ghir had fct katdir login
export const login = createAsyncThunk(
  'auth/login',
   async (user, thunkAPI) => {
  try {
    // kan3ayto l authService.login bach ndirou request l backend
    return await authService.login(user)
  } catch (error) {
    // ila 9a3 error kanjib message b7al f register
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    // kanrj3o message bach n3rfou l error f state
    return thunkAPI.rejectWithValue(message)
  }
})

// =====================================================
// hadi fct logout katdir remove l user mn localStorage
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

// =====================================================
// daba hna kancreiwi slice dyal auth
export const authSlice = createSlice({
  name: 'auth', // smiya dyal slice
  initialState, // lstate l asasiya
  reducers: {
    // hadi reducer smitha reset, katfaragh l state mn les erreurs w success
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },

  // =====================================================
  // extraReducers: hna kandiro traitement dyal createAsyncThunk
  // bach n3arfo wach loperation pending, fulfilled, ola rejected
  extraReducers: (builder) => {
    builder
      // -------------------------------------------------
      // register.pending => mlli loperation ba9i katloada
      .addCase(register.pending, (state) => {
        state.isLoading = true // hna katbda l loading
      })

      // register.fulfilled => mlli loperation tsalat b success
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false // t9ta3 l loading
        state.isSuccess = true // t9dr tdir redirect ola message success
        state.user = action.payload // t7t l user li rj3 mn backend f state
      })

      // register.rejected => mlli loperation tfshlat
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload // t7t l message d lerror
        state.user = null // tfaragh l user
      })

      // -------------------------------------------------
      // nafs lmanth9a lfo9 ghadi t3awd ttb9a 3la login
      .addCase(login.pending, (state) => {
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

      // -------------------------------------------------
      // logout.fulfilled => mlli user ydir logout tfaragh l state.user
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
  },
})

// =====================================================
// export bach n9dro nsta3mlo reset f l components
export const { reset } = authSlice.actions

// export reducer bach n7otoh f store.js
export default authSlice.reducer