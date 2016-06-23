import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  extractId(modelClass, resourceHash) {
    return resourceHash.login;
  },

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.repositories_url = payload.repos_url;

    return this._super(store, primaryModelClass, payload, id, requestType)
  }
});
