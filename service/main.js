const request = require("request");
const { AppId, AppSecret } = require("./config");

//请求access_token
var Init = function() {};

Init.prototype.getAccessToken = function() {
    request(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${AppId}&secret=${AppSecret}`, function(
        error,
        response,
        body
    ) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    });
};

module.exports = Init;