const express = require("express");
const app = express();
const path = require("path");
const http = require("http");

const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

io.on("connection",function(socket){
    socket.on("send-location",function(data){
        io.emit("receive-location",{id : socket.id, ...data});
    });
    socket.on("disconnected",function(data){
        io.emit("user-disconnected",socket.id);
    });
    
    console.log("connected");
})

app.get("/",(req,res)=>{
    res.render("index");
});

server.listen(3000);