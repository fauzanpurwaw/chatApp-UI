interface Screen {
  name: string;
}

export const useGeneralStore = defineStore("general-store", {
  state(): {
    screen: Screen[];
  } {
    return {
      screen: []
    }
  },

  actions: {},
});