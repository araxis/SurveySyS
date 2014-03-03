using System.Web.Mvc;

namespace Survey.Web.Controllers
{
    public class AdminController : Controller
    {
        //
        // GET: /Admin/
        public ActionResult Index()
        {
            BundleConfig.CreatModuleBundel("Admin");
            return View();
        }
	}
}