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
  'organization-list',
  'Integration: OrganizationListComponent',
  {
    integration: true
  },
  function() {
    describe('no organizations', function() {
      it('throws an error if no organizations', function() {
        expect(() => {
          this.render(hbs`{{organization-list}}`);
        }).to.throw(/Must pass organization/);
      });
    });

    describe('empty organizations', function() {
      const noOrgsText = 'I have nothing';

      beforeEach(function() {
        const organizations = [];

        this.setProperties({
          organizations,
          noOrgsText
        });

        this.render(hbs`
          {{#organization-list organizations=organizations}}
          {{else}}
            {{noOrgsText}}
          {{/organization-list}}
        `);
      });

      it(`shows "${noOrgsText}"`, function() {
        const listText = this.$('li').text().trim();
        expect(listText).to.equal(noOrgsText);
      });
    });

    describe('with organizations', function() {
      const organizations = [
        { id: 1, name: 'Org 1' },
        { id: 2, name: 'Org 2', isStarred: true }
      ];

      beforeEach(function() {
        this.set('organizations', organizations);
        this.render(hbs`{{organization-list organizations=organizations}}`);
      });

      it('renders the organizations as list items', function() {
        expect(this.$('li.organization')).to.have.length(organizations.length);
      });

      it('shows the organization name', function() {
        // you can also use string interpolation here and do:
        // const [firstOrganizationName] = organizations;
        // `li:contains(${firstOrganizationName.name})`
        const firstOrganization = this.$('li:contains(Org 1)');
        expect(firstOrganization).to.have.length(1);
      });

      it('adds a class of "starred" if isStarred is true', function() {
        const org2 = this.$('li:contains(Org 2)');
        expect(org2.hasClass('starred')).to.be.ok;
      });
    });
  }
);
