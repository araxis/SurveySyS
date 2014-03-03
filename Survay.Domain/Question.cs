using System.CodeDom;
using System.Collections.Generic;

namespace Survey.Domain
{
    public  class Question
    {
        public Question()
        {
            Choices = new HashSet<Choice>();
        }
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public string ImagePath { get; set; }


        public ICollection<Choice> Choices { get; set; }
    }


    public class MultiChoiceQuestion:Question
    {
        public MultiChoiceQuestion()
        {
           
        }
      

      
    }

    public class DescriptiveQuestion : Question
    {

    }

    public class NumericQuestion : Question
    {

    }

    public class RangeQuestion : Question
    {

    }


    public class Choice
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public int QuestionId { get; set; }

        public Question Question { get; set; }
    }

    


}