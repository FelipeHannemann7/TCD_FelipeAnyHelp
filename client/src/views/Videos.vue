<template>
  <div id="app">
    <Header />
    <div class="EspacoConteudo">
      <h1> Talvez um Video Possa te Ajudar ?</h1>
      <div class="row">
        <div class="coluna">
          <div class="card-Video">
            <iframe
              src="https://youtube.com/embed/u548qyxRTBU"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="coluna">
          <div class="card-Video">
            <iframe
              src="https://youtube.com/embed/u548qyxRTBU"
              allowfullscreen
            ></iframe>
          </div>
        </div>
                <div class="coluna">
          <div class="card-Video">
            <iframe
              src="https://youtube.com/embed/u548qyxRTBU"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        
      </div>
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
