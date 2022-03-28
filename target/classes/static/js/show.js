// 显示个人信息
function showSelfMsg(name){
    const selfMsg = JSON.parse(getLocalStorage(name));
    const input = $(".self-bd>ul>li>input");
    input[0].setAttribute("value" , selfMsg.id);
    input[1].setAttribute("value" ,selfMsg.name);
    input[2].setAttribute("value" ,selfMsg.age);
    input[3].setAttribute("value" ,selfMsg.gender);
    input[4].setAttribute("value" ,selfMsg.identity_card);
}
// 获取疫苗接种信息
//1.全部
function getAllVaccinationMsg(selectorName) {
    console.log("getAllVaccinationMsg...");
    $.ajax({
        type: "POST",
        url: "http://110.42.199.36:8002/vero/searchAllRecord",
        dataType: "json",
        contentType: "application/json",
        success: function (data) {
            if (data.status === 200) {
                setLocalStorage("vaccine", JSON.stringify(data.data));
                addVaccinationMsg(selectorName);
            }
        }
    });
}
//2.其他
/*
 * getVaccinationMsg(selectorName , option ,value)
 *    selectorName 要显示疫苗信息table的选择器名称
 *    option 筛选方式，有"Id" , "Dose" , "Time" ,"Lot_number" , "Manufacturer" , "Clinic"
 *    value 筛选方式的筛选值
 */
function getVaccinationMsg(selectorName , option , value){
    console.log("getVaccinationMsg...");
    if(arguments.length === 1 || option === ""){ //查找全部疫苗接种数据
        getAllVaccinationMsg(selectorName);
        return;
    }else if(arguments.length === 2) {//按id查找
        value = JSON.parse(getLocalStorage("user")).id;
    }
    $.ajax({
        type: "GET",
        url: "http://110.42.199.36:8002/vero/searchRecordBy"+ option+ "/"+ value,
        dataType: "json",
        contentType: "application/json",
        success: function (data) {
            if (data.status === 200) {
                setLocalStorage("vaccine", JSON.stringify(data.data));
                addVaccinationMsg(selectorName);
            }
        }
    });
}
//2.


// 页面增加疫苗接种信息
function addVaccinationMsg(selectorName){
    console.log("addVaccinationMsg...");
    const vaccine = JSON.parse(getLocalStorage("vaccine"));
    for(const obj of vaccine){
        let trow = $("<tr></tr>");
        trow.append("<td>"+obj.serial +"</td>");
        trow.append("<td>"+obj.id +"</td>");
        trow.append("<td>"+obj.dose +"</td>");
        trow.append("<td>"+obj["time"] +"</td>");
        trow.append("<td>"+obj.lot_number +"</td>");
        trow.append("<td>"+obj.manufacturer +"</td>");
        trow.append("<td>"+obj.clinic +"</td>");
        $(selectorName).append(trow);
    }
}

//显示疫苗信息admin
function showVaccinationMsg(){
    const selfMsg = JSON.parse(getLocalStorage("vaccine"));
    const input = $(".register>ul>li>input");
    input[0].setAttribute("value" , selfMsg.serial);
    input[1].setAttribute("value" ,selfMsg.id);
    input[2].setAttribute("value" ,selfMsg.dose);
    input[3].setAttribute("value" ,selfMsg.time);
    input[4].setAttribute("value" ,selfMsg.lot_number);
    input[5].setAttribute("value" ,selfMsg.manufacturer);
    input[6].setAttribute("value" ,selfMsg.clinic);
}
