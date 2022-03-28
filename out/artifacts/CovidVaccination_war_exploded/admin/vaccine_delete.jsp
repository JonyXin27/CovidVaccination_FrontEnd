<%--
  Created by IntelliJ IDEA.
  User: 86133
  Date: 2022/1/19
  Time: 19:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>删除疫苗接种记录</title>
    <script src="../static/js/vaccine_delete.js"></script>
    <link rel="stylesheet" type="text/css" href="../static/css/vaccine_delete.css">
</head>

<body>
<div class="header w">
    <%@include file="admin_head.jsp"%>
</div>
<div id="user-delete">
    <input type="text" name="serial" id="serial" placeholder="请输入序号"  required>
    <button id="delete-confirm">删除</button>
</div>
</body>

</html>
