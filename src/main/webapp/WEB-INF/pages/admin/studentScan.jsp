<%--
  Created by IntelliJ IDEA.
  User: hujunhui
  Date: 2017/8/22
  Time: 20:22
  To change this template use File | Settings | File Templates.
--%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<c:set var="ctx" value="${pageContext.request.contextPath}"></c:set>
<html lang="zh-CN">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- 引入各种CSS样式表 -->

    <link rel="stylesheet" href="<%=basePath%>statics/css/font-change.css">
    <link rel="stylesheet" href="<%=basePath%>statics/css/admin.css">
    <link rel="stylesheet" href="<%=basePath%>statics/css/font-awesome.css">

    <script src="<%=basePath%>statics/js/admin.js"></script>

    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


    <title>学生名单管理</title>
</head>

<body onload="flushStdList()">
<div class="all" id="stdScan">
    <h2>学生名单</h2><br>
    <div id="studentTable">
        <div id="tabHead">
            <div id="tableHeadLeft">

                <div class="form-inline" role="form">
                    <div class="form-group">
                        <input type="text" class="form-control" id="name" placeholder="请输入学生姓名">
                    </div>
                    <button type="button" onclick="findByname('${pageContext.request.contextPath}/student/findByName.do')" class="btn btn-default">查询</button>
                </div>

            </div>
            <div id="tableHeadRight">
                <button type="button" class="btn btn-default" style="background-color:  #B8B8B8" onclick="flushStdList('${pageContext.request.contextPath}/student/studentList.do')">刷新</button>
                <button type="button" class="btn btn-default" style="background-color:  #FF8C00" onclick="nengbunengxing('${pageContext.request.contextPath}/student/deleteStudent.do')">删除所选</button>
            </div>
        </div>
        <div id="tableBody">
            <table class="table table-striped table-bordered table-condensed">
                <thead>
                <tr>
                    <td style="width:8%">
                        <input type="checkbox" id="controllall" onclick="allselect()">&nbsp;&nbsp;全选
                    </td>
                    <td style="width:8%">序号</td>
                    <td style="width:15%">姓名</td>
                    <!--td style="width:15%">学号</td -->
                    <td style="width:15%">手机号</td>
                    <td style="width:20%">ID</td>
                    <td style="width:20%">单位</td>
                    <td style="width:7%">偏好</td>
                </tr>
                </thead>
                <tbody id="tablecontent">
                <!-- <tr name="Oneofstd">
                     <td><input type="checkbox" class="studentlist"></td>
                     <td>1</td>
                     <td>Tanmay</td>
                     <td>1715202</td>
                      <td>17152756546502</td>
                     <td class="ID">Bangalore</td>
                      <td>人事科</td>
                     <td>偏好</td>
                 </tr>
               -->

                </tbody>
            </table>
        </div>


    </div>
</div>
<iframe style="display:none" onload="javascript:flushStdList('${pageContext.request.contextPath}/student/studentList.do')"/>
</script language="javascript" type="text/javascript">
</script>
</body>
</html>
