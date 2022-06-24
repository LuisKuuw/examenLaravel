<template>
    <div class="my-5">
        <h2 class="text-center">EXAMEN LIBROS TAAG GENETICS</h2>

        <div class="mt-5">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Autor</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Edición</th>
                            <th scope="col">Datos de publicación</th>
                            <th scope="col">Tipo de contenido</th>
                            <th scope="col">Restricciones</th>
                            <th scope="col">Materia</th>
                            <th scope="col">Proveedor</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="book in books" :key="book.id">
                            <td>{{ book.autor }}</td>
                            <td>{{ book.titulo }}</td>
                            <td>{{ book.edicion }}</td>
                            <td>{{ book.datos_publicacion }}</td>
                            <td>{{ book.tipo_contenido }}</td>
                            <td>{{ book.restrincciones }}</td>
                            <td>{{ book.materia }}</td>
                            <td>{{ book.proveedor }}</td>
                            <td>
                                <div>
                                    <router-link
                                        :to="{
                                            name: 'editBook',
                                            params: { id: book.id },
                                        }"
                                        class="btn btn-warning rounded-pill"
                                        ><i class="fas fa-edit"></i
                                    ></router-link>
                                    <button class="btn btn-danger rounded-pill" @click="removeBook(book.id)">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "books",
    data() {
        return {
            books: [],
        };
    },
    mounted() {
        this.mostrarBooks();
    },
    methods: {
        async mostrarBooks() {
            await axios.get("/api/book")
                .then((response) => {
                    this.books = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        removeBook(id) {
            if (confirm("¿Confirma eliminar el libro?")) {
                axios.delete(`/api/book/${id}`)
                    .then((response) => {
                        this.books = response.data;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
    },
};
</script>
