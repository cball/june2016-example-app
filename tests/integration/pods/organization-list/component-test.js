/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import {
  describe
} from 'mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'organization-list',
  'Integration: OrganizationListComponent',
  {
    integration: true
  },
  function() {
    describe('no organizations', function() {
      it('shows "No items."', function() {
        this.render(hbs`{{organization-list}}`);
        const listText = this.$('li').text().trim();

        expect(listText).to.equal('No items.');
      });
    });

    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#organization-list}}
      //     template content
      //   {{/organization-list}}
      // `);

      this.render(hbs`{{organization-list}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
