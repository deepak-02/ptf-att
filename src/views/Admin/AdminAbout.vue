<template>
  <v-app id="adminabout">

    <v-navigation-drawer
      v-model="drawer"
      app
    >

    <v-img src="https://www.marketing91.com/wp-content/uploads/2020/05/applied-research.jpg">
      <div class="text-center"></div>
    </v-img>
    
      <!--  -->
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

      <v-app-bar-title style="width:10 5px">About</v-app-bar-title>
      <v-spacer></v-spacer>

    </v-app-bar>

     <v-img
     
      src="https://media.istockphoto.com/photos/abstract-blue-backgrounds-picture-id1225495890?k=20&m=1225495890&s=612x612&w=0&h=ekWUMbGkuvn8vzJ_jjbIYtxC1lGx8YyPnTuK5us2Ucw="
      
    >
    
       <div class="about pa-6">
          <h1>About Attendance </h1>
          <p></p>
       </div>
     </v-img>
 
  </v-app>
</template>

<script>
  export default {
   data: () => ({ 
     drawer: null,
     items: [
          { title: 'Home', icon: 'mdi-home-outline' ,to: '/adminhome'},
          { title: 'Profile', icon: 'mdi-account-outline' ,to: '/adminprofile'},
          { title: 'Attendance', icon: 'mdi-calendar-account-outline' , to: '/adminattend'},
          { title: 'About', icon: 'mdi-information-outline', to: '/adminabout' },
          // { title: 'Logout', icon: 'mdi-logout', to: '/admin' },
        ], 
     }), 
   
  }
</script>
<style>

</style>