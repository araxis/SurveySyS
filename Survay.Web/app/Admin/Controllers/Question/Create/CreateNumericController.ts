module Admin.Controllers.Question.Create {


    export interface ICreateNumericScope extends ng.IScope {
        viewModel: ICreateNumericController;
    }

    export interface ICreateNumericController {
        Title: string;
        Description: string;
        ImagePath: string;
        CreateQuestion(): void;
        Cancel(): void;
    }

    import Constants = Admin.Constants;

    export class CreateNumericController implements ICreateNumericController {

        static $inject = ['$scope', 'dataService'];

        public Title: string = '';
        public Description: string = '';
        public ImagePath: string = '';

        constructor(private $scope: ng.IScope, private dataService: IAdminDataService) {

        }

        CreateQuestion(): void {
            var ret = { Id: 0, Title: this.Title, Description: this.Description, ImagePath: this.ImagePath };
            this.dataService.CreateQuestion2(Constants.TypeName.NumericQuestion, ret);
            this.$scope.$emit(Constants.QuestionEvents.QuestionCreated, ret);
        }

        Cancel(): void {
            this.$scope.$emit(Constants.CommonEvents.OperationCanceld);
        }

    }

} 