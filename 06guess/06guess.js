$(function () {
    //儲存目前作答到第幾題
    var currentQuiz = null;
    //當按鈕按下後，要做的事情
    $("#startButton").on("click", function () {
        if (currentQuiz == null) {
            //設定目前作答從第0題開始
            currentQuiz = 0;
            //顯示題目
            $("#question").text(questions[0].question);
            $("#options").empty();
            //將選項逐個加入
            // $("#options").text(questions[0].answers);
            questions[0].answers.forEach(function (element, index, array) {
                $("#options").append(`<input name='options' type='radio'value='${index}'><label>${element[0]}</label><br><br>`);
            });
            // button 文字
            $("#startButton").attr("value", "下一題");

        } else {
            $.each($(":radio"), function (i, val) {
                // i = index; val = element
                if (val.checked) {
                    if (isNaN(questions[currentQuiz].answers[i][1])) {
                        var finalResult = questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz = null;
                        $("#startButton").attr("value", "重新開始");
                    } else {
                        currentQuiz = questions[currentQuiz].answers[i][1] - 1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function (element, index, array) {
                            $("#options").append(`<input name='options' type='radio'value='${index}'><label>${element[0]}</label><br><br>`);
                        });
                    }
                    return false;
                }
            })

        }
    });
});