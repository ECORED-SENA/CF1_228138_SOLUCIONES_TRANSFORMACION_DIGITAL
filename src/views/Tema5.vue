<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1 Marco jurídico

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-8(style="background-color:#ffeeeb; border-radius: 23px")
        .row.align-items-center.justify-content-center
          .col-lg-7
            p.my-4 Para prevenir y combatir la delincuencia informática, <b>se ha avanzado a nivel global en la aplicación de campañas, técnicas, programas, normas y leyes que responden</b>, en cada país o región, a los eventos más concurrentes relativos a ese fenómeno.
          .col-8.col-md-5
            img.Mn-2(src='@/assets/curso/tema5/img01.png')

    p El gobierno colombiano ha establecido la siguiente base jurídica para enfrentar los delitos informáticos:
    
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
      .col-lg-6.col-xl-4.p-2
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-lg-0.mb-3(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" alt="" src="@/assets/curso/tema5/img02.svg")
          p.p-2.mb-0 <b>Ley 527/1999.</b> Comercio electrónico.
      .col-lg-6.col-xl-4.p-2
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-lg-0.mb-3(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" alt="" src="@/assets/curso/tema5/img03.svg")
          p.p-2.mb-0 <b>Ley 599/2000.</b> Violación ilícita de comunicaciones.
      .col-lg-6.col-xl-4.p-2
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-lg-0.mb-3(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" alt="" src="@/assets/curso/tema5/img04.svg")
          p.p-2.mb-0 <b>Ley 962/2005.</b> Uso medios tecnológicos.
      .col-lg-6.col-xl-4.p-2
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-0(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" alt="" src="@/assets/curso/tema5/img05.svg")
          p.p-2.mb-0 <b>Ley 1150/2007.</b> Notificación electrónica.
      .col-lg-6.col-xl-4.p-2
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-lg-0.mb-3(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" alt="" src="@/assets/curso/tema5/img06.svg")
          p.p-2.mb-0 <b>Ley 1273/2009.</b> Protección de la información. 
      .col-lg-6.col-xl-4.p-2
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-lg-0.mb-3(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" alt="" src="@/assets/curso/tema5/img07.svg")
          p.p-2.mb-0 <b>Ley 1341/2009.</b> Agencia del espectro electromagnético.
      .col-lg-6.col-xl-4.p-2
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-lg-0.mb-3(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" alt="" src="@/assets/curso/tema5/img08.svg")
          p.p-2.mb-0 <b>Resolución 2258/2009.</b> Seguridad en redes.
      .col-lg-6.col-xl-4.p-2
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-0(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" alt="" src="@/assets/curso/tema5/img09.svg")
          p.p-2.mb-0 <b>Circular 052/2009.</b> Seguridad y calidad navegable de información.
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
