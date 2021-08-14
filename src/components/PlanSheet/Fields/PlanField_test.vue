<template>
    <td dense class="subtitle-1 " v-bind:style="{color: fieldColor, backgroundColor: fieldBGColor, borderColor: fieldBGColor }">
      <v-text-field
        dense
        :color="fieldColor"
        :background-color="fieldBGColor"
        >
        {{fieldValue}}
      </v-text-field>
     </td>
</template>
<script>
export default {
  name: "my-plan-field",
  props: {
      fieldValue: { type: Number, required: false },
      fieldColor: { type: String, required: false },
      fieldBGColor: { type: String, required: false },
  },
}
</script>
// backgroundColor: fieldBGColor, borderColor: fieldBGColor