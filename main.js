i=0

x_pos= ["one_zero","one_one","one_two","one_three","one_four","one_five","one_six","one_seven",
"one_eight","one_nine","one_ten","one_eleven","one_twelve","one_thirteen","one_fourteen","one_fifteen",
"one_sixteen","one_seventeen","one_eighteen","one_nineteen","one_twenty","one_twentyone"]

x_pos2=["two_zero","two_one","two_two","two_three","two_four","two_five","two_six","two_seven",
"two_eight","two_nine","two_ten","two_eleven","two_twelve","two_thirteen","two_fourteen","two_fifteen",
"two_sixteen","two_seventeen","two_eighteen","two_nineteen","two_twenty","two_twentyone"]

x_pos3=["three_zero","three_one","three_two","three_three","three_four","three_five","three_six",
"three_seven","three_eight","three_nine","three_ten","three_eleven","three_twelve","three_thirteen",
"three_fourteen","three_fifteen","three_sixteen","three_seventeen","three_eighteen","three_nineteen",
"three_twenty","three_twentyone"]

x_pos4=["four_zero","four_one","four_two","four_three","four_four","four_five","four_six","four_seven",
"four_eight","four_nine","four_ten","four_eleven","four_twelve","four_thirteen","four_fourteen","four_fifteen",
"four_sixteen","four_seventeen","four_eighteen","four_nineteen","four_twenty","four_twentyone"]

x_pos5=["five_zero","five_one","five_two","five_three","five_four","five_five","five_six","five_seven","five_eight",
"five_nine","five_ten","five_eleven","five_twelve","five_thirteen","five_fourteen","five_fifteen","five_sixteen",
"five_seventeen","five_eighteen","five_nineteen","five_twenty","five_twentyone"]

x_pos6=["six_zero","six_one","six_two","six_three","six_four","six_five","six_six","six_seven","six_eight","six_nine",
"six_ten","six_eleven","six_twelve","six_thirteen","six_fourteen","six_fifteen","six_sixteen","six_seventeen",
"six_eighteen","six_nineteen","six_twenty","six_twentyone"]

document.getElementById("show_switch").style.display="none";
document.addEventListener("keypress", function(event) {
      console.log(event.key)	
      if(event.key==='z'){
      myFunction60();
      }	
      else if(event.key==='x'){
      myFunction61();
      }	
      else if(event.key==='c'){
      myFunction62();
      }	
      else if(event.key==='v'){
      myFunction63();
      }	
      else if(event.key==='b'){
      myFunction64();
      }	
      else if(event.key==='n'){
      myFunction65();
      }	
      else if(event.key==='m'){
      myFunction66();
      }	
      else if(event.key==='a'){
      myFunction50();
      }	
      else if(event.key==='s'){
      myFunction51();
      }	
      else if(event.key==='d'){
      myFunction52();
      }	
      else if(event.key==='f'){
      myFunction53();
      }	
      else if(event.key==='g'){
      myFunction54();
      }	
      else if(event.key==='h'){
      myFunction55();
      }	
      else if(event.key==='j'){
      myFunction56();
      }	
      else if(event.key==='k'){
      myFunction57();
      }	
      else if(event.key==='l'){
      myFunction58();
      }	
      else if(event.key==='q'){
      myFunction40();
      }	
      else if(event.key==='w'){
      myFunction41();
      }	
      else if(event.key==='e'){
      myFunction42();
      }	
      else if(event.key==='r'){
      myFunction43();
      }	
      else if(event.key==='t'){
      myFunction44();
      }	
      else if(event.key==='y'){
      myFunction45();
      }	
      else if(event.key==='u'){
      myFunction46();
      }	
      else if(event.key==='i'){
      myFunction47();
      }	
      else if(event.key==='o'){
      myFunction48();
      }	
      else if(event.key==='p'){
      myFunction49();
      }	
      else if(event.key==='1'){
      myFunction30();
      }	
      else if(event.key==='2'){
      myFunction31();
      }	
      else if(event.key==='3'){
      myFunction32();
      }	
      else if(event.key==='4'){
      myFunction33();
      }	
      else if(event.key==='5'){
      myFunction34();
      }	
      else if(event.key==='6'){
      myFunction35();
      }	
      else if(event.key==='7'){
      myFunction36();
      }	
      else if(event.key==='8'){
      myFunction37();
      }	
      else if(event.key==='9'){
      myFunction38();
      }	
      else if(event.key==='0'){
      myFunction39();
      }	
      else if(event.key==='A'){
      myFunction20();
      }	
      else if(event.key==='S'){
      myFunction21();
      }	
      else if(event.key==='D'){
      myFunction22();
      }	
      else if(event.key==='F'){
      myFunction23();
      }	
      else if(event.key==='G'){
      myFunction24();
      }	
      else if(event.key==='H'){
      myFunction25();
      }	
      else if(event.key==='J'){
      myFunction26();
      }	
      else if(event.key==='K'){
      myFunction27();
      }	
      else if(event.key==='L'){
      myFunction28();
      }	
      else if(event.key==='Q'){
      myFunction10();
      }	
      else if(event.key==='W'){
      myFunction11();
      }	
      else if(event.key==='E'){
      myFunction12();
      }	
      else if(event.key==='R'){
      myFunction13();
      }	
      else if(event.key==='T'){
      myFunction14();
      }	
      else if(event.key==='Y'){
      myFunction15();
      }	
      else if(event.key==='U'){
      myFunction16();
      }	
      else if(event.key==='I'){
      myFunction17();
      }	
      else if(event.key==='O'){
      myFunction18();
      }	
      else if(event.key==='P'){
      myFunction19();
      }	
      else if(event.key===','){
      the_prev();	
      }	
      else if(event.key==='.'){
      the_next();	
      }
      else if(event.key===' '){
      myFunctionClear1();
      myFunctionClear2()
      myFunctionClear3()
      myFunctionClear4()
      myFunctionClear5()
      myFunctionClear6()      
      }	
      	
  });

function hide_switch() {
	document.getElementById("all_buttons").style.display="none";
        document.getElementById("hide_switch").style.display="none";
	document.getElementById("show_switch").style.display="block";	
	}
function show_switch() {
	document.getElementById("all_buttons").style.display="block";
        document.getElementById("hide_switch").style.display="block";
        document.getElementById("show_switch").style.display="none";
	
	}

function reset_style(elem){
	document.getElementById(elem).style.left="0px"
	document.getElementById(elem).style.top="-14px"

}


document.getElementById("1_blank").addEventListener("mouseover",function(){
                myFunctionClear1()
                });

document.getElementById("2_blank").addEventListener("mouseover",function(){
                myFunctionClear2()
                });

document.getElementById("3_blank").addEventListener("mouseover",function(){
                myFunctionClear3()
                });

document.getElementById("4_blank").addEventListener("mouseover",function(){
                myFunctionClear4()
                });

document.getElementById("5_blank").addEventListener("mouseover",function(){
                myFunctionClear5()
                });

document.getElementById("6_blank").addEventListener("mouseover",function(){
                myFunctionClear6()
                });



document.getElementById("10").addEventListener("mouseover",function(){
                myFunction10()
                });
document.getElementById("11").addEventListener("mouseover",function(){
                myFunction11()
                });
document.getElementById("12").addEventListener("mouseover",function(){
                myFunction12()
                });
document.getElementById("13").addEventListener("mouseover",function(){
                myFunction13()
                });
document.getElementById("14").addEventListener("mouseover",function(){
                myFunction14()
                });
document.getElementById("15").addEventListener("mouseover",function(){
                myFunction15()
                });
document.getElementById("16").addEventListener("mouseover",function(){
                myFunction16()
                });
document.getElementById("17").addEventListener("mouseover",function(){
                myFunction17()
                });
document.getElementById("18").addEventListener("mouseover",function(){
                myFunction18()
                });
document.getElementById("19").addEventListener("mouseover",function(){
                myFunction19()
                });
document.getElementById("110").addEventListener("mouseover",function(){
                myFunction110()
                });
document.getElementById("111").addEventListener("mouseover",function(){
                myFunction111()
                });
document.getElementById("112").addEventListener("mouseover",function(){
                myFunction112()
                });
document.getElementById("113").addEventListener("mouseover",function(){
                myFunction113()
                });
document.getElementById("114").addEventListener("mouseover",function(){
                myFunction114()
                });
document.getElementById("115").addEventListener("mouseover",function(){
                myFunction115()
                });
document.getElementById("116").addEventListener("mouseover",function(){
                myFunction116()
                });
document.getElementById("117").addEventListener("mouseover",function(){
                myFunction117()
                });
document.getElementById("118").addEventListener("mouseover",function(){
                myFunction118()
                });
document.getElementById("119").addEventListener("mouseover",function(){
                myFunction119()
                });
document.getElementById("120").addEventListener("mouseover",function(){
                myFunction120()
                });
document.getElementById("121").addEventListener("mouseover",function(){
                myFunction121()
                });
document.getElementById("20").addEventListener("mouseover",function(){
                myFunction20()
                });
document.getElementById("21").addEventListener("mouseover",function(){
                myFunction21()
                });
document.getElementById("22").addEventListener("mouseover",function(){
                myFunction22()
                });
document.getElementById("23").addEventListener("mouseover",function(){
                myFunction23()
                });
document.getElementById("24").addEventListener("mouseover",function(){
                myFunction24()
                });
document.getElementById("25").addEventListener("mouseover",function(){
                myFunction25()
                });
document.getElementById("26").addEventListener("mouseover",function(){
                myFunction26()
                });
document.getElementById("27").addEventListener("mouseover",function(){
                myFunction27()
                });
document.getElementById("28").addEventListener("mouseover",function(){
                myFunction28()
                });
document.getElementById("29").addEventListener("mouseover",function(){
                myFunction29()
                });
document.getElementById("210").addEventListener("mouseover",function(){
                myFunction210()
                });
document.getElementById("211").addEventListener("mouseover",function(){
                myFunction211()
                });
document.getElementById("212").addEventListener("mouseover",function(){
                myFunction212()
                });
document.getElementById("213").addEventListener("mouseover",function(){
                myFunction213()
                });
document.getElementById("214").addEventListener("mouseover",function(){
                myFunction214()
                });
document.getElementById("215").addEventListener("mouseover",function(){
                myFunction215()
                });
document.getElementById("216").addEventListener("mouseover",function(){
                myFunction216()
                });
document.getElementById("217").addEventListener("mouseover",function(){
                myFunction217()
                });
document.getElementById("218").addEventListener("mouseover",function(){
                myFunction218()
                });
document.getElementById("219").addEventListener("mouseover",function(){
                myFunction219()
                });
document.getElementById("220").addEventListener("mouseover",function(){
                myFunction220()
                });
document.getElementById("221").addEventListener("mouseover",function(){
                myFunction221()
                });
document.getElementById("30").addEventListener("mouseover",function(){
                myFunction30()
                });
document.getElementById("31").addEventListener("mouseover",function(){
                myFunction31()
                });
document.getElementById("32").addEventListener("mouseover",function(){
                myFunction32()
                });
document.getElementById("33").addEventListener("mouseover",function(){
                myFunction33()
                });
document.getElementById("34").addEventListener("mouseover",function(){
                myFunction34()
                });
document.getElementById("35").addEventListener("mouseover",function(){
                myFunction35()
                });
document.getElementById("36").addEventListener("mouseover",function(){
                myFunction36()
                });
document.getElementById("37").addEventListener("mouseover",function(){
                myFunction37()
                });
document.getElementById("38").addEventListener("mouseover",function(){
                myFunction38()
                });
document.getElementById("39").addEventListener("mouseover",function(){
                myFunction39()
                });
document.getElementById("310").addEventListener("mouseover",function(){
                myFunction310()
                });
document.getElementById("311").addEventListener("mouseover",function(){
                myFunction311()
                });
document.getElementById("312").addEventListener("mouseover",function(){
                myFunction312()
                });
document.getElementById("313").addEventListener("mouseover",function(){
                myFunction313()
                });
document.getElementById("314").addEventListener("mouseover",function(){
                myFunction314()
                });
document.getElementById("315").addEventListener("mouseover",function(){
                myFunction315()
                });
document.getElementById("316").addEventListener("mouseover",function(){
                myFunction316()
                });
document.getElementById("317").addEventListener("mouseover",function(){
                myFunction317()
                });
document.getElementById("318").addEventListener("mouseover",function(){
                myFunction318()
                });
document.getElementById("319").addEventListener("mouseover",function(){
                myFunction319()
                });
document.getElementById("320").addEventListener("mouseover",function(){
                myFunction320()
                });
document.getElementById("321").addEventListener("mouseover",function(){
                myFunction321()
                });
document.getElementById("40").addEventListener("mouseover",function(){
                myFunction40()
                });
document.getElementById("41").addEventListener("mouseover",function(){
                myFunction41()
                });
document.getElementById("42").addEventListener("mouseover",function(){
                myFunction42()
                });
document.getElementById("43").addEventListener("mouseover",function(){
                myFunction43()
                });
document.getElementById("44").addEventListener("mouseover",function(){
                myFunction44()
                });
document.getElementById("45").addEventListener("mouseover",function(){
                myFunction45()
                });
document.getElementById("46").addEventListener("mouseover",function(){
                myFunction46()
                });
document.getElementById("47").addEventListener("mouseover",function(){
                myFunction47()
                });
document.getElementById("48").addEventListener("mouseover",function(){
                myFunction48()
                });
document.getElementById("49").addEventListener("mouseover",function(){
                myFunction49()
                });
document.getElementById("410").addEventListener("mouseover",function(){
                myFunction410()
                });
document.getElementById("411").addEventListener("mouseover",function(){
                myFunction411()
                });
document.getElementById("412").addEventListener("mouseover",function(){
                myFunction412()
                });
document.getElementById("413").addEventListener("mouseover",function(){
                myFunction413()
                });
document.getElementById("414").addEventListener("mouseover",function(){
                myFunction414()
                });
document.getElementById("415").addEventListener("mouseover",function(){
                myFunction415()
                });
document.getElementById("416").addEventListener("mouseover",function(){
                myFunction416()
                });
document.getElementById("417").addEventListener("mouseover",function(){
                myFunction417()
                });
document.getElementById("418").addEventListener("mouseover",function(){
                myFunction418()
                });
document.getElementById("419").addEventListener("mouseover",function(){
                myFunction419()
                });
document.getElementById("420").addEventListener("mouseover",function(){
                myFunction420()
                });
document.getElementById("421").addEventListener("mouseover",function(){
                myFunction421()
                });
document.getElementById("50").addEventListener("mouseover",function(){
                myFunction50()
                });
document.getElementById("51").addEventListener("mouseover",function(){
                myFunction51()
                });
document.getElementById("52").addEventListener("mouseover",function(){
                myFunction52()
                });
document.getElementById("53").addEventListener("mouseover",function(){
                myFunction53()
                });
document.getElementById("54").addEventListener("mouseover",function(){
                myFunction54()
                });
document.getElementById("55").addEventListener("mouseover",function(){
                myFunction55()
                });
document.getElementById("56").addEventListener("mouseover",function(){
                myFunction56()
                });
document.getElementById("57").addEventListener("mouseover",function(){
                myFunction57()
                });
document.getElementById("58").addEventListener("mouseover",function(){
                myFunction58()
                });
document.getElementById("59").addEventListener("mouseover",function(){
                myFunction59()
                });
document.getElementById("510").addEventListener("mouseover",function(){
                myFunction510()
                });
document.getElementById("511").addEventListener("mouseover",function(){
                myFunction511()
                });
document.getElementById("512").addEventListener("mouseover",function(){
                myFunction512()
                });
document.getElementById("513").addEventListener("mouseover",function(){
                myFunction513()
                });
document.getElementById("514").addEventListener("mouseover",function(){
                myFunction514()
                });
document.getElementById("515").addEventListener("mouseover",function(){
                myFunction515()
                });
document.getElementById("516").addEventListener("mouseover",function(){
                myFunction516()
                });
document.getElementById("517").addEventListener("mouseover",function(){
                myFunction517()
                });
document.getElementById("518").addEventListener("mouseover",function(){
                myFunction518()
                });
document.getElementById("519").addEventListener("mouseover",function(){
                myFunction519()
                });
document.getElementById("520").addEventListener("mouseover",function(){
                myFunction520()
                });
document.getElementById("521").addEventListener("mouseover",function(){
                myFunction521()
                });
document.getElementById("60").addEventListener("mouseover",function(){
                myFunction60()
                });
document.getElementById("61").addEventListener("mouseover",function(){
                myFunction61()
                });
document.getElementById("62").addEventListener("mouseover",function(){
                myFunction62()
                });
document.getElementById("63").addEventListener("mouseover",function(){
                myFunction63()
                });
document.getElementById("64").addEventListener("mouseover",function(){
                myFunction64()
                });
document.getElementById("65").addEventListener("mouseover",function(){
                myFunction65()
                });
document.getElementById("66").addEventListener("mouseover",function(){
                myFunction66()
                });
document.getElementById("67").addEventListener("mouseover",function(){
                myFunction67()
                });
document.getElementById("68").addEventListener("mouseover",function(){
                myFunction68()
                });
document.getElementById("69").addEventListener("mouseover",function(){
                myFunction69()
                });
document.getElementById("610").addEventListener("mouseover",function(){
                myFunction610()
                });
document.getElementById("611").addEventListener("mouseover",function(){
                myFunction611()
                });
document.getElementById("612").addEventListener("mouseover",function(){
                myFunction612()
                });
document.getElementById("613").addEventListener("mouseover",function(){
                myFunction613()
                });
document.getElementById("614").addEventListener("mouseover",function(){
                myFunction614()
                });
document.getElementById("615").addEventListener("mouseover",function(){
                myFunction615()
                });
document.getElementById("616").addEventListener("mouseover",function(){
                myFunction616()
                });
document.getElementById("617").addEventListener("mouseover",function(){
                myFunction617()
                });
document.getElementById("618").addEventListener("mouseover",function(){
                myFunction618()
                });
document.getElementById("619").addEventListener("mouseover",function(){
                myFunction619()
                });
document.getElementById("620").addEventListener("mouseover",function(){
                myFunction620()
                });
document.getElementById("621").addEventListener("mouseover",function(){
                myFunction621()
                });

function myFunction10() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="0"
    
}


function myFunction11() {
    document.getElementById(x_pos[i]).style.left="0px"
    document.getElementById(x_pos[i]).innerHTML="1"
}
function myFunction12() {
    document.getElementById(x_pos[i]).innerHTML="2"
}
function myFunction13() {
    document.getElementById(x_pos[i]).innerHTML="3"
}
function myFunction14() {
    document.getElementById(x_pos[i]).innerHTML="4"
}
function myFunction15() {
    document.getElementById(x_pos[i]).innerHTML="5"
}
function myFunction16() {
    document.getElementById(x_pos[i]).innerHTML="6"
}
function myFunction17() {
    document.getElementById(x_pos[i]).innerHTML="7"
}
function myFunction18() {
    document.getElementById(x_pos[i]).innerHTML="8"
}
function myFunction19() {
    document.getElementById(x_pos[i]).innerHTML="9"
}
function myFunction110() {
    document.getElementById(x_pos[i]).innerHTML="10"
}
function myFunction111() {
    document.getElementById(x_pos[i]).innerHTML="11"
}
function myFunction112() {
    document.getElementById(x_pos[i]).innerHTML="12"

}
function myFunction113() {
    document.getElementById(x_pos[i]).innerHTML="13"
    }
function myFunction114() {
    document.getElementById(x_pos[i]).innerHTML="14"
    }
function myFunction115() {
    document.getElementById(x_pos[i]).innerHTML="15"
    }
function myFunction116() {
    document.getElementById(x_pos[i]).innerHTML="16"
    }
function myFunction117() {
    document.getElementById(x_pos[i]).innerHTML="17"
    }
function myFunction118() {
    document.getElementById(x_pos[i]).innerHTML="18"
    }
function myFunction119() {
    document.getElementById(x_pos[i]).innerHTML="19"
    }
function myFunction120() {
    document.getElementById(x_pos[i]).innerHTML="20"
    }
function myFunction121() {
    document.getElementById(x_pos[i]).innerHTML="21"
    }


function myFunction20() {
    document.getElementById(x_pos2[i]).innerHTML="0"
    }
function myFunction21() {
    document.getElementById(x_pos2[i]).innerHTML="1"
    }
function myFunction22() {
    document.getElementById(x_pos2[i]).innerHTML="2"
    }
function myFunction23() {
    document.getElementById(x_pos2[i]).innerHTML="3"
    }
function myFunction24() {
    document.getElementById(x_pos2[i]).innerHTML="4"
    }
function myFunction25() {
    document.getElementById(x_pos2[i]).innerHTML="5"
    }
function myFunction26() {
    document.getElementById(x_pos2[i]).innerHTML="6"
    }
function myFunction27() {
    document.getElementById(x_pos2[i]).innerHTML="7"
    }
function myFunction28() {
    document.getElementById(x_pos2[i]).innerHTML="8"
    }
function myFunction29() {
    document.getElementById(x_pos2[i]).innerHTML="9"
    }
function myFunction210() {
    document.getElementById(x_pos2[i]).innerHTML="10"
    }
function myFunction211() {
    document.getElementById(x_pos2[i]).innerHTML="11"
    }
function myFunction212() {
    document.getElementById(x_pos2[i]).innerHTML="12"
    }
function myFunction213() {
    document.getElementById(x_pos2[i]).innerHTML="13"
    }
function myFunction214() {
    document.getElementById(x_pos2[i]).innerHTML="14"
    }
function myFunction215() {
    document.getElementById(x_pos2[i]).innerHTML="15"
    }
function myFunction216() {
    document.getElementById(x_pos2[i]).innerHTML="16"
    }
function myFunction217() {
    document.getElementById(x_pos2[i]).innerHTML="17"
    }
function myFunction218() {
    document.getElementById(x_pos2[i]).innerHTML="18"
    }
function myFunction219() {
    document.getElementById(x_pos2[i]).innerHTML="19"
    }
function myFunction220() {
    document.getElementById(x_pos2[i]).innerHTML="20"
    }
function myFunction221() {
    document.getElementById(x_pos2[i]).innerHTML="21"
    }

function myFunction30() {
    document.getElementById(x_pos3[i]).innerHTML="0"
    }
function myFunction31() {
    document.getElementById(x_pos3[i]).innerHTML="1"
    }
function myFunction32() {
    document.getElementById(x_pos3[i]).innerHTML="2"
    }
function myFunction33() {
    document.getElementById(x_pos3[i]).innerHTML="3"
    }
function myFunction34() {
    document.getElementById(x_pos3[i]).innerHTML="4"
    }
function myFunction35() {
    document.getElementById(x_pos3[i]).innerHTML="5"
    }
function myFunction36() {
    document.getElementById(x_pos3[i]).innerHTML="6"
    }
function myFunction37() {
    document.getElementById(x_pos3[i]).innerHTML="7"
    }
function myFunction38() {
    document.getElementById(x_pos3[i]).innerHTML="8"
    }
function myFunction39() {
    document.getElementById(x_pos3[i]).innerHTML="9"
    }
function myFunction310() {
    document.getElementById(x_pos3[i]).innerHTML="10"
    }
function myFunction311() {
    document.getElementById(x_pos3[i]).innerHTML="11"
    }
function myFunction312() {
    document.getElementById(x_pos3[i]).innerHTML="12"
    }
function myFunction313() {
    document.getElementById(x_pos3[i]).innerHTML="13"
    }
function myFunction314() {
    document.getElementById(x_pos3[i]).innerHTML="14"
    }
function myFunction315() {
    document.getElementById(x_pos3[i]).innerHTML="15"
    }
function myFunction316() {
    document.getElementById(x_pos3[i]).innerHTML="16"
    }
function myFunction317() {
    document.getElementById(x_pos3[i]).innerHTML="17"
    }
function myFunction318() {
    document.getElementById(x_pos3[i]).innerHTML="18"
    }
function myFunction319() {
    document.getElementById(x_pos3[i]).innerHTML="19"
    }
function myFunction320() {
    document.getElementById(x_pos3[i]).innerHTML="20"
    }
function myFunction321() {
    document.getElementById(x_pos3[i]).innerHTML="21"
    }

function myFunction40() {
    document.getElementById(x_pos4[i]).innerHTML="0"
    }
function myFunction41() {
    document.getElementById(x_pos4[i]).innerHTML="1"
    }
function myFunction42() {
    document.getElementById(x_pos4[i]).innerHTML="2"
    }
function myFunction43() {
    document.getElementById(x_pos4[i]).innerHTML="3"
    }
function myFunction44() {
    document.getElementById(x_pos4[i]).innerHTML="4"
    }
function myFunction45() {
    document.getElementById(x_pos4[i]).innerHTML="5"
    }
function myFunction46() {
    document.getElementById(x_pos4[i]).innerHTML="6"
    }
function myFunction47() {
    document.getElementById(x_pos4[i]).innerHTML="7"
    }
function myFunction48() {
    document.getElementById(x_pos4[i]).innerHTML="8"
    }
function myFunction49() {
    document.getElementById(x_pos4[i]).innerHTML="9"
    }
function myFunction410() {
    document.getElementById(x_pos4[i]).innerHTML="10"
    }
function myFunction411() {
    document.getElementById(x_pos4[i]).innerHTML="11"
    }
function myFunction412() {
    document.getElementById(x_pos4[i]).innerHTML="12"
    }
function myFunction413() {
    document.getElementById(x_pos4[i]).innerHTML="13"
    }
function myFunction414() {
    document.getElementById(x_pos4[i]).innerHTML="14"
    }
function myFunction415() {
    document.getElementById(x_pos4[i]).innerHTML="15"
    }
function myFunction416() {
    document.getElementById(x_pos4[i]).innerHTML="16"
    }
function myFunction417() {
    document.getElementById(x_pos4[i]).innerHTML="17"
    }
function myFunction418() {
    document.getElementById(x_pos4[i]).innerHTML="18"
    }
function myFunction419() {
    document.getElementById(x_pos4[i]).innerHTML="19"
    }
function myFunction420() {
    document.getElementById(x_pos4[i]).innerHTML="20"
    }
function myFunction421() {
    document.getElementById(x_pos4[i]).innerHTML="21"
    }
function myFunction50() {
    document.getElementById(x_pos5[i]).innerHTML="0"
    }
function myFunction51() {
    document.getElementById(x_pos5[i]).innerHTML="1"
    }
function myFunction52() {
    document.getElementById(x_pos5[i]).innerHTML="2"
    }
function myFunction53() {
    document.getElementById(x_pos5[i]).innerHTML="3"
    }
function myFunction54() {
    document.getElementById(x_pos5[i]).innerHTML="4"
    }
function myFunction55() {
    document.getElementById(x_pos5[i]).innerHTML="5"
    }
function myFunction56() {
    document.getElementById(x_pos5[i]).innerHTML="6"
    }
function myFunction57() {
    document.getElementById(x_pos5[i]).innerHTML="7"
    }
function myFunction58() {
    document.getElementById(x_pos5[i]).innerHTML="8"
    }
function myFunction59() {
    document.getElementById(x_pos5[i]).innerHTML="9"
    }
function myFunction510() {
    document.getElementById(x_pos5[i]).innerHTML="10"
    }
function myFunction511() {
    document.getElementById(x_pos5[i]).innerHTML="11"
    }
function myFunction512() {
    document.getElementById(x_pos5[i]).innerHTML="12"
    }
function myFunction513() {
    document.getElementById(x_pos5[i]).innerHTML="13"
    }
function myFunction514() {
    document.getElementById(x_pos5[i]).innerHTML="14"
    }
function myFunction515() {
    document.getElementById(x_pos5[i]).innerHTML="15"
    }
function myFunction516() {
    document.getElementById(x_pos5[i]).innerHTML="16"
    }
function myFunction517() {
    document.getElementById(x_pos5[i]).innerHTML="17"
    }
function myFunction518() {
    document.getElementById(x_pos5[i]).innerHTML="18"
    }
function myFunction519() {
    document.getElementById(x_pos5[i]).innerHTML="19"
    }
function myFunction520() {
    document.getElementById(x_pos5[i]).innerHTML="20"
    }
function myFunction521() {
    document.getElementById(x_pos5[i]).innerHTML="21"
    }
function myFunction60() {
    document.getElementById(x_pos6[i]).innerHTML="0"
    }
function myFunction61() {
    document.getElementById(x_pos6[i]).innerHTML="1"
    }
function myFunction62() {
    document.getElementById(x_pos6[i]).innerHTML="2"
    }
function myFunction63() {
    document.getElementById(x_pos6[i]).innerHTML="3"
    }
function myFunction64() {
    document.getElementById(x_pos6[i]).innerHTML="4"
    }
function myFunction65() {
    document.getElementById(x_pos6[i]).innerHTML="5"
    }
function myFunction66() {
    document.getElementById(x_pos6[i]).innerHTML="6"
    }
function myFunction67() {
    document.getElementById(x_pos6[i]).innerHTML="7"
    }
function myFunction68() {
    document.getElementById(x_pos6[i]).innerHTML="8"
    }
function myFunction69() {
    document.getElementById(x_pos6[i]).innerHTML="9"
    }
function myFunction610() {
    document.getElementById(x_pos6[i]).innerHTML="10"
    }
function myFunction611() {
    document.getElementById(x_pos6[i]).innerHTML="11"
    }
function myFunction612() {
    document.getElementById(x_pos6[i]).innerHTML="12"
    }
function myFunction613() {
    document.getElementById(x_pos6[i]).innerHTML="13"
    }
function myFunction614() {
    document.getElementById(x_pos6[i]).innerHTML="14"
    }
function myFunction615() {
    document.getElementById(x_pos6[i]).innerHTML="15"
    }
function myFunction616() {
    document.getElementById(x_pos6[i]).innerHTML="16"
    }
function myFunction617() {
    document.getElementById(x_pos6[i]).innerHTML="17"
    }
function myFunction618() {
    document.getElementById(x_pos6[i]).innerHTML="18"
    }
function myFunction619() {
    document.getElementById(x_pos6[i]).innerHTML="19"
    }
function myFunction620() {
    document.getElementById(x_pos6[i]).innerHTML="20"
    }
function myFunction621() {
    document.getElementById(x_pos6[i]).innerHTML="21"
    	
    }


function myFunctionClear1(){
	document.getElementById(x_pos[i]).innerHTML=""
}
function myFunctionClear2(){
	document.getElementById(x_pos2[i]).innerHTML=""
}
function myFunctionClear3(){
	document.getElementById(x_pos3[i]).innerHTML=""
}
function myFunctionClear4(){
	document.getElementById(x_pos4[i]).innerHTML=""
}
function myFunctionClear5(){
	document.getElementById(x_pos5[i]).innerHTML=""
}
function myFunctionClear6(){
	document.getElementById(x_pos6[i]).innerHTML=""
}



function strum_1(){
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="|"
    document.getElementById(x_pos[i]).style.left="20px"
}
function strum_2(){
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="|"
    document.getElementById(x_pos2[i]).style.left="20px"
}
function strum_3(){
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="|"
    document.getElementById(x_pos3[i]).style.left="20px"
}
function strum_4(){
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="|"
    document.getElementById(x_pos4[i]).style.left="20px"
}
function strum_5(){
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="|"
    document.getElementById(x_pos5[i]).style.left="20px"
}
function strum_6(){
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="|"
    document.getElementById(x_pos6[i]).style.left="20px"
}

function strum_down_1(){
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="^"
    document.getElementById(x_pos[i]).style.left="20px"        
}
function strum_down_2(){
    reset_style(x_pos2[i])	 
    document.getElementById(x_pos2[i]).innerHTML="^"
    document.getElementById(x_pos2[i]).style.left="20px"
}
function strum_down_3(){
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="^"
    document.getElementById(x_pos3[i]).style.left="20px"        
}
function strum_down_4(){
    reset_style(x_pos4[i])	 
    document.getElementById(x_pos4[i]).innerHTML="^"
    document.getElementById(x_pos4[i]).style.left="20px"
}
function strum_down_5(){
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="^"
    document.getElementById(x_pos5[i]).style.left="20px"        
}
function strum_down_6(){
    reset_style(x_pos6[i])	 
    document.getElementById(x_pos6[i]).innerHTML="^"
    document.getElementById(x_pos6[i]).style.left="20px"
}




function the_next(){
    i=i+1
    var marker=document.getElementById("marker")
    marker.style.marginLeft=i*44+".px";
}
function the_prev(){
    i=i-1
    var marker=document.getElementById("marker")
    marker.style.marginLeft=i*44+".px";
}
