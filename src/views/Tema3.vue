<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Normatividad y estándares: seguridad de la información

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-12
        .bloque-texto-g.color-secundario.p-lg-5.p-2
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-4.p-2
            p.mb-0 De la misma manera que en los procesos de seguridad de la información y ciberseguridad, es importante en la gestión de riesgos de la seguridad de la información, utilizar los lineamientos de las siguientes normas y estándares:


    .tarjeta.tarjeta--azul.p-3.py-lg-5.mb-0(style="background-color:#fff3ea" data-aos="fade-left")
      SlyderA
        .row.justify-content-center
          .col-lg-5.col-12
            br
            br
            p Es importante para la gestión de riesgos utilizar los lineamientos de las siguientes normas y estándares:
            p <b><em>ISO</em> 31000: Gestión del riesgo</b>. Directrices: esta normativa establece principios y guías para diseñar, implementar y mantener la gestión de los riesgos en forma sistemática y de transparencia de toda forma de riesgo, por ejemplo: financiera, operativa, de mercadeo, de imagen, y de seguridad de información.
            p.mb-lg-0.mb-3 <b><em>ISO</em>/IEC 27005. Gestión de riesgos de la Seguridad la Información</b>. Esta norma se encuentra estructurada con 14 numerales de control de seguridad de la información que en su conjunto contiene más de 35 de categorías de seguridad principal y 114 controles.
          .col-lg-5.col-8
            img.mb-0(src="@/assets/curso/tema3/img02.png")
        .row.justify-content-center
          .col-lg-5.col-12
            br
            br
            p Las actividades para la gestión del riesgo en la seguridad en la información son las siguientes:
            ul.lista-ul--color.mb-lg-0.mb-3
              li.mb-0
                i.fas.fa-check(style="color:#083142")
                p.mb-0 Establecimiento del contexto
              li.mb-0
                i.fas.fa-check(style="color:#083142")
                p.mb-0 Valoración del riesgo
              li.mb-0
                i.fas.fa-check(style="color:#083142")
                p.mb-0 Tratamiento del riesgo 
              li.mb-0
                i.fas.fa-check(style="color:#083142")
                p.mb-0 Aceptación del riesgo
              li.mb-0
                i.fas.fa-check(style="color:#083142")
                p.mb-0 Comunicación del riesgo
              li.mb-0
                i.fas.fa-check(style="color:#083142")
                p.mb-0 Monitoreo y revisión del riesgo <b>((ICONTEC), 2009-08-19)</b>
          .col-lg-5.col-8
            img.mb-0(src="@/assets/curso/tema3/img03.png")
        .row.justify-content-center
          .col-lg-5.col-12
            br
            br
            p Los objetivos de la normatividad y estándares de la seguridad de la información son:
            ul.lista-ul--color.mb-lg-0.mb-3
              li.mb-0
                i.fas.fa-check(style="color:#083142")
                p.mb-0 <b>Identificar</b> los niveles de riesgo de ciberseguridad en la organización.
              li.mb-0
                i.fas.fa-check(style="color:#083142")
                p.mb-0 <b>Hacer un plan de tratamiento</b> para la gestión de los riesgos que permita la disminución de los riesgos, facilitando lineamientos para gestionar los riesgos, apoyándose con las directrices de la <em>ISO</em> 27001 y 27002.
          .col-lg-5.col-8
            img.mb-0(src="@/assets/curso/tema3/img04.png")
        .row.justify-content-center
          .col-lg-5.col-12
            br
            br
            h4.mb-4 Alcance
            p.mb-lg-0.mb-3 La adopción de normatividad y estándares de gestión de riesgos de seguridad de la información tiene como alcance hacer el análisis de riesgos de los activos de información de las organizaciones determinando el impacto en los activos de información.                         
          .col-lg-5.col-8
            img.mb-0(src="@/assets/curso/tema3/img05.png")
        .row.justify-content-center
          .col-lg-5.col-12
            br
            br
            h4.mb-4 Características
            p La adopción de normatividad y estándares de gestión de riesgos de seguridad de la información, otorga una serie de características entre ellas:
            ul.lista-ul--color.mb-lg-0.mb-3
              li.mb-0
                i.fas.fa-check(style="color:#083142")
                p.mb-0 Identificar acontecimientos potenciales que afecte a la organización proporcionados por los niveles de riesgos.
              li.mb-0
                i.fas.fa-check(style="color:#083142")
                p.mb-0 Proporcionar una seguridad razonable a la organización
              li.mb-0
                i.fas.fa-check(style="color:#083142")
                p.mb-0 Mejorar la agilidad de los sistemas de gestión de riesgos.
              li.mb-0
                i.fas.fa-check(style="color:#083142")
                p.mb-0 Proporcionar una mayor confianza en la mitigación de riesgos.
              li.mb-0
                i.fas.fa-check(style="color:#083142")
                p.mb-0 Mejora la comunicación y el flujo de información.              
          .col-lg-5.col-8
            img.mb-0(src="@/assets/curso/tema3/img06.png")
        .row.justify-content-center
          .col-lg-5.col-12
            br
            br
            h4.mb-4 Aplicación
            p Se siguen la directrices y lineamientos dados por la norma:
            ul.lista-ul--color.mb-lg-0.mb-3
              li.mb-0
                i.fas.fa-check(style="color:#083142")
                p.mb-0 <b><em>ISO</em>/IEC 27005</b>: seguridad de la información, ciberseguridad y protección de la privacidad.
              li.mb-0
                i.fas.fa-check(style="color:#083142")
                p.mb-0 <b><em>ISO</em> 31000:2018</b>. Gestión del riesgo. Directrices.
              
              
          .col-lg-5.col-8
            img.mb-0(src="@/assets/curso/tema3/img07.png")
</template>

<script>
export default {
  name: 'Tema3',
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
