<template>
    <quiz :checklist="checklist"></quiz>
</template>

<script>
import checklisthelp from '@/checklists/second.json'
import quiz from '@/components/quiz'
import _ from 'lodash'

export default {
  components: {
    quiz
  },
  data () {
    return {
      checklist: []
    }
  },
  created() {
    this.checklist = _.cloneDeep(checklisthelp)
  }
}
</script>
