module Admin.directives {

    interface IMultiChoiceQuestionEditorScope extends ng.IScope {

      
        Submit(): void;
        AddChoice();
        RemoveChoice(choice);
        ChoiceTitle:string;
        Cancel(): void;
        question: IMultiChoiceQuestion;
        tempQuestion:IMultiChoiceQuestion;

    }
    import Constants = Admin.Constants;
    export function MultiChoiceQuestionEditor() {


        var ret: ng.IDirective = {};

        ret.priority = 0;
        ret.restrict = "AE";
        ret.scope = {};
        //ret.scope = { onQuestionCreated: '&' };
        ret.transclude = true;
        ret.templateUrl = "../app/Admin/Directives/Editor/MultiChoiceQuestionEditor/MultiChoiceQuestionEditor.html";
        ret.replace = true;
        ret.link = (scope: IMultiChoiceQuestionEditorScope, element, attrs)=> {


            var initialize = ()=> {
                if (scope.question == undefined) {
                    return;
                }
                scope.tempQuestion = <IMultiChoiceQuestion> {};
                scope.tempQuestion.Title = scope.question.Title;
                scope.tempQuestion.Description = scope.question.Description;
                scope.tempQuestion.ImagePath = scope.question.ImagePath;
                scope.tempQuestion.Choices = scope.question.Choices;
            };


            scope.$watch(
                "question", (newValue, oldValue)=> {
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

            scope.Submit = ()=> {
                scope.question.Title = scope.tempQuestion.Title;
                scope.question.Description = scope.tempQuestion.Description;
                scope.question.ImagePath = scope.tempQuestion.ImagePath;
                scope.question.Choices = scope.tempQuestion.Choices;


                scope.$emit(Constants.QuestionEvents.QuestionCreated, scope.question);
                initialize();

            };

            scope.$on(Constants.QuestionDirectiveEvents.ParentClosed, (event, message)=> {
                initialize();

            });

            scope.Cancel = ()=> {


                initialize();
                scope.$emit(Constants.QuestionDirectiveEvents.ChildClosed);


            };

            scope.AddChoice = ()=> {
                if (scope.ChoiceTitle == '') {
                    return;
                }
                var ch = { Id: 0, Title: scope.ChoiceTitle };
                scope.tempQuestion.Choices.push(ch);
                scope.ChoiceTitle = '';
            };

            scope.RemoveChoice = (choice)=> {

                var i = scope.tempQuestion.Choices.indexOf(choice);
                if (i != -1) {
                    scope.tempQuestion.Choices.splice(i, 1);
                }
            };

        };


        return ret;

    }



}