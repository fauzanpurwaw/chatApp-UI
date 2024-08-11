import type { ChatInfo } from "~/interface";

interface Screen {
  name: string;
}

export const useGeneralStore = defineStore("general-store", {
  state(): {
    screen: Screen[];
    openedChat: ChatInfo;
  } {
    return {
      screen: [],
      openedChat: {
        chatId: 0,
        customerId: 0,
        customerName: '',
        activeSalesId: 0,
        activeSalesName: '',
        latestChatDate: '',
        conversations: [],
      }
    }
  },

  getters: {
    isChatOpened: (state) => state.openedChat.conversations.length !== 0,
  },

  actions: {
    clearOpenedChat() {
      this.openedChat = {
        chatId: 0,
        customerId: 0,
        customerName: '',
        activeSalesId: 0,
        activeSalesName: '',
        latestChatDate: '',
        conversations: [],
      }
    },

    setOpenedChat(value: ChatInfo) {
      this.openedChat = value;
      console.log(this.openedChat);
    },

    pushNewChat(value: any) {
      this.openedChat.conversations.push(value);
    }
  },
});