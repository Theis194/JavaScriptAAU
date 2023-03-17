// THIS APP USES ES6 MODULES  
import http from 'http';
import fs from "fs";
import path  from "path";
import process from "process";

// Exports
import { processReq } from './router.js';
export {startServer, fileResponse};

const hostname = '127.0.0.1';
const port = 3000;
// const serverName="http://localhost:3000";

/* ***************************************************************************  
  First a number of generic helper functions to serve basic files and documents 
 ***************************************************************************** */ 

/* ***                 Setup Serving of files ***                  */ 

const publicResources="Lectures/Lecture_7/PublicResources";
//secture file system access as described on 
//https://nodejs.org/en/knowledge/file-system/security/introduction/
const rootFileSystem=process.cwd();
function securePath(userPath){
  if (userPath.indexOf('\0') !== -1) {
    // could also test for illegal chars: if (!/^[a-z0-9]+$/.test(filename)) {return undefined;}
    return undefined;

  }
  userPath = path.normalize(userPath).replace(/^(\.\.(\/|\\|$))+/, '');
  userPath = publicResources + userPath;

  let p = path.join(rootFileSystem,path.normalize(userPath)); 
  //console.log("The path is:"+p);
  return p;
}


/* send contents as file as response */
function fileResponse(res, filename){
  const sPath=securePath(filename);
  console.log("Reading:"+sPath);
  fs.readFile(sPath, (err, data) => {
    if (err) {
      console.error(err);
      errorResponse(res,404,String(err));
    }else {
      res.statusCode = 200;
      res.setHeader('Content-Type', guessMimeType(filename));
      res.write(data);
      res.end('\n');
    }
  })
}

/* send a response with a given HTTP error code, and reason string */ 
function errorResponse(res, code, reason){
    res.statusCode=code;
    res.setHeader('Content-Type', 'text/txt');
    res.write(reason);
    res.end("\n");
}

function guessMimeType(fileName){
    const fileExtension=fileName.split('.').pop().toLowerCase();
    console.log(fileExtension);
    const ext2Mime ={ //Aught to check with IANA spec
      "txt": "text/txt",
      "html": "text/html",
      "ico": "image/ico", // CHECK x-icon vs image/vnd.microsoft.icon
      "js": "text/javascript",
      "json": "application/json", 
      "css": 'text/css',
      "png": 'image/png',
      "jpg": 'image/jpeg',
      "wav": 'audio/wav',
      "mp3": 'audio/mpeg',
      "svg": 'image/svg+xml',
      "pdf": 'application/pdf',
      "doc": 'application/msword',
      "docx": 'application/msword'
     };
      //incomplete
    return (ext2Mime[fileExtension]||"text/plain");
  }

/* *********************************************************************
   Setup HTTP server and route handling 
   ******************************************************************** */

const server = http.createServer(requestHandler);
function requestHandler(req,res){
  try{
   processReq(req,res);
  }catch(e){
    console.log(InternalError +"!!: " +e);
   errorResponse(res,500,"");
  }
}

function startServer(){
    /* start the server */
    server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
     fs.writeFileSync('message.txt', `Server running at http://${hostname}:${port}/`);
    });
   }