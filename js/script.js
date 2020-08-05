$(document).ready(function(){
  $('.header-wrapper').slick({
    autoplay: true,
    autoplaySpeed: 2000,
  });

  const normolizeJS = () => {
    document.querySelector('.slick-next').innerHTML = '<i class="fas fa-chevron-right"></i>';
    document.querySelector('.slick-prev').innerHTML = '<i class="fas fa-chevron-left"></i>';
  };  
  
  $('.showBtn').on('click', function() {
    document.getElementById('ser1').classList.toggle('off');
    document.getElementById('ser2').classList.toggle('off1');
    document.getElementById('ser3').classList.toggle('off2');
  });

  $('.news-on').on('click', function() {
    document.querySelector('.news-wrapper2').classList.toggle('news-off');
  });

  normolizeJS();  
});




