import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import moment from 'moment';
import { getLastSmoking } from '../../api/smokr';
import { cn } from '../../utils/bem';
import './LastSmoking.css';

function LastSmoking() {
  const [smoking, setSmoking] = useState(null);

  useEffect(() => {
    async function getSmoking() {
      try {
        const timestamp = await getLastSmoking();
        const date = moment.unix(timestamp);
        setSmoking(date);
        console.log(date);
      } catch (error) {
        console.log(error);
      }
    }

    getSmoking();
  }, []);

  const b = cn('last-smoking');

  return (
    <div className={b()}>
      <h2 className={b('title')}>
        {smoking
          ? 'Последнее'
          : <Skeleton />
        }
      </h2>
      <div className={b('date-time')}>
        <p className={b('time')}>
          {smoking
            ? smoking.format('HH:mm')
            : <Skeleton />
          }
        </p>
        <p className={b('date')}>
          {smoking
            ? smoking.format('DD.MM.YYYY')
            : <Skeleton />
          }
        </p>
      </div>
    </div>
  );
}

export default LastSmoking;
