import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',

  organizations: null,
  starredOrganizations: Ember.computed.filterBy('organizations', 'isStarred', true),
  hasStars: Ember.computed.gt('starredOrganizations.length', 0),

  // example dependent key CPs
  myProp: Ember.computed('prop1', 'prop2', function() {
    const valueOfMyProperty = 'hi';

    return valueOfMyProperty;
  }).readOnly(),
  //
  // starred: Ember.computed('organizations.@each.isStarred', function() {
  //
  // }),
  //
  // starred2: Ember.computed('organizations.[]', function() {
  //
  // }),

  init() {
    this._super(...arguments);

    // Dont need this part if using ember-prop-types
    // this.organizations = this.organizations || [];
    // this.set('organizations', this.get('organizations') || []);
  }
});
