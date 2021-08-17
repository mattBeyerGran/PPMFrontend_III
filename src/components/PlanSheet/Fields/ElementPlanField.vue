<template>
    <td class="subtitle-1 text-start" v-bind:style="{color: fieldColor, backgroundColor: fieldBGColor, borderColor: fieldBGColor}">
      <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-icon dark color="ppmPlanElementColor" class="mr-2" v-bind="attrs" v-on="on">mdi-head-question-outline</v-icon>
      </template>

      <v-card>
        <v-card-title class="text-h5 ppmTabsBGColor ppmTopBarTextColor--text">
            <v-icon dark color="ppmPlanElementColor" class="mr-2" >mdi-head-question-outline</v-icon> {{ElementTitle}}
        </v-card-title>

        <v-card-text class="mt-2">
          {{ElementText}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            schliessen
          </v-btn>
        </v-card-actions>
      </v-card>
     
      </v-dialog>
       {{ElementTitle}}
    </td>
    
</template>
<script>
export default {
  name: "my-element-plan-field",
  props: {
      ElementTitle: { type: String, required: false },
      ElementText: { type: String, required: false },
      fieldColor: { type: String, required: false },
      fieldBGColor: { type: String, required: false },
  },
  data () {
      return {
        dialog: false,
      }
    },
}
</script>
