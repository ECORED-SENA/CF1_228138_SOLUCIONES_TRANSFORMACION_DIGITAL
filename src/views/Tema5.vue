<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1 Marco jurídico

    .d-none.d-lg-block
      br
      br
      
     
      
    .d-block.d-lg-none(data-aos="fade-right")
      .row.justify-content-center.mb-3
        .col-8
          img.mb-0(src='@/assets/curso/tema5/img01.png')  

    .p-0.position-relative.px-2.mb-5(data-aos="fade-right")
      .row.justify-content-center
        .col-lg-2.d-flex
        .col-lg-7.col-12.d-flex
          .row.p-lg-4(style="background-color:#ffeeeb; border-radius: 23px")      
            .col-10.col-12.py-4
              p.mb-0 Para prevenir y combatir la delincuencia informática, <b>se ha avanzado a nivel global en la aplicación de campañas, técnicas, programas, normas y leyes que responden</b>, en cada país o región, a los eventos más concurrentes relativos a ese fenómeno.
        .col-lg-3.d-flex

      .row.justify-content-center.position-absolute.w-100.d-none.d-lg-flex(style="bottom: 0px")
        .col-lg-7
        .col-lg-3
          img.mb-0(src='@/assets/curso/tema5/img01.png')    
        .col-lg-2

    p El gobierno colombiano ha establecido la siguiente base jurídica para enfrentar los delitos informáticos:
    
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
      .col-lg-3.col-12.d-flex.p-2
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-lg-0.mb-3(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" src="@/assets/curso/tema5/img02.svg")
          p.p-2.mb-0 Comercio electrónico <b>Ley 527/1999</b>
      .col-lg-3.col-12.d-flex.p-2
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-lg-0.mb-3(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" src="@/assets/curso/tema5/img03.svg")
          p.p-2.mb-0 Violación ilícita de comunicaciones <b>Ley 599/2000</b>
      .col-lg-3.col-12.d-flex.p-2
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-lg-0.mb-3(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" src="@/assets/curso/tema5/img04.svg")
          p.p-2.mb-0 Uso medios tecnológicos <b>Ley 962/2005</b>
      .col-lg-3.col-12.d-flex.p-2
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-0(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" src="@/assets/curso/tema5/img05.svg")
          p.p-2.mb-0 Notificación electrónica <b>Ley 1150/2007</b>

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.col-12.d-flex.p-2
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-lg-0.mb-3(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" src="@/assets/curso/tema5/img06.svg")
          p.p-2.mb-0 Protección de la información <b>Ley 1273/2009</b>
      .col-lg-3.col-12.d-flex.p-2
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-lg-0.mb-3(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" src="@/assets/curso/tema5/img07.svg")
          p.p-2.mb-0 Agencia del espectro electromagnético <b>Ley 1341/2009</b>
      .col-lg-3.col-12.d-flex.p-2
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-lg-0.mb-3(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" src="@/assets/curso/tema5/img08.svg")
          p.p-2.mb-0 Seguridad en redes. <b>Resolución 2258/2009</b>
      .col-lg-3.col-12.d-flex.p-2
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-0(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" src="@/assets/curso/tema5/img09.svg")
          p.p-2.mb-0 Seguridad y calidad navegable de información <b>Circular 052/2009</b>
</template>

<script>
export default {
  name: 'Tema5',
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
