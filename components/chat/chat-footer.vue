<script lang="ts" setup>
import moment from "moment";

const { openedChat } = storeToRefs(useGeneralStore());
const { pushNewChat } = useGeneralStore();

const newChat = ref({
  text: ``,
  sendTime: "",
  isUnread: true,
  sentFrom: "Sales",
});
</script>

<template>
  <div class="flex flex-col gap-2 p-2 text-[12px] h-[12vh] border-t px-5">
    <div class="font-semibold italic text-[12px] ml-1">
      sales aktif : <span class="text-green-600">{{ openedChat.activeSalesName }}</span>
      <span class="underline text-blue-600 ml-1 cursor-pointer"
        >Ganti Sales Aktif</span
      >
    </div>
    <div class="h-8 flex items-center gap-2">
      <Icon
        name="material-symbols:attach-file"
        size="18"
        class="bg-slate-600 cursor-pointer"
      />
      <textarea
        v-model="newChat.text"
        autocomplete="off"
        class="input-style resize-none"
        :class="{ flex: true }"
        id="searchFilter"
        type="text-area"
        placeholder="Ketik Pesan..."
      />
      <div
        class="cursor-pointer px-2"
        @click="
          () => {
            if (newChat.text)
              pushNewChat({
                ...newChat,
                sendTime: moment().format(),
              });
            console.log(newChat.text);
            newChat.text = ``;
          }
        "
      >
        <Icon name="ic:round-send" size="16" class="bg-slate-600" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-style {
  @apply flex appearance-none border-2 rounded px-2 pt-1 h-full text-slate-600
  focus:outline-none text-[12px] w-full overflow-hidden text-ellipsis;
}
.input-style::placeholder {
  @apply flex items-center h-full;
}
</style>
