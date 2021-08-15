import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import EventName from '@/views/event/Name.vue'
import EventAge from '@/views/event/Age.vue'
import EventLayout from '@/views/event/Layout.vue'
import EventHometown from '@/views/event/Hometown.vue'
import NotFound from '../views/NotFound.vue'
import Nprogress from 'nprogress'
import EventService from '../services/EventService'
import GStore from '@/store'
import NetWorkError from '@/views/NetworkError.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: (route) => ({
      page: parseInt(route.query.page) || 0,
      perPage: parseInt(route.query.perPage) || 10
    })
  },
  
  {
    path: '/event/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    beforeEnter: (to) => {
      return EventService.getEvent(to.params.id)
        .then((response) => {
          GStore.event = response.data
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              name: '404Resource',
              params: { resource: 'event' }
            }
          } else {
            return { name: 'NetworkError' }
          }
        })
    },
    children: [
      {
        path: '',
        name: 'EventName',
        component: EventName
      },
      {
        path: 'hometown',
        name: 'EventHometown',
        props: true,
        component: EventHometown
      },
      {
        path: 'age',
        name: 'EventAge',
        props: true,
        component: EventAge
      }
    ]
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetWorkError
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
router.beforeEach(() => {
  Nprogress.start()
})
router.afterEach(() => {
  Nprogress.done()
})

export default router
