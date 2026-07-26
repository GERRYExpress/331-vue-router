<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(
  defineProps<{
    resource: string
  }>(),
  {
    resource: 'page',
  },
)
</script>

<template>
  <div>
    <h1>Oops!</h1>
    <p>The {{ resource }} you're looking for is not found</p>
    <RouterLink :to="{ name: 'home-view' }">Back to the home page</RouterLink>
  </div>
</template>
