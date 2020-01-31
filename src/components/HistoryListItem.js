import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryListItem.css';

const HistoryListItem = ({ method, url, textInput, onClick }) => {
  return (
    <div onClick={() => onClick(method, url, textInput)}>
      <h2 className={styles.listItemLabel}>{method}</h2>
      <p className={styles.listItemP}>{url}</p>
    </div>
  );
};

HistoryListItem.propTypes = {
  textInput: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default HistoryListItem;
