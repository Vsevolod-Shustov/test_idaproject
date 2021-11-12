import React from 'react';

import styles from './Side.scss';

function Side(){
  return (
    <aside id={styles.aside}>
      <form action="#" method="post">
        <h2 className={styles.heading2}>Добавление товара</h2>
        <label>
          Наименование товара <span className={styles.required_star}>*</span>
          <input type="text" name="product_name" placeholder="Введите наименование товара" required></input>
        </label>
        <label>
          Описание товара
          <textarea name="product_desc" placeholder="Введите описание товара"></textarea>
        </label>
        <label>
          Ссылка на изображение товара <span className={styles.required_star}>*</span>
          <input type="text" name="product_name" placeholder="Введите ссылку" required></input>
        </label>
        <label>
          Цена товара <span className={styles.required_star}>*</span>
          <input type="text" name="product_name" placeholder="Введите цену" required></input>
        </label>
        <input type="submit" className={styles.submit} value="Добавить товар" />
      </form>
    </aside>
  )
}

export default Side;
