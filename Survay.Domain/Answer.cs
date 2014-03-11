namespace Survey.Domain
{
    public  class Answer
    {
        public int Id { get; set; }
        public PageQuestion PageQuestion { get; set; }
 

    }

    //public class MultiChoiceAnswer : Answer
    //{
    //    public MultiChoiceAnswer()
    //    {
    //        Choices=new HashSet<Choice>();
    //    }
    //    public ICollection<Choice> Choices { get; set; }

    //}

    
}