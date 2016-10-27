/**
 * Created by vitalik on 26.10.16.
 */
/**
 *@module app {duScroll}- function is root in site
 *@controller {$scope, $document}- linking to page
 * This code is responsible for page scrolling
 */
angular.module('app', ['duScroll'])
    .value('duScrollGreedy', true)
    .value('duScrollBottomSpy', true)
    .controller('rootController', function ($scope, $document) {
            $scope.toTheTop = function () {
                $document.scrollTopAnimated(0, 5000).then(function () {
                    //console && console.log('scrolled');
                });
            }
            var section3 = angular.element(document.getElementById('section-3'));
            $scope.toSection3 = function () {
                $document.scrollToElementAnimated(section3);
            }
            $document.on('scroll', function () {
                var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
                var body = document.body, html = document.documentElement;
                var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                windowBottom = windowHeight + window.pageYOffset;
                if (windowBottom >= docHeight) {
                    //alert('bottom reached');
                }
            });
        }
    ).value('duScrollOffset', 30);