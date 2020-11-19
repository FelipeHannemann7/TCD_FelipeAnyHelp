<template>
  <div id="app">
    <Header />

    <div class="post-it">
      <form method="post" @submit.prevent="desabafos">
        >
        <div class="CadMsg">
          <div class="grid row">
            <div class="col-10">
              <input
                class="CadTexto"
                type="text"
                v-model="desabafo.MsgDabafo"
              />
            </div>
            <div class="CadButon col-2">
              <input class="btnDasabafe" type="submit" value="Desabafar" />
            </div>
          </div>
        </div>
      </form>
      <div class="draggable bloco" v-for="principa in principal" v-bind:key="principa.id">
        <p>
          {{principa.MsgDabafo}}
        </p>
      </div>
      <!-- <div class="draggable bloco"></div> -->
    </div>

    <!-- </div> -->
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
      principal: [],
      desabafo: {
        MsgDabafo: null
      }
    };
  },
  created() {
    axios.get("/Principal").then(response => {
      console.log("response", response);
      this.principal = response.data;
    });
  },
  methods: {
    desabafos() {
      const data = {
        desabafo: this.desabafo
      };
      axios.post("/Principal", data).then(response => {
        console.log("response", response);
        this.cadastros = response.data;
      });
    }
  },
  mounted() {
    console.log("teste");
    var Draggable = function(elemento) {
      var that = this;
      this.elemento = elemento;
      this.posX = 0;
      this.posY = 0;
      this.top = 0;
      this.left = 0;
      this.refMouseUp = function(event) {
        that.onMouseUp(event);
      };

      this.refMouseMove = function(event) {
        that.onMouseMove(event);
      };

      this.elemento.addEventListener("mousedown", function(event) {
        that.onMouseDown(event);
      });
    };

    Draggable.prototype.onMouseDown = function(event) {
      this.posX = event.x;
      this.posY = event.y;

      this.elemento.classList.add("dragging");
      window.addEventListener("mousemove", this.refMouseMove);
      window.addEventListener("mouseup", this.refMouseUp);
    };

    Draggable.prototype.onMouseMove = function(event) {
      var diffX = event.x - this.posX;
      var diffY = event.y - this.posY;
      this.elemento.style.top = this.top + diffY + "px";
      this.elemento.style.left = this.left + diffX + "px";
    };

    Draggable.prototype.onMouseUp = function() {
      this.top = parseInt(this.elemento.style.top.replace(/\D/g, "")) || 0;
      this.left = parseInt(this.elemento.style.left.replace(/\D/g, "")) || 0;
      this.elemento.classList.remove("dragging");
      window.removeEventListener("mousemove", this.refMouseMove);
      window.removeEventListener("mouseup", this.refMouseUp);
    };

    var draggables = document.querySelectorAll(".draggable");
    console.log(draggables);
    [].forEach.call(draggables, function(draggable) {
      new Draggable(draggable);
    });
  }
};
</script>
<style>
.grid {
  padding-top: 5px;
}

.CadTexto {
  margin-left: 10px;
  height: 41px;
  width: 90%;
}

.btnDasabafe {
  width: 50px;
  height: 40px;
  font-size: 100px;
  padding-right: 50px;
}

.CadMsg {
  background-color: blue;
  width: 97%;
  height: 55px;
}
.bloco {
  float: left;
  margin: 5px;
  border-radius: 5px;

  box-shadow: 0px 0px 5px black;
  width: 250px;
  height: 300px;
  background-size: calc(100% - 10px);
  background-position: center;
  background-repeat: no-repeat;
}

.draggable {
  position: relative;
  top: 0px;
  left: 0px;
  transition: transform 0.3s linear z-index 0.3 linear;
  z-index: 0;
}

.dragging {
  transform: scale(1.1);
  z-index: 999;
}

.post-it {
  background-position: center;
  height: 100vh;
  background-size: cover;
  margin-left: 280px;
  padding-top: 70px;
}

/* Checkbox Hack */
#toggle-1 {
  display: none;
}

label {
  -webkit-appearance: push-button;
  -moz-appearance: button;
  display: inline-block;
  cursor: pointer;
  padding: 5px;
}

/* CSS padrão da div */
#mostra {
  display: none;
}

/* CSS quando o checkbox está marcado */
#toggle-1:checked ~ #mostra {
  display: block;
}
</style>
