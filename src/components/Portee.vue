<template>
  <div id="porteeDivId"/>
</template>


<script lang="ts">

import Vue from 'vue'
import Stave from "../Stave";
import Component from 'vue-class-component'
// import { Component, Prop } from 'vue-property-decorator';

// https://github.com/vuejs/vue-class-component#vue-class-component
// https://alligator.io/vuejs/typescript-class-components/
// Le décorateur @Component indique que la classe est un composant Vue
@Component({
  props: {
    nbNotes: String
  }
})
export default class Portee extends Vue {
  nbNotes: string

  mounted(){
    const div = document.getElementById("porteeDivId");
    const myPortee = new Stave(div, parseInt(this.nbNotes));

    //const myPortee = new Stave(this.$el, parseInt(this.nbNotes));
  }
  
}

</script>