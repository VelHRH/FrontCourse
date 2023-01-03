import {configureStore} from '@reduxjs/toolkit'
import { categoriesReducer } from './slices/categories';
import { resReducer } from './slices/results';
import {reducer} from '../components/Task3/redux/reducer'


const store = configureStore(
  {
    reducer: {
      categories: categoriesReducer,
      results: resReducer,
      cards: reducer
    }
  }
);

export default store;