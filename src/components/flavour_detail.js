import React from 'react';
import Link from 'gatsby-link';
import styles from './flavour.module.css';

export default (props) =>
  <div style={{margin: '0 auto', minWidth: '200px', maxWidth: '1000px'}}>
    <div className={styles.left}>
      <img src={props.url} alt={props.name} className={styles.flavourImg}/>
      <h2 className={styles.headline}>{props.headline}</h2>
    </div>
    <div className={styles.right}>
      <h1 className={styles.name}>{props.name}</h1>
      <p className={styles.detailItem}>FLAVOUR DESCRIPTION</p>
      <p className={styles.details}>{props.description}</p>
      <p className={styles.detailItem}>NUTRITION</p>
      <p className={styles.details}>{props.nutrition}</p>
      <Link to='/' className={styles.primaryBtn}><span>Back to menu</span></Link>
    </div>
    <div style={{clear: 'both'}}></div>
  </div>
