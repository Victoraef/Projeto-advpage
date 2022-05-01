import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h1>Augusto&Assessoria</h1>
              <h3>advocatício</h3>
            </div>
            <div className="item-menu">
              <a href="#">Login</a>
            </div>
          </div>

          <div className="form">
          <h2>Entre em Contato!</h2>
              <form>
                  <div className="items-form">
                    <input placeholder='Seu Primeiro Nome' type="text" />
                    <input placeholder='Sobre Nome'type="text" />
                    <input placeholder='E-mail'type="text" />
                    <input placeholder='Telefone'type="text" />
                    <input type="submit" />
                  </div>
              </form>               
          </div>
        </div>        
      </div>
      <div className="conteudo"></div>
              <div className="conteudo"></div>   
              <div className="conteudo"></div>   
              <h3>Especialidades</h3>
              <p> Divórcio</p>
              <p>Inventário</p>
              <p>Trabalhista</p>
    </div>   

  );
}

export default App;