window.onload = function(){
    getVaccinationMsg(".msg-vaccine");
    vaccineSearch();
};
function vaccineSearch(){
    $("#search-options").change(function () {
        $("#search-input").prop("value" , "");
        if($("#search-options").val() === "����������ּ�¼"){
            //��յ�ǰ��ʾ������
            $(".msg-vaccine>tbody").text("");
            $("#search-input").attr("type", "text");
            getVaccinationMsg(".msg-vaccine");
            return ;
        }
        if ($("#search-options").val() === "������ʱ���ѯ") {
            $("#search-input").attr("type", "date");
        } else {
            $("#search-input").attr("type", "text");
        }
    })
    $(".btn-search").click(function () {
        const optionMap = {
            "����������ּ�¼": "",
            "���˺Ų�ѯ": "Id",
            "�����β�ѯ": "Dose",
            "������ʱ���ѯ": "Time",
            "���������Ų�ѯ": "Lot_number",
            "��������ҵ���Ų�ѯ": "Manufacturer",
            "�����ֵ�λ��ѯ": "clinic",
        }
        const option = optionMap[$("#search-options").val()];
        const val = $("#search-input").val();
        if(option!= "" &&  val === "") {
            alert("���벻��Ϊ�գ�");
        }else if (option === "Id" && isNaN(val)) {
            alert("�˺ű���Ϊ���֣�");
        } else if (option === "Dose" && isNaN(val)) {
            alert("���α���Ϊ���֣�");
        }else {
            //��յ�ǰ��ʾ������
            $(".msg-vaccine>tbody").text("");
            getVaccinationMsg(".msg-vaccine" , option , val);
        }
        return;
    })
}