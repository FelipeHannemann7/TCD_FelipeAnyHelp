<template>
  <div>
    <div class="Cabecalho"></div>
    <nav>
      <div class="perfil">
        <img
          src="../assets/images/perfil.jpg"
          alt="Imagem de perfil"
          class="imagem-perfil"
        />
        <h4>Felipe Souza</h4>
      </div>

      <a href="/"><span>Desabafe</span></a>
      <a href="/videos"><span>Vídeos</span></a>
      <a href="/AjudaPsicologo"><span>Ajuda de Psicólogos</span></a>
      <a href="/Sobre"><span>Sobre</span></a>
      <a href="#"><span>Perfil</span></a>
    </nav>

    
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


nav {
  background-color: #d0edff;
  width: 250px;
  height: 100%;
  left: 0;
  position: fixed;
  /* margin-top: 61px; */
  padding-top: 30px;
  transition: 0.3s;
    border-width: 1px;
    border-style: solid;
    border-color: #000;
    /* border-top-color: #94ccf0; */
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
  color: black;
  margin-top: 0;
  margin-bottom: 20px;
}

nav a {
  color: black;
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

/* #chkMenu:checked ~ nav {
  left: -190px;
} */

/* #chkMenu:checked ~ nav a {
  font-size: 20px;
  margin-left: 170px;
  width: 80px;
} */

/* #chkMenu:checked ~ nav a span {
  display: none;
} */

</style>