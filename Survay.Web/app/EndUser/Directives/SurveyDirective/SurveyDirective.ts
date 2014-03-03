module App.directives {

    export function SurveyDirective():ng.IDirective {

        var ret: ng.IDirective = {};

        ret.priority = 0;
        ret.restrict = "A";
        ret.scope = { survey: '=' };
        ret.transclude = true;
        ret.templateUrl = "../app/EndUser/Directives/SurveyDirective/SurveyDirectiveView.html";
        ret.replace = true;


        return ret;

    }

} 