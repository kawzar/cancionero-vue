<template lang="html">
  <div>
    <ul>
       <h3>{{song.title}}</h3>
       <p>{{song.lyrics}}</p>
    </ul>
  </div>
</template>
<script>
import SongsApi from '../services/SongsApi';
export default {
    name: 'SongDetails',
  data () {
    return {
      song: {id: '', title: '', lyrics: ''}
    }
  },
  mounted () {
    this.loadSongDetails()
  },
  methods: {
    async loadSongDetails () {
      const response = await SongsApi.getSongById(this.$route.params.id)
      this.song = response.data
    }
  }
}
</script>
<style lang="css">
</style>