import { configureStore} from '@reduxjs/toolkit';
import  counterSliceReducer  from './Slices/Counter/Counter';
export const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  })
  