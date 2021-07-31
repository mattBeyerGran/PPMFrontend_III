 <template>
  <v-container>
    <v-row no-gutters >
       <!-- Tabs -->
        <v-tabs 
          color="ppmLightTextColor" 
          background-color="ppmTabsBGColor" 
          show-arrows
          >
          <v-tabs-slider color="ppmSlider"></v-tabs-slider>
          <v-tab>Kredit allgemein</v-tab>
          <v-tab to="status">Hypotheken</v-tab>
          <v-tab>Spezial</v-tab>
        </v-tabs>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Profile'

}
</script>

<style>

</style>