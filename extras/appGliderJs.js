console.group("Glider Js"); 

new Glider(document.querySelector(`.glider`), {
    slidesToShow: 4,
    slidesToScroll: 5,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });

console.groupEnd(); 