import { mount } from "@vue/test-utils";
import TheToolbar from "@/components/TheToolbar";

describe("Toolbar.vue", () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(TheToolbar);

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain(
      '<h1 class="header__title">Поиск и бронирование авиaбилетов</h1>'
    );
  });
});
