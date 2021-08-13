<template>
    <td  class="" v-bind:style="{color : fieldColor, backgroundColor : fieldBGColor, borderColor: fieldBGColor}">{{fieldValue}}</td>
</template>
<script>
export default {
  name: "my-value-field",
  props: {
      fieldValue: { type: Number, required: false },
      fieldColor: { type: String, required: false },
      fieldBGColor: { type: String, required: false },
  },
}
</script>
