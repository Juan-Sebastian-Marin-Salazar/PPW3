document.addEventListener("DOMContentLoaded", function () {
    // Lógica del catálogo y carrito de compras
    if (document.getElementById("catalogo")) {
        const catalogo = [
            { id: 1, Nombre: "Ride on Time", imagen: "../img/Img_menu/Category 1 img 1.jpg", precio: 120, descripcion: "Un roll vibrante con atún fresco, mango dulce y una salsa especial de la casa que realza los sabores tropicales.", categoria: "Sushi y Sashimi"},
            { id: 2, Nombre: "Silent Screamer", imagen: "../img/Img_menu/Category 1 img 2.png", precio: 140, descripcion: "Nigiri de anguila glaseada con salsa teriyaki casera y un toque de wasabi, una combinación intensa y llena de carácter.", categoria: "Sushi y Sashimi"},
            { id: 3, Nombre: "Your Eyes", imagen: "../img/Img_menu/Category 1 img 3.png", precio: 200, descripcion: "Ramen shoyu con caldo de soya, hongos shiitake, bambú y fideos artesanales, perfecto para reconfortar el alma en un día lluvioso.", categoria: "Sushi y Sashimi"},
            { id: 4, Nombre: "Plastic Love", imagen: "../img/Img_menu/Category 1 img 4.jpg", precio: 140, descripcion: "Nigiri de anguila glaseada con salsa teriyaki casera y un toque de wasabi, una combinación intensa y llena de carácter.", categoria: "Sushi y Sashimi"},
            { id: 5, Nombre: "Dream in the Screen (DS)", imagen: "../img/Img_menu/Category 1 img 5.jpg", precio: 140, descripcion: "Roll crujiente relleno de tempura de camarón, pepino y un toque de mayonesa picante, ideal para quienes buscan una mezcla perfecta de textura y sabor.", categoria: "Sushi y Sashimi"},
            { id: 4, Nombre: "Plastic Love", imagen: "../img/Img_menu/Category 1 img 4.jpg", precio: 140, descripcion: "Nigiri de anguila glaseada con salsa teriyaki casera y un toque de wasabi, una combinación intensa y llena de carácter.", categoria: "Sushi y Sashimi"},
            { id: 4, Nombre: "Plastic Love", imagen: "../img/Img_menu/Category 1 img 4.jpg", precio: 140, descripcion: "Nigiri de anguila glaseada con salsa teriyaki casera y un toque de wasabi, una combinación intensa y llena de carácter.", categoria: "Sushi y Sashimi"},
            { id: 4, Nombre: "Plastic Love", imagen: "../img/Img_menu/Category 1 img 4.jpg", precio: 140, descripcion: "Nigiri de anguila glaseada con salsa teriyaki casera y un toque de wasabi, una combinación intensa y llena de carácter.", categoria: "Sushi y Sashimi"},
            { id: 4, Nombre: "Plastic Love", imagen: "../img/Img_menu/Category 1 img 4.jpg", precio: 140, descripcion: "Nigiri de anguila glaseada con salsa teriyaki casera y un toque de wasabi, una combinación intensa y llena de carácter.", categoria: "Sushi y Sashimi"},
            { id: 4, Nombre: "Plastic Love", imagen: "../img/Img_menu/Category 1 img 4.jpg", precio: 140, descripcion: "Nigiri de anguila glaseada con salsa teriyaki casera y un toque de wasabi, una combinación intensa y llena de carácter.", categoria: "Sushi y Sashimi"},
            { id: 4, Nombre: "Plastic Love", imagen: "../img/Img_menu/Category 1 img 4.jpg", precio: 140, descripcion: "Nigiri de anguila glaseada con salsa teriyaki casera y un toque de wasabi, una combinación intensa y llena de carácter.", categoria: "Sushi y Sashimi"},
            { id: 4, Nombre: "Plastic Love", imagen: "../img/Img_menu/Category 1 img 4.jpg", precio: 140, descripcion: "Nigiri de anguila glaseada con salsa teriyaki casera y un toque de wasabi, una combinación intensa y llena de carácter.", categoria: "Sushi y Sashimi"},
            { id: 4, Nombre: "Plastic Love", imagen: "../img/Img_menu/Category 1 img 4.jpg", precio: 140, descripcion: "Nigiri de anguila glaseada con salsa teriyaki casera y un toque de wasabi, una combinación intensa y llena de carácter.", categoria: "Sushi y Sashimi"},
            { id: 4, Nombre: "Plastic Love", imagen: "../img/Img_menu/Category 1 img 4.jpg", precio: 140, descripcion: "Nigiri de anguila glaseada con salsa teriyaki casera y un toque de wasabi, una combinación intensa y llena de carácter.", categoria: "Sushi y Sashimi"},

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
                        <h5 class="card-title">${producto.id}. ${producto.Nombre}</h5>
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

            carrito.forEach((item) => {
                const fila = document.createElement("tr");
                fila.innerHTML = `
                    <td>${item.producto.Nombre}</td>
                    <td>${item.cantidad}</td>
                    <td>$${item.producto.precio * item.cantidad}</td>
                `;
                resumenCompra.appendChild(fila);
                subtotalTotal += item.producto.precio * item.cantidad;
            });

            total.textContent = `$${subtotalTotal}`;
        }

        // Botón para finalizar la compra
        const botonFinalizarCompra = document.getElementById("finalizarCompra");

        botonFinalizarCompra.addEventListener("click", function () {
            localStorage.setItem("carrito", JSON.stringify(carrito));
            sessionStorage.setItem("total", total.textContent);
            window.location.href = "recibo.html";
        });
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
                    <td>${item.producto.Nombre}</td>
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
    }
}); 