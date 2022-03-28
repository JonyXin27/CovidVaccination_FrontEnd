<%--
  Created by IntelliJ IDEA.
  User: 86133
  Date: 2022/1/19
  Time: 11:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>查找用户</title>
    <script src="../static/js/user_search.js"></script>
    <link rel="stylesheet" href="../static/css/user_index.css">
    <link rel="stylesheet" href="../static/css/user_search.css">
    <style>

    </style>
</head>

<body>
<div class="header w">
    <%@include file="admin_head.jsp"%>
</div>
<!-- 查找并修改用户信息 -->
<!-- 删除用户 -->
<div id="user-delete">
    <input type="text" name="id" id="id" placeholder="请输入要查找的用户账号" maxlength="11" required>
    <button id="user-search">查找</button>
    <button id="delete-confirm" style="display: none;">删除</button>
</div>

<div class="msg-self" id="msg-self" style="display: none;">
    <div class="self-hd">
        <h3>个人信息</h3>
    </div>
    <div class="self-bd">
        <ul>
            <li><label for="id">账号：</label><input type="text" class="inp"  placeholder="请输入账号"
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
</body>

</html>
