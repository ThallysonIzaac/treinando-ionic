<template>
  <ion-page>
    <ion-content>
      <div class="main">
        <ion-card v-for="movie in movies" :key="movie.id" @click="navigateToRoute(movie.id)">
          <img :src="movie.img" >
          <ion-card-header>
            <ion-card-title>{{ movie.nome }}</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage ,IonContent ,IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue';
import { defineComponent } from 'vue';
import api from '../api';

  export default defineComponent({
      data() {
      return {
        movies: []
      };
    },
    mounted() {
    api.get('/')
      .then(response => {
        this.movies = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  },
    components: {
      IonCard, 
      IonCardContent, 
      IonCardHeader,
      IonCardTitle,
      IonContent,
      IonPage
    },
    methods: {
    navigateToRoute(id) {
      this.$router.push({ name: 'filmeunico', params: { id } });
    },
  },
  });
</script>

<style scoped>
ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
  ion-card-title.ios{
    font-size: 20px;
    text-align: left;
  }
.main{
  margin-top: 5%;
  width: 90%;
  display:grid;
  grid-template-columns: auto auto;
  row-gap: 10px;
  column-gap: 5%;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 5%;
}
ion-card.ios{
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
img{
  height: 250px;
  width: 100%;
}

</style>
