import { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { getLastSmoking } from '../api/smokr';

function useLastSmoking() {
  const [smoking, setSmoking] = useState(null);
  const [loading, setLoading] = useState(true);
  const componentIsMounted = useRef(true);

  useEffect(() => {
    return () => {
      componentIsMounted.current = false;
    }
  }, []);

  useEffect(() => {
    async function getSmoking() {
      try {
        setLoading(true);
        const timestamp = await getLastSmoking();
        const date = moment.unix(timestamp);
        if (componentIsMounted.current) {
          setSmoking(date);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (componentIsMounted.current) {
          setLoading(false);
        }
      }
    }

    getSmoking();
  }, []);

  return [smoking, loading];
}

export default useLastSmoking;
