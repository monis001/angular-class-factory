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
        classObject.prototype.addKeys = addKeys;
        classObject.prototype.removeKeys = removeKeys;
        classObject.prototype.resetKeys = resetKeys;
        classObject.prototype.forceResetToNull  = forceResetToNull;

        function addKeys(){

        }
        function removekeys(){

        }
        function resetKeys(){

        }
        function forecResetToNull(){
            
        }
        return classObject;
    }])
