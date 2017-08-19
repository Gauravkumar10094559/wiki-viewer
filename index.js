$(document).ready(function(){

$('body').mousemove(function(e){
    //display the x and y axis values inside the P element
    $('#importantElement').html("X Axis : " + e.pageX + " | Y Axis " + e.pageY);
});
  
  


 



function messageAjax (msg) {
    if ($("body").find("#infoBox").length == 0) {
        $("body").prepend("<div id=\"infoBox\" style=\"height: 20px;background-color:#ffffff;width:100%;display:none;text-align:center;border-bottom:#2BBAE4 1px solid;\"></div>");
    } // END IF
     
    $("body").find("#infoBox").text(msg).slideDown().delay(1000).slideUp();
}

messageAjax('I m on top of everything');








window.onload = function () {
    var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart; 
    console.log('Page load time is '+ loadTime/1000);
}
// load time is in milliseconds


$('#spnTop').on("click",function(){
    $('html,body').animate({ scrollTop:  $("#spnbottom").offset().top }, 'slow', function () {
                          console.log("reached top");    });

});
$('#spnbottom').on("click",function() {
jQuery("html, body").animate({scrollTop:  $("#spnTop").offset().top }, 2000);    
});

$('img').on('error',function(){
	
	$('img').attr('src', 'F:/html/freecodecamp/weather/img/image.jpg');

});


var status=true;
	function wikiData()
	{

		var endpoint="https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
		var entry=$("input:text").val();
		var api="&indexpageids=&callback=JSON_CALLBACK";
		var urlkey=endpoint+entry+api;

		$.ajax({
		url:urlkey,
		dataType:'jsonp',
		type:'GET',
		success:function(data)
			{ 
				for(var i=0;i<data.query.pageids.length;i++)
					{
						var no=data.query.pageids[i];
						var wiki="https://en.wikipedia.org/?curid="+no;
						var content='<div class="container jumbotron"><a href='+wiki+'>'+data.query.pages[no].title+'</a><p>'+data.query.pages[no].extract+'</p></div>';
						
						$("#content").prepend(content);
						$("#content").attr("href",wiki);
						} 
			}
		});

		
		status=false;
	}
	function remove()
	{
		if(!status)
		{
			$("#content").html(" ");
		}
	}
	$("input").keydown(function(e){
		if(e.which==13)
		{
			remove();
			wikiData();
		}

	});

	$("#button").on("click",function(){

			remove();
			wikiData();
	});
});


// // Using jQuery
// $.ajax( {
//     url: remoteUrlWithOrigin,
//     data: queryData,
//     dataType: 'json',
//     type: 'POST',
//     headers: { 'Api-User-Agent': 'Example/1.0' },
//     success: function(data) {
//        // do something with data
//     }
// } );

// The recommended way to ensure that requests are logged in is to use the assert=user parameter accepted on all API calls. When this parameter is provided and the user is not logged in, an assertuserfailed error will be returned.



// // working
// https://en.wikipedia.org/w/api.php?format=json&action=query&titles=delhi&prop=revisions&rvprop=content&callback=?

// https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json

// https://en.wikipedia.org/wiki/Main_Page?action=render

// https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=ass&callback=JSON_CALLBACK

// https://en.wikipedia.org/?curid=48973