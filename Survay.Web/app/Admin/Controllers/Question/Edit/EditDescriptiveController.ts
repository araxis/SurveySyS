module Admin.Controllers.Question.Edit {




    export interface IEditDescriptiveController {
        Title: string;
        Description: string;
        ImagePath: string;
        Question: IDescriptiveQuestion
        Submit(): void;
        Cancel(): void;
    }

    import Constants = Admin.Constants;

    export class EditDescriptiveController implements IEditDescriptiveController {

        static $inject = ['$scope', 'dataService'];

        public Title: string = '';
        public Description: string = '';
        public ImagePath: string = '';
        public Question: IDescriptiveQuestion =undefined;

        constructor(private $scope: ng.IScope, private dataService: IAdminDataService) {
           

            $scope.$on(Constants.QuestionEvents.EditQuestion, this.EditQuestion);

        }

        Submit(): void {
            
            if (this.Question == undefined) {
                return;
            }

            this.Question.Title = this.Title;
            this.Question.Description = this.Description;
            this.Question.ImagePath = this.ImagePath;

            this.$scope.$emit(Constants.QuestionEvents.QuestionCreated, this.Question);
        }

        Cancel(): void {
            this.$scope.$emit(Constants.CommonEvents.OperationCanceld);
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

} 