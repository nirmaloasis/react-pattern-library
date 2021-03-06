import React, { PropTypes, Children } from 'react';

import styles from './grid.css';

const Grid = ({ children }) => {
  const items = Children.map(children, (child, index) => (
    <div key={index} className={styles.item}>{child}</div>
  ));

  return (
    <div className={styles.main}>{items}</div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
