  module Admin.Constants {

      export  class TypeName {
         static MultiChoiceQuestion = "MultiChoiceQuestion";
         static DescriptiveQuestion = "DescriptiveQuestion";
         static NumericQuestion = "NumericQuestion";
         static RangeQuestion = "RangeQuestion";

      }
      export class BaseTypeName {
          static Questions = "Questions";
 
      }

      export class QuestionEvents {
          static CreateQuestion = "CreateQuestion";
          static QuestionCreated = "QuestionCreated";
          static QuestionEdited = "QuestionEdited";
          static EditQuestion = "EditQuestion";
     }

      export  class CommonEvents {
         static OperationCanceld ="OperationCanceld";

     }

      export  class QuestionDirectiveEvents {
         static ParentClosed = "ParentClosed";
         static ChildClosed = "ChildClosed";
     }


      export   class Action {
         static Add = "Add";
         static Edit = "Edit";
         static Details = "Details";
     }

 }
