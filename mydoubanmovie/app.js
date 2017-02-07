(function (window, document) {
    var app = angular.module("app", ['ngRoute','app.movieList','app.movieDetail']);
    app.config(function ($routeProvider) {
        $routeProvider.when('/:type', {
            templateUrl: 'movie/movie-list.html',
            controller: 'listController'
        }).when('/subject/:movieId',{
            controller : 'detailController',
            templateUrl : 'movie/movie-detail.html'
        }).otherwise({
            redirectTo: '/in_theaters'
        })
    });

    app.constant('URLConfig', {
        appUrl: 'https://api.douban.com/v2/movie/',
        count: 30
    });

    //app.controller('listController', function () {
    //
    //});
    app.directive('selectLink',function () {
        var item = [];
        return function (scope,element,attr) {
            item.push(element);
            element.bind('click',function (e) {
                item.forEach(function (item) {
                    item.removeClass('active');
                })

               element.addClass('active');
            })

        }
    })

})(window, document);
