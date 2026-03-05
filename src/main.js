import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import gsapPlugin from './plugins/gsap.js'  


const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            light: {
                colors: {
                    background: '#436628',
                    surface: '#ffffff',
                    primary: '#2C6E6A',
                }
            }
        }
    }
})

createApp(App).use(vuetify).use(gsapPlugin).mount('#app')