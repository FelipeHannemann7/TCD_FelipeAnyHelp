<template>
  <div id="app">
    <Header />

    <div class="post-it">
      <form method="post" @submit.prevent="creatVideo">
        <div class="CadMssg">
          <p class="TituloUrl">Cole Aqui a Url do Video</p>
          <p>
            <input type="text" v-model="video.url" />
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
  name: "CadastroVideo",
  components: {
    Header
  },
  data() {
    return {
      video: {
        url: null
      }
    };
  },
  methods: {
    creatVideo() {
      const data = {
        video: this.video
      }
              console.log(data);
      axios.post("/CadastroVideo", data).then(response => {
        console.log(data);
        console.log("response", response);
        
        this.cadastros = response.data;
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
  font-size: 20px;
}

.post-it {
  background-position: center;
  height: 100vh;
  background-size: cover;
  margin-left: 280px;
  padding-top: 70px;
}
</style>
