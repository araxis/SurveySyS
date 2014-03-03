var App;
(function (App) {
    (function (directives) {
        function TextQuestionDirective() {
            var directive = {};
            directive.priority = 0;
            directive.restrict = "A";
            directive.scope = { question: '=' };
            directive.transclude = true;
            directive.templateUrl = "../app/EndUser/Directives/TextQuestion/TextQuestionView.html";
            directive.replace = true;

            return directive;
        }
        directives.TextQuestionDirective = TextQuestionDirective;
    })(App.directives || (App.directives = {}));
    var directives = App.directives;
})(App || (App = {}));
//# sourceMappingURL=TextQuestionDirective.js.map
