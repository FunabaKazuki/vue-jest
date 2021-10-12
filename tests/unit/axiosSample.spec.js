import { shallowMount } from '@vue/test-utils'
import Foo from '@/components/axiosSample'

import axios from 'axios'
jest.mock('axios')


// it('fetches async when a button is clicked', () => {
//   const wrapper = shallowMount(Foo)
//   wrapper.find('button').trigger('click')
//   expect(wrapper.vm.value).toBe(null)
// })

it('fetches async when a button is clicked', done => {
    const wrapper = shallowMount(Foo)
    wrapper.find('button').trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.value).toBe('vaalue')
      done()
    })
  })