
module Admin.directives {

    interface IDescriptiveEditorScope extends ng.IScope {

        Title: string;
        Description: string;
        ImagePath: string;
        Submit(): void;
        Cancel(): void;
        question:IDescriptiveQuestion;
    }
    import Constants = Admin.Constants;
    export function DescriptiveQuestionEditor() {


        var ret: ng.IDirective = {};

        ret.priority = 0;
        ret.restrict = "AE";
        ret.scope = {question:'='};
        //ret.scope = { onQuestionCreated: '&' };
        ret.transclude = true;
        ret.templateUrl = "../app/Admin/Directives/Editor/DescriptiveQuestionEditor/DescriptiveQuestionEditor.html";
        ret.replace = true;
        ret.link = (scope: IDescriptiveEditorScope)=> {


            var initialize = ()=> {
                scope.Title = scope.question.Title;
                scope.Description = scope.question.Description;
                scope.ImagePath = scope.question.ImagePath;
            };

        

            scope.Submit = ()=> {
            
                scope.question.Title = scope.Title;
                scope.question.Description = scope.Description;
                scope.question.ImagePath = scope.ImagePath;

                scope.$emit(Constants.QuestionEvents.QuestionEdited, scope.question);
                initialize();

            };

            scope.$on(Constants.QuestionDirectiveEvents.ParentClosed, ()=> {
                initialize();

            });

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


            scope.Cancel = ()=> {


                initialize();
                scope.$emit(Constants.QuestionDirectiveEvents.ChildClosed);


            };

        };


        return ret;

    }



} 