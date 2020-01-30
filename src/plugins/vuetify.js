import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

var primaryColor = '#AB47BC'

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                // primary: '#1976D2',
                // success: '#4CAF50',
                primary: primaryColor,
                success: primaryColor,
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                warning: '#FFC107',
            }
        }
    }
});
