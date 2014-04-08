

var breezeDbContextModule = angular.module('breezeDbContext', ['breeze.angular']);

module App.Services{

    export class DbContext implements IUnitofWork {
        static serviceId: string = "DbContext";
       public  Manager: breeze.EntityManager;

        constructor() {
            //breeze.config.initializeAdapterInstance("modelLibrary", "backingStore", true);
            this.Manager = new breeze.EntityManager("/breeze/Data");
      
            this.Initialize();
        
    }


    private Initialize(): void {

            this.Manager.fetchMetadata().then(() => {
            this.Manager.metadataStore.setEntityTypeForResourceName('Surveys', 'SurveyModel');
            this.Manager.metadataStore.registerEntityTypeCtor('Question', questionCtor, questionInit);
            this.Manager.metadataStore.registerEntityTypeCtor('PageQuestion', PageQuestionCtor, PageQuestionInit);
           
          
        });


    }

  

    public Save(): ng.IPromise<breeze.SaveResult> {

        return this.Manager.saveChanges();
     
    }

    public RejectChanges(): void {

    }

    IQueryable(entitytype: string): breeze.EntityQuery {

        var query = breeze.EntityQuery.from(entitytype).using(this.Manager);
        return query;
    }



    }
    breezeDbContextModule.service(DbContext.serviceId, [DbContext]);
}
      function questionCtor ():void {
        this.TypeName = "";

     }

     function questionInit(entity): void {
        entity.TypeName = entity.entityType.shortName;

    }

    function PageQuestionCtor(): void {
        this.Answer = undefined;
        this.TypeName = '';
    }

    function PageQuestionInit(entity): void {
       
        switch (entity.Question.TypeName)

        {
            case 'DescriptiveQuestion':
                entity.Answer = "";
                entity.TypeName ='DescriptiveQuestion';
            break;
            case 'NumericQuestion':
                entity.Answer = -1;
                entity.TypeName = 'NumericQuestion';
            case 'MultiChoiceQuestion':
               // var q = <IMultiChoiceQuestion>(entity.Question);
                entity.Answer = new Array<IChoice>();
                entity.TypeName = 'MultiChoiceQuestion';
                //if (q.IsMultiSelect) {
                //    entity.TypeName = 'MultiSelect';
                //} else {
                //    entity.TypeName = 'SingleSelect';
                //}
               
            break;
            default:
 
        }


       

    }
//export var instance = new DbContext();



