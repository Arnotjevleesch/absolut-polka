<template>

<select id="numberOfNotesSelect" v-model="selectedNumberOfNotes">
  <option v-for="index in indexes" :key="index.id" :value="index.val">{{index.val}}</option>
</select>

</template>

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class NumberOfNotes extends Vue {
  
  selectedNumberOfNotes: number = this.$store.state.numberOfNotes

  indexes =  [
    { id: 0, val: '1' },
    { id: 1, val: '2' },
    { id: 2, val: '3' },
    { id: 3, val: '4' }
  ]
}

</script>

