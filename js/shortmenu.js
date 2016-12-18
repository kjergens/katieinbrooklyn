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

// add one article to menu
var addMenuItem = function (itemData) {
    var item = $('<a href="' + itemData.link + '">')  
        .append("<div class=\"menu_item\">" +
            "<div class=\"thumb_container\">" + 
            "<img src=\"images/" + itemData.thumb +
             "\"></div>" +
             " <div class=\"article_title_container\">" + 
            " <div class=\"article_title\">" + 
            itemData.title + 
            "<div class=\"article_subtitle\">" +
            itemData.subtitle + "</div>" +
            "</div></div>");
    item = item.append("</div><div class=\"clearfix\"></div>");
    return item;
};


// this is automatically loaded when the page loads
$(function () {

    // menu container
    $("#right_menu").append("<div id=\"menu_container\"></div>"); // wrap the menus in a container

    $("#menu_container").append("<div id=\"sidemenu\"></div>");
    var $menu = $("#sidemenu");

    $menu.append("<div class=\"menu_heading\">More articles</div>");

    shuffle(data.menu);

    // loop through data and build menu
    for (var i = 0; i<4; i++) {
         $menu.append(addMenuItem(data.menu[i]));
    }  


});




