<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          
        >
          <v-icon>mdi-logout</v-icon>
              Logout
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Confirm logout
        </v-card-title>
        <v-card-text>Are you sure you want to logout?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue"
            text
            @click="dialog = false"
          >
           Cancel
          </v-btn>
          <v-btn
            color="red"
            text
            @click="logout"
            href="#"
           
            
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default ({
    data: () => ({
     dialog: false
    }),
    methods: {
      logout()
      {
        localStorage.clear();
        this.$router.push({name: 'admin'})
      }
    }
})
</script>