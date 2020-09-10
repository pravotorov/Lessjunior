import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { taskQuery } from '../../apollo/queries';

const withGraphQL = graphql(taskQuery);

export default compose( withGraphQL );
