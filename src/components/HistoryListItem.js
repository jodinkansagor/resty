import React from 'react';
import PropTypes from 'prop-types';

const HistoryListItem = ({ method, url }) => {
  return (
    <>
      <h2>{method}</h2>
      <p>{url}</p>
    </>
  )
};

HistoryListItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default HistoryListItem;
