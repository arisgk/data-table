import { gql, graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import { startAdding, cancelUserDialog } from '../../../actions/home';
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
});

const DataTableWithDataAndState = compose(
  graphql(listQuery, options),
  graphql(createMutation, options),
  connect(mapStateToProps, mapDispatchToProps),
)(DataTableWithLoader);

export default DataTableWithDataAndState;
