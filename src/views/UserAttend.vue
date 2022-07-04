  <template>
  <v-app id="userattend">

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      

      <v-img src="calendar.jpg">
         <div class="text-center"></div>
      </v-img>

       <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            User
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
    
    <v-app-bar app color="blue darken-1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Attendance</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>


        <v-row justify="center">
    <v-date-picker v-model="picker"></v-date-picker>
  </v-row>
 
  </v-app>
</template>

<script>
  export default {
   data: () => ({ 
     picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
     drawer: null,
     items: [
          { title: 'Home', icon: 'mdi-home-outline' , to: '/adminhome'},
          { title: 'Profile', icon: 'mdi-account-outline' ,to: '/adminprofile' },
          { title: 'Attendance', icon: 'mdi-calendar-account-outline',to: '/adminattend' },
          { title: 'About', icon: 'mdi-information-outline' , to: '/adminabout' }
        ], 

        focus: '',
        type: 'month',
        typeToLabel: {
        month: 'Month',
      
       
      },
    
     }), 
   

   mounted () {
      this.$refs.calendar.checkChange()
    },
    methods: {
   
    
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
    
    
    },
  }
</script>
<style>

</style> 
