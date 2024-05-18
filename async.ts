const fetchData1=(callback)=>{
    setTimeout(
        ()=>{
         callback('Done'); // this works after 2 seconds , but calls in set tymout => after 6 seconds
        },
    2000);
}

setTimeout(()=>{
    console.log("Time is done");
    fetchData1(
        (text)=>{
         console.log(text);
        }) // this function works after 4 seconds
},4000);

const fetchData=()=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("done");
        },
        2000);
    });
    return promise; // returned immeditely after the promise is created
}
// promise is a function takes a callback , with 2 arg : RESOLVE , REJECT

setTimeout(()=>{
    console.log("Time is done");
    fetchData()
        .then((text)=>{
            console.log(text);
            return fetchData();
        }).then((text2)=>{
            console.log(text2);
        })
},4000);

// 