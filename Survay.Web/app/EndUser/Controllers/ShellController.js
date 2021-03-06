var EndUser;
(function (EndUser) {
    (function (Controllers) {
        var ShellController = (function () {
            function ShellController($scope, $state, DataService) {
                this.$scope = $scope;
                this.$state = $state;
                this.DataService = DataService;
                this.Answers = [];
                this.totalItems = 64;
                this.currentPage = 4;
                this.maxSize = 5;

                this.Test = { Id: 1, TypeName: 'MultiSelect', Title: 'Multi Select Question', Description: 'User Can Select Muli Items', Choices: [{ Id: 1, Title: 'ch1' }, { Id: 2, Title: 'c2' }], Value: [] };
                this.Test3 = { Id: 2, TypeName: 'SingleSelect', Title: 'Multi Select Question', Description: 'User Can Select Just One Item', Choices: [{ Id: 1, Title: 'g1' }, { Id: 2, Title: 'g2' }], Value: [] };
                this.Test2 = { Id: 3, TypeName: 'DescriptiveQuestion', Title: 'Text Question', Description: 'User Enter Text', Value: "Empty" };
                var Test4 = { Id: 4, TypeName: 'SingleSelect', Title: 'Multi Select Question 4', Description: 'User Can Select Just One Item', Choices: [{ Id: 3, Title: 'o1' }, { Id: 4, Title: 'o2' }], Value: [] };
                var Test5 = { Id: 5, TypeName: 'DescriptiveQuestion', Title: 'Text Question 5', Description: 'User Enter Text', Value: "Empty" };
                var Test6 = { Id: 6, TypeName: 'MultiSelect', Title: 'Multi Select Question 6', Description: 'User Can Select Muli Items', Choices: [{ Id: 1, Title: 'ch1' }, { Id: 2, Title: 'c2' }], Value: [] };
                this.Questions = new Array();
                this.Questions.push(this.Test);
                this.Questions.push(this.Test2);
                this.Questions.push(this.Test3);
                this.Questions.push(Test4);
                this.Questions.push(Test5);
                this.Questions.push(Test6);
                this.Page1 = { HeaderTitle: 'Page1', Description: 'Description Of Page1', Questions: [Test4, Test5, Test6, this.Test3] };
                this.Page2 = { HeaderTitle: 'Page2', Description: 'Description Of Page2', Questions: [this.Test, this.Test2] };
                this.Survey = { Title: 'Survey1', Description: 'Description Of Survey1', Pages: [this.Page1, this.Page2] };

                $scope.viewModel = this;
                //this.$location.path('/Home');
                //  DataService.GetAllSurveys();
            }
            ShellController.prototype.DoSubmit = function () {
                var _this = this;
                this.Answers = [];
                this.Questions.forEach(function (q) {
                    _this.Answers.push(q.Value);
                });
            };
            ShellController.$inject = ['$scope', '$state', 'DataService'];
            return ShellController;
        })();
        Controllers.ShellController = ShellController;
    })(EndUser.Controllers || (EndUser.Controllers = {}));
    var Controllers = EndUser.Controllers;
})(EndUser || (EndUser = {}));
//# sourceMappingURL=ShellController.js.map
