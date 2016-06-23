/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import {
  beforeEach,
  describe
} from 'mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'collection-index-info',
  'Integration: CollectionIndexInfoComponent',
  {
    integration: true
  },
  function() {
    describe('with data', function() {
      beforeEach(function() {
        const item = { id: 1 };
        const collection = [item];

        this.setProperties({
          collection,
          item
        });

        this.render(hbs`
          {{collection-index-info
            collection=collection
            item=item}}
        `);
      });

      it('should show the proper index and total length', function() {
        const text = this.$().text().trim();
        expect(text).to.equal("Viewing 1 of 1");
      });
    });

    describe('with an item not in the collection', function() {

    });

    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#collection-index-info}}
      //     template content
      //   {{/collection-index-info}}
      // `);

      expect(this.$()).to.have.length(1);
    });
  }
);
