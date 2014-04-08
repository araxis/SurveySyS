module Admin.Controllers {
    
    export interface IQuestionCenterController {
        
    }

    export class QuestionCenterController implements IQuestionCenterController {
        static controllerId: string = "QuestionCenterController";

        static $inject = ['$state'];
        constructor($state: ng.ui.IStateService) {
            $state.go("QuestionCenter.All");
        }
    }

    adminModule.controller(QuestionCenterController.controllerId, ['$state', QuestionCenterController]);
} 