import {useDispatch, useSelector} from  'react-redux';
import  { TypedUseSelectorHook } from 'react-redux';
import  { RootState } from '../Store.js';

// export  const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector : TypedUseSelectorHook<RootState > = useSelector;
export const useDispatch = useDispatch;
export const useSelector = useSelector;

