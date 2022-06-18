// A simple counter logic in js

document.addEventListener('DOMContentLoaded', ()=>{
    function counter(id, start, end, duration){
        let obj = document.getElementById(id), current = start, range = end - start , increment = end > start ? 1 : -1 ,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval(()=>{
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);

    }
    counter("count1", 0 , 604, 3500);
    counter("count2", 10 , 1134, 3500);
    counter("count3", 40 , 704, 3500);
    counter("count4", 100 , 1204, 3500);

});