angular.module('ngClassFactory', [])
    .factory('classFactory', [function() {
        function classObject() {
            if (arguments.length) {
                for (var i in arguments) {
                    this[arguments[i]] = '';
                }
            } else {
                return this;
            }
        }

        return classObject;
    }])
