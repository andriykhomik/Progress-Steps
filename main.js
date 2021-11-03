const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const progress = document.getElementById('progress')
let currentActive = 1;

next.addEventListener('click', ()=>{
    currentActive++
    if (currentActive > circles.length){
        currentActive = circles.length;
    }
    update();
})

prev.addEventListener('click', ()=>{
    if (currentActive > 1){
        currentActive--
        update();
    }
})

function update(){
    circles.forEach((circle, i)=>{
        if (currentActive > i){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    // if (actives.length > 1){
    //     prev.disabled = false;
    // } else {
    //     prev.disabled = true;
    // }
    prev.disabled = !(actives.length > 1);
    // if (actives.length === circles.length){
    //     next.disabled = true;
    // } else {
    //     next.disabled = false;
    // }
    next.disabled = actives.length === circles.length;
}



