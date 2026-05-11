// 1. BASE DE DATOS MASIVA DE EMOJIS
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
    { char: "😉", tags: "guiño ojo", cat: "caras" },
    { char: "😊", tags: "sonrisa mejillas", cat: "caras" },
    { char: "😇", tags: "angel inocente", cat: "caras" },
    { char: "🥰", tags: "amor corazones enamorado", cat: "caras" },
    { char: "😍", tags: "ojos corazon amor", cat: "caras" },
    { char: "🤩", tags: "estrellas ojos", cat: "caras" },
    { char: "😘", tags: "beso corazon", cat: "caras" },
    { char: "😋", tags: "lengua comida delicioso", cat: "caras" },
    { char: "🤑", tags: "dinero lengua ojos", cat: "caras" },
    { char: "🤔", tags: "pensar duda", cat: "caras" },
    { char: "🤫", tags: "silencio shh", cat: "caras" },
    { char: "😎", tags: "gafas sol genial cool", cat: "caras" },
    { char: "🥳", tags: "fiesta celebracion", cat: "caras" },
    { char: "🤯", tags: "cabeza explosion mente", cat: "caras" },
    { char: "🥺", tags: "por favor ojitos", cat: "caras" },
    { char: "😱", tags: "grito susto wow", cat: "caras" },
    { char: "😭", tags: "llanto fuerte lloro", cat: "caras" },
    { char: "😡", tags: "rabia rojo enfadado", cat: "caras" },
    { char: "💀", tags: "calavera muerte muerto risa", cat: "caras" },

    // --- CATEGORÍA: VENTAS Y NEGOCIOS (ventas) ---
    { char: "💰", tags: "dinero bolsa ventas cash", cat: "ventas" },
    { char: "💵", tags: "billete dolar dinero", cat: "ventas" },
    { char: "💹", tags: "grafica subir mercado", cat: "ventas" },
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
    { char: "🤝", tags: "trato acuerdo manos", cat: "ventas" },
    { char: "💡", tags: "idea luz brillante", cat: "ventas" },
    { char: "💻", tags: "laptop pc trabajo", cat: "ventas" },
    { char: "📱", tags: "movil celular whatsapp contacto", cat: "ventas" },
    { char: "📦", tags: "paquete envio entrega", cat: "ventas" },
    { char: "🚚", tags: "camion transporte", cat: "ventas" },
    { char: "✅", tags: "check verificado ok confirmado", cat: "ventas" },
    { char: "⭐", tags: "estrella rating favorito", cat: "ventas" },
    { char: "🔜", tags: "proximamente pronto", cat: "ventas" },
    { char: "🆕", tags: "nuevo new", cat: "ventas" },
    { char: "📍", tags: "ubicacion mapa lugar tienda", cat: "ventas" },
    { char: "⚠️", tags: "atencion advertencia cuidado", cat: "ventas" },
    { char: "🔗", tags: "link enlace conexion", cat: "ventas" },

    // --- CATEGORÍA: POPULARES / TENDENCIAS (fuego) ---
    { char: "🔥", tags: "fuego popular tendencia hot", cat: "fuego" },
    { char: "✨", tags: "brillos magia estrellas sparkle", cat: "fuego" },
    { char: "🚀", tags: "cohete despegar crecer marketing", cat: "fuego" },
    { char: "💯", tags: "cien perfecto excelente", cat: "fuego" },
    { char: "💥", tags: "boom explosion impacto", cat: "fuego" },
    { char: "⚡", tags: "rayo trueno energia rapido", cat: "fuego" },
    { char: "🌈", tags: "arcoiris color", cat: "fuego" },
    { char: "👑", tags: "corona rey reina", cat: "fuego" },
    { char: "🎉", tags: "celebracion fiesta", cat: "fuego" },
    { char: "🎊", tags: "confeti", cat: "fuego" },
    { char: "🌊", tags: "ola mar agua", cat: "fuego" },
    { char: "☀️", tags: "sol verano luz", cat: "fuego" },
    { char: "🎮", tags: "mando consola juego", cat: "fuego" },
    { char: "🤖", tags: "robot bot ia", cat: "fuego" }
];
// 2. ELEMENTOS DEL DOM
const grid = document.getElementById('emojiGrid');
const searchInput = document.getElementById('searchInput');
const composer = document.getElementById('emojiComposer');
const charCounter = document.getElementById('charCounter');
const btnCopyAll = document.getElementById('btnCopyAll');
const btnClear = document.getElementById('btnClear');
const toast = document.getElementById('toast');

// 3. BUSCADOR INTELIGENTE (MEJORA 1: Sin tildes y flexible)
function renderEmojis(filter = "", category = "todos") {
    grid.innerHTML = "";
    
    // Función interna para quitar tildes y normalizar texto
    const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const searchFilter = normalize(filter.toLowerCase());

    const filtered = emojiData.filter(item => {
        const itemTags = normalize(item.tags.toLowerCase());
        const matchesSearch = itemTags.includes(searchFilter);
        const matchesCat = category === "todos" || item.cat === category;
        return matchesSearch && matchesCat;
    });

    filtered.forEach(emoji => {
        const div = document.createElement('div');
        div.className = 'emoji-item';
        div.textContent = emoji.char;
        div.onclick = () => addEmojiToComposer(emoji.char);
        grid.appendChild(div);
    });
}

// 4. LÓGICA DE EDICIÓN INDIVIDUAL (MEJORA 2)
// Escuchamos cuando el usuario borra o escribe manualmente en la barra
composer.addEventListener('input', () => {
    updateCounter();
});

function addEmojiToComposer(char) {
    composer.value += char;
    updateCounter();
    
    // Feedback visual
    composer.style.borderColor = "var(--primary)";
    setTimeout(() => composer.style.borderColor = "#444", 200);
}

function updateCounter() {
    // Contamos visualmente (soporta emojis complejos como 1 solo caracter)
    const count = [...composer.value].length;
    charCounter.textContent = count;
}

// 5. ACCIONES
btnCopyAll.onclick = () => {
    if (composer.value.length > 0) {
        navigator.clipboard.writeText(composer.value).then(() => {
            showToast("¡Combo copiado!");
        });
    } else {
        showToast("Selecciona algunos emojis primero");
    }
};

btnClear.onclick = () => {
    composer.value = "";
    updateCounter();
};

// 6. UTILIDADES
function filterCategory(cat) {
    renderEmojis(searchInput.value, cat);
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2000);
}

// Listeners
searchInput.addEventListener('input', (e) => {
    renderEmojis(e.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
    renderEmojis();
});
