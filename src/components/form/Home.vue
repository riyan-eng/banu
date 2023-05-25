<template>
    <div class="flex grid p-2">
        <form @submit.prevent="handleSubmit">
            <label for="" class="my-2">Nama</label>
            <InputText v-model="name" type="text" class="w-full md:w-14rem my-2" placeholder="Masukkan nama"/>
            <label for="" class="my-2">Umur</label>
            <InputNumber v-model="age" inputId="integeronly" class="w-full md:w-14rem my-2" placeholder="Masukkan umur"/>
            <label for="" class="my-2">Gender</label>
            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Pilih jenis kelamin" class="w-full md:w-14rem my-2" />
            
            <Button class="my-2" label="Submit" type="submit"/>

        </form>

    </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import { ref } from "vue";

const name = ref();
const age = ref();
const selectedCity = ref();
const cities = ref([
    { name: 'Laki-laki', code: 'L' },
    { name: 'Perempuan', code: 'P' },
]);

function handleSubmit(params) {
    console.log("halo")
    console.log(name.value)
    console.log(age.value)
    console.log(selectedCity.value.code)
}
</script>