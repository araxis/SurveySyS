
module App.directives {

    export function MultiSelectDirective()  {


        var ret: ng.IDirective = {};
        ret.priority = 0;
        ret.restrict = "A";
        ret.scope = { question: '=' };
        ret.transclude = true;
        ret.templateUrl = "../app/EndUser/Directives/MultiItemQuestion/MultiSelectView.html";
        ret.replace = true;
        ret.link= function (scope:any, element, attrs) {
                scope.toggleSelection = function (choice: IChoice) {
                    var idx = scope.question.Value.indexOf(choice);
                  
                    if (idx > -1) {
                        scope.question.Value.splice(idx, 1);
                    }

                    // is newly selected
                    else {
                        scope.question.Value.push(choice);
                    }
                }
            }


        return ret;
       
    }

}  