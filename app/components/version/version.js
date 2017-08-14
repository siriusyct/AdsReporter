'use strict';

angular.module('adRep.version', [
  'adRep.version.interpolate-filter',
  'adRep.version.version-directive'
])

.value('version', '0.1');
