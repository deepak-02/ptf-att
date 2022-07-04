
<template>
  <v-app id="adminhome">

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
      <v-img src="home.jpg">
         <div class="text-center"></div>
      </v-img>

       <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Admin
          </v-list-item-title>
       
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
     
   
    <v-app-bar app color="blue darken-1" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
       <v-app-bar-title>Home</v-app-bar-title>
      <v-spacer></v-spacer>
      <log-out></log-out> 
    </v-app-bar>

    <v-img
     src="background.jpg" 
    >
<v-row>
  <v-col lg="12" cols="12">
    
     <v-alert
      dense
      text
      type="success"
    >
      <strong>Login Successfully:</strong> Welcome!
      
      </v-alert>

<home-cards></home-cards>
<home-activities></home-activities>
    
  </v-col>
</v-row>
    </v-img>

    <v-main class="d-flex justify-center align-">
     
    </v-main>
  </v-app>
</template>

<script>

import LogOut from '../components/LogOut';
import HomeCards from '../components/HomeCards';
import HomeActivities from '../components/HomeActivities';

  export default {
    components: {LogOut, HomeCards, HomeActivities},

   data: () => ({
     drawer: null,
     
     items: [
          { title: 'Home', icon: 'mdi-home-outline', to: '/adminhome' },
          { title: 'Profile', icon: 'mdi-account-outline' ,to: '/adminprofile'},
          { title: 'Attendance', icon: 'mdi-calendar-account-outline' , to: '/adminattend'},
          { title: 'About', icon: 'mdi-information-outline', to: '/adminabout' },         
        ],
     }),
  } 
</script>
<style>
</style>
        