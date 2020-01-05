<template>
  <v-row justify="center">
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="(item,i) in items"
        :key="i"
      >
        <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>{{ item.content }}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'apidata',
    // Data is used to define the attributes of the returned data
    data () {
      return {
        items: null,
        error: null
      }
    },
    // Method for defining js
    methods: {
      details: function () {
        return this.site
      }
    },
    mounted () {
      axios.get('http://localhost:8000/v1/news').then(
        response => (
          this.items = response.data.result
        )
      ).catch(
        error => (
          this.error = error
        )
      )
    }
  }
</script>
