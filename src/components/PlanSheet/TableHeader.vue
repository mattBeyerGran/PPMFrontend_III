<template >
              <tr  class="ppmDarkTextColor">
                <th class="text-start white--text subtitle-1">Plan-Elemente</th>
                <th class="text-center white--text subtitle-1"> {{ xzName }} </th>
                <th class="text-center white--text subtitle-1">Feb</th>
                <th class="text-center white--text subtitle-1">Mar</th>
                <th class="text-center white--text subtitle-1">Apr</th>
                <th class="text-center white--text subtitle-1">Mai</th>
                <th class="text-center white--text subtitle-1">Jun</th>
                <th class="text-center white--text subtitle-1">Jul</th>
                <th class="text-center white--text subtitle-1">Aug</th>
                <th class="text-center white--text subtitle-1">Sep</th>
                <th class="text-center white--text subtitle-1">Okt</th>
                <th class="text-center white--text subtitle-1">Nov</th>
                <th class="text-center white--text subtitle-1">Dez</th>
                <th class="text-start white--text subtitle-1">Aktionen</th>
              </tr>
</template>

<script>


export default {
  name: "my-table-header",
  props: {
     header: [{ type: String, required: false }],
     myName: { type: String, required: false }
  },
   data () {
      return { 
        xzName: "Peterr"
      }
   },
   activated() {
     return this.xzName= this.myName;
   },
  methods: {
      setName() {
        return this.xzName= this.myName;
      }
    }
  
}
</script>