const path = require("path");

const Koa = require("koa");
const cors = require("koa2-cors");
const static = require("koa-static");
const views = require("koa-views");
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");

const router = require("./router");
const Init = require("./main");

const app = new Koa();

// 跨域
app.use(cors());

// 路由
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

// 日志
app.use(logger());

// 静态文件
app.use(
    views(__dirname + "/views", {
        map: { html: "ejs" }
    })
);
app.use(static(__dirname + "./views"));


//初始化
// const init = new Init;
// init.getAccessToken();

// listen
app.listen(80, function() {
    console.log("connect success in 80");
});
