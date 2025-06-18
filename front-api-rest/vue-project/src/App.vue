const { createApp } = Vue;

createApp({
  data() {
    return {
      selecoes: [],
      novaSelecao: {
        selecao: '',
        grupo: ''
      },
      apiUrl: 'http://localhost:3000/selecoes'
    };
  },
  methods: {
    async carregarSelecoes() {
      try {
        const response = await axios.get(this.apiUrl);
        this.selecoes = response.data;
      } catch (err) {
        console.error(err);
      }
    },
    async adicionarSelecao() {
      if (!this.novaSelecao.selecao || !this.novaSelecao.grupo) return;
      try {
        await axios.post(this.apiUrl, this.novaSelecao);
        this.novaSelecao.selecao = '';
        this.novaSelecao.grupo = '';
        await this.carregarSelecoes();
      } catch (err) {
        console.error(err);
      }
    },
    async removerSelecao(id) {
      try {
        await axios.delete(`${this.apiUrl}/${id}`);
        await this.carregarSelecoes();
      } catch (err) {
        console.error(err);
      }
    }
  },
  mounted() {
    this.carregarSelecoes();
  }
}).mount('#app');
