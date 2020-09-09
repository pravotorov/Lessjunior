import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { usersQuery } from '../../apollo/queries';

const withGraphQL = graphql(usersQuery);

export default compose( withGraphQL );
