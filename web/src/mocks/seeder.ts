import { faker } from '@faker-js/faker';

import { db } from './db';

export function seed() {
  for (let cnt = 0; cnt < 100; cnt++) {
    db.user.create({
      name: faker.person.firstName(),
    });
  }
}
