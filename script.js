// Base de datos de emojis (La ampliaremos más adelante)
const emojiData = [
    // --- CATEGORÍA: CARAS Y PERSONAS (caras) ---
    { char: "😀", tags: "cara feliz sonrisa alegre", cat: "caras" },
    { char: "😃", tags: "cara feliz ojos abiertos", cat: "caras" },
    { char: "😄", tags: "cara risa ojos cerrados", cat: "caras" },
    { char: "😁", tags: "cara radiante dientes", cat: "caras" },
    { char: "😆", tags: "cara carcajada", cat: "caras" },
    { char: "😅", tags: "cara sudor risa", cat: "caras" },
    { char: "🤣", tags: "risa suelo rotfl", cat: "caras" },
    { char: "😂", tags: "risa lagrimas joy", cat: "caras" },
    { char: "🙂", tags: "cara sonrisa leve", cat: "caras" },
    { char: "🙃", tags: "cara al reves", cat: "caras" },
    { char: "😉", tags: "guiño ojo", cat: "caras" },
    { char: "😊", tags: "sonrisa mejillas", cat: "caras" },
    { char: "😇", tags: "angel inocente", cat: "caras" },
    { char: "🥰", tags: "amor corazones enamorado", cat: "caras" },
    { char: "😍", tags: "ojos corazon amor", cat: "caras" },
    { char: "🤩", tags: "estrellas ojos", cat: "caras" },
    { char: "😘", tags: "beso corazon", cat: "caras" },
    { char: "😗", tags: "beso", cat: "caras" },
    { char: "😚", tags: "beso ojos cerrados", cat: "caras" },
    { char: "😋", tags: "lengua comida delicioso", cat: "caras" },
    { char: "😛", tags: "lengua fuera", cat: "caras" },
    { char: "😜", tags: "guiño lengua fuera", cat: "caras" },
    { char: "🤪", tags: "cara loca", cat: "caras" },
    { char: "😝", tags: "lengua ojos cerrados", cat: "caras" },
    { char: "🤑", tags: "dinero lengua ojos", cat: "caras" },
    { char: "🤗", tags: "abrazo manos", cat: "caras" },
    { char: "🤭", tags: "mano boca secreto", cat: "caras" },
    { char: "🤫", tags: "silencio shh", cat: "caras" },
    { char: "🤔", tags: "pensar duda", cat: "caras" },
    { char: "🤐", tags: "boca cremallera", cat: "caras" },
    { char: "🤨", tags: "ceja levantada", cat: "caras" },
    { char: "😐", tags: "neutral serio", cat: "caras" },
    { char: "😑", tags: "sin expresion", cat: "caras" },
    { char: "😶", tags: "sin boca", cat: "caras" },
    { char: "😏", tags: "picaro", cat: "caras" },
    { char: "😒", tags: "molesto", cat: "caras" },
    { char: "🙄", tags: "ojos arriba", cat: "caras" },
    { char: "😬", tags: "mueca", cat: "caras" },
    { char: "🤥", tags: "pinocho mentira", cat: "caras" },
    { char: "😌", tags: "alivio", cat: "caras" },
    { char: "😔", tags: "triste", cat: "caras" },
    { char: "😪", tags: "sueño", cat: "caras" },
    { char: "🤤", tags: "baba delicioso", cat: "caras" },
    { char: "😴", tags: "dormir", cat: "caras" },
    { char: "😷", tags: "mascarilla enfermo", cat: "caras" },
    { char: "🤒", tags: "termometro fiebre", cat: "caras" },
    { char: "🤕", tags: "vendaje herido", cat: "caras" },
    { char: "🤢", tags: "asco vomito verde", cat: "caras" },
    { char: "🤮", tags: "vomito", cat: "caras" },
    { char: "🤧", tags: "estornudo", cat: "caras" },
    { char: "🥵", tags: "calor rojo", cat: "caras" },
    { char: "🥶", tags: "frio azul", cat: "caras" },
    { char: "🥴", tags: "mareado", cat: "caras" },
    { char: "😵", tags: "muerto mareado", cat: "caras" },
    { char: "🤯", tags: "cabeza explosion mente", cat: "caras" },
    { char: "🤠", tags: "vaquero sombrero", cat: "caras" },
    { char: "🥳", tags: "fiesta", cat: "caras" },
    { char: "😎", tags: "gafas sol genial cool", cat: "caras" },
    { char: "🤓", tags: "nerd empollon", cat: "caras" },
    { char: "🧐", tags: "monoculo", cat: "caras" },
    { char: "😕", tags: "confundido", cat: "caras" },
    { char: "😟", tags: "preocupado", cat: "caras" },
    { char: "🙁", tags: "triste leve", cat: "caras" },
    { char: "😮", tags: "asombrado boca abierta", cat: "caras" },
    { char: "😯", tags: "sorpresa", cat: "caras" },
    { char: "😲", tags: "asombro total", cat: "caras" },
    { char: "😳", tags: "sonrojado", cat: "caras" },
    { char: "🥺", tags: "por favor ojitos", cat: "caras" },
    { char: "😦", tags: "angustia", cat: "caras" },
    { char: "😧", tags: "dolor", cat: "caras" },
    { char: "😨", tags: "miedo", cat: "caras" },
    { char: "😰", tags: "ansiedad sudor", cat: "caras" },
    { char: "😥", tags: "triste sudor", cat: "caras" },
    { char: "😢", tags: "lloro lagrima", cat: "caras" },
    { char: "😭", tags: "llanto fuerte", cat: "caras" },
    { char: "😱", tags: "grito susto", cat: "caras" },
    { char: "😖", tags: "frustrado", cat: "caras" },
    { char: "😣", tags: "sufrimiento", cat: "caras" },
    { char: "😞", tags: "decepcion", cat: "caras" },
    { char: "😓", tags: "tristeza sudor", cat: "caras" },
    { char: "😩", tags: "agotado", cat: "caras" },
    { char: "😫", tags: "cansado", cat: "caras" },
    { char: "🥱", tags: "bostezo", cat: "caras" },
    { char: "😤", tags: "triunfo enfado", cat: "caras" },
    { char: "😡", tags: "rabia rojo", cat: "caras" },
    { char: "😠", tags: "enfadado", cat: "caras" },
    { char: "🤬", tags: "insulto censura", cat: "caras" },
    { char: "😈", tags: "diablo sonrisa", cat: "caras" },
    { char: "👿", tags: "diablo enfadado", cat: "caras" },
    { char: "💀", tags: "calavera muerte muerto", cat: "caras" },
    { char: "☠️", tags: "pirata muerte", cat: "caras" },

    // --- CATEGORÍA: VENTAS Y NEGOCIOS (ventas) ---
    { char: "💰", tags: "dinero bolsa ventas cash", cat: "ventas" },
    { char: "💵", tags: "billete dolar dinero", cat: "ventas" },
    { char: "💸", tags: "dinero volando", cat: "ventas" },
    { char: "💹", tags: "grafica subir mercado", cat: "ventas" },
    { char: "📊", tags: "grafica barras estadistica", cat: "ventas" },
    { char: "📈", tags: "crecimiento tendencia", cat: "ventas" },
    { char: "🛍️", tags: "compras bolsa tienda shop", cat: "ventas" },
    { char: "🛒", tags: "carrito compra", cat: "ventas" },
    { char: "🏷️", tags: "etiqueta oferta precio", cat: "ventas" },
    { char: "💳", tags: "tarjeta credito pago", cat: "ventas" },
    { char: "💎", tags: "diamante joya premium", cat: "ventas" },
    { char: "🎁", tags: "regalo sorpresa bono", cat: "ventas" },
    { char: "📢", tags: "anuncio megafono atencion", cat: "ventas" },
    { char: "📣", tags: "altavoz noticia", cat: "ventas" },
    { char: "🔔", tags: "campana notificacion", cat: "ventas" },
    { char: "🎯", tags: "objetivo meta blanco", cat: "ventas" },
    { char: "🏆", tags: "trofeo ganador premio", cat: "ventas" },
    { char: "🏅", tags: "medalla exito", cat: "ventas" },
    { char: "🤝", tags: "trato acuerdo manos", cat: "ventas" },
    { char: "💡", tags: "idea luz brillante", cat: "ventas" },
    { char: "💻", tags: "laptop pc trabajo", cat: "ventas" },
    { char: "📱", tags: "movil celular iphone smartphone", cat: "ventas" },
    { char: "☎️", tags: "telefono llamada", cat: "ventas" },
    { char: "📧", tags: "email correo contacto", cat: "ventas" },
    { char: "📦", tags: "paquete envio entrega", cat: "ventas" },
    { char: "🚚", tags: "camion transporte", cat: "ventas" },
    { char: "🏢", tags: "oficina edificio empresa", cat: "ventas" },
    { char: "🏪", tags: "tienda negocio", cat: "ventas" },
    { char: "✅", tags: "check verificado ok confirmado", cat: "ventas" },
    { char: "⭐", tags: "estrella rating favorito", cat: "ventas" },
    { char: "🌟", tags: "brillante especial", cat: "ventas" },
    { char: "🔥", tags: "fuego hot tendencia", cat: "ventas" },
    { char: "🚀", tags: "cohete despegar crecer", cat: "ventas" },
    { char: "🔜", tags: "proximamente pronto", cat: "ventas" },
    { char: "🆕", tags: "nuevo new", cat: "ventas" },
    { char: "🔝", tags: "top arriba mejor", cat: "ventas" },
    { char: "📍", tags: "ubicacion mapa lugar", cat: "ventas" },
    { char: "📌", tags: "pin fijar importante", cat: "ventas" },
    { char: "⚠️", tags: "atencion advertencia cuidado", cat: "ventas" },
    { char: "🛑", tags: "parar stop", cat: "ventas" },
    { char: "⏳", tags: "tiempo arena espera", cat: "ventas" },
    { char: "⏰", tags: "reloj alarma", cat: "ventas" },
    { char: "📅", tags: "calendario fecha", cat: "ventas" },
    { char: "🔗", tags: "link enlace conexion", cat: "ventas" },
    { char: "🔒", tags: "seguro candado bloqueado", cat: "ventas" },
    { char: "🔓", tags: "abierto desbloqueado", cat: "ventas" },
    { char: "🛠️", tags: "herramientas soporte", cat: "ventas" },
    { char: "⚙️", tags: "ajustes configuracion", cat: "ventas" },

    // --- CATEGORÍA: POPULARES / FUEGO (fuego) ---
    { char: "🔥", tags: "fuego popular tendencia hot", cat: "fuego" },
    { char: "✨", tags: "brillos magia estrellas sparkle", cat: "fuego" },
    { char: "🚀", tags: "cohete despegar crecer", cat: "fuego" },
    { char: "💯", tags: "cien perfecto excelente", cat: "fuego" },
    { char: "💥", tags: "boom explosion impacto", cat: "fuego" },
    { char: "⚡", tags: "rayo trueno energia rapido", cat: "fuego" },
    { char: "🌈", tags: "arcoiris color", cat: "fuego" },
    { char: "⭐", tags: "estrella", cat: "fuego" },
    { char: "🌟", tags: "brillante", cat: "fuego" },
    { char: "💫", tags: "mareo estrella volando", cat: "fuego" },
    { char: "💎", tags: "diamante premium", cat: "fuego" },
    { char: "👑", tags: "corona rey reina", cat: "fuego" },
    { char: "🧿", tags: "ojo turco suerte", cat: "fuego" },
    { char: "🍀", tags: "trebol suerte", cat: "fuego" },
    { char: "🎁", tags: "regalo sorpresa", cat: "fuego" },
    { char: "🎈", tags: "globo fiesta", cat: "fuego" },
    { char: "🎉", tags: "celebracion fiesta", cat: "fuego" },
    { char: "🎊", tags: "confeti", cat: "fuego" },
    { char: "🔥", tags: "fuego", cat: "fuego" },
    { char: "🌊", tags: "ola mar agua", cat: "fuego" },
    { char: "☀️", tags: "sol verano luz", cat: "fuego" },
    { char: "🌙", tags: "luna noche", cat: "fuego" },
    { char: "🪐", tags: "planeta saturno", cat: "fuego" },
    { char: "👽", tags: "alien marciano", cat: "fuego" },
    { char: "👾", tags: "monstruo pixel juego", cat: "fuego" },
    { char: "🎮", tags: "mando consola juego", cat: "fuego" },
    { char: "🦾", tags: "robot brazo", cat: "fuego" },
    { char: "🤖", tags: "robot bot", cat: "fuego" },

    // --- CATEGORÍA ADICIONAL: OBJETOS Y SIMBOLOS (ventas) ---
    // (Podemos reutilizar etiquetas de ventas para simplificar la interfaz profesional)
    { char: "📷", tags: "camara foto instagram", cat: "ventas" },
    { char: "🎥", tags: "video cine youtube", cat: "ventas" },
    { char: "🎙️", tags: "microfono podcast", cat: "ventas" },
    { char: "🎧", tags: "auriculares musica", cat: "ventas" },
    { char: "🎨", tags: "arte diseño pintura", cat: "ventas" },
    { char: "📚", tags: "libros lectura educacion", cat: "ventas" },
    { char: "💡", tags: "idea innovacion", cat: "ventas" },
    { char: "🔋", tags: "bateria carga", cat: "ventas" },
    { char: "🔌", tags: "enchufe conexion", cat: "ventas" },
    { char: "💻", tags: "ordenador pc mac", cat: "ventas" },
    { char: "⌨️", tags: "teclado", cat: "ventas" },
    { char: "🖱️", tags: "raton mouse", cat: "ventas" },
    { char: "🖨️", tags: "impresora", cat: "ventas" },
    { char: "✈️", tags: "avion viajar", cat: "ventas" },
    { char: "🌍", tags: "mundo tierra global", cat: "ventas" },
    { char: "🚗", tags: "coche auto", cat: "ventas" },
    { char: "🚲", tags: "bici bicicleta", cat: "ventas" },
    { char: "⚓", tags: "ancla", cat: "ventas" },
    { char: "🚥", tags: "semaforo", cat: "ventas" },
    { char: "🧱", tags: "ladrillo construccion", cat: "ventas" },
    { char: "🏗️", tags: "obra", cat: "ventas" }

    // NOTA: Se pueden añadir cientos más siguiendo este formato.

];

// Elementos del DOM
const grid = document.getElementById('emojiGrid');
const searchInput = document.getElementById('searchInput');
const composer = document.getElementById('emojiComposer');
const btnCopyAll = document.getElementById('btnCopyAll');
const btnClear = document.getElementById('btnClear');
const toast = document.getElementById('toast');

/**
 * Renderiza los emojis en el grid basándose en búsqueda y categoría
 */
function renderEmojis(filter = "", category = "todos") {
    grid.innerHTML = "";
    
    const filtered = emojiData.filter(item => {
        const matchesSearch = item.tags.toLowerCase().includes(filter.toLowerCase());
        const matchesCat = category === "todos" || item.cat === category;
        return matchesSearch && matchesCat;
    });

    filtered.forEach(emoji => {
        const div = document.createElement('div');
        div.className = 'emoji-item';
        div.textContent = emoji.char;
        div.title = emoji.tags; // Muestra info al pasar el mouse
        div.onclick = () => addEmojiToComposer(emoji.char);
        grid.appendChild(div);
    });
}

/**
 * Añade el emoji seleccionado a la barra de composición
 */
function addEmojiToComposer(char) {
    composer.value += char;
    // Efecto visual rápido en el composer para feedback
    composer.style.borderColor = "var(--primary)";
    setTimeout(() => composer.style.borderColor = "#444", 200);
}

/**
 * Copia el contenido del composer al portapapeles
 */
btnCopyAll.onclick = () => {
    if (composer.value.length > 0) {
        navigator.clipboard.writeText(composer.value).then(() => {
            showToast("¡Combo copiado al portapapeles!");
        });
    } else {
        showToast("Selecciona algunos emojis primero");
    }
};

/**
 * Limpia la barra de composición
 */
btnClear.onclick = () => {
    composer.value = "";
};

/**
 * Filtra por categoría al presionar los botones
 */
function filterCategory(cat) {
    renderEmojis(searchInput.value, cat);
}

/**
 * Muestra la notificación (Toast)
 */
function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2000);
}

/**
 * Listener para búsqueda en tiempo real
 */
searchInput.addEventListener('input', (e) => {
    renderEmojis(e.target.value);
});

// Carga inicial de la página
document.addEventListener('DOMContentLoaded', () => {
    renderEmojis();
});
