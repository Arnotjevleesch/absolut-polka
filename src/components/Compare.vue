<template>
  <b-button ref="compareButton" type="button" @click="compare" :disabled="disableCompareButton" variant="primary">Compare</b-button>
</template>

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'
import eventHub from '../EventHub'

@Component
export default class Compare extends Vue {

  compare(){
    this.$store.state.stave.drawCorrection(this.$store.state.player.frequencies)
    // console.log(this.$store.state.numberOfNotes)
    // console.log(this.$store.state.stave.notes.length)
    // console.log(this.$store.state.player.frequencies.length)
  }


  get disableCompareButton() {
    return !(this.$store.state.numberOfNotes === this.$store.state.stave.notes.length 
      && this.$store.state.numberOfNotes === this.$store.state.player.frequencies.length);
  }
}

</script>