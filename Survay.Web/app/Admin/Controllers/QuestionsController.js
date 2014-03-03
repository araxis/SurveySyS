var Admin;
(function (Admin) {
    (function (Controllers) {
        var QuestionsController = (function () {
            function QuestionsController($scope, DataService) {
                this.$scope = $scope;
                this.DataService = DataService;
                this.isCollapsed = true;
                this.Pagesize = 10;
                this.TotalItems = 0;
                this.CurrentPage = 1;
                this.Questions = [];
                $scope.viewModel = this;

                this.load(1);
            }
            QuestionsController.prototype.Save = function () {
                this.DataService.SaveChanges().then(function () {
                    alert("Everythings Done");
                });
            };

            QuestionsController.prototype.Search = function (str) {
            };

            QuestionsController.prototype.Remove = function (question) {
                question.entityAspect.setDeleted();
                var i = this.Questions.indexOf(question);
                if (i != -1) {
                    this.Questions.splice(i, 1);
                }
            };

            QuestionsController.prototype.load = function (page) {
                var self = this;

                this.DataService.GetPagedQuestions(this.Pagesize, page).then(function (data) {
                    self.Questions = data.Results;
                    self.TotalItems = data.inlineCount;
                });
            };
            QuestionsController.$inject = ['$scope', 'DataService'];
            return QuestionsController;
        })();
        Controllers.QuestionsController = QuestionsController;
    })(Admin.Controllers || (Admin.Controllers = {}));
    var Controllers = Admin.Controllers;
})(Admin || (Admin = {}));
//# sourceMappingURL=QuestionsController.js.map
