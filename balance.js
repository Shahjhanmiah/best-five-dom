document.getElementById('player-price').addEventListener('click', function(){
    //console.log('player-price click');

     const playerPriceElement= document.getElementById('player-price');
     const playertotal=6;
     const onePlayerPrice= playertotal*1000;
     const previousPlayerPriceString=playerPriceElement.ariaValueMax;
     const previousPlayerPrice= parseFloat(previousPlayerPriceString);
     const onePlayerPrice1= previousPlayerPrice*6;
     console.log(onePlayerPrice1);
    

})