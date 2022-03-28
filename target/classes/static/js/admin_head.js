$(function () {
    init();
    dropChange();
    logoutPrompt();
})
//初始化信息
function init() {
    console.log("admin_head.js....init()...");
    const admin = JSON.parse(getLocalStorage("admin"));
    $("#link-msg").text(admin.name + "，已登录");
    $(document).attr('title',(admin.name + "的主页"));

    //点击退出
    $("#exit").click(function () {
        removeLocalStorage("admin");
    })
}

// 下拉框切换
function dropChange(){
    $("#user-management").click(function () {
        if ($(".drop-user").css("display") === "block") {
            $(".drop-user").css("display", "none");
        } else {
            $(".drop-user").css("display", "block");
        }
    })
    $("#vaccine-management").click(function () {
        if ($(".drop-vaccine").css("display") === "block") {
            $(".drop-vaccine").css("display", "none");
        } else {
            $(".drop-vaccine").css("display", "block");
        }
    })
}

// 注销信息提示
function logoutPrompt() {
    $("#logout").click(
        function () {
            if (confirm("你确定要注销用户吗？")) {
                const id = $("#id").val();
                $.ajax({
                    type: "DELETE",
                    url: "http://110.42.199.36:8002/user/deleteUser/" + id,
                    data: JSON.stringify({
                        "id": id
                    }),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (data) {
                        if (data.status === 200) {
                            window.location.href = "../index.jsp";
                            removeLocalStorage("admin");
                            removeLocalStorage("user");
                            removeLocalStorage("vaccine");
                            alert("注销成功！")
                        } else {
                            alert("注销失败！")
                        }
                    }
                });
            }
        }
    )
}