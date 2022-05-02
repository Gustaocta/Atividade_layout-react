import './App.css';
import cao from './cao.png';
import caoguia from './cao-guia.png';
import catrodas from './catrodas7.JPEG';
import caorodas from './caorodas1.JPEG';
import caorodas5 from './caorodas5.JPEG';
import dogrodas from './dogrodas.JPEG';
import catrodas2 from './catrodas6.JPEG';
import insta from './instagram (1).png';
import whats from './facebook.png';
import pinter from './pinterest.png';
import twitter from './twitter.png';
import mapa from './mapa.png'; 
function App() {
  return (
     <div className="App">
          <div className="main">
            <div className="center">
              <div className="menu">
                  <div className="logo">
                    <img src={cao} />
                      <h3>Super-a-cao</h3>
                    </div>
                   <div className="item-menu">
                     <a href="#">Login</a>
                   </div>
                </div>

                <div className="form">
              <h2>Entre em contato</h2>
                   <form>
                       
                       <div className="items-form">
                         <input placeholder="Digite o seu nome..." type="text" />
                         <input placeholder="qual o seu bichinho..." type="text" />
                         <input placeholder="Raça do bichinho..." type="text" />
                         <input placeholder="Medidas da cadeira..." type="text" />
                         <input placeholder="enviar" type="submit" />
                         </div>
                   </form>
                 
              </div>


             </div>
              
          </div>

     <section id="conteudo_do_conteudo">     
      <div className="conteudo-single">
                <h3>Inclusão</h3>
                <img src={caoguia} />
                <p>A importância de adotar um cão com a mesma acessibilidade dê seu dono.</p>

          </div>
      

      
          <div className="conteudo-single">
                <h3>Os gatos também</h3>
                <img src={catrodas} />
                <p>Não são apenas os doguinhos que podem sofrer com essa dependência.</p>

          </div>
      

      
          <div className="conteudo-single">
                <h3>Todas as raças</h3>
                <img src={caorodas} />
                <p>Independente da raça, todos os bichinhos estão expostos a esse tipo de situação, por conta de acidentes, maus tratos, e muitos já nascem com essa acessibilidade.</p>

          </div>
      

          <div className="conteudo-single">
                <h3>Quanto custa uma cadeira?</h3>
                <img src={caorodas5} />
                <p>Os preços dessas cadeiras de rodas não são tão caras, mas mesmo assim há quem não consiga arcar com uma, então é muito comum nós vermos por aí improvisos de tutores para a locomoção de seus pets.</p>

          </div>
        </section>
      
            <div className="galeria_fotos">
              <h4>Galeria</h4>
              <img src={catrodas2} />
              <img src={catrodas} />
              <img src={caorodas} />
              <img src={dogrodas} />


           </div>   


           <footer className="rodape">

           <img src={insta} />
           <img src={twitter} />
           <img src={whats} />
           <img src={pinter} />

           <h6>/super.acao</h6>

           <div className="mapa"> 
             <img src={mapa} />
             <h1>Em todo Brasil</h1>

           </div>

           </footer>
           </div>
  );
}

export default App;
