import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    axios.get('URL_DA_SUA_API')
      .then(response => {
        setServicos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>SalaoWeb</h1>
      <p>Aplicação para agendamento de horários</p>
      <form>
        <label htmlFor="servicos">Escolha o serviço:</label><br/>
        <select id="servicos" name="servicos">
          {servicos.map(servico => (
            <option key={servico.Id} value={servico.Id}>
              {servico.Name}
            </option>
          ))}
        </select>
        <br/><br/>
        <input type="submit" value="Finalizar Agendamento"/>
      </form>
    </div>
  );
}

export default App;