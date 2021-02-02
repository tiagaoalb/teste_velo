document.getElementById('cep-input').addEventListener('focusout', (e) => {
  if (e.target.value.length !== 8) {
    alert('CEP inválido!');
    return;
  }
  fetch(`https://viacep.com.br/ws/${e.target.value}/json/`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.street').value = data.logradouro || '';
        document.querySelector('.neighborhood').value = data.bairro || '';
        document.querySelector('.city').value = data.localidade || '';
        document.querySelector('.state').value = data.uf || '';
        document.querySelector('.ibge').value = data.ibge || '';
    })
})
