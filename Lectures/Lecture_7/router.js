import { fileResponse, startServer } from "./server.js";
export { processReq }

startServer();

function processReq(req, res) {

    let baseURL = 'http://' + req.headers.host + '/';    //https://github.com/nodejs/node/issues/12682
    let url=new URL(req.url,baseURL);
    let searchParms=new URLSearchParams(url.search);
    let queryPath=decodeURIComponent(url.pathname); //Convert uri encoded special letters (eg æøå that is escaped by "%number") to JS string

    switch (req.method) {
        case "POST": {
            let pathElements=queryPath.split("/");
            switch (pathElements[1]) {
                case "Somewhere to post":
                break;
            default:
                // Error: Resource doesn't exist
                break;
            }
        }
            break;
        case "GET": {
            let pathElements=queryPath.split("/");
            console.log(pathElements);
            switch (pathElements[1]) {
                case "":
                    fileResponse(res, "/index.html")
                    break;
                default:
                    fileResponse(res, req.url);
                    break;
            }
        }
    }
}