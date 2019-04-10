<template>
    <v-app id="inspire">
        <v-toolbar color="indigo" dark fixed app>
            <v-toolbar-title>Безопасное вождение</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <router-view/>
        </v-content>
        <v-bottom-nav
                :value="true"
                absolute
                color="transparent"
        >
            <v-btn
                    @click="toRoute('/')"
                    color="indigo"
                    flat
                    value="browser"
            >
                <span>Главная</span>
                <v-icon>home</v-icon>
            </v-btn>
            <v-btn
                    @click="toRoute('/about')"
                    color="indigo"
                    flat
                    value="user"
            >
                <span>О программе</span>
                <v-icon>contact_mail</v-icon>
            </v-btn>
        </v-bottom-nav>
    </v-app>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
      }
    },
    methods: {
      toRoute(url) {
        this.$router.push(url)
      }
    }
  }
</script>
