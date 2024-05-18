const fs=require('fs');

const requestHandler=(req,res)=>{
    const url = req.url;
    const method = req.method;
    
    if(url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button>Submit</button></form>');
        res.end();
    }
    const body=[];
    req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);
    });

    req.on('end',()=>{
        const parseBody=Buffer.concat(body).toString();
        console.log(parseBody);
        fs.writeFileSync('file.txt',parseBody)
    })
    console.log(req.url);
    if(url === '/message' && method ==='POST'){
        console.log(url,method);
        res.setHeader('Content-Type','text/html');
        res.write('<p>fgsd<p>');
        res.end();
    }
}



// module.exports=requestHandler

// module.exports.routes=requestHandler;
// module.exports.hander='sometext';

exports.routes=requestHandler;
exports.hander='sometext';