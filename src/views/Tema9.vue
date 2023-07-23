<template lang="pug">
.curso-main-container.pb-3.tema9
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 9
      h1 Riesgos

    .bloque1.p-0.mb-5
      .bloque-texto-b.color-secundario.p-4.mb-0(data-aos="fade-left")
        .bloque-texto-b__texto        
          .row.justify-content-center.align-items-center.d-flex
              .col-lg-10.col-12
                p.mb-lg-0.mb-3 Se conoce como riesgo a toda posibilidad de sufrir una afectación por causa de factores externos o internos. El riesgo es un peligro latente que puede o no materializarse. En el orden informático y de ciberseguridad, los riesgos no son distintos. Contemplan las vulnerabilidades y las amenazas y pueden ser controlados, tratados, mitigados, prevenidos y, en algunos casos, eliminados.<br><br><b>A continuación, se mencionan los tipos de riesgos de ciberseguridad más comunes; conózcalos y tome nota atenta de ellos:</b> 
              .col-lg-2.col-8.px-5
                img.mb-0(alt="" src="@/assets/curso/tema9/img01.svg")

  
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-10.col-12
        AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="<em>Malware</em>")
            .row.justify-content-center.align-items-center
              .col-lg-1.col-8
                img.mb-lg-0.mb-3(style="width:80px" alt="" src="@/assets/curso/tema9/img02.svg")
              .col-lg-10.col-8
                p.mb-0 Se refiere a todos aquellos archivos que contaminan y pueden comprometer tanto la seguridad, como la utilidad y preservación del equipo.      

          div(titulo="<em>Phishing </em>o usurpación de identidad")
            .row.justify-content-center.align-items-center
              .col-lg-1.col-8
                img.mb-lg-0.mb-3(style="width:80px" alt="" src="@/assets/curso/tema9/img03.svg")
              .col-lg-10.col-8
                p.mb-0 Se hacen una serie de actos fraudulentos, ya sea a través de correos o mensajes de entidades reconocidas para generar confianza. 
          div(titulo="<em>Criptomining</em>")
            .row.justify-content-center.align-items-center
              .col-lg-1.col-8
                img.mb-lg-0.mb-3(style="width:80px" alt="" src="@/assets/curso/tema9/img04.svg")
              .col-lg-10.col-8
                p.mb-0 Es un delito en el cual se dirigen ataques a las cuentas, sea un usuario o empresa.
          div(titulo="Ataques DDoS")
            .row.justify-content-center.align-items-center
              .col-lg-1.col-8
                img.mb-lg-0.mb-3(style="width:80px" alt="" src="@/assets/curso/tema9/img05.svg")
              .col-lg-10.col-8
                p.mb-0 El término de DDoS se debe a su nombre en inglés (<em>Distributed Denial of Service</em>) la cual tiene el objetivo de ejecutar un ataque de denegación de servicio distribuido.
          div(titulo="<em>Ransomware</em>")
            .row.justify-content-center.align-items-center
              .col-lg-1.col-8
                img.mb-lg-0.mb-3(style="width:80px" alt="" src="@/assets/curso/tema9/img06.svg")
              .col-lg-10.col-8
                p.mb-0 Consiste en un sistema malicioso el cual restringe o prohíbe el acceso a los datos confidenciales.
          div(titulo="<em>Botnets</em>")
            .row.justify-content-center.align-items-center
              .col-lg-1.col-8
                img.mb-lg-0.mb-3(style="width:80px" alt="" src="@/assets/curso/tema9/img07.svg")
              .col-lg-10.col-8
                p.mb-0 Se trata de una amenaza para los ordenadores actuando a través de troyanos que se filtran en el mismo para así enviar información como <em>spam</em>. 
          div(titulo="Inyección SQL")
            .row.justify-content-center.align-items-center
              .col-lg-1.col-8
                img.mb-lg-0.mb-3(style="width:80px" alt="" src="@/assets/curso/tema9/img08.svg")
              .col-lg-10.col-8
                p.mb-0 Se aprovecha la vulnerabilidad de la validación de acceso a un sitio o aplicación, con la finalidad de infiltrarse en su base de datos para obtener información de los usuarios.
                      
    Separador
    #t_9_1.titulo-segundo.color-acento-contenido
      h2 9.1 Niveles de riesgo

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.col-8
        img.mb-lg-0.mb-3(alt="" src="@/assets/curso/tema9/img09.png")
      .col-lg-5.col-12
        p Los riesgos, suelen estar tipificados según su nivel de probabilidad, de impacto y de daño potencial. La clasificación de los riesgos en niveles, es un elemento que favorece la previsión de los mismos, el tratamiento y control que se les podría aplicar y las demás acciones de actualización y monitoreo de los sistemas de información.
        p.mb-0 <b>Estudie, en el siguiente recurso, los niveles en los que se clasifican los riesgos:</b>


    SlyderA(data-aos="fade-right")
      .row.justify-content-center
        .col-lg-10.col-12
          .row.justify-content-center
            .col-lg-4.col-12.d-flex
              .px-lg-3.py-lg-4.p-3.mb-lg-0.mb-3(style="background-color: #ffe5cf; border-radius:10px")
                img.mb-3(alt="" src="@/assets/curso/tema9/img10.png")
                h4.mb-4 Nivel bajo
                p.mb-0 Tiene que ver con los ataques a la imagen, menosprecio, así como errores y fallos.
            .col-lg-4.col-12.d-flex
              .px-lg-3.py-lg-4.p-3.mb-lg-0.mb-3(style="background-color: #ffc8bf; border-radius:10px")
                img.mb-3(alt="" src="@/assets/curso/tema9/img11.png")
                h4.mb-4 Nivel medio
                p.mb-0 Se incrementan las capacidades ofensivas siendo ésta, la principal amenaza de este nivel. Además de la desfiguración de páginas web y la manipulación de información. 
            .col-lg-4.col-12.d-flex
              .px-lg-3.py-lg-4.p-3(style="background-color: #ffe5cf; border-radius:10px")
                img.mb-3(alt="" src="@/assets/curso/tema9/img12.png")
                h4.mb-4 Nivel alto
                p.mb-0 Se habla de la toma de control de los sistemas como el principal riesgo de este nivel, sin dejar a un lado el robo y publicación o venta de información sustraída, los ciberdelitos y la suplantación. 

      .row.justify-content-center
        .col-lg-10.col-12
          .row.justify-content-center           
            .col-lg-4.col-12.d-flex
              .px-lg-3.py-lg-4.p-3.mb-lg-0.mb-3(style="background-color: #ffe5cf; border-radius:10px")
                img.mb-3(alt="" src="@/assets/curso/tema9/img12.png")
                h4.mb-4 Nivel alto
                p.mb-0 Se habla de la toma de control de los sistemas como el principal riesgo de este nivel, sin dejar a un lado el robo y publicación o venta de información sustraída, los ciberdelitos y la suplantación.                    
            .col-lg-4.col-12.d-flex
              .px-lg-3.py-lg-4.p-3.mb-lg-0.mb-3(style="background-color: #ffc8bf; border-radius:10px")
                img.mb-3(alt="" src="@/assets/curso/tema9/img13.png")
                h4.mb-4 Nivel muy alto
                p.mb-0 Puede generar la interrupción de los recursos IT y de otros servicios, con las graves consecuencias que puede tener para una organización, y la filtración de datos.        
            .col-lg-4.col-12.d-flex
              .px-lg-3.py-lg-4.p-3.mb-lg-0.mb-3(style="background-color: #ffe5cf; border-radius:10px")
                img.mb-3(alt="" src="@/assets/curso/tema9/img14.png")
                h4.mb-4 Nivel crítico
                p.mb-0 Se habla del ciberespionaje como la gran amenaza de este nivel. El ataque proviene de <em>APTs</em>, campañas de <em>malware</em>, interrupción de servicios, compromiso de sistemas de control industrial, incidentes especiales, etc. 

    Separador
    #t_9_2.titulo-segundo.color-acento-contenido
      h2 9.2 Características, impacto y análisis de riesgos

    .bloque2.p-0.mb-5
      .bloque-texto-b.color-secundario.p-4.mb-0(data-aos="fade-left")
        .bloque-texto-b__texto        
          .row.justify-content-center.align-items-center.d-flex
              .col-lg-10.col-12
                p.mb-lg-0.mb-3 La existencia de vulnerabilidades y posibles fallas en los sistemas informáticos, facilitan que la información pueda ser empleada maliciosamente para conseguir ventajas de ella o que sea manipulada para afectar la infraestructura tecnológica, física y del entorno.<br><br>Le mostraremos, a continuación, aspectos importantes sobre los riesgos, su impacto y probabilidad, su análisis y tratamiento. Además, algunos conceptos nuevos que le afianzarán en su saber sobre ciberseguridad.
                .d-block.d-lg-none
                  br
              .col-lg-2.col-8.px-5
                img.mb-0(alt="" src="@/assets/curso/tema9/img15.svg")

    .fondo1.p-3.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.d-flex
        .col-lg-2.col-8
          .p-0.w-100.d-flex.justify-content-center
            img.mb-lg-0.mb-3(style="width:80px" alt="" src="@/assets/curso/tema9/img16.svg")
        .col-lg-7.col-12
          h3.mb-2.text-white Características, impacto y análisis de riesgos
          p.text-small.text-white.mb-lg-0.mb-3 A continuación, se ha diseñado una guía sobre los riesgos, su impacto y probabilidad, su análisis y tratamiento. <b>Descarga</b> la siguiente infografía.
        .col-lg-3.col-12
          .p-0.w-100.d-flex.justify-content-center
            a.boton.color-acento-botones(:href="obtenerLink('downloads/infografia_ciberseguridad_Caracteristicas.pdf')" target="_blank")
              span Descargar
              i.fas.fa-file-download

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-10.col-12.p-0
        .cajon.color-secundario.p-4.mb-0      
          .row.justify-content-center
            .col-lg-1.col-8
              img.mb-lg-0.mb-3(alt="" src="@/assets/curso/tema9/img17.svg")
            .col-lg-11.col-12
              p Para estudiar a profundidad las técnicas de tratamiento de riesgos y afianzarse en la adopción de controles de seguridad, se recomienda hacer búsqueda de la norma ISO / IEC 27005 y la norma ISO 31000:2018
              .row.p-0
                .col-lg-8.col-12.p-0
                  a.anexo.mb-0.mb-lg-0(href="https://www.iso.org/obp/ui#iso:std:iso:31000:ed-2:v1:es" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto.text-wrap.text-break
                      p <b>Enlace web</b>. https://www.iso.org/obp/ui#iso:std:iso:31000:ed-2:v1:es

  

    Separador
    #t_9_3.titulo-segundo.color-acento-contenido
      h2 9.3 Técnicas del tratamiento de riesgos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7.col-12
        p La etapa de tratamiento de los riesgos consiste en comparar los niveles del riesgo encontrados durante los procesos de identificación y análisis, con los criterios previamente establecidos. En esta etapa se realiza la priorización de los riesgos para futuras acciones, igualmente se contemplan las decisiones a tomar, conforme a las consideraciones de apetito o tolerancia al riesgo desde la alta dirección. 
        p <b>Si el riesgo resultante es considerado bajo o aceptable, debe ser controlado con un mínimo tratamiento, sin dejar de ser monitoreado periódicamente, para asegurar que se mantengan en niveles aceptables.</b>
        p.mb-lg-0.mb-3 Una vez se obtiene el mapa de riesgos, se sigue con el paso de tratamiento, donde se derivan planes de mejora a desarrollar, reconociendo cuáles serán las acciones para el tratamiento del riesgo, valorando estas opciones y preparando los planes de tratamiento del riesgo e implantarlos.
      .col-lg-5.col-8
        img.mb-0(alt="" src="@/assets/curso/tema9/img18.png")

    p.mb-5 Los siguientes son los mecanismos para el tratamiento de los riesgos:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-5.col-12.d-flex
        .tarjeta1.p-4.d-flex.w-100.mb-lg-0.mb-3(style="background-color:#ffe5cf")
          .tarjeta2.p-2.d-flex.align-items-center.justify-content-center(style="min-width:82px; background-color:#ffb476")
            img.mb-lg-0.mb-3(style="width:57.47px" alt="" src="@/assets/curso/tema9/img19.svg")
          .px-2.py-0
            p.mb-2 <b>Evitar</b>
            p.mb-0 Es la decisión de no proceder con la actividad que probablemente genere el riesgo.
      .col-lg-5.col-12.d-flex
        .tarjeta1.p-4.d-flex.w-100.mb-lg-0.mb-3(style="background-color:#ffe5cf")
          .tarjeta2.p-2.d-flex.align-items-center.justify-content-center(style="min-width:82px; background-color:#ffb476")
            img.mb-lg-0.mb-3(style="width:47.91px" alt="" src="@/assets/curso/tema9/img20.svg")
          .px-2.py-0
            p.mb-2 <b>Transferir</b>
            p.mb-0 Es buscar un respaldo y compartir con un tercero alguna proporción del riesgo a través de contratos, pólizas, etc.

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-5.col-12.d-flex
        .tarjeta1.p-4.d-flex.w-100.mb-lg-0.mb-3(style="background-color:#ffe5cf")
          .tarjeta2.p-2.d-flex.align-items-center.justify-content-center(style="min-width:82px; background-color:#ffb476")
            img.mb-lg-0.mb-3(style="width:53.18px" alt="" src="@/assets/curso/tema9/img21.svg")
          .px-2.py-0
            p.mb-2 <b>Reducir y controlar</b>
            p.mb-0 Es establecer mecanismos de control que reduzcan el riesgo, puede ser mediante controles preventivos, correctivos, disuasivos, etc.
      .col-lg-5.col-12.d-flex
        .tarjeta1.p-4.d-flex.w-100.mb-lg-0.mb-3(style="background-color:#ffe5cf")
          .tarjeta2.p-2.d-flex.align-items-center.justify-content-center(style="min-width:82px; background-color:#ffb476")
            img.mb-lg-0.mb-3(style="width:51.73px" alt="" src="@/assets/curso/tema9/img22.svg")
          .px-2.py-0
            p.mb-2 <b>Asumir o retener</b>
            p.mb-0 Luego de que el riesgo ha sido reducido o transferido, puede quedar un riesgo residual el cual se debe retener.

    .bloque3.p-0.mb-5(data-aos="fade-left")
      .bloque-texto-b.color-secundario.p-4.mb-0
        .bloque-texto-b__texto        
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-3.col-8.px-5
                img.mb-lg-0.mb-3(alt="" src="@/assets/curso/tema9/img23.svg")
            .col-lg-9.col-12
                p Una vez identificadas las acciones a realizar, es necesario llevar a cabo la implementación de los planes de tratamiento; lo ideal es que la responsabilidad por el tratamiento del riesgo recaiga en aquellos más capaces de controlar el riesgo o que puedan tomar decisiones sobre estos.<br><br>
                p Llevar a feliz término la implementación de un plan de tratamiento del riesgo requiere un mecanismo gerencial muy efectivo con la suficiente jerarquía en la organización, de modo que puedan asignarse las responsabilidades individuales de las acciones y monitorearlas de acuerdo con el criterio especificado.<br><br>
                p.mb-0 <b>En las técnicas del sistema de tratamientos de riesgos se debe garantizar lo siguiente:</b>


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.col-12.d-flex
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-lg-0.mb-3(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" alt="" src="@/assets/curso/tema9/img24.svg")
          p.p-3.mb-0 Un funcionamiento correcto de la organización
      .col-lg-4.col-12.d-flex
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-lg-0.mb-3(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" alt="" src="@/assets/curso/tema9/img25.svg")
          p.p-3.mb-0 Revisiones internas efectivas.
      .col-lg-4.col-12.d-flex
        .p-0.w-100.d-flex.justify-content-start.align-items-center.mb-0(style=" background:#fff3ea")
          img.mb-0(style="width:91px;" alt="" src="@/assets/curso/tema9/img26.svg")
          p.p-3.mb-0 Controles legales actualizados con las leyes y reglamentos vigentes.


    p.mb-5 Además, se pueden establecer estrategias para evitar los riesgos y minimizar el impacto o la frecuencia de ocurrencia del riesgo; así, al analizar el nivel del riego se podrá tomar la decisión para el mecanismo de tratamiento y la implementación del control para mitigarlo, articulando todo esto, mediante la política de control y con el plan de mejora de la organización. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8.col-12
        .bloque-texto-g.color-secundario.p-lg-5.p-2
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema9/img28.svg')})`}"
          )
          .bloque-texto-g__texto.px-lg-4.py-lg-5.p-3
            p.mb-0 Es importante destacar que el paso final de la gestión de riesgos está asociado al monitoreo y revisión, donde es necesario monitorear los riesgos, la efectividad del plan de tratamiento del riesgo, las estrategias y el sistema gerencial establecido para controlar la implementación.
    
    p.mb-0 Las revisiones continuas son esenciales para asegurar que el plan de tratamiento permanezca consistente con la realidad, por lo que es necesario implementar mecanismos periódicos de monitoreo, tanto para las implementaciones de tratamiento, controles y riesgos de niveles altos, como para la definición y el seguimiento a todo en un mapa de riesgos.
</template>

<script>
export default {
  name: 'Tema9',
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
