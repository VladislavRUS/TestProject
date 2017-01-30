function tasksLayoutDirective($http) {
    return {
        scope: {},
        bindToController: {},
        templateUrl: '/scripts/dev/components/layout/tasks/tasks-layout.tmpl.html',
        controller: function () {
            var self = this;

            self.personal = false;
            self.night = false;
            self.rush = false;

            self.currentType = '';

            $http.get('../mocks/tasks.json').then(function(resp) {
                self.tasks = resp.data;
                self.init();
            });

            self.init = function () {
                self.currentType = self.tasks[0].type;
            };

            self.currentTasks = function() {
                if (self.tasks) {
                    return self.tasks.filter(function(task) {
                        return task.type === self.currentType;
                    })[0].arr;

                } else {
                    return [];
                }
            };

            self.filter = function(task) {
                if (!self.searchValue) {
                    if (self.night || self.personal || self.rush) {
                        return task.night === self.night || task.personal === self.personal || task.rush === self.rush;

                    } else {
                        return true;
                    }

                } else {
                    return (task.title.includes(self.searchValue) || task.city.includes(self.searchValue));
                }
            };

            self.toggleCheckbox = function(type) {
                switch(type) {
                    case 'personal': {
                        self.personal = !self.personal;
                        break;
                    }
                    case 'night': {
                        self.night = !self.night;
                        break;
                    }
                    case 'rush': {
                        self.rush = !self.rush;
                        break;
                    }
                }
            };

            self.setCurrentType = function(title) {
                self.currentType = title;
            };
        },
        controllerAs: 'tasksLayoutCtrl'
    }
}