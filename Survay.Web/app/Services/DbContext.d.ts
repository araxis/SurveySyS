declare module App.Services {
    class DbContext implements IUnitofWork {
        private manager;
        constructor();
        private Initialize();
        public Save(): number;
        public RejectChanges(): void;
        public IQueryable(entitytype: string): breeze.EntityQuery;
    }
}
