module Admin.Controllers.Question.Create {


  

   export  interface ICreateDescriptiveController {
        Title: string;
        Description: string;
        ImagePath: string;
        CreateQuestion(): void;
       Cancel(): void;
   }

    import Constants= Admin.Constants;

    export class CreateDescriptiveController implements   ICreateDescriptiveController {

        static $inject = ['$scope', 'dataService'];

        public Title: string = '';
        public Description: string = '';
        public ImagePath: string = '';
       
        constructor(private $scope: ng.IScope, private dataService: IAdminDataService) {
            
        }

        CreateQuestion(): void {
            var ret = {Id: 0, Title: this.Title, Description: this.Description, ImagePath: this.ImagePath};
            this.dataService.CreateQuestion2(Constants.TypeName.DescriptiveQuestion, ret);
            this.$scope.$emit(Constants.QuestionEvents.QuestionCreated, ret);
        }

        Cancel(): void {
            this.$scope.$emit(Constants.CommonEvents.OperationCanceld);
        }

    }

}