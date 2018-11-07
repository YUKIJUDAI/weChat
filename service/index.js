const path = require("path");

const Koa = require("koa");
const cors = require("koa2-cors");
const static = require("koa-static");
const views = require("koa-views");
const bodyParser = require("koa-bodyparser");

const router = require("./router");

const app = new Koa();

// 静态文件
app.use(static(__dirname + "./views"));
app.use(
    views(__dirname + "/views", {
        map: { html: "ejs" }
    })
);

// 跨域
app.use(cors());

// 路由
app.use(bodyParser());
app.use(router.routes());
app.use(indexRouter.allowedMethods());

app.listen(80);
