document.getElementById('btn-blog')
.addEventListener('click', function(){
    window.location.href = "./blog.html";
});

//Donate Noakhali

document.getElementById('btn-donate').addEventListener('click', function(event){
  event.preventDefault();
    const donateMoneyNoakhali = getInputValueById('donate-input-value');   
   const donateMoneyBalance = document.getElementById('donate-money-balance').innerText;
   const donateMoneyBalanceNumber = parseFloat(donateMoneyBalance);   
   const noakhaliMain = donateMoneyBalanceNumber + donateMoneyNoakhali;
   document.getElementById('donate-money-balance').innerText = noakhaliMain;
   const mainBalance = document.getElementById('main-balance').innerText;
   const mainBalanceNumber = parseFloat(mainBalance);
   const newMainBalance = mainBalanceNumber - noakhaliMain;
   document.getElementById('main-balance').innerText = newMainBalance;
   if( donateMoneyNoakhali  <= 0){   
    
    alert('Invalid Input. Please try again');
    return; 
    
  }
  const historyContainer = document.getElementById('history-section');
  const newHistory = document.createElement('div');
  newHistory.innerHTML = `
  <div class="border p-4 sm:p-6 md:p-8 rounded-2xl mb-5">
  <h3 class="text-2xl font-bold">${donateMoneyNoakhali} Donate for Flood at Noakhali, Bangladesh.</h3>
  <p>Date: ${new Date()}</p>
  </div>
 `
 historyContainer.append(newHistory);

 my_modal.showModal();

});
    
  


//Donate Feni
document.getElementById('feni-btn-value').addEventListener('click', function(){
  const donateMoneyFeni = getInputValueById('feni-input-value');  
  const feniMainBalanceValue = document.getElementById('btn-donate-feni').innerText;
  const feniMainBalanceNumber = parseFloat(feniMainBalanceValue);
  const feninewBalance = donateMoneyFeni + feniMainBalanceNumber;
  document.getElementById('btn-donate-feni').innerText = feninewBalance;
  
  
  
  if( donateMoneyFeni <= 0){
    
    const feniMainBalance = document.getElementById('main-balance').innerText;
    const feniMainBalanceNumber = parseFloat(feniMainBalance);
    const feniRemainingBalance = feniMainBalanceNumber - feninewBalance;
    document.getElementById('main-balance').innerText = feniRemainingBalance;
    alert('Invalid Input. Please try again');
    return; 
    
  }
  const historyContainer = document.getElementById('history-section');
  const newHistory = document.createElement('div');
  newHistory.innerHTML = `
  <div class="border p-4 sm:p-6 md:p-8 rounded-2xl mb-5">
  <h3 class="text-2xl font-bold">${donateMoneyFeni} Donate for Flood Relief in Feni, Bangladesh.</h3>
  <p>Date: ${new Date()}</p>
  </div>
 `
 historyContainer.append(newHistory);

 my_modal.showModal();

});
//Donate Quota Protest
document.getElementById('quota-protest-btn').addEventListener('click', function(){
  const quotaInputValue = document.getElementById('quota-input-value').value;
  const quotaInputNumber = parseFloat(quotaInputValue);
  const quotaMainBalanceValue = document.getElementById('quota-main-balance').innerText;
  const quotaMainBalanceNumber = parseFloat(quotaMainBalanceValue);
  const quotaNewBalance = quotaInputNumber + quotaMainBalanceNumber;
  document.getElementById('quota-main-balance').innerText = quotaNewBalance;
  if( quotaInputValue <= 0){    
    const quotaMainBalance = document.getElementById('main-balance').innerText;
    const quotaNewBalanceNumber = parseFloat(quotaMainBalance);
    const quotaRemainingBalance = quotaNewBalanceNumber - quotaNewBalance;
    document.getElementById('main-balance').innerText = quotaRemainingBalance;
    alert('Invalid Input. Please try again');
    return; 
    
  }
  const historyContainer = document.getElementById('history-section');
  const newHistory = document.createElement('div');
  newHistory.innerHTML = `
  <div class="border p-4 sm:p-6 md:p-8 rounded-2xl mb-5">
  <h3 class="text-2xl font-bold">${quotaInputValue} Aid for Injured in the Quota Movement.</h3>
  <p>Date: ${new Date()}</p>
  </div>
 `
 historyContainer.append(newHistory);

 my_modal.showModal();
  
})

const historyBtn = document.getElementById('btn-history');
const donationBtn = document.getElementById('btn-donation');
const foterSection = document.getElementById('foter-section');
historyBtn.addEventListener('click', function(){
  document.getElementById('history-section').classList.remove('hidden');
  document.getElementById('donation-section').classList.add('hidden');
  document.getElementById('foter-section').classList.add('hidden');
  document.getElementById('btn-history').classList.add('text-textPrimary','bg-bgPrimary');
  document.getElementById('btn-donation').classList.remove('text-textPrimary','bg-bgPrimary');
})
donationBtn.addEventListener('click', function(){
  document.getElementById('donation-section').classList.remove('hidden');
  document.getElementById('history-section').classList.add('hidden');
  document.getElementById('btn-donation').classList.add('border','rounded-md','text-textSecondary','border-gray-200');
  document.getElementById('btn-history').classList.remove('text-textPrimary','bg-bgPrimary');
  document.getElementById('btn-donation').classList.add('text-textPrimary','bg-bgPrimary');
  
})


