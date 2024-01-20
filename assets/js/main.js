let listA = document.querySelectorAll('a');

let active = 'intro';
let zIndex = 2;

listA.forEach(a => {
    a.addEventListener('click', function (event) {
        let valueTab = a.dataset.tab;
        if (valueTab && valueTab != active) {
            let tabActive = document.getElementById(valueTab);
            let activeOld = document.querySelector('.tab.active');
            activeOld && activeOld.classList.remove('active');

            zIndex++;
            tabActive.style.zIndex = zIndex;
            active = valueTab;

            tabActive.style.setProperty('--x', event.clientX + 'px');
            tabActive.style.setProperty('--y', event.clientY + 'px');
            tabActive.classList.add('active');
        }
    });
})



