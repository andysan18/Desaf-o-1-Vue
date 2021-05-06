const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Mantenedor de Productos',
        productos: [],
        errors: [],
        editIndex: -1
    },
    methods: {
        addProd() {
            if (!this.nombre) {
                this.errors.push('El nombre no puede estar vacio.');
            }
            if (!this.descripcion) {
                this.errors.push('La descripcion no puede estar vacia.');
            }
            if (!this.precio) {
                this.errors.push('El precio no puede estar vacio.');
            }

            console.log(this.errors.length)

            if (this.errors.length === 0) {
                if(this.precio > 0){
                    this.productos.push(new Producto({ nombre: this.nombre, descripcion: this.descripcion, precio: this.precio }))
                    this.nombre = '';
                    this.descripcion = '';
                    this.precio = '';
                    this.errors = [];
                }else{
                    this.errors.push('El precio no puede ser menor que 0.');
                }
            }

        },
        editProd(index) {
            this.editIndex = index;
            this.nombre = this.productos[index].nombre;
            this.descripcion = this.productos[index].descripcion;
            this.precio = this.productos[index].precio;
        },
        deletedProd(index) {
            this.productos.splice(index, 1);
        },
        updateProd() {
            this.productos[this.editIndex].nombre = this.nombre;
            this.productos[this.editIndex].descripcion = this.descripcion;
            this.productos[this.editIndex].precio = this.precio;

            this.cancel();
        },
        cancel() {
            this.nombre = '';
            this.descripcion = '';
            this.precio = '';
            this.editIndex = -1;
        },
        reintentar(){
            this.nombre = '';
            this.descripcion = '';
            this.precio = '';
            this.errors = [];
        }
    }
})

class Producto {
    constructor(producto = {}) {
        this.nombre = producto.nombre
        this.descripcion = producto.descripcion
        this.precio = producto.precio
    }
}