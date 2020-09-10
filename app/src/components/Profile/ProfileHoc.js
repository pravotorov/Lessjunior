import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { usersQueryId } from '../../apollo/queries';

const withGraphQL = graphql(usersQueryId, {
    options: ({ id = ' ' }) => ({
        variables: { id },
    }),
});

export default compose( withGraphQL);
