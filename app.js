// selecting ip box for vals
fprice = document.querySelector('#fPrice');
tprice = document.querySelector('#tPrice');

// selecting list items for unit
funit = document.querySelector('.from #from');
fuck = funit.options[funit.selectedIndex].text;
console.log(fuck)




const api = `https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=3ccbe123f5243d40e80a`

window.addEventListener('load' , () => {
    if(window.navigator.onLine){
        console.log('connected')

    }
    else{
        document.querySelector('h1').textContent = 'Please connect To internet......'
        // document.querySelector('#symbol').style.background = './wifi_off_white_24dp.svg'
        document.querySelector('.conversion-sys').style.display = 'none';
    }
})


fprice.addEventListener('keypress' , ()=>{
    // selecting list items for unit
    funit = document.querySelector('.from #from');
    fuck = funit.options[funit.selectedIndex].text;
    console.log(fuck)

    fetch(api)
    .then(responce =>{
        return responce.json();
    })
    .then(data =>{
        console.log(data);
    })

})

tprice.addEventListener('keypress' , ()=>{
    fetch(api)
    .then(responce =>{
        return responce.json();
    })
    .then(data =>{
        console.log(data);
    })

})