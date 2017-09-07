import { gql, graphql } from 'react-apollo';
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

const DataTableWithData = graphql(query)(DataTableWithLoader);

export default DataTableWithData;
