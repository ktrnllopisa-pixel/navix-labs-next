export default function ContactForm() {
  return (
    <form
      className="contactForm"
      action="https://formsubmit.co/contacto@navixlabs.cl"
      method="POST"
    >
      <input
        type="hidden"
        name="_subject"
        value="Nueva solicitud de diagnóstico de rutas - Navix Labs"
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://navixlabs.cl/gracias" />
      <input
        type="text"
        name="_honey"
        className="hiddenInput"
        tabIndex="-1"
        autoComplete="off"
      />

      <div className="formGrid">
        <label>
          Nombre
          <input name="Nombre" type="text" placeholder="Tu nombre" required />
        </label>

        <label>
          Empresa
          <input
            name="Empresa"
            type="text"
            placeholder="Nombre de la empresa"
            required
          />
        </label>

        <label>
          Ciudad
          <input
            name="Ciudad"
            type="text"
            placeholder="Ej: Antofagasta"
            required
          />
        </label>

        <label>
          Rubro
          <input
            name="Rubro"
            type="text"
            placeholder="Ej: reparto, gas, agua, fletes"
          />
        </label>

        <label>
          Cantidad de vehículos
          <input
            name="Cantidad de vehículos"
            type="text"
            placeholder="Ej: 2, 4, 8"
            required
          />
        </label>

        <label>
          Entregas diarias aproximadas
          <input
            name="Cantidad aproximada de entregas diarias"
            type="text"
            placeholder="Ej: 20 entregas diarias"
            required
          />
        </label>

        <label>
          ¿Tiene direcciones en Excel?
          <select name="¿Tiene direcciones en Excel?" defaultValue="">
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
            name="Teléfono o WhatsApp"
            type="text"
            placeholder="Ej: +56 9..."
          />
        </label>
      </div>

      <label>
        Principal problema actual
        <textarea
          name="Problema principal"
          rows="6"
          placeholder="Ej: mis choferes se cruzan, perdemos mucho tiempo, no sabemos cuántos km hacemos, las rutas se arman a mano..."
        />
      </label>

      <div className="formActions">
        <button className="btn btn-primary" type="submit">
          Enviar solicitud por formulario
        </button>
      </div>

      <p className="formNote">
        Este formulario no abre Outlook ni Gmail. La solicitud se envía
        directamente a Navix Labs.
      </p>
    </form>
  );
}
