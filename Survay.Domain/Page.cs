using System.Collections.Generic;

namespace Survey.Domain
{
    public class Page
    {
        public int Id { get; set; }
        public Page()
        {
            Questions=new HashSet<PageQuestion>();
        }
        public string HeaderTitle { get; set; }
        public string Description { get; set; }

        public int SurvayModelId { get; set; }
        public SurveyModel Survey { get; set; }
        public int Order { get; set; }

        public ICollection<PageQuestion> Questions { get; set; }

    }
}