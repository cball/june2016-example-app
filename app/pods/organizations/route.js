import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model() {
    const requests = [
      this.get('ajax').request('https://api.github.com/orgs/emberjs?access_token=9a9cee03c07a59b1387b5480b3b8c946a47d1eec'),
      this.get('ajax').request('https://api.github.com/orgs/ciena-blueplanet?access_token=9a9cee03c07a59b1387b5480b3b8c946a47d1eec')
    ];

    return RSVP.all(requests);

    // return [
    //   Ember.Object.create({ id: 1, name: 'Org 1' }),
    //   Ember.Object.create({ id: 2, name: 'Org 2' })
    // ];
  },

  actions: {
    star(organization) {
      // if we aren't sure its an ember object
      const isStarred = Ember.get(organization, 'isStarred');
      Ember.set(organization, 'isStarred', !isStarred);

      // if we have ember object
      // organization.set('isStarred', true);
      // organization.toggleProperty('isStarred');
    }
  }
});
