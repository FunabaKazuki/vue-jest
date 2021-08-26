<template>
<div>
  <v-app>

    <router-link to="/">Home</router-link>
    <router-link to="Sample">Sample</router-link>


    


    <v-main>
      <router-view/>
    </v-main>
  </v-app>
  
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
