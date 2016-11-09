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
  var project = "";
  var nextProject = "";

  for(i = 0; i < data.length; i++){
  menuList = menuList + renderMenu(data[i]);
  
    if(typeof data[i+1] != 'undefined'){
          nextProject = data[i + 1].Name;
        } else { 
          nextProject = "footer";
        }

     project = project + renderCard(data[i], nextProject);




  } 
  $("#contactme").prepend(project);
  $("#menuBar").html(menuList);
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


}


function renderMenu(cardObj){
  var htmlMenu = "<li class='nav-item'><a class='nav-link' href='Projects.html?project-id="+ cardObj.Name + "'</a>" + cardObj.Name +"</li>"
  return htmlMenu;

}

function renderCard(cardObj, nextAnchor)
{
  var htmlRendering = "<section id='projects' style='background-image: url(" + cardObj.Cover + ");'>" + 
  "<a name='intro'></a>" +
  "<div class='container homeContainer' id='"+ cardObj.Name +"'>"+
  "<div class='col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12'>"+
  "<h1 class='text-center'>" + cardObj.Name + "</h1><p class ='text-center'>" + cardObj.Description + "</p><p class='text-center'><a class='btn btn-primary btn-md' href='Projects.html?project-id="+ cardObj.Name +"' role='button'>View Project</a></p></div></div><div class='col-md-12' id='bottomArrow'><a href='#" + nextAnchor + "'><i class='fa fa-arrow-circle-down' aria-hidden='true'></i></a></div></section>"  
  return htmlRendering;

  
}





function myErrorListener(xhr,ajaxOptions,thrownError)
{
  alert(thrownError);
}


