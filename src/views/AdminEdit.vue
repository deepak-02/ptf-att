<template>
<v-app id="userhome">

    <v-navigation-drawer
      v-model="drawer"
      app
    >
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
    
    <v-app-bar app color="blue darken-1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

       <v-app-bar-title>Edit Profile</v-app-bar-title>
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

     <v-main class="d-flex justify-center align-">
     <v-col class="text-center" cols="12" md="6">
       <v-form @submit.prevent="Edit" >
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center"
                        >Edit Admin Profile</h4>
                        <h6
                          class="text-center  grey--text "
                        >Fill all the required details</h6>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                      
                            <v-text-field
                            type="text"
                            v-model="user.name"
                            label="User Name"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                           :disabled="!isEditing"
                           :class="{view: !isEditing}"
                          />
                          <v-text-field
                            type="email"
                            v-model="user.email"
                            label="Email"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                             :disabled="!isEditing"
                           :class="{view: !isEditing}"
                          />
                         
                           <v-text-field
                            type="text"
                            v-model="mob"
                            label="Mobile no:"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
                          <v-text-field
                            type="text"
                            v-model="work"
                            label="Working Field"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                          <v-text-field
                            type="text"
                            v-model="address"
                            label="Address"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
         
                          <v-btn type="submit" id="register" color="blue" dark block tile @click="isEditing = !isEditing">{{isEditing ? 'Save' : 'Edit'}}</v-btn>
                          <v-btn v-if="isEditing" @click="isEditing = false">Cancle</v-btn>
                     
                       
                          </v-col>
                      </v-row>  
                   </v-card-text>
                 </v-form>
              </v-col>

        </v-main>
  </v-app>    
</template>

<script>
export default {
     data: () => ({ 
     drawer: null,

     isEditing: false,
     user: { 
       name: '',
       email: ''
       },
     name:'',
     email:'',
     mob:'',
     work:'',
     address:'',

     items: [
          { title: 'Home', icon: 'mdi-home-outline' ,to: '/adminhome'},
          { title: 'Profile', icon: 'mdi-account-outline' ,to: '/adminprofile'},
          { title: 'Attendance', icon: 'mdi-calendar-account-outline' , to: '/adminattend'},
          { title: 'About', icon: 'mdi-information-outline', to: '/adminabout' },
        ], 
     }), 
     methods:{
       Edit (){
          const formData = { 
              name: this.name,
              email: this.email,
              mob: this.mob,
              work: this.work,
              address:this.address
           };
             console.log(formData);
       }
     }
}
</script>

<style>
  .view {
    border-color: transparent;
    background-color: initial;
    color: initial
  }
</style>