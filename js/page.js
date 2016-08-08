

var head = ' \
  <title>Katie In Brooklyn</title> \
  <meta http-equiv="content-type" content="text/html; charset=utf-8" /> \
  <meta http-equiv="X-UA-Compatible" content="IE=9" /> \
\
  <!-- meta properties for Facebook--> \
  <meta property="og:type"          content="article" /> \
  <meta property="og:site_name"      content="Katie In Brooklyn" /> \
  <meta property="og:title"         content="' + title + '" /> \
  <meta property="og:description"   content="' + desc + '" /> \
  <meta property="og:url"           content="katieinbrooklyn.com/' + filename + '" /> \
  <meta property="og:image"         content="katieinbrooklyn.com/images/' + fb_img_path + '"/> \
  <meta property="fb:app_id"        content="1559834101001985" /> \
 <!-- Bootstrap--> \
  <link rel="stylesheet" href="css/bootstrap.min.css" /> \
  <!-- My stylesheets--> \
  <link rel="stylesheet" type="text/css" href="css/style.css" /> \
  <link rel="stylesheet" type="text/css" href="css/blog.css" /> \
  <link rel="stylesheet" href="css/title.css" />';
  
var body =' \
<div id="fb-root"></div>' +
'<div id="nav"></div>' + 
'<div class="container">' +
 '<div class="row">' +
 '<div class="title">' + title + '</div>' +
 '<!-----Article------>' +
 '<div class="col-md-8">' +
 '<div class="article">' +
 '<div class="byline">' +
 '<div class="date">' + date + '</div>' +
  '<!-- share buttons -->' +
  '<span id="twitter">' +
   '<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://www.katieinbrooklyn.com/' + filename + '">' +
   'Tweet</a>' +
   '</span>' +
   '<span class="fb-like" data-share="true" data-width="400" data-show-faces="false"></span>' +
  '</div> <!-- /byline -->' + 
  content +
  '</div> <!-- end article -->' +
'</div> <!-- end column -->' +
 '<!-- Side Menu -->' +
 '<div class="col-md-4" id="right_menu"> </div>' +
 '</div>' +
'<a href="#0" class="cd-top">Top</a>' +
'</div>' + 
'<div id="foot"></div>'; 

