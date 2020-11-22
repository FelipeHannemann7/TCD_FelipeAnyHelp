<template>
  <div id="app">
    <Header />

    <div class="post-it">
      <form method="post" @submit.prevent="creatPsicologo">
        <div class="CadMssg">
          <p class="TituloUrl">Cadastro de Psicólogos</p>
          <p>Nome do Psicólogo</p>
          <p>
            <input type="text" v-model="psicologo.nome" />
          </p>
          <p>Endereço do Psicólogo</p>
          <p>
            <input type="text" v-model="psicologo.endereco" />
          </p>
          <p>CRP do Psicólogo</p>
          <p>
            <input type="text" v-model="psicologo.crp" />
          </p>

          <div class="btnSalvar">
            <input type="submit" value="Salvar" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import axios from "axios";
export default {
  name: "CadastroPsicologo",
  components: {
    Header
  },
  data() {
    return {
      psicologo: {
        nome: null,
        endereco: null,
        crp: null
      }
    };
  },
  methods: {
    creatPsicologo() {
      const data = {
        psicologo: this.psicologo
      };
      console.log(data);
      axios.post("/CadastroPsicologo", data).then(response => {
        console.log(data);
        console.log("response", response);
      });
    }
  }
};
</script>
<style>
.btnSalvar {
  width: 95%;
}

.TituloUrl {
  text-align: center;
  font-size: 50px;
}

.post-it {
  background-position: center;
  height: 100vh;
  background-size: cover;
  margin-left: 280px;
  padding-top: 70px;
}
</style>
