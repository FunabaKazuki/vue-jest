import Vue from "vue";
import Music from "@/views/Music";
import { mount,createLocalVue } from "@vue/test-utils";
import Vuetify from 'vuetify'

let wrapper;
const localVue = createLocalVue()
let vuetify

const mockRouterPush = jest.fn();

beforeEach(() => {
  vuetify = new Vuetify()

  wrapper = mount(Music,{
    localVue,
    vuetify,
    mocks: {
        $router: {
          push: mockRouterPush
        },
      }
  })
});

afterEach(() => {
  wrapper.destroy();
});

describe("音楽検索", () => {

    it('keyword初期値' , () =>{
        expect(wrapper.vm.keyword).toBe("");
    })

    it('検索ボタンクリック時にsearch()の$route.pushが実行される' , () =>{
        expect(mockRouterPush.mock.calls.length).toBe(0);
       //wrapper.find("input").setValue("slipknot")
        wrapper.find("button").trigger("click")
        expect(mockRouterPush.mock.calls.length).toBe(1);
    })

    it('search()の引数が正しく実行される' , () =>{
        wrapper.find("input").setValue("slipknot")
        wrapper.find("button").trigger("click")
        expect(mockRouterPush).toHaveBeenCalledWith("/result/slipknot");
    })


});