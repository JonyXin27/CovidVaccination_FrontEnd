$(function(){
    getVaccinationMsg("#msg-covid" ,"Id");    //��ȡ���������Ϣ
    showSelfMsg("user");  //��ȡ������Ϣ
    init();
    changeMsg();
    logoutPrompt();
    changeCheck();
});
//��ʼ��head��name
function init() {
    const user = JSON.parse(getLocalStorage("user"));
    $("#link-msg").text(user.name + "���ѵ�¼");
    $(document).attr('title' ,(user.name + "����ҳ"));
}

// ��Ϣ�л�
function changeMsg() {
    $("#link-msg").click(
        function () {
            $("#info").text("");
            $("#msg-covid").css("display", "none");
            $("#msg-self").css("display", "block");
        }
    )
    $(".header-hd").click(
        function () {
            $("#msg-covid").css("display", "table");
            $("#msg-self").css("display", "none");
        }
    )
}

// �˳�+ע����Ϣ��ʾ
function logoutPrompt() {
    $("#exit").click(function () {
        removeLocalStorage("user");
    })

    $("#logout").click(
        function () {
            if (confirm("��ȷ��Ҫע���û���")) {
                const id = $("#id").val();
                $.ajax({
                    type: "DELETE",
                    url: "http://110.42.199.36:8002/user/deleteUser/" + id,
                    data:JSON.stringify({
                        "id": id
                    }),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (data) {
                        if (data.status === 200) {
                            window.location.href = "../index.jsp";
                            removeLocalStorage("user");
                            removeLocalStorage("vaccine");
                            alert("ע���ɹ���")
                        } else {
                            alert("ע��ʧ�ܣ�")
                        }
                    }
                });

            }
        }
    )
}

// �޸ĸ�����Ϣ
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
                $("#info").text("����Ϊ��");
                return false;
            }
            if (nameLen > 10) {
                $("#info-name").text("��󳤶�Ϊ10");
                return false;
            } else if (ageLen > 3) {
                $("#info-age").text("�������Ϊ999");
                return false;
            } else if ($("#gender").val() != "Ů" && $("#gender").val() != "��") {
                $("#info-gender").text("ֻ��Ϊ��Ů");
                return false;
            } else if (idcardLen != 18) {
                $("#info-idCard").text("������18λ");
                return false;
            } else if (idcardLen === 18) {
                const idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
                if (!idcardReg.test($("#identity_card").val())) {
                    $("#info-idCard").text("���֤�������벻�ϸ�");
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
                        $("#info").text("�޸ĳɹ���");
                        //����localStorage��user����Ϣ
                        changeLocalStorage("user" , msg )
                    } else {
                        $("#info").text("�޸�ʧ�ܣ�");
                    }
                }
            });
        }
    )
}