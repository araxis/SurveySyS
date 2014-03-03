interface ISurvey extends breeze.Entity {
    Id: number;
    Title: string;
    Description: string;
    Pages: IPage[];
}
