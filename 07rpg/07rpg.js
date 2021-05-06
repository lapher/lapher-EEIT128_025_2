let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
const gridLength = 200;

//網頁載入完成後初始化動作
$(function () {
    
    //0-可走,1-障礙,2-終點,3-敵人
    mapArray = [
        [0, 1, 1],
        [0, 0, 0],
        [3, 1, 2],
    ];

    // html Canvas 需要 [0]
    // 2d 表示 2D繪圖
    ctx = $("#myCanvas")[0].getContext("2d");
    imgMain = new Image();
    imgMain.src = "./07rpg/images/slazzer-edit-image.png";
    currentImgMain = {
        x: 0,
        y: 0
    }
    // imgMain 後將物件載入
    //從原本的圖的(0,0)剪下寬80高130的區域，貼至目前指定位置，並且縮放成指定的寬度與高度
    imgMain.onload = function () {
        ctx.drawImage(imgMain, 0, 0, 41, 43, currentImgMain.x, currentImgMain.y, gridLength, gridLength);
    }

    imgMountain = new Image();
    imgMountain.src = "./07rpg/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "./07rpg/images/Enemy.png";

    imgMountain.onload = function () {
        imgEnemy.onload = function () {
            for (let x in mapArray) {
                for (let y in mapArray) {
                    if (mapArray[x][y] == 1) {
                        ctx.drawImage(imgMountain, 32, 65, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
                    } else if (mapArray[x][y] == 3) {
                        ctx.drawImage(imgEnemy, 7, 40, 104, 135, y * gridLength, x * gridLength, gridLength, gridLength);
                    }
                }
            }
        }
    }
});

$(document).on("keydown", function (event) {
    
    let targetImg, targetBlock, cutImagePositionY;
    targetImg = { //主角的目標座標
        "x": -1,
        "y": -1
    };
    targetBlock = { //主角的目標(對應2維陣列)
        "x": -1,
        "y": -1
    }

    event.preventDefault();

    switch (event.key) {
        case "ArrowLeft":
            targetImg.x = currentImgMain.x - gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionY = 43;//臉朝左
            break;
        case "ArrowUp":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y - gridLength;
            cutImagePositionY = 129;//臉朝上
            break;
        case "ArrowRight":
            targetImg.x = currentImgMain.x + gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionY = 86;//臉朝右
            break;
        case "ArrowDown":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y + gridLength;
            cutImagePositionY = 0;//臉朝下
            break;
        default:
            return;
    }

    //確認目標位置不會超過地圖
    if (targetImg.x <= 400 && targetImg.x >= 0 && targetImg.y <= 400 && targetImg.y >= 0) {
        targetBlock.x = targetImg.y / gridLength;
        targetBlock.y = targetImg.x / gridLength;
    } else {
        targetBlock.x = -1;
        targetBlock.y = -1;
    }

    //清空主角原本所在的位置
    ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);


    if (targetBlock.x != -1 && targetBlock.y != -1) {
        switch (mapArray[targetBlock.x][targetBlock.y]) {
            case 0: // 一般道路(可移動)
                $("#talkBox").text("");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 1: // 有障礙物(不可移動)
                $("#talkBox").text("有山");
                break;
            case 2: // 終點(可移動)
                $("#talkBox").text("抵達終點");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 3: // 敵人(不可移動)
                $("#talkBox").text("哈摟");
                break;
        }
    } else {
        $("#talkBox").text("邊界");
    }

    //重新繪製主角
    ctx.drawImage(imgMain, 0, cutImagePositionY, 41, 43, currentImgMain.x, currentImgMain.y, gridLength, gridLength);
});

