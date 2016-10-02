//https://api.myjson.com/bins/4q8q4 To fetch the tweet feed data 

var main = function(){
	$.getJSON('https://api.myjson.com/bins/4q8q4', function(data){
    displayTweetFeed(data);
	$('.search-input').keyup(function(e){
		if (e.keyCode == 13) {
			$('.search-input').val('');
		   alert('This is the Demo Page'); 
		}
	});
  });
};

function displayTweetFeed(tweetData){
	var tweetDataLength = tweetData.paths.length;
	var tweetHTML = '';
	if(tweetDataLength !== 0){
		try{
			for(var cnt= 0; cnt<tweetDataLength; cnt++){	
				var videoHTML = '';
				var imgHTML = '';
				if(tweetData.paths[cnt].imagecontent.length != 0)
				{   
					for(var i=0;i<tweetData.paths[cnt].imagecontent.length;i++)
					{
						imgHTML = imgHTML + "<img src= '"+tweetData.paths[cnt].imagecontent[i] +"' height= '300px' width='300px' alt ='Tweeted Picture'/>";
					}
				}
				if(tweetData.paths[cnt].videocontent != "")
				{
					
					videoHTML = "<iframe width='96%' height='300px' src='"+ tweetData.paths[cnt].videocontent + "'></iframe>";

				}
				tweetHTML =  tweetHTML +
								"<li class='contentListItem listItem"+cnt+"'>"+
									"<div class= 'sm-col sm-col-1 center'><img class= 'tweeterProfileImg' src='" +tweetData.paths[cnt].profileimg + "' alt = 'Tweeter Profile Picture' title = '"+ tweetData.paths[cnt].name  +"'/></div>"+
									"<div class='sm-col sm-col-11 tweetContent'>"+
										"<strong>"+ tweetData.paths[cnt].name +"&nbsp;</strong><span>"+tweetData.paths[cnt].twitterhandle+"&nbsp;-&nbsp; 4m</span><p>"+ tweetData.paths[cnt].textcontent +"</p>"+
											imgHTML + videoHTML + 
												"<ul class= 'tweetActionList'>"+
														"<li class='inlineDisplay' title='Reply'><i class='fa fa-reply fa-lg fa-fw' aria-hidden='true'></i></li>"+
														"<li class='inlineDisplay' title='Likes'><i class='fa fa-heart fa-lg fa-fw' aria-hidden='true'></i><span>"+tweetData.paths[cnt].like+ "</span></li>"+
														"<li class='inlineDisplay' title='Retweet'><i class='fa fa-retweet fa-lg fa-fw' aria-hidden='true'></i><span>"+ tweetData.paths[cnt].retweetnumber+"</span></li>"+
														"<li class='inlineDisplay' title='More'><i class='fa fa-ellipsis-h fa-lg fa-fw' aria-hidden='true'></i></li>"+
														"<li class='inlineDisplay right' title='Expand'><i class='fa fa-expand fa-fw' aria-hidden='true'></i></li>"+
												"</ul>"+
									"</div>"+
								"</li>";
			}
		}catch(err){
			alert(err.message);
		}
	}else{
		 tweetHTML = "<li class='contentListItem'><div class= 'sm-col sm-col-12 center'>"+
							"<i class='fa fa-twitter fa-3x' aria-hidden='true' ></i><br><span> No results.</span></div></li>";
	}
		
	$('.contentList').append(tweetHTML);
}

$(document).ready(main);