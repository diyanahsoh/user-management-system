<template>
  <div>
    <b-button pill variant="primary" class="addbtn">Add New User</b-button>
    <b-table :items="items" :fields="fields" striped hover responsive sticky-header primary-key="id"
      :tbody-transition-props="transProps"></b-table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      transProps: {
        // Transition name
        name: 'flip-list'
      },
      items: [],
      fields: [
        { key: 'id', sortable: true },
        { key: 'firstName', sortable: true },
        { key: 'lastName', sortable: true },
        { key: 'email', sortable: false },
        { key: 'dob', sortable: false },
        { key: 'Edit', sortable: false },
        { key: 'Delete', sortable: false }
      ]
    }
  },
  created () {
    this.axios.get('http://localhost:3000/users').then((response) => {
      console.log(response.data[0])
      this.items = response.data
    })
  }
}
</script>
