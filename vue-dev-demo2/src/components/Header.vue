<template>
<header>
  <h1>{{title}}</h1>
  <ButtonComponent @click="onClick" text="Add" color="green"/>
</header>
</template>

<script>
import ButtonComponent  from "@/components/Button";
export default {
  name: "HeaderComponent",
  props: {
    title: {
      type: String,
      default: 'Hello World',
    },
  },
  components: {
    ButtonComponent
  },
  methods: {
    onClick(){
      console.log('click')
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
