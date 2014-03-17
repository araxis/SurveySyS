

module Admin.Controllers {
    export interface IQuestionsScope extends ng.IScope {
        viewModel: QuestionsController;
    }



    import Constants = Admin.Constants;


    export class QuestionsController {
        static $inject = ['$scope','DataService'];

        public isCollapsed: boolean;
        public Questions: Array<any>;
        public Pagesize: number;
        public TotalItems: number;
        public CurrentPage: number; 
        public selectedQ: any; 
        public mode: string; 
        constructor(private $scope: IQuestionsScope, private dataService: IAdminDataService) {

            this.isCollapsed = true;
            this.Pagesize = 10;
            this.TotalItems = 0;
            this.CurrentPage = 1;
            this.selectedQ = undefined;
            this.Questions = [];
            this.mode = '';
            
            $scope.$on(Constants.QuestionEvents.QuestionCreated, (event, message)=> {
               
                var x = $scope.viewModel.dataService.CreateQuestion(message);
                $scope.viewModel.Questions.push(x);
            });
            $scope.viewModel = this;

            this.load(1);

        }

        Save(): void {

            this.dataService.SaveChanges().then(()=> {
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

            this.dataService.GetPagedQuestions(this.Pagesize, page).then((data)=> {


                self.Questions = data.Results;
                self.TotalItems = data.inlineCount;

            });
        }

        test(id: number): void {
            alert(id);
        }

    }

  
} 