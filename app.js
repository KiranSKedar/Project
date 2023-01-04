const form=document.querySelector('#searchForm');

const res=document.querySelector('#tab');

var up;

form.addEventListener('submit',(e)=>{
    
    e.preventDefault();

    if(up){
        clearTimeout(up);
    }
    const ctype=form.elements.coinType.value;

    // console.log(ctype);
    fetchPrice(ctype);
});


const fetchPrice=async(ctype)=>{
    // const r=await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);

    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
    // console.log(r.data.ticker.price);
    console.log(r.data.coin.price);
    const price = r.data.coin.price;
     const volume  = r.data.coin.volume;
     const change = r.data.coin.priceChange1d;
     const base = r.data.coin.name;
    const target = 'USD';

    res.innerHTML= `<tr>
    <thead class="thead-dark">
    <td>Property</td>
    <td>Value</td></thead>
</tr>


<tr>
    <td>${base}</td>
    <td>${price} ${target}</td>
    
</tr>

<tr>
    <td>Volume</td>
    <td>${volume}</td>
</tr>
<tr>
    <td>Change</td>
    <td>${change}</td>
</tr>

    
</tr>`
//  up=setTimeout(()=>fetchPrice(ctype).10000);
 up=setTimeout(()=>fetchPrice(ctype),10000);

}