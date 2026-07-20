import { useEffect } from 'react'

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Política de Privacidad de Datos | Vortia'
    window.scrollTo(0, 0)
  }, [])

  return (
    <article className="legal-page">
      <header className="legal-hero">
        <p className="legal-eyebrow">Legales</p>
        <h1>Política de Privacidad de Datos</h1>
        <p>Vortia Inbox / Vortia Agent</p>
      </header>

      <div className="legal-document">
        <section>
          <p>Esta Política de Privacidad describe cómo VORTIA S.R.L. recopila, utiliza, almacena, protege y trata los datos personales vinculados al uso de Vortia Inbox, Vortia Agent y las interacciones gestionadas por sus asistentes conversacionales, incluyendo sus integraciones con plataformas de comercio electrónico como Shopify.</p>
          <p>El tratamiento de datos personales se realiza conforme a la Ley N.° 25.326 de Protección de Datos Personales de la República Argentina, su decreto reglamentario y las disposiciones complementarias aplicables.</p>
        </section>

        <section>
          <h2>1. Marco legal aplicable</h2>
          <p>El tratamiento de datos personales se rige por la Ley N.° 25.326, el Decreto Reglamentario N.° 1558/2001, las disposiciones complementarias de la Agencia de Acceso a la Información Pública (AAIP) y los estándares de seguridad requeridos por plataformas tecnológicas utilizadas en la prestación del servicio.</p>
          <p>La Dirección Nacional de Protección de Datos Personales, en el ámbito de la AAIP, tiene atribuciones para atender denuncias y reclamos vinculados con el incumplimiento de la normativa vigente.</p>
        </section>

        <section>
          <h2>2. Categorías de datos recopilados</h2>
          <p>En el marco de la prestación del servicio, Vortia puede recopilar y procesar las siguientes categorías de datos:</p>
          <h3>Datos de contacto del Cliente</h3>
          <ul>
            <li>Nombre y apellido o denominación social.</li>
            <li>Dirección de correo electrónico.</li>
            <li>Número de teléfono, incluido el número de WhatsApp asociado.</li>
            <li>Datos de facturación, cuando corresponda.</li>
          </ul>
          <h3>Logs de conversaciones gestionadas por la IA</h3>
          <ul>
            <li>Transcripciones de interacciones entre usuarios finales del Cliente y el asistente conversacional.</li>
            <li>Marcas de tiempo, duración y estado de cada conversación.</li>
            <li>Identificadores de sesión y canal de origen.</li>
          </ul>
          <h3>Metadatos de interacción</h3>
          <ul>
            <li>Datos de rendimiento del asistente, como tasa de resolución o derivaciones a agente humano.</li>
            <li>Métricas de uso para reportes analíticos y visualizaciones del panel de control.</li>
            <li>Información técnica del dispositivo o sistema desde el cual se accede al servicio.</li>
          </ul>
          <h3>Datos de comercios conectados a Shopify</h3>
          <ul>
            <li>Información de la tienda, instalación, configuración, plan, dominio myshopify.com y estado de la aplicación.</li>
            <li>Catálogo, productos, variantes, inventario, colecciones, contenido, políticas, idiomas, mercados y descuentos.</li>
            <li>Datos de clientes y pedidos cuando sean necesarios para responder consultas, mostrar conversaciones, generar métricas o ejecutar acciones solicitadas por el comercio.</li>
          </ul>
        </section>

        <section>
          <h2>3. Finalidad del tratamiento</h2>
          <p>Los datos recopilados se utilizan exclusivamente para las siguientes finalidades:</p>
          <ul>
            <li><strong>Prestación del servicio contratado:</strong> operar, mantener y mejorar la plataforma, asegurando su disponibilidad y funcionamiento.</li>
            <li><strong>Personalización y optimización del agente de IA del Cliente:</strong> ajustar el comportamiento del asistente con información asociada exclusivamente a ese Cliente.</li>
            <li><strong>Generación de métricas y reportes:</strong> elaborar estadísticas e informes de rendimiento disponibles en el dashboard.</li>
            <li><strong>Cumplimiento legal y seguridad:</strong> responder a obligaciones normativas, requerimientos de autoridad competente y resguardar la integridad del servicio.</li>
          </ul>
          <p>Los datos de un Cliente no se utilizan para entrenar asistentes o modelos asignados a otros Clientes. Vortia no vende datos personales ni los utiliza para fines ajenos a la prestación del servicio contratado, el soporte, la seguridad, el cumplimiento legal o las instrucciones legítimas del Cliente.</p>
        </section>

        <section>
          <h2>4. Almacenamiento, seguridad y confidencialidad</h2>
          <h3>Infraestructura de almacenamiento</h3>
          <p>Los datos pueden almacenarse en servidores en la nube contratados con proveedores de infraestructura de reconocida trayectoria, que cuenten con estándares de seguridad certificados o equivalentes. Vortia implementa mecanismos de redundancia y copias de seguridad periódicas para favorecer la disponibilidad y recuperación de la información.</p>
          <p>Para la operación de Vortia Inbox / Vortia Agent, Vortia puede utilizar proveedores como MongoDB Atlas para bases de datos, Render para despliegue de la aplicación, Qdrant para almacenamiento vectorial, OpenAI para procesamiento de lenguaje natural y Shopify para la integración con tiendas. Estos proveedores procesan datos únicamente en la medida necesaria para prestar el servicio y bajo sus propias condiciones de seguridad y tratamiento de datos.</p>
          <h3>Medidas de seguridad</h3>
          <ul>
            <li>Cifrado en tránsito mediante TLS 1.2 o superior.</li>
            <li>Cifrado en reposo con algoritmos robustos, incluyendo AES-256 cuando aplique.</li>
            <li>Copias de seguridad cifradas cuando el proveedor de infraestructura lo soporte, incluyendo backups gestionados de MongoDB Atlas.</li>
            <li>Control de acceso basado en roles y autenticación reforzada para sistemas críticos.</li>
            <li>Monitoreo continuo, gestión de vulnerabilidades y aplicación oportuna de parches.</li>
            <li>Procedimientos de respuesta ante incidentes y brechas de seguridad.</li>
          </ul>
          <h3>Confidencialidad</h3>
          <p>Vortia se compromete a mantener la más estricta confidencialidad respecto de los datos del Cliente y de sus usuarios finales. El personal con acceso a datos personales se encuentra sujeto a obligaciones de confidencialidad y recibe capacitación acorde a sus responsabilidades.</p>
          <h3>Retención de datos</h3>
          <p>Los datos personales se conservan durante la vigencia del contrato y por un período adicional de hasta cinco (5) años desde su terminación, cuando ello resulte necesario por obligaciones legales, resguardo de evidencia o resolución de disputas. Luego de ese plazo, los datos podrán ser eliminados o anonimizados de forma segura, salvo que una norma exija su conservación por más tiempo.</p>
          <p>En integraciones con Shopify, Vortia procesa solicitudes de acceso, redacción o eliminación de datos mediante los mecanismos obligatorios de privacidad provistos por Shopify, incluyendo eventos de desinstalación de la aplicación y solicitudes de titulares de datos.</p>
        </section>

        <section>
          <h2>5. Derechos de los titulares de datos</h2>
          <p>De conformidad con la normativa aplicable, toda persona humana cuyos datos personales sean tratados en el marco de la plataforma podrá ejercer, entre otros, los siguientes derechos:</p>
          <ul>
            <li><strong>Acceso:</strong> conocer qué datos son tratados, su origen, finalidad y destinatarios.</li>
            <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos, incompletos o desactualizados.</li>
            <li><strong>Supresión:</strong> requerir la eliminación de datos cuando corresponda legalmente.</li>
            <li><strong>Confidencialidad y oposición:</strong> solicitar restricciones o formular oposición en los supuestos previstos por la normativa.</li>
          </ul>
          <p>Para ejercer estos derechos, el titular deberá acreditar su identidad y enviar su solicitud a: <a href="mailto:comercial@vortia.com.ar">comercial@vortia.com.ar</a>. Las solicitudes serán atendidas dentro de los plazos legales aplicables.</p>
        </section>

        <section>
          <h2>6. Integraciones con plataformas de terceros</h2>
          <h3>Vortia Agent en Shopify</h3>
          <p>Cuando un comercio instala o utiliza Vortia Agent como aplicación integrada con Shopify, Vortia puede acceder y procesar datos obtenidos a través de las APIs de Shopify y de la interacción del comercio con la aplicación.</p>
          <p>Estos datos pueden incluir información de la tienda, dominio myshopify.com, configuración de la aplicación, estado de instalación, plan contratado, productos, variantes, inventario, colecciones, contenido de la tienda, políticas, idiomas, mercados, descuentos, clientes, pedidos y otros datos necesarios para prestar las funcionalidades habilitadas por el comercio.</p>
          <p>Vortia también puede procesar mensajes, conversaciones, adjuntos, identificadores de sesión, canal de origen, métricas de uso, registros técnicos y datos generados por el widget o por usuarios administradores dentro de Shopify Admin.</p>
          <p>Estos datos se utilizan para operar el asistente conversacional, sincronizar la base de conocimiento del comercio, responder consultas, permitir acciones administrativas solicitadas por el comercio, generar métricas, brindar soporte técnico, prevenir abusos y cumplir obligaciones legales o contractuales.</p>
          <p>Respecto de los datos de clientes finales del comercio, Vortia actúa principalmente como proveedor de servicios o encargado del tratamiento en nombre del comercio. Respecto de los datos comerciales, contractuales, de facturación, soporte y uso de la aplicación por parte del comercio, Vortia puede actuar como responsable del tratamiento conforme a la normativa aplicable.</p>
          <p>Vortia procesa las solicitudes obligatorias de privacidad de Shopify, incluyendo solicitudes de acceso, redacción o eliminación de datos de clientes y de tiendas, mediante los webhooks y mecanismos provistos por Shopify. Ante la desinstalación de la aplicación, Vortia eliminará, anonimizará o conservará los datos asociados a la tienda conforme a la prestación del servicio, sus obligaciones legales, la seguridad de la plataforma y los plazos de retención indicados en esta Política.</p>
          <h3>WhatsApp Business y servicios de Meta</h3>
          <p>Cuando el servicio opere sobre WhatsApp Business u otros canales de Meta, su uso quedará además sujeto a las políticas, limitaciones y condiciones impuestas por Meta Platforms, Inc. Vortia no será responsable por interrupciones, restricciones, cambios de política o discontinuaciones originadas en dichos servicios.</p>
          <h3>CRMs y otras herramientas de terceros</h3>
          <p>Vortia puede integrarse con CRMs y otras plataformas externas a solicitud del Cliente. En esos casos, el Cliente es responsable de contar con las licencias, permisos y autorizaciones necesarias para habilitar la integración. El tratamiento realizado por terceros se regirá por sus propios términos y políticas.</p>
          <h3>Transferencia internacional de datos</h3>
          <p>Como consecuencia del uso de infraestructura cloud y servicios tecnológicos externos, pueden producirse transferencias internacionales de datos. Vortia procurará que dichas transferencias se realicen con niveles adecuados de protección o mediante garantías contractuales razonables, conforme a la normativa aplicable.</p>
          <h3>Proveedores tecnológicos</h3>
          <p>Entre los proveedores tecnológicos utilizados para operar el servicio pueden encontrarse Shopify, MongoDB Atlas, Render, OpenAI y Qdrant. Vortia evalúa estos proveedores en función de su finalidad técnica, controles de seguridad, disponibilidad, capacidad de recuperación y obligaciones contractuales, limitando el intercambio de datos a lo necesario para prestar las funcionalidades contratadas.</p>
        </section>

        <section>
          <h2>7. Contacto</h2>
          <address>
            <strong>VORTIA S.R.L.</strong><br />
            República Argentina<br />
            Email general: <a href="mailto:info@vortia.com.ar">info@vortia.com.ar</a><br />
            Responsable para solicitudes sobre datos personales: <a href="mailto:contacto@vortia.com.ar">contacto@vortia.com.ar</a><br />
            Sitio web: <a href="https://vortia.com.ar">https://vortia.com.ar</a>
          </address>
          <p>También podrá dirigir consultas o reclamos ante la Agencia de Acceso a la Información Pública (AAIP), autoridad de aplicación en materia de protección de datos personales en la República Argentina.</p>
        </section>
      </div>
    </article>
  )
}
