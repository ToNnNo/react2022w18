import React, { Fragment } from 'react';
import style from './DataList.module.css';

export default function DataList({ items }) {
  return (
    <dl className={'dl ' + style.dl}>
      {items.map( item => (
        <Fragment key={item.id}>
            <dt>{ item.title }</dt>
            <dd>{ item.description }</dd>
        </Fragment>
      ))}
    </dl>
  );
}