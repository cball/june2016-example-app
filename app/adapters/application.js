import ActiveModelAdapter from 'active-model-adapter';
import ENV from 'repo-browser/config/environment';

export default ActiveModelAdapter.extend({
  host: 'https://api.github.com',
  headers: {
   'Authorization': `token ${ENV.GITHUB_TOKEN}`
  }
});
