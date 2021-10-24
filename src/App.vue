<template>
  <v-app>

   <v-app-bar       color="#072146" app dark>

      <div class="text-h6 ml-4">
         Contigo+
      </div>
           <div class="ml-2">
         <v-icon>mdi-poll</v-icon>
      </div>
            <v-tabs align-with-title >
                <v-tab link to="/">Inicio</v-tab>
                <v-tab link to="/sociales">Redes Sociales</v-tab>
                <v-tab link to="/acciones">Acciones</v-tab>
            </v-tabs>


         <v-bottom-sheet
            v-model="sheet"
            inset
          >
              <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on"><v-icon>mdi-cog</v-icon></v-btn>
              </template>
              <v-sheet
                class="text-center"
                height="500px"
              >
                              <div class="my-3">
                  This is a bottom sheet using the inset prop
                </div>
                <v-btn
                  class="mt-6"
                  text
                  color="error"
                  @click="sheet = !sheet"
                >
                  close
                </v-btn>

              </v-sheet>
          </v-bottom-sheet>


      <v-btn icon>
                <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    sheet: false
  }),
};
</script>
