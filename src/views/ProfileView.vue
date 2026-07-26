<script setup lang="ts">
import type { User } from '@/types'
import { computed } from 'vue'

const props = defineProps<{
  user: User
}>()

const address = computed(
  () =>
    props.user.address.city +
    ' ' +
    props.user.address.geo.lat +
    ' ' +
    props.user.address.geo.lng +
    ' ' +
    props.user.address.street +
    ' ' +
    props.user.address.suite +
    ' ' +
    props.user.address.zipcode,
)
</script>

<template>
  <div>
    <h1>{{ user.name }}</h1>
    <p>Address: {{ address }}</p>
  </div>
</template>
