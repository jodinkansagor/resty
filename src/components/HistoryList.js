import React from 'react';
import PropTypes from 'prop-types';
import HistoryListItem from './HistoryListItem';

const HistoryList = ({ historyList, updateStateFromHistory }) => {
  const historyListItemElements = historyList.map((historyListItem, i) => (
    <li key={i} onClick={updateStateFromHistory}>
      <HistoryListItem method={historyListItem.method} url={historyListItem.url} />
    </li>
  ));

  return (
    <ul>
      {historyListItemElements}
    </ul>
  );
};

HistoryList.propTypes = {
  updateStateFromHistory: PropTypes.func.isRequired,
  historyList: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }))
};

export default HistoryList;
