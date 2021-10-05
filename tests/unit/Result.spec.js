import Vue from "vue";
import Result from "@/views/Result";
import { mount,createLocalVue } from "@vue/test-utils";
import Vuetify from 'vuetify'


import axios from 'axios'
jest.mock('axios')

// axios.get.mockImplementation((api) => {
//   switch (api) {
//     case '/api/test':
//       return Promise.resolve( { status: 200 } )
//   }
// })


let wrapper;
const localVue = createLocalVue();
let vuetify;

const mockAxiosGet = jest.fn();





beforeEach(() => {
  vuetify = new Vuetify()

  wrapper = mount(Result,{
    localVue,
    vuetify,
   // sync: false,
  //  mocks: {
  //   $axios: {
  //     get: mockAxiosGet
  //   },
  // },

    // methods:{
    //   axiosGet(){}
    // },

    mocks:{
      //axiosGet(){console.log('test')},
      $route:{
        params:{
          keyword:'test'
        }
      }
    },

  })
});

afterEach(() => {
  wrapper.destroy();
});


describe("音楽検索結果画面", () => {

    it('created()', () => {
      
      // const users = [{name: 'Bob'}];
      // const resp = {data: users};
      // axios.get.mockResolvedValue(resp);
      // wrapper.vm.axiosGet()

      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.albums[1]).toBe('test2')
      })

    })


});
