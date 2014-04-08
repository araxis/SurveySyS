/// <reference path="../../../adminmodule.ts" />
module Admin.Controllers.Question.Create {


    export interface ICreateMultiChoiceScope extends ng.IScope {
        viewModel: ICreateMultiChoiceController;
    }

    export interface ICreateMultiChoiceController {
        Title: string;
        ChoiceTitle: string;
        Description: string;
        ImagePath: string;
        Choices: Array<IChoice>;
        AddChoice():void;
        RemoveChoice(choice):void;
        Create(): void;
        CreateAndExit():void;
        Cancel(): void;
    }

    import Constants = Admin.Constants;

    export class CreateMultiChoiceController implements ICreateMultiChoiceController {

        //static $inject = ['$scope', 'QuestionDataService'];
        static controllerId: string = "CreateMultiChoiceController";

        public Title: string = '';
        public  ChoiceTitle: string='';
        public Description: string = '';
        public ImagePath: string = '';
        public Choices:Array<IChoice>=[];
        constructor(private $scope: ng.IScope, private questionDataService: IQuestionDataService) {

        }

        Create(): void {
            var ret = { Id: 0, Title: this.Title, Description: this.Description, ImagePath: this.ImagePath, Choices: this.Choices};
            this.questionDataService.CreateQuestion(Constants.TypeName.MultiChoiceQuestion, ret);
            this.$scope.$emit(Constants.QuestionEvents.QuestionCreated, ret);
        }

        CreateAndExit(): void {
            
        }

        Cancel(): void {
            this.$scope.$emit(Constants.CommonEvents.OperationCanceld);
        }

        AddChoice(): void {
            
            if (this.ChoiceTitle == '') { return; }
            var ch = { Id: 0, Title: this.ChoiceTitle };
            this.Choices.push(ch);
            this.ChoiceTitle = '';

        }


        RemoveChoice(choice): void {
            
            var i = this.Choices.indexOf(choice);
            if (i != -1) {
                this.Choices.splice(i, 1);
            }
        }

    }

    adminModule.controller(CreateMultiChoiceController.controllerId, ['$scope', 'QuestionDataService', CreateMultiChoiceController]);


} 