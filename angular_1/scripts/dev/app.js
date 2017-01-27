angular.module("app", ['ui.router', 'ngCookies', 'ngAnimate'])
    .config(function($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise("/tasks");

        $stateProvider
            .state('tasks', {
                url: "/tasks",
                controller: 'TasksController',
                controllerAs: "tasksCtrl",
                templateUrl: '/scripts/dev/activity/tasks-activity.tmpl.html'
        });

    });

angular.module('app')
    .controller('TasksController', TasksController);

angular.module('app')
    .directive('mainHeader', mainHeaderDirective);
