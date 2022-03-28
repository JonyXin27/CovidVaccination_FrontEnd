<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新冠疫苗接种统计登录页面</title>
    <script src="static/js/jquery-3.2.1.js"></script>
    <script src="static/js/localStorage.js"></script>
    <script src="static/js/index.js"></script>
    <link rel="stylesheet" type="text/css" href="static/css/base.css">
    <link rel="stylesheet" type="text/css" href="static/css/index.css">
</head>
<html>
<body>
<div class="index">
        <ul>
            <li class="clearfix">
                <ul class="user-type">
                    <li class="hd-user"><a href="javascript:void(0)" onclick="dentityConversion('user'); return false;">用户</a></li>
                    <li class="hd-admin"><a href="javascript:void(0)" onclick="dentityConversion('admin'); return false;">管理员</a></li>
                </ul>
            </li>
            <li><label for="id">账号：</label> <input type="text" class="inp" name="id" id="id" placeholder="请输入账号"
                                                   maxlength="11" required>
                <span id="info-id" class="error"></span>

            </li>

            <li><label for="pwd">登录密码：</label> <input type="password" class="inp" name="password" id="pwd" maxlength="18"
                                                      placeholder="请输入密码" required>
                <span id="info-pwd" class="error"></span>
            </li>
            <li>
                <button class="btn-login">登录</button>
            </li>
            <li>还没有账号，去<a href="register.jsp" class="register error">注册</a></li>
        </ul>
    <span id="info" class="error"></span>
</div>
</body>
</html>
