<template>
  <div class="container">
    <HeaderComponent
        @toggle-add-task="toggleAddTask"
        title="Task Arrangement"
        :showAddTask="showAddTask"
    />
<!--    <div v-show="showAddTask">-->
<!--    <AddTask @add-task="addTask"/>-->
<!--    </div>-->
<!--    <TasksComponent-->
<!--        @toggle-reminder="toggleReminder"-->
<!--        @delete-task="deleteTask"-->
<!--        :tasks="tasks"/>-->
    <router-view :showAddTask="showAddTask"></router-view>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/Footer";
import HeaderComponent from "@/components/Header";
// import AddTask from "@/components/AddTask";
// import TasksComponent from '@/components/Tasks'
export default {
  name: 'App',
  components: {
    // AddTask,
    HeaderComponent,
    // TasksComponent,
    FooterComponent
  },
  data(){
    return{
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    }
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  font-family: 'Poppins',sans-serif;
}

.container{
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn{
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
</style>
