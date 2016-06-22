import Ember from 'ember';

// shortening chaining via destructuring
// const { Route } = Ember;
// const {
//   inject: { service }
// } = Ember;

// shortening chaning via ember-cli-shims
import service from 'ember-service/inject';
import Route from 'ember-route';

export default Route.extend({
  github: service(),

  model({ login }) {
    return this.get('github').request(`org s/${login}`);
  }
});
