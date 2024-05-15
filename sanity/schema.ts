import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import author from './schemas/author';
import job from './schemas/job';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [job, author, blockContent],
};
