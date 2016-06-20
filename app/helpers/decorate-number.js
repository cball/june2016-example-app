import Ember from 'ember';

// {{decorate-number 0}}
export function decorateNumber([number]/*, hash*/) {
  if(number === 1) {
    return `${number}!`;
  }

  if(number === 2) {
    return `${number}!!`;
  }
}

export default Ember.Helper.helper(decorateNumber);
