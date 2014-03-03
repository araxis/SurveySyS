module App.directives {

    export function TextQuestionDirective () {
      

            var directive: ng.IDirective = {};
            directive.priority = 0;
            directive.restrict = "A";
            directive.scope = { question: '=' };
            directive.transclude = true;
        directive.templateUrl = "../app/EndUser/Directives/TextQuestion/TextQuestionView.html";
            directive.replace = true;
           
            return directive;
        }

    
    }

 