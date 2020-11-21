<template>
  <div id="app">
    <Header />
    <div class="EspacoConteudo">
      <!-- <h1>AnyHelp</h1> -->
      <h2 class="titulo">Porque todo Any Precisa de um Help</h2>
      <p>
        Plataforma online gratuita de apoio e auxilio psicológico, onde
        procuramos compreender, ajudar, apoiar, ajudamos acadêmicos a combater
        os medos, ansiedade, estresse e doenças relacionadas à saúde mental.
        Auxiliamos nos problemas psicológicos, emocionais e comportamentais. Por
        meio de técnicas verbais, os profissionais especializados e os
        voluntários conduzem o usuário para que ele reflita e converse sobre
        suas questões e problemas – Conversar resolve! Quem são os voluntários
        que irão nos apoiar nos diálogos? Profissionais, recém formados e
        acadêmicos de psicologia, psicopedagogos e comunidade em geral que se
        disponibiliza passar parte do seu precioso tempo conversando com os
        usuários. Importante relembrar a questão de que todos os voluntários vão
        necessitar realizar um cadastro em nosso sistema e preencher o termo de
        responsabilidade e compromisso. Sabe aqueles desabafos nas redes sociais
        que a galera faz? - Então, a Any Help funciona exatamente desta maneira,
        você escreve nos post its disponíveis suas angustias de forma anônima e
        os voluntários irão te ‘’ouvir’’ – ler e responder tentando lhe ajudar
        da melhor maneira possível. Porque uma plataforma online? Infelizmente,
        ainda existem muitas barreiras quando o assunto é auxílio psicológico.
        Uma delas é a questão de vergonha de procurar ajuda, do medo de ser
        exposto e também por questões financeiras, afinal, é um serviço de alto
        custo para boa parte dos brasileiros que ganham pouco. Qual é o nosso
        diferencial? • Contamos com uma equipe de pessoal que estão realmente
        dispostas ajuda o próximo; • Profissionais qualificados da área irão dar
        apoio e suporte e também fornecer parcerias; • Plataforma de total
        anonimato e controle de interação; • Plataforma gratuita; • Produção de
        conteúdos e serviços de qualidade e confiança; • Fácil acesso ao apoio
        emocional e contato social; • Engajamento de instituições e estudantes
        de áreas afins; • Disponibilizaremos uma plataforma eficaz de desabafo e
        apoio emocional de forma emergente. Muita gente ainda considera que a
        ajuda psicológica só é necessária em casos de problemas muito graves.
        Portanto, há um desconhecimento em relação a todos os benefícios deste
        serviço. Conversar, apoiar e entender o outro é capaz de mudar
        pensamentos, emoções e comportamentos, promovendo o desenvolvimento de
        habilidades e tornando o dia a dia da pessoa mais saudável e feliz.
        Procurar ajuda, é ter a coragem de enfrentar todas as suas questões e
        buscar por um autoconhecimento que irá torná-lo uma pessoa melhor.
        Conversar resolve!
      </p>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "Principal",
  components: {
    Header
  }
};
</script>
<style>
.EspacoConteudo {
  background-position: center;
  height: 100vh;
  background-size: cover;
  margin-left: 280px;
  padding-top: 70px;
}

.titulo{
  text-align: center;
}

.card-Video {
  height: 300px;
  width: 300px;

  background-color: black;
}
iframe {
  height: 300px;
  width: 300px;
}
.coluna {
  float: left;
  width: 33.33%;
}
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>
