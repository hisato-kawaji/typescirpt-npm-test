'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('getWajiHello function test', () => {
    it('should return Wife', () => {
        var result = index.getWajiHello('Wife');
        expect(result).to.equal('Hello from Javascript to Wife');
    });
});
