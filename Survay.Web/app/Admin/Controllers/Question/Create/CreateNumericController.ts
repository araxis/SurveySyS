﻿/// <reference path="../../../adminmodule.ts" />
module Admin.Controllers.Question.Create {


    export interface ICreateNumericScope extends ng.IScope {
        viewModel: ICreateNumericController;
    }

    export interface ICreateNumericController {
        Title: string;
        Description: string;
        ImagePath: string;
        Create(): void;
        CreateAndExit():void;
        Cancel(): void;
    }

    import Constants = Admin.Constants;

    export class CreateNumericController implements ICreateNumericController {

        //static $inject = ['$scope', 'QuestionDataService'];
        static controllerId: string = "CreateNumericController";
        public Title: string = '';
        public Description: string = '';
        public ImagePath: string = '';

        constructor(private $scope: ng.IScope, private questionDataService: IQuestionDataService,private $state:ng.ui.IStateService,private eventaggregator:ngEventAgregator.IEventAggragator) {

        }

        Create(): void {
            var ret = { Id: 0, Title: this.Title, Description: this.Description, ImagePath: this.ImagePath };
          var cr=  this.questionDataService.CreateQuestion(Constants.TypeName.NumericQuestion, ret);
            this.eventaggregator.trigger(Constants.QuestionEvents.QuestionCreated, cr);
            this.ClearForm();
        }

        CreateAndExit(): void {
            this.Create();
            this.$state.go('QuestionCenter.Home.All');
        }

        Cancel(): void {
            //this.$scope.$emit(Constants.CommonEvents.OperationCanceld);
            this.$state.go('QuestionCenter.Home.All');
        }

        private ClearForm() {
            this.Title = '';
            this.Description = '';
            this.ImagePath = '';
        }

    }

    adminModule.controller(CreateNumericController.controllerId, ['$scope', 'QuestionDataService', '$state','eventAggregator',CreateNumericController]);
} 