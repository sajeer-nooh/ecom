import { configureStore } from "@reduxjs/toolkit";
import { Store } from 'redux';
import reducers from './reducers';
import { combineReducers } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store: Store = configureStore({
  reducer: combineReducers(reducers),
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
    // serializableCheck: {
    //   // Ignore these action types
    //   ignoredActions: ['your/action/type'],
    //   // Ignore these field paths in all actions
    //   ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
    //   // Ignore these paths in the state
    //   ignoredPaths: ['items.dates'],
    // },
  }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector