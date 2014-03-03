/// <reference path="IAnswer.d.ts" />
interface IPage {
    Id: number;
    HeaderTitle: string;
    Description: string;
    Questions: IPageQuestion[];
}
