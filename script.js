const emojiData = [
    { char: "🔥", tags: "fuego popular hot", cat: "fuego" },
    { char: "✨", tags: "brillos estrellas magia", cat: "fuego" },
    { char: "✅", tags: "check verificado ok", cat: "ventas" },
    { char: "🚀", tags: "cohete despegar", cat: "fuego" },
    { char: "😂", tags: "risa feliz jaja", cat: "caras" },
    { char: "😍", tags: "amor corazon enamorado", cat: "caras" },
    { char: "💰", tags: "dinero bolsa ventas", cat: "ventas" },
    { char: "🛍️", tags: "compras bolsa tienda", cat: "ventas" },
    { char: "⭐", tags: "estrella favorito", cat: "fuego" },
    { char: "📱", tags: "celular movil iphone", cat: "ventas" },
    { char: "🎁", tags: "regalo sorpresa", cat: "ventas" },
    { char: "📍", tags: "ubicacion mapa", cat: "ventas" }
];

const grid = document.getElementById('emojiGrid');
const searchInput = document.getElementById('searchInput');
const toast = document.getElementById('toast');

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
        div.onclick = () => copyEmoji(emoji.char);
        grid.appendChild(div);
    });
}

function copyEmoji(char) {
    navigator.clipboard.writeText(char);
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2000);
}

function filterCategory(cat) {
    renderEmojis(searchInput.value, cat);
}

searchInput.addEventListener('input', (e) => {
    renderEmojis(e.target.value);
});

// Inicio por defecto
renderEmojis();
