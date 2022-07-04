<template>
  <v-app id="adminattend">

    <v-navigation-drawer
      v-model="drawer"
      app
    >
    <v-img src="Attend.jpg"></v-img>
      <div class="text-center">
     
      </div>
 
      <!--  -->
       <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Admin
          </v-list-item-title>
          <v-list-item-subtitle>
            Side Menu
          </v-list-item-subtitle>
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

      <v-app-bar-title >Attendance</v-app-bar-title>

      <v-spacer></v-spacer>
  <v-col md="3">
  <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
    </v-col>
    </v-app-bar>
 
<v-img
     
      src="attendanz.jpg"
      gradient="to top right, rgba(144,146,150,.06), rgba(25,32,72,.7)"
    >
    
<v-container>
    <v-row>
      <v-col md="3">
      
      </v-col>
    </v-row>
      <v-row>
        <v-col>
           <v-data-table 
            :headers="header"
            :items="list"
            :search="search"
            hide-default-footer
            class="elevation-1 mx-9"
          > 
           <li v-for="list in items" :key="list.id">  </li>  
   
       <td>{{list.name }}</td>
        <td>{{list.date }}</td>
        <td>{{list.time}}</td>
        <td>{{list.email}}</td>        
          </v-data-table>
        </v-col>
      </v-row>
    </v-container> 
</v-img>

  </v-app>
</template>

<script>
import axios from 'axios'

  export default {
   data: () => ({ 
  
     search: '',
     drawer: null,
     items: [
          { title: 'Home', icon: 'mdi-home-outline' , to: '/adminhome'},
          { title: 'Profile', icon: 'mdi-account-outline' ,to: '/adminprofile' },
          { title: 'Attendance', icon: 'mdi-calendar-account-outline', to: '/adminattend' },
          { title: 'About', icon: 'mdi-information-outline' , to: '/adminabout' },
        ], 
     header: [
          { text: 'User Name', align: 'start', sortable: false, value: 'name',},
          {text: 'e-mail', value: 'email' },
          { text: 'Date', value: 'date' },
          { text: 'Time', value: "time", },
          

        ],
        list: []  
     }),
     mounted(){
      this.getTodayAttendence()
     },
   
     methods:{

      getTodayAttendence(){
  
      axios.get('https://62c278b0b640961e711076b9--splendid-manatee-f07ab7.netlify.app/api/rest/recent'
 
      ).then((response)=>{
        this.list= response.data;
        console.log(response.status);
        console.log(response.data);
        
      }).catch((error)=>{
        console.log(error);
      })   
      },
      }
  }

</script>
<style>

</style>
