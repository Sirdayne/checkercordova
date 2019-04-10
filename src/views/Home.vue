<template>
  <v-container fluid>
    <v-layout
            justify-center
            align-center
    >
      <v-flex>
        <v-list>
          <template v-for="(item, index) in items">
            <v-list-tile :key="index" avatar ripple @click="toRoute(item.url)">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Чек-лист: Безопасное вождение 1', url: '/checklist' },
          { title: 'Чек-лист: Безопасное вождение 2', url: '/checklisthelp' }
        ]
      }
    },
    methods: {
      toRoute(url) {
        this.$router.push(url)
      }
    }
  }
</script>
