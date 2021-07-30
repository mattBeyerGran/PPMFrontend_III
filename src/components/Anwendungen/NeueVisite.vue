<template>
<div>
  
  <v-container  fluid>
    
    <div align="left" class="mt-12">
      <p class="display-1 secondary--text"><v-icon color="secondary">mdi-file-find mdi-36px</v-icon>
      Neue Visite</p>       
    </div>
  </v-container>
  <!-- Stepper -->  
   <v-stepper v-model="e1" vertical>
      <!-- ---------------------------------------------------------------------------------------------- -->
      <v-stepper-step :complete="e1 > 1" step="1" >Visite anlegen
        <small>Angaben zum befragten Mitarbeiter und dem betroffenen Patienten</small>
      </v-stepper-step>   
        <v-stepper-content step="1" >
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>
            <v-btn color="warning" text @click="close">Abbrechen</v-btn>
            <v-btn color="primary" text @click="e1 = 2" >weiter</v-btn> 
        </v-stepper-content>
      <!-- ---------------------------------------------------------------------------------------------- -->
      <v-stepper-step :complete="e1 > 2" step="2" >Patientenbezogene Befragung
        <small>Fragen zur Pflege und zum Patientenzustand</small>
      </v-stepper-step>
        <v-stepper-content step="2">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>
            <v-btn color="zurueck" text @click="e1 = 1">zurück</v-btn>
            <v-btn color="warning" text @click="close">Abbrechen</v-btn>
            <v-btn color="primary" text @click="e1 = 3" >weiter</v-btn> 
      </v-stepper-content>
      <!-- ---------------------------------------------------------------------------------------------- -->
      <v-stepper-step :complete="e1 > 3" step="3" >Mitarbeiterbezogene Befragung
        <small>Fachkenntnisse und Verhalten des Mitarbeiters</small>
      </v-stepper-step>
        <v-stepper-content step="3">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>
            <v-btn color="zurueck" text @click="e1 = 2">zurück</v-btn>
            <v-btn color="warning" text @click="close">Abbrechen</v-btn>
            <v-btn color="primary" text @click="e1 = 4" >weiter</v-btn> 
      </v-stepper-content>
      <!-- ---------------------------------------------------------------------------------------------- -->
      <v-stepper-step :complete="e1 > 4" step="4" >Materialbezogene Befragung
        <small>Zustand und einsatzbereitschaft der Geräte und Pflegemittel</small>
      </v-stepper-step>
        <v-stepper-content step="4">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>
          <v-btn color="zurueck" text @click="e1 = 3">zurück</v-btn>
          <v-btn color="warning" text @click="close">Abbrechen</v-btn>
          <v-btn color="primary" text @click="e1 = 5" >weiter</v-btn> 
        </v-stepper-content>
      <!-- ---------------------------------------------------------------------------------------------- -->
      <v-stepper-step :complete="e1 > 5" step="5" >Dokumentationsbezogene Befragung
        <small>Aussagefähigkeit der Dokumentation</small>
      </v-stepper-step>
        <v-stepper-content step="5">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>
          <v-btn color="zurueck" text @click="e1 = 4">zurück</v-btn>
          <v-btn color="warning" text @click="close">Abbrechen</v-btn>
          <v-btn color="primary" text @click="e1 = 6" >weiter</v-btn> 
        </v-stepper-content>
      <!-- ---------------------------------------------------------------------------------------------- -->
      <v-stepper-step step="6" >Visite abschließen
        <small>Zielvereinbarungen und dokumentierende Photos</small>
      </v-stepper-step>
      <v-stepper-content step="6">
        <v-card 
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>
        <v-btn color="zurueck" text @click="e1 = 5">zurück</v-btn>
        <v-btn color="warning" text @click="close">Abbrechen</v-btn>
        <v-btn color="primary" text @click="save">Sichern</v-btn>
      </v-stepper-content>
    
  </v-stepper>
  
 

  
</div>
</template>

<script>




export default {
  name: 'NeueVisite',
  
  data() {
    return {
      e1: 1,
      
    }
  },

  components:{
    
  },
  computed: {
    
  },
  methods: {
    
    }
  }


</script>

<style>

</style>