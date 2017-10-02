import { gql, graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import { startAdding, cancelUserDialog, select, clearSelection } from '../../../actions/home';
import DataTableWithLoader from '../../../components/Home/DataTableWithLoader';

const listQuery = gql`
  query UserListQuery {
    users {
      id
      firstName
      lastName
      age
    }
  }
`;

const createMutation = gql`
  mutation addUser($firstName: String!, $lastName: String!, $age: Int) {
    addUser(firstName: $firstName, lastName: $lastName, age: $age) {
      id
      firstName
      lastName
      age
    }
  }
`;

const options = {
  props: ({ ownProps, ...dataProps }) => ({
    ...ownProps,
    ...dataProps,
  }),
};

const mapStateToProps = state => ({
  adding: state.home.ui.adding,
  listQuery,
});

const mapDispatchToProps = dispatch => ({
  onStartAdding: () => dispatch(startAdding()),
  onCancelUserDialog: () => dispatch(cancelUserDialog()),
  onTableRowSelection: (rows, entities) => {
    if (rows && rows.length > 0 && entities) {
      if (rows === 'all') {
        dispatch(select(entities.map(entity => entity.id)));
      } else if (rows === 'none') {
        dispatch(clearSelection());
      } else {
        dispatch(select(rows.map(row => entities[row].id)));
      }
    } else {
      dispatch(clearSelection());
    }
  },
});

const DataTableWithDataAndState = compose(
  graphql(listQuery, options),
  graphql(createMutation, options),
  connect(mapStateToProps, mapDispatchToProps),
)(DataTableWithLoader);

export default DataTableWithDataAndState;
