var ctx;
var question_number_easy_one = [
	[ "<div class='img_questionare'><img src='../pic/Aq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "A" ],
	[ "<div class='img_questionare'><img src='../pic/Bq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "B" ],
	[ "<div class='img_questionare'><img src='../pic/Cq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "C" ],
	[ "<div class='img_questionare'><img src='../pic/Dq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "D" ],
	[ "<div class='img_questionare'><img src='../pic/Eq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "E" ],
	[ "<div class='img_questionare'><img src='../pic/Fq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "F" ],
	[ "<div class='img_questionare'><img src='../pic/Gq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "G" ],
	[ "<div class='img_questionare'><img src='../pic/Hq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "H" ],
	[ "<div class='img_questionare'><img src='../pic/Iq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "I" ],
	[ "<div class='img_questionare'><img src='../pic/Jq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "J" ],
	[ "<div class='img_questionare'><img src='../pic/Kq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "K" ],
	[ "<div class='img_questionare'><img src='../pic/Lq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "L" ],
	[ "<div class='img_questionare'><img src='../pic/Mq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "M" ],
	[ "<div class='img_questionare'><img src='../pic/Nq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "N" ],
	[ "<div class='img_questionare'><img src='../pic/Oq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "O" ],
	[ "<div class='img_questionare'><img src='../pic/Pq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "P" ],
	[ "<div class='img_questionare'><img src='../pic/Qq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "Q" ],
	[ "<div class='img_questionare'><img src='../pic/Rq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "R" ],
	[ "<div class='img_questionare'><img src='../pic/Sq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "S" ],
	[ "<div class='img_questionare'><img src='../pic/Tq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "T" ],
	[ "<div class='img_questionare'><img src='../pic/Uq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "U" ],
	[ "<div class='img_questionare'><img src='../pic/Vq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "V" ],
	[ "<div class='img_questionare'><img src='../pic/Wq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "W" ],
	[ "<div class='img_questionare'><img src='../pic/Xq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "X" ],
	[ "<div class='img_questionare'><img src='../pic/Yq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "Y" ],
	[ "<div class='img_questionare'><img src='../pic/Zq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "Z" ],

];

var question_number_easy_two = [
	[ "<div class='img_questionare'><img src='../pic/Aq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "A" ],
	[ "<div class='img_questionare'><img src='../pic/Bq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "B" ],
	[ "<div class='img_questionare'><img src='../pic/Cq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "C" ],
	[ "<div class='img_questionare'><img src='../pic/Dq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "D" ],
	[ "<div class='img_questionare'><img src='../pic/Eq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "E" ],
	[ "<div class='img_questionare'><img src='../pic/Fq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "F" ],
	[ "<div class='img_questionare'><img src='../pic/Gq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "G" ],
	[ "<div class='img_questionare'><img src='../pic/Hq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "H" ],
	[ "<div class='img_questionare'><img src='../pic/Iq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "I" ],
	[ "<div class='img_questionare'><img src='../pic/Jq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "J" ],
	[ "<div class='img_questionare'><img src='../pic/Kq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "K" ],
	[ "<div class='img_questionare'><img src='../pic/Lq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "L" ],
	[ "<div class='img_questionare'><img src='../pic/Mq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "M" ],
	[ "<div class='img_questionare'><img src='../pic/Nq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "N" ],
	[ "<div class='img_questionare'><img src='../pic/Oq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "O" ],
	[ "<div class='img_questionare'><img src='../pic/Pq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "P" ],
	[ "<div class='img_questionare'><img src='../pic/Qq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "Q" ],
	[ "<div class='img_questionare'><img src='../pic/Rq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "R" ],
	[ "<div class='img_questionare'><img src='../pic/Sq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "S" ],
	[ "<div class='img_questionare'><img src='../pic/Tq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "T" ],
	[ "<div class='img_questionare'><img src='../pic/Uq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "U" ],
	[ "<div class='img_questionare'><img src='../pic/Vq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "V" ],
	[ "<div class='img_questionare'><img src='../pic/Wq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "W" ],
	[ "<div class='img_questionare'><img src='../pic/Xq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "X" ],
	[ "<div class='img_questionare'><img src='../pic/Yq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "Y" ],
	[ "<div class='img_questionare'><img src='../pic/Zq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "Z" ],

];

var question_number_easy_three = [
	[ "<div class='img_questionare'><img src='../pic/Aq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "A" ],
	[ "<div class='img_questionare'><img src='../pic/Bq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "B" ],
	[ "<div class='img_questionare'><img src='../pic/Cq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "C" ],
	[ "<div class='img_questionare'><img src='../pic/Dq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "D" ],
	[ "<div class='img_questionare'><img src='../pic/Eq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "E" ],
	[ "<div class='img_questionare'><img src='../pic/Fq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "F" ],
	[ "<div class='img_questionare'><img src='../pic/Gq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "G" ],
	[ "<div class='img_questionare'><img src='../pic/Hq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "H" ],
	[ "<div class='img_questionare'><img src='../pic/Iq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "I" ],
	[ "<div class='img_questionare'><img src='../pic/Jq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "J" ],
	[ "<div class='img_questionare'><img src='../pic/Kq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "K" ],
	[ "<div class='img_questionare'><img src='../pic/Lq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "L" ],
	[ "<div class='img_questionare'><img src='../pic/Mq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "M" ],
	[ "<div class='img_questionare'><img src='../pic/Nq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "N" ],
	[ "<div class='img_questionare'><img src='../pic/Oq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "O" ],
	[ "<div class='img_questionare'><img src='../pic/Pq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "P" ],
	[ "<div class='img_questionare'><img src='../pic/Qq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "Q" ],
	[ "<div class='img_questionare'><img src='../pic/Rq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "R" ],
	[ "<div class='img_questionare'><img src='../pic/Sq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "S" ],
	[ "<div class='img_questionare'><img src='../pic/Tq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "T" ],
	[ "<div class='img_questionare'><img src='../pic/Uq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "U" ],
	[ "<div class='img_questionare'><img src='../pic/Vq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "V" ],
	[ "<div class='img_questionare'><img src='../pic/Wq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "W" ],
	[ "<div class='img_questionare'><img src='../pic/Xq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "X" ],
	[ "<div class='img_questionare'><img src='../pic/Yq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "Y" ],
	[ "<div class='img_questionare'><img src='../pic/Zq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "Z" ],
];

var question_number_easy_four = [
	[ "<div class='img_questionare'><img src='../pic/Aq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "A" ],
	[ "<div class='img_questionare'><img src='../pic/Bq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "B" ],
	[ "<div class='img_questionare'><img src='../pic/Cq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "C" ],
	[ "<div class='img_questionare'><img src='../pic/Dq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "D" ],
	[ "<div class='img_questionare'><img src='../pic/Eq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "E" ],
	[ "<div class='img_questionare'><img src='../pic/Fq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "F" ],
	[ "<div class='img_questionare'><img src='../pic/Gq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "G" ],
	[ "<div class='img_questionare'><img src='../pic/Hq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "H" ],
	[ "<div class='img_questionare'><img src='../pic/Iq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "I" ],
	[ "<div class='img_questionare'><img src='../pic/Jq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "J" ],
	[ "<div class='img_questionare'><img src='../pic/Kq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "K" ],
	[ "<div class='img_questionare'><img src='../pic/Lq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "L" ],
	[ "<div class='img_questionare'><img src='../pic/Mq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "M" ],
	[ "<div class='img_questionare'><img src='../pic/Nq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "N" ],
	[ "<div class='img_questionare'><img src='../pic/Oq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "O" ],
	[ "<div class='img_questionare'><img src='../pic/Pq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "P" ],
	[ "<div class='img_questionare'><img src='../pic/Qq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "Q" ],
	[ "<div class='img_questionare'><img src='../pic/Rq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "R" ],
	[ "<div class='img_questionare'><img src='../pic/Sq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "S" ],
	[ "<div class='img_questionare'><img src='../pic/Tq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "T" ],
	[ "<div class='img_questionare'><img src='../pic/Uq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "U" ],
	[ "<div class='img_questionare'><img src='../pic/Vq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "V" ],
	[ "<div class='img_questionare'><img src='../pic/Wq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "W" ],
	[ "<div class='img_questionare'><img src='../pic/Xq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "X" ],
	[ "<div class='img_questionare'><img src='../pic/Yq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "Y" ],
	[ "<div class='img_questionare'><img src='../pic/Zq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "Z" ],
];

var question_number_easy_five = [
	[ "<div class='img_questionare'><img src='../pic/Aq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "A" ],
	[ "<div class='img_questionare'><img src='../pic/Bq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "B" ],
	[ "<div class='img_questionare'><img src='../pic/Cq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "C" ],
	[ "<div class='img_questionare'><img src='../pic/Dq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "D" ],
	[ "<div class='img_questionare'><img src='../pic/Eq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "E" ],
	[ "<div class='img_questionare'><img src='../pic/Fq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "F" ],
	[ "<div class='img_questionare'><img src='../pic/Gq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "G" ],
	[ "<div class='img_questionare'><img src='../pic/Hq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "H" ],
	[ "<div class='img_questionare'><img src='../pic/Iq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "I" ],
	[ "<div class='img_questionare'><img src='../pic/Jq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "J" ],
	[ "<div class='img_questionare'><img src='../pic/Kq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "K" ],
	[ "<div class='img_questionare'><img src='../pic/Lq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "L" ],
	[ "<div class='img_questionare'><img src='../pic/Mq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "M" ],
	[ "<div class='img_questionare'><img src='../pic/Nq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "N" ],
	[ "<div class='img_questionare'><img src='../pic/Oq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "O" ],
	[ "<div class='img_questionare'><img src='../pic/Pq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "P" ],
	[ "<div class='img_questionare'><img src='../pic/Qq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "Q" ],
	[ "<div class='img_questionare'><img src='../pic/Rq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "R" ],
	[ "<div class='img_questionare'><img src='../pic/Sq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "S" ],
	[ "<div class='img_questionare'><img src='../pic/Tq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "T" ],
	[ "<div class='img_questionare'><img src='../pic/Uq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "U" ],
	[ "<div class='img_questionare'><img src='../pic/Vq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "V" ],
	[ "<div class='img_questionare'><img src='../pic/Wq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "W" ],
	[ "<div class='img_questionare'><img src='../pic/Xq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "X" ],
	[ "<div class='img_questionare'><img src='../pic/Yq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "Y" ],
	[ "<div class='img_questionare'><img src='../pic/Zq.png' width='850px' height='400px'></div>", "Identify the missing letter!", "Z" ],
];

var ran_e_1 = Math.floor(Math.random() * question_number_easy_one.length);
var ran_e_2 = Math.floor(Math.random() * question_number_easy_two.length);
var ran_e_3 = Math.floor(Math.random() * question_number_easy_three.length);
var ran_e_4 = Math.floor(Math.random() * question_number_easy_four.length);
var ran_e_5 = Math.floor(Math.random() * question_number_easy_five.length);

function _(x){
	return document.getElementById(x);
}



function q_easy1(){
	ctx = _("ctx");
	

	ctx.innerHTML += "<div id='level'><h1 class='animated infinite flash' id='level1'>Level 1.1 / 1.5</h1></div>";
	ctx.innerHTML += question_number_easy_one[ran_e_1][0] + "<br><br>";
	ctx.innerHTML += "<center><div class='font-background'><font size='5'><strong>" + question_number_easy_one[ran_e_1][1] + "</strong></font></div></center><br>";
	ctx.innerHTML += "<center><input type='text' id='easy1' maxlength='1' onkeyup='toeasy1();'> <input onclick='easy1()' type='button' value='SUBMIT' class='button2'></center>";
	ctx.innerHTML += "<center><div id='result'></div></center>";
	
	
}
function easy1(){

	var answer_e_1 = document.getElementById('easy1').value;

	if(answer_e_1 == question_number_easy_one[ran_e_1][2])
	{
		
		ctx.innerHTML = "<div class='des'><h1 id='congrats'>Great you got the correct answer!</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/passed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/happy.png' height='300px' width='200px' id='happy' class='animated infinite bounce'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/next.png' height='50px' width='150px' id='next' onclick='q_easy2()'></div>";
	}
	else {
		
		ctx.innerHTML = "<div class='des'><h1 id='youfailed'>YOU FAILED</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/failed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/cry.png' height='300px' width='200px' id='cry'></a></center></div>";
		ctx.innerHTML += "<a href='../html/LVL1.html'><div class='des'><img src='../pic/tryagain.png' height='50px' width='150px' id='refresh'></div>";
	}
	


}

function toeasy1(){
	var a=document.getElementById('easy1').value;
	document.getElementById('easy1').value=a.toUpperCase();
}


	

function q_easy2(){
	ctx = _("ctx");
	ctx.innerHTML = "<div id='level'><h1 class='animated infinite flash' id='level1'>LEVEL 1.2 / 1.5</h1></div>";
	ctx.innerHTML += question_number_easy_two[ran_e_2][0] + "<br><br>";
	ctx.innerHTML += "<center><div class='font-background'><font size='5'><strong>" + question_number_easy_two[ran_e_2][1] + "</strong></font></div></center><br>";
	ctx.innerHTML += "<center><input type='text' id='easy2' maxlength='1' onkeyup='toeasy2();'> <input onclick='easy2()' type='button' value='SUBMIT' class='button2'></center><br><br>";
	ctx.innerHTML += "<center><div id='result'></div></center>";
	
}

function easy2(){
	var answer_e_2 = document.getElementById('easy2').value;
	
	if(answer_e_2 == question_number_easy_two[ran_e_2][2])
	{
		
		ctx.innerHTML = "<div class='des'><h1 id='congrats'>Great you got the correct answer!</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/passed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/happy.png' height='300px' width='200px' id='happy' class='animated infinite bounce'></a></center></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/next.png' height='50px' width='150px' id='next' onclick='q_easy3()'></div>";
		
	}
	else {
		
		ctx.innerHTML = "<div class='des'><h1 id='youfailed'>YOU FAILED</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/failed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/cry.png' height='300px' width='200px' id='cry'></a></center></div>";
		ctx.innerHTML += "<a href='../html/LVL1.html'><div class='des'><img src='../pic/tryagain.png' height='50px' width='150px' id='refresh'></a></center></div>";
	}
}

function toeasy2(){
	var a=document.getElementById('easy2').value;
	document.getElementById('easy2').value=a.toUpperCase();
}

function q_easy3(){
	ctx.innerHTML = "<div id='level'><h1 class='animated infinite flash' id='level1'>LEVEL 1.3 / 1.5</h1></div>";
	ctx.innerHTML += question_number_easy_three[ran_e_3][0] + "<br><br>";
	ctx.innerHTML += "<center><div class='font-background'><font size='5'><strong>" + question_number_easy_three[ran_e_3][1] + "</strong></font></div></center><br>";
	ctx.innerHTML += "<center><input type='text' id='easy3' maxlength='1' onkeyup='toeasy3();'> <input onclick='easy3()' type='button' value='SUBMIT' class='button2'></center><br><br>";
	ctx.innerHTML += "<center><div id='result'></div></center>";
}

function easy3(){
	var answer_e_3 = document.getElementById('easy3').value;
	
	if(answer_e_3 == question_number_easy_three[ran_e_3][2])
	{
		ctx.innerHTML = "<div class='des'><h1 id='congrats'>Great you got the correct answer!</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/passed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/happy.png' height='300px' width='200px' id='happy' class='animated infinite bounce'></a></center></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/next.png' height='50px' width='150px' id='next' onclick='q_easy4()'></div>";
	}
	else {
		
		ctx.innerHTML = "<div class='des'><h1 id='youfailed'>YOU FAILED</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/failed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/cry.png' height='300px' width='200px' id='cry'></a></center></div>";
		ctx.innerHTML += "<a href='../html/LVL1.html'><div class='des'><img src='../pic/tryagain.png' height='50px' width='150px' id='refresh'></a></center></div>";
	}
}

function toeasy3(){
	var a=document.getElementById('easy3').value;
	document.getElementById('easy3').value=a.toUpperCase();
}

function q_easy4(){
	ctx.innerHTML = "<div id='level'><h1 class='animated infinite flash' id='level1'>LEVEL 1.4 / 1.5</h1></div>";
	ctx.innerHTML += question_number_easy_four[ran_e_4][0] + "<br><br>";
	ctx.innerHTML += "<center><div class='font-background'><font size='5'><strong>" + question_number_easy_four[ran_e_4][1] + "</strong></font></div></center><br>";
	ctx.innerHTML += "<center><input type='text' id='easy4' maxlength='1' onkeyup='toeasy4();'> <input onclick='easy4()' type='button' value='SUBMIT' class='button2'></center><br><br>";
	ctx.innerHTML += "<center><div id='result'></div></center>";
}

function easy4(){
	var answer_e_4 = document.getElementById('easy4').value;
	
	if(answer_e_4 == question_number_easy_four[ran_e_4][2])
	{
		ctx.innerHTML = "<div class='des'><h1 id='congrats'>Great you got the correct answer!</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/passed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/happy.png' height='300px' width='200px' id='happy' class='animated infinite bounce'></a></center></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/next.png' height='50px' width='150px' id='next' onclick='q_easy5()'></div>";
	}
	else {
		
		ctx.innerHTML = "<div class='des'><h1 id='youfailed'>YOU FAILED</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/failed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/cry.png' height='300px' width='200px' id='cry'></a></center></div>";
		ctx.innerHTML += "<a href='../html/LVL1.html'><div class='des'><img src='../pic/tryagain.png' height='50px' width='150px' id='refresh'></a></center></div>";
	}
}


function toeasy4(){
	var a=document.getElementById('easy4').value;
	document.getElementById('easy4').value=a.toUpperCase();
}

function q_easy5(){
	ctx.innerHTML = "<div id='level'><h1 class='animated infinite flash' id='level1'>LEVEL 1.5 / 1.5</h1></div>";
	ctx.innerHTML += question_number_easy_five[ran_e_5][0] + "<br><br>";
	ctx.innerHTML += "<center><div class='font-background'><font size='5'><strong>" + question_number_easy_five[ran_e_5][1] + "</strong></font></div></center><br>";
	ctx.innerHTML += "<center><input type='text' id='easy5' maxlength='1' onkeyup='toeasy5();'> <input onclick='easy5()' type='button' value='SUBMIT' class='button2'></center><br><br>";
	ctx.innerHTML += "<center><div id='result'></div></center>";
}

function easy5(){
	var answer_e_5 = document.getElementById('easy5').value;
	
	if(answer_e_5 == question_number_easy_five[ran_e_5][2])
	{
		ctx.innerHTML = "<div class='des'><h1 id='congrats'>Great you've completed the Level!</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/passed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/happy.png' height='300px' width='200px' id='happy' class='animated infinite bounce'></a></center></div>";

	}
	else {
		
		ctx.innerHTML = "<div class='des'><h1 id='youfailed'>YOU FAILED</h1></div>";
		ctx.innerHTML += "<div class='sounds'><embed src='../pic/failed.mp3' autostart='true' height='0px'></div>";
		ctx.innerHTML += "<div class='des'><img src='../pic/cry.png' height='300px' width='200px' id='cry'></a></center></div>";
		ctx.innerHTML += "<a href='../html/LVL1.html'><div class='des'><img src='../pic/tryagain.png' height='50px' width='150px' id='refresh'></a></center></div>";
	}
}


function toeasy5(){
	var a=document.getElementById('easy5').value;
	document.getElementById('easy5').value=a.toUpperCase();
}

function start(){
	document.getElementById('ctx').style.visibility = "visible";
	document.getElementById('notif').style.visibility = "hidden";
	document.getElementById('start').style.visibility = "hidden";

}

function toggleMenu(ref) {
  document.getElementById('sidebar').classList.toggle('active');
  ref.classList.toggle('active');
}

window.addEventListener("load", q_easy1, false) 