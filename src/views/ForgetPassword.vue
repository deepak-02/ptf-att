<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row align="center" justify="center" dense>
                    <v-col cols="12" sm="8" md="4" lg="4">
                        <v-card elevation="0">
                            <div class="text-center">
                                <h1 class="mb-2">Forgot Password</h1>
                                <p>processing....</p>
                            </div>
                            
                        <v-form @submit.prevent="forget">
                            <v-text-field
                            v-model="email"
                            label="Email"
                            type="email"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-12"
                            prepend-inner-icon="email"
                          />
                          <v-btn type="submit" class="rounded-0" color="blue" x-large>Reset Password</v-btn>
                            </v-form>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            email: ''
        }
    },
    methods: {
        async forget() {
            const response = await axios.post('http://localhost:8082/forgetpassword',{
                email: this.email
            });

            console.log(response);
        }
    }
    
}
</script>

<style lang="css" scoped>

</style>