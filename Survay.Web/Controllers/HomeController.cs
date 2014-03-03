using System.Linq;
using System.Web.Mvc;
using System.Web.Optimization;
using Survey.DAL.EF;
using Survey.Domain;

namespace Survey.Web.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        public ActionResult Index()
        {

           BundleConfig.CreatModuleBundel("EndUser");
            return View();
        }


      
	}
}