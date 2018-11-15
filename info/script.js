var scheduleSred =  [510,555,565,610,625,670,690,735,755,800,815,860,870,915,925,970];
var scheduleHefsh = [530,575,585,630,645,690,710,755,775,820,835,880,890,935];
//определяем время (массивы для этого)
var c10_6 = [['0','физика:401/ФЛ','физика:401/ФЛ','физика:401/ФЛ','физика:401/ФЛ','физика:401','инфа:111/100','инфа:111/100'],['0'],['0','нет урока','алгебра/208','алгебра/208','алгебра/208','общество/303','общество/303'
],['1','физ-ра','физ-ра	','матан','матан','биология','обж','перерыв(45мин)','матан','матан']];
var c10_5= [['1','матан','матан','русский','литература','физ-ра','история','история'],[],['1','матан','матан','общество','общество','обж','физ-ра','физ-ра'],['0','русский:201','англ:202/200','англ:202/200','физика:402','ФЛ','ФЛ','физика']
];
var c10_4= [['1','обществознание','обществознание','физ-ра','физ-ра','алгебра','алгебра','алгебра'],[],['0','химия:306','химия:306','русский:201','литра:302','матан:202','матан:202'],['1','обж','физ-ра','алгебра','алгебра','гео','биология']
];
var c10_3= [['1','история','история','физ-ра','физ-ра','биология','обж'],[],['0','общество:303','общество:303','гео:302','литра:201','гео:207','гео:207','кл.час:301'],['0','алгебра:402','алгебра:402','алгебра:402','литра:201','англ:307/200','англ:307/200']
];
var c10_2= [['1','физ-ра','физ-ра','матан','матан','обществознание','обществознание'],[],['0','физика:403/ФЛ','физика:403/ФЛ','физика:403/ФЛ','физика:403/ФЛ','физика:403','био:308','литра:307'],['1','физ-ра','обж','литература','литература','гео','гео','гео']
];
var c10_1= [['1','физ-ра','физ-ра','история','история','литература','русский'],[],['0','инфа:100','инфа:100','матан:209','матан:209','русский:201','литра:201'],['0','гео:209','гео:209','гео:209','англ303/100','англ:303/100','литра:201','кл.час:209']
];
var c9_5= [['0','английский','английский','русский','литература','физика','физика'],[],['1','нет урока','география','физ-ра','физ-ра','общество','общество','алгебра','алгебра'],['0','история:302','история:302','био:308','алгебра209','алгебра:209','алгебра:209']
];
var c9_4= [['0','литература','литература','английский','английский','русский','физика','физ-ра'],[],['0','физика:309','инфа:111','инфа:111','физика:402','алгебра:209','алгебра:209','биология:308'],['0','нет урока','алгебра:208','алгебра:208','химия:306','химия:306','англ:300/400','био:308']
];
var c9_3= [['0','нет урока','искусство','физика','физика','английский','английский'],[],['','','','','','',''],['0','кл.час:209','химия:306','химия:306','геом:208','геом:208','алгебра:208','англ:300/400']
];
var c9_2= [['0','искусство','алгебра','алгебра','история','история'],[],['1','физ-ра','физ-ра','география','география','английский','английский'],['0','русский:307','био:308','общество:302','физика:403','физика:403','литра:307']
];
var c11_2= [['0','402','100','100','ФЛ','ФЛ','307','307','307'],[],['0','физика:402','физика:402','русский:307','русский:307','алгебра:208','алгебра:208','алгебра:208'],['1','общество','общество','физ-ра','физ-ра','матан','матан','матан']
];
var c11_1= [['1','русский','литература','обществознание','обществознание','физ-ра','физ-ра','обж'],[],['0','нет урока','матан:207','история:308','история:308','инфа:111','ФЛ','ФЛ','инфа:111'],['0','алгебра:207','алгебра:207','алгебра:207','био:308','англ:300/400','физика:403','физика:403']
];
var c11_3= [['1','300/400','300/400','307','202','202','402'],[],['0','история:308','история:308','общество:303','общество:303','биология:308','русский:307','физика:401'],['1','нет урока','нет урока','физ-ра','физ-ра','литра','литра','литра']
];
let Gname = '';
function run(name){
	Gname = name;
	setInterval(whatTime,1000);
}
function whatTime() {
  
  let name = Gname;
  console.log(name);
  let date = new Date()
  let hours = date.getHours()
  let minutes =date.getMinutes()
  let min = (hours*60)+minutes;
  let day = date.getDay()
  let yrok = -1;
  switch(day){

    case 0:
    	setText(name,'средний','2',kab,'name','street','floor','kab');
    	
  	case 1: // это день день 1 
	   
	   AllFunc(name,min,0);
   
  	break;
  	case 2:
	  
		 AllFunc(name,min,1);
  	break;
  	case 3:
  
	  AllFunc(name,min,2);
  	break;
  	case 4:
  	 
	    AllFunc(name,min,3);
  	break;
  	case 5:
  	
	    AllFunc(name,min,4);
  	break;
  	case 6:
  	 
	    AllFunc(name,min,5);
  	break;
  	default:break;
  }

}


function setText(name,school,floor,kab,elem,elem1,elem2,elem3) {

  
  let textL = document.getElementById(elem);
  textL.innerText = name + ' класс';
  textL = document.getElementById(elem1);
  textL.innerText = school;
  textL = document.getElementById(elem2);
  textL.innerText = kab + '';
  textL = document.getElementById(elem3);
 // if(floor == '')
  //textL.innerText = floor;
//else 
//	 textL.innerText = floor + ' этаж';
}
//COMPLITE!
function AllFunc(name,min,x){
	    let yrok = -1;
  		let arr = ClassName(name); //функция берет массив по названию класса
	     console.log(arr + '- asd');
	    //теперь у нас есть название класса и его массив уроков . найдем же теперь шевченко это или нет
	    let tr_fa = arr[x][0];//нашли школу . теперь найдем время . сделаем две функции для шевченко и для сердней
	    console.log(tr_fa + '- школа');
	     console.log(x + '- школа');
	    switch(tr_fa){
	    	case '0': 
	    	yrok = SredSchool(min)
	    	break;
	    	case '1':
	    	yrok = ShefSchool(min)
	    	break;
	    	default:console.log('default');
	    	break;
	    }
	  
	    //теперь у нас есть урок , школа , массив уроков . осталось найти только кабинет . найдем его
	    if ( yrok == -1 ){
          console.log('night');
	    	switch(tr_fa){
	    	case '0': 
	         setText(name,'средний','','скоро','name','street','floor','kab');
	    	break;
	    	case '1':
	    	setText(name,'шевченко','','скоро','name','street','floor','kab');
	    	break;
	    	default:
	    	console.log('default');
	    	break;
           }
	    
	    }//123123
	    else if ( yrok == -2 ){
	    	console.log('-2!');
 		   setText(name,'возможно','','спят','name','street','floor','kab');
	    
	    }
	    else if ( yrok == -3){
   		   setText(name,'дома','','делают дз','name','street','floor','kab');
	    console.log('-3!');
	    }
	    else if(yrok == -4){
           setText(name,'средний','','на кружках','name','street','floor','kab');
	    	console.log('-4!');
	    }
	    else{
            let kab = arr[x][yrok];
              console.log('21222');
              console.log(arr[x].length);
            if( kab == 8 && name == '10-6' && tr_fa==1){
               setText(name,'средний','2','407','name','street','floor','kab');
	    
            }
            
            else {
			if ( yrok>= arr[x].length){
            	   setText(name,'средний','2','едут домой','name','street','floor','kab');
	    
            }
            else {
            	 switch(tr_fa){
	    	case '0': 
	         setText(name,'средний','2',kab,'name','street','floor','kab');
	    	break;
	    	case '1':
	    	setText(name,'шевченко','2',kab,'name','street','floor','kab');
	    	break;
	    	default:console.log('default');
	    	break;
	   		 }
            }
		   
	   		}
		}
	    console.log(yrok);

	    //а теперь выведем это на сайт

		
		
}
function ClassName(name){
	let arr = ['1','2'];
	switch(name){
       case '10-6':
       arr = c10_6;
       break;
       case '10-5':
       arr = c10_5;
       break;
       case '10-4':
       arr = c10_4;
       break;
       case '10-3':
       arr = c10_3;
       break;
       case '10-2':
       arr = c10_2;
       break;
       case '10-1':
       arr = c10_1;
       break;
       case '11-3':
       arr = c11_3;
       break;
       case '11-2':
       arr = c11_2;
       break;
       case '11-1':
       arr = c11_1;
       break;
       case '9-4':
       arr = c9_4;
       break;
       case '9-3':
       arr = c9_3;
       break;
         case '9-5':
       arr = c9_3;
       break;
       case '9-2':
       arr = c9_2;
       break;
       default:
       arr = ['0',''];
       break;
	}
	return arr;
}
//COMPLITE
function SredSchool(min){
let answer = -1;
    if(min >= scheduleSred[0] && min <scheduleSred[1]){
       answer = 1;//1ый урок
    }
    else if ( min >= scheduleSred[1] && min < scheduleSred[3]){
    	answer = 2 ;
    }
    else if ( min >= scheduleSred[3] && min < scheduleSred[5] ){
    	answer = 3 ;
    }
    else if ( min >= scheduleSred[5] && min < scheduleSred[7]){
    	answer = 4;
    }
    else if ( min >= scheduleSred[7] && min < scheduleSred[9]){
    	answer = 5;
    }
    else if ( min >= scheduleSred[9] && min < scheduleSred[11]){
    	answer = 6;
    }
    else if ( min >= scheduleSred[11] && min < scheduleSred[13]){
    	answer = 7;
    }
    else if ( min >= scheduleSred[13] && min < scheduleSred[15]){
    	answer = 8;
    }
       else if ( min >= 970 && min < 1080 ){//доп кружки
       	answer = -4;
    }
    else if ( min >= 1080 && min < 1380){//дз
    	answer = -3;
    }
    else if ( min >=0 && min < 420){//night
     	answer = -2;
    }
    else {//morning
        
        answer = -1;

    }
    //16
return answer;
}


function ShefSchool(min){

	let answer = -1;
    if(min >= scheduleHefsh[0] && min <scheduleHefsh[1]){

       answer = 1;//1ый урок

    }
    else if ( min >= scheduleHefsh[1] && min < scheduleHefsh[3]){
    	answer = 2;
    }
    else if ( min >= scheduleHefsh[3] && min < scheduleHefsh[5] ){
    	answer = 3;
    }
    else if ( min >= scheduleHefsh[5] && min < scheduleHefsh[7]){
    	answer = 4;
    }
    else if ( min >= scheduleHefsh[7] && min < scheduleHefsh[9]){
    	answer = 5;
    }
    else if ( min >= scheduleHefsh[9] && min < scheduleHefsh[11]){
    	answer = 6;
    }
    else if ( min >= scheduleHefsh[11] && min < scheduleHefsh[13]){
    	answer = 7;
    }
    else if ( min >= 970 && min < 1080 ){//доп кружки
       	answer = -4;
    }
    else if ( min >= 1080 && min < 1380){//дз
    	answer = -3;
    }
    else if ( min >=0 && min < 420){//night
     	answer = -2;
    }
    else {//morning
        
        answer = -1;

    }
    //-4 - доп кружки 
    //-3 - дз  
    //-2 - NIGHT
    //-1 - morning 
return answer;
}
// -1 = 
// -2 = 
function getName(){
	let textL = document.getElementById('name');
	let text = textL.innerHTML;
	return text;
}

