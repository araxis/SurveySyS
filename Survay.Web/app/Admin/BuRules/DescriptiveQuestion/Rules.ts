/// <reference path="../../adminmodule.ts" />
module Admin.BuRules.DescriptiveQuestion{
    
    import Constants = Admin.Constants;

    export class DescriptiveQuestionRules {

        static serviceId: string = "DescriptiveQuestionRules";
       
        constructor(private datacontext: IUnitofWork) {

        }

        public IdEqual(id: number): breeze.Predicate {

            var ret = new breeze.Predicate('Id', '==', id);

            return ret;
        }

        public AllQuestions(): breeze.EntityQuery {
            
            var query = breeze.EntityQuery.from(Constants.Repositories.DescriptivQuestions).using(this.datacontext.Manager);
            return query;
        }

   

      //public GetById(id: number):IDescriptiveQuestion {
          
      //}

    }

    adminModule.factory(DescriptiveQuestionRules.serviceId, ['DbContext', DescriptiveQuestionRules]);

}

