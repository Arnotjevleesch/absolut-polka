<template>
  <input ref="playButton" type="button" value="Play" @click="playing"/>
</template>


<script lang="ts">

import Vue from 'vue'
import Player from "../Player";
import Component from 'vue-class-component'

@Component
export default class Play extends Vue {
  player: Player

  mounted(){
    this.player = new Player();
  }

  async playing(){
    (this.$refs.playButton as HTMLInputElement).disabled = true;
    await this.player.play(this.$store.state.numberOfNotes);
    (this.$refs.playButton as HTMLInputElement).disabled = false;
  }
}

</script>