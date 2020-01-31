import React from 'react';
import PropTypes from 'prop-types';
import HistoryListItem from './HistoryListItem';
import styles from './HistoryList.css';

const HistoryList = ({ historyList, onClick }) => {
  const historyListItemElements = historyList.map((historyListItem, i) => (

    <li key={i}>
      <HistoryListItem method={historyListItem.method} url={historyListItem.url} onClick={onClick} />
    </li>
  ));

  return (
    <ul>
      {historyListItemElements}
    </ul>
  );
};

HistoryList.propTypes = {
  onClick: PropTypes.func.isRequired,
  historyList: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }))
};

export default HistoryList;
