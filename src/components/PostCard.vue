<script setup lang="ts">
import type { Post } from '@/types';

defineProps<{
    post: Post
}>()
</script>

<template>
    <div class="post-container">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
    </div>
</template>