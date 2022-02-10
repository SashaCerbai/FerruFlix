const app = Vue.createApp({


    mounted() {
        const id = new URLSearchParams(location.search).get("id");
        const language = new URLSearchParams(location.search).get("lng");
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=6f9286d54de4891ea7a5c91779e09786&language=${this.language}`)
            .then(response => response.json())
            .then(data => this.item = data)
        fetch(`https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=6f9286d54de4891ea7a5c91779e09786&language=${this.language}`)
            .then(response => response.json())
            .then(data => this.actors = data.cast)
        fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=6f9286d54de4891ea7a5c91779e09786&language=${this.language}`)
            .then(response => response.json())
            .then(data => this.films = data.results)

    },
    data() {
        return {
            item: {},
            actors: [],
            films: [],
            language: new URLSearchParams(location.search).get("lng")
        }
    },

    methods: {
        convertDate(inputFormat) {
            function pad(s) { return (s < 10) ? '0' + s : s; }
            var d = new Date(inputFormat)
            return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
        },
        goBack() {
            history.back()
        }


    },
    computed: {

    },

})