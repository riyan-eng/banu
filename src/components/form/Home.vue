<template>
    <div class="flex grid p-2">
        <form @submit.prevent="handleSubmit">
            <label for="" class="my-2">Nama</label>
            <InputText v-model="reqBody.name" type="text" class="w-full md:w-14rem my-2" placeholder="Masukkan nama" />
            <label for="" class="my-2">Umur</label>
            <InputNumber v-model="reqBody.age" inputId="integeronly" class="w-full md:w-14rem my-2"
                placeholder="Masukkan umur" />
            <label for="" class="my-2">Gender</label>
            <Dropdown v-model="reqBody.gender" :options="genders" optionLabel="name" placeholder="Pilih jenis kelamin"
                class="w-full md:w-14rem my-2" />

            <Button class="my-2" label="Submit" type="submit" />

        </form>

    </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import { ref } from "vue";
import axios from 'axios'

const reqBody = ref({
    name: "",
    age: 0,
    gender: null,
});

const genders = ref([
    { name: 'Laki-laki', code: 'L' },
    { name: 'Perempuan', code: 'P' },
]);

async function handleSubmit() {
    try {
        // console.log("halo")
        // console.log(reqBody.value.name)
        // console.log(reqBody.value.age)
        // console.log(reqBody.value.gender)
        console.log(reqBody);
        const url = 'http://localhost:3000/users'
        // const fetcher = await fetch(url, {
        //     method: 'post',
        //     body: {
        //         "id": 95,
        //         "name": "banynay",
        //         "age": 3,
        //         "gender": null
        //     }
            
            
        // })
        const fetcher = await axios.post(url, reqBody.value)
        // const response = await fetcher.json()
        console.log(fetcher)
    } catch (error) {
        console.log(error)
    }
}
</script>