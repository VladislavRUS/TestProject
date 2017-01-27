function mainHeaderDirective() {
    return {
        scope: {},
        bindToController: {},
        templateUrl: '/scripts/dev/components/main/header/main-header.tmpl.html',
        controller: function() {
            var self = this;

            self.balance = 218982.90;
            self.userName = "Никита Ласточкин";
        },
        controllerAs: 'mainHeaderCtrl'
    }
}