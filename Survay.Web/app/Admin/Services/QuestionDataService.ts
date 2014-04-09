/// <reference path="../adminmodule.ts" />
module Admin.Services {

    export class QuestionDataService implements IQuestionDataService {

       // static $inject = ['DbContext', '$q'];
        static serviceId: string = "QuestionDataService";
        constructor(private  datacontext: IUnitofWork, private $q: ng.IQService) {
            var x = datacontext;
        }

        public GetAllQuestions(): ng.IPromise<Array<IQuestion>> {
            var query = this.datacontext.IQueryable("Questions").expand('Choices');
            var deferred = this.$q.defer<Array<IQuestion>>();
            query.execute().then((result) => {

                var ret = <Array<IQuestion>> result.results;
                deferred.resolve(ret);


            }, (er) => {
                    var ddd = er;
                });



            return deferred.promise; 
        }

        GetPagedQuestions(pagesize: number, page: number): ng.IPromise<IResult<IQuestion>> {
            var self = this;
            var skip = (page - 1) * pagesize;
            var take = pagesize;
            var query = this.datacontext.IQueryable("Questions").orderBy('Id').skip(skip).take(pagesize).expand('Choices').inlineCount();
            var deferred = this.$q.defer<IResult<IQuestion>>();
            var total = 0;
          var promise = query.execute().then((data) => {
                total = data.inlineCount;
                return query.using(breeze.FetchStrategy.FromLocalCache).execute();
            });

            promise.then((result) => {
                var ret = new Result<IQuestion>();
                ret.Results = <Array<IQuestion>> result.results;

                var added = self.datacontext.Manager.getEntities(['DescriptiveQuestion', 'NumericQuestion', 'RangeQuestion', 'MultiChoiceQuestion'], breeze.EntityState.Added).length;
                var removed = self.datacontext.Manager.getEntities(['DescriptiveQuestion', 'NumericQuestion', 'RangeQuestion', 'MultiChoiceQuestion'], breeze.EntityState.Deleted).length;
                ret.inlineCount = total + added - removed;
                deferred.resolve(ret);

            }, (er) => {
                    var ddd = er;
                });

      



            return deferred.promise;
        }



    SaveChanges(): ng.IPromise<breeze.SaveResult> {
        return this.datacontext.Save();
    }


     CreateQuestion(type: string, data: any): breeze.Entity {
         return this.datacontext.Manager.createEntity(type, data);
     }



    }

    adminModule.service(QuestionDataService.serviceId, ['DbContext', '$q', (dbcontext,$q)=>new QuestionDataService(dbcontext,$q)]);

}

interface IQuestionDataService {

    GetAllQuestions(): ng.IPromise<Array<IQuestion>>
    GetPagedQuestions(pagesize: number, page: number): ng.IPromise<IResult<IQuestion>>
    SaveChanges(): ng.IPromise<breeze.SaveResult>
     CreateQuestion(type: string, data: any): breeze.Entity
}
