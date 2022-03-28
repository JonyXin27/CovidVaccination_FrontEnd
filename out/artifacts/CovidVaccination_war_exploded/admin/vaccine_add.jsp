<%--
  Created by IntelliJ IDEA.
  User: 86133
  Date: 2022/1/19
  Time: 19:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>增加疫苗接种记录</title>
    <script src="../static/js/vaccine_add.js"></script>
    <link rel="stylesheet" href="../static/css/register.css">
    <link rel="stylesheet" href="../static/css/user_add.css">
</head>

<body>
<div class="header w">
    <%@include file="admin_head.jsp"%>
</div>
<div class="register">
        <ul>
            <li>
                <h3>添加疫苗接种记录</h3>
            </li>
            <li><label for="id">账号：</label> <input type="text" class="inp" id="id" placeholder="请输入账号"
                                                   maxlength="11" required>
                <span id="info-id" class="error"></span>
            </li>
            <li><label for="dose">剂次：</label> <input type="number" class="inp" id="dose" max="999"
                                                     placeholder="请输入剂次" required>
            </li>
            <li><label for="time">接种时间：</label> <input type="date" class="inp" id="time" placeholder="请输入接种时间"
                                                       required>
            </li>
            <li><label for="lot_num">疫苗批号：</label> <input type="text" class="inp" id="lot_num" placeholder="请输入疫苗批号"
                                                          required>
            </li>
            <li><label for="manufacturer">生产企业：</label> <input type="text" class="inp" id="manufacturer"
                                                               placeholder="请输入生产企业" required>
            </li>
            <li><label for="clinic">接种单位：</label> <input type="text" class="inp" id="clinic" placeholder="请输入接种单位"
                                                         required>
            </li>
            <li>
                <button class="btn-register">添加</button>
            </li>
        </ul>
    <span id="info" class="error"></span>
</div>
</body>

</html>
