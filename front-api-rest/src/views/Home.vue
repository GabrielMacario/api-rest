<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import api from '../services/api.js'

export default defineComponent({
  name: 'Home',
  data() {
    return {
      message: 'Carregando...'
    }
  },
  async created() {
    try {
      const response = await api.get('/')
      this.message = response.data
    } catch (error) {
      console.error('Erro ao buscar API', error)
      this.message = 'Erro ao acessar API'
    }
  }
})
</script>
