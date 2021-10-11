import Vue from "vue";
import Sample from '@/components/sample';
import { mount,createLocalVue } from "@vue/test-utils";
import Vuetify from 'vuetify'

let wrapper;
const localVue = createLocalVue()
let vuetify


beforeEach(() => {
  vuetify = new Vuetify()
 

  wrapper = mount(Sample,{
    localVue,
    vuetify,
  })
});

afterEach(() => {
  wrapper.destroy();
});

describe("じゃんけんゲーム", () => {
  // it("HTMLが期待通りか", () => {
  //   expect(wrapper.html()).toContain(
  //     "<div>相手：</div> <button>グー</button> <button>チョキ</button> <button>パー</button>"
  //   );
  // });

  it("date'hand'に正しい配列が入っているか", () => {
    expect(wrapper.vm.hand).toEqual(
      expect.arrayContaining(["goo", "choki", "paa"])
    );
  });

  it("fight", () => {
    let gooTest = false;
    let paaTest = false;
    let chokiTest = false;
    while (gooTest === false || paaTest === false || chokiTest === false) {
      wrapper.vm.fight("goo");
      if (wrapper.vm.enemyHand === "goo") {
        expect(wrapper.vm.result).toBe("あいこ");
        gooTest = true;
      } else if (wrapper.vm.enemyHand === "choki") {
        expect(wrapper.vm.result).toBe("勝ち");
        chokiTest = true;
      } else if (wrapper.vm.enemyHand === "paa") {
        expect(wrapper.vm.result).toBe("負け");
        paaTest = true;
      } else {
        throw new Error("failed");
      }
    }
    gooTest = false;
    paaTest = false;
    chokiTest = false;

    while (gooTest === false || paaTest === false || chokiTest === false) {
      wrapper.vm.fight("paa");
      if (wrapper.vm.enemyHand === "goo") {
        expect(wrapper.vm.result).toBe("勝ち");
        gooTest = true;
      } else if (wrapper.vm.enemyHand === "choki") {
        expect(wrapper.vm.result).toBe("負け");
        chokiTest = true;
      } else if (wrapper.vm.enemyHand === "paa") {
        expect(wrapper.vm.result).toBe("あいこ");
        paaTest = true;
      } else {
        throw new Error("failed");
      }
    }
    gooTest = false;
    paaTest = false;
    chokiTest = false;

    while (gooTest === false || paaTest === false || chokiTest === false) {
      wrapper.vm.fight("choki");
      if (wrapper.vm.enemyHand === "goo") {
        expect(wrapper.vm.result).toBe("負け");
        gooTest = true;
      } else if (wrapper.vm.enemyHand === "choki") {
        expect(wrapper.vm.result).toBe("あいこ");
        chokiTest = true;
      } else if (wrapper.vm.enemyHand === "paa") {
        expect(wrapper.vm.result).toBe("勝ち");
        paaTest = true;
      } else {
        throw new Error("failed");
      }
    }
  });
});
