using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PersonalShowSystem.Controllers
{
    public class HomeController : Controller
    {
        //首页
        public ActionResult Index()
        {
            return View();
        }

        //工作经历
        public ActionResult Experence()
        {
            ViewBag.Message = "工作经历";

            return View();
        }

        //教育经历
        public ActionResult Education()
        {
            ViewBag.Message = "教育经历";

            return View();
        }

        //个人生活
        public ActionResult Livelihood()
        {
            ViewBag.Message = "个人生活";

            return View();
        }

        //个人博客
        public ActionResult Wordpress()
        {
            ViewBag.Message = "个人博客";

            return View();
        }

        //社会评价
        public ActionResult Evaluation()
        {
            ViewBag.Message = "社会评价dd";

            return View();
        }
    }
}
