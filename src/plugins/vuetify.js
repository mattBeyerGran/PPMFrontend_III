import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        ppmTopBarColor: "#F2F2F2",
        ppmTopBarTextColor: "#182F6D",
        ppmFooterColor: "#F2F2F2",
        ppmTapTextColor: "#0682BC",
        ppmFooterTextColor: "#182F6D",
        ppmDarkBackGroundColor: "#354A5F",
        ppmLightBackGroundColor: "#F6F6F6",
        ppmDarkTextColor: "#182F6D",
        ppmLightTextColor: "#0682BC", 
        ppmDrawerColor: "#E8F0F7", 
        ppmTabsBGColor: "#E8F0F7", 
        ppmPlanTitleColor: "#2FA0E0",
        ppmTableTextColor:"#2FA0E0",
        primary: "#0682BC",
        secondary: "#354A5F",
        button: "#2FA0E0",
        accent: colors.teal.accent3,
        error: colors.red.accent3,
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        tableHeaderColor: "#E3E3EE",
        verzeichnis: colors.orange.darken3,
        anwendung:"#182F6D",
        user: "#9D0132",
        teilplan: colors.deepPurple,
        edit: colors.cyan,
        delete: colors.pink.darken3,
        zurueck: colors.purple.darken1,
        ppmchartRed: "#F44336",
        ppmchartGreen: "#4CAF50",
        ppmchartYellow: "#FFEB3B",
        ppmSlider: "#F2B82B"
      }
    }
  }
});
