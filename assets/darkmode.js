const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  document.querySelector('.content').classList.toggle('dark');
  document.querySelector('.content h1').classList.toggle('dark');
  document.querySelector('#result').classList.toggle('dark');
  document.querySelector('#value').classList.toggle('dark');
  document.querySelector('#swap').classList.toggle('dark');
  document.querySelector('#btn').classList.toggle('dark');
  document.querySelector('select').classList.toggle('dark');
  document.querySelector('#cointo').classList.toggle('dark');
  document.querySelector('#cotacao').classList.toggle('dark');
  document.querySelector('#valor').classList.toggle('dark');
  
  


});