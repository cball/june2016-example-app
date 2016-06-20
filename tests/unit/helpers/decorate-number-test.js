/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  decorateNumber
} from 'repo-browser/helpers/decorate-number';

describe('DecorateNumberHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = decorateNumber(42);
    expect(result).to.be.ok;
  });
});
