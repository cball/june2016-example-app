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
  it('adds a single ! if number is 1', function() {
    let result = decorateNumber([1]);
    expect(result).to.equal('1!');
  });

  it('adds !! if number is 2', function() {
    let result = decorateNumber([2]);
    expect(result).to.equal('2!!');
  });

  it('returns empty string otherwise', function() {
    let result = decorateNumber(['asdf']);
    expect(result).to.be.empty;
  });
});
