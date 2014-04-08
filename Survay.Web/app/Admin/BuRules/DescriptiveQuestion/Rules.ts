/// <reference path="../../adminmodule.ts" />
module Admin.BuRules.DescriptiveQuestion{
    
    import Constants = Admin.Constants;

    export class Rules {

        static serviceId: string = "DescriptiveQuestionRules";
       
        constructor(private datacontext: IUnitofWork) {

        }

        public IdEqual(id: number): breeze.Predicate {

            var ret = new breeze.Predicate('Id', '==', id);

            return ret;
        }

        public GetAll(): breeze.EntityQuery {
            
            var query = breeze.EntityQuery.from(Constants.BaseTypeName.Questions).using(this.datacontext.Manager);
            return query;
        }


      

    }

    adminModule.factory(Rules.serviceId, ['DbContext', Rules]);

}

