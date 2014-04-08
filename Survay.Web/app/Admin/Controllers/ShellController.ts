/// <reference path="../adminmodule.ts" />
module Admin.Controllers {
    export interface IMuduleScope extends ng.IScope {
        viewModel: ShellController;
    }

    export class ShellController {
 
        static controllerId: string = "ShellController";
        public isCollapsed: boolean;
        public aside: any;
        constructor(private $scope: IMuduleScope) {

            this.isCollapsed = false;
            this.aside = {
                "title": "Title",
                "content": "Hello Aside<br />This is a multiline message!"};
            $scope.viewModel = this;

        }

    }

    adminModule.controller(ShellController.controllerId, ['$scope', ShellController]);
} 