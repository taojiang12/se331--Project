<template>
  <div v-if="GStore.event">
    
    <div id="nav">
      <router-link :to="{ name: 'EventName', params: { id } }"
        >Name</router-link
      >
      |
      <router-link :to="{ name: 'EventAge', params: { id } }"
        >Age</router-link
      >
      |
      <router-link :to="{ name: 'EventHometown', params: { id } }"
        >Hometown</router-link
      >
      
    </div>
    <router-view :event="GStore.event" />
  </div>
</template>
<script>
export default {
  inject: ['GStore']
}
</script>
