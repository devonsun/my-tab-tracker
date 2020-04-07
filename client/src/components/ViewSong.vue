<template>
  <v-layout>
    <v-flex xs6>
      <panel title="Song Metadata">
        <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{ song.title }}
              </div>
              <div class="song-artist">
                {{ song.artist }}
              </div>
              <div class="song-genre">
                {{ song.genre }}
              </div>
            </v-flex>
            <v-flex xs6>
              <img :src="song.albumImageUrl" class="album-image" />
            </v-flex>
          </v-layout>
      </panel>
    </v-flex>

    <v-flex xs6 class="ml-2">
      <panel title="Tabs">
        <textarea
          label="Tab"
          multi-line
          v-model="song.tab"
        ></textarea>
      </panel>
    </v-flex>
    <v-layout>
      <v-flex xs6>
        <panel title="Youtube">
          <!-- youtube embedded -->
        </panel>
      </v-flex>
      <v-flex xs6 class="ml-2">
      <panel title="Lyrics">
        <textarea
          label="lyrics"
          multi-line
          v-model="song.lyrics"
        ></textarea>
      </panel>
    </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
  import SongsService from '@/services/SongsService';
  import Panel from '@/components/Panel';

  export default {
    data() {
      return {
        song: {},
      };
    },
    async mounted() {
      const songId = this.$store.state.route.params.songId;
      const song = (await SongsService.show(songId)).data;
      console.log(song);
    },
    components: {
      Panel,
    },
  };
</script>

<style scoped>
  .song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }

  .song-title {
    font-size: 30px;
  }

  .song-artist {
    font-size: 24px;
  }

  .song-genre {
    font-size: 18px;
  }

  .album-image {
    width: 70%;
    margin: 0 auto;
  }

  .textarea {
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
  }
</style>

