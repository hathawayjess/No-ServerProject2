angular.module('myRouter', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/' ,
      controller: 'homeCtrl' ,
      templateUrl: 'js/home/homeTmpl.html'
    })
    $stateProvider
      .state('portfolio', {
        url: '/portfolio' ,
        controller: 'portCtrl' ,
        templateUrl: 'js/port/portCtrl.html'
      })
      .state('testimonials', {
        url: '/testimonials' ,
        controller: 'testCtrl' ,
        templateUrl: 'js/test/testTmpl.html'
      })
      .state('contact', {
        url: '/contact' ,
        controller: 'contactCtrl' ,
        templateUrl: 'js/contact/contactTmpl.html'
      });

  $urlRouterProvider.otherwise('/');
});
