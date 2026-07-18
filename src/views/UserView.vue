<script setup lang="ts">
import UserService from '@/services/UserService';
import type { User } from '@/types';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps({
    id: {
        type: Number,
        required: true
    }
})
const user = ref<User | null>(null);
onMounted(() => {
    UserService.getUser(Number(props.id))
        .then(res => user.value = res.data)
        .catch(err => {
            if (err.response && err.response.status === 404) {
                router.push({
                    name: '404-resource-view',
                    params: { resource: 'user' }
                })
            }
        })
})
</script>

<template>
    <div v-if="user">
        <nav>
            <RouterLink :to="{ name: 'profile-view' }">Profile</RouterLink>
            <RouterLink :to="{ name: 'post-view' }">Posts</RouterLink>
        </nav>
        <RouterView :user="user" />
    </div>
</template>