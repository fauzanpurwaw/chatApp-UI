<script lang="ts" setup>
import moment from 'moment';
import type { ChatInfo } from '~/interface';

const {} = defineProps<{
  data: ChatInfo[],
}>();
</script>

<template>
  <div class="md:flex hidden border-b" v-for="item in data">
    <div
      class="flex w-full px-3 text-sm py-2 hover:bg-slate-100 group cursor-pointer"
    >
      <div class="flex justify-between w-full h-fit ">
        <div class="flex-[2] nowrap">
          <div class="nowrap font-semibold text-slate-800">
            {{ item?.customerName }}
          </div>
          <div class="nowrap text-[12px]">
            {{ item?.conversations[item?.conversations.length - 1].text }}
          </div>
          <div class="nowrap text-[12px] font-[500] flex items-center gap-1">
            <Icon name="logos:whatsapp-icon" size="16" class="min-w-[20px]" />
            CHO {{ item?.activeSalesName.split(' ')[0] }} |
            <span class="text-blue-500 nowrap">{{ item?.activeSalesName }}</span>
          </div>
        </div>
        <div class="flex-1 flex flex-col justify-end">
          <div class="text-slate-400 text-[10px] text-end">
            {{ moment(item?.latestChatDate).format('HH:mm') }} | {{ moment(item?.latestChatDate).format('DD-MM') }}
          </div>
          <div class="flex justify-end">
            <div
              class="flex justify-center items-center bg-red-500 rounded-full text-white"
              v-if="item?.conversations?.filter(i => i?.isUnread === true).length"
            >
              <div class="text-[10px] w-fit h-fit px-[8px]">
                {{ item?.conversations?.filter(i => i?.isUnread === true).length }}
              </div>
            </div>
            <div class="text-[#ffffff] group-hover:text-slate-100" v-else>a</div>
          </div>
          <div class="text-end text-slate-800 italic font-[500] text-[12px]">
            Customer
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nowrap {
  @apply overflow-hidden text-ellipsis whitespace-nowrap;
}
</style>
