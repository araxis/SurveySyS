var App;
(function (App) {
    (function (directives) {
        function Selector(question) {
            var ret = '';
            switch (question.TypeName) {
                case 'DescriptiveQuestion':
                    ret = "<div data-app-text data-question='question'></div>";
                    break;
                case 'NumericQuestion':
                    ret = '';
                    break;
                case 'MultiSelect':
                    ret = '<div data-app-multiselect data-question="question"></div>';
                    break;
                case 'SingleSelect':
                    ret = '<div data-app-singleselect data-question="question"></div>';
                    break;
                default:
            }
            return ret;
        }
        ;
        QuestionDirectiveFactory.$inject = ['$compile'];
        function QuestionDirectiveFactory($compile) {
            var ret = {};

            ret.priority = 0;
            ret.restrict = "A";
            ret.scope = { question: '=' };
            ret.transclude = true;

            //ret.template = '<div></div>';
            ret.replace = false;
            ret.link = function (scope, element, attrs) {
                var dr = Selector(scope.question);

                var newElement = $compile(dr)(scope);
                element.parent().append(newElement);
            };

            return ret;
        }
        directives.QuestionDirectiveFactory = QuestionDirectiveFactory;
    })(App.directives || (App.directives = {}));
    var directives = App.directives;
})(App || (App = {}));
//# sourceMappingURL=QuestionDirectiveFactory.js.map
