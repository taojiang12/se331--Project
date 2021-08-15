<template>
  <div v-if="event">
    <p>Name: {{ event.first_name }} {{ event.last_name }}</p>
  </div>

  <form class="review-form" @submit.prevent="onSubmit">
    <label for="recommend">Recommend:</label>
    <textarea id="recommend" v-model="recommend"></textarea>
    <input class="button" type="submit" value="submit" />
  </form>


   <div class="review-container">
            <h3>Comment:</h3>
            <ul>
                <li v-for="(review,index) in reviews" :key="index">

                 {{review.recommend}}
                <br/>
                </li>
            </ul>
            
        </div>
</template>

<script>
export default {
  props: {event:{},
   reviews:{
            type:Array,
            required:true
        }
  
  },
    data(){
        return{
            recommend:''
        }
    },  methods:{
        onSubmit(){
            if(this.recommend === ''){
                alert('Comment is incomplete. Please full')
                return
            }
            let productReview = {
                recommend: this.recommend
            }
            this.$emit('review-submited',productReview)
            this.recommend = ''
        }
    }
}
</script>

