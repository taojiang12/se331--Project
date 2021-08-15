<template>
  <p>Age is :{{ event.age }}</p>
  <p>You can edit age at here by click button</p>
  <button @click="edit">Edit Age</button>
</template>
<script>
export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    edit() {
      this.GStore.flashMessage =
        'You are seccessfully edited for ' + this.event.age
      setTimeout(() => {
        //After 3 seconds remove it
        this.GStore.flashMessage = ''
      }, 5000)
      //Set a flash message to appear on the next page loaded which says
      this.$router.push({
        name: 'Home',
        params: { id: this.event.id }
      })
    }
  }
}
</script>
