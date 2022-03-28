let isAdmin = false;
$(function () {
    console.log("网页加载完毕...index.js...");
    loginCheck();
})

// 账号和密码校验
function loginCheck() {
    $("#id").keyup(
        function () {
            if (isNaN($("#id").val())) {
                $("#info-id").text("提示:账号只能为数字");
                $(".btn-login").prop("disabled", true);
            }
            else {
                $("#info-id").text("");
                $(".btn-login").prop("disabled", false);
            }
        }
    )
    $("#pwd").keyup(
        function () {
            if ($("#pwd").val().length < 8 || $("#pwd").val().length > 18) {
                $("#info-pwd").text("提示:密码为8-18位");
                $(".btn-login").prop("disabled", true);
            }
            else {
                $("#info-pwd").text("");
                $(".btn-login").prop("disabled", false);
            }
        }
    )
    $(".btn-login").click(function () {
        const id = $("#id").val();
        const passwd = $("#pwd").val();
        $.ajax({
            type: "POST",
            url: "http://110.42.199.36:8002/user/loginUser",
            data: JSON.stringify({
                "id": id,
                "password": passwd
            }),
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                if (data.status === 200) {
                    if (data.data.isAdmin === 0 && !isAdmin) {
                        setLocalStorage("user" , JSON.stringify(data.data));
                        $("#info").text("提示:登陆成功，跳转中...");
                        window.location.href = "/user/user_index.jsp";
                    } else if ( data.data.isAdmin === 1 && isAdmin) {
                        setLocalStorage("admin" , JSON.stringify(data.data));
                        $("#info").text("提示:登陆成功，跳转中...");
                        window.location.href = "/admin/admin_index.jsp";
                    }else{
                        $("#info").text("提示:请切换用户/管理员登录");
                    }
                }else{
                    $("#info").text("提示:账号或密码错误！");
                }
            }
        });
    })
}

// 用户管理员切换
function dentityConversion(val) {
    if(val === "user"){
        $(".hd-user").css("font-weight", "700");
        $(".hd-admin").css("font-weight", "400");
        isAdmin = false;
    }else if(val === "admin"){
        $(".hd-user").css("font-weight", "400");
        $(".hd-admin").css("font-weight", "700");
        isAdmin = true;
    }
}