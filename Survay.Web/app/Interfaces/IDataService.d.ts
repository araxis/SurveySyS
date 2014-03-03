interface IDataService {
    ToAnswerList(survey: ISurvey): IAnswer[];
    GetAll(): Q.Promise<IMultiChoiceQuestion[]>;
    GetAllSurveys(): Q.Promise<ISurvey[]>;
}
