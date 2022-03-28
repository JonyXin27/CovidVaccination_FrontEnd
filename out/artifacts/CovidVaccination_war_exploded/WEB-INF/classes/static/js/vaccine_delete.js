window.onload = function () {
    $("#delete-confirm").click(function () {
        if (isNaN($("#serial").val())) {
            alert("���ֻ��Ϊ���֣�");
        } else if (confirm("��ȷ��Ҫ��ɾ��������ּ�¼��")) {
            const serial = $("#serial").val();
            $.ajax({
                type: "DELETE",
                url: "http://110.42.199.36:8002/vero/deleteRecordBySerial/" + serial,
                data: JSON.stringify({
                    "serial": serial
                }),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    if (data.status === 200) {
                        alert("ɾ���ɹ���");
                        window.location.href = "vaccine_delete.jsp";
                    } else {
                        alert("ɾ��ʧ�ܣ���������粻���ڣ�");
                    }
                }
            });
        }
    });
}