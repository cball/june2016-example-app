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

describe('Acceptance: User views organizations', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  describe('on initial load', function() {
    beforeEach(function() {
      visit('/organizations');
    });

    it('shows each organization', function() {
      const ember = find('.main-org-list li:contains(Ember)');
      const ciena = find('.main-org-list li:contains(Blue Planet)');

      expect(ember).to.have.length(1);
      expect(ciena).to.have.length(1);
    });

    it('it shows "choose an organization"', function() {
      const chooseTitle = find('h2:contains(Choose an organization)');
      expect(chooseTitle).to.have.length(1);
    });

    it('renders the index route', function() {
      expect(currentPath()).to.equal('organizations.index');
    });
  });

  describe('clicking an organization', function() {
    beforeEach(function() {
      visit('/organizations');
      click('.main-org-list .organization:contains(Blue Planet) a');
    });

    it('transitions to the organization route', function() {
      expect(currentURL()).to.equal('/organizations/ciena-blueplanet');
    });

    it('shows "Viewing 2 of 2"', function() {
      const text = find(`.collection-index-info:contains(Viewing 2 of 2)`);
      expect(text).to.have.length(1);
    });
  });
});
