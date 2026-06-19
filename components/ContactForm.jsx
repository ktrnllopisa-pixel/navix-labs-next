"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      nombre: String(formData.get("nombre") || "").trim(),
      empresa: String(formData.get("empresa") || "").trim(),
      ciudad: String(formData.get("ciudad") || "").trim(),
      rubro: String(formData.get("rubro") || "").trim(),
      vehiculos: String(formData.get("vehiculos") || "").trim(),
      entregas: String(formData.get("entregas") || "").trim(),
      excel: String(formData.get("excel") || "").trim(),
      telefono: String(formData.get("telefono") || "").trim(),
      problema: String(formData.get("problema") || "").trim(),
    };

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(result.message || "No se pudo enviar la solicitud.");
        return;
      }

      setStatus("success");
      setMessage("Solicitud enviada correctamente. Te contactaremos pronto.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage("No se pudo enviar la solicitud. Intenta nuevamente.");
    }
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <div className="formGrid">
        <label>
          Nombre
          <input name="nombre" type="text" placeholder="Tu nombre" required />
        </label>

        <label>
          Empresa
          <input
            name="empresa"
            type="text"
            placeholder="Nombre de la empresa"
            required
          />
        </label>

        <label>
          Ciudad
          <input
            name="ciudad"
            type="text"
            placeholder="Ej: Antofagasta"
            required
          />
        </label>

        <label>
          Rubro
          <input
            name="rubro"
            type="text"
            placeholder="Ej: reparto, gas, agua, fletes"
          />
        </label>

        <label>
          Cantidad de vehículos
          <input
            name="vehiculos"
            type="text"
            placeholder="Ej: 2, 4, 8"
            required
          />
        </label>

        <label>
          Entregas diarias aproximadas
          <input
            name="entregas"
            type="text"
            placeholder="Ej: 20 entregas diarias"
            required
          />
        </label>

        <label>
          ¿Tiene direcciones en Excel?
          <select name="excel" defaultValue="">
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
            <option value="No estoy seguro">No estoy seguro</option>
          </select>
        </label>

        <label>
          Teléfono o WhatsApp
          <input
            name="telefono"
            type="text"
            placeholder="Ej: +56 9..."
          />
        </label>
      </div>

      <label>
        Principal problema actual
        <textarea
          name="problema"
          rows="6"
          placeholder="Ej: mis choferes se cruzan, perdemos mucho tiempo, no sabemos cuántos km hacemos, las rutas se arman a mano..."
        />
      </label>

      {message && (
        <p className={status === "success" ? "formSuccess" : "formError"}>
          {message}
        </p>
      )}

      <div className="formActions">
        <button
          className="btn btn-primary"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Enviando..." : "Enviar solicitud"}
        </button>
      </div>

      <p className="formNote">
        La solicitud se envía directamente desde esta página. No se abrirá
        Outlook, Gmail ni una pantalla externa de confirmación.
      </p>
    </form>
  );
}
