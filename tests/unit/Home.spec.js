import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/components/Home.vue'
import { BootstrapVue } from 'bootstrap-vue'

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)

describe('Home.vue Test', () => {
  let wrapper = null

  // SETUP - run before to each unit test
  beforeEach(() => {
    // render the component
    wrapper = shallowMount(Home, {
      localVue,
      data: {
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
    })
  })
  // TEARDOWN - run after to each unit test
  afterEach(() => {
    wrapper.destroy()
  })
  it('renders message when component is created', () => {
    // check the name of the component
    // expect(wrapper.name()).toMatch('Home')
  })
})
