/* 
    //@ for error messages, check out console. 
    //@ it does not support types, will be added in further versions. 
    //@ status: Raw, not tested ,INCOMPLETE.
*/
angular.module("ngClassFactory", [])
    .factory("classFactory", [function() {
        var error = {
            code: 0,
            msg: ""
        };

        function classObject() {
            if (arguments.length) {
                for (var i in arguments) {
                    this[arguments[i]] = "";
                }
            } else {
                return this;
            }
        }
        var dataTypeCollection = function(type) {
            
            var dataType= type.toLowerCase();
            if(dataType==="array"){
                return [];

            }else if(dataType==="string"){
            
                return "";
            }
        };

        /*it will add more keys to the existing object*/
        classObject.prototype.addKeys = addKeys;
        
        /*it will remove the supplied key from the existing object*/
        classObject.prototype.removeKeys = removeKeys;
        
        /*it will reset the object if no keys are applied else it will reset all those which are applied*/
        classObject.prototype.resetKeys = resetKeys;
        
        /*it will set keys to null*/
        classObject.prototype.forceResetToNull = forceResetToNull;
        
        /**/
        classObject.prototype.setKeysToNull = setKeysToNull;
        
        /*it will remove empty keys*/
        classObject.prototype.removeEmptyValueKeys = removeEmptyValueKeys;
        
        /*it will check whether all keys are null or not*/
        classObject.prototype.areAllKeysNull = areAllKeysNull;
        
        /*it will check a particular key if it is null or not*/
        classObject.prototype.isThisKeyNUll = isThisKeyNUll;

        function addKeys() {
            //@ this function takes list of keys as an argument and add to current referrenced object
            var self = this;
            try {
                if (arguments.length) {
                    for (var i in arguments) {
                        self[i] = "";
                    }
                } else {
                    error.code = 1;
                    error.msg = "Keys are missing";
                    throw error;
                }
            } catch (e) {
                console.log(e);
            }
            return self;
        }

        function removekeys() {
            var self = this;
            try {
                if (arguments.length) {
                    for (var i in arguments) {
                        if (Object.keys(self).indexOf(arguments[i]) != -1) {
                            delete self[arguments[i]];
                        }
                    }
                    return self;
                } else {
                    error.code = 1;
                    error.msg = "Keys are missing";
                    throw error;
                }
            } catch (e) {
                console.log(e.message);
            }
        }

        function resetKeys() {
            //@ if keys in arguments will be provied, then those keys will be resetted
            //@ else whole keys will get reset
            var self = this;
            if (arguments.length) {
                resetMe(arguments);
            } else {
                resetMe(Object.keys(self));
            }

            function resetMe(keysVal) {
                for (var i in keysVal) {
                    self[i] = "";
                }
            }
            return self;
        }


        function forceResetToNull() {
            var self = this;
            self.forEach(function(value, key) {
                self[key] = null;
            });
            return self;
        }

        function setKeysToNull() {
            var self = this;
            try {
                if (arguments) {
                    for (var i in arguments) {
                        self[i] = null;
                    }
                } else {

                }
            } catch (e) {

            }
            return self;
        }


        function removeEmptyValueKeys() {
            var self = this;
            Object.keys(self).forEach(function(value, key){
                if (self[value] === "") {
                    self[value] = null;
                }
            
                return self;
            });

            function areAllKeysNull() {
                var self = this;
                var allKeysNull = true;
                Object.keys(self).forEach(function(value, key) {
                    if (self[value] !== null) {
                        allKeysNull = false;
                    }
                });
                return allKeysNull;
            }

            function isThisKeyNUll() {
                var self = this;
                var status = false;
                try {
                    if (arguments.length) {
                        if (self[arguments[0]] === null) {
                            status = true;
                        }
                    } else {
                        throw "Key is missing";
                    }
                } catch (e) {
                    console.log(e);
                }

                return status;
            }

            return classObject;
        }
    }]);
