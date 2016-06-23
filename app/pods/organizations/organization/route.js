// import Ember from 'ember';
// shortening chaining via destructuring
// const { Route } = Ember;
// const {
//   inject: { service }
// } = Ember;

// shortening chaning via ember-cli-shims
import Route from 'ember-route';
import RSVP from 'rsvp';

export default Route.extend({
  // use this.modelFor
  // if need current: this.modelFor(this.routeName);
  model({ login }) {
    const organizations = this.modelFor('organizations');
    // const organization = this.get('github').request(`orgs/${login}`);
    const organization = this.store.findRecord('organization', login);


    return RSVP.hash({
      organizations,
      organization
    });
  },

  // if we want to preload data for the page and not
  // see a blank area before the repo list loads:

  afterModel(model) {
    model.repos = model.organization.get('repositories');

    return model.repos;
  }
});
