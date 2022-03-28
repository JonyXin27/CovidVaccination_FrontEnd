<%--
  Created by IntelliJ IDEA.
  User: 86133
  Date: 2022/1/19
  Time: 20:02
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>查询疫苗接种记录</title>
    <script src="../static/js/vaccine_search..js"></script>
    <link rel="stylesheet" href="../static/css/vaccine_search.css">
</head>

<body>
<div class="header w">
    <%@include file="admin_head.jsp"%>
</div>
<div class="search-area w">
    <div class="search-hd">
        <select id="search-options">
            <option selected="selected">所有疫苗接种记录</option>
            <option>按账号查询</option>
            <option>按剂次查询</option>
            <option>按接种时间查询</option>
            <option>按疫苗批号查询</option>
            <option>按生产企业批号查询</option>
            <option>按接种单位查询</option>
        </select>
        <input type="text" name="search-input" id="search-input" placeholder="请输入对应查询数据">
        <button class="btn-search">查询</button>
    </div>
    <div class="search-bd">
        <table class="msg-vaccine">
            <thead>
            <tr>
                <th>序号</th>
                <th>账号</th>
                <th>剂次</th>
                <th>接种日期</th>
                <th>疫苗批号</th>
                <th>生产企业</th>
                <th>接种单位</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</div>
</body>

</html>