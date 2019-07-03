<template lang="html">
  <div>
    <ul>
       <li v-bind:key="song._id" v-for='song in songs'>
        <a href="#" v-on:click="goTodetail(song._id)">{{song.title}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import SongsApi from '../services/SongsApi';
export default {
    name: 'Songs',
  data () {
    return {
      songs: []
    }
  },
  mounted () {
    this.loadSongs()
  },
  methods: {
    async loadSongs () {
      const response = await SongsApi.getSongs()
      this.songs = response.data
    },
    goTodetail(id) {
    this.$router.push({name:'song-details',params:{id:id}})
    }
  }
}
</script>
<style lang="css">
</style>