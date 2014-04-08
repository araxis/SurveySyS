/// <reference path="../adminmodule.ts" />
module Admin.Filters {
    import Constants = Admin.Constants;
    export class QuestionToEditLink {
        static serviceId: string = "QuestionToEditLink";
         filter(question: IQuestion) {
            var ret = '';
            switch (question.TypeName) {
                case Constants.TypeName.DescriptiveQuestion:
                    ret = '#/questionCenter/edit/descriptive/';
                    break;
                case Constants.TypeName.NumericQuestion:
                    ret = '#/questionCenter/edit/numeric/';
                    break;
                case Constants.TypeName.MultiChoiceQuestion:
                    ret = '#/questionCenter/edit/multichoice/';
                    break;

                default:
            }
            return ret + question.Id;
        }
    }


    adminModule.filter(QuestionToEditLink.serviceId, () => {
        return (question: IQuestion) => {
          return   new QuestionToEditLink().filter(question);
        };
    });
} 