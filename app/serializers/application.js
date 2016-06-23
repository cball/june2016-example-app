import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const newRoot = primaryModelClass.modelName;
    let newPayload = {};

    payload.links = linksForPayload(payload);
    newPayload[newRoot] = payload;

    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});

function linksForPayload(payload) {
  const links = {};
  const relationships = Object.keys(payload).filter((k) => {
    return k.includes('_url');
  });

  relationships.forEach((r) => {
    const name = r.replace(/_url/, '');
    links[name] = payload[r];
  });

  return links;
}
