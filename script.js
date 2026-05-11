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
    { char: "🤖", tags: "robot bot ia", cat: "fuego" },

    // ANIMALES Y NATURALEZA
    { char: "🐶", tags: "perro animal mascota", cat: "animales" },
    { char: "🐱", tags: "gato animal miau", cat: "animales" },
    { char: "🦁", tags: "leon rey selva", cat: "animales" },
    { char: "🐯", tags: "tigre animal", cat: "animales" },
    { char: "🦒", tags: "jirafa alto", cat: "animales" },
    { char: "🐘", tags: "elefante grande", cat: "animales" },
    { char: "🐭", tags: "raton queso", cat: "animales" },
    { char: "🐹", tags: "hamster mascota", cat: "animales" },
    { char: "🐰", tags: "conejo pascua", cat: "animales" },
    { char: "🦊", tags: "zorro astuto", cat: "animales" },
    { char: "🐻", tags: "oso peluche", cat: "animales" },
    { char: "🐼", tags: "panda china", cat: "animales" },
    { char: "🐨", tags: "koala australia", cat: "animales" },
    { char: "🐷", tags: "cerdo puerco", cat: "animales" },
    { char: "🐸", tags: "rana sapo", cat: "animales" },
    { char: "🐵", tags: "mono simio", cat: "animales" },
    { char: "🐔", tags: "pollo gallina", cat: "animales" },
    { char: "🐧", tags: "pinguino frio", cat: "animales" },
    { char: "🐦", tags: "pajaro ave", cat: "animales" },
    { char: "🐤", tags: "pollito amarillo", cat: "animales" },
    { char: "🦆", tags: "pato", cat: "animales" },
    { char: "🦅", tags: "aguila usa", cat: "animales" },
    { char: "🦉", tags: "buho noche", cat: "animales" },
    { char: "🦇", tags: "murcielago batman", cat: "animales" },
    { char: "🐺", tags: "lobo luna", cat: "animales" },
    { char: "🐗", tags: "jabali", cat: "animales" },
    { char: "🐴", tags: "caballo", cat: "animales" },
    { char: "🦄", tags: "unicornio magia", cat: "animales" },
    { char: "🐝", tags: "abeja miel", cat: "animales" },
    { char: "🐛", tags: "gusano insecto", cat: "animales" },
    { char: "🦋", tags: "mariposa", cat: "animales" },
    { char: "🐌", tags: "caracol lento", cat: "animales" },
    { char: "🐞", tags: "mariquita", cat: "animales" },
    { char: "🐜", tags: "hormiga", cat: "animales" },
    { char: "🦟", tags: "mosquito", cat: "animales" },
    { char: "🦗", tags: "grillo", cat: "animales" },
    { char: "🕷️", tags: "araña", cat: "animales" },
    { char: "🦂", tags: "alacran", cat: "animales" },
    { char: "🐢", tags: "tortuga", cat: "animales" },
    { char: "🐍", tags: "serpiente", cat: "animales" },
    { char: "🦎", tags: "lagartija", cat: "animales" },
    { char: "🦖", tags: "dinosaurio t-rex", cat: "animales" },
    { char: "🐙", tags: "pulpo", cat: "animales" },
    { char: "🦑", tags: "calamar", cat: "animales" },
    { char: "🦐", tags: "camaron", cat: "animales" },
    { char: "🦀", tags: "cangrejo", cat: "animales" },
    { char: "🐡", tags: "pez globo", cat: "animales" },
    { char: "🐠", tags: "pez tropical", cat: "animales" },
    { char: "🐟", tags: "pez pescado", cat: "animales" },
    { char: "🐬", tags: "delfin", cat: "animales" },
    { char: "🐳", tags: "ballena", cat: "animales" },
    { char: "🐋", tags: "ballena azul", cat: "animales" },
    { char: "🦈", tags: "tiburon jason", cat: "animales" },
    { char: "🐊", tags: "cocodrilo", cat: "animales" },
    { char: "🐅", tags: "tigre", cat: "animales" },
    { char: "🐆", tags: "leopardo", cat: "animales" },
    { char: "cebra", char: "🦓", tags: "cebra", cat: "animales" },
    { char: "🦍", tags: "gorila", cat: "animales" },
    { char: "🦧", tags: "orangutan", cat: "animales" },
    { char: "🐘", tags: "elefante", cat: "animales" },
    { char: "🦛", tags: "hipopotamo", cat: "animales" },
    { char: "🦏", tags: "rinoceronte", cat: "animales" },
    { char: "🐪", tags: "camello", cat: "animales" },
    { char: "🐫", tags: "dromedario", cat: "animales" },
    { char: "🦒", tags: "jirafa", cat: "animales" },
    { char: "🦘", tags: "canguro", cat: "animales" },
    { char: "🐃", tags: "bufalo", cat: "animales" },
    { char: "🐂", tags: "buey", cat: "animales" },
    { char: "🐄", tags: "vaca", cat: "animales" },
    { char: "🐎", tags: "caballo", cat: "animales" },
    { char: "🐖", tags: "cerdo", cat: "animales" },
    { char: "🐏", tags: "carnero", cat: "animales" },
    { char: "🐑", tags: "oveja", cat: "animales" },
    { char: "🐐", tags: "cabra", cat: "animales" },
    { char: "🦌", tags: "ciervo", cat: "animales" },
    { char: "🐕", tags: "perro", cat: "animales" },
    { char: "🐩", tags: "caniche", cat: "animales" },
    { char: "🐈", tags: "gato", cat: "animales" },
    { char: "🐓", tags: "gallo", cat: "animales" },
    { char: "🦃", tags: "pavo", cat: "animales" },
    { char: "🕊️", tags: "paloma paz", cat: "animales" },
    { char: "🐇", tags: "conejo", cat: "animales" },
    { char: "🐁", tags: "raton", cat: "animales" },
    { char: "🐀", tags: "rata", cat: "animales" },
    { char: "🐿️", tags: "ardilla", cat: "animales" },
    { char: "🦔", tags: "erizo", cat: "animales" },
    { char: "🐾", tags: "huellas", cat: "animales" },
    { char: "🐉", tags: "dragon", cat: "animales" },
    { char: "🐲", tags: "dragon", cat: "animales" },
    { char: "🌵", tags: "cactus desierto", cat: "animales" },
    { char: "🎄", tags: "navidad arbol", cat: "animales" },
    { char: "🌲", tags: "pino arbol", cat: "animales" },
    { char: "🌳", tags: "arbol", cat: "animales" },
    { char: "🌴", tags: "palmera playa", cat: "animales" },
    { char: "🌱", tags: "planta brote", cat: "animales" },
    { char: "🌿", tags: "hierba", cat: "animales" },
    { char: "☘️", tags: "trebol", cat: "animales" },
    { char: "🍀", tags: "trebol suerte", cat: "animales" },
    { char: "🍃", tags: "hojas viento", cat: "animales" },
    { char: "🍂", tags: "hojas otoño", cat: "animales" },
    { char: "🍁", tags: "maple canada", cat: "animales" },
    { char: "🍄", tags: "hongo mario", cat: "animales" },
    { char: "🐚", tags: "concha mar", cat: "animales" },
    { char: "🌹", tags: "rosa flor amor", cat: "animales" },
    { char: "🥀", tags: "flor marchita", cat: "animales" },
    { char: "🌺", tags: "hibisco", cat: "animales" },
    { char: "🌻", tags: "girasol", cat: "animales" },
    { char: "🌼", tags: "flor blanca", cat: "animales" },
    { char: "🌷", tags: "tulipan", cat: "animales" },
    { char: "🌾", tags: "arroz planta", cat: "animales" },

    // COMIDAS Y BEBIDAS
    { char: "🍎", tags: "manzana fruta roja", cat: "comida" },
    { char: "🍐", tags: "pera fruta", cat: "comida" },
    { char: "🍊", tags: "naranja fruta", cat: "comida" },
    { char: "🍋", tags: "limon acido", cat: "comida" },
    { char: "🍌", tags: "banana platano", cat: "comida" },
    { char: "🍉", tags: "sandia fruta", cat: "comida" },
    { char: "🍇", tags: "uvas vino", cat: "comida" },
    { char: "🍓", tags: "fresa fruta", cat: "comida" },
    { char: "🍈", tags: "melon", cat: "comida" },
    { char: "🍒", tags: "cerezas fruta", cat: "comida" },
    { char: "🍑", tags: "durazno fruta", cat: "comida" },
    { char: "piña", char: "🍍", tags: "piña fruta", cat: "comida" },
    { char: "🥭", tags: "mango fruta", cat: "comida" },
    { char: "🥥", tags: "coco fruta", cat: "comida" },
    { char: "🥝", tags: "kiwi fruta", cat: "comida" },
    { char: "🍅", tags: "tomate verdura", cat: "comida" },
    { char: "🍆", tags: "berenjena verdura", cat: "comida" },
    { char: "🥑", tags: "aguacate palta", cat: "comida" },
    { char: "🥦", tags: "brocoli verdura", cat: "comida" },
    { char: "🥬", tags: "lechuga verdura", cat: "comida" },
    { char: "🥒", tags: "pepino verdura", cat: "comida" },
    { char: "🌽", tags: "maiz choclo", cat: "comida" },
    { char: "🥕", tags: "zanahoria verdura", cat: "comida" },
    { char: "🥔", tags: "papa patata", cat: "comida" },
    { char: "🥨", tags: "pretzel pan", cat: "comida" },
    { char: "🥖", tags: "pan frances", cat: "comida" },
    { char: "🍞", tags: "pan molde", cat: "comida" },
    { char: "🥐", tags: "cruasan pan", cat: "comida" },
    { char: "🥯", tags: "bagel pan", cat: "comida" },
    { char: "🥞", tags: "panqueque desayuno", cat: "comida" },
    { char: "🧇", tags: "waffle desayuno", cat: "comida" },
    { char: "🧀", tags: "queso raton", cat: "comida" },
    { char: "🍖", tags: "carne hueso", cat: "comida" },
    { char: "🍗", tags: "pollo pierna", cat: "comida" },
    { char: "🥩", tags: "carne filete", cat: "comida" },
    { char: "🥓", tags: "tocino bacon", cat: "comida" },
    { char: "🍔", tags: "hamburguesa fast food", cat: "comida" },
    { char: "🍟", tags: "papas fritas", cat: "comida" },
    { char: "🍕", tags: "pizza comida italiana", cat: "comida" },
    { char: "🌭", tags: "hot dog perro caliente", cat: "comida" },
    { char: "🥪", tags: "sandwich emparedado", cat: "comida" },
    { char: "🌮", tags: "taco mexicano", cat: "comida" },
    { char: "🌯", tags: "burrito mexicano", cat: "comida" },
    { char: "🍳", tags: "huevo frito", cat: "comida" },
    { char: "🍲", tags: "sopa comida", cat: "comida" },
    { char: "🥣", tags: "cereal tazon", cat: "comida" },
    { char: "🥗", tags: "ensalada saludable", cat: "comida" },
    { char: "🍿", tags: "palomitas cine", cat: "comida" },
    { char: "🧈", tags: "mantequilla", cat: "comida" },
    { char: "🧂", tags: "sal condimento", cat: "comida" },
    { char: "🥫", tags: "lata comida", cat: "comida" },
    { char: "🍱", tags: "bento japones", cat: "comida" },
    { char: "🍘", tags: "galleta arroz", cat: "comida" },
    { char: "🍙", tags: "onigiri arroz", cat: "comida" },
    { char: "🍚", tags: "arroz blanco", cat: "comida" },
    { char: "🍛", tags: "curry arroz", cat: "comida" },
    { char: "🍜", tags: "ramen fideos", cat: "comida" },
    { char: "🍝", tags: "espagueti fideos", cat: "comida" },
    { char: "🍠", tags: "camote asado", cat: "comida" },
    { char: "🍢", tags: "oden japones", cat: "comida" },
    { char: "🍣", tags: "sushi pescado", cat: "comida" },
    { char: "🍤", tags: "tempura camaron", cat: "comida" },
    { char: "🍥", tags: "naruto pescado", cat: "comida" },
    { char: "🥮", tags: "pastel luna", cat: "comida" },
    { char: "🍡", tags: "dango japones", cat: "comida" },
    { char: "🥟", tags: "gyoza empanada", cat: "comida" },
    { char: "🥠", tags: "galleta fortuna", cat: "comida" },
    { char: "🥡", tags: "comida llevar", cat: "comida" },
    { char: "🍦", tags: "helado cono", cat: "comida" },
    { char: "🍧", tags: "granizado helado", cat: "comida" },
    { char: "🍨", tags: "helado tazon", cat: "comida" },
    { char: "🍩", tags: "dona donut", cat: "comida" },
    { char: "🍪", tags: "galleta cookie", cat: "comida" },
    { char: "🎂", tags: "pastel cumpleaños", cat: "comida" },
    { char: "🍰", tags: "rebanada pastel", cat: "comida" },
    { char: "🧁", tags: "magdalena cupcake", cat: "comida" },
    { char: "🥧", tags: "pie tarta", cat: "comida" },
    { char: "🍫", tags: "chocolate dulce", cat: "comida" },
    { char: "🍬", tags: "caramelo dulce", cat: "comida" },
    { char: "🍭", tags: "paleta dulce", cat: "comida" },
    { char: "🍮", tags: "flan postre", cat: "comida" },
    { char: "🍯", tags: "miel oso", cat: "comida" },
    { char: "🍼", tags: "biberon bebe", cat: "comida" },
    { char: "🥛", tags: "leche vaso", cat: "comida" },
    { char: "☕", tags: "cafe mañana", cat: "comida" },
    { char: "🍵", tags: "te verde", cat: "comida" },
    { char: "🍶", tags: "sake japones", cat: "comida" },
    { char: "🍾", tags: "champaña botella", cat: "comida" },
    { char: "🍷", tags: "vino copa", cat: "comida" },
    { char: "🍸", tags: "coctel copa", cat: "comida" },
    { char: "🍹", tags: "jugo coctel", cat: "comida" },
    { char: "🍺", tags: "cerveza jarra", cat: "comida" },
    { char: "🍻", tags: "cervezas brindis", cat: "comida" },
    { char: "🥂", tags: "copas brindis", cat: "comida" },
    { char: "🥃", tags: "whisky vaso", cat: "comida" },
    { char: "🥤", tags: "soda vaso", cat: "comida" },
    { char: "🧃", tags: "jugo caja", cat: "comida" },
    { char: "🧉", tags: "mate bebida", cat: "comida" },
    { char: "🧊", tags: "hielo frio", cat: "comida" },
    { char: "🥢", tags: "palillos chinos", cat: "comida" },
    { char: "🍽️", tags: "plato cubiertos", cat: "comida" },
    { char: "🍴", tags: "tenedor cuchillo", cat: "comida" },
    { char: "🥄", tags: "cuchara", cat: "comida" },

    // VIAJES Y LUGARES
    { char: "🗺️", tags: "mapa mundo", cat: "viajes" },
    { char: "🗾", tags: "japon mapa", cat: "viajes" },
    { char: "🧭", tags: "brujula norte", cat: "viajes" },
    { char: "🏔️", tags: "montaña nieve", cat: "viajes" },
    { char: "⛰️", tags: "montaña", cat: "viajes" },
    { char: "🌋", tags: "volcan lava", cat: "viajes" },
    { char: "🗻", tags: "monte fuji", cat: "viajes" },
    { char: "🏕️", tags: "camping tienda", cat: "viajes" },
    { char: "🏖️", tags: "playa sol", cat: "viajes" },
    { char: "🏜️", tags: "desierto cactus", cat: "viajes" },
    { char: "🏝️", tags: "isla palmera", cat: "viajes" },
    { char: "🏞️", tags: "parque nacional", cat: "viajes" },
    { char: "🏟️", tags: "estadio futbol", cat: "viajes" },
    { char: "🏛️", tags: "edificio griego", cat: "viajes" },
    { char: "🏗️", tags: "obra construccion", cat: "viajes" },
    { char: "🧱", tags: "ladrillo pared", cat: "viajes" },
    { char: "🏘️", tags: "casas barrio", cat: "viajes" },
    { char: "🏚️", tags: "casa abandonada", cat: "viajes" },
    { char: "🏠", tags: "casa hogar", cat: "viajes" },
    { char: "🏡", tags: "casa jardin", cat: "viajes" },
    { char: "🏢", tags: "oficina edificio", cat: "viajes" },
    { char: "🏣", tags: "correo japon", cat: "viajes" },
    { char: "🏤", tags: "correo edificio", cat: "viajes" },
    { char: "🏥", tags: "hospital salud", cat: "viajes" },
    { char: "🏦", tags: "banco dinero", cat: "viajes" },
    { char: "🏨", tags: "hotel dormir", cat: "viajes" },
    { char: "🏩", tags: "hotel amor", cat: "viajes" },
    { char: "🏪", tags: "tienda abierta", cat: "viajes" },
    { char: "🏫", tags: "escuela colegio", cat: "viajes" },
    { char: "🏬", tags: "almacen tienda", cat: "viajes" },
    { char: "🏭", tags: "fabrica humo", cat: "viajes" },
    { char: "🏮", tags: "linterna roja", cat: "viajes" },
    { char: "🏯", tags: "castillo japones", cat: "viajes" },
    { char: "🏰", tags: "castillo europeo", cat: "viajes" },
    { char: "💒", tags: "boda iglesia", cat: "viajes" },
    { char: "🗼", tags: "torre tokio", cat: "viajes" },
    { char: "🗽", tags: "estatua libertad", cat: "viajes" },
    { char: "⛪", tags: "iglesia", cat: "viajes" },
    { char: "🕌", tags: "mezquita", cat: "viajes" },
    { char: "🛕", tags: "templo hindu", cat: "viajes" },
    { char: "🕍", tags: "sinagoga", cat: "viajes" },
    { char: "⛩️", tags: "santuario sintoista", cat: "viajes" },
    { char: "🕋", tags: "kaaba", cat: "viajes" },
    { char: "⛲", tags: "fuente parque", cat: "viajes" },
    { char: "⛺", tags: "tienda campaña", cat: "viajes" },
    { char: "🌁", tags: "puente niebla", cat: "viajes" },
    { char: "🌃", tags: "noche ciudad estrellas", cat: "viajes" },
    { char: "🏙️", tags: "ciudad edificios", cat: "viajes" },
    { char: "🌄", tags: "amanecer montaña", cat: "viajes" },
    { char: "🌅", tags: "amanecer mar", cat: "viajes" },
    { char: "🌆", tags: "ciudad atardecer", cat: "viajes" },
    { char: "🌇", tags: "atardecer sol", cat: "viajes" },
    { char: "🌉", tags: "puente noche", cat: "viajes" },
    { char: "🌌", tags: "galaxia noche", cat: "viajes" },
    { char: "🎠", tags: "tiovivo feria", cat: "viajes" },
    { char: "🎡", tags: "noria feria", cat: "viajes" },
    { char: "🎢", tags: "montaña rusa feria", cat: "viajes" },
    { char: "🚂", tags: "locomotora tren", cat: "viajes" },
    { char: "🚃", tags: "vagon tren", cat: "viajes" },
    { char: "🚄", tags: "tren bala", cat: "viajes" },
    { char: "🚅", tags: "tren rapido", cat: "viajes" },
    { char: "🚆", tags: "tren", cat: "viajes" },
    { char: "🚇", tags: "metro", cat: "viajes" },
    { char: "🚈", tags: "tren ligero", cat: "viajes" },
    { char: "🚉", tags: "estacion tren", cat: "viajes" },
    { char: "🚊", tags: "tranvia", cat: "viajes" },
    { char: "🚝", tags: "monorrail", cat: "viajes" },
    { char: "🚞", tags: "funicular", cat: "viajes" },
    { char: "🚋", tags: "vagon tranvia", cat: "viajes" },
    { char: "🚌", tags: "autobus bus", cat: "viajes" },
    { char: "🚍", tags: "autobus frente", cat: "viajes" },
    { char: "🚎", tags: "trolleybus", cat: "viajes" },
    { char: "🚐", tags: "minibus furgoneta", cat: "viajes" },
    { char: "🚑", tags: "ambulancia", cat: "viajes" },
    { char: "🚒", tags: "bomberos camión", cat: "viajes" },
    { char: "🚓", tags: "policía coche", cat: "viajes" },
    { char: "🚔", tags: "policía frente", cat: "viajes" },
    { char: "🚕", tags: "taxi coche", cat: "viajes" },
    { char: "🚖", tags: "taxi frente", cat: "viajes" },
    { char: "🚗", tags: "coche auto vehiculo", cat: "viajes" },
    { char: "🚘", tags: "coche frente", cat: "viajes" },
    { char: "🚙", tags: "todoterreno coche", cat: "viajes" },
    { char: "🚚", tags: "camión entrega", cat: "viajes" },
    { char: "🚛", tags: "camión articulado", cat: "viajes" },
    { char: "🚜", tags: "tractor campo", cat: "viajes" },
    { char: "🏎️", tags: "fórmula 1 coche carrera", cat: "viajes" },
    { char: "🏍️", tags: "moto motocicleta", cat: "viajes" },
    { char: "🛵", tags: "scooter vespa", cat: "viajes" },
    { char: "🚲", tags: "bicicleta bici", cat: "viajes" },
    { char: "🛴", tags: "patinete", cat: "viajes" },
    { char: "skateboard", char: "🛹", tags: "skate", cat: "viajes" },
    { char: "🚏", tags: "parada bus", cat: "viajes" },
    { char: "🛤️", tags: "vias tren", cat: "viajes" },
    { char: "⛽", tags: "gasolinera", cat: "viajes" },
    { char: "🚨", tags: "sirena policia", cat: "viajes" },
    { char: "🚥", tags: "semaforo", cat: "viajes" },
    { char: "🚦", tags: "semaforo vertical", cat: "viajes" },
    { char: "🚧", tags: "construccion", cat: "viajes" },
    { char: "⚓", tags: "ancla barco", cat: "viajes" },
    { char: "⛵", tags: "velero barco", cat: "viajes" },
    { char: "🚤", tags: "lancha rapida", cat: "viajes" },
    { char: "🛳️", tags: "crucero barco", cat: "viajes" },
    { char: "⛴️", tags: "ferry barco", cat: "viajes" },
    { char: "🚢", tags: "barco carga", cat: "viajes" },
    { char: "✈️", tags: "avion volar", cat: "viajes" },
    { char: "🛩️", tags: "avioneta", cat: "viajes" },
    { char: "🛫", tags: "avion despegando", cat: "viajes" },
    { char: "🛬", tags: "avion aterrizando", cat: "viajes" },
    { char: "💺", tags: "asiento avion", cat: "viajes" },
    { char: "🚁", tags: "helicoptero", cat: "viajes" },
    { char: "🚟", tags: "ferrocarril suspendido", cat: "viajes" },
    { char: "🚠", tags: "teleferico montaña", cat: "viajes" },
    { char: "🚡", tags: "teleferico ciudad", cat: "viajes" },
    { char: "🛰️", tags: "satelite espacio", cat: "viajes" },
    { char: "🚀", tags: "cohete espacio despegar", cat: "viajes" },
    { char: "🛸", tags: "ovni alien", cat: "viajes" },

    // --- CATEGORÍA: BANDERAS (cat: banderas) ---
    // América
    { char: "🇦🇷", tags: "argentina bandera america sur", cat: "banderas" },
    { char: "🇧🇴", tags: "bolivia bandera america sur", cat: "banderas" },
    { char: "🇧🇷", tags: "brasil brazil bandera america sur", cat: "banderas" },
    { char: "🇨🇱", tags: "chile bandera america sur", cat: "banderas" },
    { char: "🇨🇴", tags: "colombia bandera america sur", cat: "banderas" },
    { char: "🇪🇨", tags: "ecuador bandera america sur", cat: "banderas" },
    { char: "🇵🇾", tags: "paraguay bandera america sur", cat: "banderas" },
    { char: "🇵🇪", tags: "peru bandera america sur", cat: "banderas" },
    { char: "🇺🇾", tags: "uruguay bandera america sur", cat: "banderas" },
    { char: "🇻🇪", tags: "venezuela bandera america sur", cat: "banderas" },
    { char: "🇲🇽", tags: "mexico bandera america norte centro", cat: "banderas" },
    { char: "🇺🇸", tags: "estados unidos usa bandera america norte", cat: "banderas" },
    { char: "🇨🇦", tags: "canada bandera america norte", cat: "banderas" },
    { char: "🇵🇦", tags: "panama bandera america centro", cat: "banderas" },
    { char: "🇨🇷", tags: "costa rica bandera america centro", cat: "banderas" },
    { char: "🇩🇴", tags: "republica dominicana bandera caribe", cat: "banderas" },
    { char: "🇨🇺", tags: "cuba bandera caribe", cat: "banderas" },
    { char: "🇸🇻", tags: "el salvador bandera america centro", cat: "banderas" },
    { char: "🇬🇹", tags: "guatemala bandera america centro", cat: "banderas" },
    { char: "🇭🇳", tags: "honduras bandera america centro", cat: "banderas" },
    { char: "🇳🇮", tags: "nicaragua bandera america centro", cat: "banderas" },
    { char: "🇵🇷", tags: "puerto rico bandera caribe", cat: "banderas" },

    // Europa
    { char: "🇪🇸", tags: "españa spain bandera europa", cat: "banderas" },
    { char: "🇫🇷", tags: "francia france bandera europa", cat: "banderas" },
    { char: "🇮🇹", tags: "italia italy bandera europa", cat: "banderas" },
    { char: "🇩🇪", tags: "alemania germany bandera europa", cat: "banderas" },
    { char: "🇬🇧", tags: "reino unido uk england bandera europa", cat: "banderas" },
    { char: "🇵🇹", tags: "portugal bandera europa", cat: "banderas" },
    { char: "🇷🇺", tags: "rusia russia bandera europa asia", cat: "banderas" },
    { char: "🇳🇱", tags: "paises bajos holanda netherlands bandera europa", cat: "banderas" },
    { char: "🇧🇪", tags: "belgica bandera europa", cat: "banderas" },
    { char: "🇨🇭", tags: "suiza bandera europa", cat: "banderas" },
    { char: "🇸🇪", tags: "suecia bandera europa", cat: "banderas" },
    { char: "🇳🇴", tags: "noruega bandera europa", cat: "banderas" },
    { char: "🇩🇰", tags: "dinamarca bandera europa", cat: "banderas" },
    { char: "🇫🇮", tags: "finlandia bandera europa", cat: "banderas" },
    { char: "🇵🇱", tags: "polonia bandera europa", cat: "banderas" },
    { char: "🇺🇦", tags: "ucrania bandera europa", cat: "banderas" },
    { char: "🇬🇷", tags: "grecia bandera europa", cat: "banderas" },

    // Asia y Oceanía
    { char: "🇯🇵", tags: "japon japan bandera asia", cat: "banderas" },
    { char: "🇰🇷", tags: "corea sur korea bandera asia", cat: "banderas" },
    { char: "🇨🇳", tags: "china bandera asia", cat: "banderas" },
    { char: "🇮🇳", tags: "india bandera asia", cat: "banderas" },
    { char: "🇮🇩", tags: "indonesia bandera asia", cat: "banderas" },
    { char: "🇹🇭", tags: "tailandia bandera asia", cat: "banderas" },
    { char: "🇻🇳", tags: "vietnam bandera asia", cat: "banderas" },
    { char: "🇮🇱", tags: "israel bandera asia oriente", cat: "banderas" },
    { char: "🇸🇦", tags: "arabia saudita bandera asia oriente", cat: "banderas" },
    { char: "🇦🇪", tags: "emiratos arabes bandera asia oriente", cat: "banderas" },
    { char: "🇹🇷", tags: "turquia bandera europa asia", cat: "banderas" },
    { char: "🇦🇺", tags: "australia bandera oceania", cat: "banderas" },
    { char: "🇳🇿", tags: "nueva zelanda bandera oceania", cat: "banderas" },

    // África y Otros
    { char: "🇿🇦", tags: "sudafrica bandera africa", cat: "banderas" },
    { char: "🇪🇬", tags: "egipto bandera africa", cat: "banderas" },
    { char: "🇲🇦", tags: "marruecos bandera africa", cat: "banderas" },
    { char: "🇳🇬", tags: "nigeria bandera africa", cat: "banderas" },
    { char: "🏁", tags: "bandera cuadros carrera", cat: "banderas" },
    { char: "🚩", tags: "bandera roja triangulo", cat: "banderas" },
    { char: "🎌", tags: "banderas cruzadas japon", cat: "banderas" },
    { char: "🏴‍☠️", tags: "pirata bandera calavera", cat: "banderas" },
    { char: "🏳️‍🌈", tags: "arcoiris bandera pride lgbt", cat: "banderas" },
    { char: "🏳️‍⚧️", tags: "transgenero bandera pride", cat: "banderas" },
    
    // --- CATEGORÍA: SÍMBOLOS Y ESTRUCTURA ---
    { char: "⚠️", tags: "atencion advertencia cuidado peligro alerta", cat: "simbolos" },
    { char: "🚫", tags: "prohibido no denegado stop", cat: "simbolos" },
    { char: "❌", tags: "error equis no aspa", cat: "simbolos" },
    { char: "⭕", tags: "circulo rojo o ok", cat: "simbolos" },
    { char: "🛑", tags: "stop pare alto", cat: "simbolos" },
    { char: "⛔", tags: "entrada prohibida direccion", cat: "simbolos" },
    { char: "🔇", tags: "silencio mudo", cat: "simbolos" },
    { char: "🛡️", tags: "escudo proteccion seguridad", cat: "simbolos" },
    { char: "⚓", tags: "ancla seguridad fijo", cat: "simbolos" },
    { char: "💯", tags: "cien perfecto nota", cat: "simbolos" },
    { char: "💢", tags: "enfado simbolo", cat: "simbolos" },
    { char: "💬", tags: "comentario burbuja texto", cat: "simbolos" },
    { char: "💭", tags: "pensamiento nube", cat: "simbolos" },
    { char: "💮", tags: "sello flor", cat: "simbolos" },
    { char: "🔰", tags: "novato principiante", cat: "simbolos" },
    { char: "♻️", tags: "reciclaje verde", cat: "simbolos" },
    { char: "✅", tags: "check verificado ok hecho", cat: "simbolos" },
    { char: "💹", tags: "grafica mercado subir", cat: "simbolos" },
    { char: "❇️", tags: "brillo verde", cat: "simbolos" },
    { char: "✳️", tags: "asterisco verde", cat: "simbolos" },
    { char: "❎", tags: "check equis", cat: "simbolos" },
    { char: "🌐", tags: "web internet global", cat: "simbolos" },
    { char: "💠", tags: "diamante azul flor", cat: "simbolos" },
    { char: "🌀", tags: "ciclon tornado", cat: "simbolos" },
    { char: "💤", tags: "sueño dormir", cat: "simbolos" },
    { char: "🏧", tags: "cajero dinero atm", cat: "simbolos" },
    { char: "🈂️", tags: "japones servicio", cat: "simbolos" },
    { char: "🛂", tags: "pasaporte control", cat: "simbolos" },
    { char: "🛃", tags: "aduana", cat: "simbolos" },
    { char: "🛄", tags: "equipaje", cat: "simbolos" },
    { char: "🛅", tags: "consigna", cat: "simbolos" },
    { char: "♿", tags: "discapacidad silla ruedas", cat: "simbolos" },
    { char: "🚭", tags: "no fumar tabaco", cat: "simbolos" },
    { char: "🚾", tags: "baño wc", cat: "simbolos" },
    { char: "🅿️", tags: "parking estacionamiento", cat: "simbolos" },
    { char: "🚰", tags: "agua potable", cat: "simbolos" },
    { char: "🚹", tags: "hombre", cat: "simbolos" },
    { char: "🚺", tags: "mujer", cat: "simbolos" },
    { char: "🚻", tags: "baños", cat: "simbolos" },
    { char: "🚼", tags: "bebe", cat: "simbolos" },
    { char: "🚸", tags: "niños cruzando", cat: "simbolos" },
    { char: "🚳", tags: "no bicis", cat: "simbolos" },
    { char: "🚯", tags: "no basura", cat: "simbolos" },
    { char: "🚱", tags: "no bebible", cat: "simbolos" },
    { char: "🚷", tags: "no peatones", cat: "simbolos" },
    { char: "🔞", tags: "prohibido mas de 18", cat: "simbolos" },
    { char: "⬅️", tags: "flecha izquierda", cat: "simbolos" },
    { char: "⬆️", tags: "flecha arriba", cat: "simbolos" },
    { char: "⬇️", tags: "flecha abajo", cat: "simbolos" },
    { char: "➡️", tags: "flecha derecha", cat: "simbolos" },
    { char: "↗️", tags: "flecha diagonal arriba derecha", cat: "simbolos" },
    { char: "↘️", tags: "flecha diagonal abajo derecha", cat: "simbolos" },
    { char: "↙️", tags: "flecha diagonal abajo izquierda", cat: "simbolos" },
    { char: "↖️", tags: "flecha diagonal arriba izquierda", cat: "simbolos" },
    { char: "↕️", tags: "flechas verticales", cat: "simbolos" },
    { char: "↔️", tags: "flechas horizontales", cat: "simbolos" },
    { char: "↩️", tags: "flecha retorno", cat: "simbolos" },
    { char: "↪️", tags: "flecha giro", cat: "simbolos" },
    { char: "⤴️", tags: "flecha curva arriba", cat: "simbolos" },
    { char: "⤵️", tags: "flecha curva abajo", cat: "simbolos" },
    { char: "🔃", tags: "recargar flechas circulo", cat: "simbolos" },
    { char: "🔄", tags: "actualizar flechas", cat: "simbolos" },
    { char: "🔙", tags: "atras back", cat: "simbolos" },
    { char: "🔚", tags: "fin end", cat: "simbolos" },
    { char: "🔛", tags: "on encendido", cat: "simbolos" },
    { char: "🔜", tags: "pronto soon", cat: "simbolos" },
    { char: "🔝", tags: "top arriba", cat: "simbolos" },
    { char: "🆔", tags: "id identificacion", cat: "simbolos" },
    { char: "🆕", tags: "nuevo new", cat: "simbolos" },
    { char: "🆓", tags: "gratis free", cat: "simbolos" },
    { char: "ℹ️", tags: "informacion info", cat: "simbolos" },
    { char: "📶", tags: "señal wifi barras", cat: "simbolos" },
    { char: "🎦", tags: "cine video", cat: "simbolos" },
    { char: "🈁", tags: "aqui japones", cat: "simbolos" },
    { char: "➕", tags: "mas suma positivo", cat: "simbolos" },
    { char: "➖", tags: "menos resta negativo", cat: "simbolos" },
    { char: "➗", tags: "division", cat: "simbolos" },
    { char: "✖️", tags: "multiplicacion equis", cat: "simbolos" },
    { char: "💲", tags: "dolar dinero precio", cat: "simbolos" },
    { char: "💱", tags: "cambio divisas", cat: "simbolos" },
    { char: "❓", tags: "pregunta duda", cat: "simbolos" },
    { char: "❔", tags: "pregunta blanco", cat: "simbolos" },
    { char: "❕", tags: "exclamacion blanco", cat: "simbolos" },
    { char: "❗", tags: "exclamacion alerta", cat: "simbolos" },
    { char: "〰️", tags: "onda curva", cat: "simbolos" },
    { char: "➰", tags: "bucle", cat: "simbolos" },
    { char: "♠️", tags: "picas cartas", cat: "simbolos" },
    { char: "♣️", tags: "trebol cartas", cat: "simbolos" },
    { char: "♥️", tags: "corazon cartas", cat: "simbolos" },
    { char: "♦️", tags: "diamante cartas", cat: "simbolos" },
    { char: "🔳", tags: "cuadrado blanco borde", cat: "simbolos" },
    { char: "🔲", tags: "cuadrado negro borde", cat: "simbolos" },
    { char: "🔴", tags: "circulo rojo", cat: "simbolos" },
    { char: "🔵", tags: "circulo azul", cat: "simbolos" },
    { char: "⚫", tags: "circulo negro", cat: "simbolos" },
    { char: "⚪", tags: "circulo blanco", cat: "simbolos" },
    { char: "⬛", tags: "cuadrado negro grande", cat: "simbolos" },
    { char: "⬜", tags: "cuadrado blanco grande", cat: "simbolos" },
    { char: "◼️", tags: "cuadrado negro medio", cat: "simbolos" },
    { char: "◻️", tags: "cuadrado blanco medio", cat: "simbolos" },
    { char: "◾", tags: "cuadrado negro pequeño", cat: "simbolos" },
    { char: "◽", tags: "cuadrado blanco pequeño", cat: "simbolos" },
    { char: "▪️", tags: "punto negro", cat: "simbolos" },
    { char: "▫️", tags: "punto blanco", cat: "simbolos" },
    { char: "🔶", tags: "rombo naranja grande", cat: "simbolos" },
    { char: "🔷", tags: "rombo azul grande", cat: "simbolos" },
    { char: "🔸", tags: "rombo naranja pequeño", cat: "simbolos" },
    { char: "🔹", tags: "rombo azul pequeño", cat: "simbolos" },
    { char: "🔺", tags: "triangulo arriba", cat: "simbolos" },
    { char: "🔻", tags: "triangulo abajo", cat: "simbolos" },
    { char: "💠", tags: "diamante punto", cat: "simbolos" },
    { char: "🔘", tags: "boton radio", cat: "simbolos" },

    // --- CATEGORÍA: HERRAMIENTAS Y TECNOLOGÍA (cat: herramientas) ---
    { char: "💻", tags: "laptop ordenador computadora pc mac", cat: "herramientas" },
    { char: "🖥️", tags: "monitor pantalla escritorio", cat: "herramientas" },
    { char: "⌨️", tags: "teclado escribir", cat: "herramientas" },
    { char: "🖱️", tags: "raton mouse click", cat: "herramientas" },
    { char: "🖨️", tags: "impresora papel copia", cat: "herramientas" },
    { char: "📱", tags: "celular movil smartphone iphone", cat: "herramientas" },
    { char: "☎️", tags: "telefono llamada contacto", cat: "herramientas" },
    { char: "📞", tags: "auricular soporte servicio", cat: "herramientas" },
    { char: "🔋", tags: "bateria carga energia", cat: "herramientas" },
    { char: "🔌", tags: "enchufe conector electricidad", cat: "herramientas" },
    { char: "💡", tags: "bombilla luz idea brillante", cat: "herramientas" },
    { char: "🔦", tags: "linterna luz buscar", cat: "herramientas" },
    { char: "🔍", tags: "lupa buscar encontrar", cat: "herramientas" },
    { char: "🔐", tags: "llave candado seguridad", cat: "herramientas" },
    { char: "🔑", tags: "llave acceso abrir", cat: "herramientas" },
    { char: "🔨", tags: "martillo herramienta construir", cat: "herramientas" },
    { char: "🛠️", tags: "herramientas soporte reparar", cat: "herramientas" },
    { char: "🔧", tags: "llave inglesa ajustar", cat: "herramientas" },
    { char: "🔩", tags: "tuerca tornillo metal", cat: "herramientas" },
    { char: "⚙️", tags: "engranaje ajustes configuracion", cat: "herramientas" },
    { char: "🧱", tags: "ladrillo construccion pared", cat: "herramientas" },
    { char: "⚖️", tags: "balanza justicia ley", cat: "herramientas" },
    { char: "🧰", tags: "caja herramientas", cat: "herramientas" },
    { char: "🧲", tags: "iman atraccion magnetico", cat: "herramientas" },
    { char: "🧪", tags: "tubo ensayo ciencia laboratorio", cat: "herramientas" },
    { char: "🔬", tags: "microscopio analisis", cat: "herramientas" },
    { char: "📡", tags: "antena satelite señal", cat: "herramientas" },
    { char: "💉", tags: "jeringa vacuna salud", cat: "herramientas" },
    { char: "💊", tags: "pastilla medicina salud", cat: "herramientas" },
    { char: "🩹", tags: "curita vendaje", cat: "herramientas" },
    { char: "🩺", tags: "estetoscopio medico", cat: "herramientas" },
    { char: "🧹", tags: "escoba limpiar", cat: "herramientas" },
    { char: "🧯", tags: "extintor fuego seguridad", cat: "herramientas" },
    { char: "🛒", tags: "carrito compras ventas", cat: "herramientas" },
];

// 2. ELEMENTOS DEL DOM
const grid = document.getElementById('emojiGrid');
const searchInput = document.getElementById('searchInput');
const composer = document.getElementById('emojiComposer');
const charCounter = document.getElementById('charCounter');
const btnCopyAll = document.getElementById('btnCopyAll');
const btnClear = document.getElementById('btnClear');
const toast = document.getElementById('toast');

// 3. FUNCIONES GLOBALES (Blindadas para el HTML)
/**
 * 1. LÓGICA DE FILTRADO MEJORADA
 */
window.filterCategory = function(cat) {
    const fullLibrary = document.getElementById('fullLibrary');
    if (fullLibrary) fullLibrary.classList.add('hidden');
    
    // Si cat es 'todos', mostramos 'fuego'. Si no, mostramos la categoría exacta.
    const targetCat = (cat === 'todos') ? 'fuego' : cat;
    renderEmojis(searchInput.value, targetCat);
};

window.toggleLibrary = function() {
    const fullLibrary = document.getElementById('fullLibrary');
    if (fullLibrary) {
        fullLibrary.classList.toggle('hidden');
    }
};

window.renderByGroup = function(group) {
    renderEmojis("", group);
};

// 4. BUSCADOR INTELIGENTE
/**
 * 2. CORRECCIÓN DE "SIN RESULTADOS" AL CARGAR
 */
function renderEmojis(filter = "", category = "todos") {
    if (!grid) return;
    grid.innerHTML = "";
    
    const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const searchFilter = normalize(filter.toLowerCase());

    const filtered = emojiData.filter(item => {
        const itemTags = normalize(item.tags.toLowerCase());
        const matchesSearch = itemTags.includes(searchFilter);
        
        // Si la categoría es "todos" en el render inicial, 
        // pero queremos que por defecto solo salgan los TOP:
        const matchesCat = (category === "todos") ? item.cat === "fuego" : item.cat === category;
        
        return matchesSearch && matchesCat;
    });

    // Solo mostramos error si el usuario REALMENTE buscó algo y no se halló
    if (filtered.length === 0 && filter !== "") {
        grid.innerHTML = `<div style="grid-column: 1/-1; padding: 20px; opacity: 0.5;">No se encontró nada para "${filter}"...</div>`;
        return;
    }

    filtered.forEach(emoji => {
        const div = document.createElement('div');
        div.className = 'emoji-item';
        div.textContent = emoji.char;
        div.onclick = () => addEmojiToComposer(emoji.char);
        grid.appendChild(div);
    });
}

// Asegurarnos que al abrir la web solo salgan los sugeridos (fuego)
document.addEventListener('DOMContentLoaded', () => {
    renderEmojis("", "fuego"); 
});
// 5. LÓGICA DEL COMPOSER
function addEmojiToComposer(char) {
    if (!composer) return;
    composer.value += char;
    updateCounter();
    composer.style.borderColor = "var(--primary)";
    setTimeout(() => composer.style.borderColor = "#444", 200);
}

function updateCounter() {
    if (!charCounter || !composer) return;
    const count = [...composer.value].length;
    charCounter.textContent = count;
}

composer.addEventListener('input', updateCounter);

// 6. ACCIONES
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

function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2000);
}

// 7. LISTENERS
searchInput.addEventListener('input', (e) => {
    renderEmojis(e.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
    renderEmojis();
});
