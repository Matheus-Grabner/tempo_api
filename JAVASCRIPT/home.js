    // Consumo de API
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=-26.938867&lon=-49.127796&appid=0efde093330001d6cf9ecc555dae3a5c')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      return response.json();
    })
    .then(resposta => {
        // Aqui você pode manipular os dados recebidos
        console.log(resposta); // Exemplo: exibindo os dados no console
      })
      .catch(error => {
        console.error('Ocorreu um erro: ', error);
      });

