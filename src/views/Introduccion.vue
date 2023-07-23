<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-5.col-8
        img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img01.png" alt="")
      .col-lg-7.col-12
        p En este componente se abordarán los conceptos y fundamentos de las tecnologías de información y la seguridad de la información, reconociendo la normatividad, marcos y estándares para una adecuada gestión de riesgos de ciberseguridad y la tipificación de delitos informáticos en el contexto colombiano. 
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Por lo anterior, a través del siguiente video se presentan las temáticas que se abordarán en el componente formativo, destacando la importancia en los entornos empresariales, de esta manera se invita al aprendiz a disponerse para el proceso de aprendizaje:
    

    figure(data-aos="fade-right")
      .video.mb-1       
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/URNCgT2EtH0" title="Análisis y valoración de riesgos de ciberseguridad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Análisis y valoración de riesgos de ciberseguridad

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
