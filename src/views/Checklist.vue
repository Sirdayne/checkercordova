<template>
    <quiz :checklist="checklist"></quiz>
</template>

<script>
import checklist from '@/checklists/first.json'
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
    this.checklist = _.cloneDeep(checklist)
  }
}
</script>
