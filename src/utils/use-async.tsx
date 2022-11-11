import { useState } from 'react';

interface AsyncProps<T> {
  stats: 'idle' | 'loading' | 'error' | 'success';
  error: Error | null;
  data: T | null;
}

const defaultState = {
  stats: 'idle',
  error: null,
  data: null
};

function useAsync<T>(initState?: AsyncProps<T>) {
  const [state, setState] = useState({
    ...defaultState,
    ...initState
  });

  const setData = (data: T) => {
    setState({
      stats: 'success',
      error: null,
      data,
    });
  }

  const setError = (error: Error) => {
    setState({
      error,
      data: null,
      stats: 'error'
    });
  }

  const run  = (promise: Promise<T>) => {
    if (!promise || !promise.then) {
      throw new Error('请输入Promise');
    }

    setState({ ...state, stats: 'loading' });

    return promise.then(data => {
      setData(data);

      return data;
    }).catch(error => {
      setError(error);

      return error;
    });
  }

  return {
    ...state,
    run,
    isLoading: state.stats === 'loading',
    isError: state.stats === 'error'
  }
}

export default useAsync;