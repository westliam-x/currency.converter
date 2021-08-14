const currencyEl_1 = document.getElementById('currency-1');
const currencyEl_2 = document.getElementById('currency-2');
const amtEl_1 = document.getElementById('amt-1');
const amtEl_2 = document.getElementById('amt-2');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate(){
    const currency_1 = currencyEl_1.value;
    const currency_2 = currencyEl_2.value;
    fetch( `https://v6.exchangerate-api.com/v6/016e1e95169272daba237845/latest/${currency_1}`)
    .then( (res) => res.json() )
    .then( (data) => {
        //   console.log(data);
        const rate = data.conversion_rates[currency_2];
        
        amtEl_2.value = (amtEl_1.value * rate).toFixed(2);
    });
}
currencyEl_1,addEventListener('change',calculate);
currencyEl_2,addEventListener('change',calculate);

amtEl_1,addEventListener('input', calculate);
amtEl_2,addEventListener('input', calculate); 

swap.addEventListener('click', () =>{
    const temp = currencyEl_1.value;
    currencyEl_2.value = currencyEl_1.value;
    currencyEl_2.value = temp;
    calculate();
})
calculate();
