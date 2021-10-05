<template>

<div class="pt-4">
    <button type="submit" class="shadow bg-green-500 w-100 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold px-4 rounded"
    @click="menuVisible=!menuVisible">
        Pridėti dalį
    </button>
    
    <div class="my-5" v-bind:class="{ hidden: !menuVisible }">
  
    <ApolloMutation
    :mutation="require('../graphql/createPart.gql')"
    :variables="{
        id: item.id, 
        name: item.name, 
        price: parseInt(item.price), 
        manufacturer: item.manufacturer, 
        model: item.model, 
        year: parseInt(item.year), 
        color: item.color, 
    }"
    class="form"
    @done="updatePartsAndCloseMenu"
    >
      <template slot-scope="{ mutate, error }">
        <form class="grid grid-cols-1 lg:grid-cols-5 gap-2" v-on:submit.prevent="mutate()">
          <div>
            <input type="text" placeholder="ID" v-model="item.id">
          </div>
          <div>
            <input type="text" placeholder="Pavadinimas" v-model="item.name">
          </div>
          <div>
            <input type="text" placeholder="Gamintojas" v-model="item.manufacturer">
          </div>
          <div>
            <input type="text" placeholder="Modelis" v-model="item.model">
          </div>  
          <div>
            <input type="number" placeholder="Metai" v-model="item.year">
          </div>
          <div>
            <input type="text" placeholder="Spalva" v-model="item.color">
          </div>
          <div>
            <input type="number" placeholder="Kaina" v-model="item.price">
          </div>
          <div class="flex justify-center lg:block">
            <button type="submit" class="shadow bg-green-500 hover:bg-green-400 float-left focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
              Sukurti
            </button>
          </div>
          <p v-if="error">An error occurred: {{ error }}</p>
        </form>
      </template>
      </ApolloMutation>

    </div>
</div>
</template>

<script>

export default {
    name: 'createPart',
    data() {
        return {
            menuVisible: false,
            item: {
                id: "",
                name: "",
                manufacturer: "",
                model: "",
                year: "",
                color: "",
                price: "",
            }
        }
    },

    methods: {
        updatePartsAndCloseMenu () {
          this.menuVisible = false;
          this.$parent.refetchParts()
        }
    }
}
</script>