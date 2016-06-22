import Ember from 'ember';
import computed from 'ember-computed';
import get from 'ember-metal/get';

export default Ember.Component.extend({
  itemIndex: computed('item', 'collection.[]', function() {
    const item = this.get('item');
    // why id?
    // can you use 2 computed properties?
    const collectionIds = this.get('collection').mapBy('id');

    // why Ember.get?
    // my next step: extract this into a plain function
    const itemId = get(item, 'id');
    const itemIndex = collectionIds.indexOf(itemId);
    const notFound = itemIndex === -1;

    return notFound ? 'Unknown' : itemIndex + 1;
  }),

  // item: computed({
  //   get() {
  //     return this.get('_items');
  //   },
  //
  //   set(key, value) {
  //     return this.set('_items', value);
  //   }
  // });
});
