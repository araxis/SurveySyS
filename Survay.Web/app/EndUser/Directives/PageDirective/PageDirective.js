var App;
(function (App) {
    (function (directives) {
        function PageDirective() {
            var ret = {};

            ret.priority = 0;
            ret.restrict = "A";
            ret.scope = { page: '=' };
            ret.transclude = true;
            ret.templateUrl = "../app/EndUser/Directives/PageDirective/PageDirectiveView.html";
            ret.replace = true;

            return ret;
        }
        directives.PageDirective = PageDirective;
    })(App.directives || (App.directives = {}));
    var directives = App.directives;
})(App || (App = {}));
//# sourceMappingURL=PageDirective.js.map
