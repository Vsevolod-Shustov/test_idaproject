import React from 'react';

import styles from './Side.scss';

function Side(){
  return (
    <aside id={styles.aside}>
      <h2 className={styles.heading2}>Добавление товара</h2>
    </aside>
  )
}

export default Side;
