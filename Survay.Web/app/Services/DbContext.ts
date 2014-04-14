

var breezeDbContextModule = angular.module('breezeDbContext',[]);

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
                this.Manager.metadataStore.setEntityTypeForResourceName('DescriptivQuestions', 'DescriptivQuestion');
                this.Manager.metadataStore.setEntityTypeForResourceName('MultiChoiceQuestions', 'MultiChoiceQuestion');
            this.Manager.metadataStore.registerEntityTypeCtor('Question', questionCtor, questionInit);
            this.Manager.metadataStore.registerEntityTypeCtor('PageQuestion', PageQuestionCtor, PageQuestionInit);
           
          
        },(err)=> {
                var tt = err;
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
            case 'DescriptivQuestion':
                entity.Answer = "";
                entity.TypeName ='DescriptivQuestion';
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



