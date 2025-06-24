import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ title, image, price, category, rating }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.category}>Categoria: {category}</p>
      <p className={styles.price}>Preço: R$ {price.toFixed(2)}</p>
      <p className={styles.rate}>Avaliação: {rating.rate} ⭐</p>
    </div>
  );
};

export default ProductCard;
