using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
namespace PersonalAPI.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        private readonly IWebHostEnvironment _hostingEnvironment;
        private readonly ILogger<DataController> _logger;

        public DataController(ILogger<DataController> logger,IWebHostEnvironment hostingEnvironment)
        {
            _logger = logger;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        [Route("GetResume")]
        public IActionResult GetResume()
        {
            //return the pdf file data/Resume1.0.pdf
            try
            {
                // Get the path to the "data" folder using the web host environment
                string dataFolderPath = Path.Combine(_hostingEnvironment.ContentRootPath, "data");
                //if the file Resume1.0.pdf does not exist, return a 404
                if (!System.IO.File.Exists(Path.Combine(dataFolderPath, "Resume1.0.pdf")))
                {
                    return NotFound();
                }
                //if the file Resume1.0.pdf exists, return the file
                string pdfFilePath = Path.Combine(dataFolderPath, "Resume1.0.pdf");
                var fileStream = new FileStream(pdfFilePath, FileMode.Open, FileAccess.Read);
                var contentType = "application/pdf";
                var fileDownloadName = "Ryan Tullis Resume.pdf"; // The name the browser will suggest for the download.

                return File(fileStream, contentType, fileDownloadName);

            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting resume");
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
