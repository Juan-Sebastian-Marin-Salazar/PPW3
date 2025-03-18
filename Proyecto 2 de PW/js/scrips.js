document.addEventListener("DOMContentLoaded", function () {
    // Lógica del catálogo y carrito de compras
    if (document.getElementById("catalogo")) {
        const catalogo = [
            // Sushi y Sashimi
            {
                id: 1,
                nombre: "Ride on Time",
                descripcion: "Un roll vibrante con atún fresco, mango dulce y una salsa especial de la casa que realza los sabores tropicales. Perfecto.",
                precio: 220.00,
                imagen: "../img/Img_Menu/Category 1 img 1.jpg",
                categoria: "Sushi y Sashimi"
            },
            {
                id: 2,
                nombre: "Silent Screamer",
                descripcion: "Nigiri de anguila glaseada con salsa teriyaki casera y un toque de wasabi, una combinación intensa y llena de carácter.",
                precio: 190.00,
                imagen: "../img/Img_Menu/Category 1 img 2.png",
                categoria: "Sushi y Sashimi"
            },
            {
                id: 3,
                nombre: "Your Eyes",
                descripcion: "Delicado sashimi surtido con cortes seleccionados de atún, salmón y hamachi, servidos sobre hielo para una experiencia fresca y auténtica.",
                precio: 250.00,
                imagen: "../img/Img_Menu/Category 1 img 3.png",
                categoria: "Sushi y Sashimi"
            },
            {
                id: 4,
                nombre: "Plastic Love",
                descripcion: "Un sofisticado roll de salmón ahumado, queso crema y aguacate, envuelto en alga nori y acompañado de una reducción de soya y miel.",
                precio: 200.00,
                imagen: "../img/Img_Menu/Category 1 img 4.jpg",
                categoria: "Sushi y Sashimi"
            },
            {
                id: 5,
                nombre: "Dream in the Screen",
                descripcion: "Roll crujiente relleno de tempura de camarón, pepino y un toque de mayonesa picante, ideal para quienes buscan una mezcla perfecta de textura y sabor.",
                precio: 180.00,
                imagen: "../img/Img_Menu/Category 1 img 5.jpg",
                categoria: "Sushi y Sashimi"
            },
            {
                id: 6,
                nombre: "Tokai",
                descripcion: "Roll de atún picante con pepino y cebollín, cubierto con un ligero toque de salsa sriracha. Un platillo inspirado en la intensidad y energía de la ciudad.",
                precio: 210.00,
                imagen: "../img/Img_Menu/Category 1 img 6.jpg",
                categoria: "Sushi y Sashimi"
            },
            {
                id: 7,
                nombre: "Machi no Dorufin",
                descripcion: "Un roll refrescante con pulpo, pepino y cebolla morada, acompañado de salsa ponzu y ajonjolí tostado.",
                precio: 230.00,
                imagen: "../img/Img_Menu/Category 1 img 7.jpeg",
                categoria: "Sushi y Sashimi"
            },
        
            // Platos Fuertes
            {
                id: 8,
                nombre: "Daydream",
                descripcion: "Ramen tonkotsu con un caldo cremoso cocinado por horas, acompañado de chashu de cerdo, huevo marinado y cebollín fresco. Un sueño hecho realidad en cada sorbo.",
                precio: 240.00,
                imagen: "../img/Img_Menu/Category 2 img 1.jpg",
                categoria: "Platos Fuertes"
            },
            {
                id: 9,
                nombre: "Rainy Day",
                descripcion: "Ramen shoyu con caldo de soya, hongos shiitake, bambú y fideos artesanales, perfecto para reconfortar el alma en un día lluvioso.",
                precio: 220.00,
                imagen: "../img/Img_Menu/Category 2 img 2.png",
                categoria: "Platos Fuertes"
            },
            {
                id: 10,
                nombre: "Magic Ways",
                descripcion: "Udon en un caldo miso con tofu sedoso, alga wakame y un toque de jengibre. Suave, envolvente y lleno de umami.",
                precio: 210.00,
                imagen: "../img/Img_Menu/Category 2 img 3.png",
                categoria: "Platos Fuertes"
            },
            {
                id: 11,
                nombre: "I Love You",
                descripcion: "Yakisoba salteado al wok con vegetales frescos, carne de res y una mezcla especial de salsas dulces y saladas. Un platillo que se siente como un abrazo.",
                precio: 230.00,
                imagen: "../img/Img_Menu/Category 2 img 4.jpg",
                categoria: "Platos Fuertes"
            },
            {
                id: 12,
                nombre: "Morning Glory",
                descripcion: "Omurice: arroz salteado con salsa de tomate envuelto en una tortilla esponjosa, servido con un toque de salsa demi-glace. Un clásico desayuno japonés.",
                precio: 190.00,
                imagen: "../img/Img_Menu/Category 2 img 5.jpg",
                categoria: "Platos Fuertes"
            },
            {
                id: 13,
                nombre: "Hatsu Koi",
                descripcion: "Gyudon: un tazón de arroz cubierto con finas láminas de res cocidas a fuego lento en una salsa de soya y mirin. Suave y nostálgico, como un primer amor.",
                precio: 220.00,
                imagen: "../img/Img_Menu/Category 2 img 6.png",
                categoria: "Platos Fuertes"
            },
            {
                id: 14,
                nombre: "Step Into The Light",
                descripcion: "Yakitori: brochetas de pollo a la parrilla, marinadas en una salsa dulce y salada, servidas con un toque de cebollín fresco.",
                precio: 170.00,
                imagen: "../img/Img_Menu/Category 2 img 7.jpg",
                categoria: "Platos Fuertes"
            },
        
            // Donburis y Especialidades
            {
                id: 15,
                nombre: "Beleza Pula",
                descripcion: "Katsudon: chuleta de cerdo empanizada y bañada en una mezcla de huevo y salsa dashi, servida sobre arroz caliente. Un platillo energético y lleno de sabor.",
                precio: 230.00,
                imagen: "../img/Img_Menu/Category 3 img 1.jpg",
                categoria: "Donburis y Especialidades"
            },
            {
                id: 16,
                nombre: "Sparkle",
                descripcion: "Chirashi don: una selección de sashimi fresco servido sobre un lecho de arroz de sushi, decorado con huevas de salmón y alga nori. Una experiencia brillante en cada bocado.",
                precio: 260.00,
                imagen: "../img/Img_Menu/Category 3 img 2.jpg",
                categoria: "Donburis y Especialidades"
            },
            {
                id: 17,
                nombre: "Someday",
                descripcion: "Filete de salmón glaseado con teriyaki, acompañado de arroz y ensalada de pepino japonés. Un platillo reconfortante que deja huella.",
                precio: 280.00,
                imagen: "../img/Img_Menu/Category 3 img 3.jpg",
                categoria: "Donburis y Especialidades"
            },
            {
                id: 18,
                nombre: "Bay City",
                descripcion: "Tonkatsu: crujiente chuleta de cerdo empanizada, servida con salsa especial de la casa, repollo rallado y arroz japonés.",
                precio: 210.00,
                imagen: "../img/Img_Menu/Category 3 img 4.jpg",
                categoria: "Donburis y Especialidades"
            },
            {
                id: 19,
                nombre: "Breezin",
                descripcion: "Takoyaki: esferas de masa crujiente rellenas de pulpo, cubiertas con salsa tonkatsu, mayonesa japonesa y copos de bonito seco. Una explosión de sabor.",
                precio: 180.00,
                imagen: "../img/Img_Menu/Category 3 img 5.jpg",
                categoria: "Donburis y Especialidades"
            },
            {
                id: 20,
                nombre: "Summer Connection",
                descripcion: "Poke bowl con salmón marinado, aguacate, edamames y arroz sushi, aliñado con un toque de salsa de sésamo. Ligero y refrescante, perfecto para los días cálidos.",
                precio: 250.00,
                imagen: "../img/Img_Menu/Category 3 img 6.png",
                categoria: "Donburis y Especialidades"
            },
            {
                id: 21,
                nombre: "Carnaval",
                descripcion: "Tempura de camarón y verduras, rebozado en una masa ligera y crujiente, servido con salsa tentsuyu casera.",
                precio: 200.00,
                imagen: "../img/Img_Menu/Category 3 img 7.png",
                categoria: "Donburis y Especialidades"
            },
        
            // Postres
            {
                id: 22,
                nombre: "Candy Hearts",
                descripcion: "Dorayaki: esponjosos panqueques japoneses rellenos de crema de fresa y frijol dulce. Un postre nostálgico y reconfortante.",
                precio: 120.00,
                imagen: "../img/Img_Menu/Category 4 img 1.jpg",
                categoria: "Postres"
            },
            {
                id: 23,
                nombre: "Lovers Paradise",
                descripcion: "Mochi de helado con sabores variados: matcha, fresa y vainilla, cubiertos con una ligera capa de arroz glutinoso. Suaves y dulces, ideales para compartir.",
                precio: 140.00,
                imagen: "../img/Img_Menu/Category 4 img 2.jpg",
                categoria: "Postres"
            },
            {
                id: 24,
                nombre: "Shyness Boy",
                descripcion: "Cheesecake japonés, ligero y esponjoso, con un toque de miel y frutos rojos.",
                precio: 130.00,
                imagen: "../img/Img_Menu/Category 4 img 3.jpg",
                categoria: "Postres"
            },
            {
                id: 25,
                nombre: "Summer Blue",
                descripcion: "Taiyaki crujiente relleno de crema de matcha y chocolate blanco.",
                precio: 110.00,
                imagen: "../img/Img_Menu/Category 4 img 4.jpg",
                categoria: "Postres"
            },
            {
                id: 26,
                nombre: "Midnight Pretenders",
                descripcion: "Helado de sésamo negro, con una textura cremosa y un sabor profundo y elegante.",
                precio: 140.00,
                imagen: "../img/Img_Menu/Category 4 img 5.jpg",
                categoria: "Postres"
            },
            {
                id: 27,
                nombre: "Please Let Me Wonder (PleWo)",
                descripcion: "Helado de vainilla con miel y almendras caramelizadas, servido con un toque de canela.",
                precio: 130.00,
                imagen: "../img/Img_Menu/Category 4 img 6.jpg",
                categoria: "Postres"
            },
            {
                id: 28,
                nombre: "Long Kiss Good Bye",
                descripcion: "Parfait de frutas con capas de crema batida, granola crujiente y un toque de jarabe de yuzu.",
                precio: 150.00,
                imagen: "../img/Img_Menu/Category 4 img 7.jpeg",
                categoria: "Postres"
            },
            {
                id: 29,
                nombre: "Windy Summer",
                descripcion: "Té matcha frío con leche y un toque de miel, refrescante y cremoso.",
                precio: 90.00,
                imagen: "../img/Img_Menu/Category 5 img 1.jpg",
                categoria: "Bebidas"
            },
            {
                id: 30,
                nombre: "September",
                descripcion: "Coctel de umeshu con soda y limón, un licor de ciruela japonés con un toque efervescente.",
                precio: 120.00,
                imagen: "../img/Img_Menu/Category 5 img 2.jpg",
                categoria: "Bebidas"
            },
            {
                id: 31,
                nombre: "Midnight Cruisin",
                descripcion: "Café japonés con un toque de licor de amaretto, perfecto para noches largas.",
                precio: 130.00,
                imagen: "../img/Img_Menu/Category 5 img 3.jpg",
                categoria: "Bebidas"
            },
            {
                id: 32,
                nombre: "Hot Stuff",
                descripcion: "Ginger ale con limón y un toque de jarabe de chile, burbujeante y con un ligero picante.",
                precio: 100.00,
                imagen: "../img/Img_Menu/Category 5 img 4.png",
                categoria: "Bebidas"
            },
            {
                id: 33,
                nombre: "Miss You, Miss Me",
                descripcion: "Batido de plátano y miel, cremoso y reconfortante.",
                precio: 90.00,
                imagen: "../img/Img_Menu/Category 5 img 5.jpg",
                categoria: "Bebidas"
            },
            {
                id: 34,
                nombre: "Springin Night",
                descripcion: "Frappe de matcha con leche condensada, ideal para una noche tranquila.",
                precio: 110.00,
                imagen: "../img/Img_Menu/Category 5 img 6.jpg",
                categoria: "Bebidas"
            },
            {
                id: 35,
                nombre: "I Can't Stop the Loneliness",
                descripcion: "Coctel de sake con jugo de durazno, delicado y afrutado.",
                precio: 140.00,
                imagen: "../img/Img_Menu/Category 5 img 7.jpg",
                categoria: "Bebidas"
            },
            {
                id: 36,
                nombre: "Remember Summer Days",
                descripcion: "Té de jazmín helado con un toque de miel, evocando el verano.",
                precio: 80.00,
                imagen: "../img/Img_Menu/Category 5 img 8.png",
                categoria: "Bebidas"
            },
            {
                id: 37,
                nombre: "Dress Down",
                descripcion: "Ensalada de algas con tofu y ajonjolí, ligera y sofisticada.",
                precio: 120.00,
                imagen: "../img/Img_Menu/Category 6 img 1.jpg",
                categoria: "Entradas y Extras"
            },
            {
                id: 38,
                nombre: "Wash",
                descripcion: "Sopa de miso tradicional con alga wakame, tofu y cebollín, un clásico reconfortante.",
                precio: 80.00,
                imagen: "../img/Img_Menu/Category 6 img 2.png",
                categoria: "Entradas y Extras"
            },
            {
                id: 39,
                nombre: "Loveland Island",
                descripcion: "Edamames al vapor con sal de mar, el snack perfecto para acompañar cualquier platillo.",
                precio: 90.00,
                imagen: "../img/Img_Menu/Category 6 img 3.jpg",
                categoria: "Entradas y Extras"
            },
            {
                id: 40,
                nombre: "Love Space",
                descripcion: "Gyoza de cerdo doradas a la plancha, rellenas de carne jugosa con un toque de ajo y jengibre.",
                precio: 140.00,
                imagen: "../img/Img_Menu/Category 6 img 4.jpg",
                categoria: "Entradas y Extras"
            },
            {
                id: 41,
                nombre: "Summer Goddess",
                descripcion: "Ramune de melón, una gaseosa japonesa chispeante y refrescante.",
                precio: 70.00,
                imagen: "../img/Img_Menu/Category 6 img 5.png",
                categoria: "Entradas y Extras"
            },
            {
                id: 42,
                nombre: "I'm in Love (inlove)",
                descripcion: "Onigiri relleno de salmón o umeboshi (ciruela encurtida), envuelto en alga nori.",
                precio: 100.00,
                imagen: "../img/Img_Menu/Category 6 img 6.jpg",
                categoria: "Entradas y Extras"
            }
        ];

        const catalogoContainer = document.getElementById("catalogo");
        const resumenCompra = document.getElementById("resumenCompra");
        const total = document.getElementById("total");
        const carrito = [];
        const categoriahtml = document.createElement("div");

        let categoriaActual = "";

        // Genera las tarjetas de productos en el catálogo
        catalogo.forEach((producto) => {

            if (categoriaActual !== producto.categoria) {
                categoriaActual = producto.categoria;
                
                const categoriahtml = document.createElement("div");
                categoriahtml.classList.add("categoria");
                categoriahtml.innerHTML = `<h2>${producto.categoria}</h2><br>`;
        
                catalogoContainer.appendChild(categoriahtml);
            }

            const card = document.createElement("div");
            card.classList.add("col-md-3", "mb-4");

            card.innerHTML = `
                <div class="item">
                    <img src="${producto.imagen}" class="card-img-top img-producto" alt="Producto ${producto.id}">
                    <div class="item-body">
                        <h4>${producto.id}. ${producto.nombre}</h4>
                        <p class="card-description">Descripcion: ${producto.descripcion}</p>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <div class="form-group">
                            <label for="cantidadProducto${producto.id}">Cantidad:</label>
                            <input type="number" id="cantidadProducto${producto.id}" class="form-control" value="1" min="1">
                        </div>
                        <button class="btn btn-primary mt-2">Agregar al Carrito</button>
                    </div>
                </div>
            `;

            catalogoContainer.appendChild(card);

            // Agrega un evento de clic al botón de "Agregar al Carrito"
            const botonAgregar = card.querySelector("button");
            botonAgregar.addEventListener("click", function () {
                const cantidad = parseInt(document.getElementById(`cantidadProducto${producto.id}`).value);
                if (cantidad > 0) {
                    agregarProductoAlCarrito(producto, cantidad);
                } else {
                    alert("La cantidad debe ser mayor a 0");
                }
            });
        });

        function agregarProductoAlCarrito(producto, cantidad) {
            const productoEnCarrito = carrito.find((item) => item.producto.id === producto.id);
            if (productoEnCarrito) {
                productoEnCarrito.cantidad += cantidad;
            } else {
                carrito.push({ producto, cantidad });
            }
            actualizarResumenCompra();
        }

        function actualizarResumenCompra() {
            resumenCompra.innerHTML = "";
            let subtotalTotal = 0;
        
            carrito.forEach((item, index) => {
                const fila = document.createElement("tr");
                fila.innerHTML = `
                    <td><img src="${item.producto.imagen}" class="card-img-top img-producto"></td>
                    <td>${item.producto.nombre}</td>
                    <td>${item.cantidad}</td>
                    <td>$${item.producto.precio * item.cantidad}</td>
                    <td><button class="btn-eliminar" data-index="${index}">X</button></td>
                `;
                resumenCompra.appendChild(fila);
                subtotalTotal += item.producto.precio * item.cantidad;
            });
        
            total.textContent = `$${subtotalTotal}`;
        
            // Agrega eventos de clic a los botones de eliminación
            const botonesEliminar = document.querySelectorAll(".btn-eliminar");
            botonesEliminar.forEach((boton) => {
                boton.addEventListener("click", function () {
                    const index = this.getAttribute("data-index");
                    eliminarProductoDelCarrito(index);
                });
            });
        }
        
        function eliminarProductoDelCarrito(index) {
            carrito.splice(index, 1);
            actualizarResumenCompra();
        }

        // Botón para finalizar la compra
        const botoncontinuarCompra = document.getElementById("continuarCompra");

        botoncontinuarCompra.addEventListener("click", function () {

            if(carrito.length === 0) {
                alert("No hay productos en el carrito");
            } else {
                localStorage.setItem("carrito", JSON.stringify(carrito));
                sessionStorage.setItem("total", total.textContent);
                window.location.href = "carrito.html";
            }
        });

    }
    if(document.getElementById("calcbutton"))   {
        document.getElementById("calcbutton").addEventListener("click", function() {
            let container = document.getElementById("RightFloatingPanel");
            let existingSection = document.getElementById("calculadora");

            if (existingSection) {
                // si ya existe, destruyela
                existingSection.remove();
            } else {
                // Crea la seccion dinamica
                let newSection = document.createElement("div");
                newSection.id = "calculadora";

                let calculator = document.createElement("div");
                calculator.classList.add("calculator");

                let display = document.createElement("div");
                display.classList.add("calcDisplay");
                display.textContent = "0";
                
                let buttons = document.createElement("div");
                buttons.classList.add("buttons");
                buttons.innerHTML = '<button class="calcBUttonGrid">7</button> <button class="calcBUttonGrid">8</button> <button class="calcBUttonGrid">9</button> <button class="calcBUttonGrid">/</button> <button class="calcBUttonGrid">4</button> <button class="calcBUttonGrid">5</button> <button class="calcBUttonGrid">6</button> <button class="calcBUttonGrid">*</button> <button class="calcBUttonGrid">1</button> <button class="calcBUttonGrid">2</button> <button class="calcBUttonGrid">3</button> <button class="calcBUttonGrid">-</button> <button class="calcBUttonGrid">0</button> <button class="calcBUttonGrid">C</button> <button class="calcBUttonGrid">=</button> <button class="calcBUttonGrid">+</button>';                

                calculator.appendChild(display);
                calculator.appendChild(buttons);
                newSection.appendChild(calculator);

                // inserta dentro del panel flotante
                container.appendChild(newSection);

                container.addEventListener("click", function(event) {
                    if (event.target.classList.contains("calcButtonGrid"))  {
                        let buttonText = event.target.textContent;
    
                        if (buttonText.match(/[0-9]/)) {
                            if (shouldClearDisplay) {
                                calcDisplay.textContent = "";
                                shouldClearDisplay = false;
                            }
                            calcDisplay.textContent += buttonText;
                        } else if (buttonText === "C") {
                            calcDisplay.textContent = "0";
                            currentInput = "";
                            currentOperator = "";
                        } else if (buttonText === "=") {
                            if (currentOperator && currentInput) {
                                const result = calculate(parseFloat(currentInput), currentOperator, parseFloat(calcDisplay.textContent));
                                calcDisplay.textContent = result;
                                currentInput = result;
                                currentOperator = "";
                                shouldClearDisplay = true;
                            }
                            } else {
                                currentOperator = buttonText;
                                currentInput = calcDisplay.textContent;
                                shouldClearDisplay = true;
                            }
                    }
                });
            }
        });
        function calculate(num1, operator, num2) {
            switch (operator) {
                case "+":
                    return num1 + num2;
                case "-":
                    return num1 - num2;
                case "*":
                    return num1 * num2;
                case "/":
                    if (num2 !== 0) {
                        return num1 / num2;
                    } else {
                    return "Error";
                    }
                default:
                    return num2;
            }
        }
    }

    // Lógica del formulario de empleo
    if (document.getElementById("empleo-form")) {
        document.getElementById("empleo-form").addEventListener("submit", function(event) {
            event.preventDefault(); // Evita el envío real del formulario
            document.getElementById("mensaje-exito").classList.remove("oculto");
            this.reset(); // Limpia los campos después de enviar
        });
    }

    // Lógica de la página de recibo (recibo.html)
    if (document.getElementById("resumenCompraRecibo")) {
        const carrito = JSON.parse(localStorage.getItem("carrito"));
        const total = sessionStorage.getItem("total");

        const resumenCompraRecibo = document.getElementById("resumenCompraRecibo");
        const totalRecibo = document.getElementById("totalRecibo");

        if (carrito && total) {
            carrito.forEach((item) => {
                const fila = document.createElement("tr");
                fila.innerHTML = `
                    <td><img src="${item.producto.imagen}" class="img-producto-carrito"></td>
                    <td>${item.producto.nombre}</td>
                    <td>${item.cantidad}</td>
                    <td>$${item.producto.precio * item.cantidad}</td>
                `;
                resumenCompraRecibo.appendChild(fila);
            });
            totalRecibo.textContent = total;
        } else {
            resumenCompraRecibo.innerHTML = "<tr><td colspan='3'>No hay datos de compra.</td></tr>";
            totalRecibo.textContent = "$0";
        }

        const botonFinalizarCompra = document.getElementById("finalizarCompra");

        botonFinalizarCompra.addEventListener("click", function () {

            alert("Compra completada. Gracias por su compra.");
            localStorage.removeItem("carrito");
            sessionStorage.removeItem("total");
            window.location.href = "tienda.html";

        });
    }
});