/*
  ajax({
    type:  //传输方式
    url:  //链接的地址
    data:  //传送的数据
    success: //成功回调函数
    lose:  //失败回调函数
  })
  ajax({

    type:"post",

    url:"post.php",

    data:"&user=465&pwd=741",

    success:function(a){alert(a)},

    lose:function(a){alert("出错了,状态码为"+a)}

  });

*/
function ajax(json){
   var type = json.type || "get";

   var url = json.url;

   var data = json.data || "";

   var oAjax = null;

     if (window.XMLHttpRequest){

       oAjax = new XMLHttpRequest();

     }else{

         oAjax = new ActiveXObject( 'Microsoft.XMLHTTP' );
     }

     if(type=="get")url+="?"+data+"&"+Math.random();

     oAjax.open(type,url,true);

     if (type == "get"){
         oAjax.send();
     }else{
       //post传数据方法 必须规定传输数据的格式
       oAjax.setRequestHeader('content-type','application/x-www-form-urlencoded');
       oAjax.send(data);//不会有缓存问题
     }

   oAjax.onreadystatechange = function(){

         if (oAjax.readyState == 4){

             if (oAjax.status>=200 && oAjax.status<300){

                 json.success && json.success(oAjax.responseText)
                 //typeof oAjax.responseText 查看获取的数据类型
                 //eval(oAjax.responseText) 如果是字符串就转成ja语句

             }else{
         
                 json.lose?json.lose(oAjax.status):alert("发生了"+oAjax.status+"错误")

             }

         }

   }

}