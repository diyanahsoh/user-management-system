<template>
  <div style="height: 85%">
    <b-button pill variant="primary" class="addbtn" @click="addUser()">Add New User</b-button>
    <transition appear name="fade" mode="out-in">
    <b-table id="user-table" :items="items" :fields="fields" striped hover responsive sticky-header primary-key="id"
      :tbody-transition-props="transProps">
      <template #cell(edit)="data">
        <b-button size="sm" @click="editUser(data.item)" class="editbtn">
          <b-icon icon="pencil-square" aria-hidden="true"></b-icon> Edit Details
        </b-button>
      </template>
      <template #cell(delete)="data">
        <b-button size="sm" @click="deleteUser(data.item.id)" class="deletebtn">
          <b-icon icon="trash" aria-hidden="true"></b-icon> Delete User
        </b-button>
      </template>
    </b-table>
    </transition>
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
    this.loadData()
  },
  methods: {
    loadData () {
      var currentPage = '1'
      const url = 'http://localhost:3000/users?_page=' + currentPage + '&_limit=15' // &_sort=id&_order-desc
      this.axios.get(url).then((response) => {
        this.items = response.data
      })
    },
    deleteUser (userID) {
      const url = 'http://localhost:3000/users/' + userID
      this.axios.delete(url).then((response) => {
        this.loadData()
      })
    },
    addUser () {
      this.$emit('addUser')
    },
    editUser (record) {
      this.$emit('editUser', record)
    }
  }
}
</script>

<style lang="scss" scoped>
.b-table-sticky-header {
  max-height: 100%;
}
.addbtn {
  font-size: 20px;
  background-color: #006bbb;
}
.addbtn:hover {
  background-color: #30a0e0;
}
.editbtn {
  background-color: #239B4D;
  border: 2px solid #239B4D;
}
.editbtn:hover {
  background-color: #32DB6C;
}
.deletebtn {
  background-color: #cc184e;
  border: 2px solid #cc184e;
}
.deletebtn:hover {
  background-color: #e84575;
}
</style>
