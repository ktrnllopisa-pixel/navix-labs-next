export async function POST(request) {
  try {
    const body = await request.json();

    const {
      nombre,
      empresa,
      ciudad,
      rubro,
      vehiculos,
      entregas,
      excel,
      telefono,
      problema,
    } = body;

    if (!nombre || !empresa || !ciudad || !vehiculos || !entregas) {
      return Response.json(
        {
          ok: false,
          message:
            "Faltan datos obligatorios: nombre, empresa, ciudad, vehículos y entregas.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "contacto@navixlabs.cl";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Navix Labs <contacto@navixlabs.cl>";

    if (!apiKey) {
      return Response.json(
        {
          ok: false,
          message: "El servicio de correo no está configurado.",
        },
        { status: 500 }
      );
    }

    const html = `
      <h2>Nueva solicitud de diagnóstico de rutas</h2>

      <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;font-family:Arial,sans-serif;">
        <tr><td><strong>Nombre</strong></td><td>${nombre}</td></tr>
        <tr><td><strong>Empresa</strong></td><td>${empresa}</td></tr>
        <tr><td><strong>Ciudad</strong></td><td>${ciudad}</td></tr>
        <tr><td><strong>Rubro</strong></td><td>${rubro || "No especificado"}</td></tr>
        <tr><td><strong>Vehículos</strong></td><td>${vehiculos}</td></tr>
        <tr><td><strong>Entregas diarias aproximadas</strong></td><td>${entregas}</td></tr>
        <tr><td><strong>¿Tiene direcciones en Excel?</strong></td><td>${excel || "No especificado"}</td></tr>
        <tr><td><strong>Teléfono / WhatsApp</strong></td><td>${telefono || "No especificado"}</td></tr>
        <tr><td><strong>Problema principal</strong></td><td>${problema || "No especificado"}</td></tr>
      </table>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `Nueva solicitud de rutas - ${empresa}`,
        html,
      }),
    });

    if (!response.ok) {
      return Response.json(
        {
          ok: false,
          message: "No se pudo enviar el correo. Intenta nuevamente.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      ok: true,
      message: "Solicitud enviada correctamente.",
    });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        message: "Error inesperado al enviar la solicitud.",
      },
      { status: 500 }
    );
  }
}
