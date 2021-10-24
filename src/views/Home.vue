<template>
<div>

    <v-row class="pa-5">
          <v-col cols="2">
            <v-row>
                <v-col cols="12">
                    <v-card height="200"  class="d-flex flex-column align-center justify-center" link to="/registrar">
                        <v-btn class="mb-5" fab dark sm color="indigo">
                            <v-icon dark>mdi-arrow-right-bold-circle</v-icon>
                        </v-btn>
                        <p class="text-center">Ver necesidades</p>
                    </v-card>
                </v-col>

                <v-col cols="12">
                    <v-card link height="200"  class="d-flex flex-column align-center justify-center"  to="/trabajadores">
                        <v-btn class="mb-5" fab dark sm color="indigo">
                            <v-icon dark>mdi-arrow-right-bold-circle</v-icon>
                        </v-btn>
                        <p class="text-center">Ver oportunidades</p>
                    </v-card>
                </v-col>

            </v-row>
          </v-col>
      
          <v-col cols="6">
            <v-card height="422">
                <v-card-title>Interacciones por categoria</v-card-title>
                <apexchart height="80%" type="bar" :options="chart.categoria.options" :series="chart.categoria.series" ref="grafica"></apexchart>
                 
             </v-card>
          </v-col>

            <v-col cols="4">
            <v-card height="422">
                                <v-card-title>Interacciones por red social</v-card-title>

                <apexchart type="area" height="80%" :options="chart.red.options" :series="chart.red.series"></apexchart>

             </v-card>
            </v-col>

                        <v-col cols="4">
              <v-card height="422">
               <v-card-title>Opiniones mas frecuentes</v-card-title>
               <div class="pa-5">

                    <v-alert type="error" icon="mdi-facebook">
                      La aplicacion no funciona en la ultima actualizacion
                    </v-alert>
                    <v-alert type="error" icon="mdi-facebook">
                  Cobro de comisiones en transferencias
                </v-alert>


                        <v-alert type="success" icon="mdi-facebook">
                  Excelente atencion al cliente
                </v-alert>


                <v-alert type="success"  icon="mdi-facebook">
                Muy buenas promociones
                </v-alert>

               </div>



                 
             </v-card>

            </v-col>

          <v-col cols="4">
            <v-row>
                <v-col cols="6">
                    <v-card height="200"  class="d-flex flex-column align-center justify-space-around pa-5" link to="/registrar">
                        <div class="d-flex"> 
                          <p class="text-center font-weight-bold text-h3">64</p>
                          <v-icon large color="#072146">mdi-facebook</v-icon>
                        </div>
                        <div class="text-subtitle-2">Comentarios procesados</div>
                    </v-card>
                </v-col>

                                <v-col cols="6">
                    <v-card height="200"  class="d-flex flex-column align-center justify-space-around pa-5" link to="/registrar">
                        <div class="d-flex"> 
                          <p class="text-center font-weight-bold text-h3">35</p>
                          <v-icon large color="#072146">mdi-instagram</v-icon>
                        </div>
                        <div class="text-subtitle-2">Comentarios procesados</div>
                    </v-card>
                </v-col>

                                <v-col cols="6">
                    <v-card height="200"  class="d-flex flex-column align-center justify-space-around pa-5" link to="/registrar">
                        <div class="d-flex"> 
                          <p class="text-center font-weight-bold text-h3">45</p>
                          <v-icon large color="#072146">mdi-twitter</v-icon>
                        </div>
                        <div class="text-subtitle-2">Comentarios procesados</div>
                    </v-card>
                </v-col>



            </v-row>
          </v-col>

            <v-col cols="4">
            <v-card height="422">
                <v-card-title>Interacciones por sector </v-card-title>
                <apexchart type="pie" height="80%" :options="chart.sec1.options" :series="chart.sec1.series"></apexchart>
             </v-card>
            </v-col>

                        <v-col cols="6">
            <v-card height="422">
                <v-card-title>Necesidades urgentes por atender</v-card-title>
                    <v-data-table
                      :headers="headers"
                      :items="workers"
                      :items-per-page="10"
                      :search="search"
                    ></v-data-table>
             </v-card>
            </v-col>

                        <v-col cols="6">
            <v-card height="422">
                <v-card-title>Necesidades Relevantes</v-card-title>
                                    <v-data-table
                      :headers="headers"
                      :items="workers2"
                      :items-per-page="10"
                      :search="search"
                    ></v-data-table>
             </v-card>
            </v-col>

    

      </v-row>
 
</div>
</template>

<script>
 

  export default {
    name: 'Home',

    components: {

    },
    data: () => ({
      headers: [
        { text: 'Sector', value: 'sector' },
        { text: 'Categoria', value: 'categoria' },
        { text: 'Comentario', value: 'comentario' },
        { text: 'Red social', value: 'red' },
        { text: 'Apariciones', value: 'apariciones' }
    ],
    workers: [{
      sector: "Personal",
      categoria:"Transferencias",
      comentario: "Cobro de comisiones en transferencias",
      red:"facebook",
      apariciones: 25
    },
        {
      sector: "Personal",
      categoria:"App",
      comentario: "el reconocimiento facial en la app tiene muchas fallas con frecuencia",
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
    workers2:[{
      sector: "Personal",
      categoria:"Tarjetas",
      comentario: "tarjeta bloqueada sin haberlo solicitado.",
      red:"Twitter",
      apariciones: 2
    },
        {
      sector: "Personal",
      categoria:"App",
      comentario: "llamadas de extorción haciendo pasar por bbva",
      red:"facebook",
      apariciones: 3
    } ] ,
      search: '',
        chart: {
            red: {   
                options: {
                    xaxis: {
                        categories: [
                    'Facebook',
                    'Instagram',
                    'Twitter'
                    ]
                    }
                },
                series: [{
                    name: 'cuadrilla',
                    data: [64,35,45]
                }]
            } ,
            categoria: {

          series: [{
            name: 'Positivas',
            data: [10, 2, 5, 6, 6]
          }, {
            name: 'Negativas',
            data: [22, 7, 10, 6, 9]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['App', 'Cajeros', 'Seguros', 'Tarjetas', 'Creditos'],
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return  val + " comentarios"
                }
              }
            }
          }


            },
            sec1:{
                        series: [44, 15, 6, 3],
          options: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['Personal', 'Pymes', 'Empresas y Gobierno', 'Express'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          }
            }        
        }
    })    
  }
</script>
