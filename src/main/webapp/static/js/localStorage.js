//localStorage
// ����
function setLocalStorage(name , data){
    if (!window.localStorage) {
        alert("�������֧��localstorage");
    } else {
        window.localStorage.setItem(name,data);
    }
}
//��ȡ
function getLocalStorage(name){
    if (!window.localStorage) {
        alert("�������֧��localstorage");
    } else {
        return window.localStorage.getItem(name);
    }
}
//ɾ��
function removeLocalStorage(name){
    if (!window.localStorage) {
        alert("�������֧��localstorage");
    } else {
        window.localStorage.removeItem(name);
    }
}
//�޸�
function changeLocalStorage(name , data) {
    if (!window.localStorage) {
        alert("�������֧��localstorage");
    } else {
        return window.localStorage[name] = data;
    }
}
// setLocalStorage();
// getLocalStorage();
// removeLocalStorage();