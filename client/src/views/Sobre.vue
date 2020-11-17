<template>
  <div id="app">
    <Header />

    <div class="teste">
      <div class="post-it">
        <div class="draggable bloco">

        </div>
        <div class="draggable bloco"></div>
      </div>
    </div>

    <!-- </div> -->
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "Principal",
  components: {
    Header
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

.bloco {
  float: left;
  margin: 5px;
  border-radius: 5px;
  background-color: yellow;
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

.teste{
  /* background-color: #d5efff; */
}

</style>
