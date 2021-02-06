<template>
  <transition appear name="slide-fade" mode="out-in">
  <div>
    <b-button pill variant="primary" class="addbtn" @click="addUser()">Add New User</b-button>
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="user-table"></b-pagination>
    <!-- User Information Table -->
    <b-table id="user-table" :items="items" :fields="fields" striped hover responsive sticky-header primary-key="id"
      :per-page="perPage" :current-page="currentPage" :tbody-transition-props="transProps">
      <template #cell(edit)="data">
        <b-button size="sm" @click="editUser(data.item)" variant="success">
          <b-icon icon="pencil-square" aria-hidden="true"></b-icon> Edit Details
        </b-button>
      </template>
      <template #cell(delete)="data">
        <b-button size="sm" @click="deleteUser(data.item.id)" variant="danger">
          <b-icon icon="trash" aria-hidden="true"></b-icon> Delete User
        </b-button>
      </template>
    </b-table>
  </div>
  </transition>
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
      // Pagination variables
      perPage: 15,
      currentPage: 1,
      // Table variables
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
  computed: {
    rows () {
      return this.items.length
    }
  },
  methods: {
    loadData () {
      // Retrieve users data sorted by id in descending order
      const url = 'http://localhost:3000/users?_sort=id&_order=desc'
      this.axios.get(url).then((response) => {
        this.items = response.data
      })
    },
    deleteUser (userID) {
      // Deletes selected user record from db
      const url = 'http://localhost:3000/users/' + userID
      this.axios.delete(url).then((response) => {
        this.loadData()
      })
    },
    addUser () {
      // Emits event to interact with Form Component - https://www.smashingmagazine.com/2020/01/data-components-vue-js/
      this.$emit('addUser')
    },
    editUser (record) {
      // Emits event to interact with Form Component - https://www.smashingmagazine.com/2020/01/data-components-vue-js/
      this.$emit('editUser', record)
    }
  }
}
</script>

<style lang="scss">
.b-table-sticky-header {
  max-height: 100%;
}
.addbtn {
  font-size: 20px;
  background-color: #006bbb;
  float: right;
}
.addbtn:hover {
  background-color: #30a0e0;
}
</style>
