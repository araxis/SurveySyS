﻿module Admin.Controllers.Question.Create {


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
        CreateQuestion(): void;
        Cancel(): void;
    }

    import Constants = Admin.Constants;

    export class CreateMultiChoiceController implements ICreateMultiChoiceController {

        static $inject = ['$scope', 'dataService'];

        public Title: string = '';
        ChoiceTitle: string='';
        public Description: string = '';
        public ImagePath: string = '';
        public Choices:Array<IChoice>=[];
        constructor(private $scope: ng.IScope, private dataService: IAdminDataService) {

        }

        CreateQuestion(): void {
            var ret = { Id: 0, Title: this.Title, Description: this.Description, ImagePath: this.ImagePath, Choices: this.Choices};
            this.dataService.CreateQuestion2(Constants.TypeName.MultiChoiceQuestion, ret);
            this.$scope.$emit(Constants.QuestionEvents.QuestionCreated, ret);
        }

        Cancel(): void {
            this.$scope.$emit(Constants.CommonEvents.OperationCanceld);
        }

        AddChoice(): void { }


        RemoveChoice(choice): void{}

    }

} 