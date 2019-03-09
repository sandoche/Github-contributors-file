/* global describe, it, before */

import chai from 'chai';
import getContributors from '../lib/github-contributors-file.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an owner, a repository name and a file path', () => {
  describe('When I need the contributors', () => {
    it('should return sandoche', () => {
      getContributors('sandoche', 'Jekyll-webpack-boilerplate', '_i18n/en.yml').then((answer) => {
        expect(answer[0].login).to.be.equal('sandoche');
      })
    });
  });
});
