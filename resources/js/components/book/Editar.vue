<template>
    <div class="my-5">
        <h1 class="mb-4">Editar Libro</h1>
        <form @submit.prevent="editar()">
            <div class="mb-3">
                <label class="form-label">Autor</label>
                <input type="text" class="form-control" v-model="book.autor" />
            </div>

            <div class="mb-3">
                <label class="form-label">Titulo</label>
                <input type="text" class="form-control" v-model="book.titulo" />
            </div>

            <div class="mb-3">
                <label class="form-label">Edición</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="book.edicion"
                />
            </div>

            <div class="mb-3">
                <label class="form-label">Datos de publicación</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="book.datos_publicacion"
                />
            </div>

            <div class="mb-3">
                <label class="form-label">Tipo de contenido</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="book.tipo_contenido"
                />
            </div>

            <div class="mb-3">
                <label class="form-label">Restricciones</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="book.restrincciones"
                />
            </div>

            <div class="mb-3">
                <label class="form-label">Materia</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="book.materia"
                />
            </div>

            <div class="mb-3">
                <label class="form-label">Proveedor</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="book.proveedor"
                />
            </div>
            <button type="submit" class="btn btn-warning rounded-pill">Editar</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "editar-book",
    data() {
        return {
            book: {
                autor: "",
                titulo: "",
                edicion: "",
                datos_publicacion: "",
                tipo_contenido: "",
                restrincciones: "",
                materia: "",
                proveedor: "",
            },
        };
    },

    mounted() {
        this.mostrarBook();
    },

    methods: {
        async mostrarBook() {
            axios.get(`/api/book/${this.$route.params.id}`)
                .then((response) => {
                    const {
                        autor,
                        titulo,
                        edicion,
                        datos_publicacion,
                        tipo_contenido,
                        restrincciones,
                        materia,
                        proveedor,
                    } = response.data;

                    //asignación de valores
                    this.book.autor = autor;
                    this.book.titulo = titulo;
                    this.book.edicion = edicion;
                    this.book.datos_publicacion = datos_publicacion;
                    this.book.tipo_contenido = tipo_contenido;
                    this.book.restrincciones = restrincciones;
                    this.book.materia = materia;
                    this.book.proveedor = proveedor;
                })
                .catch((error) => {
                    console.log(error.message);
                });
        },

        async editar() {
            await axios.put(`/api/book/${this.$route.params.id}`, this.book)
                .then((response) => {
                    this.$router.push({ name: "viewBooks" });
                })
                .catch((error) => {
                    console.log(error.message);
                });
        },
    },
};
</script>
