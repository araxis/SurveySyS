module App.directives {

    export function PageDirective() {

        var ret: ng.IDirective = {};

        ret.priority = 0;
        ret.restrict = "A";
        ret.scope = { page: '=' };
        ret.transclude = true;
        ret.templateUrl = "../app/EndUser/Directives/PageDirective/PageDirectiveView.html";
        ret.replace = true;
       

        return ret;

    }

} 