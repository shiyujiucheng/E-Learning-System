/**
 * Created by hujunhui on 2017/8/27.
 */
// 以下为 studentInfo 页面的js
function updateImg() {
    if (document.getElementById("inputImgDiv").style.display == "none")
        document.getElementById("inputImgDiv").style.display = "";
    else
        document.getElementById("inputImgDiv").style.display = "none";
}

function changePwd() {
    if (document.getElementById("changePwdDiv").style.display == "none")
        document.getElementById("changePwdDiv").style.display = "";
    else
        document.getElementById("changePwdDiv").style.display = "none";
}


function submitImg(ID, basepath) {
    //这里更换页面照片  并且该照片提交给服务器

    $.ajax({
        url: basepath,
        type: "POST",
        async: true,
        dataType: "json",
        secureuri: false,
        data: {
            "ID": ID
        },
        fileElementId: "inputfile",
        success: function (data) {
            // data为照片的存储路径
            //alert(data);
            document.getElementById("inputImgDiv").style.display = "none";
            $("#photo").attr("src", basepath + "/profile/readImage?imagePath=" + data.imagePath); //更改页面头像
        },
        error: function (err) {
            alert(err);
        }
    });
}


function SubmitchangePwd(ID, basepath) {
    //这里提交密码数据
    var oldPwd = document.getElementById("oldPwd").value;
    var newPwd = document.getElementById("newPwd").value;
    var newPwdSure = document.getElementById("newPwdSure").value;

    if (oldPwd == "") {
        alert("请输入原密码!");
    } else {
        if (newPwd == "") {
            alert("请输入新密码!");
        } else {
            if (newPwdSure == "") {
                alert("请再次输入新密码!");
            } else {
                if (newPwdSure == newPwd) {

                    //这里修改密码
                    $.ajax({
                        url: basepath,
                        type: "POST",
                        dataType: "json",
                        data: {
                            "oldPassword": oldPwd,
                            "newPassword": newPwd,
                            "ID": ID
                        },
                        success: function (data) {
                            // data为返回的字符串：密码修改成功或者密码修改失败
                            alert(data);
                            document.getElementById("changePwdDiv").style.display = "none";
                        },
                        error: function (err) {
                            alert(err);
                        }
                    });

                } else {
                    alert("两次新密码不一致!");
                }
            }
        }
    }
}

// 以下为 studentData页面的js

function dataAllselect() {

    var checklist = document.getElementsByClassName("datalist");

    if (document.getElementById("controllall").checked) {
        for (var i = 0; i < checklist.length; i++) {
            checklist[i].checked = 1;
        }
    } else {
        for (var j = 0; j < checklist.length; j++) {
            checklist[j].checked = 0;
        }
    }
}



function flushDataList(basepath) {

    $.ajax({
        url: basepath,
        type: "POST",
        dataType: "json",
        success: function (data) {

            var res = JSON.parse(data); //res是json对象
            dataclearAndadd(res);

        },
        error: function (err) {
            // alert("查询失败!");
        }
    });

}

function dataclearAndadd(stdlist) {

    var str = "";
    var em = document.getElementById("tablecontent");
    while (em.hasChildNodes()) //当em下还存在子节点时 循环继续
    {
        em.removeChild(em.firstChild);
    }

    for (var i = 0; i < stdlist.length; i++) {

        str = str + '<tr name ="Oneofstd">'+
            '<td><input type = "checkbox" class = "datalist"></td><td >' +(i+1)+ '</td><td>'+stdlist[i].fileclass+'</td><td class = "filename">'+ stdlist[i].fileName+'</td><td ><a onclick="downloadOne("${pageContext.request.contextPath}/student/downloadOne.do",'+stdlist[i].fileName+')" > 下载 | </a><a onclick = "browseOnline("${pageContext.request.contextPath}/student/downloadOne.do",'+stdlist[i].fileName+')">预览</a></td></tr>';
    }
    em.innerHTML = str;
}

function downloadOne(basepath, filename) {

    $.ajax({
        url: basepath,
        type: "POST",
        dataType: "json",
        data:{
            "filename": filename
        },
        success: function (data) {

            var res = JSON.parse(data); //res是json对象
            dataclearAndadd(res);

        },
        error: function (err) {
            // alert("查询失败!");
        }
    });

}

function browseOnline(basepath, filename) {
//这个功能没写，，，
    alert("456");


}

function dataFindByType(basepath) {

    var dataType = document.getElementById("name").value;

    $.ajax({
        url: basepath,
        type: "POST",
        dataType: "json",
        data: {
            "type": dataType
        },
        success: function (data) {
            //返回的是json字符串

            var res = JSON.parse(data); //res是json对象
            dataclearAndadd(res);

        },
        error: function (err) {
            // alert(err);
        }
    });

}



function setDownloadList(basepath) {

    var checklist = document.getElementsByClassName("datalist");
    var fileNamelist = document.getElementsByClassName("filename");

    var delDataList = new Array();

    var j=0;
    for (var i = 0; i < IDlist.length; ++i) {

        if (checklist[i].checked) {

            delDataList[j++] = fileNamelist[i].innerHTML.toString();
        }
    }

    $.ajax({
        url: basepath,
        type: "POST",
        dataType: "json",
        data: {
            fileNamelist:fileNamelist.join("$")
        },
        success:function (data) {
            //返回的是json字符串

            alert("下载成功");

        },
        error: function (err) {
            // alert(err);
        }
    });

}


