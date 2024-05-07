$('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});
  
$('.slick-slide').addClass('my-custom-class').css({ 'margin-left': '15px', 'margin-right': '15px', 'border-radius': '10px' });
$('.slick-dots').css({
    'bottom': '20px' 
});

// Adriel,Mude a velocidade conforme teu Gosto, alterando o speed.
// dots são as bolinhas que indicam a posição do slide, voce pode mudar o estilo delas usando .slick-dots, ou alterando ai encima.