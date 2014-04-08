

module App.Services {

    export class DataService implements IDataService {
        static $inject = ['DbContext','$q'];
        constructor(private datacontext: IUnitofWork,private $q:ng.IQService) {
            
        }

       

        public ToAnswerList(survey: ISurvey): Array<IAnswer>{

            var ret = new Array<IAnswer>();
           
            //_.forEach(survey.Pages, (page) => {
            //    _.forEach(page.Questions, (question) => {
                  
            //    })
            //});
            return ret;
        }

        public GetAll(): Q.Promise<Array<IMultiChoiceQuestion>> {
            var query = this.datacontext.IQueryable("Surveys").expand('Pages');
            var deferred = Q.defer<Array<IMultiChoiceQuestion>>();
            query.execute().then((result) => {

                var ret = <Array<IMultiChoiceQuestion>> result.results;
            
                deferred.resolve(ret);


            }, (er) => {
                var ddd = er;
            });



            return deferred.promise;

        }

        public GetAllSurveys(): Q.Promise<Array<ISurvey>> {
            var query = this.datacontext.IQueryable("Surveys").expand('Pages.Questions.Question.Choices');
            var deferred = Q.defer<Array<ISurvey>>();
            query.execute().then((result) => {

                var ret = <Array<ISurvey>> result.results;
                var tt = ret[0].Pages[0].Id;
                deferred.resolve(ret);


            }, (er) => {
                    var ddd = er;
                });



            return deferred.promise;

        }
    }

}