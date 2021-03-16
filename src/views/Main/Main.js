import React from 'react';
import { cn } from '../../utils/bem';
import LastSmoking from '../../components/LastSmoking';
import RecordSmoking from '../../components/RecordSmoking';
import useLastSmoking from '../../hooks/useLastSmoking';
import './Main.css';

function Main() {
  const [lastSmoking, loading, recordSmoking] = useLastSmoking();
  const b = cn('main');

  return (
    <React.Fragment>
      <LastSmoking lastSmoking={lastSmoking} loading={loading} />
      <RecordSmoking record={recordSmoking} loading={loading} className={b('record-button')} />
    </React.Fragment>
  );
}

export default Main;
