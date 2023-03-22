$('.disc').hover(function () {
  $(this).find('.content').toggleClass('hide')
})


var vid = document.getElementById("myVideo");

function getVolume() { 
  alert(vid.volume);
} 
  
function setHalfVolume() { 
  vid.volume = 0.2;
} 