  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1559834101001985',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     //js.src = "https://connect.facebook.net/en_US/sdk.js";
      js.src = "http://connect.facebook.net/en_US/all.js#xfbml=1&appId=1559834101001985";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));