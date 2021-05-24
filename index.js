var numPagina=1, referenciaFuncion;

var app = new Vue({
  el: '#app',
  data: {
    info: null,
  },
  mounted () {
    axios
      .get('https://newsapi.org/v2/everything?q=game&pageSize=15&apiKey=5e976ef6430f49e08d17ea33c7605f41')
      .then(response => ( this.info=response.data.articles));
  },
  
  methods:{
mostrarDetalle(articulo)
 {
    modal = document.getElementById("modalDetalle");
    if(articulo.author==null)
      modal.children[0].children[0].children[1].innerHTML= "No hay autor";
    else 
      modal.children[0].children[0].children[1].innerHTML= articulo.author;
    
      if(articulo.content==null)
        modal.children[0].children[0].children[2].innerHTML= "No hay contenido";
      else 
        modal.children[0].children[0].children[2].innerHTML= articulo.content;
    
      if(articulo.description==null)
        modal.children[0].children[0].children[2].innerHTML= "No hay descripcion";
      else 
        modal.children[0].children[0].children[2].innerHTML= articulo.description;
      modal.children[0].children[0].children[3].innerHTML= articulo.description;
      modal.children[0].children[0].children[4].innerHTML= articulo.publishedAt;
      modal.children[0].children[0].children[5].href= articulo.url;
  
    //modal.innerHTML = articulo.author;
    modal.style.display = "block";

 }
  }
})

 function mostrarDetalle(articulo)
 {
    modal = document.getElementById("modalDetalle");
    if(articulo.author==null)
      modal.children[0].children[0].children[1].innerHTML= "No hay autor";
    else 
      modal.children[0].children[0].children[1].innerHTML= articulo.author;
    
      if(articulo.content==null)
        modal.children[0].children[0].children[2].innerHTML= "No hay contenido";
      else 
        modal.children[0].children[0].children[2].innerHTML= articulo.content;
    
      if(articulo.description==null)
        modal.children[0].children[0].children[2].innerHTML= "No hay descripcion";
      else 
        modal.children[0].children[0].children[2].innerHTML= articulo.description;
      modal.children[0].children[0].children[3].innerHTML= articulo.description;
      modal.children[0].children[0].children[4].innerHTML= articulo.publishedAt;
      modal.children[0].children[0].children[5].href= articulo.url;
  
    //modal.innerHTML = articulo.author;
    modal.style.display = "block";

 }
/*
 window.onload = () =>{
   loadDoc("https://newsapi.org/v2/everything?q=game&pageSize=15&apiKey=5e976ef6430f49e08d17ea33c7605f41");
   
 }*/

