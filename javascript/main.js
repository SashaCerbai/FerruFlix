const app = Vue.createApp({

    mounted() {
        console.log("mounted")
        this.loadPage()
    },
    data() {
        return {
            items: [],
            count: 1
        }
    },

    methods: {

        convertDate(inputFormat) {
            function pad(s) { return (s < 10) ? '0' + s : s; }
            var d = new Date(inputFormat)
            return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
        },

        loadPage() {
            fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=6f9286d54de4891ea7a5c91779e09786&page=${this.count}`)
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

        }



    },
    computed: {


    },


})