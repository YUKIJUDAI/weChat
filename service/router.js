const router = require("koa-router")();
const crypto = require("crypto");
const request = require("request");
const koa2Req = require('koa2-request');

const { token, access_token } = require("./config");

//进行sha1加密
function sha1(str) {
    var shasum = crypto.createHash("sha1");
    shasum.update(str);
    str = shasum.digest("hex");
    return str;
}

// 微信接入验证
router.get("/", function(ctx, next) {
    const { signature, timestamp, nonce, echostr } = ctx.request.query;

    //对数组进行字典排序
    var reqArray = [nonce, timestamp, token];
    reqArray.sort();
    //连接数组
    var sortStr = reqArray.join("");
    var sha1Str = sha1(sortStr);

    if (signature === sha1Str) {
        ctx.body = echostr;
    } else {
        ctx.body = "false";
        console.log("授权失败!");
    }
});

// 获取token
router.get("/getToken", function(ctx, next) {
    ctx.body = { token: access_token };
});

// 获取ip
router.get("/getIP", async function(ctx, next) {
    var res = await koa2Req(`https://api.weixin.qq.com/cgi-bin/getcallbackip?access_token=${access_token}`);
    ctx.body = res.body;
});

module.exports = router;
