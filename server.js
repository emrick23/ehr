const express=required("express");
const path=required("path");

const app = express();

app.use(express.static(_dirname + '/dist/virtual-site'));

app.get('/*', function(req,res){
    res.sendFile(path.join(_dirname + '/dist/virtual-site/index.html'))
});


app.listen(process.env.PORT);