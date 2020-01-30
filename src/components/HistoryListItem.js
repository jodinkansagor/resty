import React from 'react';
import PropTypes from 'prop-types';

const HistoryListItem = ({ method, historyUrl }) => {
  return (
    <>
      <h2>{method}</h2>
      <p>{historyUrl}</p>
    </>
  )
};

HistoryListItem.propTypes = {
  method: PropTypes.string.isRequired,
  historyUrl: PropTypes.string.isRequired
};

export default HistoryListItem;
