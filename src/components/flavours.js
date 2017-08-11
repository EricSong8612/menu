import React from 'react';
import Link from 'gatsby-link';
import styles from './detail.module.css';

export default (props) =>
  <Link to={props.to} className={styles.imgContainer} >
    <div>
      <img src={props.url} className={styles.flavour} alt={props.name}/>
      <div className={styles.flavourName}>{props.name}</div>
    </div>
  </Link>
