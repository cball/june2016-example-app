import Ember from 'ember';
import ENV from 'repo-browser/config/environment';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  request(path) {
    const githubToken = ENV.GITHUB_TOKEN;
    return this.get('ajax').request(`https://api.github.com/${path}?access_token=${githubToken}`);
  }
});
