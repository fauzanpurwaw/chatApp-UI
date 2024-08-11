<script lang="ts" setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import moment from "moment";

const date = ref(null);
</script>

<template>
  <div class="flex gap-3">
    <div
      class="flex gap-2 items-center h-9 bg-blue-600 text-white text-[12px] px-3 rounded cursor-pointer"
    >
      <VueDatePicker v-model="date" range position="right">
        <template #trigger>
          <div class="flex justify-center items-center gap-2">
            <Icon name="bx:filter-alt" size="16" />
            <div class="ml-1">Filter</div>
            <div class="flex gap-[2px]">
              <div
                class="flex items-center justify-center px-[8px] py-[2px] bg-white rounded-full text-[10px] text-blue-600"
                v-if="date"
              >
                1
              </div>
              <Icon name="octicon:triangle-down-16" size="16" />
            </div>
          </div>
        </template>
        <template #action-preview>
          <div
            v-if="date"
            class="bg-red-600 text-white text-[12px] font-[500] px-3 rounded hover:bg-red-700 md:hidden flex"
            @click="() => (date = null)"
          >
            Clear
          </div>
        </template>
      </VueDatePicker>
    </div>
    <div
      class="text-blue-600 text-[10px] font-semibold lg:flex items-center hidden"
      v-if="date"
    >
      <div
        class="w-fit overflow-hidden text-ellipsis px-2 bg-blue-100 rounded-md py-1 flex items-center gap-4"
      >
        Masuk : {{ moment(date[0]).format("DD/MM/YYYY") }} -
        {{ moment(date[1]).format("DD/MM/YYYY") }}
        <Icon
          name="ic:baseline-close"
          size="14"
          class="bg-blue-600 cursor-pointer"
          @click="() => (date = null)"
        />
      </div>
    </div>
  </div>
</template>
