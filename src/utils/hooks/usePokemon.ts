import { useEffect, useState } from 'react';
import { apiPok } from '@services/api';

const useList = ({ entity = '', offset = 0, limit = 20 }) => {
  const [response, setResponse] = useState<List>();
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await apiPok.get<List>(`/${entity}?offset=${offset}&limit=${limit}`);
      setResponse(data);
    } catch (err: any) {
      setError(err.response);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error, loading };
};

const usePokemon = id => {
  const [response, setResponse] = useState<Pokemon>();
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await apiPok.get<Pokemon>(`/pokemon/${id}`);
      setResponse(data);
    } catch (err: any) {
      setError(err.response);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error, loading };
};

export { useList, usePokemon };
