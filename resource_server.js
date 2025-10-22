const HTTP = require ('http') //node http module for http server operations.
const FS = require ('fs')  //node fs module for file system operations.
const PATH = require ('path') //node path module for file path operations.

HTTP.createServer ((req, res) =>
{
    setResponseHeaders (res);

    {
        var isInvalidAccess = true; //yeah boi, all you do is invalid until I say otherwise, no implicit trusts bro :)
        var resource; //well what does it look like?

        (req.url == "/") && (
            resource = getResource("index", "html"), //get requeste file. Yeah theres no d and so what ;)

            res.writeHead (resource["statusCode"], resource["statusText"], {
                "Content-Type": "text/html",
            } ), //set content headers.
            res.end(resource["data"]), //return data to client, why not :)

            isInvalidAccess = false //was a valid request, good guy eh :)
        );


        (/\.js$/.test(req.url)) && (
            resource = getResource(req.url.split(".")[0] ,"js"), //get requeste file.

            res.writeHead (resource["statusCode"], resource["statusText"], {
                "Content-Type": "text/javascript",
            } ), //set content headers.
            res.end(resource["data"]), //return data to client, why not :)

            isInvalidAccess = false //was a valid request, good guy eh :)
        );

        (isInvalidAccess) && ( //someone's trying to do some illegal shiit, stop em :)
            console.error("Error, Invalid resource request..."),
            res.writeHead (404, "Not Found", {
                "Contene-Type": "application/json"
            }),

            res.end("Invalid Request!")
        );
    }

}).listen (3306, 'localhost', console.log("resource will be served on http://localhost:3306/"));

function setResponseHeaders (response) //set response headers
{
    response.setHeader ("Access-Control-Allow-Origin", "*"); //allow request from all origins, don't ask me why :).
    return 0;
}

function getResource ( filename, extension )
{
    var baseDir; //base directory to find requested file.
    var fetchedFile; //non initialized declaration of fetchedFile.
    var isError = false; //no error encountered yet.

    switch (extension) {
        case "js":
            baseDir = `${__dirname}/src`;
            break;
        default:
            baseDir = __dirname;
    }

    try {
        fetchedFile = FS.readFileSync (PATH.join ( baseDir, `${filename}.${extension}` ));//data from file fetch.
    } catch (error) {
        isError = true; //oh shiit :( error encountered, gotta catch that bad boy :)
    }

    return {//all details regarding fetched file.
        "data": (isError) && "File Not Found." || fetchedFile, //has an error occured when getting file?, handle it :)
        "statusCode": ((isError) && 404 || 200), //has an error occured when getting file?, tell the status by code :)
        "statusText": ((this.statusCode === 200) && "OK" || (this.statusCode === 404) && "Error"), //now set by test :)
    }

}
