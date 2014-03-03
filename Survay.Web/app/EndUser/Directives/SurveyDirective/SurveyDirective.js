var App;
(function (App) {
    (function (directives) {
        function SurveyDirective() {
            var ret = {};

            ret.priority = 0;
            ret.restrict = "A";
            ret.scope = { survey: '=' };
            ret.transclude = true;
            ret.templateUrl = "../app/EndUser/Directives/SurveyDirective/SurveyDirectiveView.html";
            ret.replace = true;

            return ret;
        }
        directives.SurveyDirective = SurveyDirective;
    })(App.directives || (App.directives = {}));
    var directives = App.directives;
})(App || (App = {}));
//# sourceMappingURL=SurveyDirective.js.map
