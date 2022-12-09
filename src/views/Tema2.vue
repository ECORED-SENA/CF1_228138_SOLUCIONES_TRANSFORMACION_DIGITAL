<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Normatividad y estándares: ciberseguridad

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7.col-12
        h4.mb-4 La normalización o estandarización, elabora una serie de especificaciones técnicas, normas que son adoptadas de manera voluntaria.
        p La legislación define la norma:
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.mb-0 Especificación técnica de aplicación repetitiva o continuada cuya observancia no es obligatoria, establecida con participación de todas las partes interesadas, que aprueba un Organismo reconocido, a nivel nacional o internacional, por su actividad normativa
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            p.mb-0 <b>- Artículo 8 de la Ley 21/1992 de Industria</b>
        
      .col-lg-5.col-8
        img.mb-0(src="@/assets/curso/tema2/img01.png")

    p.mb-5 Para profundizar y afianzar en aspectos importantes relativos a normatividad y estándares, visite el recurso que se presenta a continuación. Haga un estudio consciente de todos los elementos que allí se muestran.

    figure(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
