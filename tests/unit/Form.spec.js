import { shallowMount, createLocalVue } from '@vue/test-utils'
import Form from '@/components/Form.vue'
import { BootstrapVue } from 'bootstrap-vue'

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)

describe('Form.vue Test', () => {
  let wrapper = null

  // SETUP - run before to each unit test
  beforeEach(() => {
    // render the component
    wrapper = shallowMount(Form, {
      localVue,
      propsData: {
        record: {},
        state: false
      },
      data: {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          dob: 0
        }
      }
    })
  })
  // TEARDOWN - run after to each unit test
  afterEach(() => {
    wrapper.destroy()
  })
  it('renders message when component is created', () => {
    // render the component
    const wrapper = shallowMount(Form, {
      propsData: {
        // title: 'User Management System'
      }
    })

    // check the name of the component
    expect(wrapper.name()).toMatch('Form')
  })
})
