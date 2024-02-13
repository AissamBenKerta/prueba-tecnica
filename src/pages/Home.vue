<template>
    <div class="q-pa-md">
      <div class="row justify-end">
        <q-btn :to="{ path: `/add-dog`}" color="primary" class="q-mb-sm col-2" >Añadir</q-btn>
      </div>

    <q-markup-table >
      <thead >
        <tr><th class="text-center">Foto</th>
          <th class="text-center">Nombre</th>
          <th class="text-center">Raza</th>
          <th class="text-center">Tamaño</th>
          <th class="text-center">Color</th>
          <th class="text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dog in dogs" :key="dog.id">
          <td class="text-center">
            <q-img :src="dog.urlFoto"></q-img>
          </td>
          <td class="text-center">{{ dog.name }}</td>
          <td class="text-center">{{ dog.race }}</td>
          <td class="text-center">{{ dog.size }}</td>
          <td class="text-center">{{ dog.color }}</td>
          <td>
            <q-btn :to="{path: `/dogs/${dog.id}` }" icon="mode_edit" flat ></q-btn>
            <q-btn href="#" icon="delete" @click="deleteDog(dog.id)" flat ></q-btn>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import dogsCollection from '../firebase';
import { getDocs, deleteDoc, doc} from 'firebase/firestore'

export default {
  name: 'Home',
  component:{},
  data() {
    return {
      dogs: [],
      selectedDoc: null
    }
  },
  methods:{
    async fetchDogs(){
      let dogsSnapshot = await getDocs(dogsCollection);
      let dogs = [];
      dogsSnapshot.forEach(dog => {
        let dogData = dog.data();
        dogData.id = dog.id
        dogs.push(dogData);
      });
      this.dogs = dogs
    },
    async deleteDog(dogId){
      let dogRef = doc(dogsCollection, dogId);
      await deleteDoc(dogRef);
      this.$router.go();
    }

  },
  created(){
    this.fetchDogs();
  }
}
</script>
