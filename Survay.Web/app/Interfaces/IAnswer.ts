


     interface IAnswer{

        Id: number;
        PageQuestion: IPageQuestion;
    }

     interface IDescriptiveAnswer extends IAnswer {

        Value: string;
    }

     interface INumberAnswer extends IAnswer {

        Value: number;
    }

     interface IMultiChoiceAnswer extends IAnswer {

        Value: Array<IChoice>;
    }
