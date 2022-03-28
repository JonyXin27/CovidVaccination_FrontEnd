//localStorage
// 设置
function setLocalStorage(name , data){
    if (!window.localStorage) {
        alert("浏览器不支持localstorage");
    } else {
        window.localStorage.setItem(name,data);
    }
}
//获取
function getLocalStorage(name){
    if (!window.localStorage) {
        alert("浏览器不支持localstorage");
    } else {
        return window.localStorage.getItem(name);
    }
}
//删除
function removeLocalStorage(name){
    if (!window.localStorage) {
        alert("浏览器不支持localstorage");
    } else {
        window.localStorage.removeItem(name);
    }
}
//修改
function changeLocalStorage(name , data) {
    if (!window.localStorage) {
        alert("浏览器不支持localstorage");
    } else {
        return window.localStorage[name] = data;
    }
}
// setLocalStorage();
// getLocalStorage();
// removeLocalStorage();