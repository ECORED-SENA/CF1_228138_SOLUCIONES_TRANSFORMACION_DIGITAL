<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Marco legal

    .d-none.d-xl-block
      br
      br
      br
      br
      
    //- .d-block.d-lg-none(data-aos="fade-right")
    //-   .row.justify-content-center.mb-3
    //-     .col-8
    //-       img.mb-0(src='@/assets/curso/tema4/img01.png')      
    .p-0.position-relative.px-2(data-aos="fade-right")
      //- .row.justify-content-center
      //-   .col-lg-2.d-flex
      //-   .col-lg-3.d-flex(style="background-color:#ffeeeb")
      //-   .col-lg-7.col-12.d-flex.py-5(style="background-color:#ffeeeb")
      //-     p.mb-0 Para prevenir y combatir la delincuencia informática, <b>se ha avanzado a nivel global en la aplicación de campañas, técnicas, programas, normas y leyes que responden</b>, en cada país o región, a los eventos más concurrentes relativos a ese fenómeno.

      .row.position-absolute.w-100.d-none.d-lg-block(style="bottom: 0px")
        .col-lg-7.border.d-lg-block
        .col-lg-3.border.d-lg-block
          img.mb-0(src='@/assets/curso/tema4/img01.png')   
        .col-lg-2.border.d-lg-block
</template>

<script>
export default {
  name: 'Tema4',
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
