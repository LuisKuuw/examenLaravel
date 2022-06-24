<template>
    <div class="d-flex justify-content-center">
        <ul class="nav justify-content-center" style="background-color: #2A2E37; padding: 20px 0px; border-radius:20px; margin-top:10px; width:50%">
            <li class="nav-item me-3">
                <router-link
                    :to="{ name: 'creteBook' }"
                    class="btn btn-info rounded-pill"
                    >Crear Libro <i class="fas fa-book"></i
                ></router-link>
            </li>
            <li class="nav-item">
                <router-link
                    :to="{ name: 'viewBooks' }"
                    class="btn btn-info rounded-pill"
                    >Ver Libros <i class="fas fa-eye"></i></router-link>
            </li>
        </ul>
    </div>
</template>
