var url = (window.url = "http://localhost:80/");

(function($) {
    $.get(window.url + "getToken", function(res) {
        window.token = res.token;
    });
})(jQuery);


$(function(){
    $.get(url + "getIP" , function(res){
        res = JSON.parse(res);
        console.log("获得IP为" + res.ip_list.join("\n"))
    });
});
