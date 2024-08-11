<script lang="ts" setup>
import moment from "moment";
import { dummyDropdownData, dummyChatInfos } from "~/dummy";

// ---
const route = useRoute();
const router = useRouter();

const containerEl = ref<HTMLElement | null>(null);

// stores
const { openedChat } = storeToRefs(useGeneralStore());
const { setOpenedChat } = useGeneralStore();

// refs
const selectedChannel = ref("");
const chatInfos = ref(dummyChatInfos);
const sortByDesc = ref(true);
const onEdit = ref(false);

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
  chatInfos.value = dummyChatInfos.filter((i: any) =>
    i?.customerName.toLowerCase().includes(value.toLowerCase())
  );
};

const onClickFilter = () => {
  sortByDesc.value = !sortByDesc.value;
  sortData();
};

onMounted(() => {
  sortData();
  watch(
    () => openedChat.value.conversations.length,
    () => {
      setTimeout(() => {
        if (containerEl.value) {
          containerEl.value.scrollTop = containerEl?.value?.scrollHeight;
        }
      }, 50);
    }
  );
});
</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <div
      class="container w-full lg:!flex"
      :class="{ '!hidden': openedChat?.conversations.length !== 0 }"
    >
      <CategoryMenu />
      <div class="filter-group">
        <SearchFilter class="" :on-change-value="onFilterByName" />
        <Dropdown
          :selected="selectedChannel"
          :data="dummyDropdownData"
          :on-click-item="onItemSelected"
        />
        <FilterDate />
      </div>
    </div>
    <div class="border rounded bg-white m-0 h-full duration-300">
      <div class="flex w-full h-full duration-500">
        <!-- break -->
        <div
          class="lg:!flex hidden h-full lg:max-w-[300px] max-h-full w-full duration-300"
          :class="{ '!flex': openedChat?.conversations.length === 0 }"
        >
          <div class="flex flex-col w-full h-full duration-300">
            <ChatPreviewHeader :on-click-filter="onClickFilter" />
            <div
              class="overflow-auto lg:h-[68dvh] h-[77dvh] mb-2 hide-track duration-300"
            >
              <ChatPreview :data="chatInfos" :on-click-item="setOpenedChat" />
            </div>
          </div>
        </div>
        <!-- break -->
        <div
          class="flex-[2] lg:!flex h-full duration-300 border-r"
          :class="{ hidden: onEdit }"
          v-if="openedChat?.conversations.length !== 0"
        >
          <div class="flex flex-col w-full h-full duration-500">
            <ChatHeader
              :on-click-edit="
                () => {
                  onEdit = !onEdit;
                  console.log(onEdit);
                }
              "
            />
            <div
              class="overflow-auto lg:h-[56dvh] h-[65dvh] bg-[#f9fafe] hide-track"
              ref="containerEl"
            >
              <ChatContent />
              <div
                class="font-semibold italic sm:text-[8px] text-[12px] flex w-full justify-center pt-3 py-5"
              >
                <span class="text-green-600">Status Percakapan Open</span>
                , Tipe Percakapan
                <span class="underline text-blue-600 ml-1 cursor-pointer"
                  >Follow Up Lead Ke 1</span
                >
              </div>
            </div>
            <ChatFooter />
          </div>
        </div>
        <!-- break -->
        <div
          class="overflow-auto lg:h-[77dvh] h-[80dvh] mb-2 hide-track duration-300 lg:!max-w-[320px] w-full"
          v-if="openedChat?.conversations.length !== 0 && onEdit"
        >
          <div class="flex flex-col w-full h-full duration-300">
            <SettingsSettingHeader :on-click="() => (onEdit = !onEdit)" />
            <div
              class="overflow-auto lg:h-[68dvh] h-[77dvh] mb-2 hide-track duration-300"
            >
              <SettingsSettingContent />
            </div>
          </div>
        </div>
        <div
          class="lg:flex-1 lg:flex hidden h-full w-full duration-300"
          v-if="openedChat?.conversations.length === 0"
        >
          <div
            class="flex justify-center items-center w-full h-full bg-slate-200 font-semibold text-slate-400"
          >
            No Chat Opened
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  @apply flex gap-2 items-center w-full lg:mx-0 mx-auto;
}
.filter-group {
  @apply flex gap-2 w-full lg:justify-normal justify-end;
}
.hide-track::-webkit-scrollbar {
  width: 2px;
}
.hide-track::-webkit-scrollbar-thumb {
  width: 2px;
  @apply bg-slate-400 rounded;
}
</style>
