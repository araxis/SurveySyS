var App;
(function (App) {
    (function (directives) {
        function WizardDirective() {
            var ret = {};

            ret.priority = 0;
            ret.restrict = "A";
            ret.scope = { pages: '=' };
            ret.transclude = true;
            ret.templateUrl = "../app/EndUser/Directives/WizardDirective/WizardDirectiveView.html";
            ret.replace = true;
            ret.link = function (scope, element, attrs) {
                scope.index = 1;
                scope.setIndex = function (i) {
                    scope.index = i;
                };
            };

            return ret;
        }
        directives.WizardDirective = WizardDirective;
    })(App.directives || (App.directives = {}));
    var directives = App.directives;
})(App || (App = {}));
//# sourceMappingURL=WizardDirective.js.map
