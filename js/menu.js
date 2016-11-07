$( document ).ready(function(){

  var requestURL = "https://sanjaramillo.github.io/My-Portfolio/data.json";
  
  $.ajax({
    method: "GET",
    url: requestURL,
    dataType: "json",
    success: mySuccessListener,
    error: myErrorListener
  });


  
});





function mySuccessListener(data)
{
  //alert("alert");
  var menuList = "";
  for(i = 0; i < data.length; i++){
  menuList = menuList + renderMenu(data[i]);
  } 
  $("#menuBar").html(menuList);
}


function renderMenu(cardObj){
  var htmlMenu = "<li class='nav-item'><a class='nav-link' href='projects.html?project-id="+ cardObj.Name + "'</a>" + cardObj.Name +"</li>"
  return htmlMenu;

}


function myErrorListener(xhr,ajaxOptions,thrownError)
{
  alert(thrownError);
}
