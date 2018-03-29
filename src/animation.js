var txt1 = "I am an aspiring programmer and musician."
var txt2 = "Meeting interesting people is energizing ⚡."
var txt3 = "I enjoy traveling the world for international piano competitions #undefeated."
var txt4 = "Bruce lee is my inspiration ... BE WATER, MY FRIEND."
var txt5 = "F. Chopin is my rhythm ... As long as I have health and strength, I will gladly work all my days."
var txt6 = "Let's get in touch! :)"
var speed = 25; /* The speed/duration of the effect in milliseconds */
var array = [txt1, txt2,txt3,txt4,txt5,txt6];
var arrayid = ["t1","t2","t3","t4","t5","t6"];

var text;
var curid;
var j=0;
var i=0;
function typeAll(){
    if (i < 6){
        console.log(array[i]);
        text=array[i];
        curid=arrayid[i];
        j = 0;
        typeWriter();
        if (i === 3){
            document.getElementById("bl").style["visibility"] = "visible";
            document.getElementById("bl").style["align"] = "middle";
        }
        if (i === 4){
            document.getElementById("fc").style["visibility"] = "visible";
            document.getElementById("fc").style["align"] = "middle";
        }

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