
     interface IQuestion extends breeze.Entity{
             Id: number;
             Title: string;
             Description: string;
             ImagePath: string;
             TypeName: string;
        }

     interface IChoice{

        Id: number;
        Title: string;
    }

     interface IMultiChoiceQuestion extends IQuestion {

         Choices: Array<IChoice>;
         IsMultiSelect: boolean;
    }

     interface IDescriptiveQuestion extends IQuestion {

        

     }

     interface INumericQuestion extends IQuestion {



     }

    // enum TypeName { MultiChoiceQuestion, DescriptiveQuestion, NumericQuestion, RangeQuestion }

    