var photos = ['images/ayman1.png','images/ayman2.jpg','images/ayman3.png','images/ayman4.png','images/ayman5.png'];
var img = document.querySelector('.center img');

var i = 0;
function next(){
if(i<photos.length-1){
   i++;
   img.src=photos[i];

}else{

   i=0;
   img.src=photos[i];
}

}
function prev(){
   if(i>0){
      i--;
      img.src=photos[i];
   
   }else{
   
      i=photos.length-1;
      img.src=photos[i];
   }
   
   }