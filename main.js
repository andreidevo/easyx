var scheduleSred =  [510 ,555,565 ,610,625,670,690,735,755,800,815 ,860,870 ,915,925 ,970];
var scheduleHefsh = [530,575,585,630,645,690,710,755,775,820,835,880,890,935];
var smiles =['^ↀᴥↀ^','ʕ•ᴥ•ʔ','(ᵔᴥᵔ)','◉◡◉ ','(¬‿¬) ',' (•◡•)','(✿◠‿◠)'];
//let hours = 10;
//let minutes = 15;
function getLostTime(revSchedule, el,el1) {
  let date = new Date()
  let hours = date.getHours()
  let minutes =date.getMinutes()
  let time = minutes + (hours*60);
  //let revSchedule  = scheduleSred;
  let Exists = 0;
  for (let i =0; i < revSchedule.length; i++)
   { //проходимся по массиву

      if (i+1 < revSchedule.length ) 
      {//чтобы не было выхода за массив

          if (time >= revSchedule[i] && time < revSchedule[i+1]){//определяем где находится время (в каком промежутке)
   
              if ( revSchedule[i+1]-revSchedule[i] == 45){//определяем чем является этот промежуток
                    //урок
                  
                 
                  let answer = revSchedule[i+1]-time;
                   console.log(answer + ' урок');
               
                  Exists = 1;
                /*  
                  if(answer <= 0){
                    if( i + 2 < revSchedule.length){
                      let an = revSchedule[i+2]-revSchedule[i+1];
                      if(an == 1){
                          setText('^-^',el1);
                         setText('меньше минуты до перемены',el);
                      }
                      else{
                         setText('^-^',el1);
                       setText('меньше минуты до перемены',el);//исправить
                      }
                     }
                    else {
                       setText('',el1);
                      setText( 'уроки закончились', el);
                   
                     }

                   }
                   */
                  
                  if(answer == 1){
                    setText('меньше минуты',el1);
                   setText('до перемены', el);
                  }
                  else{
                  setText(answer +' мин',el1);
                  setText('до перемены', el);
                  }
          
                  
                  return(0);
              }
              else {//перемена 
                 console.log(   revSchedule[i+1]-revSchedule[i]);
                  let answer = revSchedule[i+1]-time;
                  console.log(answer + ' перемена');
                /* if(answer <=0 )//если получается отрицательная или положительная
                  {
                     setText('45 мин',el1);
                     setText('до перемены',el);
                  }
                  else//если время больше>0
                  {
                    */
                  if(answer == 1){
                      setText('меньше минуты',el1);
                      setText('до урока',el);
                  }
                  else
                    {
                     setText(answer + ' мин',el1);
                     setText('до урока', el);
                    }
                  Exists = 1;
                  return(1);

              }
              break;
          }
      }
   }


    if(Exists == 0 )
    {
     let x =   getRandomInt(0, smiles.length-1);
    if ( time > revSchedule[revSchedule.length-1] )
    {
       setText('',el1);
    setText( 'уроки закончились', el);
    } 
    else if (time > 270 && time < 470){

      if(revSchedule[0]==530){
        let str = HoursMin(time,530);
      setText(str + '',el1);
      setText( 'до начала уроков', el);
      }
      else if (revSchedule[0]==510){
      let str = HoursMin(time,510);
      setText(str + '',el1);
      setText( 'до начала уроков', el);
      }
     
    
    }
    else if ( time > 470)
    {
    let min = revSchedule[0] - time;
    setText(min + ' мин',el1);
    setText( 'до начала уроков', el);

    }
    else {//132123123

       setText('^-^',el1);
     setText( 'отдыхаем...', el);
   
    }
  }
}




function HoursMin(time,x){
let minutes = x-time;
console.log(minutes);
  let y  = Math.floor( minutes/60 );
  
  let min =minutes - (y*60) ;
  let str = y +'ч ' + min + 'мин' 
  console.log(str);
    return str;

}
function setText(s, elem) {

  let textS = s;
  let textL = document.getElementById(elem);
  textL.innerText = textS;
}

function main() {
  getLostTime(scheduleSred, '111','13');
  getLostTime(scheduleHefsh, '222','12');
}
function getRandomInt(min, max) {

  return Math.floor(Math.random() * (max - min)) + min;
}
setInterval(main, 1000);




main();


