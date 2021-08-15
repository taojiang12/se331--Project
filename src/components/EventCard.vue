<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventName', params: { id: event.id } }"
  >
    <div class="name">
      <div>
        <h4>Name: {{ event.first_name }} Surname :{{ event.last_name }}</h4>
      </div>
    </div>
  </router-link>
  Status : {{ event.status }}
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.name {
  color: black;
  display: inline-block;
}
</style>
