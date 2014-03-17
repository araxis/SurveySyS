



module Admin.directives {

    interface INumericQuestionEditorScope extends ng.IScope {

     
        Submit(): void;
        Cancel(): void;
        question: INumericQuestion;
        tempQuestion:INumericQuestion;

    }
    import Constants = Admin.Constants;
    export function NumericQuestionEditor() {


        var ret: ng.IDirective = {};

        ret.priority = 0;
        ret.restrict = "AE";
        ret.scope = {question:'='};
        //ret.scope = { onQuestionCreated: '&' };
        ret.transclude = true;
        ret.templateUrl = "../app/Admin/Directives/Editor/NumericQuestionEditor/NumericQuestionEditor.html";
        ret.replace = true;
        ret.link = (scope: INumericQuestionEditorScope, element, attrs) => {


            var initialize = () => {
                if (scope.question == undefined) {
                    return;
                }
                scope.tempQuestion =<INumericQuestion> {};
                scope.tempQuestion.Title = scope.question.Title;
                scope.tempQuestion.Description = scope.question.Description;
                scope.tempQuestion.ImagePath = scope.question.ImagePath;

            };

            scope.tempQuestion = angular.copy(scope.question);


            scope.$watch(
                "question", (newValue, oldValue) => {
                if (newValue == undefined) {
                    return;
                }
                    if (oldValue == undefined) {
                        return;
                    }
                    if (newValue.Id != oldValue.Id) {
                        initialize();
                }

              
                



                });

            scope.Submit = () => {
               

                scope.question.Title = scope.tempQuestion.Title;
                scope.question.Description = scope.tempQuestion.Description;
                scope.question.ImagePath = scope.tempQuestion.ImagePath;
                scope.$emit(Constants.QuestionEvents.QuestionCreated, scope.question);
                initialize();

            };

            scope.$on(Constants.QuestionDirectiveEvents.ParentClosed, (event, message) => {
                initialize();

            });

            scope.Cancel = () => {


                initialize();
                scope.$emit(Constants.QuestionDirectiveEvents.ChildClosed);


            };

        };


        return ret;

    }



}
  