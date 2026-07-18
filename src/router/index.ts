import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import PostView from '@/views/PostView.vue'
import ProfileView from '@/views/ProfileView.vue'
import UserView from '@/views/UserView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-view',
      component: HomeView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true,
    },
    {
      path: '/users/:id',
      name: 'user-view',
      component: UserView,
      props: true,
      children: [
        {
          path: '',
          name: 'profile-view',
          component: ProfileView,
        },
        {
          path: 'post',
          name: 'post-view',
          component: PostView,
        },
      ],
    },
  ],
})

export default router
