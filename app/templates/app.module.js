(function(){
'use strict';

var angularApp=angular.module("<%= ngAppName %>",[]);

angularApp .config(['$routeProvider',function($routeProvider) {
    
        $routeProvider.
            when('/<%= ngModuleName %>list', {
                templateUrl: 'modules/<%= ngModuleName %>/<%= ngModuleName %>list.view.html',
                controller: '<%= ngModuleName %>listController'
            }).
            when('/new<%= ngModuleName %>', {
                templateUrl: 'modules/<%= ngModuleName %>/new<%= ngModuleName %>.view.html',
                controller: 'new<%= ngModuleName %>Controller'
            }).
            when('/edit<%= ngModuleName %>/:id', {
                templateUrl: 'modules/<%= ngModuleName %>/edit<%= ngModuleName %>.view.html',
                controller: 'edit<%= ngModuleName %>Controller'
            }).
            otherwise({
                redirectTo: '/'
            });
  }]);

})()