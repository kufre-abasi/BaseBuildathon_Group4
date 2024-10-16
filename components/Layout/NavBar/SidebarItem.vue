<template>
  <div>
    <ul class="flex flex-col gap-2 sidebar">
      <li v-for="page in routes" :key="page.linkName">
        <RouterLink
          v-if="!page?.subLinks?.length"
          :to="{ name: page.linkName }"
          :class="{
            active: route.path.startsWith(`/${page.linkName}`),
          }"
        >
          {{ page.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["routes", "title"]);
const route = useRoute();
</script>

<style></style>
