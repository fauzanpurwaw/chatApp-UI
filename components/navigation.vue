<script lang="ts" setup>
const route  = useRoute();
</script>

<template>
  <div class="border-b flex justify-center sm:justify-start">
    <div class="flex w-full sm:gap-1">
      <NuxtLink class="sm:inline-block sm:w-fit flex w-full" to="chat">
        <div class="menu-item active-item">Chat</div>
      </NuxtLink>
      <NuxtLink class="sm:inline-block sm:w-fit flex w-full" to="">
        <div class="menu-item">Group</div>
      </NuxtLink>
      <NuxtLink class="sm:inline-block sm:w-fit flex w-full" to="">
        <div class="menu-item">Channel</div>
      </NuxtLink>
      <NuxtLink class="sm:inline-block sm:w-fit flex w-full" to="">
        <div class="menu-item">Setting</div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.active-item {
  @apply border-b-4 border-blue-500;
}
.menu-item {
  @apply sm:px-5 py-2 font-bold text-slate-500 text-sm w-full text-center
  hover:cursor-pointer hover:border-b-4 border-blue-500  sm:text-sm text-[13px];
}
</style>
