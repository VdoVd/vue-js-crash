<template>
<header>
  <h1>{{title}}</h1>
  <ButtonComponent
      v-show="homePage"
      @btn-click="$emit('toggle-add-task')"
      @click="onClick"
      :text="showAddTask?'Close':'Add Task'"
      :color="showAddTask?'red':'green'"
  />
</header>
</template>

<script>
import ButtonComponent  from "@/components/Button";
export default {
  name: "HeaderComponent",
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    ButtonComponent
  },
  methods: {
    onClick(){
      this.$emit('toggle-add-task')
    }
  },
  computed:{
    homePage(){
      if(this.$route.path==='/'){
        return true
      }else {
        return false
      }
    }
  }
}
</script>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
