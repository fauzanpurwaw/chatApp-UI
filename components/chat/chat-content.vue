<script lang="ts" setup>
import moment from "moment";

const { openedChat } = storeToRefs(useGeneralStore());

// const { data, onClickItem  } = defineProps<{
//   data: ChatInfo[],
//   onClickItem: any,
// }>();
</script>

<template>
  <div class="flex" v-for="conversation in openedChat?.conversations">
    <div
      class="flex flex-col w-full px-3 text-sm py-1 hover:bg-slate-100 group"
      :class="{
        'items-end': conversation.sentFrom.toLowerCase() === 'sales',
      }"
    >
      <div
        class="my-1 flex flex-col border rounded-md bg-[#e7edfb] px-3 py-1 max-w-[70%] text-[13px] font-[500]"
        :class="{
          '!bg-white': conversation.sentFrom.toLowerCase() !== 'sales',
        }"
      >
        <div class="text-slate-600" v-html="conversation?.text.replace(/\n/g, '<br>')">
        </div>
        <div
          class="text-end text-[10px] text-[#a6aab4] flex-row flex justify-end items-center gap-2"
        >
          <div>
            {{ moment(conversation?.sendTime).format("DD-MM-YY") }}
          </div>
          <div>:</div>
          <div>
            {{ moment(conversation?.sendTime).format("HH-mm") }}
          </div>
          <div>
            <Icon
              name="mdi:check-all"
              size="16"
              class="mt-[5px]"
              :class="{ 'bg-emerald-600': !conversation?.isUnread }"
            />
          </div>
        </div>
      </div>
      <div
        class="flex justify-end text-[10px] font-[500] text-slate-400"
        v-if="conversation.sentFrom.toLowerCase() === 'sales'"
      >
        {{ openedChat?.activeSalesName }} | Melalui CRM Plus
      </div>
    </div>
  </div>
</template>

<style scoped>
.nowrap {
  @apply overflow-hidden text-ellipsis whitespace-nowrap;
}
</style>
