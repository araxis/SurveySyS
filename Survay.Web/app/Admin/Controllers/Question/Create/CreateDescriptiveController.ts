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
       
        constructor(private $scope: ng.IScope, private questionDataService: IQuestionDataService,private $state:ng.ui.IStateService) {
            
        }

        Create(): void {
            var ret = {Id: 0, Title: this.Title, Description: this.Description, ImagePath: this.ImagePath};
            var cr=   this.questionDataService.CreateQuestion(Constants.TypeName.DescriptivQuestion, ret);
            this.$scope.$emit(Constants.QuestionEvents.QuestionCreated, cr);
            this.ClearForm();
        }

        Cancel(): void {
            //this.$scope.$emit(Constants.CommonEvents.OperationCanceld);
            this.$state.go('QuestionCenter.All');
        }

  

        CreateAndExit(): void {
            this.Create();
            this.$state.go('QuestionCenter.All');

        }

        private ClearForm() {
            this.Title = '';
            this.Description = '';
            this.ImagePath = '';
        }

    }
    adminModule.controller(CreateDescriptiveController.controllerId, ['$scope', 'QuestionDataService', '$state',CreateDescriptiveController]);
}



