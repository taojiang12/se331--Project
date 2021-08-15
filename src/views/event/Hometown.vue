<template>
  <div v-if="event">
      <p>Hometown is : {{event.hometown}}</p>
  </div>
</template>
<script>
export default {
  props: ['event'],

}
</script>
