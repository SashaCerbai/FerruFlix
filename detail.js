const app = Vue.createApp({


    mounted(){
        const id=new URLSearchParams(location.search).get("id");
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6f9286d54de4891ea7a5c91779e09786`)
            .then(response => response.json())
            .then(data => this.item=data)
            
    },
    data() {
        return {
           item:{},
            data: new Date
        }
    },

    methods:{
      
    },
    computed:{    
    
    },

  })