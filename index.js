const workshops = document.getElementsByClassName('workshop');

const displaySelected = event => {
    const selectedWorkshop = event.currentTarget;
    if (!selectedWorkshop.classList.contains('border-amber-200')) { //if the workshop selected is not the one that is already selected
        //set the currently selected workshop to display as unselected
        for (let i = 0; i < workshops.length; i++) {
            if (workshops[i].classList.contains('border-amber-200')) {
                workshops[i].classList.replace('border-amber-200','border-amber-50');
                for (const child of workshops[i].children) {
                    if (child.className.includes('workshopaudio')) {
                        child.classList.replace('flex','hidden');
                    } else if (child.className.includes('cheatsheet')) {
                        child.classList.replace('block','hidden');
                    }
                }
            }
        }
        //set the selected workshop to display as selected
        selectedWorkshop.classList.replace('border-amber-50','border-amber-200');
        for (const child of selectedWorkshop.children) {
            if (child.className.includes('workshopaudio')) {
                child.classList.replace('hidden','flex');
            } else if (child.className.includes('cheatsheet')) {
                child.classList.replace('hidden', 'block');
            }
        }
    }
};

for (let i = 0; i < workshops.length; i++) {
    workshops[i].addEventListener('click', displaySelected);
    workshops[i].addEventListener('focus-within', displaySelected);
};