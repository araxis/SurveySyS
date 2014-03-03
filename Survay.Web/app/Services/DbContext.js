var App;
(function (App) {
    (function (Services) {
        var DbContext = (function () {
            function DbContext() {
                breeze.config.initializeAdapterInstance("modelLibrary", "backingStore", true);
                this.Manager = new breeze.EntityManager("/breeze/Data");

                this.Initialize();
            }
            DbContext.prototype.Initialize = function () {
                var _this = this;
                this.Manager.fetchMetadata().then(function () {
                    _this.Manager.metadataStore.setEntityTypeForResourceName('Surveys', 'SurveyModel');
                    _this.Manager.metadataStore.registerEntityTypeCtor('Question', questionCtor, questionInit);
                    _this.Manager.metadataStore.registerEntityTypeCtor('PageQuestion', PageQuestionCtor, PageQuestionInit);
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
            return DbContext;
        })();
        Services.DbContext = DbContext;

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
                case 'DescriptiveQuestion':
                    entity.Answer = "";
                    entity.TypeName = 'DescriptiveQuestion';
                    break;
                case 'NumericQuestion':
                    entity.Answer = -1;
                    entity.TypeName = 'NumericQuestion';
                case 'MultiChoiceQuestion':
                    var q = (entity.Question);
                    entity.Answer = new Array();
                    if (q.IsMultiSelect) {
                        entity.TypeName = 'MultiSelect';
                    } else {
                        entity.TypeName = 'SingleSelect';
                    }

                    break;
                default:
            }
        }
    })(App.Services || (App.Services = {}));
    var Services = App.Services;
})(App || (App = {}));
//# sourceMappingURL=DbContext.js.map
