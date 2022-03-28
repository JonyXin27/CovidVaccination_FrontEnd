<%--
  Created by IntelliJ IDEA.
  User: 86133
  Date: 2022/1/19
  Time: 11:00
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>添加用户</title>
    <script src="../static/js/user_add.js"></script>
    <link rel="stylesheet" href="../static/css/register.css">
    <link rel="stylesheet" href="../static/css/user_add.css">
</head>

<body>
<div class="header w">
    <%@include file="admin_head.jsp"%>
</div>
<!-- 增加用户 -->
<div class="register">
        <ul>
            <li>
                <h3>添加新用户</h3>
            </li>
            <li><label for="id">账号：</label> <input type="text" class="inp" id="id" placeholder="请输入账号"
                                                   maxlength="11" required>
                <span id="info-id" class="error"></span>
            </li>
            <li><label for="pwd1">设置密码：</label> <input type="password" class="inp" id="pwd1" minlength="8"
                                                       maxlength="18" placeholder="请输入密码" required>
                <span id="info-pwd1" class="error"></span>
            </li>
            <li><label for="pwd2">确认密码：</label> <input type="password" class="inp" id="pwd2" placeholder="请输入密码"
                                                       required>
                <span id="info-pwd2" class="error"></span>
            </li>
            <li><label for="name">姓名：</label> <input type="text" class="inp" id="name" maxlength="10"
                                                     placeholder="请输入姓名" required>
            </li>
            <li><label for="age">年龄：</label> <input type="number" class="inp" id="age" max="9999"
                                                    placeholder="请输入年龄" required>
            </li>
            <li><label for="gender">性别：</label><select name="gender" id="gender">
                <option value="女" selected>女</option>
                <option value="男">男</option>
            </select></li>
            <li><label for="identity_card">身份证</label> <input type="text" class="inp" id="identity_card"
                                                              minlength="18" maxlength="18" placeholder="请输入18位身份证" required>
                <span id="info-idCard" class="error"></span>
            </li>
            <li>
                <button class="btn-register">添加</button>
            </li>
        </ul>
    <span id="info" class="error"></span>
</div>
</body>

</html>
