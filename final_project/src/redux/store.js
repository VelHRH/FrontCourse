import {configureStore} from '@reduxjs/toolkit'
import { categoriesReducer } from './slices/categories';
import { resReducer } from './slices/results';


const store = configureStore(
  {
    reducer: {
      categories: categoriesReducer,
      results: resReducer
    }
  }
);

export default store;