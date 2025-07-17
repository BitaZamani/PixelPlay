import { configureStore } from '@reduxjs/toolkit'
import gameReducer from "./features/games/gamesSlice"
import authReducer from "./features/auth/authSlice"
export const makeStore = () => {
  return configureStore({
    reducer: {
        games: gameReducer,
        auth: authReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
