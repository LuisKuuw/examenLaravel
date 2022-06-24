<template>
    <div class="my-5">
        <h1 class="mb-4">Crear Libro</h1>
        <form @submit.prevent="crear()">
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
            <button type="submit" class="btn btn-success rounded-pill">Agregar</button>
        </form>
    </div>
</template>

<script>

import axios from 'axios';

export default {

    name: "crear-book",
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

    methods: {
        async crear() {
            await axios.post("/api/book", this.book).then((reponse) => {
                this.$router.push({ name: "viewBooks" });
            }).catch(error =>{
                console.log(error);
            });
        },
    },
};
</script>
