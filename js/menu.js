// this is automatically loaded when the page loads
$(function () {

    // menu container
    $("#right_menu").append("<div id=\"menu_container\"></div>"); // wrap the menus in a container

    $("#menu_container").append("<div id=\"sidemenu\"></div>");
    var $menu = $("#sidemenu");

    show_popular(); 


});

/****************************

    Popular items

******************************/
var show_popular = function() {

    $("#menu_container").append("<div id=\"popular\"></div>");
    var $popularmenu = $("#popular");

    $popularmenu.append("<div class=\"menu_heading\">Most popular</div>");

    // loop through data and build menu
    for (var i = 0; i<data.popular.length; i++) {
         $popularmenu.append(get_menu_item_numbered(data.popular[i], i+1));
    } 
};


/*****************************

    Archive items

******************************/
var show_archive = function() {

    // recent menu
    $("#menu_container").append("<div id=\"sidemenu\"></div>");
    var $menu = $("#sidemenu");

    $menu.append("<br><br><div class=\"menu_heading\">More articles</div>");

    // loop through data and build menu
    for (var i = 7; i<data.menu.length; i++) {
         $menu.append(get_menu_item(data.menu[i]));
    } 
}


/********************************************

    A single menu item

*******************************************/
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

/********************************************

    A single menu item with ranking numbers

*******************************************/
var get_menu_item_numbered = function (itemData, rank) {
    var item = $("<div class=\"menu_item\">")  
        .append(
          "<a href=\"" + itemData.link + "\">" +
            "<div class=\"thumb_container\">" + 
            "<img src=\"images/" + itemData.thumb +
             "\"></div>" +
             " <div class=\"article_title_container\">" + 
             "<div class=\"rank\">" + rank + ".</div>" +
            " <div class=\"article_title\">" + 
            itemData.title + 
            "<div class=\"article_subtitle\">" +
            itemData.subtitle + "</div>" +
            "</div></div></a>");
    item = item.append("</div><div class=\"clearfix\"></div>");
    return item;
};

/*****************************

    Shuffle an array of items

******************************/
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



