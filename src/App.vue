<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <b-container id="app" fluid>
    <b-row class="text-center">
      <b-col class="green"></b-col>
      <b-col class="col" cols="8">
        <h1>User Management System</h1>
        <b-table
          :items="items"
          :fields="fields"
          striped
          hover
          responsive
          sticky-header
          primary-key="id"
          :tbody-transition-props="transProps"
        ></b-table>
      </b-col>
      <b-col class="green"></b-col>
    </b-row>
  </b-container>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data () {
    return {
      transProps: {
        // Transition name
        name: 'flip-list'
      },
      items: [
        { id: 2, firstname: 'Two', lastname: 'Moose', email: 'Moose@gmail.com', dob: 1595493789 },
        { id: 1, firstname: 'Three', lastname: 'Dog', email: 'Dog@gmail.com', dob: 1595493789 },
        { id: 3, firstname: 'Four', lastname: 'Cat', email: 'Cat@gmail.com', dob: 1595493789 },
        { id: 4, firstname: 'One', lastname: 'Mouse', email: 'Mouse@gmail.com', dob: 1595493789 }
      ],
      fields: [
        { key: 'id', sortable: true },
        { key: 'firstname', sortable: true },
        { key: 'lastname', sortable: true },
        { key: 'email', sortable: false },
        { key: 'dob', sortable: false }
      ]
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
  .row {
    height: 100vh;
    .col {
      // border: 3px solid #239B4D;
      padding: 20px;
    }
  }
  .green {
    background-color: #0C351A;
  }
  h1, h2, h3 {
    font-weight: bold;
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
table {
  margin-top: 20px;
  .flip-list-move {
    transition: transform 1s;
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
  background-color:  #239B4D;
  border-radius: 50px;
  border: 2px solid white;
}
/* Transition CSS */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
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
