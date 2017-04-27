 $("#submit").click(function() {
    var searchterm = String(document.getElementById("search-term").value).toUpperCase();

   document.getElementById("result").style.opacity = 0; // make it flash off and on

    if (searchterm.indexOf("MKSAILTGLLFV") === 0) {
        //1
        document.getElementById("result").style.opacity = 1;
        document.getElementById("sorry-message").style.opacity = 0;
        document.getElementById("result-link").href = "http://www.uniprot.org/uniprot/P12417";
        document.getElementById("result-link").innerHTML = "Type-3 ice-structuring protein 1.5";
        document.getElementById("protein-image").src = "img/1.jpg";
    } else if (searchterm.indexOf("MSKGEELFTGVV") === 0) {
        //2
        document.getElementById("result").style.opacity = 1;
        document.getElementById("sorry-message").style.opacity = 0;
        document.getElementById("result-link").href = "http://www.uniprot.org/uniprot/P42212";
        document.getElementById("result-link").innerHTML = "Green fluorescent protein";
        document.getElementById("protein-image").src = "img/2gfp.png";
    } else if (searchterm.indexOf("MENMENDENIV") === 0) {
        //3
        document.getElementById("result").style.opacity = 1;
        document.getElementById("sorry-message").style.opacity = 0;
        document.getElementById("result-link").href = "http://www.uniprot.org/uniprot/Q01158";
        document.getElementById("result-link").innerHTML = "Luciferin 4-monooxygenase";
        document.getElementById("protein-image").src = "img/3lucifern.png";
    } else if (searchterm.indexOf("MKLNKLNPRWDA") === 0) {
        //4
        document.getElementById("result").style.opacity = 1;
        document.getElementById("sorry-message").style.opacity = 0;
        document.getElementById("result-link").href = "http://www.uniprot.org/uniprot/Q8WTE7";
        document.getElementById("result-link").innerHTML = "Odorant receptor Or1";
        document.getElementById("protein-image").src = "img/4olfactory.gif";
    } else if (searchterm.indexOf("MKTLLLTLVVVT") === 0) {
        //5
        document.getElementById("result").style.opacity = 1;
        document.getElementById("sorry-message").style.opacity = 0;
        document.getElementById("result-link").href = "http://www.uniprot.org/uniprot/Q7T3J2";
        document.getElementById("result-link").innerHTML = "Alpha-elapitoxin-Bm2a";
        document.getElementById("protein-image").src = "img/5abt.png";
    } else if (searchterm.indexOf("MAEPAKKKPKKL") === 0) {
        //6
        document.getElementById("result").style.opacity = 1;
        document.getElementById("sorry-message").style.opacity = 0;
        document.getElementById("result-link").href = "http://www.uniprot.org/uniprot/Q99285";
        document.getElementById("result-link").innerHTML = "Histone H2B";
        document.getElementById("protein-image").src = "img/6hb.png";
    } else if (searchterm.indexOf("MADKVLKEKR") === 0) {
        //7
        document.getElementById("result").style.opacity = 1;
        document.getElementById("sorry-message").style.opacity = 0;
        document.getElementById("result-link").href = "http://www.uniprot.org/uniprot/P29466";
        document.getElementById("result-link").innerHTML = "Caspase-1";
        document.getElementById("protein-image").src = "img/7cap.png";
    } else if (searchterm.indexOf("MEFTLRQEAL")===  0) {
        //8
        document.getElementById("result").style.opacity = 1;
        document.getElementById("sorry-message").style.opacity = 0;
        document.getElementById("result-link").href = "http://www.uniprot.org/uniprot/P93848";
        document.getElementById("result-link").innerHTML = "Leghemoglobin 29";
        document.getElementById("protein-image").src = "img/8lhg.png";
    } else {
        document.getElementById("result").style.opacity = 0; 
        document.getElementById("sorry-message").style.opacity = 1; 
        document.getElementById("protein-image").src = "";
  } 
});