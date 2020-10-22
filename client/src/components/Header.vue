<template>
  <div>
    <!-- <div> -->
    <input type="checkbox" id="chkMenu" />
    <!-- Cabeçalho -->
    <header>
      <div class="area-esquerda">
        <h3>Any Help</h3>
      </div>

      <div class="area-direita">
        <a href="" class="btn-sair">Sair</a>
      </div>

      <label for="chkMenu">
        <i class="fas fa-bars" id="btnMenu"></i>
      </label>
    </header>

    <!-- Menu -->
    <nav>
      <div class="perfil">
        <img
          src="../assets/images/perfil.jpg"
          alt="Imagem de perfil"
          class="imagem-perfil"
        />
        <h4>Felipe Souza</h4>
      </div>

      <a href="#"><i class="fas fa-desktop"></i><span>Desabafe</span></a>
      <a href="#"><i class="fas fa-cogs"></i><span>Vídeos</span></a>
      <a href="#"><i class="fas fa-table"></i><span>Ajuda Proficional</span></a>
      <a href="#"><i class="fas fa-info-circle"></i><span>Sobre</span></a>
      <a href="#"><i class="fas fa-sliders-h"></i><span>Perfil</span></a>
    </nav>

    <div class="conteudo"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

header {
  background-color: #22242a;
  width: 100%;
  height: 30px;
  padding: 20px;
  position: fixed;
}

.area-esquerda h3 {
  color: #fff;
  margin: 0;
  font-size: 22px;
  font-weight: 900;
  text-transform: uppercase;
}

.btn-sair {
  color: #fff;
  text-decoration: none;
  float: right;
  margin-right: 40px;
  margin-top: -30px;
  background-color: #19b3d3;
  font-size: 15px;
  font-weight: 600;
  border-radius: 2px;
  padding: 5px 15px;
  transition: 0.3s;
}

.btn-sair:hover {
  background-color: #0d9dbb;
}

nav {
  background-color: #2f323a;
  width: 250px;
  height: 100%;
  left: 0;
  position: fixed;
  margin-top: 70px;
  padding-top: 30px;
  transition: 0.3s;
}

.perfil {
  text-align: center;
}

.imagem-perfil {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 10px;
}

nav h4 {
  color: #ccc;
  margin-top: 0;
  margin-bottom: 20px;
}

nav a {
  color: #fff;
  text-decoration: none;
  display: block;
  width: 100%;
  padding-left: 40px;
  line-height: 60px;
  box-sizing: border-box;
  transition: 0.5s background-color;
}

nav i {
  padding-right: 10px;
  line-height: 60px !important;
}

nav a:hover {
  background-color: #19b3d3;
}

#chkMenu {
  display: none;
}

#btnMenu {
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  position: fixed;
  left: 300px;
  top: 25px;
  transition: 0.3s color;
}

#btnMenu:hover {
  color: #0d9dbb;
}

#chkMenu:checked ~ nav {
  left: -190px;
}

#chkMenu:checked ~ nav a {
  font-size: 20px;
  margin-left: 170px;
  width: 80px;
}

#chkMenu:checked ~ nav a span {
  display: none;
}

</style>