/// <reference path="../adminmodule.ts" />

var Admin;
(function (Admin) {
    (function (Services) {
        var DataService = (function () {
            function DataService(datacontext, $q) {
                this.datacontext = datacontext;
                this.$q = $q;
                var aa = '';
            }
            DataService.prototype.GetAllQuestions = function () {
                var query = this.datacontext.IQueryable("Questions").expand('Choices');
                var deferred = this.$q.defer();
                query.execute().then(function (result) {
                    var ret = result.results;
                    deferred.resolve(ret);
                }, function (er) {
                    var ddd = er;
                });

                return deferred.promise;
            };

            DataService.prototype.GetPagedQuestions = function (pagesize, page) {
                var self = this;
                var skip = (page - 1) * pagesize;
                var take = pagesize;
                var query = this.datacontext.IQueryable("Questions").orderBy('Id').skip(skip).take(pagesize).expand('Choices').inlineCount();
                var deferred = this.$q.defer();
                var total = 0;
                var promise = query.execute().then(function (data) {
                    total = data.inlineCount;
                    return query.using(breeze.FetchStrategy.FromLocalCache).execute();
                });

                promise.then(function (result) {
                    var ret = new Result();
                    ret.Results = result.results;

                    var added = self.datacontext.Manager.getEntities(['DescriptiveQuestion', 'NumericQuestion', 'RangeQuestion', 'MultiChoiceQuestion'], breeze.EntityState.Added).length;
                    var removed = self.datacontext.Manager.getEntities(['DescriptiveQuestion', 'NumericQuestion', 'RangeQuestion', 'MultiChoiceQuestion'], breeze.EntityState.Deleted).length;
                    ret.inlineCount = total + added - removed;
                    deferred.resolve(ret);
                }, function (er) {
                    var ddd = er;
                });

                //query.execute().then((result) => {
                //    var ret = new Result<IQuestion>();
                //    ret.Results = <Array<IQuestion>> result.results;
                //    ret.inlineCount = result.inlineCount;
                //    deferred.resolve(ret);
                //}, (er) => {
                //        var ddd = er;
                //    });
                return deferred.promise;
            };

            DataService.prototype.SaveChanges = function () {
                return this.datacontext.Save();
            };

            DataService.prototype.CreateQuestion = function (question) {
                return this.datacontext.Manager.createEntity(question.TypeName, question);
            };

            DataService.prototype.CreateQuestion2 = function (type, data) {
                return this.datacontext.Manager.createEntity(type, data);
            };
            DataService.serviceId = "DataService";
            return DataService;
        })();
        Services.DataService = DataService;

        var Result = (function () {
            function Result() {
                this.inlineCount = 0;
                this.Results = [];
            }
            return Result;
        })();
        Services.Result = Result;

        adminModule.service(DataService.serviceId, ['DbContext', '$q', DataService]);
    })(Admin.Services || (Admin.Services = {}));
    var Services = Admin.Services;
})(Admin || (Admin = {}));
//# sourceMappingURL=DataService.js.map
