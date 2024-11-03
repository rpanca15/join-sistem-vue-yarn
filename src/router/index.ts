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
      meta: {
        title: 'Blog - Front End Intermediate'
      }
    },
    {
      path: '/blog/post',
      name: 'blog-post',
      component: BlogPostView,
      meta: {
        title: 'Blog Post - Front End Intermediate'
      }
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
      meta: {
        title: 'Category - Front End Intermediate'
      }
    },
    {
      path: '/about',
      name: 'about-us',
      component: AboutView,
      meta: {
        title: 'About Us - Front End Intermediate'
      }
    },
    {
      path: '/contact',
      name: 'contact-us',
      component: ContactView,
      meta: {
        title: 'Contact Us - Front End Intermediate'
      }
    },
    {
      path: '/author',
      name: 'author',
      component: AuthorView,
      meta: {
        title: 'Author - Front End Intermediate'
      }
    },
    {
      path: '/privacy',
      name: 'privacy-policy',
      component: PrivacyView,
      meta: {
        title: 'Privacy Policy - Front End Intermediate'
      }
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'Join Sistem - Front End Intermediate'
  next()
})

export default router
