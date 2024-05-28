import './assets/main.css'

import { createApp } from 'vue'
import App from '../src/components/TheHome.vue'
import {createRouter, createWebHistory} from "vue-router";
import TheFilm from "@/components/TheFilm.vue";


createApp(App).mount('#app')
