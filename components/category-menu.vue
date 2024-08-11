<script lang="ts" setup>
const router = useRouter();
const route = useRoute();

const toggleMenuCategory = ref(true);

const onClick = (name: string) => {
  router.push({
    query: {
      ...route?.query,
      groupBy: route?.query?.groupBy !== name ? name : undefined,
    },
  });

  toggleMenuCategory.value = true;
};
</script>

<template>
  <div
    class="rounded border justify-center items-center max-h-9 p-2 cursor-pointer flex lg:hidden bg-white duration-300"
    @click="() => (toggleMenuCategory = !toggleMenuCategory)"
  >
    <Icon name="material-symbols:tab-group" size="20" class="bg-slate-500" />
    <div class="red-dot relative -top-2 -left-1 -mr-1"></div>
  </div>
  <div
    class="menu lg:flex lg:relative lg:ml-0 lg:bg-inherit bg-white ml-12 absolute z-50"
    :class="{ hidden: toggleMenuCategory }"
  >
    <div
      class="fixed top-0 right-0 h-screen w-screen -z-[1] lg:hidden"
      @click="() => (toggleMenuCategory = !toggleMenuCategory)"
    ></div>
    <div
      class="menu-item"
      :class="[
        route?.query.groupBy === 'me' ? 'text-blue-600' : 'text-slate-600',
      ]"
      @click="onClick('me')"
    >
      <div class="h-4 w-4 bg-slate-300 rounded-full flex"></div>
      <div class="text">Saya</div>
      <div class="flex">
        <div class="text">(10)</div>
        <div class="red-dot"></div>
      </div>
    </div>
    <div class="divider"></div>
    <div
      class="menu-item"
      :class="[
        route?.query.groupBy === 'unassigned'
          ? 'text-blue-600'
          : 'text-slate-600',
      ]"
      @click="onClick('unassigned')"
    >
      <div class="text">Unassigned</div>
      <div class="flex">
        <div class="text">(5)</div>
        <div class="red-dot"></div>
      </div>
    </div>
    <div class="divider"></div>
    <div
      class="menu-item"
      :class="[
        route?.query.groupBy === 'team' ? 'text-blue-600' : 'text-slate-600',
      ]"
      @click="onClick('team')"
    >
      <div class="text">Team</div>
      <div class="flex">
        <div class="text">(15)</div>
        <div class="red-dot"></div>
      </div>
    </div>
    <div class="divider"></div>
    <div
      class="menu-item"
      :class="[
        route?.query.groupBy === 'all' ? 'text-blue-600' : 'text-slate-600',
      ]"
      @click="onClick('all')"
    >
      <div class="text">Semua</div>
      <div class="flex">
        <div class="text">(15)</div>
        <div class="red-dot"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply text-blue-600;
}
.menu-item {
  @apply flex justify-start items-center gap-1 hover:cursor-pointer py-2 hover:bg-slate-200 px-3;
}
.divider {
  @apply w-[1px] bg-slate-200;
}
.menu {
  @apply border rounded w-fit py-0 my-0;
}
.text {
  @apply text-[12px] font-[500];
}
.red-dot {
  @apply h-[6px] w-[6px] bg-red-400 rounded-full;
}
</style>
