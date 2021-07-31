<template>
  <v-container>
    <div align="left" class="mt-12 text-center">
        <TabMenue PlanTopic="Ertragsplanung" />  
      <img src="@/assets/under-construction.png"/>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "PlanSheetTemplate",
  props: {
    title: {
      type: String,
      required: true
    }
  },
}
</script>

<style>

</style>