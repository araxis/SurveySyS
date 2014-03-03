var Admin;
(function (Admin) {
    (function (Controllers) {
        var SurveyController = (function () {
            function SurveyController($scope) {
                this.$scope = $scope;
                this.isCollapsed = false;
                $scope.viewModel = this;
            }
            SurveyController.$inject = ['$scope'];
            return SurveyController;
        })();
        Controllers.SurveyController = SurveyController;
    })(Admin.Controllers || (Admin.Controllers = {}));
    var Controllers = Admin.Controllers;
})(Admin || (Admin = {}));
//# sourceMappingURL=SurveyController.js.map
