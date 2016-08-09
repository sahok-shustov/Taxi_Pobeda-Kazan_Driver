// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var pobedaTaxiDriver = angular.module('pobedaTaxiDriver', ['ionic', 'ionic.rating', 'ngCordova'])

.run(function($ionicPlatform, ROUTES, $rootScope, $ionicLoading) {
    $rootScope.ROUTES = ROUTES;
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });

    $rootScope.showLoadingInit = function() {
        $ionicLoading.show({
                template: '<p>Инициализация...</p><ion-spinner icon="spiral"></ion-spinner>',
                showBackdrop: true,
                duration: 3000
            }

            /*{
    content: '<i class="icon ion-loading-c"></i>',
    animation: 'fade-in',
    showBackdrop: false,
    maxWidth: 50,
    showDelay: 0
  }*/
        );
    };
    $rootScope.showLoadingDetails = function() {
        $ionicLoading.show({
            template: '<p>Подождите..</p><ion-spinner icon="spiral"></ion-spinner>',
            showBackdrop: true,
            duration: 1000
        });
    };

    $rootScope.hideLoadingInit = function() {
        $ionicLoading.hide();
    };

    $rootScope.showLoading = function() {
        $ionicLoading.show({
                template: '<ion-spinner icon="spiral"></ion-spinner>',
                showBackdrop: true,
                duration: 3000
            }
            /*{
    content: '<i class="icon ion-loading-c"></i>',
    animation: 'fade-in',
    showBackdrop: false,
    maxWidth: 50,
    showDelay: 0
  }*/
        );
    }; 

    $rootScope.hideLoading = function() {
        $ionicLoading.hide();
    };
})