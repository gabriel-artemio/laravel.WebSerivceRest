import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [servicos, setServicos] = useState([]);
  const [data, setData] = useState('');
  const [dataInvalida, setDataInvalida] = useState(false);
  const [servicoId, setServicoId] = useState('');
  const [telefoneCabelereiro, setTelefoneCabelereiro] = useState('');
  const [observacao, setObservacao] = useState('');

  useEffect(() => {
    axios.get('https://localhost:44312/api/Servico')
      .then(response => {
        setServicos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);

  const handleDataChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      setDataInvalida(true);
    } else {
      setDataInvalida(false);
      setData(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const agendamento = {
      id: 0,
      dataHora: data,
      servicoId: servicoId,
      telefoneCabelereiro: telefoneCabelereiro
    };

    axios.post('https://localhost:44312/api/Horarios', agendamento)
      .then(response => {
        console.log('Agendamento realizado com sucesso:', response.data);
        // Adicionar lógica adicional após o sucesso da requisição, se necessário
      })
      .catch(error => {
        console.error('Erro ao realizar agendamento:', error);
      });
  };

  return (
    <div className="App container">
      <h1 className="fw-light">SalãoWeb</h1>
      <h3 className="fw-light">Você está agendando horário em: nm_salao</h3>
      <p className="lead text-muted">Agende seu horário no salão com rapidez e praticidade.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="servicos">Escolha o serviço:</label>
          <select
            className="form-control"
            id="servicos"
            name="servicos"
            value={servicoId}
            onChange={(e) => setServicoId(e.target.value)}
          >
            <option value="">Selecione um serviço</option>
            {servicos.map(servico => (
              <option key={servico.id} value={servico.id}>
                {servico.nome} - R$: {servico.preco}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="data">Escolha a data:</label>
          <input
            type="date"
            className={`form-control ${dataInvalida ? 'is-invalid' : ''}`}
            id="data"
            name="data"
            value={data}
            onChange={handleDataChange}
          />
          {dataInvalida && <div className="invalid-feedback">A data não pode ser anterior a hoje.</div>}
        </div>
        <div className="form-group">
          <label htmlFor="telefoneCabelereiro">Telefone do Cabelereiro:</label>
          <input
            type="text"
            className="form-control"
            id="telefoneCabelereiro"
            name="telefoneCabelereiro"
            value={telefoneCabelereiro}
            onChange={(e) => setTelefoneCabelereiro(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="observacao">Observação:</label>
          <textarea
            className="form-control"
            id="observacao"
            name="observacao"
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
          />
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">Finalizar Agendamento</button>
      </form>
    </div>
  );
}

export default App;