<template>
    <td class="subtitle-1 text-start" v-bind:style="{color: fieldColor, backgroundColor: fieldBGColor, borderColor: fieldBGColor}">
      <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-icon dark color="ppmParameterColor" class="mr-2" v-bind="attrs" v-on="on">mdi-calculator-variant</v-icon>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ElementTitle}}
        </v-card-title>

        <v-card-text class="mt-2">
          {{ElementTitle}}
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
  name: "my-element-field",
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
