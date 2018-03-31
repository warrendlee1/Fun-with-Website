var txt1 = "Aspiring programmer. Currently learning Python, HTML, and Javascript."
var txt2 = "Plays piano and enjoys most music. Enjoys composition and competing."
var txt3 = "Meeting interesting people is energizing. An active leader of school clubs."
var txt4 = "Traveling the world to see new cultures. Love delicious, traditional foods."
var txt5 = "Bruce lee is my life inspiration. Best philosophy, advice, and movies. "
var txt6 = "Welcome to my website! Let's get to know each other more! :)"
var speed = 25; /* The speed/duration of the effect in milliseconds */
var array = [txt1, txt2,txt3,txt4,txt5,txt6];
var arrayid = ["t1","t2","t3","t4","t5","t6"];

var text;
var curid;
var j=0;
var i=0;

document.getElementById('button').onclick = onClick();

function typeAll(){
    if (i < 6){
        console.log(array[i]);
        text=array[i];
        curid=arrayid[i];
        j = 0;
        typeWriter();
//        if (i === 3){
//            document.getElementById("bl").style["visibility"] = "visible";
//            document.getElementById("bl").style["align"] = "middle";
//        }
//        if (i === 4){
//            document.getElementById("fc").style["visibility"] = "visible";
//            document.getElementById("fc").style["align"] = "middle";
//        }
        i++;
     }
}

function typeWriter() {
    if (j<text.length){
        document.getElementById(curid).innerHTML += text.charAt(j);
        setTimeout(typeWriter, speed);
        j++;
    } else {
        setTimeout(typeAll, speed);
    }
}

function onClick(){

}