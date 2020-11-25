<template>
  <div id="app">
    <Header />
    <div class="EspacoConteudo">
      <h1>Procure Ajuda Profissional</h1>

      <div class="container">
        <div class="row" v-for="psic in psicologo" v-bind:key="psic.id">
          <div class="col-sm">
            <p>{{ psic.nome }}</p>
          </div>
          <div class="col-sm">
            <p>{{ psic.endereco }}</p>
          </div>
          <div class="col-sm">
            <p>{{ psic.crp }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import axios from "axios";
export default {
  name: "Principal",
  components: {
    Header
  },
  data() {
    return {
      psicologo: []
    };
  },
  created() {
    axios.get("/CadastroPsicologo").then(response => {
      console.log("response", response);
      this.psicologo = response.data;
    });
  }
};
</script>
<style>
.row {
  border-width: 1px;
  border-style: solid;
  border-color: #000;
}

.col-sm {
  border-width: 1px;
  border-style: solid;
  border-color: #000;
}

.EspacoConteudo {
  background-position: center;
  height: 100vh;
  background-size: cover;
  margin-left: 280px;
  padding-top: 70px;
}

.tr {
  background-color: cadetblue;
}
</style>
