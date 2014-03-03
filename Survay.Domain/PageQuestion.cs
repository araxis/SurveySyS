using System.Collections.Generic;

namespace Survey.Domain
{
    public  class PageQuestion
    {
        //public PageQuestion()
        //{
        //    Answers=new List<Answer>();
        //}
        public int Id { get; set; }

        public int QuestionId { get; set; }
        public Question Question { get; set; }

        public int PageId { get; set; }
        public Page Page { get; set; }

        public int QuestionOrder { get; set; }

       
    }
}