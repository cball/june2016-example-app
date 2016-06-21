import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  avatarUrl: attr('string'),
  login: attr('string'),
  updatedAt: attr('date'),

  // if we wanted an array
  colors: attr()
});
