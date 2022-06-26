import {configureStore} from '@reduxjs/toolkit';

import tests from '../slices/testsSlice';


const store = configureStore({
  reducer: {tests},
  middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch