<template>
  <v-container>
    <v-main>
      <the-header></the-header>
      <v-row align="center" justify="center" >
          <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10"  >
             <v-window v-model="step">
                <v-window-item :value="1">
                  <v-form @submit.prevent="loginValidation" ref="form">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">

                        <h4
                          class="text-center"
                        >Login as Admin</h4>
                        <h6
                          class="text-center  grey--text "
                        >Log in to Admin page so you can mark your attendance<br>and enjoy your learning</h6>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           
                          <v-text-field
                            v-model="email"
                            :rules="emailRules" 
                            label="Email"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            class="mt-12"
                            prepend-inner-icon="email"
                          />
                          <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            label="Password"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            prepend-inner-icon="mdi-lock-outline"
                            :type="passwordShow ? 'text' : 'password'"
                            :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="passwordShow = !passwordShow"
                          
                          />
                            <v-row>
                              <v-col cols="12" sm="7">
                                <v-checkbox
                       
                        label="Remember Me"
                        class="mt-n1"
                        color="blue"
                      > </v-checkbox>
                              </v-col>
                              <v-col cols="12" sm="5">
                               
                                <router-link to='/forgetpassword' class="caption blue--text">Forget password</router-link>
                               
                              </v-col>
                            </v-row>
                          
                          <v-btn :loading="isLoggingIn" type="submit" color="blue" dark block tile >Log in</v-btn>
                     
                      
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="6" class="blue rounded-bl-xl" >
                    <div style="  text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text" >
                        <h3 class="text-center ">Not yet registred ?</h3>
                        <h6
                          class="text-center"
                        >Let's get you all set up so you can register <br> and get attendance.</h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="signin">SIGN UP</v-btn>
                      </div>
                      </div>
                    </v-col>
                  </v-row>

                   <v-snackbar top color="green" v-model="snackbar">
                    Login successfully
                  </v-snackbar>

                  </v-form>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
      </v-row>
      </v-main>
  </v-container>
</template>

<script>
 import TheHeader from '../components/TheHeader.vue'; 
import { setTimeout } from 'timers';
import axios from 'axios'

  export default {
    components: { TheHeader},
   data: () => ({
    step: 1,
     isLoggingIn: false,
     snackbar: false,

    //  isAlertShow: false,

      mob: '',
      first_name: '',
      passwordShow: false,
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be more than 8 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
  }),

  methods: {
    loginValidation() {
       
       axios.post('https://qr-scan3.herokuapp.com/api/auth/signin', { 
                "username" : this.email,
                "password": this.password,
               
           }).then((response)=>{
             if( this.$refs.form.validate()){
              this.isLoggingIn = true
            setTimeout(() => {
                this.isLoggingIn = false
                this.snackbar = true 
                setTimeout(() => this.redirect(), 1000)
            }, 1000)
             .catch(error => {
        console.log(error)
        this.errored = true
      })
           }
             console.log(response.status);
             console.log(response.data);
           }).catch((error)=>{
             console.log(error.response);
           });
            
            console.log(this.$refs.form) 
        },

      redirect() {
            this.$router.push({name: 'adminhome'})
        },

      signin(){
        this.$router.push({name:'adminregister'})
      }         
  }
  }
</script>
<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
header {
  width: 100%;
  height: 5rem;
  background-color: #1c81e6;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f6f6f6;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f2f0f2;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
/* login */

.widget {
    margin: 0;
    height: unset;
}
.login-panel {
    position: relative;
    padding: 200px 0;
}
.alert-primary {    
    color: rgb(34, 137, 233);
}
</style>