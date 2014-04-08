/// <reference path="../../../adminmodule.ts" />
module Admin.Controllers.Question.Create {


  

   export  interface ICreateDescriptiveController {
       Title: string;
       Description: string;
       ImagePath: string;
       Create(): void;
       CreateAndExit(): void;
       Cancel(): void;

   

   }

    import Constants= Admin.Constants;

    export class CreateDescriptiveController implements   ICreateDescriptiveController {

        //static $inject = ['$scope', 'QuestionDataService'];
        static controllerId: string = "CreateDescriptiveController";
        public Title: string = '';
        public Description: string = '';
        public ImagePath: string = '';
       
        constructor(private $scope: ng.IScope, private questionDataService: IQuestionDataService) {
            
        }

        Create(): void {
            var ret = {Id: 0, Title: this.Title, Description: this.Description, ImagePath: this.ImagePath};
            this.questionDataService.CreateQuestion(Constants.TypeName.DescriptiveQuestion, ret);
            this.$scope.$emit(Constants.QuestionEvents.QuestionCreated, ret);
        }

        Cancel(): void {
            this.$scope.$emit(Constants.CommonEvents.OperationCanceld);
        }

  

        CreateAndExit():void {}

    }
    adminModule.controller(CreateDescriptiveController.controllerId, ['$scope', 'QuestionDataService',CreateDescriptiveController]);
}



