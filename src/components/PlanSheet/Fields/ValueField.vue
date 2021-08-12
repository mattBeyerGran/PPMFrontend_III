<template>
    <td  class="ppmTabsBGColor" v-bind:style="{color : fieldColor}">{{fieldValue}}</td>
</template>
<script>
export default {
  name: "my-value-field",
  props: {
      fieldValue: { type: Number, required: false },
      fieldColor: { type: String, required: false },
  },
}
</script>
