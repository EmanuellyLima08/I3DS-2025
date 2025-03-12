import "./App.css";
import Perfil from "./components/perfil/perfil";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import foto from "./img/fotoPerfil.jpeg";

function App() {
  return (
    <div id="App">
      <Perfil fotoPerfil={foto}>@ManuLima</Perfil>

<div id="sobreMim">
  <p>Emanuelly Lima, 17 anos, é estudante em Jaú, SP. Atualmente, está no 3º ano do ensino médio no SESI e também cursa Desenvolvimento de Sistemas no SENAI. Com previsão de formatura em 2025, seu grande objetivo é ingressar na faculdade de Medicina e conquistar reconhecimento na área por meio de sua dedicação e conhecimento.</p>
  </div>

      <ul>
        <Links link={"https://www.linkedin.com/in/emanuelly-lima-427800304/"}>Sobre Mim</Links>
        <Links link={"https://medicina.ucpel.edu.br/blog/tecnologia-na-medicina/"}>Atualidades Medicina</Links>
        <Links link={"https://w.app/2hcjc1"}>Entre em contato comigo</Links>

      </ul>

      <div id="socialLinks">
        <SocialLinks link={"https://www.instagram.com/manu_s__lima/"} icon={"logo-instagram"} />
        <SocialLinks link={"https://medicina.ucpel.edu.br/blog/tecnologia-na-medicina/"} icon={"document-text-outline"} />
        <SocialLinks link={"https://www.linkedin.com/in/emanuelly-lima-427800304/"} icon={"logo-linkedin"} />
      </div>

      <Rodape>ManuLima</Rodape>
    </div>
  );
}

export default App;
