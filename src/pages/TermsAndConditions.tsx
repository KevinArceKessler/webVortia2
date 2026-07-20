import { useEffect } from 'react'

const contents = [
  ['preambulo', 'Preámbulo'],
  ['clausula1', '1. Identificación de las partes y naturaleza del servicio'],
  ['clausula2', '2. Condiciones de acceso y uso del servicio'],
  ['clausula3', '3. Integraciones, Shopify y canales de atención'],
  ['clausula4', '4. Tratamiento de datos, privacidad y seguridad'],
  ['clausula5', '5. Inteligencia artificial y acciones solicitadas por el Cliente'],
  ['clausula6', '6. Proveedores tecnológicos y servicios de terceros'],
  ['clausula7', '7. Propiedad intelectual'],
  ['clausula8', '8. Limitación de responsabilidad'],
  ['clausula9', '9. Planes, precios y condiciones económicas'],
  ['clausula10', '10. Vigencia y rescisión'],
  ['clausula11', '11. Modificaciones'],
  ['clausula12', '12. Ley aplicable y jurisdicción'],
  ['clausula13', '13. Disposiciones generales'],
]

export default function TermsAndConditions() {
  useEffect(() => {
    document.title = 'Términos y Condiciones | Vortia'
    window.scrollTo(0, 0)
  }, [])

  return (
    <article className="legal-page">
      <header className="legal-hero">
        <p className="legal-eyebrow">Legales</p>
        <h1>Términos y Condiciones de Servicio</h1>
        <p>Vortia Inbox / Vortia Agent</p>
      </header>

      <div className="legal-document">
        <p className="legal-intro">Estos Términos y Condiciones regulan la relación entre VORTIA S.R.L. y toda persona humana o jurídica que acceda, utilice o contrate los servicios de la plataforma Vortia Inbox / Vortia Agent. La aceptación de estos términos constituye un acuerdo jurídicamente vinculante.</p>

        <nav className="legal-index" aria-label="Índice de términos y condiciones">
          <h2>Índice</h2>
          <ul>
            {contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
          </ul>
        </nav>

        <section id="preambulo">
          <h2>Preámbulo</h2>
          <p>Los presentes Términos y Condiciones de Servicio regulan la relación jurídica entre VORTIA (en adelante, “Vortia”, la “Empresa” o el “Proveedor”) y toda persona humana o jurídica (en adelante, el “Cliente” o el “Usuario”) que acceda, utilice o contrate los servicios de la plataforma Vortia Inbox / Vortia Agent.</p>
          <p>Al hacer clic en “Acepto”, registrar una cuenta o hacer uso efectivo del servicio, el Cliente declara haber leído, comprendido y aceptado íntegramente estas condiciones. Si actúa en representación de una persona jurídica, declara contar con facultades suficientes para obligarla en los términos del presente instrumento.</p>
        </section>

        <section id="clausula1">
          <h2>1. Identificación de las partes y naturaleza del servicio</h2>
          <h3>1.1 Datos del Proveedor</h3>
          <ul>
            <li><strong>Razón social:</strong> VORTIA S.R.L.</li>
            <li><strong>Domicilio:</strong> República Argentina</li>
            <li><strong>Sitio web:</strong> https://vortia.com.ar</li>
            <li><strong>Correo de contacto:</strong> info@vortia.com.ar</li>
          </ul>
          <h3>1.2 Naturaleza del Servicio</h3>
          <p>Vortia desarrolla y comercializa soluciones de Software como Servicio (SaaS) basadas en Inteligencia Artificial aplicada a la gestión y optimización de la atención al cliente y los procesos de ventas. Su producto principal, Vortia Inbox / Vortia Agent, es un asistente conversacional omnicanal con capacidades de procesamiento de lenguaje natural e integraciones operativas para comercios.</p>
          <p>La plataforma puede operar sobre los siguientes canales, según el plan contratado:</p>
          <ul>
            <li>WhatsApp Business, mediante la API oficial de Meta.</li>
            <li>Webchat embebible en el sitio web del Cliente.</li>
            <li>Shopify y Shopify Admin, cuando el Cliente instale o utilice Vortia Agent como aplicación integrada.</li>
            <li>Redes sociales y otros canales adicionales habilitados.</li>
          </ul>
          <p>La plataforma automatiza la interpretación de consultas, genera respuestas contextuales y puede integrarse con sistemas CRM u otras herramientas de terceros. Vortia no comercializa productos físicos ni realiza actividades de comercio electrónico directo al consumidor final.</p>
        </section>

        <section id="clausula2">
          <h2>2. Condiciones de acceso y uso del servicio</h2>
          <h3>2.1 Requisitos de acceso</h3>
          <p>Para acceder a la plataforma, el Cliente debe:</p>
          <ul>
            <li>Ser mayor de 18 años o actuar en representación de una persona jurídica válidamente constituida.</li>
            <li>Completar el registro con información veraz, precisa y actualizada.</li>
            <li>Aceptar estos Términos y Condiciones y la Política de Privacidad de Vortia.</li>
            <li>Mantener sus credenciales de acceso bajo estricta confidencialidad.</li>
          </ul>
          <h3>2.2 Uso permitido</h3>
          <p>El Cliente se compromete a utilizar la plataforma exclusivamente para fines lícitos y de conformidad con:</p>
          <ul>
            <li>La legislación vigente en la República Argentina.</li>
            <li>Las políticas de uso aceptable de Meta Platforms, Inc. y de la API de WhatsApp Business.</li>
            <li>Las condiciones de servicio de las plataformas de terceros integradas.</li>
            <li>Las disposiciones establecidas en estos Términos y Condiciones.</li>
          </ul>
          <h3>2.3 Prohibiciones</h3>
          <p>Queda expresamente prohibido:</p>
          <ul>
            <li>Utilizar la plataforma para enviar spam o contenido ilícito.</li>
            <li>Intentar acceder sin autorización a sistemas, redes o datos de terceros.</li>
            <li>Reproducir, distribuir, modificar o crear obras derivadas de la plataforma sin autorización escrita.</li>
            <li>Usar la plataforma para fines distintos a los previstos en el contrato de servicio.</li>
            <li>Compartir credenciales de acceso con personas no autorizadas.</li>
          </ul>
        </section>

        <section id="clausula3">
          <h2>3. Integraciones, Shopify y canales de atención</h2>
          <p>El Servicio puede integrarse con plataformas de terceros, incluyendo Shopify, Meta/WhatsApp Business, CRMs, herramientas de catálogo, canales sociales y otros sistemas habilitados por el Cliente. El alcance de cada integración dependerá del plan contratado, los permisos otorgados por el Cliente y las funcionalidades activadas dentro de la plataforma.</p>
          <p>Cuando el Cliente utiliza Vortia Agent en Shopify, Vortia puede acceder a información de la tienda, catálogo, productos, inventario, contenido, políticas, mercados, descuentos, clientes, pedidos, conversaciones y métricas en la medida necesaria para operar el asistente, sincronizar conocimiento, responder consultas, mostrar conversaciones, generar reportes y ejecutar acciones administrativas solicitadas por el Cliente.</p>
          <p>El Cliente declara contar con las autorizaciones, permisos y bases legales necesarias para conectar sus canales, tiendas, cuentas y sistemas externos con Vortia, y se obliga a cumplir las condiciones de uso aplicables a dichas plataformas.</p>
        </section>

        <section id="clausula4">
          <h2>4. Tratamiento de datos, privacidad y seguridad</h2>
          <p>Vortia tratará los datos personales y comerciales conforme a la Política de Privacidad publicada en <a href="/privacidaddatos">https://vortia.com.ar/privacidaddatos</a>, que integra estos Términos. En relación con los datos de clientes finales del Cliente, Vortia actúa principalmente como proveedor de servicios o encargado del tratamiento, procesando datos conforme a las instrucciones del Cliente y para prestar las funcionalidades contratadas.</p>
          <p>Vortia no vende datos personales ni los utiliza para entrenar asistentes asignados a otros Clientes. Los datos se emplean para operar el servicio, brindar soporte, mantener la seguridad, generar métricas, cumplir obligaciones legales y ejecutar instrucciones legítimas del Cliente.</p>
          <p>Vortia implementa medidas razonables de seguridad, incluyendo cifrado en tránsito, cifrado en reposo cuando aplique, controles de acceso, confidencialidad del personal, backups gestionados por proveedores de infraestructura y procedimientos de respuesta ante incidentes.</p>
        </section>

        <section id="clausula5">
          <h2>5. Inteligencia artificial y acciones solicitadas por el Cliente</h2>
          <p>Las respuestas generadas por los asistentes de Vortia se basan en la información disponible, la configuración del Cliente, los datos sincronizados desde sus sistemas y las instrucciones provistas por el Cliente o sus usuarios autorizados. El Cliente es responsable de revisar la configuración del asistente, mantener actualizada la información de su negocio y supervisar el uso que sus usuarios hagan de la plataforma.</p>
          <p>Cuando el Servicio permita ejecutar acciones administrativas, como crear o actualizar clientes, productos, descuentos, inventario u otros recursos, dichas acciones se realizarán únicamente a partir de instrucciones del Cliente o de usuarios autorizados dentro de la plataforma, y podrán quedar registradas para fines de auditoría, soporte, seguridad y trazabilidad.</p>
        </section>

        <section id="clausula6">
          <h2>6. Proveedores tecnológicos y servicios de terceros</h2>
          <p>Para prestar el Servicio, Vortia puede utilizar proveedores tecnológicos tales como Shopify, MongoDB Atlas, Render, OpenAI, Qdrant, Meta/WhatsApp Business y otros proveedores de infraestructura, procesamiento, almacenamiento, mensajería, análisis o soporte. Dichos proveedores procesan datos en la medida necesaria para prestar funcionalidades contratadas y bajo sus propias condiciones de servicio, seguridad y privacidad.</p>
          <p>Vortia procurará seleccionar proveedores con estándares de seguridad adecuados, limitar el acceso a los datos necesarios para cada finalidad y mantener medidas razonables para proteger la confidencialidad, integridad y disponibilidad del Servicio.</p>
        </section>

        <section id="clausula7">
          <h2>7. Propiedad intelectual</h2>
          <p>Todos los derechos de propiedad intelectual sobre la plataforma Vortia Inbox / Vortia Agent, incluyendo su código fuente, algoritmos, modelos de IA base, interfaces, marcas, diseños y documentación, son de titularidad exclusiva de Vortia o de sus licenciantes.</p>
          <p>Este contrato no transfiere al Cliente ningún derecho de propiedad intelectual sobre la plataforma. Se concede únicamente una licencia de uso no exclusiva, intransferible, limitada y revocable, circunscripta al objeto y vigencia del servicio contratado.</p>
          <p>Los datos, contenidos y materiales que el Cliente incorpore a la plataforma para la configuración del asistente son de titularidad del Cliente. Vortia los procesa únicamente en los términos establecidos en estos Términos.</p>
        </section>

        <section id="clausula8">
          <h2>8. Limitación de responsabilidad</h2>
          <p>En la máxima medida permitida por la legislación argentina, la responsabilidad total de Vortia frente al Cliente por cualquier reclamo derivado del uso de la plataforma se limita al monto abonado por el Cliente en concepto de suscripción durante los tres (3) meses calendario anteriores al evento que origine el reclamo.</p>
          <p>Vortia no asumirá responsabilidad por:</p>
          <ul>
            <li>Daños indirectos, incidentales, especiales, punitivos o consecuenciales.</li>
            <li>Pérdida de datos, negocios, ingresos o beneficios esperados.</li>
            <li>Interrupciones atribuibles a fuerza mayor, caso fortuito o fallas de terceros.</li>
            <li>Uso indebido o no autorizado de la plataforma por parte del Cliente o de terceros.</li>
            <li>Inexactitudes en respuestas generadas por IA derivadas de configuraciones o contenidos aportados por el Cliente.</li>
          </ul>
        </section>

        <section id="clausula9">
          <h2>9. Planes, precios y condiciones económicas</h2>
          <p>Los planes de servicio, precios, condiciones de pago y facturación se detallan en la propuesta comercial o contrato particular suscripto entre las partes, que integra estos Términos y Condiciones.</p>
          <p>En caso de divergencia entre ambos instrumentos, prevalecerá lo estipulado en el contrato particular. Vortia podrá ajustar los precios notificando al Cliente con una antelación mínima de treinta (30) días corridos. La continuidad en el uso del servicio implicará la aceptación de los nuevos valores.</p>
        </section>

        <section id="clausula10">
          <h2>10. Vigencia y rescisión</h2>
          <h3>10.1 Vigencia</h3>
          <p>Este contrato entra en vigor desde la aceptación de los presentes Términos y Condiciones y permanece vigente durante el plazo establecido en el plan contratado, renovándose automáticamente por períodos iguales salvo notificación en contrario con al menos quince (15) días de anticipación al vencimiento del período en curso.</p>
          <h3>10.2 Rescisión por el Cliente</h3>
          <p>El Cliente podrá rescindir el contrato en cualquier momento mediante notificación escrita al correo de contacto de Vortia. La rescisión tendrá efecto al finalizar el período de facturación en curso, sin derecho a reembolso proporcional, salvo incumplimiento grave imputable a Vortia.</p>
          <h3>10.3 Rescisión por Vortia</h3>
          <p>Vortia podrá rescindir el contrato con efecto inmediato en los siguientes supuestos:</p>
          <ul>
            <li>Incumplimiento grave o reiterado de estos Términos y Condiciones por parte del Cliente.</li>
            <li>Uso de la plataforma para actividades ilícitas, fraudulentas o que vulneren derechos de terceros.</li>
            <li>Falta de pago de dos (2) o más períodos consecutivos.</li>
            <li>Requerimiento de autoridad competente o cumplimiento de disposiciones legales.</li>
          </ul>
          <h3>10.4 Efectos de la terminación</h3>
          <p>Una vez finalizado el contrato, el acceso del Cliente a la plataforma quedará suspendido. Vortia pondrá a disposición una exportación de los datos por un plazo de treinta (30) días corridos desde la terminación. Cumplido ese plazo, los datos podrán ser eliminados conforme a la política de retención vigente.</p>
        </section>

        <section id="clausula11">
          <h2>11. Modificaciones a los Términos y Condiciones</h2>
          <p>Vortia se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán notificadas al Cliente por correo electrónico y/o mediante publicación en https://vortia.com.ar con una anticipación mínima de quince (15) días corridos a su entrada en vigencia.</p>
          <p>Si el Cliente no estuviera de acuerdo con las modificaciones, podrá rescindir el contrato conforme al procedimiento previsto en la cláusula de rescisión, antes de la entrada en vigencia de los nuevos términos. La continuación en el uso del servicio implicará la aceptación tácita de las modificaciones.</p>
        </section>

        <section id="clausula12">
          <h2>12. Ley aplicable y jurisdicción</h2>
          <p>Estos Términos y Condiciones se rigen e interpretan exclusivamente conforme a la legislación vigente en la República Argentina, incluyendo la Ley N.° 25.326 de Protección de Datos Personales, el Código Civil y Comercial de la Nación y demás normas complementarias aplicables.</p>
          <p>Para toda controversia derivada de estos Términos o de la relación contractual entre las partes, estas se someten a la jurisdicción de los tribunales ordinarios competentes de la ciudad de San Francisco, Córdoba, República Argentina, con renuncia expresa a cualquier otro fuero o jurisdicción.</p>
        </section>

        <section id="clausula13">
          <h2>13. Disposiciones generales</h2>
          <h3>13.1 Integralidad del acuerdo</h3>
          <p>Estos Términos y Condiciones, junto con la Política de Privacidad de Vortia y el contrato particular de servicio, constituyen el acuerdo completo entre Vortia y el Cliente respecto del objeto aquí regulado.</p>
          <h3>13.2 Independencia de cláusulas</h3>
          <p>Si alguna disposición fuera declarada inválida, ilegal o inaplicable por autoridad competente, las restantes mantendrán plena vigencia y efecto.</p>
          <h3>13.3 No renuncia</h3>
          <p>La omisión o demora de Vortia en ejercer un derecho o recurso previsto en estos Términos no implicará renuncia al mismo.</p>
          <h3>13.4 Contacto</h3>
          <p>Para consultas, notificaciones contractuales o comunicaciones relacionadas con estos Términos y Condiciones, el Cliente podrá contactarse con VORTIA a través de:</p>
          <ul>
            <li><strong>Correo electrónico:</strong> contacto@vortia.com.ar</li>
            <li><strong>Sitio web:</strong> https://vortia.com.ar</li>
            <li><strong>Ámbito territorial:</strong> República Argentina</li>
          </ul>
        </section>
      </div>
    </article>
  )
}
