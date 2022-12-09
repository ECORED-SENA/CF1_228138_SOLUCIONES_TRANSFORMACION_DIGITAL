<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Fundamentos de redes y networking

    .bloque1.p-0
      .bloque-texto-b.color-secundario.p-4.mb-0(data-aos="fade-left")
        .bloque-texto-b__texto        
          .row.justify-content-center.align-items-center.d-flex
              .col-lg-10.col-12
                p.mb-lg-0.mb-3 Para dar comienzo a este recorrido formativo por los fundamentos de seguridad digital y los análisis de riesgos, <b>presentamos algunos conceptos claves que orientarán la asimilación de los contenidos</b>. Preste toda su atención y disponibilidad para su estudio.
              .col-lg-2.col-8.px-5
                img.mb-0(src="@/assets/curso/tema1/img02.svg")
          

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Conceptos

    p Una red de computadoras es un conjunto de ordenadores y otros dispositivos que se conectan entre sí, tanto de manera alámbrica, es decir por cables, o inalámbricas o sea wifi, para intercambiar información y compartir recursos.
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.col-12
        .TFcontainer.mb-lg-0.mb-3.p-0
          img.TFimage(src='@/assets/curso/tema1/img03.svg')
          .TFoverlay.d-flex.align-items-top(style="background-color: #ffe5cf")
            .px-3.w-100
              div.w-100
                h4.text-center.w-100.p-2(style="background-color: white; border-radius: 19px") Información para cada propósito
              p.mb-0.text-center.contenidooculto Las redes informáticas tienen la capacidad de dar la información para cada propósito de negocios, entretenimiento e investigación.

      .col-lg-4.col-12
        .TFcontainer.mb-lg-0.mb-3.p-0
          img.TFimage(src='@/assets/curso/tema1/img04.svg')
          .TFoverlay.d-flex.align-items-top(style="background-color: #ffe5cf")
            .px-3.w-100
              div.w-100
                h4.text-center.w-100.p-2(style="background-color: white; border-radius: 19px") Conexión unificada
              p.mb-0.text-center.contenidooculto También da la posibilidad de adecuar una única conexión a internet en varios ordenadores.
      .col-lg-4.col-12
        .TFcontainer.mb-lg-0.mb-3.p-0
          img.TFimage(src='@/assets/curso/tema1/img05.svg')
          .TFoverlay.d-flex.align-items-top(style="background-color: #ffe5cf")
            .px-3.w-100
              div.w-100
                h4.text-center.w-100.p-2(style="background-color: white; border-radius: 19px") Intercambio de información y dispositivos
              p.mb-0.text-center.contenidooculto La red informática tiene la habilidad de compartir impresora y otros periféricos, además de enviar y recibir mensajes y pasar archivos a otros ordenadores sin necesitar de un cd, memoria USB u otro elemento.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Características

    .bloque2.p-0.mb-5
      .bloque-texto-b.color-secundario.p-4.mb-0(data-aos="fade-left")
        .bloque-texto-b__texto        
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-2.col-8.px-5
                img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img06.svg")
            .col-lg-10.col-12
                p <b>En este punto, las características hacen referencia a los elementos que componen una red: host, switch, router, servidor, firewall, etc.</b> <br><br>En el siguiente recurso, le presentamos las topologías de red más importantes; conozca y asimile cada una de ellas:
                

    TabsA.color-acento-botones(data-aos="fade-right")
      .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Punto a punto")
        h4 Punto a punto
        .row.justify-content-center
          .col-lg-4.col-8
            img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img07.png")
          .col-lg-8.col-12
            p.mb-0 Cuando se habla de la topología, se está haciendo referencia al enlace constante entre dos puntos finales. Esta topología, denominada punto a punto conmutado, es básicamente el modo más tradicional de la telefonía básica. El valor que tiene una red permanente de punto a punto, está relacionado con el proceso de comunicación directo y sin obstáculos entre los puntos finales. El valor de una conexión punto-a-punto a demanda, es proporcional al número de pares posibles de abonados y se ha denominado como la ley de Metcalfe.
      .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Topología de bus")
        h4 Topología de bus
        .row.justify-content-center
          .col-lg-4.col-8
            img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img08.png")
          .col-lg-8.col-12
            p.mb-0 Cuando se hace referencia a la topología de bus, hay que tener sabido que todos los equipos están conectados a un circuito común. Allí, toda la información que sea enviada desde un equipo hasta otro, viajará de manera directa o indirecta, mientras exista un controlador que enrute los datos al destino indicado. La información será procesada por el cable en ambas direcciones y lo hará a una velocidad aproximada de 10/100 Mbps y tendrá en sus dos extremos una resistencia (terminador). Es posible conectar al bus una buena cantidad de computadores o equipos y, si alguno de los computadores llega a fallar, la comunicación se podrá mantener, pero, en cambio, si la falla se presenta en el bus, entonces no sucederá lo mismo. Existen varios tipos de cableado, entre los que se puede encontrar el cableado coaxial, el par trenzado o la denominada fibra óptica. En una topología de bus, cada uno de los equipos o computadores está conectado a un segmento común de cable de red.
      .tarjeta.tarjeta1.p-lg-5.p-3( titulo="La topología en estrella")
        h4 La topología en estrella
        .row.justify-content-center
          .col-lg-4.col-8
            img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img09.png")
          .col-lg-8.col-12
            p.mb-0 Esta topología reduce la posibilidad de que la red falle, conectando todos los computadores a un nodo central. Cuando se pone a una red basada en la topología estrella, este concentrador central vuelve a enviar todas las transmisiones recibidas de cualquier computador periférico a todos los computadores periféricos de la red; algunas veces, incluso, al computador que lo envió. Todos los computadores o equipos periféricos se pueden comunicar con los demás recibiendo del computador central solamente. Una falla en la línea de conexión de cualquier computador con el computador central provocaría el aislamiento de ese nodo respecto a los demás, pero el resto de los sistemas permanecería intacto.
      .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Topología en anillo")
        h4 Topología en anillo
        .row.justify-content-center
          .col-lg-4.col-8
            img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img10.png")
          .col-lg-8.col-12
            p En la topología en anillo, cuando el nodo central es pasivo, el nodo origen ha de tener la capacidad de tolerar un eco de su transmisión. Una red, en estrella activa, tiene un nodo central activo que, generalmente, cuenta con los medios necesarios para prevenir problemas afines al eco.  
            p.mb-0 La red en anillo, es básicamente una topología de red a través de la cual, cada estación tiene una única conexión de entrada y otra de salida. Cada estación cuenta con un receptor y un transmisor que tiene como función ser traductor, es decir, que pasa la señal a la estación siguiente. A través de un token, conocido también como testigo. La comunicación, en este tipo de red, es permitida; es así como se logran evitar las probables pérdidas de información por colisiones. 
      .tarjeta.tarjeta1.p-lg-5.p-3( titulo="La topología en árbol")
        h4 La topología en árbol
        .row.justify-content-center
          .col-lg-4.col-8
            img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img12.png")
          .col-lg-8.col-12
            p A la topología en árbol también se le conoce como topología jerárquica y se le puede definir como la colección de redes, en estrella, que tiene un orden jerárquico. Esta tipología de árbol cuenta con nodos periféricos individuales que requieren tanto transmitir como hacer recepción, únicamente, de otro nodo; y no se requiere, que actúen como repetidores o regeneradores. La función del nodo central es posible distribuirla, de manera contraria a como se hace en las redes en estrella.
            p.mb-0 Como en las redes en estrella convencionales, los nodos individuales podrían permanecer aislados de la red por un fallo puntual en la ruta de conexión del nodo. 
      .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Topología en malla")
        h4 Topología en malla
        .row.justify-content-center
          .col-lg-4.col-8
            img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img13.png")
          .col-lg-8.col-12
            p.mb-0 La topología de red mallada tiene como finalidad tener conectado cada nodo, a todos los nodos. De esta manera es posible dirigir los mensajes de un nodo a otro por diferentes caminos. Si la red de malla está totalmente conectada, no puede existir ninguna clase de interrupción en las comunicaciones. Cada servidor tiene sus propias conexiones con todos los demás servidores. 
      .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Topología híbrida o mixta")
        h4 Topología híbrida o mixta
        .row.justify-content-center
          .col-lg-4.col-8
            img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img14.png")
          .col-lg-8.col-12
            p.mb-0 En esta topología las redes pueden utilizar diferentes tipologías para conectarse, como por ejemplo en estrella. La topología híbrida es una de las más comunes y se adquiere de la unión de varios tipos de topologías de red, de aquí el nombre de híbridas. Como, por ejemplo: en árbol, estrella-estrella, bus-estrella, etc.

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3  Tipos de redes

    p.mb-5 Las redes informáticas o de ordenadores se pueden clasificar de varias formas o tipos diferentes. Aquí le mostramos los tipos de redes más importantes y destacados y que, además, son los más usados:

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-6.col-8
        img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img15.png")
      .col-lg-6.col-12
         AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="LAN (red de área local) ")
            p.mb-0 Su finalidad se relaciona con la unión de varios ordenadores y dispositivos conectados a un servidor.
          div(titulo="WLAN (red de área local inalámbrica)")
            p.mb-0 Una WLAN tiene la misma función que una LAN, pero las conexiones se realizan de forma inalámbrica.
          div(titulo="WAN (red de área amplia)")
            p.mb-0 Son las redes de mayor alcance, como lo es la red global de redes, Internet.
          div(titulo="MAN (red de área metropolitana)")
            p.mb-0 Las MAN suelen ser más grandes que las LAN, tienen como función conectar distintas áreas alejadas entre sí. Son redes de tamaño intermedio.
          div(titulo="PAN (red de área personal)")
            p.mb-0 Una PAN sirve a una persona. Se utiliza generalmente para uso personal o individual cuando se requiere, por ejemplo, en la oficina o trabajo.
          div(titulo="SAN (red de área de almacenamiento)")
            p.mb-0 Pueden gestionar una gran cantidad de tráfico. Es una red que forma parte de empresas que trabajan con servidores y quieren mantener un buen rendimiento.
          div(titulo="CAN (red de área de campus)")
            p.mb-0 Se puede inferir que se encuentra entre una LAN y una MAN. No es tan pequeña como una LAN, pero tampoco es tan grande como una MAN.
          div(titulo="VPN (red privada virtual)")
            p.mb-0 Una VPN realiza un canal cifrado que mantiene la identidad y las credenciales de acceso de un usuario, así como cualquier dato transferido.

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4  Modelo OSI
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-12
        .bloque-texto-g.color-secundario.p-lg-5.p-2
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img16.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-3.p-2
            p.mb-0 Teniendo en cuenta que, en general, los conjuntos de protocolos de red se estructuran en capas, la Organización Internacional para la Estandarización (ISO) ha implementado el modelo de referencia de Interconexión de Sistemas Abiertos (OSI) que maneja capas estructuradas. El modelo OSI es el modelo de la interconexión de sistemas abiertos. <b>El modelo OSI está conformado por siete capas para las actividades de red y cada capa tiene asociados uno o más protocolos</b>.

    p.mb-5 En la siguiente tabla, entérese de cuáles son esas capas y las especificidades de cada una de ellas:

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo <b>Tabla 1.</b> <i>Modelo de referencia de Interconexión de Sistemas Abiertos</i> 

        .tabla-b.color-acento-contenido
          table
              tr
                th(style="background-color: #ff3c00; border-right: 0px; width: 50px !important")
                  h4.mb-0.text-center(style="color: white") Nº de capa
                th(style="background-color: #ff3c00; border-right: 0px; width: 50px  !important")
                  h4.mb-0.text-center(style="color: white") Nombre de capa
                th(style="background-color: #ff3c00;")
                  h4.mb-0.text-center(style="color: white") Descripción
              tr
                td
                  h4.text-center 7 
                td
                  h4.text-center Aplicación
                td Tienen costos más bajos frente a las encuestas presenciales.
              tr
                td
                  h4.text-center 6
                td
                  h4.text-center Presentación
                td La presentación corrobora que la información sea transferida hasta el sistema receptor de manera comprensible para el sistema. 
              tr
                td
                  h4.text-center 5
                td
                  h4.text-center Sesión
                td Dirige las conexiones y terminaciones entre los sistemas que cooperan. 
              tr
                td
                  h4.text-center 4
                td
                  h4.text-center Transporte
                td Manda la transferencia de datos. Así mismo, asegura que los datos recibidos sean idénticos a los transmitidos. 
              tr
                td
                  h4.text-center 3
                td
                  h4.text-center Red
                td Dispone las direcciones de datos y la transferencia entre redes.
              tr
                td
                  h4.text-center 2
                td
                  h4.text-center Vínculo de datos
                td Dirige la transferencia de datos en el medio de red. 
              tr
                td
                  h4.text-center 1
                td
                  h4.text-center Física
                td Da a conocer las características del hardware de red.
        figcaption Nota: Tomada de la Guía de administración del sistema: servicios IP (2010).
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5  Protocolo TCP/IP

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-5.col-8
        img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img17.png")
      .col-lg-7.col-12
        p TCP/IP son las siglas de las siguientes palabras: <b>Transmission Control Protocol/Internet Protocol (Protocolo de control de transmisión/Protocolo de Internet)</b>.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Los protocolos TCP/IP son un conjunto de reglas para formatos de mensajes y procedimientos, que permiten que el hardware y los softwares de aplicación, intercambien información.
        p.mb-0 Despliegue el recurso que se muestra a continuación para tener un primer acercamiento conceptual a los protocolos TCP/IP y descubra cómo estos se disponen en capas.
    
    p.mb-5 Los protocolos TCP / IP se puede dar en términos de capas, como se muestra en la siguiente figura. 
    
    .fondo1.p-4.mb-0
      .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
        .col-lg-10.col-12
          img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img18.svg")
    Separador
    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6  Protocolos IPv4 e IPv6

   

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")      
      .col-lg-7.col-12
        p El Internet Protocol Version 4 (IPv4), conocido como el sistema de identificación que usa Internet para enviar información entre los dispositivos, maneja direcciones de 32 bits con hasta 12 caracteres, en cuatro bloques de 3 caracteres, cada bloque. El DNS los convierte en nombres de dominio como 1and1.es. ajustando todos los dígitos.
        .cajon.color-primario.p-4.mb-lg-0.mb-3
          p.mb-0 Por otra parte, está el Internet Protocol Version 6 (IPv6); su espacio de direcciones es de 128-bits. Este protocolo aumenta el tamaño de la dirección IP de 32 bits a 128 bits para así resistir más niveles en la jerarquía de direccionamiento y un número mayor de nodos direccionables. El diseño del protocolo suma muchos beneficios en seguridad: una mayor capacidad de transmisión, manejo de calidad de servicio y mejora la facilidad de administración.
      .col-lg-5.col-8
        img.mb-0(src="@/assets/curso/tema1/img19.png")

    p.mb-5 Los siguientes puntos son los beneficios que representa un proceso de transición de IPv4 al IPv6, que es importante tenerlos presentes, al momento de adoptar el nuevo protocolo:
    
    .row.justify-content-center.align-items-center(data-aos="fade-left")    
      .col-lg-10.col-12
        AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Más usuarios y mejores servicios")
            .col-lg-1.col-5.p-0
              img.mb-lg-0.mb-3(style="min-width:80px !important; max-width:80px !important" src="@/assets/curso/tema1/img20.svg")
            .col-lg-10.col-12
              p.mb-0 Podrá tener un mayor número de equipos conectados a la red.  Así mismo, tendrá un proceso técnicamente transparente para los usuarios de la red de comunicaciones y sus distintos servicios. 

          .row.justify-content-center(titulo="Mayor movilidad, mejor seguridad")
            .col-lg-1.col-5.p-0
              img.mb-lg-0.mb-3(style="min-width:80px !important; max-width:80px !important" src="@/assets/curso/tema1/img21.svg")
            .col-lg-10.col-12
              p.mb-0 Tendrá la posibilidad de incrementar la movilidad de los usuarios al tener un número mayor de direcciones IP para la conectividad. En el mismo sentido, mejorará la seguridad a nivel de direccionamiento IP de la red, en virtud de la arquitectura del nuevo protocolo y sus servicios.

          .row.justify-content-center(titulo="Reducción de costos y más aplicaciones y servicios")
            .col-lg-1.col-5.p-0
              img.mb-lg-0.mb-3(style="min-width:80px !important; max-width:80px !important" src="@/assets/curso/tema1/img22.svg")
            .col-lg-10.col-12
              p.mb-0 Podrá reducir los costos al implementar la solución de IPv6; en este sentido los costos podrían ser mayores de no implementarse el nuevo protocolo. Además, se facilitará la aparición de nuevas aplicaciones y servicios sobre una gran variedad de plataformas.

          .row.justify-content-center(titulo="Nuevas tecnologías")
            .col-lg-1.col-5.p-0
              img.mb-lg-0.mb-3(style="min-width:80px !important; max-width:80px !important" src="@/assets/curso/tema1/img23.svg")
            .col-lg-10.col-12
              p.mb-0 Gran número de direcciones IP para conexiones a Internet con el mundo exterior, facilitando el crecimiento de nuevas tecnologías como el internet de las cosas, las ciudades inteligentes, redes de sensores, entre otras. 

          .row.justify-content-center(titulo="Amparo tecnológico de los PSI")
            .col-lg-1.col-5.p-0
              img.mb-lg-0.mb-3(style="min-width:80px !important; max-width:80px !important" src="@/assets/curso/tema1/img24.svg")
            .col-lg-10.col-12
              p.mb-0 Los Proveedores de Servicio de Internet, PSI, tendrán que preparar el proceso de transición de IPv6, mediante la creación de un backbone nativo de IPv6 que apoye a los clientes en el enrutamiento de las nuevas direcciones IPv6, a fin de garantizar la publicación de servicios y aplicaciones que se consideren pertinentes hacia internet.

          .row.justify-content-center(titulo="Proveedores de servicio a cargo")
            .col-lg-1.col-5.p-0
              img.mb-lg-0.mb-3(style="min-width:80px !important; max-width:80px !important" src="@/assets/curso/tema1/img25.svg")
            .col-lg-10.col-12
              p.mb-0 La implementación de IPv6 será un proceso gradual, cuya responsabilidad no será del gobierno sino del proveedor del servicio de internet directamente y no deberá generar costos directos.
    Separador
    #t_1_7.titulo-segundo.color-acento-contenido
      h2 1.7  Enrutamiento IP

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-5.col-8
        img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img26.png")
      .col-lg-7.col-12
        p <b>Acceder a la comunicación e interconectividad de redes, a través de paquetes IP enviados desde un origen a un destino, aprovechando la tecnología con la que cuenta cada router, permite diversas configuraciones y protocolos. </b>
        p Algunas de sus utilidades son, entre otras, poder hallar redes remotas, conservar la información de enrutamiento actualizada, elegir el mejor camino hacia las redes de destino, poder encontrar un mejor camino nuevo si la ruta actual deja de estar disponible.
        p.mb-0 Descubra los tipos de enrutamiento IP que se presentan en el siguiente recurso. Conozca, además, sus ventajas y desventajas. Le sugerimos tomar nota atenta de los aspectos más importantes. ¡Adelante!
    
    .row.justify-content-center.mb-0
      .col-lg-4.col-12.d-flex
        .py-5.p-3.w-100.mb-lg-0.mb-3(style="border-radius: 15px; background-color: #ffe5cf")
          .p-0.d-flex.justify-content-center.mb-4
            img.mb-lg-0.mb-3( style="width: 181px" src="@/assets/curso/tema1/img27.svg")
          .p-0.d-flex.justify-content-center.mb-3
            h4.p-1.text-center.mb-0(style="width: 198px; background-color:white; border-radius:19px") Estático
          .p-0.d-flex.justify-content-center
            a.d-flex.indicador__container(@click="modal1 = true")
              p.mb-0 Leer más
              img.mb-0.mx-2( style="width: 13px" src="@/assets/curso/tema1/img29.svg")
              .indicador--click(v-if="mostrarIndicador")

      .col-lg-4.col-12.d-flex
        .py-5.p-3.w-100(style="border-radius: 15px; background-color: #0c5b7c")
          .p-0.d-flex.justify-content-center.mb-4
            img.mb-lg-0.mb-3( style="width: 181px" src="@/assets/curso/tema1/img28.svg")
          .p-0.d-flex.justify-content-center.mb-3
            h4.p-1.text-center.mb-0(style="width: 198px; background-color:white; border-radius:19px") Estático
          .p-0.d-flex.justify-content-center
            a.d-flex.indicador__container(@click="modal2 = true")
              p.mb-0.text-white Leer más
              img.mb-0.mx-2( style="width: 13px" src="@/assets/curso/tema1/img30.svg")
              .indicador--click(v-if="mostrarIndicador")


    ModalA(:abrir-modal.sync="modal1")
      .d-flex
        div.p-2
          img.mb-0( style="width: 80px; min-width: 80px; max-width: 80px" src="@/assets/curso/tema1/img31.svg")
        div.p-2
          h4 Estático
          p.mb-4 Acceden a la configuración manual de las tablas de enrutamiento, las tablas no serán modificadas en forma dinámica, no tiene flexibilidad frente a fallas de los enlaces, no son fundamentales las cargas y procesos asociados a un protocolo de descubrimiento de rutas, se establecen fácilmente barreras de seguridad.
          .tabla-b.color-acento-contenido
            table.w-100
              tr
                th(style="background-color: #ffe5cf; border-right: 0px; ")
                  h4.mb-0.text-center Ventajas
                th(style="background-color: #ffe5cf; border-right: 0px;")
                  h4.mb-0.text-center Desventajas          
              tr
                td(style="background: white;")
                  ul.lista-ul--color
                    li 
                      i.fas.fa-check
                      p.mb-0 Suele ser muy segura debido a que es configurada manualmente.
                    li 
                      i.fas.fa-check
                      p.mb-0 Es muy eficaz en redes pequeñas, en las que el administrador tiene total control de la red.
                    li 
                      i.fas.fa-check
                      p.mb-0 Consume muy pocos recursos de sistema y la banda ancha.  
                td(style="background: white;")
                  ul.lista-ul--color
                    li 
                      i.fas.fa-check
                      p.mb-0 Requiere mantenimiento constante por parte del administrador.
                    li 
                      i.fas.fa-check
                      p.mb-0 Su manejo en redes grandes suele ser muy complejo y requiere mucho tiempo.  
                    li 
                      i.fas.fa-check
                      p.mb-0 No es escalable, por lo que no actualiza sus tablas de enrutamiento automáticamente.


    ModalA(:abrir-modal.sync="modal2")
      .d-flex
        div.p-2
          img.mb-0( style="width: 80px; min-width: 80px; max-width: 80px" src="@/assets/curso/tema1/img32.svg")
        div.p-2
          h4 Dinámico
          p.mb-4 Se basa en la comunicación, por medio de broadcasts, entre los routers. Para hallar las mejores rutas los routers utilizan el concepto de métrica. No se requiere mantener manualmente las tablas de rutas.
          .tabla-b.color-acento-contenido
            table.w-100
              tr
                th(style="background-color: #083142; border-right: 0px; ")
                  h4.mb-0.text-center.text-white Ventajas
                th(style="background-color: #083142; border-right: 0px;")
                  h4.mb-0.text-center.text-white Desventajas          
              tr
                td(style="background: white; border: 1px solid #083142 !important")
                  ul.lista-ul--color
                    li 
                      i.fas.fa-check
                      p.mb-0 El tiempo de mantenimiento se reduce notablemente.
                    li 
                      i.fas.fa-check
                      p.mb-0 Es eficaz tanto en redes grades como pequeñas.
                    li 
                      i.fas.fa-check
                      p.mb-0 Es escalable, lo que reduce el trabajo del administrador de la red.
                td(style="background: white; border: 1px solid #083142 !important")
                  ul.lista-ul--color
                    li 
                      i.fas.fa-check
                      p.mb-0 Su nivel de seguridad es mucho menor al de un enrutamiento estático.
                    li 
                      i.fas.fa-check
                      p.mb-0 Se requiere, por parte del administrador, conocimientos complejos sobre enrutamiento dinámico.
                    li 
                      i.fas.fa-check
                      p.mb-0 Consume muchos recursos del router, así como banda ancha (Esto dependerá del tipo de protocolo que se suela usar.  
                
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
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
