
interface IAdminDataService {


   
    datacontext: IUnitofWork;
    GetAllQuestions(): ng.IPromise<Array<IQuestion>>
    CreateQuestion(question: IQuestion): breeze.Entity
    CreateQuestion2(type:string,data:any): breeze.Entity

    GetPagedQuestions(pagesize: number, page: number): ng.IPromise<IResult<IQuestion>>
    SaveChanges(): ng.IPromise<breeze.SaveResult>
}

interface IResult<T>{

     inlineCount: number;
     Results: Array<T>;

}
 