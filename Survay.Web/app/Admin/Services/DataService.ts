/// <reference path="../adminmodule.ts" />

interface IAdminDataService {



    datacontext: IUnitofWork;
    GetAllQuestions(): ng.IPromise<Array<IQuestion>>
    CreateQuestion(question: IQuestion): breeze.Entity
    CreateQuestion2(type: string, data: any): breeze.Entity

    GetPagedQuestions(pagesize: number, page: number): ng.IPromise<IResult<IQuestion>>
    SaveChanges(): ng.IPromise<breeze.SaveResult>
}

interface IResult<T> {

    inlineCount: number;
    Results: Array<T>;

}

module Admin.Services {

    export class DataService implements IAdminDataService {
        //static $inject = ['DbContext', '$q'];
        static serviceId: string = "DataService";
        constructor(public datacontext: IUnitofWork, private $q: ng.IQService) {
            var aa = '';
        }

        public GetAllQuestions(): ng.IPromise<Array<IQuestion>> {
            var query = this.datacontext.IQueryable("Questions").expand('Choices');
            var deferred =this.$q.defer<Array<IQuestion>>();
            query.execute().then((result) => {

                var ret = <Array<IQuestion>> result.results;
                deferred.resolve(ret);


            }, (er) => {
                    var ddd = er;
                });



            return deferred.promise;

        }

        public GetPagedQuestions(pagesize: number, page: number): ng.IPromise<IResult<IQuestion>> {
            var self = this;
            var skip = (page - 1) * pagesize;
            var take = pagesize;
            var query = this.datacontext.IQueryable("Questions").orderBy('Id').skip(skip).take(pagesize).expand('Choices').inlineCount();
            var deferred = this.$q.defer<IResult<IQuestion>>();
          var total=0
            var promise = query.execute().then((data)=> {
                total = data.inlineCount;
                return query.using(breeze.FetchStrategy.FromLocalCache).execute();
            });

            promise.then((result) => {
                var ret = new Result<IQuestion>();
                ret.Results = <Array<IQuestion>> result.results;

                var added = self.datacontext.Manager.getEntities(['DescriptiveQuestion', 'NumericQuestion', 'RangeQuestion','MultiChoiceQuestion'], breeze.EntityState.Added).length;
                var removed = self.datacontext.Manager.getEntities(['DescriptiveQuestion', 'NumericQuestion', 'RangeQuestion', 'MultiChoiceQuestion'], breeze.EntityState.Deleted).length;
                ret.inlineCount = total+added-removed;
                deferred.resolve(ret);

            }, (er) => {
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

        }

        public SaveChanges(): ng.IPromise<breeze.SaveResult>{
            return this.datacontext.Save();
        }

        public CreateQuestion(question:IQuestion): breeze.Entity {

         return   this.datacontext.Manager.createEntity(question.TypeName,question);


        }

        public CreateQuestion2(type: string, data: any): breeze.Entity {

            return this.datacontext.Manager.createEntity(type, data);


        }
    }

 
    export class Result<T> implements IResult<T> {
     
  public inlineCount: number=0
  public Results: Array<T> = []
       
    }


    adminModule.service(DataService.serviceId, ['DbContext', '$q', DataService]);

}