$(function(){
    $("#classTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let tocipCount = topic.length;
    let mSecPerday = 24*60*60*1000;


    for (let x = 0; x < tocipCount ; x++){
        $("#classTable").append(`<tr >`);
        $("#classTable").append(`<td class=${x}>${x+1}</td>`);
        $("#classTable").append(`<td class=${x}>${new Date( startDate.getTime() + 7*mSecPerday*x).toLocaleDateString().slice(5)}</td>`);
        $("#classTable").append(`<td class=${x}>${topic[x]}</td>`);
        $("#classTable").append("</tr>");

        if ( x%2 == 0){
            $(`.${x}`).css("background-color","coral")
        }
    }



    
    
    

})  