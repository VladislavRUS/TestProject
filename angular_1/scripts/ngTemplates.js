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
    '');
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
