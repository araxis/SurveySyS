var breezeDbContextModule = angular.module('breezeDbContext', []);

var App;
(function (App) {
    (function (Services) {
        var DbContext = (function () {
            function DbContext() {
                //breeze.config.initializeAdapterInstance("modelLibrary", "backingStore", true);
                this.Manager = new breeze.EntityManager("/breeze/Data");

                this.Initialize();
            }
            DbContext.prototype.Initialize = function () {
                var _this = this;
                this.Manager.fetchMetadata().then(function () {
                    _this.Manager.metadataStore.setEntityTypeForResourceName('Surveys', 'SurveyModel');
                    _this.Manager.metadataStore.setEntityTypeForResourceName('DescriptivQuestions', 'DescriptivQuestion');
                    _this.Manager.metadataStore.registerEntityTypeCtor('Question', questionCtor, questionInit);
                    _this.Manager.metadataStore.registerEntityTypeCtor('PageQuestion', PageQuestionCtor, PageQuestionInit);
                }, function (err) {
                    var tt = err;
                });
            };

            DbContext.prototype.Save = function () {
                return this.Manager.saveChanges();
            };

            DbContext.prototype.RejectChanges = function () {
            };

            DbContext.prototype.IQueryable = function (entitytype) {
                var query = breeze.EntityQuery.from(entitytype).using(this.Manager);
                return query;
            };
            DbContext.serviceId = "DbContext";
            return DbContext;
        })();
        Services.DbContext = DbContext;
        breezeDbContextModule.service(DbContext.serviceId, [DbContext]);
    })(App.Services || (App.Services = {}));
    var Services = App.Services;
})(App || (App = {}));
function questionCtor() {
    this.TypeName = "";
}

function questionInit(entity) {
    entity.TypeName = entity.entityType.shortName;
}

function PageQuestionCtor() {
    this.Answer = undefined;
    this.TypeName = '';
}

function PageQuestionInit(entity) {
    switch (entity.Question.TypeName) {
        case 'DescriptivQuestion':
            entity.Answer = "";
            entity.TypeName = 'DescriptivQuestion';
            break;
        case 'NumericQuestion':
            entity.Answer = -1;
            entity.TypeName = 'NumericQuestion';
        case 'MultiChoiceQuestion':
            // var q = <IMultiChoiceQuestion>(entity.Question);
            entity.Answer = new Array();
            entity.TypeName = 'MultiChoiceQuestion';

            break;
        default:
    }
}
//export var instance = new DbContext();
//# sourceMappingURL=DbContext.js.map
