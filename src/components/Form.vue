<template>
  <div id="userForm">
    <b-alert :show="dismissCountDown" dismissible variant="warning" @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged">
      <p>You have updated a User's information.</p>
    </b-alert>
    <h2 v-if="state">Edit Current User</h2>
    <h2 v-else>Add New User</h2>
    <b-form @submit="onSubmit">
      <b-form-group id="firstName" label="First Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.firstName" placeholder="Enter first name" required></b-form-input>
      </b-form-group>

      <b-form-group id="lastName" label="Last Name:" label-for="input-3">
        <b-form-input id="input-3" v-model="form.lastName" placeholder="Enter last name" required></b-form-input>
      </b-form-group>

      <b-form-group id="email" label="Email address:" label-for="input-1"
        description="We'll never share your email with anyone else.">
        <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group id="dob" label="Date of Birth:" label-for="input-4">
        <b-form-input id="input-4" v-model="form.dob" placeholder="Enter Date of Birth" required></b-form-input>
      </b-form-group>

      <b-button type="submit" pill variant="success">Submit</b-button>
      <b-button type="cancel" pill variant="danger" @click="onCancel()">Cancel</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    record: Object,
    state: Boolean
  },
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        dob: 0
      },
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  created () {
    if (this.state) {
      this.form.firstName = this.record.firstName
      this.form.lastName = this.record.lastName
      this.form.email = this.record.email
      this.form.dob = this.record.dob
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      const url = 'http://localhost:3000/users/'
      const item = {
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        email: this.form.email,
        dob: this.form.dob
      }
      if (this.state) {
        this.axios.patch(url + this.record.id, item).then((response) => {
          if (response.status === 200) {
            this.showAlert()
            this.onCancel()
          }
        }).catch(error => {
          this.error = true
          throw new Error(`API ${error}`)
        })
      } else {
        this.axios.post(url, item).then((response) => {
          console.log(response.status)
          if (response.status === 201) {
            this.onCancel()
          }
        }).catch(error => {
          this.error = true
          throw new Error(`API ${error}`)
        })
      }
    },
    onCancel () {
      this.$emit('onCancel')
    },
    onReset (event) {
      event.preventDefault()
      // cancel our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to cancel/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>

<style lang="scss">
form {
  text-align: left;
  padding: 10px;
}
label {
  padding-left: 10px !important;
}
#user-form {
  .btn-danger {
    font-size: 20px;
  }
  .btn-success {
    font-size: 20px;
    margin-right: 20px;
  }
}
</style>
