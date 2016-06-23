/* jshint expr:true */
import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';

describeModule(
  'adapter:organization',
  'Unit | Adapter | organization',
  {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  },
  function() {
    // Replace this with your real tests.
    it('exists', function() {
      let adapter = this.subject();
      expect(adapter).to.be.ok;
    });
  }
);
