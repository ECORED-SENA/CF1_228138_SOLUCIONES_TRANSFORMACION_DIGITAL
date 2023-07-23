<template lang="pug">
.curso-main-container.pb-3.tema6
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 6
      h1 Tipificación de delitos informáticos en Colombia

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-12
        .bloque-texto-g.color-acento-contenido.p-lg-5.p-2
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-4.py-lg-5.p-2
            p.mb-0 En la actualidad, el amplio uso de las tecnologías y la cantidad en aumento de usuarios en las redes y los sistemas ha favorecido la implantación de los delitos informáticos, es decir, <b>todas aquellas acciones gravemente engañosas y de fraude que pueden cometerse en los ámbitos digitales y <em>on line</em></b>.

    .fondo1.py-lg-5.py-3
      .row.justify-content-center.align-items-center.mb-0.position-relative(data-aos="fade-left")
        .col-lg-2.col-4
          img.mb-lg-0.mb-3(alt="" src="@/assets/curso/tema6/img02.png")
        .col-lg-8.col-12
          h4.mb-4 Según la Ley 1273 de 2009, se ajustaron los delitos informáticos en Colombia en los siguientes términos: 
          ul.lista-ul--color.mb-lg-0.mb-3
            li.mb-2
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Acceso abusivo a un sistema informático (modificado del Código Penal).
            li.mb-2
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Obstaculización ilegítima del sistema informático o red de telecomunicación.
            li.mb-2
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Interceptación de datos informáticos.
            li.mb-2
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Daño informático; uso de <em>software</em> malicioso.
            li.mb-2
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Hurto por medios informáticos y semejantes. 
            li.mb-2
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Violación de datos personales.
            li.mb-2
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Suplantación de sitios web para capturar datos personales y transferencia no consentida de activos.
            
</template>

<script>
export default {
  name: 'Tema6',
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
