<template >
    <div>
        <h4>Editar Perro</h4>
        <div class="q-pa-md">
            <q-form @submit.prevent="updateDog()" class="q-gutter-md">

                <q-input filled v-model="dogInfo.name" label="Nombre" required />
                <q-input filled v-model="dogInfo.race" label="Raza" required />
                <q-input filled v-model="dogInfo.size" label="Tamaño" required />
                <q-input filled v-model="dogInfo.color" label="color" required />
                <q-file v-model="image" label="Actualizar Foto" filled style="max-width: 300px" accept=".jpg, image/*, ">
                    <template v-slot:prepend>
                        <q-icon name="camera" />
                    </template>
                </q-file>
                <div>
                    <q-btn label="Actualizar" type="submit" color="primary" />
                    <q-btn label="Cancelar" class="q-ml-md" href="/" />
                </div>
            </q-form>
        </div>
    </div>
</template>
<script>
import dogsCollection from '../firebase';
import { getDoc, doc, setDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default {
    data() {
        return {
            selectedDog: {},
            dogId: null,
            docRef: null,
            image: null,
            imageUrl: null,
            dogInfo: {
                name: null,
                race: null,
                size: null,
                color: null,
                urlFoto: null
            }
        }
    },
    methods: {
        async getDog() {
            let dogRef = doc(dogsCollection, this.dogId)
            this.docRef = dogRef;
            let dog = await getDoc(this.docRef)
            let dogData = dog.data()
            this.dogInfo.name = dogData.name
            this.dogInfo.race = dogData.race
            this.dogInfo.size = dogData.size
            this.dogInfo.color = dogData.color
            this.dogInfo.urlFoto = dogData.urlFoto
        },
        async updateDog() {

            if (this.image == null) {

                setDoc(this.docRef, this.dogInfo);
                this.$router.push('/')

            }
            else {
                const storage = getStorage();
                const storageRef = ref(storage, this.image.name);
                uploadBytes(storageRef, this.image).then((snapshot) => {
                });

                getDownloadURL(ref(storage, this.image.name))
                .then((url) => {

                    this.dogInfo.urlFoto = url

                    setDoc(this.docRef, this.dogInfo);

                    this.$router.push('/')

                })
                .catch((error) => {
                });
            }

            
        }
    },
    created() {
        let dogId = this.$route.params.dogId
        this.dogId = dogId;
        this.getDog()

    },

}
</script>
<style></style>