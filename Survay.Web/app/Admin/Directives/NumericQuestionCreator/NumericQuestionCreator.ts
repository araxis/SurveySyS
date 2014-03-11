



module Admin.directives {

    interface INumericQuestionCreatorScope extends ng.IScope {

        Title: string;
        Description: string;
        ImagePath: string;
        CreateQuestion(): void;
        Cancel(): void;

    }

    export function NumericQuestionCreator() {


        var ret: ng.IDirective = {};

        ret.priority = 0;
        ret.restrict = "AE";
        ret.scope = {};
        //ret.scope = { onQuestionCreated: '&' };
        ret.transclude = true;
        ret.templateUrl = "../app/Admin/Directives/NumericQuestionCreator/NumericQuestionCreator.html";
        ret.replace = true;
        ret.link = function (scope: INumericQuestionCreatorScope, element, attrs) {



            var initialize = () => {
                scope.Title = '';
                scope.Description = '';
                scope.ImagePath = '';
            }

            initialize();

            scope.CreateQuestion = () => {
                var ret = { Title: scope.Title, Description: scope.Description, ImagePath: scope.ImagePath,TypeName:TypeName.NumericQuestion }


                scope.$emit(QuestionEvents.QuestionCreated, ret);
                initialize();

            };

            scope.$on(QuestionDirectiveEvents.ParentClosed, (event, message) => {
                initialize();

            })

            scope.Cancel = () => {


                initialize();
                scope.$emit(QuestionDirectiveEvents.ChildClosed);


            };

        }


        return ret;

    }



}
 