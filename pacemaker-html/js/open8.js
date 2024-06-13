var sw=0;
    var sw1=0;
    var sw2=0;
    var numArray=new Array();
    function rand1() {
        if(sw!=1) {
            var span = document.getElementById("first");
            var num = Math.random() * 3;
            var num2 = Math.floor(num);
            span.innerHTML = num2;
            numArray[0]=num2;
            sw = 1;
        }
    }
    function rand2() {
        if (sw1 != 1) {
            var span = document.getElementById("second");
            var num = Math.random() * 3;
            var num2 = Math.floor(num);
            span.innerHTML = num2;
            numArray[1] = num2;
            sw1 = 1;
        }
    }
    function rand3() {
        if (sw2 != 1) {
            var span = document.getElementById("third");
            var num = Math.random() * 3;
            var num2 = Math.floor(num);
            span.innerHTML = num2;
            numArray[2] = num2;
            sw2 = 1;
            var resultNum = numArray[0];
            var resultSw = 1;
            for (var i = 1; i < 3; ++i) {
                if (numArray[i] != resultNum) {
                    resultSw = 0;
                    break;
                }
            }
            var result = document.getElementById("game_result");
            if (resultSw == 0) {
                result.innerHTML = "fail(click here to do again)";
            }
            else {
                result.innerHTML = "Success(click here to do again)";
            }
        }
    }
    function restart() {
        location.reload();
    }