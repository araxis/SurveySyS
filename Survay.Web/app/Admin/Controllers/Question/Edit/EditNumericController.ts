/// <reference path="../../../adminmodule.ts" />
module Admin.Controllers.Question.Edit {




    export interface IEditNumericController {
        Title: string;
        Description: string;
        ImagePath: string;
        Question: INumericQuestion
        Edit(): void;
        EditAndExit(): void;
        Cancel(): void;
    }

    import Constants = Admin.Constants;

    export class EditNumericController implements IEditNumericController {

        //static $inject = ['$scope', 'QuestionDataService'];
        static controllerId: string = "EditNumericController";
        public Title: string = '';
        public Description: string = '';
        public ImagePath: string = '';
        public Question: INumericQuestion = undefined;

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

            this.$scope.$emit(Constants.QuestionEvents.QuestionCreated, this.Question);
        }

        EditAndExit(): void{}

        Cancel(): void {
            this.$scope.$emit(Constants.CommonEvents.OperationCanceld);
        }



        private Initialize(question: INumericQuestion): void {
            if (this.Question == undefined) {
                return;
            }


            this.Title = question.Title;
            this.Description = question.Description;
            this.ImagePath = question.ImagePath;

        }

        private Reset(): void {
            this.Title = '';
            this.Description = '';
            this.ImagePath = '';
            this.Question = undefined;
        }

        private EditQuestion(event: ng.IAngularEvent, question: IDescriptiveQuestion): void {
            if (question == undefined) {
                return;
            }
            this.Question = question;
            this.Initialize(question);
        }

    }

    adminModule.controller(EditNumericController.controllerId, ['$scope', 'QuestionDataService',EditNumericController]);

}  