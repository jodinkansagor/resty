import React from 'react';
import PropTypes from 'prop-types';
import HistoryListItem from './HistoryListItem';

const HistoryList = ({ historyList }) => {
  const historyListItemElements = historyList.map((historyListItem, i) => (
    <li key={i}>
      <HistoryListItem method={historyListItem.method} historyUrl={historyListItem.historyUrl} />
    </li>
  ));

  return (
    <ul>
      {historyListItemElements}
    </ul>
  );
};

HistoryList.propTypes = {
  historyList: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    historyUrl: PropTypes.string.isRequired
  }))
};

export default HistoryList;
