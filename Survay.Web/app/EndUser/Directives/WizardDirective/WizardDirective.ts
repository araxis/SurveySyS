module App.directives {

    export function WizardDirective(): ng.IDirective {

        var ret: ng.IDirective = {};

        ret.priority = 0;
        ret.restrict = "A";
        ret.scope = { pages: '=' };
        ret.transclude = true;
        ret.templateUrl = "../app/EndUser/Directives/WizardDirective/WizardDirectiveView.html";
        ret.replace = true;
        ret.link = function (scope: any, element, attrs) {
            scope.index=1
            scope.setIndex = function (i: number) {
                
                scope.index = i;
            }
            }

        return ret;

    }

} 