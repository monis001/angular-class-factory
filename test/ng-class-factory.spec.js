describe('ng_class_factory', function() {
	beforeEach(angular.mock.module('ngClassFactory'));
	
	
	/* the class factory should be defined to module*/
    it('should have a factory ',function(){
        expect(ngClassFactory.classFactory).toBeDefined();
    })

    // it('should accept parametrs and return those initialsed params', inject(['classFactory',function(classFactory){

    // 	var tempObj = classFactory('x','y');
    // 	object.keys(function(m){
    // 		expect(m).toBeDefined();
    // 	}
    // 	})
    // }])


    // it('should accept without params and return empty object ',function(){

    // })

    // it('should add keys to an existsing object ',function(){

    // })

    // it('should remove keys from existsing object',function(){

    // })

    // it('should reset keys in existsing object',function(){

    // })

    // it('should remove empty keys values',function(){

    // })

    // it('should check if all keys are null ',function(){

    // })

    // it('should check if a particular key is null or not ',function(){

    // })
});

