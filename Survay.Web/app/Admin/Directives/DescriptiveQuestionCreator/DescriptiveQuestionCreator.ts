



module Admin.directives {

    interface IDescriptiveCreatorScope extends ng.IScope   {

        Title: string;
        Description: string;
        ImagePath: string;
        CreateQuestion(): void;
        Cancel(): void;
    }

    export function DescriptiveQuestionCreator() {


        var ret: ng.IDirective = {};

        ret.priority = 0;
        ret.restrict = "AE";
        ret.scope = {};
        //ret.scope = { onQuestionCreated: '&' };
        ret.transclude = true;
        ret.templateUrl = "../app/Admin/Directives/DescriptiveQuestionCreator/DescriptiveQuestionCreator.html";
        ret.replace = true;
        ret.link = function (scope: IDescriptiveCreatorScope, element, attrs) {



            var initialize = () => {
                scope.Title = '';
                scope.Description = '';
                scope.ImagePath = '';
            }

            initialize();

            scope.CreateQuestion = () => {
                var ret = { Title: scope.Title, Description: scope.Description, ImagePath: scope.ImagePath, TypeName: TypeName.DescriptiveQuestion}


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
