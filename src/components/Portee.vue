<template>
  <div ref="porteeDiv" @click="draw"/>
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
    this.stave = new Stave(this.$refs.porteeDiv as HTMLElement, this.nbNotes);
  }

  draw(event){
    this.stave.drawNotes(event);
  }
}

</script>