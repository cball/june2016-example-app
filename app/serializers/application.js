import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const newRoot = primaryModelClass.modelName;
    let newPayload = {};

    payload.links = {
      repositories: payload.repos_url
    };
    newPayload[newRoot] = payload;

    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});
