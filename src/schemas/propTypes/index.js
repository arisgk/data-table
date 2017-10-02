import PropTypes from 'prop-types';

export const user = PropTypes.shape({
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
});

export const selection = PropTypes.shape({
  selected: PropTypes.arrayOf(PropTypes.string),
});
