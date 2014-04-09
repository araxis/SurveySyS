using System;
using System.IO;
using System.Web.Optimization;
using WebGrease.Css.Extensions;

namespace Survey.Web
{
    public static class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.IgnoreList.Clear();
            AddDefaultIgnorePatterns(bundles.IgnoreList);

            bundles.Add(new ScriptBundle("~/bundles/vendor")
         .Include("~/Scripts/jquery-2.1.0.min.js",
         //"~/Scripts/vendor/holder.min.js",
          //"~/Scripts/vendor/respond.min.js",
          // "~/Scripts/vendor/q.min.js",
           "~/Scripts/breeze.min.js"
          
          ));

      //      bundles.Add(new ScriptBundle("~/bundles/semanticjs")
      //.Include("~/semantic/packaged/javascript/semantic.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
        "~/scripts/angular.js",
        "~/scripts/angular-animate.min.js",
        "~/scripts/ui-bootstrap-0.10.0.min.js",
         "~/Scripts/ui-bootstrap-tpls-0.10.0.min.js",              
        "~/scripts/angular-sanitize.min.js",
        "~/scripts/AngularUI/ui-router.min.js",
         "~/Scripts/breeze.angular.js",
         "~/Scripts/breeze.directives.js",
          "~/Scripts/loading-bar.js"
       ));

          

            bundles.Add(new ScriptBundle("~/bundles/Services").IncludeDirectory("~/app/Services", "*.js"));





            bundles.Add(new StyleBundle("~/bundles/bootstrap").Include(
               "~/Content/bootstrap.min.css", new CssRewriteUrlTransform()).Include(
                   "~/Content/bootstrap/bootstrap-flat.min.css", new CssRewriteUrlTransform())
                  // .Include("~/Content/bootstrap/bootstrap-flat-extras.min.css", new CssRewriteUrlTransform())
                   .Include("~/Content/font-awesome.min.css", new CssRewriteUrlTransform())
                   //.Include("~/Content/bootstrap-additions.css", new CssRewriteUrlTransform())
                   .Include("~/Content/site.css", new CssRewriteUrlTransform())
                   .Include("~/Content/breeze.directives.css", new CssRewriteUrlTransform())
                  .Include("~/Content/loading-bar.css", new CssRewriteUrlTransform())
                  .Include("~/Content/animations.css", new CssRewriteUrlTransform())
                   );

        }
        
        
        private static void AddDefaultIgnorePatterns(IgnoreList ignoreList)
        {
            if (ignoreList == null)
            {
                throw new ArgumentNullException("ignoreList");
            }

            ignoreList.Ignore("*.intellisense.js");
            ignoreList.Ignore("*-vsdoc.js");
            ignoreList.Ignore("*.debug.js", OptimizationMode.WhenEnabled);
            //ignoreList.Ignore("*.min.js", OptimizationMode.WhenDisabled);
            //ignoreList.Ignore("*.min.css", OptimizationMode.WhenDisabled);
        }

        public static void CreatModuleBundel(string module)
        {

            var bundleName = "~/bundles/" + module;
            var ret = BundleTable.Bundles.GetBundleFor(bundleName);
            if(ret!=null) return;

            ret = new ScriptBundle(bundleName);
            ////how to read file pth line by line          
            //var ret = new ScriptBundle("~/bundles/" + module);
            var modulepathstring = "~/app/" + module;
            var commonPathstring = modulepathstring + "/Common";
            var controllersPathstring = modulepathstring + "/Controllers";
            var directivesPathstring = modulepathstring + "/Directives";
            var servicesPathstring = modulepathstring + "/Services";
            var buRulesPathstring = modulepathstring + "/BuRules";
            var filtersPathstring = modulepathstring + "/Filters";
            var modulePath = System.Web.HttpContext.Current.Server.MapPath(modulepathstring);

            ret.IncludeDirectory(commonPathstring, "*.js", true);
            ret.IncludeDirectory(modulepathstring, "*.js", false);
            ret.IncludeDirectory(filtersPathstring, "*.js", false);
            ret.IncludeDirectory(servicesPathstring, "*.js", true);
            ret.IncludeDirectory(buRulesPathstring, "*.js", true);
            ret.IncludeDirectory(directivesPathstring, "*.js", true);
            ret.IncludeDirectory(controllersPathstring, "*.js", true);
         
            
            
           

            BundleTable.Bundles.Add(ret);

            //var mupath = modulepathstring + "/" + "EndUserModule.js";
            //ret.Include(mupath);
           

        }
    }
}