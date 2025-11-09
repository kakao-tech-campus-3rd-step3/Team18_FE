import { Fragment } from 'react';

export const formatTextWithNewlines = (text: string) => {
  return (text || '')
    .split('\n')
    .map((line, index, arr) => (
      <Fragment key={index}>
        {line}
        {index < arr.length - 1 && <br />}
      </Fragment>
    ));
};
