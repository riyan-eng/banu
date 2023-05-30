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
        <Toast />        

    </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import { ref } from "vue";
import { useRouter} from "vue-router"
import axios from 'axios'
import Toast from 'primevue/toast';
import { useToast } from "primevue/usetoast";

const toast = useToast();
const router = useRouter();

const show = () => {
    toast.add({ severity: 'info', summary: 'Sukses', detail: 'Berhasil menambahkan data', life: 3000 });
};

const reqBody = ref({
    name: "",
    age: null,
    gender: null,
});

const genders = ref([
    { name: 'Laki-laki', code: 'L' },
    { name: 'Perempuan', code: 'P' },
]);

async function handleSubmit() {
    try {
        const url = 'http://localhost:3000/users'
        const fetcher = await axios.post(url, reqBody.value)
        router.push('/bantuan')
        show()
    } catch (error) {
        console.log(error)
    }
}
</script>