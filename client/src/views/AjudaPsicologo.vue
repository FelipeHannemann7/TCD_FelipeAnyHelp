<template>
  <div id="app">
    <Header />
    <div class="EspacoConteudo">
      <h1>Procure Ajuda Profissional</h1>

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <p>asad</p>
            
          </div>
          <div class="col-sm">
            Uma de três colunas
          </div>
          <div class="col-sm">
            Uma de três colunas
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

.row{
    border-width: 1px;
    border-style: solid;
    border-color: #000;
}

 .col-sm{
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
