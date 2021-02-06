<template>
  <b-container id="app" fluid>
    <b-row class="text-center">
      <b-col class="blue"></b-col>
      <b-col class="col" cols="8">
        <h1>User Management System</h1>
        <p>This is a User Management System that contain records of user data - ID, First Name, Last Name, Email and Date of Birth (DOB).
          Users can Add a new user using the 'Add New User' button, Edit current users' records, and Delete a user record from the system.</p>
        <Form v-if="show" :record="record" :state="edit" @onCancel="show = false"/>
        <Home v-else @addUser="show = true, edit = false"  @editUser="show = true, edit = true, record = $event"/>
      </b-col>
      <b-col class="blue"></b-col>
    </b-row>
  </b-container>
</template>

<script>
import Home from './components/Home.vue'
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    Home,
    Form
  },
  data () {
    return {
      items: [],
      show: false,
      edit: false,
      record: {}
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Sniglet&display=swap');
#app {
  font-family: 'Sniglet', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 18px;
  .row {
    height: 100vh;
    .col {
      // border: 3px solid #239B4D;
      padding: 20px;
      p {
        padding: 20px;
        margin: 0%;
      }
    }
    .blue {
      background-color: #006bbb;
    }
    table {
      margin-top: 20px;
      .flip-list-move {
        transition: transform 1s;
      }
    }
    .table-striped tbody {
      tr:nth-of-type(odd) {
        background-color: #006bbb;
        color: white;
      }
      tr:nth-of-type(odd):hover {
        background-color: #30a0e0;
      }
    }
  }
  h1, h2, h3 {
    font-weight: bold;
    padding-top: 20px;
  }
  .btn:active,
  .btn.active,
  .b-rating,
  .form-control.active,
  .form-control:active,
  .dropdown-item.active,
  .dropdown-item:active {
    outline: 0 !important;
  }
}
/* Works on Chrome/Edge/Safari */
*::-webkit-scrollbar {
  width: 13px;
}
*::-webkit-scrollbar-track {
  background: white;
}
*::-webkit-scrollbar-thumb {
  background-color:  #30a0e0;
  border-radius: 50px;
  border: 2px solid white;
}
/* Transition CSS */
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}
.fade-enter, .fade-leave-to {
  opacity: 0.1
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
