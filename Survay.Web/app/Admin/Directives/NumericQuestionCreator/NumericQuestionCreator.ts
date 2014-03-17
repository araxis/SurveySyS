



module Admin.directives {

    interface INumericQuestionCreatorScope extends ng.IScope {

        Title: string;
        Description: string;
        ImagePath: string;
        CreateQuestion(): void;
        Cancel(): void;

    }

    import Constants = Admin.Constants;
    export function NumericQuestionCreator() {


        var ret: ng.IDirective = {};

        ret.priority = 0;
        ret.restrict = "AE";
        ret.scope = {};
        //ret.scope = { onQuestionCreated: '&' };
        ret.transclude = true;
        ret.templateUrl = "../app/Admin/Directives/NumericQuestionCreator/NumericQuestionCreator.html";
        ret.replace = true;
        ret.link = (scope: INumericQuestionCreatorScope, element, attrs)=> {


            var initialize = ()=> {
                scope.Title = '';
                scope.Description = '';
                scope.ImagePath = '';
            };

            initialize();

            scope.CreateQuestion = ()=> {
                var qu = { Title: scope.Title, Description: scope.Description, ImagePath: scope.ImagePath, TypeName: Constants.TypeName.NumericQuestion };


                scope.$emit(Constants.QuestionEvents.QuestionCreated, qu);
                initialize();

            };

            scope.$on(Constants.QuestionDirectiveEvents.ParentClosed, (event, message)=> {
                initialize();

            });

            scope.Cancel = ()=> {


                initialize();
                scope.$emit(Constants.QuestionDirectiveEvents.ChildClosed);


            };

        };


        return ret;

    }



}
 