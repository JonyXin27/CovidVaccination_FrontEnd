<%--
  Created by IntelliJ IDEA.
  User: 86133
  Date: 2022/1/19
  Time: 10:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>主页</title>
    <script src="../static/js/jquery-3.2.1.js"></script>
    <script src="../static/js/localStorage.js"></script>
    <script src="../static/js/show.js"></script>
    <script src="../static/js/user_index.js"></script>
    <link rel="stylesheet" href="../static/css/user_index.css">
    <link rel="stylesheet" href="../static/css/base.css">
</head>

<body>
<div class="header w">
    <h2 class="header-hd">新冠疫苗接种记录汇总</h2>
    <div class="user">
        <ul>
            <li><a href="javascript:void(0)" id="link-msg"></a></li>
            <li><a href="../index.jsp" id="exit">退出</a></li>
            <li><a href="javascript:void(0)" id="logout">注销</a></li>
        </ul>
    </div>
</div>
<div class="msg">
    <table class="msg-covid" id="msg-covid">
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
    <div class="msg-self" id="msg-self" style="display: none;">
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
</div>
</body>

</html>
