var App;
(function (App) {
    (function (Services) {
        var DataService = (function () {
            function DataService(datacontext, $q) {
                this.datacontext = datacontext;
                this.$q = $q;
            }
            DataService.prototype.ToAnswerList = function (survey) {
                var ret = new Array();

                //_.forEach(survey.Pages, (page) => {
                //    _.forEach(page.Questions, (question) => {
                //    })
                //});
                return ret;
            };

            DataService.prototype.GetAll = function () {
                var query = this.datacontext.IQueryable("Surveys").expand('Pages');
                var deferred = Q.defer();
                query.execute().then(function (result) {
                    var ret = result.results;

                    deferred.resolve(ret);
                }, function (er) {
                    var ddd = er;
                });

                return deferred.promise;
            };

            DataService.prototype.GetAllSurveys = function () {
                var query = this.datacontext.IQueryable("Surveys").expand('Pages.Questions.Question.Choices');
                var deferred = Q.defer();
                query.execute().then(function (result) {
                    var ret = result.results;
                    var tt = ret[0].Pages[0].Id;
                    deferred.resolve(ret);
                }, function (er) {
                    var ddd = er;
                });

                return deferred.promise;
            };
            DataService.$inject = ['DbContext', '$q'];
            return DataService;
        })();
        Services.DataService = DataService;
    })(App.Services || (App.Services = {}));
    var Services = App.Services;
})(App || (App = {}));
//# sourceMappingURL=DataService.js.map
