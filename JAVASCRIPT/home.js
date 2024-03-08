function obterEExibirInformacoes() {
  // Faz uma requisição à API
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      // Manipula os dados recebidos
      const dados = data.results[0];
      const primeiroNome = dados.name.first;
      const sobrenome = dados.name.last;
      const numeroDeTelefone = dados.cell;
      const email = dados.email;
      const idade = dados.dob.age;

      const dataNascimento = dados.dob.date;
      const dataNascimentoSemHora = dataNascimento.split('T')[0];
      const dataNascimentoFormatada = new Date(dataNascimentoSemHora).toLocaleDateString('pt-BR');

      // Seleciona o elemento HTML com o id informacoes
      const selecionarInformacoes = document.getElementById('informacoes');

      // Cria novos elementos de parágrafo
      const paragraphElement = document.createElement('p');
      const paragraphElement2 = document.createElement('p');
      const paragraphElement3 = document.createElement('p');
      const paragraphElement4 = document.createElement('p');
      const paragraphElement5 = document.createElement('p');

      // Atribui o valor da variável firstName ao conteúdo do parágrafo
      paragraphElement.textContent = `Nome: ${primeiroNome} ${sobrenome}`;
      paragraphElement2.textContent = `Idade: ${idade} anos`;
      paragraphElement3.textContent = `Numero de telefone: ${numeroDeTelefone}`;
      paragraphElement4.textContent = `Email: ${email}`;
      paragraphElement5.textContent = `Data de nascimento: ${dataNascimentoFormatada}`;

      // Adiciona os parágrafos ao elemento informacoes
      selecionarInformacoes.appendChild(paragraphElement);
      selecionarInformacoes.appendChild(paragraphElement2);
      selecionarInformacoes.appendChild(paragraphElement3);
      selecionarInformacoes.appendChild(paragraphElement4);
      selecionarInformacoes.appendChild(paragraphElement5);
    })
    .catch(error => {
      console.error('ERRO:', error);
    });
}

function obterEExibirInformacoes2() {
    // Faz uma requisição à API
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        // Manipula os dados recebidos
        const dados = data.results[0];
        const primeiroNome = dados.name.first;
        const sobrenome = dados.name.last;
        const numeroDeTelefone = dados.cell;
        const email = dados.email;
        const idade = dados.dob.age;
  
        const dataNascimento = dados.dob.date;
        const dataNascimentoSemHora = dataNascimento.split('T')[0];
        const dataNascimentoFormatada = new Date(dataNascimentoSemHora).toLocaleDateString('pt-BR');
  
        // Seleciona o elemento HTML com o id informacoes
        const selecionarInformacoes = document.getElementById('informacoes2');
  
        // Cria novos elementos de parágrafo
        const paragraphElement = document.createElement('p');
        const paragraphElement2 = document.createElement('p');
        const paragraphElement3 = document.createElement('p');
        const paragraphElement4 = document.createElement('p');
        const paragraphElement5 = document.createElement('p');
  
        // Atribui o valor da variável firstName ao conteúdo do parágrafo
        paragraphElement.textContent = `Nome: ${primeiroNome} ${sobrenome}`;
        paragraphElement2.textContent = `Idade: ${idade} anos`;
        paragraphElement3.textContent = `Numero de telefone: ${numeroDeTelefone}`;
        paragraphElement4.textContent = `Email: ${email}`;
        paragraphElement5.textContent = `Data de nascimento: ${dataNascimentoFormatada}`;
  
        // Adiciona os parágrafos ao elemento informacoes
        selecionarInformacoes.appendChild(paragraphElement);
        selecionarInformacoes.appendChild(paragraphElement2);
        selecionarInformacoes.appendChild(paragraphElement3);
        selecionarInformacoes.appendChild(paragraphElement4);
        selecionarInformacoes.appendChild(paragraphElement5);
      })
      .catch(error => {
        console.error('ERRO:', error);
      });
  }

// Chama a função duas vezes
obterEExibirInformacoes();
obterEExibirInformacoes2();
