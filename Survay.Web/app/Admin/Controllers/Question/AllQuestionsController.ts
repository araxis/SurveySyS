/// <reference path="../../adminmodule.ts" />


module Admin.Controllers.Question {
    export interface IQuestionsScope extends ng.IScope {
        viewModel: AllQuestionsController;
    }



    import Constants = Admin.Constants;


    export class AllQuestionsController {
      
        static controllerId: string = "AllQuestionsController";

        public isCollapsed: boolean;
        public Questions: Array<any>;
        public Pagesize: number;
        public TotalItems: number;
        public CurrentPage: number; 
        public selectedQ: any; 
        public mode: string; 
        constructor(private $scope: IQuestionsScope, private questionDataService: IQuestionDataService,private eventaggregator:ngEventAgregator.IEventAggragator) {

            this.isCollapsed = true;
            this.Pagesize = 10;
            this.TotalItems = 0;
            this.CurrentPage = 1;
            this.selectedQ = undefined;
            this.Questions = [];
            this.mode = '';
            
            //$scope.$on(Constants.QuestionEvents.QuestionCreated, (event, message)=> {
            //    var x = message;
            //    //var x = $scope.viewModel.questionDataService.CreateQuestion(message);
            //    //$scope.viewModel.Questions.push(x);
            //});

            this.eventaggregator.on(Constants.QuestionEvents.QuestionCreated, (qu)=> {
                this.load(1);
            });
            $scope.viewModel = this;

            this.load(1);

        }

        Save(): void {

            this.questionDataService.SaveChanges().then(()=> {
                alert("Everythings Done");
            });

        }

        Search(str: string): void{

        }

        Remove(question: IQuestion): void{

            question.entityAspect.setDeleted();
            var i = this.Questions.indexOf(question);
            if (i != -1) {
                this.Questions.splice(i, 1);
            }

          
           
        }

        load(page:number): void{

            var self = this;

            this.questionDataService.GetPagedQuestions(this.Pagesize, page).then((data)=> {


                self.Questions = data.Results;
                self.TotalItems = data.inlineCount;

            });
        }

        test(id: number): void {
            alert(id);
        }

    }

    adminModule.controller(AllQuestionsController.controllerId, ['$scope', 'QuestionDataService','eventAggregator', AllQuestionsController]);
} 