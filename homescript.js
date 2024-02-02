const counters = document.querySelectorAll(".counters span");

const countainer = document.querySelector(".counters");

let activated = false;



window.addEventListener("scroll", () => {

    if(
         pageYOffset > countainer.offsetTop -  countainer.offsetHeight - 200 && activated === false

    ){
        counters.forEach(counter => {
            counter.innerText = 0;

            let count = 0;

            const speed = 500;
            function updateCount(){
                const target = parseInt(counter.dataset.count);
                if(count < target){
                    count++;

                    counter.innerText = count;

                    setTimeout(updateCount, 50);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();

            activated = true;
        });
    }else if(
        pageYOffsetTop < countainer.offsetTop - countainer.offsetHeight - 500
        || pageYOffset == 0
        && activated === true
    ){
        counters.forEach(counter => {
            counter.innerText = 0;
        });

        activated = false;
    }

})