<script setup lang="ts">
    import type { Ref  } from 'vue';
    import { ref } from 'vue';
    import type { IPrenda } from '@/models/IPrenda';
    import ListaPrendas from './ListaPrendas.vue';

    const catalogo : Ref<IPrenda[]> = ref([ 
        { id: 1, nombre: 'Camisa Clásica', talle: 'M', color: 'Azul', precio: 50.99, stock: 12 },
        { id: 2, nombre: 'Pantalón Cargo', talle: 'L', color: 'Verde', precio: 89.50, stock: 4 },
        { id: 3, nombre: 'Vestido Veraniego', talle: 'S', color: 'Rojo', precio: 35.00, stock: 0 },
        { id: 4, nombre: 'Chaqueta Denim', talle: 'XL', color: 'Azul', precio: 120.00, stock: 15 },
        { id: 5, nombre: 'Jersey de Lana', talle: 'M', color: 'Gris', precio: 65.75, stock: 6 },
        { id: 6, nombre: 'Short Deportivo', talle: 'S', color: 'Negro', precio: 25.00, stock: 2 },
        { id: 7, nombre: 'Falda Plisada', talle: 'L', color: 'Negro', precio: 45.00, stock: 0 }
    ])
    
    function resetearFiltros() {
        
    }
</script>

<template>
    <div class="controles">
        <h3>Controles de catalogo</h3>
        <div class="filtros">
            <select name="" id="">
                <option selected value="">TODOS</option>
            </select>
            <select name="" id="">
                <option selected value="">TODOS</option>
            </select>
        </div>
        <button class="reset" @:click="resetearFiltros()">Resetear Filtros</button>
    </div>
    
    <ListaPrendas props=""/>
    
</template>

<style>

    .controles{
        display: flexbox;
        padding-bottom: 15px;
        background-color: coral;
        
    }
    .filtros{
        display: flex;
    }

</style>