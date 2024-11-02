import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import CategoryView from '@/views/CategoryView.vue'
import AboutView from '@/views/AboutView.vue'
import AuthorView from '@/views/AuthorView.vue'
import ContactView from '@/views/ContactView.vue'
import PrivacyView from '@/views/PrivacyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog/post',
      name: 'blog-post',
      component: BlogPostView,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/about',
      name: 'about-us',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact-us',
      component: ContactView,
    },
    {
      path: '/author',
      name: 'author',
      component: AuthorView,
    },
    {
      path: '/privacy',
      name: 'privacy-policy',
      component: PrivacyView,
    },
  ],
})

export default router
