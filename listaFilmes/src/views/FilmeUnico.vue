<template>
    <ion-page>
      <ion-content :fullscreen="true">
        
        <div class="clique" @click="navigateToRoute">
            <button >Voltar para lista de filmes</button>
        </div>

        <ion-card >
          <img :src="movie.img">
          
          <ion-card-header>
            <ion-card-title>{{ movie.nome }}</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <p>{{ movie.desc }}</p>
          </ion-card-content>
        </ion-card>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonContent, IonPage,IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import axios from 'axios';
  
    export default defineComponent({
        data() {
          return {
            movie: {}
          };
        },
        async mounted() {
            const id = this.$route.params.id;
            this.getMovie(id);
        },
      components: {
        IonContent,
        IonPage,
        IonCard, 
        IonCardContent, 
        IonCardHeader,
        IonCardTitle
      },
      methods: {
    navigateToRoute() {
      this.$router.push({ path: '/' });
    },
    getMovie(id) {
      axios
        .get(`http://localhost:5000/api/posts`)
        .then(response => {
          const movies = response.data;
          console.log(response.data);
          const movie = movies.filter(movie => movie.id === id)[0];
          console.log(movie);
          this.movie = movie;
        })
        .catch(error => {
          console.log(error);
        });

        
    }
  },
    });
  </script>
  
  <style scoped>
  ion-card.ios{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 80%;
    margin-left: 10%;
    height: fit-content;
  }
  img{
  height: 100%;
}
.clique{
  width: 80%;
  padding: 20px;
  margin-top: 5%;
  margin-left: 10%;
  border-radius: 5px;
  border: 1px solid #8c8c8c;
  background-color: rgb(123, 123, 235);
  text-align: center;
  cursor: pointer;
}
button{
  background-color: transparent;
  font-size: 20px;
  font-style: oblique;
}


p {
  font-size: 20px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}
  
  </style>
  