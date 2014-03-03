/// <reference path="ianswer.ts" />


     interface IPage {
        Id: number;
        HeaderTitle: string;
        Description: string;
       // Survay: ISurvey;
        Questions: Array<IPageQuestion>;
    }
 