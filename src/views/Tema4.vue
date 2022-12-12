<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Marco legal

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7.col-12
        h4.mb-4 El CONPES 3701, es la base de la legislación relacionada con esta temática. La Comisión Nacional Digital y de Información Estatal, fue creada a través del Decreto 32 de 2013 del Ministerio de Tecnologías de la Información y las Comunicaciones. 
        p Petición que tiene el objeto 34 de encargarse de la coordinación y orientación superior del desarrollo de funciones y servicios públicos que tienen que ver con el manejo de la información pública, el uso de infraestructura tecnológica de la información, y la utilidad de la información en el Estado colombiano.
        p.mb-lg-0.mb-3 Visite el recurso que le presentamos a continuación y conozca más y mejor sobre el marco legal en procesos de ciberseguridad y seguridad de la información. <b>Una vez más le insistimos en tomar nota de los aspectos más relevantes</b>.
      .col-lg-5.col-8
        img.mb-0(src="@/assets/curso/tema4/img01.png")
    
    TabsA.color-acento-botones(data-aos="fade-left")
      .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Proyectos")
        h4 Proyectos
        .row.justify-content-center
          .col-lg-4.col-8
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img02.png")
          .col-lg-8.col-12
            ul.lista-ul--color.mb-lg-0.mb-3
              li.mb-1
                i.fas.fa-check(style="color:#2EFEC7")
                p.mb-0 <b>Organizativo</b>: se refiere a la afección que se puede generar a la estructura de la organización el método de trabajo que utilicemos o similares.
              li.mb-1
                i.fas.fa-check(style="color:#2EFEC7")
                p.mb-0 <b>Técnico</b>: se relaciona mucho con su nombre ya que son proyectos con un contenido técnico significativo. Por ejemplo, securizar la página <em><em>web</em> </em>corporativa.
              li.mb-1
                i.fas.fa-check(style="color:#2EFEC7")
                p.mb-0 <b>Regulatorio</b>: son proyectos enfocados a alinear algún aspecto concreto de la organización a alguna norma o regulación. Por ejemplo, los proyectos encaminados al cumplimiento de la LOPD y el RDLOPD.
      .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Asesorías ")
        h4 Asesorías 
        .row.justify-content-center
          .col-lg-4.col-8
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img03.png")
          .col-lg-8.col-12
            p.mb-0 Se llevan a cabo después de un diagnóstico previo y su finalidad es brindar apoyo técnico en la toma de decisiones, relacionadas con las vulnerabilidades existentes, en materia de seguridad.
      .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Servicios <em>outsourcing</em>")
        h4 Servicios <em>outsourcing</em>
        .row.justify-content-center
          .col-lg-4.col-8
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img04.png")
          .col-lg-8.col-12
            p.mb-0 Para una organización es importante contar con un agente especializado en seguridad, que proteja y prevenga los ataques informáticos. 
      .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Contratación")
        h4 Contratación
        .row.justify-content-center
          .col-lg-4.col-8
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img05.png")
          .col-lg-8.col-12
            p.mb-0 Regirse por la legislación favorece que en los contratos independientes, se asegure la información con cláusulas de confidencialidad y no divulgación.
      .tarjeta.tarjeta1.p-lg-5.p-3( titulo="<em>Freelance</em>")
        h4 <em>Freelance</em>
        .row.justify-content-center
          .col-lg-4.col-8
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img06.png")
          .col-lg-8.col-12
            p.mb-0 Es la persona que trabaja de forma independiente, ofreciendo sus servicios a empresas u otras personas, y quien maneja su tiempo y su forma de trabajar de manera autónoma. En ciberseguridad un <em>Freelance</em> puede ayudar a complementar la seguridad digital teniendo en cuenta, entre otras, hacer copias de seguridad, trabajar con antivirus, usar escritorio virtual, proteger conexión a <em>internet</em>, reforzar seguridad de la <em>web</em>.
      .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Acuerdos de confidencialidad")
        h4 Acuerdos de confidencialidad
        .row.justify-content-center
          .col-lg-4.col-8
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img07.png")
          .col-lg-8.col-12
            p.mb-02 Contrato de confidencialidad: cuando es necesario compartir la información de la organización, habrá que establecer las medidas de protección aplicables, por ejemplo: realizar una clasificación o utilizar técnicas de cifrado. 
      
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
