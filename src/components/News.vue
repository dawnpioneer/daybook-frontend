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
  export default {
    props: {
      source: String
    },
    data: () => ({
      items: [
        { title: '2019/12/22', content: '公告1' },
        { title: '2019/12/06', content: '公告2' }
      ]
    })
  }
</script>
