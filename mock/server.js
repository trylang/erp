let express = require('express');
let app = express();
let fs = require('fs');
let bodyParser = require('body-parser');
app.use(bodyParser.json());

function read(cb){
    fs.readFile('./data.json','utf-8',function(err,data){
        if(err || data.length === 0){
            cb([])
        }else{
            cb(JSON.parse(data))
        }
    });
}
function write(data,cb){
    fs.writeFile('./data.json',JSON.stringify(data),cb)
}

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

app.get('/api/building',function(req,res){
    read(function(datajson){
        res.json(datajson);
    });
});
app.get('/api/onedata',function(req,res){
    read(function (datajson) {
        let bookdata = datajson.find(item => item.id === parseInt(req.query.id));
        if (!bookdata) bookdata = {};
        res.setHeader('Content-Type', 'application/json;charset=utf8');
        res.end(JSON.stringify(bookdata));
    })
});
app.post('/api/addbuilding',function(req,res){
    let buildings =  req.body;
    read(function(datajson){
        buildings.id = datajson.length?datajson[datajson.length-1].id+1:1;
        datajson.push(buildings);
        write(datajson,function(){
            res.json(buildings)
        })
    })

});
app.post('/api/deldata',function(req,res){
    read(function (datajson) {
        datajson = datajson.filter(item=>item.id !== req.body.id);
        write(datajson,function () {
            res.end(JSON.stringify({}));
        });
    });
});
app.post('/api/update',function(req,res){
    let buildings =  req.body;
    read(function(datajson){
        datajson = datajson.map(item=>{
            if(item.id === parseInt(req.query.id)){
                return buildings
            }
            return item;
        });
        write(datajson,function(){
            res.json(buildings)
        })
    })
});

app.listen(3000,function(){
    console.log('服务已经启动');
});