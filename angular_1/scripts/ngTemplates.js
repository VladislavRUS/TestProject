(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/activity/tasks-activity.tmpl.html',
    '<div class="page">\n' +
    '    <div class="page__layout">\n' +
    '\n' +
    '        <main-header></main-header>\n' +
    '        <tasks-layout></tasks-layout>\n' +
    '\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/layout/tasks/tasks-layout.tmpl.html',
    '<div class="page__row-layout">\n' +
    '    <div class="tasks-layout">\n' +
    '        <div class="tasks-layout__header">Задания</div>\n' +
    '\n' +
    '        <div class="tasks-layout__tabs">\n' +
    '            <div class="tasks-layout__tabs-item"\n' +
    '                 ng-repeat="taskType in tasksLayoutCtrl.tasks"\n' +
    '                 ng-class="{\'_active\': taskType.title == tasksLayoutCtrl.currentType}"\n' +
    '                 ng-click="tasksLayoutCtrl.setCurrentType(taskType.title);">\n' +
    '\n' +
    '                <div class="tasks-layout__tabs-item-text">{{taskType.title}}</div>\n' +
    '                <div class="tasks-layout__tabs-item-value">{{taskType.arr.length}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="tasks-layout__options">\n' +
    '\n' +
    '            <div class="tasks-layout__options-search">\n' +
    '                <input class="input" placeholder="Поиск по слову">\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="tasks-layout__options-checkbox">Персональное</div>\n' +
    '            <div class="tasks-layout__options-checkbox">Ночное</div>\n' +
    '            <div class="tasks-layout__options-checkbox">Срочное</div>\n' +
    '\n' +
    '            <div class="tasks-layout__options-user">Никита Ласточкин</div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="tasks-layout__table">\n' +
    '            <div class="tasks-layout__table-row _head">\n' +
    '                <div class="tasks-layout__table-col _w110">ID</div>\n' +
    '                <div class="tasks-layout__table-col _w110">Город</div>\n' +
    '                <div class="tasks-layout__table-col _w600">Название</div>\n' +
    '                <div class="tasks-layout__table-col _w110">Выполнить до</div>\n' +
    '                <div class="tasks-layout__table-col _w110">Сумма</div>\n' +
    '            </div>\n' +
    '            <div class="tasks-layout__table-body">\n' +
    '                <div class="tasks-layout__table-row"\n' +
    '                     ng-repeat="task in tasksLayoutCtrl.currentTasks()">\n' +
    '                    <div class="tasks-layout__table-col _w110">{{task.id}}</div>\n' +
    '                    <div class="tasks-layout__table-col _w110">{{task.city}}</div>\n' +
    '                    <div class="tasks-layout__table-col _w600">{{task.title}}</div>\n' +
    '                    <div class="tasks-layout__table-col _w110">{{task.till | date}}</div>\n' +
    '                    <div class="tasks-layout__table-col _w110">{{task.sum | currency}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('HtmlTemplates');
} catch (e) {
  module = angular.module('HtmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scripts/dev/components/main/header/main-header.tmpl.html',
    '<div class="main-header">\n' +
    '    <div class="page__row-layout">\n' +
    '        <div class="main-header__tabs">\n' +
    '            <div class="main-header__tabs-logo">taskon</div>\n' +
    '\n' +
    '            <div class="main-header__tabs-item _active">\n' +
    '                Задания\n' +
    '            </div>\n' +
    '            <div class="main-header__tabs-item">\n' +
    '                Финансы\n' +
    '            </div>\n' +
    '            <div class="main-header__tabs-item">\n' +
    '                Компания\n' +
    '            </div>\n' +
    '            <div class="main-header__tabs-item">\n' +
    '                Статистика\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="main-header__controls">\n' +
    '            <span class="main-header__controls-text">Баланс</span>\n' +
    '\n' +
    '            <div class="main-header__controls-balance">\n' +
    '                {{mainHeaderCtrl.balance | currency}}\n' +
    '            </div>\n' +
    '            <div class="main-header__controls-user">{{mainHeaderCtrl.userName}}</div>\n' +
    '            <div class="main-header__controls-about"></div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();
