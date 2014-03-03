using System;
using System.Collections.Generic;

namespace Survey.Domain
{
    public class SurveyModel
    {
        public int Id { get; set; }
        public SurveyModel()
        {
            Pages=new List<Page>();
        }
        public string Title { get; set; }
        public string Description { get; set; }

        //public DateTime StartDate { get; set; }
        //public DateTime EndDate { get; set; }


        public List<Page> Pages { get; set; }



    }
}
