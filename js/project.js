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
	var projectName = getParameterByName('project-id'); // null (absent)
	var nextProjectName = ""
	var object = null;
	for(i = 0; i<data.length; i++){
		var currentObj = data[i];	
		if (currentObj.Name == projectName){
			object = currentObj;
			
			if(typeof data[i+1] != 'undefined'){
				nextProjectName = data[i + 1].Name;
			} else { 
				nextProjectName = data[0].Name;
			}

		}
}

	//alert(nextProjectName);


	/* NEXT BUTTON

	var nextObject = null;
	for(i = 0; i<data.length; i++){
		 nextObject = data[i+1];
	}
	alert(nextObject);*/

  	var menuList = "";
  		for(i = 0; i < data.length; i++){
  			menuList = menuList + renderMenu(data[i]);
  			} 
  	$("#menuBar").html(menuList);

	//CHECK
	if(object == null){
		alert("I could not find " + projectName);
	}



	console.log($("h1")[0]);

	$("#project-name").html(object.Name);
	$("#project-short-description").html(object.subName);
	$("#project-description").html(object.Description);
	$("#img1").attr("src", (object.projectImages[0]));
	$("#img2").attr("src", (object.projectImages[1]));
	$("#project-parallax").css("background-image", "url(" + object.Background + ")");  
	$("#img3").attr("src", (object.projectImages[2]));
	$("#img4").attr("src", (object.projectImages[3]));
	$("#next").attr("href", "Projects.html?project-id=" + $.trim(nextProjectName));

	//alert(object.projectImages[2]);
}





function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



function renderMenu(cardObj){
  var htmlMenu = "<li class='nav-item'><a class='nav-link' href='Projects.html?project-id="+ cardObj.Name + "'</a>" + cardObj.Name +"</li>"
  return htmlMenu;

}


function myErrorListener(xhr,ajaxOptions,thrownError)
{
  alert(thrownError);
}


