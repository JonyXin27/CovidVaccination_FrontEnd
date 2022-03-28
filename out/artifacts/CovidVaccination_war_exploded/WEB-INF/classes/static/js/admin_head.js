$(function () {
    init();
    dropChange();
    logoutPrompt();
})
//��ʼ����Ϣ
function init() {
    console.log("admin_head.js....init()...");
    const admin = JSON.parse(getLocalStorage("admin"));
    $("#link-msg").text(admin.name + "���ѵ�¼");
    $(document).attr('title',(admin.name + "����ҳ"));

    //����˳�
    $("#exit").click(function () {
        removeLocalStorage("admin");
    })
}

// �������л�
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

// ע����Ϣ��ʾ
function logoutPrompt() {
    $("#logout").click(
        function () {
            if (confirm("��ȷ��Ҫע���û���")) {
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