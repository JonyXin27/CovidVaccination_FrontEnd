window.onload = function () {
    registerCheck();
    checkPassword();
}

// 注册校验
function registerCheck() {
    $("#id").keyup(
        function () {
            if (isNaN($("#id").val())) {
                $("#info-id").text("提示:账号只能为数字");
                $(".btn-register").prop("disabled", true);
            }
            else {
                $("#info-id").text("");
                $(".btn-register").prop("disabled", false);
            }
        }
    )
    $("#pwd1").keyup(
        function () {
            if ($("#pwd1").val().length < 8 || $("#pwd1").val().length > 18) {
                $("#info-pwd1").text("提示:密码为8-18位");
                $(".btn-register").prop("disabled", true);
            }
            else {
                $("#info-pwd1").text("");
                $(".btn-register").prop("disabled", false);
            }
            checkPassword();
        }

    )
    $("#pwd2").keyup(
        function () {
            checkPassword();
        }
    )
    $("#identity_card").keyup(
        function () {
            if ($("#identity_card").val().length === 18) {
                const idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
                if (idcardReg.test($("#identity_card").val())) {
                    $("#info-idCard").text("身份证号码输入合格");
                    $("#info-idCard").prop("disabled", false);
                    $("#info-idCard").attr("class", "success");
                }
            } else {
                $("#info-idCard").text("不是正确的身份证号码");
                $("#info-idCard").prop("disabled", true);
                $("#info-idCard").attr("class", "error");
            }
        }
    )
    $(".btn-register").click(function () {
        const id = $("#id").val();
        const passwd = $("#pwd1").val();
        const name = $("#name").val();
        const age = $("#age").val();
        const gender = $("#gender").val();
        const idCard = $("#identity_card").val();
        const msg = JSON.stringify({
            "id": id,
            "password": passwd,
            "name": name,
            "age": age,
            "gender": gender,
            "identity_card": idCard,
        });
        $.ajax({
            type: "POST",
            url: "http://110.42.199.36:8002/user/registerUser",
            data: msg,
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                if (data.status === 10003) {
                    $("#info").text("提示:注册失败，该账号已被注册");
                } else if (data.status === 200) {
                    $("#info").text("提示:注册成功，跳转中...");
                    window.location.href = "index.jsp";
                }
            }
        });
    })
}

function checkPassword() {
    if ($("#pwd2").val().length != 0) {
        if ($("#pwd1").val() == $("#pwd2").val()) {
            if ($("#pwd1").val().length >= 8 && $("#pwd1").val().length <= 18) {
                $(".btn-register").prop("disabled", false);
            }
            $("#info-pwd2").text("前后密码一致");
            $("#info-pwd2").attr("class", "success");
        } else {
            $(".btn-register").prop("disabled", true);
            $("#info-pwd2").attr("class", "error");
            $("#info-pwd2").text("提示:前后密码不一致");
        }
    }
}