<template>
<v-container fluid>
   <v-row class="pa-2">
     <v-col cols="12">
        <div class="text-h6 font-weight-bold">
            Analisis de facebook
        </div>
     </v-col>

      <v-col cols="6">
            <v-card height="422">
                <v-card-title>Urgentes</v-card-title>
                    <v-data-table
                      :headers="headers"
                      :items="fu"
                      :items-per-page="10"
                      :search="search"
                    ></v-data-table>
             </v-card>
       </v-col>

             <v-col cols="6">
            <v-card height="422">
                <v-card-title>Relevantes</v-card-title>
                    <v-data-table
                      :headers="headers"
                      :items="fr"
                      :items-per-page="10"
                      :search="search"
                    ></v-data-table>
             </v-card>
       </v-col>


            <v-col cols="12">
        <div class="text-h6 font-weight-bold">
            Analisis de twitter
        </div>
     </v-col>

      <v-col cols="6">
            <v-card height="422">
                <v-card-title>Urgentes</v-card-title>
                    <v-data-table
                      :headers="headers"
                      :items="tu"
                      :items-per-page="10"
                      :search="search"
                    ></v-data-table>
             </v-card>
       </v-col>

             <v-col cols="6">
            <v-card height="422">
                <v-card-title>Relevantes</v-card-title>
                    <v-data-table
                      :headers="headers"
                      :items="tr"
                      :items-per-page="10"
                      :search="search"
                    ></v-data-table>
             </v-card>
       </v-col>


            <v-col cols="12">
        <div class="text-h6 font-weight-bold">
            Analisis de Instagram
        </div>
     </v-col>

      <v-col cols="6">
            <v-card height="422">
                <v-card-title>Urgentes</v-card-title>
                    <v-data-table
                      :headers="headers"
                      :items="iu"
                      :items-per-page="10"
                      :search="search"
                    ></v-data-table>
             </v-card>
       </v-col>

             <v-col cols="6">
            <v-card height="422">
                <v-card-title>Relevantes</v-card-title>
                    <v-data-table
                      :headers="headers"
                      :items="ir"
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
    fu: [{
      sector: "Personal",
      categoria:"Transferencias",
      comentario: "Cobro de comisiones en transferencias",
      red:"facebook",
      apariciones: 25
    },
        {
      sector: "Personal",
      categoria:"App",
      comentario: "el reconocimiento facial en la app tiene muchas fallas con frecuenci",
      red:"facebook",
      apariciones: 20
    },
    {
      sector: "Personal",
      categoria:"App",
      comentario: "La aplicacion no funciona en la ultima actualizacion",
      red:"facebook",
      apariciones: 12
    },
    {
      sector: "Personal",
      categoria:"Transferencias",
      comentario: "las transferencias bancarias no se reflejan a tiempo.",
      red:"facebook",
      apariciones: 10
    }],
      fr:[
        {
      sector: "Personal",
      categoria:"App",
      comentario: "llamadas de extorción haciendo pasar por bbva",
      apariciones: 3
    } ],

          tu:[
        {
      sector: "Personal",
      categoria:"Movimientos",
      comentario: "realizan cargos dobles ",
      apariciones: 4
    },
    {
      sector: "Personal",
      categoria:"Depositos",
      comentario: "no puedo pagar en ningún lado bbva",
      apariciones: 3
    } 
     ],

    tr:[
        {
      sector: "Personal",
      categoria:"Atencion al cliente",
      comentario: "hacen preguntas de datos personales por llamadas telefónicas ",
      apariciones: 1
    }
     ],

         iu:[
        {
      sector: "Personal",
      categoria:"Tarjetas",
      comentario: "tarjeta bloqueada sin haberlo solicitado",
      apariciones: 5
    }
     ],
              ir:[
        {
      sector: "Personal",
      categoria:"App",
      comentario: "no se pueden dar de alta las pólizas en la app",
      apariciones: 1
    }
     ]



    })
   
  }
</script>
       