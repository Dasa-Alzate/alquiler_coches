$(document).ready(function () {
  
    const API_URL = '/products'; //Microservicio de productos
  
    //Cargar productos al iniciar
    function loadProducts() {
      $.ajax({
        url: `${API_URL}`,
        method: 'GET', 
        dataType: 'json', 
        success: function (products) {
          console.log(products);
          const tableBody = $('#products-table tbody');
          tableBody.empty();
          products.forEach(product => {
            const row = `
              <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td class="actions">
                  <button class="edit" data-id="${product.id}">Editar</button>
                  <button class="delete" data-id="${product.id}">Eliminar</button>
                </td>
              </tr>
            `;
            tableBody.append(row);
          });
        },
        error: function (xhr, status, error) {
          console.error(`Error: ${error}`);
          alert(`Error al obtener productos: ${xhr.responseText || 'Ha ocurrido un error'}`);
        }
      });
      
    }
  
    //Crear o actualizar un producto
    $('#product-form').submit(function (e) {
      const id = $('#product-id').val();
      const name = $('#name').val();
      const price = $('#price').val();
  
      const producto = { name, price };
      console.log($('#product-id').val());
      if (id) {
        //Actualizar producto
        $.ajax({
          url: `${API_URL}/${id}`,
          method: 'PUT',
          contentType: 'application/json',
          data: JSON.stringify(producto),
          success: () => {
            console.log("Exito");
            loadProducts();
            resetForm();
          },
          error: (xhr, status, error) => {
            console.error(`Error: ${error}`);
            alert(`Error al modificar producto: ${xhr.responseText || 'Ha ocurrido un error'}`);
          }          
        });
      } else {
        //Crear producto
        
        $.ajax({
          url: `${API_URL}`,
          method: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(producto),
          success: () => {
            console.log("Exito");
            loadProducts();
            resetForm();
          },
          error: (xhr, status, error) => {
            console.error(`Error: ${error}`);
            alert(`Error al crear producto: ${xhr.responseText || 'Ha ocurrido un error'}`);
          }          
        });
      }
    });
  
    //Editar producto
    $(document).on('click', '.edit', function () {
      const id = $(this).data('id');
      $.ajax({
        url: `${API_URL}/${id}`,
        method: 'GET', 
        success: function (product) {
          $('#product-id').val(product.id);
          $('#name').val(product.name);
          $('#price').val(product.price);
          $('#submit-button').text('Actualizar');
        },
        error: function (xhr, status, error) {
          console.error(`Error: ${error}`);
          alert(`Error al obtener productos: ${xhr.responseText || 'Ha ocurrido un error'}`);
        }
      });
    });
  
    //Eliminar producto
    $(document).on('click', '.delete', function () {
      const id = $(this).data('id');
      $.ajax({
        url: `${API_URL}/${id}`,
        method: 'DELETE',
        success: () => {
          loadProducts();
        },
        error: (xhr, status, error) => {
          console.error(`Error: ${error}`);
          alert(`Error al eliminar producto: ${xhr.responseText || 'Ha ocurrido un error'}`);
        } 
      });
    });
  
    //Resetear formulario
    function resetForm() {
      $('#product-id').val('');
      $('#name').val('');
      $('#price').val('');
      $('#submit-button').text('Guardar');
    }
  
    //Cargar productos al inicio
    loadProducts();
  });
  