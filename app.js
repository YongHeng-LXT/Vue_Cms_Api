const express=require("express");
const router=require("./router");

const app=express();

app.use("/",router);

const server=app.listen(1110,function () {
    const {port}=server.address();
    console.log(`Node启动成功:http://localhost:${port}`);
});