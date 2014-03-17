module Admin.directives {

    interface IMultiChoiceQuestionCreatorScope extends ng.IScope {

        Title: string;
        ChoiceTitle: string;
        Description: string;
        ImagePath: string;
        Choices: Array<IChoice>;
        CreateQuestion(): void;
        AddChoice();
        RemoveChoice(choice);
        Cancel(): void;
    }
    import Constants = Admin.Constants;
    export function MultiChoiceQuestionCreator() {


        var ret: ng.IDirective = {};

        ret.priority = 0;
        ret.restrict = "AE";
        ret.scope = {};
        //ret.scope = { onQuestionCreated: '&' };
        ret.transclude = true;
        ret.templateUrl = "../app/Admin/Directives/MultiChoiceQuestionCreator/MultiChoiceQuestionCreator.html";
        ret.replace = true;
        ret.link = function (scope: IMultiChoiceQuestionCreatorScope, element, attrs) {



            var initialize = () => {
                scope.Title = '';
                scope.Description = '';
                scope.ImagePath = '';
                scope.Choices = [];
                scope.ChoiceTitle=''
            }

            initialize();

            scope.CreateQuestion = () => {
                var ret = { Title: scope.Title, Description: scope.Description, ImagePath: scope.ImagePath, TypeName:Constants.TypeName.DescriptiveQuestion,Choices:scope.Choices }


                scope.$emit(Constants.QuestionEvents.QuestionCreated, ret);
                initialize();

            };

            scope.$on(Constants.QuestionDirectiveEvents.ParentClosed, (event, message) => {
                initialize();

            })

            scope.Cancel = () => {


                initialize();
                scope.$emit(Constants.QuestionDirectiveEvents.ChildClosed);


            };

            scope.AddChoice = () => {
                if (scope.ChoiceTitle =='') { return;}
                var ch = { Id: 0, Title: scope.ChoiceTitle };
                scope.Choices.push(ch);
                scope.ChoiceTitle = '';
            }

            scope.RemoveChoice = (choice) => {
             
                var i = scope.Choices.indexOf(choice);
                if (i != -1) {
                    scope.Choices.splice(i, 1);
                }
            }

        }


        return ret;

    }



}