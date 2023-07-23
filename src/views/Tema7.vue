<template lang="pug">
.curso-main-container.pb-3.tema7
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 7
      h1 Activos de información

    p.mb-5 Los activos de información relacionados con la seguridad de la información, hacen referencia a cualquier información o dispositivo que tenga que ver con el tratamiento de ésta y que sea de valor para la organización.

    .row.justify-content-center.align-items-center(data-aos="fade-right") 
      .col-lg-5.col-8
        img.mb-lg-0.mb-3(alt="" src="@/assets/curso/tema7/img01.png")
      .col-lg-7.col-12
        p.mb-4 Los activos de información cuentan con un sistema de clasificación, el cual se enfoca en las propiedades de confidencialidad, integridad y disponibilidad, como elementos para el tratamiento de los datos. Además, evalúa el impacto que tendría, en caso de no cumplir alguno de estos fundamentos.         
        .cajon.color-primario.p-4.mb-lg-0.mb-3
          p.mb-0 Los activos de información se clasifican, generalmente, en <b>activos de prioridad alta, media y baja</b>; de esta manera se establece cuáles se deben tratar con prelación.
          

    .row.justify-content-center(data-aos="fade-left") 
      .col-lg-4.col-12.d-flex.mb-lg-0.mb-3
        .tarjeta-avatar.mb-0
          img(alt="" src="@/assets/curso/tema7/img02.svg")       
          .tarjeta.color-secundario(style="background: #ffe5cf")
            .p-4.py-5
              h4.text-center Baja
              p.mb-0.text-center Se considera baja cuando la clasificación de la información en todas sus propiedades es baja. 
      .col-lg-4.col-12.d-flex.mb-lg-0.mb-3
        .tarjeta-avatar.mb-0
          img(alt="" src="@/assets/curso/tema7/img03.svg")       
          .tarjeta.color-secundario(style="background: #ffb476")
            .p-4.py-5
              h4.text-center Media
              p.mb-0.text-center Se ubica en esta posición si la clasificación de la información de una de las propiedades es alta o nivel medio.
      .col-lg-4.col-12.d-flex
        .tarjeta-avatar
          img(alt="" src="@/assets/curso/tema7/img04.svg")       
          .tarjeta.color-secundario(style="background: #ff6148")
            .p-4.py-5
              h4.text-center Alta
              p.mb-0.text-center Se determina cuando la clasificación es de dos, en todas las propiedades (confidencialidad, integridad, disponibilidad).
     
    Separador
    #t_7_1.titulo-segundo.color-acento-contenido
      h2 7.1  Características de los activos de información

    .bloque1.p-0.mb-5
      .bloque-texto-b.color-secundario.p-3.px-0.mb-0(data-aos="fade-left")
        .bloque-texto-b__texto        
          .row.justify-content-center.align-items-center.d-flex
              .col-lg-10.col-12 
                h4 Los activos de información presentan características diferentes según el estado, la materia, los niveles de confidencialidad, la integridad y la disponibilidad.               
                br
                br
                p.mb-lg-0.mb-3 Estas son las características más representativas, y a tener en cuenta, de los activos de información:
                .d-block.d-lg-none
                  br
              .col-lg-2.col-8.px-5
                img.mb-0(alt="" src="@/assets/curso/tema7/img05.svg")

    .fondo1.py-lg-5.p-3(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12
            ImagenInfografica.color-acento-botones.mb-0.d-block
              template(v-slot:imagen)
                figure
                  img.mb-0(alt="" src="@/assets/curso/tema7/img06.svg")           

              .tarjeta.color-secundario.p-3(x="9.5%" y="31%" numero=" " style="background-color: #fffad1")
                h4 Subestado de autentificación
                p.mb-0 Presenta y conoce la autenticidad de los diferentes activos de información.
              .tarjeta.color-secundario.p-3(x="36%" y="45%" numero=" " style="background-color: #fffad1")
                h4 Subestado de confidencialidad
                p.mb-0 Evitar que se divague, sin autorización, los activos de información.
              .tarjeta.color-secundario.p-3(x="64%" y="31%" numero=" " style="background-color: #fffad1")
                h4 Subestado integridad
                p.mb-0 Muestra la protección sobre la modificación o destrucción, que no esté autorizada según los activos del dominio.
              .tarjeta.color-secundario.p-3(x="90%" y="45%" numero=" " style="background-color: #fffad1")
                h4 Subestado disponibilidad
                p.mb-0 Protege contra el acceso no autorizado a los activos de información.

    Separador
    #t_7_2.titulo-segundo.color-acento-contenido
      h2 7.2  Tipos de activos de información

    p Se relacionan cinco grandes tipos de activos de información, de la siguiente manera:
    TabsC.color-acento-contenido(data-aos="fade-left")
      .py-3.py-md-4(titulo="Seguridad")
        .row.justify-content-center
          .col-lg-5.col-8
            img.mb-lg-0.mb-3(alt="" src="@/assets/curso/tema7/img07.png")
          .col-lg-6.col-12
            br
            h4.mb-4 Seguridad
            p.mb-0 Todo el ambiente del Sistema de Gestión de Seguridad de la Información según la ISO 27001, que contenga a los activos y que es necesario que garanticen los diferentes niveles de seguridad.
      .py-3.py-md-4(titulo="El sistema mismo")
        .row.justify-content-center
          .col-lg-5.col-8
            img.mb-lg-0.mb-3(alt="" src="@/assets/curso/tema7/img08.png")
          .col-lg-6.col-12
            br
            h4.mb-4 El sistema mismo
            p.mb-0 El propio sistema de información es considerado como uno de los tipos de activos.
      .py-3.py-md-4(titulo="Información generada")
        .row.justify-content-center
          .col-lg-5.col-8
            img.mb-lg-0.mb-3(alt="" src="@/assets/curso/tema7/img09.png")
          .col-lg-6.col-12
            br
            h4.mb-4 Información generada
            p.mb-0 Toda la información que se ha generado por la aplicación del Sistema de Gestión de Seguridad de la Información.
      .py-3.py-md-4(titulo="Funciones empresariales u organizacionales")
        .row.justify-content-center
          .col-lg-5.col-8
            img.mb-lg-0.mb-3(alt="" src="@/assets/curso/tema7/img10.png")
          .col-lg-6.col-12
            br
            h4.mb-4 Funciones empresariales u organizacionales
            p.mb-0 Todas las funciones de una organización, con las que se pueden demostrar las diferentes exigencias del Sistema de Gestión de Seguridad de la Información y, además, genera los objetivos deseados.
      .py-3.py-md-4(titulo="Métodos o sistemas de valoración de riesgos")
        .row.justify-content-center
          .col-lg-5.col-8
            img.mb-lg-0.mb-3(alt="" src="@/assets/curso/tema7/img11.png")
          .col-lg-6.col-12
            br
            h4.mb-4 Métodos o sistemas de valoración de riesgos
            p.mb-0 Es otro tipo de activos, aquellos que pueden realizar un método de evaluación de riesgos para facilitar la inclusión de cualquier otro activo.
    Separador
    #t_7_3.titulo-segundo.color-acento-contenido
      h2 7.3  Técnicas de valoración de activos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-12
        .bloque-texto-g.color-secundario.p-lg-5.p-2
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema7/img12.svg')})`}"
          )
          .bloque-texto-g__texto.px-lg-5.py-lg-4.p-3
            p.mb-0 La técnica que será utilizada para valorar se encuentra apoyada en los activos que se encuentran en los inventarios; tienen una parte de activos que están vinculados con el entorno y otra parte que se encuentran clasificados en otros inventarios.<br><br>Los activos que pueden estar, o no, en los inventarios, por lo general se encuentran en las aplicaciones que existen en la obtención de información. Otro tipo de activos no pueden estar en el inventario, ya que en este caso dejarían de tener valor.

    p.mb-5 Si se realizan técnicas de valoración del estado de seguridad de los activos que se tienen en cuenta para estimar todos los valores, se utilizan según los cuatro subestados que se mencionan a continuación (A-C-I-D):

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-3.col-12.d-flex
        .px-lg-4.py-lg-5.px-3.mb-lg-0.mb-3.w-100.tarjeta1.p-3(style="background-color:#ffe5cf; border-radius:15px")
          img.mb-5(style="width: 75px" alt="" src="@/assets/curso/tema7/img13.svg")
          h4.mb-4 Subestado autentificación
          ul.lista-ul--color.mb-0
            li.mb-0
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Baja
            li.mb-0
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Normal
            li.mb-0 
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Alta
            li.mb-0
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Crítica
      .col-lg-3.col-12.d-flex
        .px-lg-4.py-lg-5.px-3.mb-lg-0.mb-3.w-100.tarjeta1.p-3(style="background-color:#ffe5cf; border-radius:15px")
          img.mb-5(style="width: 75px" alt="" src="@/assets/curso/tema7/img14.svg")
          h4.mb-4 Subestado confidencialidad
          ul.lista-ul--color.mb-0
            li.mb-0
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Libre
            li.mb-0
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Restringida
            li.mb-0 
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Protegida
            li.mb-0
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Confidencial
      .col-lg-3.col-12.d-flex
        .px-lg-4.py-lg-5.px-3.mb-lg-0.mb-3.w-100.tarjeta1.p-3(style="background-color:#ffe5cf; border-radius:15px")
          img.mb-5(style="width: 75px" alt="" src="@/assets/curso/tema7/img15.svg")
          h4.mb-4 Subestado integridad
          ul.lista-ul--color.mb-0
            li.mb-0
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Baja
            li.mb-0
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Normal
            li.mb-0 
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Alta
            li.mb-0
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Crítica
      .col-lg-3.col-12.d-flex
        .px-lg-4.py-lg-5.px-3.w-100.tarjeta1.p-3(style="background-color:#ffe5cf; border-radius:15px")
          img.mb-5(style="width: 75px" alt="" src="@/assets/curso/tema7/img16.svg")
          h4.mb-4 Subestado disponibilidad
          ul.lista-ul--color.mb-0
            li.mb-0
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Menos de una hora
            li.mb-0
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Hasta un día laborable
            li.mb-0 
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Hasta una semana laborable
            li.mb-0
              i.fas.fa-check(style="color:#083142")
              p.mb-0 Hasta un mes laborable
        
</template>

<script>
export default {
  name: 'Tema7',
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
