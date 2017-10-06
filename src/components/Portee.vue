<template>
  <div id="porteeDivId" @click="draw"/>
</template>


<script lang="ts">

import Vue from 'vue'
import Stave from "../Stave";
import Component from 'vue-class-component'

// https://github.com/vuejs/vue-class-component#vue-class-component
// https://alligator.io/vuejs/typescript-class-components/
// Le décorateur @Component indique que la classe est un composant Vue
@Component({
  props: {
    nbNotes: Number
  }
})
export default class Portee extends Vue {
  nbNotes: number
  stave: Stave

  mounted(){
    const div = document.getElementById("porteeDivId");
    this.stave = new Stave(div, this.nbNotes);

    //const myPortee = new Stave(this.$el, parseInt(this.nbNotes));
  }

  draw(event){
    this.stave.drawNotes(event);
  }
}

</script>