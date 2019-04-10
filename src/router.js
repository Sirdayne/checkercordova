import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Checklist from './views/Checklist'
import ChecklistHelp from './views/ChecklistHelp'
import About from './views/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/checklist',
      name: 'checklist',
      component: Checklist
    },
    {
      path: '/checklisthelp',
      name: 'checklisthelp',
      component: ChecklistHelp
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
