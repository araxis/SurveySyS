var App;
(function (App) {
    (function (directives) {
        function MultiSelectDirective() {
            var ret = {};
            ret.priority = 0;
            ret.restrict = "A";
            ret.scope = { question: '=' };
            ret.transclude = true;
            ret.templateUrl = "../app/EndUser/Directives/MultiItemQuestion/MultiSelectView.html";
            ret.replace = true;
            ret.link = function (scope, element, attrs) {
                scope.toggleSelection = function (choice) {
                    var idx = scope.question.Value.indexOf(choice);

                    if (idx > -1) {
                        scope.question.Value.splice(idx, 1);
                    } else {
                        scope.question.Value.push(choice);
                    }
                };
            };

            return ret;
        }
        directives.MultiSelectDirective = MultiSelectDirective;
    })(App.directives || (App.directives = {}));
    var directives = App.directives;
})(App || (App = {}));
//# sourceMappingURL=MultiSelectDirective.js.map
