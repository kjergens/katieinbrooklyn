/********************************************

    Main function

*******************************************/
$(function () {

    show_featured();
    show_recent();
    show_side_menus();

});


/*****************************
    
    Featured article

******************************/
var show_featured = function() {

    var markup = "<a href=\"" + data.menu[0].link + "\">" +
        "<img class=\"featured_img\" src=\"images/" + data.menu[0].recent + "\"></figure>" +
     "<br><span class='featured_title'>" + data.menu[0].title + "</span>" +
    "</a>" +
    "<p>" + data.menu[0].blurb + 
   "<a href=\"" + data.menu[0].link + "\"> Read more.</a>" + "</p>" +
   "<span class='date'>" + data.menu[0].date + "</span><span id=\"latest\">Latest</span><br>" +
   "<div class=\"clearfix\"></div>";


    $("#featured_articles").append(markup);
};

/*************************

    Recent articles

***************************/
var show_recent = function() {

    var recent_container = "<h3 class=\"recent_header\">Recent articles</h3>";
    recent_container += '<div id="recent_container"><div id="leftrecent"></div><div id="rightrecent"></div><div class="clearfix"></div></div>';

     $("#featured_articles").append(recent_container);

    // left hand column
    var leftrecent = '';
    for (var i=1; i<=6; i+=2) {
        leftrecent += "<a href=\"" + data.menu[i].link + "\">" +
        "<div class='recent'>" +
        "<h4>" + data.menu[i].title +  "</h4>" +
        "<div class=\"date\">" + data.menu[i].date + "</div>" +
        "<img src=\"images/" + data.menu[i].recent + "\">" +
        "</a>" +
        "<p>" + data.menu[i].blurb + 
        "<a href=\"" + data.menu[i].link + "\"> Read more.</a>" + "</p>" +
        "</a>" +
         "</div>";
    }

    $("#leftrecent").append(leftrecent);

    // right hand column
    var rightrecent = '';
    for (var i=2; i<=6; i+=2) {
        rightrecent += "<a href=\"" + data.menu[i].link + "\">" +
        "<div class='recent'>" +
        "<h4>" + data.menu[i].title +  "</h4>" +
        "<div class=\"date\">" + data.menu[i].date + "</div>" +
        "<img src=\"images/" + data.menu[i].recent + "\">" +
        "</a>" +
        "<p>" + data.menu[i].blurb + 
        "<a href=\"" + data.menu[i].link + "\"> Read more.</a>" + "</p>" +
        "</a>" +
         "</div>";
    }
    
    $("#rightrecent").append(rightrecent);

};

/************************

   Show side menus

***************************/
var show_side_menus = function () {
     // menu container
    $("#right_menu").append("<div id=\"menu_container\"></div>"); // wrap the menus in a container
    show_popular();
    show_archive();
}

/****************************

    Popular items

******************************/
var show_popular = function() {

    $("#menu_container").append("<div id=\"popular\"></div>");
    var $popularmenu = $("#popular");

    $popularmenu.append("<div class=\"menu_heading\">Most popular</div>");

    // loop through data and build menu
    for (var i = 0; i<data.popular.length; i++) {
         $popularmenu.append(get_menu_item_numbered(data.popular[i]));
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
        // skip items that are already in Most popular 
        if(data.menu[i].link != "babies.html" && 
           data.menu[i].link != "shakes.html" && 
            data.menu[i].link != "smart.html" && 
            data.menu[i].link != "constitutions.html" && 
            data.menu[i].link != "bikes.html" ) {
         $menu.append(get_menu_item(data.menu[i]));
        }
    } 
}


/********************************************

    Construct a single menu item

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

    Construct a single menu item with ranking numbers

*******************************************/
var get_menu_item_numbered = function (itemData) {
    var item = $("<div class=\"menu_item\">")  
        .append(
          "<a href=\"" + itemData.link + "\">" +
            "<div class=\"thumb_container\">" + 
            "<img src=\"images/" + itemData.thumb +
             "\"></div>" +
             " <div class=\"article_title_container\">" + 
             "<div class=\"rank\">" + itemData.rank + "</div>" +
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

