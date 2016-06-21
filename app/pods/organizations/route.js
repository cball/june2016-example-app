import Ember from 'ember';
import RSVP from 'rsvp';
import ENV from 'repo-browser/config/environment';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model() {
    const githubToken = ENV.GITHUB_TOKEN;
    const requests = [
      this.get('ajax').request(`https://api.github.com/orgs/emberjs?access_token=${githubToken}`),
      this.get('ajax').request(`https://api.github.com/orgs/ciena-blueplanet?access_token=${githubToken}`)
    ];

    return RSVP.all(requests)
      .catch((e) => {
        console.log(e);
      });

    // return [
    //   Ember.Object.create({ id: 1, name: 'Org 1' }),
    //   Ember.Object.create({ id: 2, name: 'Org 2' })
    // ];
  },

  // if you need something after model has resolve
  // afterModel(model) {
    // get a property from model and make another request
    // return this.get('ajax').request(somethingElse)
  // }

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
