function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}


// build index page 
var show_featured = function() {
    //
    // Main article
    //
    var markup = "<a href=\"" + data.menu[0].link + "\">" +
        "<img class=\"featured_img\" src=\"images/" + data.menu[0].recent + "\"></figure>" +
     "<br><span class='featured_title'>" + data.menu[0].title + "</span>" +
    "</a>" +
    "<span class='date'>" + data.menu[0].date + "</span><span id=\"latest\">Latest</span><br><br>" +
   
   // "<div class=\"clearfix\"></div>" +
     
    "<p>" + data.menu[0].blurb + 
   "<a href=\"" + data.menu[0].link + "\"> Read more.</a>" + "</p>" +
   "<div class=\"clearfix\"></div>";

    //
    // Recent articles.
    //
    markup += "<h3 class=\"recent_header\">Recent articles</h3>";
    markup += '<div id="recent_container"></div>';

    var recent = '';

    // recent articles
    for (var i=1; i<=6; i++) {
        recent += "<a href=\"" + data.menu[i].link + "\">" +
        "<div class='recent'>" +
        "<img src=\"images/" + data.menu[i].recent + "\">" +
        " <h4>" + data.menu[i].title +  "</h4></a>" +
        "<div class=\"date\">" + data.menu[i].date + "</div>" +
        "<p>" + data.menu[i].blurb + 
        "<a href=\"" + data.menu[i].link + "\"> Read more.</a>" + "</p>" +
        "</a></div>";
    }

    recent += "<div class=\"clearfix\"></div>"; // clear the floats



    $("#featured_articles").append(markup);
    $("#recent_container").append(recent); /* fill in recent articles */

};

// build side menu, excluding main articles
var get_menu_item = function (itemData) {
    var item = $("<div class=\"menu_item\">")  
        .append("<a href=\"" + itemData.link + "\">" +
            "<div class=\"thumb_container\">" + 
            "<img src=\"images/" + itemData.thumb +
             "\"></div>" +
             " <div class=\"article_title_container\">" + 
            " <div class=\"article_title\">" + 
            itemData.title + 
            "<div class=\"article_subtitle\">" +
            itemData.subtitle + "</div>" +
            "</div></div></a>");
    item = item.append("</div><div class=\"clearfix\"></div>");
    return item;
};

$(function () {

    //display featured articles in main body
    show_featured();

        // menu container
    $("#right_menu").append("<div id=\"menu_container\"></div>"); // wrap the menus in a container

    // popular menu
    $("#menu_container").append("<div id=\"popular\"></div>");
    var $popularmenu = $("#popular");

    $popularmenu.append("<div class=\"menu_heading\">Most popular</div>");
    shuffle(data.popular);
    // loop through data and build menu
    for (var i = 0; i<4; i++) {
         $popularmenu.append(get_menu_item(data.popular[i]));
    } 

    // recent menu
    $("#menu_container").append("<div id=\"sidemenu\"></div>");
    var $menu = $("#sidemenu");

    $menu.append("<br><br><div class=\"menu_heading\">More articles</div>");

    //shuffle(data.menu);

    // loop through data and build menu
    for (var i = 7; i<data.menu.length; i++) {
         $menu.append(get_menu_item(data.menu[i]));
    }  

});

