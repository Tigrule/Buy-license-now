let plan;
let price;
let numOfLic = window.document.getElementById('number_of_licenses');
let totPrice;
let inp = window.document.getElementsByName('plan');

function pricing() {
    switch (plan) {
        case 0: {
            price = 13;
            break;
        }
        case 1: {
            price = 22;
            break;
        }
        case 2: {
            price = 34;
            break;
        }
    }
}

function check() {
    for (let i = 0; i < inp.length; i++) {
        if (inp[i].type === 'radio' && inp[i].checked) {
            plan = i;
            pricing();
        }
    }
}

function count() {
    totPrice = parseInt(price) * parseInt(numOfLic.value);
    return totPrice;
}

function backgroundOfSelected(n){
    let choose = window.document.getElementsByClassName('radio-wrap');
    choose[n].style.background = '#ebf4f7'
    choose[n].style.border = '1px solid #b8d7e2';
    for (let i = 0; i < choose.length; i++) {
        if (i === n) {}
        else {
            choose[i].style.background = '#f8f8f8'
            choose[i].style.border = '1px solid white';
        }

    }

}
function selectPlan(n){
    if (n !== 'undefined') {
        inp[n].checked = true;
        backgroundOfSelected(n)
    }
    select();
}
function select() {
        check();
        count();
        window.document.getElementById('total-price').textContent = `$${totPrice}`;
        window.document.getElementById('selected-plan').textContent = `Selected plan: #${plan + 1}`
}

selectPlan(2);