

 interface IDataService{

    
     ToAnswerList(survey: ISurvey): Array<IAnswer>;
     GetAll(): Q.Promise<Array<IMultiChoiceQuestion>>
     GetAllSurveys(): Q.Promise<Array<ISurvey>>
}

