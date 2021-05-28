var numPagina=1, referenciaFuncion;

var app = new Vue({
  el: '#app',
  data: {
    info: null,
    Autor:"",
    Contenido:"",
    Descripcion:"",
    Publicado:"",
    Enlace:"",
    mostrar:false,
    displayModal: 'none'
  },
  mounted () {
    axios
      .get('https://newsapi.org/v2/everything?q=game&pageSize=15&apiKey=5e976ef6430f49e08d17ea33c7605f41')
      .then(response => this.info=response.data.articles);
  },
  
  methods:{
mostrarDetalle(evento, articulo)
 {
  modal = document.getElementById("modalDetalle");
    this.displayModal = 'block';
    this.Autor = articulo.author ? articulo.author: "No hay autor";
    this.Contenido = articulo.content ? articulo.content: "No hay contenido";
    this.Descripcion = articulo.description ? articulo.description: "No hay descripcion";
    this.Publicado = articulo.publishedAt;
    this.Enlace = articulo.url;
    //modal.style.display = "block";


 }
  }
})

