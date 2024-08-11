<script lang="ts" setup>
const { onChangeValue } = defineProps<{
  onChangeValue: any;
}>();

const toggleSearchFilter = ref(true);
const filterText = ref("");

const clearFilter = () => {
  filterText.value = "";
  onChangeValue(filterText.value);
}
</script>

<template>
  <div class="input-container" :class="{ 'w-full': toggleSearchFilter }">
    <label for="searchFilter" class="flex items-center cursor-pointer">
      <Icon name="gg:search" size="15" class="bg-slate-400" />
    </label>
    <input
      v-model="filterText"
      class="input-style"
      :class="{ flex: true }"
      id="searchFilter"
      type="text"
      placeholder="Pencarian Nama, No.Ref, No.Inv"
      @keyup="onChangeValue(filterText)"
    />
    <Icon name="ic:baseline-close" size="15" class="bg-slate-400 cursor-pointer" @click="clearFilter()" v-if="filterText"/>
  </div>
</template>

<style scoped>
.input-container {
  @apply bg-white border rounded h-9 px-3 flex items-center gap-1 lg:w-72;
}
.input-style {
  @apply lg:flex appearance-none border-none rounded px-2 h-full text-slate-600
  leading-tight focus:outline-none text-[12px] w-full overflow-hidden text-ellipsis;
}
.input-style::placeholder {
  @apply text-ellipsis overflow-hidden;
}
</style>
