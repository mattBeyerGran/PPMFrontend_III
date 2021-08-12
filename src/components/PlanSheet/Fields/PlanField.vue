<template>
    <td  class="ppmTabsBGColor subtitle-1" v-bind:style="{color : fieldColor, background : fieldBGColor}">{{fieldValue}}</td>
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
