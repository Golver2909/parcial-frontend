<script setup lang="ts">
    import type { Prop } from 'vue';
    import { defineProps } from 'vue';
    import type { IPrenda } from '@/models/IPrenda';
    import PrendaItem from './PrendaItem.vue';

    // defineProps<{
    //  mostrarPrendas?: IPrenda[]
    // }>
    
    //const props : Prop<IPrenda[]> = 
</script>

<template>
    <h2>Catalogo de prendas</h2>
    <hr>
    <PrendaItem/>  
</template>