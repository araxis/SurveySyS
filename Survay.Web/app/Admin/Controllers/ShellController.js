var Admin;
(function (Admin) {
    /// <reference path="../adminmodule.ts" />
    (function (Controllers) {
        var ShellController = (function () {
            function ShellController($scope) {
                this.$scope = $scope;
                this.isCollapsed = false;
                this.aside = {
                    "title": "Title",
                    "content": "Hello Aside<br />This is a multiline message!" };
                $scope.viewModel = this;
            }
            ShellController.controllerId = "ShellController";
            return ShellController;
        })();
        Controllers.ShellController = ShellController;

        adminModule.controller(ShellController.controllerId, ['$scope', ShellController]);
    })(Admin.Controllers || (Admin.Controllers = {}));
    var Controllers = Admin.Controllers;
})(Admin || (Admin = {}));
//# sourceMappingURL=ShellController.js.map
