import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  avatarUrl: attr('string'),
  login: attr('string'),
  name: attr('string'),
  updatedAt: attr('date'),

  repositories: hasMany('repository')
  // if we wanted an array or object
  // colors: attr()
});
