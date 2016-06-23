import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  login() {
    return faker.internet.userName();
  },
  avatar_url() {
    return faker.internet.avatar();
  }
});
