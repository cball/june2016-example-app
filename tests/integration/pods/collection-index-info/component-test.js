/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'collection-index-info',
  'Integration: CollectionIndexInfoComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#collection-index-info}}
      //     template content
      //   {{/collection-index-info}}
      // `);

      this.render(hbs`{{collection-index-info}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
