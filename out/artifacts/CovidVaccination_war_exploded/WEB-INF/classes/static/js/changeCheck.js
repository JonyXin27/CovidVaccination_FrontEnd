// 修改个人信息
function changeCheck() {
    $(".btn-change").click(
        function () {
            $("#info").text("");
            $("span[id^='info-']").map((function (value, index, array) {
                index.innerText = "";
            }));
            const nameLen = $("#name").val().length;
            const ageLen = $("#age").val().length;
            const genderLen = $("#gender").val().length;
            const idcardLen = $("#identity_card").val().length;
            if (nameLen === 0 || ageLen === 0 || genderLen === 0 || idcardLen === 0) {
                $("#info").text("不能为空");
                return false;
            }
            if (nameLen > 10) {
                $("#info-name").text("最大长度为10");
                return false;
            } else if (ageLen > 3) {
                $("#info-age").text("最大年龄为999");
            } else if ($("#gender").val() != "女" && $("#gender").val() != "男") {
                $("#info-gender").text("只能为男女");
            } else if (idcardLen != 18) {
                $("#info-idCard").text("请输入18位");
            } else if (idcardLen === 18) {
                const idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
                if (!idcardReg.test($("#identity_card").val())) {
                    $("#info-idCard").text("身份证号码输入不合格");
                    return false;
                } else {
                    $("#info-idCard").text("");
                }
            }

            const id = $("#id").val();
            const name = $("#name").val();
            const age = $("#age").val();
            const gender = $("#gender").val();
            const idCard = $("#identity_card").val();
            const password = JSON.parse(getLocalStorage("user")).password;
            const isAdmin = JSON.parse(getLocalStorage("user")).isAdmin ;
            const msg = JSON.stringify({
                "id": id,
                "password": password,
                "name": name,
                "age": age,
                "gender": gender,
                "identity_card": idCard,
                "isAdmin": isAdmin
            });
            $.ajax({
                type: "PUT",
                url: "http://110.42.199.36:8002/user/updateUser",
                data: msg,
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    if (data.status === 200) {
                        $("#info").text("修改成功！");
                        //更新localStorage中user的信息
                        changeLocalStorage("user" , msg )
                    } else {
                        $("#info").text("修改失败！");
                    }
                }
            });
        }
    )
}