interface IUnitofWork {
    Save(): number;
    RejectChanges(): void;
    IQueryable(entitytype: string): breeze.EntityQuery;
}
