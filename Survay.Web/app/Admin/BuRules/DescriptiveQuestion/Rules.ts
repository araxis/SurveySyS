/// <reference path="../../adminmodule.ts" />


interface IDescriptiveQuestionService {

    GetById(id: Number): ng.IPromise<IDescriptiveQuestion>
}

module Admin.BuRules.DescriptiveQuestion{
    
    import Constants = Admin.Constants;

    export class Queries {

        static serviceId: string = "Queries";
       
        constructor(private datacontext: IUnitofWork) {

        }

        public IdEqual(id: number): breeze.Predicate {

            var ret = new breeze.Predicate('Id', '==', id);

            return ret;
        }

        public All(): breeze.EntityQuery {
            
            var query = breeze.EntityQuery.from(Constants.Repositories.DescriptivQuestions).using(this.datacontext.Manager);
            return query;
        }

      public GetById(id: number):breeze.EntityQuery {
          return this.All().where(this.IdEqual(id));
      }

    }


  
    export class DescriptiveQuestionService implements IDescriptiveQuestionService{


        static serviceId: string = "DescriptiveQuestionService";

      constructor(private dbcontext:IUnitofWork,private $q:ng.IQService) {
          
      }

        public GetById(id: Number):ng.IPromise<IDescriptiveQuestion> {
            var query = this.dbcontext.IQueryable(Constants.Repositories.DescriptivQuestions);
            var deferred = this.$q.defer<IDescriptiveQuestion>();
            var where = new breeze.Predicate('Id', '==', id);
            query = query.where(where);
            query.execute().then((result)=> {
                var ret = <Array<IDescriptiveQuestion>> result.results;
                if (ret.length<=0) {
                    deferred.resolve(undefined);
                }
                deferred.resolve(ret[0]);
            },(err)=> {
                alert(err.message);
            });
            return deferred.promise;
        }

       
    }


    adminModule.factory(Queries.serviceId, ['DbContext', Queries]);
    adminModule.service(DescriptiveQuestionService.serviceId, ['DbContext','$q', DescriptiveQuestionService]);
}

