
interface IAdminDataService {


   
    datacontext: IUnitofWork;
    GetAllQuestions(): ng.IPromise<Array<IQuestion>>

    GetPagedQuestions(pagesize: number, page: number): ng.IPromise<IResult<IQuestion>>
    SaveChanges(): ng.IPromise<breeze.SaveResult>
}

interface IResult<T>{

     inlineCount: number;
     Results: Array<T>;

}
 