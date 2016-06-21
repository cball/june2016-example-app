/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance: UserViewsOrganizations', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can visit /user-views-organizations', function() {
    visit('/user-views-organizations');

    andThen(function() {
      expect(currentPath()).to.equal('user-views-organizations');
    });
  });
});
