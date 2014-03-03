var Admin;
(function (Admin) {
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
            ShellController.$inject = ['$scope'];
            return ShellController;
        })();
        Controllers.ShellController = ShellController;
    })(Admin.Controllers || (Admin.Controllers = {}));
    var Controllers = Admin.Controllers;
})(Admin || (Admin = {}));
//# sourceMappingURL=ShellController.js.map
