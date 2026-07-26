<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import PostService from '@/services/PostService'
import type { Post, User } from '@/types'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  user: User
}>()

const posts = ref<Post[] | null>(null)
onMounted(() => {
  PostService.getPostsByUserId(Number(props.user.id))
    .then((res) => (posts.value = res.data))
    .catch((err) => console.error('There was an error!', err))
})
</script>

<template>
  <div v-if="posts" class="post-wrapper">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<style>
.post-container {
  border: 1px solid black;
  padding: 16px;
  width: 90%;
}

.post-wrapper {
  display: flex;
  flex-direction: column;
  place-items: center;
  text-align: justify;
  gap: 18px;
  width: 100%;
}
</style>
