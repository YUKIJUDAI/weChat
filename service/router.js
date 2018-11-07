const router = require("koa-router")();
const crypto = require("crypto");

const { token } = require("./config");

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
    var sortStr = reqArray.join(""); //连接数组
    var sha1Str = sha1(sortStr);

    if (signature === sha1Str) {
        ctx.body = echostr;
    } else {
        ctx.body = "false";
        console.log("授权失败!");
    }
});

module.exports = router;
