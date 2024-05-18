
const routing=(req,res)=>{
    const url=req.url;
    const method=req.method;
    console.log(url);
    if(url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<h1>Hello</h1>')
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button>Submit</button></form>');
        res.end();
        return;
    }
    if(url === '/users'){
        res.setHeader('Content-Type','text/html');
        res.write('<ul><li>User1</li><li>User2</li><li>User3</li></ul>');
        res.end();
        return;
    }
    
    if(url === '/create-user'){
        const body=[];
        let value=''
        req.on('data',(chunk)=>{
            // console.log(chunk);
            body.push(chunk);
        });

        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            // console.log(parseBody);
            value=parseBody
            console.log(value);

        })
        console.log("gnh",value);
        res.setHeader('Content-Type','text/html');
        res.write('<p>');
        res.write('<ul><li>User1</li><li>User2</li><li>User3</li></ul>');
        res.write(value);
        res.write('</p>');
        res.end();
        return;
    }
};

exports.routing=routing;