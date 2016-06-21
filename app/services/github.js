import Ember from 'ember';
import ENV from 'repo-browser/config/environment';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  baseURL: 'https://api.github.com',

  request(path) {
    const githubToken = ENV.GITHUB_TOKEN;
    const baseURL = this.get('baseURL');

    return this.get('ajax').request(`${baseURL}/${path}?access_token=${githubToken}`);

    // properties set on this service are available to anyone that uses it
    // const lastRequest = this.get('ajax').request(`https://api.github.com/${path}?access_token=${githubToken}`);
    // this.set('lastRequest', lastRequest);
  }
});
