



module Admin.directives {

    interface IDescriptiveCreatorScope extends ng.IScope   {

        Title: string;
        Description: string;
        ImagePath: string;
        CreateQuestion(): void;
        Cancel(): void;
    }

    import Constants = Admin.Constants;

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


            var initialize = ()=> {
                scope.Title = '';
                scope.Description = '';
                scope.ImagePath = '';
            };

            initialize();

            scope.CreateQuestion = () => {
                var ret = { Title: scope.Title, Description: scope.Description, ImagePath: scope.ImagePath, TypeName: Constants.TypeName.DescriptivQuestion };


                scope.$emit(Admin.Constants.QuestionEvents.QuestionCreated, ret);
              initialize();

            };

            scope.$on(Admin.Constants.QuestionDirectiveEvents.ParentClosed, (event, message)=> {
                initialize();

            });

            scope.Cancel = () => {


                initialize();
                scope.$emit(Admin.Constants.QuestionDirectiveEvents.ChildClosed);
               

            };

            }


        return ret;

    }



}
