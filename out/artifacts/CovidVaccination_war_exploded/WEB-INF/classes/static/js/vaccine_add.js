window.onload =  function () {
    $(".btn-register").click(function () {
        const id = $("#id").val();
        const dose = $("#dose").val();
        const time = $("#time").val();
        const lot_num = $("#lot_num").val();
        const manufacturer = $("#manufacturer").val();
        const clinic = $("#clinic").val();
        if(id === "" || dose === "" || time === ""|| lot_num === ""|| manufacturer === ""|| clinic === ""){
            alert("不能为空！");
            return false;
        }
        $.ajax({
            type: "POST",
            url: "http://110.42.199.36:8002/vero/addRecord",
            data: JSON.stringify({
                "id": id,
                "dose": dose,
                "time": time,
                "lot_number": lot_num,
                "manufacturer": manufacturer,
                "clinic": clinic,
            }),
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                if (data.status === 200) {
                    $("#info").text("提示:添加成功");
                    alert("添加成功！");
                    window.location.href = "vaccine_add.jsp";
                } else  {
                    $("#info").text("提示:添加失败...");
                }
            }
        });
    })
    vaccineAddCheck();
}
// 添加疫苗接种信息检验
function vaccineAddCheck() {
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
}