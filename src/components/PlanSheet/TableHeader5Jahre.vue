<template >
              <tr  class="ppmDarkTextColor">
                <th class="text-start white--text subtitle-1">Plan-Elemente</th>
                <th class="text-center white--text subtitle-1">{{jahr1}}</th>
                <th class="text-center white--text subtitle-1">{{jahr2}}</th>
                <th class="text-center white--text subtitle-1">{{jahr3}}</th>
                <th class="text-center white--text subtitle-1">{{jahr4}}</th>
                <th class="text-center white--text subtitle-1">{{jahr5}}</th>
                <th class="text-start white--text subtitle-1">Aktionen</th>
              </tr>
</template>

<script>


export default {
  name: "mbg-table-header-5jahre",
  props: {
    jahr1: {
      type: String,
      required: true
    },
    jahr2: {
      type: String,
      required: true
    },
    jahr3: {
      type: String,
      required: true
    },
    jahr4: {
      type: String,
      required: true
    },
    jahr5: {
      type: String,
      required: true
    }
  }
}
</script>