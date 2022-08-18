<template>
  <div class="max-w-3xl px-2 mx-auto">
    <h1 class="text-3xl text-white text-center my-8">vue-camera-lib demo</h1>

    <WebCamUI @photoTaken="photoTaken" />

    <h3 class="text-xl text-white text-center mt-4">Last photo</h3>
    <img :src="imageSrc" class="mt-8 mb-4" v-if="imageSrc" />
    <div class="text-sm text-white text-center my-4" v-else>Click on Take a photo first</div>
    <div class="text-sm text-white text-center my-4" v-if="imageSrc">Try to also flip your mobile phone to landscape mode :)</div>

    <div class="mb-8 text-center" v-if="imageSrc" >
      <button @click="download" type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Download image</button>
    </div>

    <div class="text-gray-400 text-center p-8 border-t-2 border-gray-900">
      <span class="text-white">vue-camera-lib</span> <span class="text-white">|</span> <a href="https://github.com/AlexKratky/vue-camera-lib" class="hover:text-white hover:underline">Github</a> <span class="text-white">|</span> <a href="https://alexkratky.com" class="hover:text-white hover:underline">With ❤️ by Alex Kratky</a>
    </div>
  </div>

</template>

<script lang="ts">

import { defineComponent } from "vue";

interface PhotoTakenEvent {
  image_data_url: string,
  blob: string,
}
export default defineComponent({
  data() {
    return {
      imageSrc: null as string|null,
    }
  },
  methods: {
    photoTaken(data: PhotoTakenEvent) {
      this.imageSrc = data.image_data_url
      console.log(data)
    },
    download() {
      if ( ! this.imageSrc) {
        return
      }
      const a = document.createElement("a"); 
      a.href = this.imageSrc; 
      a.download = "vue-camera-lib.jpg";
      a.click();
    },
  }
})
</script>