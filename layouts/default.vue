<script lang="ts" setup>
  useHead({
    title: "Demo | CRM"
  });
</script>

<template>
  <div class="default-layout w-full">
    <Navigation />
    <div class="my-4 flex w-full flex-auto max-h-full flex-nowrap">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .default-layout {
    @apply px-5 pt-5 max-h-dvh overflow-y-auto flex-col flex-nowrap;
  }
</style>