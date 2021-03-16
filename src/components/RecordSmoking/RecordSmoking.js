import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Button from '../Button';

function RecordSmoking({ loading, record, className }) {
  return (
    loading
      ? <Skeleton height="2.5rem" className={className} />
      : <Button text="Записать курение" onClick={record} className={className} />
  );
}

export default RecordSmoking;
