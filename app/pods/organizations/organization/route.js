import Ember from 'ember';

// shortening chaining via destructuring
// const { Route } = Ember;
// const {
//   inject: { service }
// } = Ember;

// shortening chaning via ember-cli-shims
import service from 'ember-service/inject';
import Route from 'ember-route';
import RSVP from 'rsvp';

export default Route.extend({
  github: service(),

  // use this.modelFor
  // if need current: this.modelFor(this.routeName);
  model({ login }) {
    const organizations = this.modelFor('organizations');
    const organization = this.get('github').request(`orgs/${login}`);

    return RSVP.hash({
      organizations,
      organization
    });
  }
});
