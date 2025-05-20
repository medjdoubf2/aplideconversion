  function convertir() {
            const horas = parseInt(document.getElementById('horas').value) || 0;
            const minutos = parseInt(document.getElementById('minutos').value) || 0;
            const segundos = parseInt(document.getElementById('segundos').value) || 0;
            const totalSegundos = (horas * 3600) + (minutos * 60) + segundos;
            document.getElementById('resultado').innerText = `Total en segundos: ${totalSegundos}`;
        }

        function mostrarTabla() {
            const numero = parseInt(document.getElementById('numero').value);
            if (numero < 1 || numero > 10) {
                document.getElementById('tabla').innerHTML = 'Por favor, introduce un número del 1 al 10.';
                return;
            }
            let resultado = `<h2>Tabla del ${numero}</h2><ul>`;
            for (let i = 1; i <= 10; i++) {
                resultado += `<li>${numero} x ${i} = ${numero * i}</li>`;
            }
            resultado += '</ul>';
            document.getElementById('tabla').innerHTML = resultado;
        }

        function calcularTotal() {
            const nombre = document.getElementById('nombre').value;
            const precio = parseFloat(document.getElementById('precio').value) || 0;
            const iva = parseFloat(document.getElementById('iva').value) || 0;
            const total = precio + (precio * (iva / 100));
            document.getElementById('total').innerText = `Total a pagar por ${nombre}: ${total.toFixed(2)} €`;
        }