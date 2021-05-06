$(function () {
    $("#input4").on("click", function () {
        // alert("Hi");
        // $("h1").text("aaa");
        // $("h1").text($("li:first").text());
        let liNO = $("#ul li").length;
        let ranNO = Math.floor(Math.random() * liNO);
        $("#h1").text($("#ul li").eq(ranNO).text());
        // $("img").attr("src", item[ranNO]);
        $("#img").attr("src", $("#ul li").eq(ranNO).attr("title"));
        // $("img").attr("src", itemOb[ranNO]);
    });
});

let item = [
    "img/拉麵.jpeg",
    "img/滷肉飯.jpg",
    "img/水餃.jpg"]

let itemOb = {
    0: "img/拉麵.jpeg",
    1: "img/滷肉飯.jpg",
    2: "img/水餃.jpg"
}