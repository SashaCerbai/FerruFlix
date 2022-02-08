const app = Vue.createApp({


    mounted() {
        const id = new URLSearchParams(location.search).get("id");
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6f9286d54de4891ea7a5c91779e09786`)
            .then(response => response.json())
            .then(data => this.item = data)
        fetch(`https://api.themoviedb.org/3/movie/${id}/casts?api_key=6f9286d54de4891ea7a5c91779e09786`)
            .then(response => response.json())
            .then(data => this.actors = data.cast)

    },
    data() {
        return {
            item: {},
            actors: []
        }
    },

    methods: {
        convertDate(inputFormat) {
            function pad(s) { return (s < 10) ? '0' + s : s; }
            var d = new Date(inputFormat)
            return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
        },



    },
    computed: {

    },

})