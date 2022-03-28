<%--
  Created by IntelliJ IDEA.
  User: 86133
  Date: 2022/1/19
  Time: 10:54
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>admin头部</title>
    <script src="../static/js/jquery-3.2.1.js"></script>
    <script src="../static/js/localStorage.js"></script>
    <script src="../static/js/show.js"></script>
    <script src="../static/js/admin_head.js"></script>
    <link rel="stylesheet" href="../static/css/admin_head.css">
    <link rel="stylesheet" href="../static/css/base.css">
</head>

<body>
<div class="header w">
    <div class="hd-left">
        <ul>
            <li id="user-management">用户管理
                <ul class="dropmenu drop-user" style="display: none;">
                    <li><a href="user_add.jsp">增加用户</a></li>
                    <li><a href="user_search.jsp">查找用户</a></li>
                </ul>
            </li>
            <li id="vaccine-management">疫苗接种管理
                <ul class="dropmenu  drop-vaccine" style="display: none;">
                    <li><a href="vaccine_add.jsp">增加疫苗接种记录</a></li>
                    <li><a href="vaccine_delete.jsp">删除疫苗接种记录</a></li>
                    <li><a href="vaccine_change.jsp">修改疫苗接种记录</a></li>
                    <li><a href="vaccine_search.jsp">查询疫苗接种记录</a></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="hd-right">
        <ul>
            <li><a href="admin_msg.jsp" id="link-msg"></a></li>
            <li><a href="../index.jsp" id="exit">退出</a></li>
            <li><a href="javascript:void(0)" id="logout">注销</a></li>
        </ul>
    </div>
</div>
<script>

</script>
</body>

</html>
