/// <reference path="../../Scripts/typings/underscore/underscore.d.ts" />
declare module App.Services {
    class DataService implements IDataService {
        private datacontext;
        private $q;
        static $inject: string[];
        constructor(datacontext: IUnitofWork, $q: ng.IQService);
        public ToAnswerList(survey: ISurvey): IAnswer[];
        public GetAll(): Q.Promise<IMultiChoiceQuestion[]>;
        public GetAllSurveys(): Q.Promise<ISurvey[]>;
    }
}
