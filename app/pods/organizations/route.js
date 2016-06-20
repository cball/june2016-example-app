import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { id: 1, name: 'Org 1' },
      { id: 2, name: 'Org 2' }
    ];
  }
});
