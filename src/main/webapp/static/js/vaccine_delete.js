window.onload = function () {
    $("#delete-confirm").click(function () {
        if (isNaN($("#serial").val())) {
            alert("序号只能为数字！");
        } else if (confirm("你确定要该删除疫苗接种记录吗？")) {
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
                        alert("删除成功！");
                        window.location.href = "vaccine_delete.jsp";
                    } else {
                        alert("删除失败，该序号疫苗不存在！");
                    }
                }
            });
        }
    });
}