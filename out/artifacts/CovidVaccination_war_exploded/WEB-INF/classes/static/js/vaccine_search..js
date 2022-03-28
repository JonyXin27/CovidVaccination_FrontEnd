window.onload = function(){
    getVaccinationMsg(".msg-vaccine");
    vaccineSearch();
};
function vaccineSearch(){
    $("#search-options").change(function () {
        $("#search-input").prop("value" , "");
        if($("#search-options").val() === "所有疫苗接种记录"){
            //清空当前显示的数据
            $(".msg-vaccine>tbody").text("");
            $("#search-input").attr("type", "text");
            getVaccinationMsg(".msg-vaccine");
            return ;
        }
        if ($("#search-options").val() === "按接种时间查询") {
            $("#search-input").attr("type", "date");
        } else {
            $("#search-input").attr("type", "text");
        }
    })
    $(".btn-search").click(function () {
        const optionMap = {
            "所有疫苗接种记录": "",
            "按账号查询": "Id",
            "按剂次查询": "Dose",
            "按接种时间查询": "Time",
            "按疫苗批号查询": "Lot_number",
            "按生产企业批号查询": "Manufacturer",
            "按接种单位查询": "clinic",
        }
        const option = optionMap[$("#search-options").val()];
        const val = $("#search-input").val();
        if(option!= "" &&  val === "") {
            alert("输入不能为空！");
        }else if (option === "Id" && isNaN(val)) {
            alert("账号必须为数字！");
        } else if (option === "Dose" && isNaN(val)) {
            alert("剂次必须为数字！");
        }else {
            //清空当前显示的数据
            $(".msg-vaccine>tbody").text("");
            getVaccinationMsg(".msg-vaccine" , option , val);
        }
        return;
    })
}