<script lang="ts" setup>
import moment from "moment";
import { dummyDropdownData, dummyChatInfos } from "~/dummy";

const route = useRoute();
const router = useRouter();

const selectedChannel = ref("");
const chatInfos = ref(dummyChatInfos);
const sortByDesc = ref(true);

const onItemSelected = (value: any) => {
  selectedChannel.value = value;

  router.push({
    query: {
      ...route?.query,
      channel: selectedChannel.value || undefined,
    },
  });
};

const sortData = () => {
  chatInfos?.value.sort((a: any, b: any) => {
    if (!sortByDesc.value) {
      return moment(a?.latestChatDate).diff(moment(b?.latestChatDate));
    } else if (sortByDesc.value) {
      return moment(b?.latestChatDate).diff(moment(a?.latestChatDate));
    } else {
      throw new Error('Order must be either "asc" or "desc".');
    }
  });
};

const onFilterByName = (value: string) => {
  console.log("changes");
  chatInfos.value = dummyChatInfos.filter((i: any) => i?.customerName.toLowerCase().includes(value.toLowerCase()));
}

const onClickFilter = () => {
  sortByDesc.value = !sortByDesc.value;
  sortData();
};

onMounted(() => {
  sortData();
})
</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <div class="container">
      <CategoryMenu />
      <div class="filter-group">
        <SearchFilter class="" :on-change-value="onFilterByName"/>
        <Dropdown
          :selected="selectedChannel"
          :data="dummyDropdownData"
          :on-click-item="onItemSelected"
        />
      </div>
    </div>
    <div class="border rounded bg-white m-0 h-full">
      <div class="flex w-full h-full">
        <!-- break -->
        <div
          class="md:flex-[2] md:flex md:visible invisible h-full md:max-w-[300px] max-h-full duration-500"
        >
          <div class="flex flex-col w-full h-full">
            <ChatPreview :on-click-filter="onClickFilter" />
            <div class="overflow-auto md:h-[69dvh] h-[78dvh] mb-2 hide-track">
              <ChatPreviewItem :data="chatInfos" />
            </div>
          </div>
        </div>
        <!-- break -->
        <div class="bg-green-300 flex-[2] h-full duration-300"></div>
        <!-- break -->
        <div
          class="bg-blue-300 lg:flex-1 h-full max-w-[320px] duration-300"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  @apply flex gap-2 md:items-center;
}
.filter-group {
  @apply flex gap-2 w-full md:justify-normal justify-end;
}
.hide-track::-webkit-scrollbar {
  width: 2px;
}
.hide-track::-webkit-scrollbar-thumb {
  width: 2px;
  @apply bg-slate-400 rounded;
}
</style>
