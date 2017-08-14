'use strict';

describe('adRep.version module', function() {
  beforeEach(module('adRep.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
