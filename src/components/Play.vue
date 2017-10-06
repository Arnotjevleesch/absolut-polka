<template>
  <input ref="playButton" type="button" value="Play" @click="playing"/>
</template>


<script lang="ts">

import Vue from 'vue'
import Player from "../Player";
import Component from 'vue-class-component'

@Component({
  props: {
    nbNotes: Number
  }
})
export default class Portee extends Vue {
  nbNotes: number
  player: Player

  mounted(){
    this.player = new Player();
  }

  async playing(){
    // this.$refs.playButton.disabled = true;
    await this.player.play(this.nbNotes);
    // (this.$refs.playButton as HTMLElement).disabled = false;
  }
}

</script>