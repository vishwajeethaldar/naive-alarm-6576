

let proceedPayment = ( pname, price)=>{
    event.preventDefault();
    alert('Payment Proceeding');
    setTimeout(()=>{
        alert('Payment Sucessfull');
        let plan = {
            planname:pname,
            pprice:price
        }
        localStorage.setItem('regplan', JSON.stringify(plan));
        window.location.href='./userPage.html'
    }, 3000)
};


let appendPaymentForm = (pname, pprice)=>{
    document.getElementById('planName').innerText = pname;
    document.getElementById('planPrice').innerText = pprice;
    document.getElementById('totalPrice').innerText = Math.ceil(Number(pprice)*12);
    document.getElementById('Payfrm').addEventListener('submit', ()=>{
        proceedPayment(pname, Math.ceil(Number(pprice)*12));
    })
}

document.getElementById('enterprise').addEventListener('click', ()=>{
    document.getElementById('paymentDiv').removeAttribute('class', 'hide');
    appendPaymentForm('Enterprise', '24.80');
})
document.getElementById('business').addEventListener('click', ()=>{
    document.getElementById('paymentDiv').removeAttribute('class', 'hide');
    appendPaymentForm('Business', '24.80');
})
document.getElementById('professional').addEventListener('click', ()=>{
    document.getElementById('paymentDiv').removeAttribute('class', 'hide');
    appendPaymentForm('Professional', '9.80');
})




let closePaymentForm = ()=>{
    document.getElementById('paymentDiv').setAttribute('class', 'hide');
}
document.getElementById('closebtn').addEventListener('click', closePaymentForm);
// document.getElementById('paymentDiv').addEventListener('click', closePaymentForm);