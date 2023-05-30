<template>
    <h1>Halaman bantuan</h1>
    <table>
        <thead>
            <th>ID</th>
            <th>Nama</th>
            <th>Umur</th>
            <th>Gender</th>
            <th>Aksi</th>
        </thead>
        <tbody>
            <tr v-for="(item, index) in users" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.age }}</td>
                <td>{{ item.gender.name }}</td>
                <td>
                    <button @click="hapus(item.id)">hapus</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios';

const users = ref(null);
const url = 'http://localhost:3000/users'
fetch(url).then(response => response.json()).then(
    function(data) {
        console.log(data);
        users.value = data
    }
)
async function hapus(id) {
    console.log(id)
    const fetcher = await axios.delete(`${url}/${id}`)
    console.log(fetcher)
}
</script>