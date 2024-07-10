const load = document.querySelector('.load');

window.addEventListener('load',() => {
    load.animate({
        opacity:[1,0],
        visibility:'hidden',
    },
    {
        duration:1500,
        delay:1200,
        easing:'ease',
        fill:'forwards',
    });
});

const anime = document.querySelector('.gall-left img');
const point = document.querySelectorAll('.list img');

for(let i=0;i<point.length;i++) {
    point[i].addEventListener('mouseover',(active) => {
        anime.src = active.target.src;
        anime.animate({opacity:[0,1]},300);
    });
};

const scroll = document.querySelector('.sns')

const showsns = (entries) => {
    scroll.animate({
        opacity:[0,1],
        filter:['blur(20px)','blur(0)'],
        translate:['0 30px',0],
        fill:'forwards',
    },700)
}

const snsobject = new IntersectionObserver(showsns);
snsobject.observe(document.querySelector('.sns'));


