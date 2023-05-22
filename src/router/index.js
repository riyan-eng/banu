import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Berita from '../views/Berita.vue'
import Direktori from '../views/Direktori.vue'
import Profil from '../views/Profil.vue'
import Layanan from '../views/Layanan.vue'
import Kontak from '../views/Kontak.vue'
import Informasi from '../views/Informasi.vue'
import Bantuan from '../views/Bantuan.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/berita',
      name: 'berita',
      component: Berita
    },
    {
      path: '/direktori',
      name: 'direktori',
      component: Direktori
    },
    {
      path: '/profil',
      name: 'profil',
      component: Profil
    },
    {
      path: '/layanan',
      name: 'layanan',
      component: Layanan
    },
    {
      path: '/kontak',
      name: 'kontak',
      component: Kontak
    },
    {
      path: '/informasi',
      name: 'informasi',
      component: Informasi
    },
    {
      path: '/bantuan',
      name: 'bantuan',
      component: Bantuan
    },
  ]
})

export default router
