import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { cn } from '../../utils/bem';
import useLastSmoking from '../../hooks/useLastSmoking';
import './LastSmoking.css';

function LastSmoking() {
  const [lastSmoking, loading] = useLastSmoking();

  const b = cn('last-smoking');

  return loading
    ? (
      <Skeleton width="100%" height="3.5rem" />
    )
    : lastSmoking
      ? (
        <div className={b()}>
          <h2 className={b('title')}>
            Последнее
          </h2>
          <div className={b('date-time')}>
            <p className={b('time')}>
              {lastSmoking.format('HH:mm')}
            </p>
            <p className={b('date')}>
              {lastSmoking.format('DD.MM.YYYY')}
            </p>
          </div>
        </div>
      )
      : (
        <div className={b()}>
          <h2 className={b('title')}>
            Вы ещё не записывали курения
          </h2>
        </div>
      );
}

export default LastSmoking;
