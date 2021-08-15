<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
   <br>
   <br>
  <router-link :to="{ name: 'Home' }">Go to the top</router-link>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
//import { watchEffect } from '@vue/runtime-core'

export default {
  //receive page variable props in the component
  name: 'EventList',
  props: {
    page: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    }
  },
  components: {
    EventCard
    // register it as a child component
  },
  data() {
    return {
      events: null,
      totalEvents: 0 // <-- Added this to store totalEvents
    }
  },
  /*created() {
    watchEffect(() => {
      EventService.getEvents(this.perPage, this.page)
        .then((response) => {
          this.events = response.data.data
          this.totalEvents = response.headers['x-total-count'] // <-- Store it
        })
        .catch((error) => {
          console.log(error)
        })
    })
  },*/

  beforeRouteEnter(routeTo, routeFrom, next) {
    EventService.getEvents(parseInt(routeTo.query.perPage) || 5)
      .then((response) => {
        next((comp) => {
          comp.events = response.data
          comp.totalEvents = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    EventService.getEventsparseInt(parseInt(routeTo.query.perPage) || 5)
      .then((response) => {
        this.events = response.data
        this.totalEvents = response.headers['x-total-count']
        next()
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
    computed: {
    hasNextPage() {
      // First, calculate total pages
      let totalPages = Math.ceil(this.totalEvents / 2) // 2 is events per page

      // Then check to see if the current page is less than the total pages.
      return this.perPage < totalPages
    }
  }
}

</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>