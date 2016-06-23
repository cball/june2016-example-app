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
  'decorate-number',
  'Integration: DecorateNumberHelper',
  {
    integration: true
  },
  function() {
    describe('with 1 passed', function() {
      beforeEach(function() {
        this.render(hbs`{{decorate-number 1}}`);
      });

      it('shows 1!', function() {
        const text = this.$().text().trim();
        expect(text).to.equal("1!");
      });
    });

    describe('with 2 passed', function() {
      beforeEach(function() {
        this.render(hbs`{{decorate-number 2}}`);
      });

      it('shows 1!', function() {
        const text = this.$().text().trim();
        expect(text).to.equal("2!!");
      });
    });
  }
);
