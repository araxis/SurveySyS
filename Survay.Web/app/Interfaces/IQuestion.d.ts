interface IQuestion extends breeze.Entity {
    Id: number;
    Title: string;
    Description: string;
    ImagePath: string;
    TypeName: string;
}
interface IChoice {
    Id: number;
    Title: string;
}
interface IMultiChoiceQuestion extends IQuestion {
    Choices: IChoice[];
    IsMultiSelect: boolean;
}
