import { gql, graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { startAdding, cancelUserDialog } from '../../../actions/home';
import DataTableWithLoader from '../../../components/Home/DataTableWithLoader';

const query = gql`
  query UserListQuery {
    users {
      id
      firstName
      lastName
      age
    }
  }
`;

const DataTableWithData = graphql(query, {
  props: ({ ownProps, ...dataProps }) => ({
    ...ownProps,
    ...dataProps,
  }),
})(DataTableWithLoader);

const mapStateToProps = state => ({
  adding: state.home.ui.adding,
});

const mapDispatchToProps = dispatch => ({
  onStartAdding: () => dispatch(startAdding()),
  onCancelUserDialog: () => dispatch(cancelUserDialog()),
});

const DataTableWithDataAndState = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataTableWithData);

export default DataTableWithDataAndState;
