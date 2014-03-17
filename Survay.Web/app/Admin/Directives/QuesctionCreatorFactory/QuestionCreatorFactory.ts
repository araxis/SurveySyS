module Admin.directives {


    //function Selector(questionType) {

    //    var ret = '';
    //    switch (questionType) {
    //        case 'Descriptive':
    //            ret = '<div data-descriptive-questioncreator ></div>';
    //            break;
    //        case 'Numeric':
    //            ret = '<div data-numeric-question-creator></div>';
    //            break;
    //        case 'MultiSelect':
    //            ret = '<div data-numeric-Question-Creator></div>';
    //            break;
    //        case 'SingleSelect':
    //            ret = '<div data-app-singleselect data-question="question"></div>';
    //            break;
    //        default:
    //            ret = '<div></div>';

    //    }
    //    return ret;
    //};
    // QuestionCreatorFactory.$inject = ['$compile'];
    //($compile: ng.ICompileService)



    interface IQuestionCreatorFactoryScope extends ng.IScope {
        questionType: any;
        Collapced: boolean;
        Collapse(): void;
        state: string;

    }
    import Constants = Admin.Constants;
    export function QuestionCreatorFactory() {
        var ret: ng.IDirective = {};

        ret.priority = 0;
        ret.restrict = "AE";
        ret.scope = { questionType: '=',state:'=',question:'='};
        //ret.scope = { questionType: '=', onCreated: '&' };
        ret.transclude = true;
        ret.templateUrl = '../app/Admin/Directives/QuesctionCreatorFactory/QuestionCreatorFactory.html';
        ret.replace = true;
        ret.link = (scope: IQuestionCreatorFactoryScope, element: ng.IAugmentedJQuery, attrs) => {
           
            
            scope.Collapced = true;

            scope.Collapse = ()=> {
                scope.Collapced = true;
                scope.questionType = undefined;
                scope.$broadcast(Constants.QuestionDirectiveEvents.ParentClosed);

            };

            scope.$on(Constants.QuestionDirectiveEvents.ChildClosed, (event, message)=> {
                scope.Collapced = true;
                scope.questionType = undefined;
            });

    


            scope.$watch(
                "questionType",
                (newValue, oldValue)=> {
                    if (newValue == undefined) {
                        scope.Collapced = true;
                    }
                    else {
                        scope.Collapced = false;
                    }
                   
                    //var dr = Selector(newValue);
                    //var newElement = $compile(dr)(scope);
                    //var yy = angular.element('#pb');
                    //yy.empty();
                    //yy.append(newElement);
              

                });
            scope.$watch(
                "state",
                (newValue, oldValue) => {

                    var xx = newValue;


                });

         
        };


        return ret;

    }


}