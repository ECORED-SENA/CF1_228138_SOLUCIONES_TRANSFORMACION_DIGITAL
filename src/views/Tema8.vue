<template lang="pug">
.curso-main-container.pb-3.tema8
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 8
      h1 Amenazas y vulnerabilidades

    .bloque1.p-0.mb-5
      .bloque-texto-b.color-secundario.p-3.mb-0(data-aos="fade-left")
        .bloque-texto-b__texto        
          .row.justify-content-center.align-items-center.d-flex
              .col-lg-10.col-12                
                p.mb-lg-0.mb-3 Las vulnerabilidades y amenazas informáticas se relacionan con los riesgos que se pueden generar para los sistemas y la información de una organización. Este fenómeno es cada vez más frecuente ya que, en la actualidad, existe una alta dependencia digital y de los servicios TI.<br><br>En el siguiente recurso, le presentamos algunas definiciones claves que favorecen la asimilación y conceptualización en lo referente a amenazas y vulnerabilidades informáticas.
              .col-lg-2.col-8.px-5
                img.mb-0(src="@/assets/curso/tema8/img01.svg")

    .tarjeta.tarjeta--azul.p-3.mb-0(style="background-color:#fff3ea" data-aos="fade-right")
      SlyderA
        .row.justify-content-center
          .col-lg-5.col-12
            br
            br
            h4.mb-4 Amenazas
            p.mb-lg-0.mb-3 Cuando se habla de amenaza informática, se está haciendo referencia al aprovechamiento de la vulnerabilidad que se presenta para atacar o invadir un sistema informático.
          .col-lg-5.col-8
            img.mb-0(src="@/assets/curso/tema8/img02.png")

        .row.justify-content-center
          .col-lg-5.col-12
            br
            br
            h4.mb-4 Externas e internas
            p.mb-lg-0.mb-3 Las amenazas informáticas para las organizaciones, generalmente, se adquieren mediante ataques; no obstante, hay otros tipos de amenazas como, por ejemplo, las amenazas internas (robos de información o uso inadecuado de los sistemas). 
          .col-lg-5.col-8
            img.mb-0(src="@/assets/curso/tema8/img03.png")

        .row.justify-content-center
          .col-lg-5.col-12
            br
            br
            h4.mb-4 Vulnerabilidades
            p.mb-lg-0.mb-3 Se relaciona con la debilidad de un sistema de información que pone en riesgo la seguridad de la misma. Los ciberdelincuentes aprovechan las vulnerabilidades de los sistemas informáticos (por ejemplo, de los sistemas operativos) para poder ingresar en los mismos y ejecutar actividades ilegales, robar información sensible o interrumpir su funcionamiento. 
          .col-lg-5.col-8
            img.mb-0(src="@/assets/curso/tema8/img04.png")

        .row.justify-content-center
          .col-lg-5.col-12
            br
            br
            h4.mb-4 Actualización de sistemas de protección
            p.mb-lg-0.mb-3 Hablar de vulnerabilidades es hablar de las principales causas por las cuales una empresa u organización puede llegar a ser víctima de ataques informáticos en contra de sus sistemas. Por ello, se recomienda la actualización permanente a las últimas versiones disponibles de las aplicaciones informáticas; los sistemas de protección y operativos. Esto es fundamental ya que contienen múltiples correcciones y ajustes sobre vulnerabilidades ya descubiertas.
          .col-lg-5.col-8
            img.mb-0(src="@/assets/curso/tema8/img05.png")

    Separador
    #t_8_1.titulo-segundo.color-acento-contenido
      h2 8.1 Características y tipos de amenazas y vulnerabilidades

    .bloque2.p-0.mb-5
      .bloque-texto-b.color-secundario.p-4.mb-0(data-aos="fade-left")
        .bloque-texto-b__texto        
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-4.col-8.px-5
                img.mb-lg-0.mb-3(src="@/assets/curso/tema8/img06.svg")
            .col-lg-8.col-12
                p En términos informáticos y organizacionales, tanto las amenazas y las vulnerabilidades son propias de los sistemas de una compañía y esto la hace siempre susceptible. <b>Las amenazas y vulnerabilidades atentan contra la seguridad de un sistema de información y exponen la seguridad de la información frente a los ataques que comprenden la integridad, disponibilidad o confidencialidad de la misma</b>.<br><br>El principal tipo de amenaza que tiene el sistema de información de cualquier organización es la amenaza de malware; los programas maliciosos o inseguros son una de las mayores ciberamenazas a las que se enfrentan las organizaciones. <b>Dentro del malware se encuentran las siguientes amenazas</b>:

    .fondo1.py-4.px-3(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12
            ImagenInfografica.color-acento-botones.mb-0.d-block
              template(v-slot:imagen)
                figure
                  img.mb-0(src="@/assets/curso/tema8/img07.svg")           

              .tarjeta.color-secundario.p-3(x="8%" y="50%" numero=" " style="background-color: #ffecdc")
                p.mb-0 Los virus informáticos son los que se instalan en un dispositivo con el fin de proporcionar dificultades en su funcionamiento. 

              .tarjeta.color-secundario.p-3(x="25.7%" y="82%" numero=" " style="background-color: #ffecdc")
                p.mb-0 Este es uno de los malware más comunes que infectan los equipos y sistemas de una empresa.

              .tarjeta.color-secundario.p-3(x="50%" y="96%" numero=" " style="background-color: #ffecdc")
                p.mb-0 Los troyanos son instalados en un equipo y pasan desapercibidos para el usuario.

              .tarjeta.color-secundario.p-3(x="74.4%" y="82.3%" numero=" " style="background-color: #ffecdc")
                p.mb-0 Su función es encriptar toda la información de la organización, interrumpiendo el acceso a los datos y los sistemas y se pide un rescate para poder liberar la información.

              .tarjeta.color-secundario.p-3(x="92%" y="50%" numero=" " style="background-color: #ffecdc")
                p.mb-0 Son instalados a través de troyanos y su función es robar datos de acceso a plataformas web, sitios bancarios y similares. 
    Separador
    #t_8_2.titulo-segundo.color-acento-contenido
      h2 8.2 Vulnerabilidades del sistema

    .bloque3.p-0.mb-0
      .bloque-texto-b.color-secundario.p-3.mb-0(data-aos="fade-left")
        .bloque-texto-b__texto        
          .row.justify-content-center.d-flex
              .col-lg-8.col-12.d-block  
                .d-block               
                  h4.mb-4.d-block De manera frecuente, tanto los sistemas informáticos como las aplicaciones informáticas, suelen tener algún tipo de error en su diseño, o en su estructura; incluso es altamente frecuente que presenten fallas en su código, dando comienzo o cabida a cualquier vulnerabilidad.
                  p.mb-4.d-block Siempre que exista un error, incluso si este no es notorio o grande, será posible generar algún tipo de amenaza en los sistemas y sobre la información de las organizaciones, favoreciendo así, ataques tanto externos como internos.
                  p.mb-4.d-block A continuación, le contamos dónde suelen presentarse las principales vulnerabilidades:
                  ul.lista-ul--color.d-block
                    li
                      i.fas.fa-check
                      p.mb-0 Fallas de configuración
                    li 
                      i.fas.fa-check
                      p.mb-0 Fallas en la gestión de recursos
                    li 
                      i.fas.fa-check
                      p.mb-0 Fallas en los sistemas de validación
                    li 
                      i.fas.fa-check
                      p.mb-0 Errores que generan el acceso a directorios
                    li 
                      i.fas.fa-check
                      p.mb-0 Errores en la gestión y asignación de permisos
              .col-lg-4.col-8.px-5
                img.mb-0(src="@/assets/curso/tema8/img08.svg")

    Separador
    #t_8_3.titulo-segundo.color-acento-contenido
      h2 8.3 Amenazas de ataques de denegación de servicio

    p.mb-5 Cuando se habla de ataque por denegación de servicio distribuido (DDoS), se logra establecer que este, se genera en el momento en que el servidor recibe demasiadas solicitudes o peticiones de acceso.
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12  
        .cajon.color-secundario.p-4.mb-4
          .p-0.d-flex.align-items-center
            img.mb-0.mx-3(style="width:74px" src="@/assets/curso/tema8/img09.svg")
            p.mb-0.mx-3 Esta situación de sobredemanda en solicitudes al servidor es la razón por la cual se presenta un colapso del sistema, provocando que el servidor se abata o que alcance un funcionamiento incorrecto, por ejemplo, acceso lento o rebote de mensajes de errores. 
    Separador
    #t_8_4.titulo-segundo.color-acento-contenido
      h2 8.4 Vulnerabilidades producidas por contraseñas

    .row.justify-content-center.align-items-center
      .col-lg-5.col-12
        p No tener contraseñas seguras, que sean difíciles de descifrar, genera vulnerabilidades en los sistemas, ya que facilita el robo, la modificación o eliminación de información, cambiar configuraciones si disponen de los privilegios apropiados o, incluso, apagar equipos.
        p.mb-lg-0.mb-3 <b>La creación de contraseñas seguras es una de las claves para incrementar el nivel de ciberseguridad de las empresas. </b>
      .col-lg-5.col-12
        img.mb-0(src="@/assets/curso/tema8/img10.png")
    
    Separador
    #t_8_5.titulo-segundo.color-acento-contenido
      h2 8.5 Vulnerabilidades producidas por usuarios

    .bloque4.p-0.mb-5
      .bloque-texto-b.color-secundario.p-4.mb-0(data-aos="fade-left")
        .bloque-texto-b__texto        
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-2.col-8.px-5
                img.mb-lg-0.mb-3(src="@/assets/curso/tema8/img11.svg")
            .col-lg-10.col-12
                p Los ataques informáticos suelen tener como causa principal, el uso no adecuado de los usuarios. Cuando se conceden privilegios o permisos que no son usados pertinentemente, se pueden generar accesos de los usuarios a opciones, tanto de configuración como de administración, para los cuales no se encuentran preparados.<br><br>Visite el recurso que se muestra a continuación, en él se presentan algunos aspectos que debe tener en cuenta, relacionados con las vulnerabilidades producidas por usuarios:

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-3.col-12.d-flex
        .p-3.py-4.mb-lg-0.mb-3(style="background-color:#ffe5cf; border-radius:10px")
          img.mb-4(src="@/assets/curso/tema8/img12.png")
          h4.mb-5 Del error a la amenaza
          p.mb-0 El uso inadecuado de los sistemas y/o de sus funciones, posibilita cometer algunos errores que llegan a convertirse en amenazas para la empresa u organización. 

      .col-lg-3.col-12.d-flex
        .p-3.py-4.mb-lg-0.mb-3(style="background-color:#ff8e7c; border-radius:10px")
          img.mb-4(src="@/assets/curso/tema8/img13.png")
          h4.mb-5 Error del usuario, vulnerabilidad constante
          p.mb-0 El error humano es otra causa de riesgos en ciberseguridad. La persona siempre tiene el riesgo de cometer un error que pueda generar una vulnerabilidad, que genere una amenaza informática. 

      .col-lg-3.col-12.d-flex
        .p-3.py-4.mb-lg-0.mb-3(style="background-color:#ffe5cf; border-radius:10px")
          img.mb-4(src="@/assets/curso/tema8/img14.png")
          h4.mb-5 Necesidad de formación en ciberseguridad
          p.mb-0 Se habla de la toma de control de los sistemas como el principal riesgo de este nivel. Otra razón por la cual se generan algunas vulnerabilidades es por la falta de formación en ciberseguridad, evidenciada en malas prácticas, caer en engaños publicitarios maliciosos, apertura de correos o información fraudulenta y eventos similares. Falsficación o venta de información sustraída, los ciberdelitos y la suplantación. 

      .col-lg-3.col-12.d-flex
        .p-3.py-4.mb-lg-0.mb-3(style="background-color:#ff8e7c; border-radius:10px")
          img.mb-4(src="@/assets/curso/tema8/img15.png")
          h4.mb-5 Phishing y otras amenazas
          p.mb-0 Todas las gestiones o acciones equívocas, llegan a ser una amenaza de potenciales ataques; entre los más comunes está el phishing (suplantación de identidad) u otros conexos o relacionados.
    
    
    Separador
    #t_8_6.titulo-segundo.color-acento-contenido
      h2 8.6 Otras amenazas informáticas

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8.col-12
        .bloque-texto-g.color-secundario.p-lg-5.p-2
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema8/img16.svg')})`}"
          )
          .bloque-texto-g__texto.px-lg-4.py-lg-5.p-3
            p.mb-0 Se conocen otras amenazas informáticas que afectan a las empresas como los ataques por inyección SQL, que afectan a servidores de bases de datos empresariales, red de equipos zombies, ataques MITM (man in the middle), etc.

    p.mb-5 Estas son algunas particularidades que usted debe conocer y tener en cuenta, en lo referente a amenazas informáticas diversas:
    
    TabsC.color-acento-contenido(data-aos="fade-left")
      .py-3.py-md-4(titulo="Ataques innovadores")
        .row.justify-content-center
          .col-lg-5.col-8
            img.mb-lg-0.mb-3(src="@/assets/curso/tema8/img17.png")
          .col-lg-6.col-12
            br
            h4.mb-4 Ataques innovadores, ciberseguridad dinámica
            p.mb-0 La ciberdelincuencia no para y, por lo general, buscan nuevas formas de atacar, infectar y robar información de las organizaciones; es por esto que la ciberseguridad debe ser una actividad flexible y dinámica que se adapte a las nuevas amenazas. 
      .py-3.py-md-4(titulo="Eliminación de vulnerabilidades")
        .row.justify-content-center
          .col-lg-5.col-8
              img.mb-lg-0.mb-3(src="@/assets/curso/tema8/img18.png")
          .col-lg-6.col-12
              br
              h4.mb-4 Eliminación constante de vulnerabilidades
              p.mb-0 Las vulnerabilidades exponen a las organizaciones frente a las amenazas informáticas. Entonces, es importante enfocarse en eliminar vulnerabilidades, como una de las principales acciones de la ciberseguridad para reducir las amenazas informáticas. 
      .py-3.py-md-4(titulo="Desde el exterior")
        .row.justify-content-center
          .col-lg-5.col-8
              img.mb-lg-0.mb-3(src="@/assets/curso/tema8/img19.png")
          .col-lg-6.col-12
              br
              h4.mb-4 Desde el exterior
              p.mb-0 Son múltiples los tipos y maneras de vulnerabilidades y/o amenazas informáticas. La mayoría de estas amenazas y/o vulnerabilidades, tienen origen en el exterior, como por ejemplo el malware o los ataques DDoS.
      .py-3.py-md-4(titulo="Desde el interior")
        .row.justify-content-center
          .col-lg-5.col-8
              img.mb-lg-0.mb-3(src="@/assets/curso/tema8/img20.png")
          .col-lg-6.col-12
              br
              h4.mb-4 Desde el interior
              p.mb-0 Otras amenazas o vulnerabilidades tienen su origen al interior de los sistemas y suelen ser ocasionadas por los mismos usuarios o colaboradores de las empresas u organizaciones, entre los más comunes están: los robos, los accesos con privilegios incorrectos o, simplemente, errores humanos.
</template>

<script>
export default {
  name: 'Tema8',
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
