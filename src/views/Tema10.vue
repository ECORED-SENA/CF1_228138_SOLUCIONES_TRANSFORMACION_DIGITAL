<template lang="pug">
.curso-main-container.pb-3.tema10
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 10
      h1 <em>Ethical hacking</em>

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")      
      .col-lg-7.col-12
        h4.mb-5 Un <em>hacker </em>ético es una persona que realiza pruebas de penetración con la intención de buscar y encontrar vulnerabilidades actuando de forma igual, o al menos similar, y utilizando los mismos métodos que usaría un <em>hacker </em>con intención de atacar el sistema.
        .cajon.color-secundario.p-4.mb-lg-0.mb-3
          p.mb-0  Las pruebas de penetración de un <em>hacker </em>ético, permiten evaluar vulnerabilidades, analizar y categorizar las debilidades explotadas y proveer recomendaciones, con base a las prioridades de la organización y por último eliminar dichas vulnerabilidades.
      .col-lg-5.col-8
        img.mb-0(alt="" src="@/assets/curso/tema10/img01.png")

    Separador
    #t_10_1.titulo-segundo.color-acento-contenido
      h2 10.1 Objetivos del <em>ethical hacking</em>

    .bloque1.p-0.mb-0
      .bloque-texto-b.color-secundario.p-4.mb-0(data-aos="fade-left")
        .bloque-texto-b__texto        
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-2.col-8.px-5
                img.mb-lg-0.mb-3(alt="" src="@/assets/curso/tema10/img02.svg")
            .col-lg-10.col-12
                p.mb-0 El objetivo fundamental del <em>ethical hacking</em> es explorar las vulnerabilidades existentes en los sistemas, haciendo pruebas de intrusión, que sirven para verificar y evaluar la seguridad física y lógica de los sistemas de información, redes de computadoras, aplicaciones web, bases de datos, servidores, etc.<br><br><b>Esta técnica logra el acceso y demuestra si un sistema es vulnerable o no. Esta información sirve para tomar medidas preventivas en contra de ataques.</b>

    Separador
    #t_10_2.titulo-segundo.color-acento-contenido
      h2 10.2 Tipos de pruebas de penetración

    p.mb-5 <b>Dentro del ejercicio del <em>ethical hacking</em>, existen tres tipos de pruebas de penetración: caja negra, caja blanca y caja gris</b>. Descubra las particularidades de cada una de estos tres tipos de pruebas de penetración.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-4.col-12.d-flex
        .px-lg-5.py-lg-5.px-3.p-3.mb-lg-0.mb-3.w-100.tarjeta1(style="background-color:#ffe5cf; border-radius:15px")
          img.mb-4(style="width: 80px" alt="" src="@/assets/curso/tema10/img03.svg")
          h4.mb-4 Prueba de la caja negra
          p.mb-0 La caja negra es cuando el <em>ethical hacker</em> no tiene información sobre el objetivo o la red. Esta prueba es la mejor para simular un ataque externo e ignora las amenazas internas.
      .col-lg-4.col-12.d-flex
        .px-lg-5.py-lg-5.px-3.p-3.mb-lg-0.mb-3.w-100.tarjeta1(style="background-color:#ffe5cf; border-radius:15px")
          img.mb-4(style="width: 80px" alt="" src="@/assets/curso/tema10/img04.svg")
          h4.mb-4 Prueba de la caja blanca
          p.mb-0 La prueba de caja blanca es lo opuesto a una caja negra. El <em>ethical hacker</em> tiene pleno conocimiento de la red, los sistemas informáticos y la infraestructura. La prueba de la caja blanca permite una prueba exhaustiva del entorno.
      .col-lg-4.col-12.d-flex
        .px-lg-5.py-lg-5.px-3.p-3.mb-0.w-100.tarjeta1(style="background-color:#ffe5cf; border-radius:15px")
          img.mb-4(style="width: 80px" alt="" src="@/assets/curso/tema10/img05.svg")
          h4.mb-4 Prueba de la caja gris
          p.mb-0 La prueba de caja gris, simula una amenaza interna. El <em>ethical hacker</em> recibe información parcial sobre la red y los sistemas informáticos, como configuraciones de IP, listas de correo electrónico, nombres de computadora u otra información que una persona con datos privilegiados tendría de manera realista.
</template>

<script>
export default {
  name: 'Tema10',
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
