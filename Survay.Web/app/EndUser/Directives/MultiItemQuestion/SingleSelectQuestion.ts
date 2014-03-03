module App.directives {

    export function SingleSelectQuestion () {


        var ret: ng.IDirective = {};

        ret.priority = 0;
        ret.restrict = "A";
        ret.scope = { question: '=' };
        ret.transclude = true;
        ret.templateUrl = "../app/EndUser/Directives/MultiItemQuestion/SingleSelectView.html";
        ret.replace = true;
        ret.link = function (scope: any, element, attrs) {
            scope.toggleSelection = function (choice: IChoice) {
                var idx = scope.question.Value.indexOf(choice);

                if (idx == -1) {
                    scope.question.Value = [];
                    scope.question.Value.push(choice);
                }


            }





        }

        return ret;

    }

}  