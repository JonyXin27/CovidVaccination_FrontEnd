window.onload = function () {
    $("#user-search").click(function () {
        if (isNaN($("#serial").val())) {
            alert("���ֻ��Ϊ���֣�");
        } else {
            const serial = $("#serial").val();
            $.ajax({
                type: "GET",
                url: "http://110.42.199.36:8002/vero/searchRecordBySerial/" + serial,
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    if (data.status === 200) {
                        setLocalStorage("vaccine" , JSON.stringify(data.data));
                        showVaccinationMsg();
                        $(".register").css("display", "block");
                    } else {
                        alert("����ʧ�ܣ�")
                    }
                }
            });
        }
    });
    changeCheck();
}
function changeCheck() {
    $(".btn-change").click(
        function () {
            $("#info").text("");
            if ($("#id").val() === "" || $("#dose").val() === "" || $("#time").val() === "" || $("#lot_num").val() === "" || $("#manufacturer").val() === "" || $("#clinic").val() === "") {
                alert("����Ϊ�գ�");
                return false;
            }
            const serial = $("#serial").val();
            const id = $("#id").val();
            const dose = $("#dose").val();
            const time = $("#time").val();
            const lot_num = $("#lot_num").val();
            const manufacturer = $("#manufacturer").val();
            const clinic = $("#clinic").val();
            const msg = JSON.stringify({
                "serial": serial,
                "id": id,
                "dose": dose,
                "time": time,
                "lot_number": lot_num,
                "manufacturer": manufacturer,
                "clinic": clinic
            });
            $.ajax({
                type: "PUT",
                url: "http://110.42.199.36:8002/vero/updateRecord",
                data: msg,
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    if (data.status === 200) {
                        $("#info").text("�޸ĳɹ���");
                        setLocalStorage("vaccine" , JSON.stringify(data.data));
                    } else {
                        $("#info").text("�޸�ʧ�ܣ�");
                    }
                }
            });
        }
    )
}