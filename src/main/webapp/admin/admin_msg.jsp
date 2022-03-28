<%--
  Created by IntelliJ IDEA.
  User: 86133
  Date: 2022/1/19
  Time: 12:19
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>admin个人信息</title>
    <script src="../static/js/admin_msg.js"></script>
    <link rel="stylesheet" href="../static/css/admin_msg.css">
</head>
<body>
<div class="header w">
    <%@include file="admin_head.jsp"%>
</div>
<div class="msg-self" id="msg-self">
    <div class="self-hd">
        <h3>个人信息</h3>
    </div>
    <div class="self-bd">
        <ul>
            <li><label for="id">账号：</label><input type="text" class="inp" id="id" placeholder="请输入账号"
                                                   readonly="readonly" maxlength="11" required>
                <span id="info-id" class="error"></span>
            </li>
            <li><label for="name">姓名：</label> <input type="text" class="inp" id="name" maxlength="10"
                                                      placeholder="请输入姓名" required>
                <span id="info-name" class="error"></span>
            </li>
            <li><label for="age">年龄：</label> <input type="number" class="inp" id="age" max="9999"
                                                    placeholder="请输入年龄" required>
                <span id="info-age" class="error"></span>
            </li>
            <li><label for="gender">性别：</label><input type="text" class="inp" name="gender" id="gender"
                                                       placeholder="请输入性别（男/女）">
                <span id="info-gender" class="error"></span>
            </li>
            <li><label for="identity_card">身份证：</label> <input type="text" class="inp" id="identity_card"
                                                               minlength="18" maxlength="18" placeholder="请输入18位身份证" required>
                <span id="info-idCard" class="error"></span>
            </li>
            <li>
                <button class="btn-change">修改</button>
            </li>
        </ul>
        <span class="error" id="info"></span>
    </div>
</div>
</div>
</body>
</html>
