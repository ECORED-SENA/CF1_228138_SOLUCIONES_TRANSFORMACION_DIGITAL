export default {
  global: {
    componenteFormativo: 'Análisis y valoración de riesgos de ciberseguridad',
    descripcionCurso:
      'Con este componente, el aprendiz profundizará en los fundamentos necesarios para diagnosticar el estado actual de la ciberseguridad en una organización, adoptando métodos de análisis y valoración de riesgos, como elementos fundamentales para definir un plan de tratamiento adecuado.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos de redes y <i>networking</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de redes',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Modelo <em>OSI</em>',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Protocolo <em>TCP/IP</em>',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Protocolos IPv4 e IPv6',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Enrutamiento IP',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normatividad y estándares: ciberseguridad',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normatividad y estándares: seguridad de la información',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Marco legal',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Marco jurídico',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Tipificación de delitos informáticos en Colombia',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Activos de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Características de los activos de información',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Tipos de activos de información',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Técnicas de valoración de activos',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Amenazas y vulnerabilidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Características y tipos de amenazas y vulnerabilidades',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'Vulnerabilidades del sistema',
            hash: 't_8_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.3',
            titulo: 'Amenazas de ataques de denegación de servicio',
            hash: 't_8_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.4',
            titulo: 'Vulnerabilidades producidas por contraseñas',
            hash: 't_8_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.5',
            titulo: 'Vulnerabilidades producidas por usuarios',
            hash: 't_8_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.6',
            titulo: 'Otras amenazas informáticas',
            hash: 't_8_6',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '9.1',
            titulo: 'Niveles de riesgo',
            hash: 't_9_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.2',
            titulo: 'Características, impacto y análisis de riesgos',
            hash: 't_9_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.3',
            titulo: 'Técnicas del tratamiento de riesgos',
            hash: 't_9_3',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: '<em>Ethical hacking</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '10.1',
            titulo: 'Objetivos del <em>ethical </em>hacking ',
            hash: 't_10_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.2',
            titulo: 'Tipos de pruebas de penetración',
            hash: 't_10_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Cloud Education. (2021). Redes. IBM. ',
      link:
        'https://www.ibm.com/co-es/cloud/learn/networking-a-complete-guide#toc-trminos-y--ZhqcZz4r',
    },
    {
      referencia:
        'Corporation and/or its affiliates. (2010). Modelo de referencia <em>OSI</em>. ORACLE. ',
      link: 'https://docs.oracle.com/cd/E19957-01/820-2981/ipov-8/index.html',
    },
    {
      referencia:
        'Ministerio de Hacienda y Administraciones Públicas de España. (2012). Metodología de análisis y gestión de riesgos de los sistemas de información.',
      link:
        'https://administracionelectronica.gob.es/pae_Home/dam/jcr:fb373672-f804-4d05-8567-2d44b3020387/2012_Magerit_v3_libro1_metodo_es_NIPO_630-12-171-8.pdf',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia. (2017). Guía de transición IPv4 a IPv6 para Colombia. ',
      link:
        'https://www.mintic.gov.co/portal/715/articles-162301_guia_transicion_ipv4_ipv6.pdf',
    },
    {
      referencia:
        'Organización de Estados Americanos. (2019). Ciberseguridad marco NIST. Un abordaje integral de la ciberseguridad. ',
      link:
        'https://www.oas.org/es/sms/cicte/docs/OEA-AWS-Marco-NIST-de-Ciberseguridad-ESP.pdf',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (<em>ISO</em>). (2013). Seguridad de la información, ciberseguridad y protección de la privacidad (<em>ISO</em> 27001). ',
      link: 'https://www.iso.org/standard/54534.html',
    },
    {
      referencia: 'Projete. (s.f.). Amenazas y vulnerabilidades. ',
      link:
        'https://protejete.wordpress.com/gdr_principal/amenazas_vulnerabilidades/',
    },
  ],
  glosario: [
    {
      termino: 'Activos de información',
      significado:
        'están relacionados con la seguridad de la información, hacen referencia a cualquier información o dispositivo que tenga que ver con el tratamiento de esta y que sea de valor para la organización.',
    },
    {
      termino: 'Auditoría',
      significado:
        'acción que consiste en emitir criterios y opiniones profesionales acerca de cualquier objeto de análisis, del cual se espera que represente de manera adecuada la realidad que pretende reflejar; también sobre si cumple o no con las condiciones y funcionalidades que se han acordado en el nivel de servicio.',
    },
    {
      termino: 'Auditorías internas de SGSI',
      significado:
        'el principal objetivo de la auditoría de SGSI es investigar, de manera objetiva, si existe algo que esté mal realizado. El auditor interno tiene que ser una persona capacitada, con su conocimiento debe poder descubrir si algo se hace mal dentro de la organización. Realizando un buen trabajo, correctivo y/o preventivo, entonces la auditoría interna de SGSI mejorará su seguridad.',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'conjunto de metodologías, medidas y controles destinados a gestionar la seguridad de la información de una organización y/o de la información en general.',
    },
    {
      termino: '<em>Ethical hacking</em>',
      significado:
        'proceso que se da al interior de las organizaciones a través del cual se exploran las vulnerabilidades existentes en los sistemas, haciendo pruebas de intrusión, que sirven para verificar y evaluar la seguridad física y lógica de los sistemas de información, redes de computadoras, aplicaciones web, bases de datos, servidores, etc.',
    },
    {
      termino: '<em>Malware</em>',
      significado:
        'software diseñado para comprometer la seguridad de la información, como la utilidad y preservación del equipo.',
    },
    {
      termino: 'Riesgo',
      significado:
        'posibilidad de sufrir una afectación por causa de factores externos o internos. El riesgo es un peligro latente que puede o no materializarse. En el orden informático y de ciberseguridad, los riesgos no son distintos, contemplan las vulnerabilidades y las amenazas y pueden ser controlados, tratados, mitigados, prevenidos y, en algunos casos, eliminados.',
    },
    {
      termino: 'Seguridad informática',
      significado:
        'rama del saber que tiene ocupación en el diseño de normas y criterios, procedimientos y métodos, técnicas y estrategias, dirigidos a lograr seguridad y confiabilidad en un sistema de información. ',
    },
    {
      termino: 'Tratamiento de riesgos',
      significado:
        'medidas y controles que se implementan para mitigar el impacto o la frecuencia de ocurrencia de un riego.',
    },
    {
      termino: 'Virus informático',
      significado:
        'software que se instala en un dispositivo sin el consentimiento del usuario, con el fin de alterar el funcionamiento. ',
    },
  ],
  complementario: [
    {
      tema:
        '2. Normatividad y estándares: ciberseguridad<br><br>3. Normatividad y estándares: seguridad de la información',
      referencia:
        '<em>ISO</em>. (2018). Seguridad de la información, ciberseguridad y protección de la privacidad (<em>ISO</em> 27005).',
      tipo: 'Norma / Documento',
      link: 'https://www.iso.org/standard/75281.html',
    },
    {
      tema:
        '2. Normatividad y estándares: ciberseguridad<br><br>3. Normatividad y estándares: seguridad de la información',
      referencia:
        '<em>ISO</em>. (2013). Seguridad de la información, ciberseguridad y protección de la privacidad (<em>ISO</em> 27002). ',
      tipo: 'Norma / Documento',
      link: 'https://www.iso.org/standard/54533.htm',
    },
    {
      tema: '8. Amenazas y vulnerabilidades',
      referencia:
        'Gómez, V., Á. (2015). Auditoría de seguridad informática. RA-MA Editorial. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/62464?page=14',
    },
    {
      tema: '9. Riesgos',
      referencia:
        'Gómez V., Á. (2015). Seguridad en equipos informáticos. RA-MA Editorial.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/62466?page=1',
    },
    {
      tema: '9.2. Características, impacto y análisis de riesgos',
      referencia:
        '<em>ISO</em> (2018). Gestión del riesgo. Directrices (<em>ISO</em> 31000). ',
      tipo: 'Norma / Documento',
      link: 'https://www.iso.org/obp/ui#iso:std:iso:31000:ed-2:v1:es',
    },
    {
      tema: '10. Ethical Hacking',
      referencia:
        'Astudillo, B. K. (2019). Hacking ético: ¡Cómo convertirse en hacker ético en 21 días o menos! Ediciones de la U.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10047&pg=19',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
