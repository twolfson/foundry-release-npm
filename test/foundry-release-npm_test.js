// Load in dependencies
var fs = require('fs');
var expect = require('chai').expect;
var sinon = require('sinon');
var shell = require('shelljs');
var npmRelease = require('../');
var fixtureUtils = require('./utils/fixtures');

// TODO: Relocate utils into spec

// Guarantee safeguards against exec are in place (see WARNING.md)
var childUtils = require('./utils/child-process');

// Define our test
describe('Setting the version', function () {
  describe('for a node module', function () {
    var fixtureDir = fixtureUtils.fixtureDir('npm');
    before(function (done) {
      npmRelease.setVersion('0.1.0', done);
    });

    it('updates the package.json', function () {
      var pkgJson = fs.readFileSync(fixtureDir + '/package.json');
      expect(JSON.parse(pkgJson)).to.have.property('version', '0.1.0');
    });

  });
});

describe('Publishing', function () {
  describe('a node module', function () {
    var fixtureDir = fixtureUtils.fixtureDir('npm');
    before(function (done) {
      this.execStub = sinon.stub(shell, 'exec');
      npmRelease.publish('0.1.0', done);
    });
    after(function () {
      this.execStub.restore();
    });

    it('publishes to npm', function () {
      expect(this.execStub.args[0]).to.deep.equal(['npm publish']);
    });
  });

  describe('a private node module', function () {
    var fixtureDir = fixtureUtils.fixtureDir('npm-private');
    before(function (done) {
      this.execStub = sinon.stub(shell, 'exec');
      npmRelease.publish('0.1.0', done);
    });
    after(function () {
      this.execStub.restore();
    });

    it('publishes to npm', function () {
      expect(this.execStub.args).to.have.property('length', 0);
    });
  });
});
