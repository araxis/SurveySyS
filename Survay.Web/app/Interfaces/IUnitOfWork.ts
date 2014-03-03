interface IUnitofWork {

     Manager: breeze.EntityManager;
    Save(): ng.IPromise<breeze.SaveResult>;
    RejectChanges(): void;
    IQueryable(entitytype: string): breeze.EntityQuery;


}