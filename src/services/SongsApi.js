import API from '@/services/Api'
export default {
  getSongs () {
    return API().get('songs')
  },
  getSongById(id){
      return API().get('songs/' + id);
  }
}