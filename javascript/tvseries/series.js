const app = Vue.createApp({

    mounted() {
        console.log("mounted")
        this.loadPage()
    },
    data() {
        return {
            items: [],
            count: 1,
            language: new URLSearchParams(location.search).get("lng")
        }
    },

    methods: {

        convertDate(inputFormat) {
            function pad(s) { return (s < 10) ? '0' + s : s; }
            var d = new Date(inputFormat)
            return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
        },

        loadPage() {
            const language = new URLSearchParams(location.search).get("lng");
            fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=6f9286d54de4891ea7a5c91779e09786&page=${this.count}&language=${this.language}`)
                .then(response => response.json())
                .then(data => {
                    this.items = [...this.items, ...data.results]
                })
            this.count++
        },

        starsYes(number) {

            number = number / 2
            return Math.round(number)

        },

        starsNo(number) {

            number = number / 2
            let noRound = 5 - Math.round(number)

            return noRound

        },
        goBack() {
            history.back()
        }



    },
    computed: {


    },


})