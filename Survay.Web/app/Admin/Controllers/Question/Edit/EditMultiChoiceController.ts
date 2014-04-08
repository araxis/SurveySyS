/// <reference path="../../../adminmodule.ts" />
module Admin.Controllers.Question.Edit {




    export interface IEditMultiChoiceController {
        Title: string;
        Description: string;
        ImagePath: string;
        Choices:Array<IChoice>;
        Question: IMultiChoiceQuestion;
        AddChoice(choiceTitle: string);
        RemoveChoice(choice:IChoice);
        Edit(): void;
        EditAndExit(): void;
        Cancel(): void;
    }

    import Constants = Admin.Constants;

    export class EditMultiChoiceController implements IEditMultiChoiceController {

        //static $inject = ['$scope', 'QuestionDataService'];
        static controllerId: string = "EditMultiChoiceController";
        public Title: string = '';
        public Description: string = '';
        public ImagePath: string = '';
        public Choices:Array<IChoice>=[];
        public Question: IMultiChoiceQuestion = undefined;

        constructor(private $scope: ng.IScope, private dataService: IQuestionDataService) {


            $scope.$on(Constants.QuestionEvents.EditQuestion, this.EditQuestion);

        }

        Edit(): void {

            if (this.Question == undefined) {
                return;
            }

            this.Question.Title = this.Title;
            this.Question.Description = this.Description;
            this.Question.ImagePath = this.ImagePath;
            this.Question.Choices = this.Choices;
            this.$scope.$emit(Constants.QuestionEvents.QuestionCreated, this.Question);
        }

        EditAndExit(): void{}

        Cancel(): void {
            this.$scope.$emit(Constants.CommonEvents.OperationCanceld);
        }

        AddChoice(choiceTitle: string): void {
            if (choiceTitle == '') {
                return;
            }
            var item =<IChoice>{ Id:0,Title: choiceTitle };
            this.Choices.push(item);
            choiceTitle = '';
        }

        RemoveChoice(choice:IChoice) {
            var i = this.Choices.indexOf(choice);
            if (i != -1) {
                this.Choices.splice(i, 1);
            }

       }

        private Initialize(question: IMultiChoiceQuestion): void {
            if (this.Question == undefined) {
                return;
            }


            this.Title = question.Title;
            this.Description = question.Description;
            this.ImagePath = question.ImagePath;
            this.Choices = question.Choices;

        }

        private Reset(): void {
            this.Title = '';
            this.Description = '';
            this.ImagePath = '';
            this.Choices = [];
            this.Question = undefined;
        }

        private EditQuestion(event: ng.IAngularEvent, question: IMultiChoiceQuestion): void {
            if (question == undefined) {
                return;
            }
            this.Question = question;
            this.Initialize(question);
        }

    }

    adminModule.controller(EditMultiChoiceController.controllerId, ['$scope', 'QuestionDataService', EditMultiChoiceController]);

}   