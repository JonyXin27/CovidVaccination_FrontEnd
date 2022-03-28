<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新冠疫苗接种统计注册页面</title>
    <script src="static/js/jquery-3.2.1.js"></script>
    <script src="static/js/localStorage.js"></script>
    <script src="static/js/register.js"></script>
    <link rel="stylesheet" href="static/css/base.css">
    <link rel="stylesheet" href="static/css/register.css">
</head>

<body>
<div class="register">
        <ul>
            <li>
                <h3>注册新用户</h3>
            </li>
            <li><label for="id">账号：</label> <input type="text" class="inp" name="id" id="id" placeholder="请输入账号"
                                                   maxlength="11" required>
                <span id="info-id" class="error"></span>
            </li>
            <li><label for="pwd1">设置密码：</label> <input type="password" class="inp" name="password" id="pwd1" minlength="8"
                                                       maxlength="18" placeholder="请输入密码" required>
                <span id="info-pwd1" class="error"></span>
            </li>
            <li><label for="pwd2">确认密码：</label> <input type="password" class="inp" id="pwd2" placeholder="请输入密码"
                                                       required>
                <span id="info-pwd2" class="error"></span>
            </li>
            <li><label for="name">姓名：</label> <input type="text" class="inp" name="name" id="name" maxlength="10"
                                                     placeholder="请输入姓名" required>
            </li>
            <li><label for="age">年龄：</label> <input type="number" class="inp" name="age" id="age" max="9999"
                                                    placeholder="请输入年龄" required>
            </li>
            <li><label for="gender">性别：</label><select name="gender" id="gender">
                <option value="女" selected>女</option>
                <option value="男">男</option>
            </select></li>
            <li><label for="identity_card">身份证</label> <input type="text" name="identity_card" class="inp" id="identity_card"
                                                              minlength="18" maxlength="18" placeholder="请输入18位身份证" required>
                <span id="info-idCard" class="error"></span>
            </li>
            <li>
                <button class="btn-register">注册</button>
            </li>
            <li>已有账号，去<a href="index.jsp" class="login error">登录</a></li>
        </ul>
    <span id="info" class="error"></span>
</div>
</body>

</html>