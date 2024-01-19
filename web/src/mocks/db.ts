import { faker } from '@faker-js/faker';
import { factory, primaryKey } from '@mswjs/data';

import { seed } from './seeder';

faker.seed(123);

export const db = factory({
  user: {
    id: primaryKey(faker.string.uuid),
    name: faker.person.firstName,
  },
});

seed();
