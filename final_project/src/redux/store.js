import {configureStore} from '@reduxjs/toolkit'
import { categoriesReducer } from './slices/categories';
import { resReducer } from './slices/results';
import { authReducer } from './slices/auth';
import {reducer} from '../components/Task3/redux/reducer'


const store = configureStore(
  {
    reducer: {
      categories: categoriesReducer,
      results: resReducer,
      auth: authReducer,
      cards: reducer
    }
  }
);

export default store;