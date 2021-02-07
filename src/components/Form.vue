<template>
  <transition appear name="slide-fade" mode="out-in">
    <div id="userForm">
      <!-- Header -->
      <h2 v-if="state">Edit A Current User</h2>
      <h2 v-else>Add A New User</h2>
      <!-- Input Form -->
      <b-row style="height: auto">
        <b-col></b-col>
        <b-col cols="8">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="firstName" label="First Name:" label-for="input-2" description="Please enter letters/alphabets only.">
              <b-form-input id="input-2" v-model="form.firstName" type="name" pattern="[A-Za-z]{1,}" placeholder="Enter first name" required>
              </b-form-input>
            </b-form-group>

            <b-form-group id="lastName" label="Last Name:" label-for="input-3" description="Please enter letters/alphabets only.">
              <b-form-input id="input-3" v-model="form.lastName" type="name" pattern="[A-Za-z]{1,}" placeholder="Enter last name" required></b-form-input>
            </b-form-group>

            <b-form-group id="email" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
              <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required>
              </b-form-input>
            </b-form-group>

            <b-form-group id="dob" label="Date of Birth:" label-for="input-4">
              <b-form-input id="input-4" v-model="form.dob" type="number" maxlength="10" placeholder="Enter Date of Birth" required></b-form-input>
            </b-form-group>
            <!-- Form Buttons -->
            <b-button type="submit" pill variant="success">Submit</b-button>
            <b-button type="reset" pill variant="warning">Reset</b-button>
            <b-button type="reset" pill variant="danger" @click="onCancel()">Cancel</b-button>
          </b-form>
        </b-col>
        <b-col></b-col>
      </b-row>
    </div>
  </transition>
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
      }
    }
  },
  created () {
    // Checks if Edit button was clicked, set form input fields to clicked user's information
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
      // Set form input for First & Last Name to lowercase
      this.form.firstName = this.form.firstName.toLowerCase()
      this.form.lastName = this.form.lastName.toLowerCase()
      // Create new item Object that contains form inputs
      const item = {
        // Convert First & Last Name data into Camel Case
        firstName: this.form.firstName.charAt(0).toUpperCase() + this.form.firstName.slice(1),
        lastName: this.form.lastName.charAt(0).toUpperCase() + this.form.lastName.slice(1),
        email: this.form.email,
        dob: this.form.dob
      }
      // Checks state that indicates True for editing current user information,
      if (this.state) {
        this.axios.patch(url + this.record.id, item).then((response) => {
          if (response.status === 200) {
            this.successMsg()
          }
        }).catch(error => {
          this.error = true
          throw new Error(`API ${error}`)
        })
      } else { // False for adding a new user
        this.axios.post(url, item).then((response) => {
          if (response.status === 201) {
            this.successMsg()
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
      // Resets/clear form values
      this.form.firstName = ''
      this.form.lastName = ''
      this.form.email = ''
      this.form.dob = 0
    },
    successMsg () {
      // Customer pop up modal that displays Success Message
      this.$bvModal.msgBoxOk('User information was submitted successfully.', {
        title: 'Success',
        size: 'md',
        buttonSize: 'md',
        okVariant: 'success',
        headerClass: 'border-bottom-0',
        footerClass: 'border-top-0',
        centered: true
      }).then(value => {
        this.onCancel()
      })
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
#userForm {
  .btn-danger {
    float: right;
  }
  .btn {
    font-size: 20px;
    margin-right: 20px;
  }
}
.modal-content {
  border-radius: 20px;
}
</style>
