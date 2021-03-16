import { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { getLastSmoking, postSmoking } from '../api/smokr';

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
    getSmoking();
  }, []);

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

  async function recordSmoking() {
    try {
      setLoading(true);
      const timestamp = moment().unix();
      const status = postSmoking(timestamp);
      if (status === 'Fail') {
        throw new Error(status);
      }
      await getSmoking();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return [smoking, loading, recordSmoking];
}

export default useLastSmoking;
