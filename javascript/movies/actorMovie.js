const app = Vue.createApp({


    mounted() {
        const language = new URLSearchParams(location.search).get("lng");
        const idA = new URLSearchParams(location.search).get("idA");
        fetch(`https://api.themoviedb.org/3/person/${idA}?api_key=6f9286d54de4891ea7a5c91779e09786&language=${this.language}`)
            .then(response => response.json())
            .then(data => this.item = data)

    },
    data() {
        return {
            item: {},
            id: new URLSearchParams(location.search).get("id"),
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