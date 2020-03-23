new Vue ({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        running: false,

    },
    computed:{
        hasResults(){
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods:{
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100;
        }

    },
    watch:{

    }
})