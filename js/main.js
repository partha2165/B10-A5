document.getElementById('btn-blog')
.addEventListener('click', function(){
    window.location.href = "./blog.html";
});

//Donate Noakhali

document.getElementById('btn-donate').addEventListener('click', function(event){
  event.preventDefault();
    const donateMoneyNoakhali = getInputValueById('donate-input-value');
        if( donateMoneyNoakhali > 0){        
        const donateMoneyBalance = document.getElementById('donate-money-balance').innerText;
        const donateMoneyBalanceNumber = parseFloat(donateMoneyBalance);
        const donateNewBalance = donateMoneyNoakhali + donateMoneyBalanceNumber;
        document.getElementById('donate-money-balance').innerText = donateNewBalance;
        const mainBalanceValue = document.getElementById('main-balance').innerText;
        const mainBalanceNumber = parseFloat(mainBalanceValue);
        const newMainBalance = mainBalanceNumber - donateMoneyNoakhali;
        document.getElementById('main-balance').innerText = newMainBalance; 
             
    }
    else{
      alert('Invalid Input');
    }
})

//Donate Feni
document.getElementById('feni-btn-value').addEventListener('click', function(){
  const donateMoneyFeni = getInputValueById('feni-input-value');  
  const feniMainBalanceValue = document.getElementById('btn-donate-feni').innerText;
  const feniMainBalanceNumber = parseFloat(feniMainBalanceValue);
  const feninewBalance = donateMoneyFeni + feniMainBalanceNumber;
  document.getElementById('btn-donate-feni').innerText = feninewBalance;
  
  
  
  if( donateMoneyFeni > 0){
    
    const feniMainBalance = document.getElementById('main-balance').innerText;
    const feniMainBalanceNumber = parseFloat(feniMainBalance);
    const feniRemainingBalance = feniMainBalanceNumber - feninewBalance;
    document.getElementById('main-balance').innerText = feniRemainingBalance;
    
  }
  else{
    alert('Invalid Input');
  }

});
//Donate Quota Protest
document.getElementById('quota-protest-btn').addEventListener('click', function(){
  const quotaInputValue = document.getElementById('quota-input-value').value;
  const quotaInputNumber = parseFloat(quotaInputValue);
  const quotaMainBalanceValue = document.getElementById('quota-main-balance').innerText;
  const quotaMainBalanceNumber = parseFloat(quotaMainBalanceValue);
  const quotaNewBalance = quotaInputNumber + quotaMainBalanceNumber;
  document.getElementById('quota-main-balance').innerText = quotaNewBalance;
  if( quotaInputValue > 0){    
    const quotaMainBalance = document.getElementById('main-balance').innerText;
    const quotaNewBalanceNumber = parseFloat(quotaMainBalance);
    const quotaRemainingBalance = quotaNewBalanceNumber - quotaNewBalance;
    document.getElementById('main-balance').innerText = quotaRemainingBalance;
    
  }
  else{
    alert('Invalid Input');
  }
  
})

//Show Button
document.getElementById("btn-donation").addEventListener('click', function(){
  document.getElementById('donation-section').classList.add('hidden');
  document.getElementById('history-section').classList.remove('hidden');
 
  document.getElementById('history-section').classList.add('bg-bgPrimary');

})

document.getElementById('btn-history').addEventListener('click', function(){
  document.getElementById('history-section').classList.add('hidden');
  document.getElementById('donation-section').classList.remove('hidden');
})


