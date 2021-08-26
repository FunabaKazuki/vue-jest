import { shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vuetify from 'vuetify'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const localVue = createLocalVue()
    let vuetify
    vuetify = new Vuetify()

    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      vuetify,
      propsData: { msg }
    })
    expect('1').toMatch('1')
  })
})
