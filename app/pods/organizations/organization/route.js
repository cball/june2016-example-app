import Ember from 'ember';

export default Ember.Route.extend({
  github: Ember.inject.service(),

  model({ login }) {
    return this.get('github').request(`orgs/${login}`);
  }
});
