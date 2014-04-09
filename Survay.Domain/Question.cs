using System.CodeDom;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;

namespace Survey.Domain
{
    public  class Question
    {
        public Question()
        {
            Choices = new HashSet<Choice>();
        }
        public int Id { get; set; }

        [Required]
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

    public class DescriptivQuestion : Question
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


        [Required(ErrorMessage = "Enter Title")]
        public string Title { get; set; }

        public int QuestionId { get; set; }

        public Question Question { get; set; }
    }

    


}