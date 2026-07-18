<script setup lang="ts">
import type { User } from '@/types';
import { useRouter } from 'vue-router';


const props = defineProps<{
    user: User
}>();
const router = useRouter();
const handleClick = () => {
    router.push({
        path: '/users/' + String(props.user.id)
    })
}
</script>

<template>
    <div class="user-container" @click="handleClick">
        <h1>{{ user.name }}</h1>
        <h3>Email: {{ user.email }}</h3>
        <h3>Company: {{ user.company.name }}</h3>
    </div>
</template>

<style scoped>
.user-container {
    cursor: pointer;
    background-color: #FEFEFE;
}

.user-container:hover {
    background-color: #D9D9D9;
}
</style>