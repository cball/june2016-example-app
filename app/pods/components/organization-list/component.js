import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',

  organizations: null,
  starredOrganizations: Ember.computed.filterBy('organizations', 'isStarred', true),
  hasStars: Ember.computed.gt('starredOrganizations.length', 0),

  init() {
    this._super(...arguments);

    // Dont need this part if using ember-prop-types
    // this.organizations = this.organizations || [];
    // this.set('organizations', this.get('organizations') || []);
  }
});
