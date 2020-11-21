<template>
  <div id="app">
    <Header />
    <div class="EspacoConteudo">
      <h1>Talvez um Video Possa te Ajudar ?</h1>
      <div class="row">

        <div class="coluna" v-for="vid in video" v-bind:key="vid.id">
          
          <div class="card-Video">
            <iframe src= ${vid.url} allowfullscreen></iframe>
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
  name: "Videos",
  components: {
    Header
  },
  data() {
    return {
      video:[],
    };
  },
  created() {
    axios.get("/CadastroVideo").then(response => {
      console.log("response", response);
      this.video = response.data;
    });
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
