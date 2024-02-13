<template >
    <h4>Añadir Perro</h4>
    <div class="q-pa-md">

        <q-form @submit="createDog" class="q-gutter-md">

            <q-input filled v-model="name" label="Nombre" required />
            <q-input filled v-model="race" label="Raza" required />
            <q-input filled v-model="size" label="Tamaño" required />
            <q-input filled v-model="color" label="Color" required />
            <q-file v-model="image" label="Subir Foto" required filled style="max-width: 300px" accept=".jpg, image/*, ">
                <template v-slot:prepend>
                    <q-icon name="camera" />
                </template>
            </q-file>
            <div>
                <q-btn label="Añadir" type="submit" color="primary" />
                <q-btn label="Cancelar" class="q-ml-md" href="/" />
            </div>

        </q-form>

    </div>
</template>
<script>
import dogsCollection from '../firebase';

import { addDoc, } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
    data() {
        return {
            name: null,
            race: null,
            size: null,
            color: null,
            image: null,
            imageUrl: null,
            urlFoto: null
        }
    },
    methods: {
        async createDog() {
            const storage = getStorage();
            const storageRef = ref(storage, this.image.name);
            uploadBytes(storageRef, this.image).then((snapshot) => {
            });

            getDownloadURL(ref(storage, this.image.name))
                .then((url) => {

                    this.urlFoto = url

                    const addedDoc = addDoc(dogsCollection, {
                        name: this.name,
                        race: this.race,
                        size: this.size,
                        color: this.color,
                        urlFoto: this.urlFoto,

                    });
                    this.$router.push('/')
                })
                .catch((error) => {
                    console.log('error al subir la imagen')
                });

        }
    }
}
</script>