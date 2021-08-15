<template>
 <div>
  <ul>
   <li v-for="item in ('Sinovac' | search)" :key="item"></li>
   <li v-for="item in ('Johnson' | search)" :key="item"></li>
   <li v-for="item in ('Sinopharm' | search)" :key="item"></li>
  </ul
 </div>
</template>

<script>
export default{
 name: "test",

 mounted(){},
 filters: {
  search(str){
   return this.json.fliter((item) => {
    return item.vaccine === str
   });
  },
 },

};
</script>
