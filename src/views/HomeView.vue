<script setup lang="ts">
import UserCard from '@/components/UserCard.vue'
import UserService from '@/services/UserService'
import type { User } from '@/types'
import { onMounted, ref } from 'vue'

const users = ref<User[] | null>(null)
onMounted(() => {
  UserService.getUsers()
    .then((res) => (users.value = res.data))
    .catch((err) => console.error('An error occurred!', err))
})
</script>

<template>
  <div v-if="users" class="user-wrapper">
    <UserCard v-for="user in users" :user="user" :key="user.id"></UserCard>
  </div>
</template>

<style>
.user-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.user-container {
  border: 1px solid black;
  width: 512px;
  display: flex;
  place-items: center;
  flex-direction: column;
}
</style>
