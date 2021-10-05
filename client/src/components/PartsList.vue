<template>

<div class="mt-6 grid grid-cols-1 gap-y-2">
  
  <div class="border-gray-100 border-2 p-2 item" v-for="item in items" :key="item.id">
    <!--PRODUCT DATA LINE-->
    <div class="grid lg:grid-cols-6 align-middle justify-center">

      <div class="grid justify-center text-center self-center">
        <p>{{ item.name }}</p>
      </div>

      <div class="text-sm text-gray-700 self-center justify-center flex">
        <p> {{ item.manufacturer }}</p>
      </div>

      <div class="text-sm text-gray-700 text-left self-center">
        <p><b>ID:</b> {{ item.id }}</p>
        <p><b>METAI:</b> {{ item.year }}</p>
        <p><b>MODELIS:</b> {{ item.model }}</p>
        <p><b>SPALVA:</b> {{ item.color }}</p>
      </div>

      <div class="text-sm text-gray-700 self-center justify-center flex">
        <p>€ {{ item.price }}</p>
      </div>
      
      <ApolloMutation
      :mutation="require('../graphql/deletePart.gql')"
      @done="refetchParts"
      class="flex">
      
        <template v-slot="{ mutate }">
          <button class="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-7 px-4 cursor-pointer self-center"
          @click="mutate({ variables: { id: item.id } })"
          >Ištrinti</button>
        </template>
      </ApolloMutation>

      <button class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-7 px-4 cursor-pointer self-center" 
      @click="slideEditMenu">Redaguoti</button>

  </div>
  <!--EDIT MENU-->
  <div class="my-5 edit-menu hidden">
    <ApolloMutation
    :mutation="require('../graphql/editPart.gql')"
    :variables="{
        id: item.id,
        name: item.name, 
        price: parseInt(item.price), 
        manufacturer: item.manufacturer, 
        model: item.model, 
        year: parseInt(item.year), 
        color: item.color, 
    }"
    class="form">
    
      <template slot-scope="{ mutate, error }">
        <form class="grid grid-cols-1 lg:grid-cols-5 gap-2" v-on:submit.prevent="mutate()">
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
            <input type="text" placeholder="Metai" v-model="item.year">
          </div>
          <div>
            <input type="text" placeholder="Spalva" v-model="item.color">
          </div>
          <div>
            <input type="text" placeholder="Kaina" v-model="item.price">
          </div>
          <div class="flex justify-center lg:block">
            <button type="submit" class="shadow bg-green-500 hover:bg-green-400 float-left focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" @click="slideEditMenu">
              Saugoti
            </button>
          </div>
          <p v-if="error">An error occurred: {{ error }}</p>
        </form>
      </template>
      </ApolloMutation>
    </div>
    <!--EDIT MENU END-->
  </div>
</div>

</template>

<script>
import $ from 'jquery'
export default {
    name: "partsList",
    props: ['items'],
    methods: {
      slideEditMenu(event) {
        $(event.target).closest(".item").find(".edit-menu").slideToggle();
      },
      refetchParts() {
        this.$parent.refetchParts()
      }
    },
}
</script>

