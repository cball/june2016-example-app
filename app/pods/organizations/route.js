import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      Ember.Object.create({ id: 1, name: 'Org 1' }),
      Ember.Object.create({ id: 2, name: 'Org 2' })
    ];
  },

  actions: {
    star(organization) {
      // if we aren't sure its an ember object
      // Ember.set(organization, 'isStarred' true);

      // if we have ember object
      // organization.set('isStarred', true);
      organization.toggleProperty('isStarred');
    }
  }
});
