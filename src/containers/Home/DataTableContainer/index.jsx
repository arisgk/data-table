import { gql, graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import { showCreateDialog, showDeleteDialog, cancelUserDialog, select, clearSelection } from '../../../actions/home';
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

const listOptions = {
  props: ({ ownProps, ...dataProps }) => ({
    ...ownProps,
    ...dataProps,
  }),
};

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

const createOptions = {
  props: ({ mutate, ...otherProps }) => ({
    add: variables => mutate({
      variables,
      refetchQueries: [{ query: listQuery }],
    }),
    ...otherProps,
  }),
};

const deleteMutation = gql`
  mutation deleteUsers($ids: [ID]!) {
    deleteUsers(ids: $ids)
  }
`;

const deleteOptions = {
  props: ({ mutate, ...otherProps }) => ({
    remove: variables => mutate({
      variables,
      refetchQueries: [{ query: listQuery }],
    }),
    ...otherProps,
  }),
};

const mapStateToProps = state => ({
  adding: state.home.ui.progress.adding,
  deleting: state.home.ui.progress.deleting,
  listQuery,
  selection: state.home.ui.selection,
});

const mapDispatchToProps = dispatch => ({
  onShowCreateDialog: () => dispatch(showCreateDialog()),
  onShowDeleteDialog: () => dispatch(showDeleteDialog()),
  onCancel: () => dispatch(cancelUserDialog()),
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
  graphql(listQuery, listOptions),
  graphql(createMutation, createOptions),
  graphql(deleteMutation, deleteOptions),
  connect(mapStateToProps, mapDispatchToProps),
)(DataTableWithLoader);

export default DataTableWithDataAndState;
