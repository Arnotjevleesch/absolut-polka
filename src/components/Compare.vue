<template>
  <input type="button" value="Compare" @click="test"/>
</template>

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Compare extends Vue {
  
  test(){
    this.$store.state.stave.drawCorrection(this.$store.state.player.frequencies)
  }
  
}

</script>