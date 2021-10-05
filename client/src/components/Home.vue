<template>

<div class="bg-white" ref="home">
  <div>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <createPart/>
      <section aria-labelledby="heading" class="pt-6 pb-24">
        <div class="grid grid-cols-1">
          <!-- Product grid -->
          <div class="lg:col-span-3">
                <div class="bg-white">
                  <div class="max-w-2xl mx-auto py-2 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Automobilių dalys</h2>
                    <div v-if="$apollo.queries.parts.error">Loading...</div>
                    <partsList :items="parts"/>
                </div>
              </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</div>
</template>

<script>
import PARTS from '../graphql/Parts.gql'
import createPart from './createPart.vue'
import partsList from './partsList.vue'

export default {
  components: { createPart, partsList },

  apollo: {
    parts: PARTS,
  },

  methods: {
    refetchParts() {
      this.$apollo.queries.parts.refetch()
    }
  }

}
</script>

