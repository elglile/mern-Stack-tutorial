// hna kanimportiw configureStore mn redux toolkit
// hadi hia l fct li katcrei l store principal ta3 redux
import { configureStore } from '@reduxjs/toolkit'

// hna kanimportiw l reducer li drna f authSlice.js
// bach ndkhlouh f store w n9dro nsta3mlou state ta3 user mn ay component
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'

// hadi l part dyal create store
// configureStore katkhllina ndirou store dyalna b wahd tari9a sahl mn redux l9dima
export const store = configureStore({
  // reducer: hna kandiro kol les slices li 3ndna f lproject
  reducer: {
    // smiya "auth" hna hia li ghadi n3aytou biha mn useSelector
    // o l value hia reducer li ja mn authSlice.js
    auth: authReducer,
    goals: goalReducer,

    // ila bghiti tziid slice okhra b7al products, goals, posts...
    // katziidha hna b nafs tari9a
    // example: products: productReducer
  },
})
