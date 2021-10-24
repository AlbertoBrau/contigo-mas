<template>
<v-container fluid>
   <v-row class="pa-2">


      <v-col cols="6">
            <v-card height="422">
                <v-card-title>En seguimiento</v-card-title>
                    <v-data-table
                      :headers="headers"
                      :items="seg"
                      :items-per-page="10"
                      :search="search"
                    ></v-data-table>
             </v-card>
       </v-col>

             <v-col cols="6">
            <v-card height="422">
                <v-card-title>Resueltas</v-card-title>
                    <v-data-table
                      :headers="headers"
                      :items="res"
                      :items-per-page="10"
                      :search="search"
                    ></v-data-table>
             </v-card>
       </v-col>


    </v-row>
</v-container>

</template>
<script>
  export default {
    name: 'Home',
    data: () => ({
             headers: [
        { text: 'Sector', value: 'sector' },
        { text: 'Categoria', value: 'categoria' },
        { text: 'Comentario', value: 'comentario' },
        { text: 'Apariciones', value: 'apariciones' }
    ],
    seg:  [
        {
      sector: "Personal",
      categoria:"App",
      comentario: "Cobro de comisiones en transferencias",
      apariciones: 25
    },
            {
      sector: "Personal",
      categoria:"App",
      comentario: "el reconocimiento facial en la app tiene muchas fallas con frecuencia",
      apariciones: 20
    }
     ],
    res: [
       {
      sector: "Personal",
      categoria:"App",
      comentario: "No puedo ver mis movimientos",
      apariciones: 40
    }
    ]
    })    
  }
</script>
       