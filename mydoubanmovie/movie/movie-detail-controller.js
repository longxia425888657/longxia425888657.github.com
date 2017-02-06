(function () {

    var module = angular.module('app.movieDetail', []);
    module.controller('detailController', ['$scope', '$rootScope', 'URLConfig', '$http', '$routeParams',
        function ($scope, $rootScope, URLConfig, $http, $routeParams) {

            var url = URLConfig.appUrl;

            var movieId = $routeParams.movieId;

            var fullUrl = url + 'subject/' + movieId;

            $http.jsonp(fullUrl + '?callback=movieDetailCallback');

            window.movieDetailCallback = function (jsonData) {

                $scope.movie = jsonData;
                console.log(jsonData)

            }

            $rootScope.navTitle = 'µÁ”∞œÍ«È';
        }])

})()
