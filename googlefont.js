var fonts
    getGoogleFonts('AIzaSyCxzLzCFosJX6B9rOiy3xBu0J2TAlRBzXg');
    fontlist = document.getElementsByClassName('fontlist')

    function getGoogleFonts(apiKey){
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://www.googleapis.com/webfonts/v1/webfonts?key=' + apiKey, true);
        xhr.onloadend = function () {
            fonts = JSON.parse(xhr.responseText);
            console.log(fonts)
            // loadFonts()
        };
        xhr.send();
    };

function loadFonts(){
    var fontList = []
    for (var i = fonts.items.length - 1; i >= 0; i--) {
            console.log(fonts.items[i].category)
        if(fonts.items[i].category === "serif"){
            fontList.push(fonts.items[i].family.replace(/ /g, '+'))
            $('body').append('<div class="row"><div style="font-family:'+fonts.items[i].family+'">'+i+' '+fonts.items[i].family+'</div><input type="text"></div>')
        }
        if(i == 0){
            var url = 'https://fonts.googleapis.com/css?family=' + fontList.join('|')
            var fontlink = document.createElement('link'); 
            fontlink.href = url;
            fontlink.rel = "stylesheet"; 
            head = document.head || document.getElementsByTagName('head')[0],
            head.appendChild(fontlink);
        }
    }
}


// expressiveness
// 1
// 2
// 3 = [ 974, ]
// 970943
