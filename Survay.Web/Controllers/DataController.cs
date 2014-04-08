using System.Linq;
using System.Web.Http;
using Breeze.ContextProvider;
using Breeze.ContextProvider.EF6;
using Breeze.WebApi2;
using Newtonsoft.Json.Linq;
using Survey.DAL.EF;
using Survey.Domain;


namespace Survey.Web.Controllers
{
    [BreezeController]
    public class DataController : ApiController
    {
        private readonly EFContextProvider<SurvayDbContext> _contextProvider =
         new EFContextProvider<SurvayDbContext>();

        [HttpGet]
        public string Metadata()
        {
            return _contextProvider.Metadata();
        }

          [HttpGet]
          [BreezeQueryable(MaxExpansionDepth = 4)]
        public IQueryable<SurveyModel> Surveys()
          {
             
            return _contextProvider.Context.Surveys;
        }

          [HttpGet]
        public IQueryable<Question> Questions()
        {
            return _contextProvider.Context.Set<Question>();
        }

          [HttpGet]
          public IQueryable<Page> Pages()
          {
              return _contextProvider.Context.Pages;
          }

          [HttpGet]
          public IQueryable<MultiChoiceQuestion> MultiChoiceQuestions()
          {
              return _contextProvider.Context.Set<MultiChoiceQuestion>();
          }

        [HttpPost]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            return _contextProvider.SaveChanges(saveBundle);
        }

    }
}
