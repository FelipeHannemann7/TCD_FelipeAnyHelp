<template>
  <div id="app">
    <Header />
    <div class="EspacoConteudo">
      <h1>Procure Ajuda Profissional</h1>

      <table border="10">
        <tr>
          <td>Nome</td>
          <td>Cidade</td>
          <td>Especialização</td>
          <td>Telefone</td>
        </tr>
        <tr>
          <td>Felipe</td>
          <td>PAto Brando</td>
          <td>Teste</td>
          <td>Teste</td>
        </tr>
      </table>
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

.tr{
  background-color: cadetblue;
}
</style>
