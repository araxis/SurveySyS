/// <reference path="../../../adminmodule.ts" />
module Admin.Controllers.Question.Edit {




    export interface IEditDescriptiveController {
        Title: string;
        Description: string;
        ImagePath: string;
       

        Edit(): void;
        EditAndExit():void;

        Cancel(): void;
    }

    import Constants = Admin.Constants;

    export class EditDescriptiveController implements IEditDescriptiveController {

        //static $inject = ['$scope', 'QuestionDataService', '$state'];
        static controllerId: string = "EditDescriptiveController";
        public Title: string = '';
        public Description: string = '';
        public ImagePath: string = '';
        private  Question: IDescriptiveQuestion =undefined;

        constructor(private $scope: ng.IScope, private questionDataService: IQuestionDataService, $state: ng.ui.IStateService) {

            var p = $state.params['id'];

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
  
        private LoadQuestion(id: number) {
            //var query = this.datacontext.IQueryable(Constants.BaseTypeName.Questions).where();
            

        }

        private Initialize(question: IDescriptiveQuestion): void {
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

    adminModule.controller(EditDescriptiveController.controllerId, ['$scope', 'QuestionDataService', '$state',EditDescriptiveController]);

} 