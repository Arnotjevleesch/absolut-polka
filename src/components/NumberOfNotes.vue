<template>
  <select id="numberOfNotesSelect" v-model="selectedNumberOfNotes">
    <option v-for="index in indexes" :key="index.id" :value="index.val">{{index.val}}</option>
  </select>
</template>

<script lang="ts">

export default {
  name : 'numberOfNotes',
  data () {
    return {
      indexes: [
        { id: 0, val: '1' },
        { id: 1, val: '2' },
        { id: 2, val: '3' },
        { id: 3, val: '4' }
      ],
      selectedNumberOfNotes: '4'
    }
  }
}

</script>

