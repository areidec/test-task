import React,{useEffect} from 'react';
import {getApartaments} from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(({apartamentReducer}) => apartamentReducer.isLoading);

  useEffect(() => {
    dispatch(getApartaments())
  }, [dispatch]);

  return (
    <>
      <h1>App</h1>
      <span>{isLoading ? 'loading...' : 'data is loaded'}</span>
    </>
  )
}

export default App;