import { useEffect, useState } from 'react';
import { apiPok } from '@services/api';

const usePokemon = ({ id = null, offset = 20, limit = 20 }) => {
  const [response, setResponse] = useState<ListPokemons>();
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    const idPokemon = id ? `/${id}` : '';

    try {
      const { data } = await apiPok.get<ListPokemons>(
        `/pokemon${idPokemon}?offset=${offset}&limit=${limit}`,
      );

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

export default usePokemon;
