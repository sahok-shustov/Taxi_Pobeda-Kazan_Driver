pobedaTaxiDriver.constant('ROUTES', (function() {
    return {
        APP: '/app',
        MAIN: '/main',
        MYORDERS: '/my_orders',
        REG: '/registration',
        AUTH: '/authorization',
        TAXIMETER: '/taxi_meter',
        PROFILE: '/profile',
        CONTACTTODISPATCHER: '/contact_to_dispatcher',
        CASHACCESS: '/cash_access',
        OUT: '/out',
        HELP: '/help',

        TAB: '/tab',
        INFO: '/info',
        MAP: '/map',

        API: 'http://api.taxi.exdan.ru/api'
    };
})())

.config(function($stateProvider, $urlRouterProvider, ROUTES, $httpProvider) {
    // $httpProvider.defaults.headers.post = { 'Content-Type': 'application/json' };
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    // $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    /* $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = 'Content-Type: application/x-www-form-urlencoded;charset=utf-8';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];*/

    var tpl = "templates/"
    $stateProvider
        .state('app', {
            url: ROUTES.APP,
            abstract: true,
            templateUrl: tpl + 'menu.html',
            controller: 'MainCtrl'
        })

    .state('app.main', {
        url: ROUTES.MAIN,
        cache: false,
        views: {
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'main.html',
                // controller: 'InitCtrl'
            }
        }
    })

    .state('app.registration', {
        url: ROUTES.REG,
        cache: false,
        views: {
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'registration.html',
                controller: 'Reg&AuthCtrl'
            }
        }
    })

    .state('app.authorization', {
        url: ROUTES.AUTH,
        cache: false,
        views: {
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'authorization.html',
                controller: 'Reg&AuthCtrl'
            }
        }
    })

    .state('app.profile', {
        url: ROUTES.PROFILE,
        cache: false,
        views: {
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'profile.html',
                controller: 'ProfileCtrl'
            }
        }
    })

    .state('app.my_orders', {
        url: ROUTES.MYORDERS,
        cache: false,
        views: {
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'myOrders.html',
                controller: 'MyOrdersCtrl'
            }
        }
    })

    .state('app.taxi_meter', {
        url: ROUTES.TAXIMETER,
        cache: false,
        views: {
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'taxiMeter.html',
                controller: 'TaxiMeterCtrl'
            }
        }
    })

    .state('app.contact_to_dispatcher', {
        url: ROUTES.CONTACTTODISPATCHER,
        cache: false,
        views: {
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'contactToDispatcher.html',
                controller: 'ContactToDispatcherCtrl'
            }
        }
    })

    .state('app.cash_access', {
        url: ROUTES.CASHACCESS,
        cache: false,
        views: {
            'menuContent': {
                cache: false,
                templateUrl: tpl + 'cashAccess.html',
                controller: 'CashAccessCtrl'
            }
        }
    })

    /* .state('app.out', {
         url: ROUTES.OUT,
         cache: false,
         views: {
             'menuContent': {
                 cache: false,
                 templateUrl: tpl + 'out.html',
                 controller: 'OutCtrl'
             }
         }
     })*/

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: ROUTES.TAB,
        abstract: true,
        templateUrl: tpl + "fulfillmentOfAnOrder.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.info', {
        url: ROUTES.INFO,
        views: {
            'tab-info': {
                templateUrl: tpl + 'info.html',
                controller: 'FulfillmentOfAnOrderCtrl'
            }
        }
    })

    .state('tab.taxi_meter', {
        url: ROUTES.TAXIMETER,
        views: {
            'tab-taxi_meter': {
                templateUrl: tpl + 'taxiMeter.html',
                controller: 'FulfillmentOfAnOrderCtrl'
            }
        }
    })

    /*.state('tab.friend-detail', {
        url: '/friend/:friendId',
        views: {
            'tab-friends': {
                templateUrl: 'templates/friend-detail.html',
                controller: 'FriendDetailCtrl'
            }
        }
    })*/

    .state('tab.map', {
        url: ROUTES.TAB,
        views: {
            'tab-map': {
                templateUrl: tpl + 'map.html',
                controller: 'FulfillmentOfAnOrderCtrl'
            }
        }
    });

    $urlRouterProvider.otherwise('/app/registration');
});
