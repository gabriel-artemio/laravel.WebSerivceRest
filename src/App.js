import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [servicos, setServicos] = useState([]);
  const [data, setData] = useState('');
  const [dataInvalida, setDataInvalida] = useState(false);

  useEffect(() => {
    axios.get('URL_DA_SUA_API')
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
    today.setHours(0, 0, 0, 0); // remove time part for comparison
    if (selectedDate < today) {
      setDataInvalida(true);
    } else {
      setDataInvalida(false);
      setData(event.target.value);
    }
  };

  return (
    <div className="App container">
      <h1>SalaoWeb</h1>
      <p>Aplicação para agendamento de horários</p>
      <form>
        <div className="form-group">
          <label htmlFor="servicos">Escolha o serviço:</label>
          <select className="form-control" id="servicos" name="servicos">
            {servicos.map(servico => (
              <option key={servico.Id} value={servico.Id}>
                {servico.Name}
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
          <label htmlFor="horarios">Escolha o horário:</label>
          <select className="form-control" id="horarios" name="horarios">
            {servicos.map(servico => (
              <option key={servico.Id} value={servico.Id}>
                {servico.Name}
              </option>
            ))}
          </select>
        </div><br/>
        <button type="submit" className="btn btn-primary">Finalizar Agendamento</button>
      </form>
    </div>
  );
}

export default App;