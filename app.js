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
            this.running = true;
            this.playerLife = 100;
            this.monsterLife = 100;
        },
        attack(special){
            console.log('attack')
            /*this.hurt('playerLife',7,12,false)       */
            setTimeout(() => this.hurt('playerLife',7,12,false), 500)
            this.hurt('monsterLife',5,10,special)
            /*setTimeout(() => this.hurt('monsterLife',7,5,special), 500);     */
            /*this.hurt('monsterLife',5,10,special)*/
        },
        hurt(toBeAttacked,min,max,special){
            const plus = special ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[toBeAttacked] = Math.max(this[toBeAttacked] - hurt, 0) //make sure minimun value is 0
        },
        heal(min, max){
           const heal = this.getRandom(min, max);
           setTimeout(() => this.playerLife = Math.min(this.playerLife + heal, 100),500);
        },
        healAndHurt(){
            this.heal(10, 15);            
            this.hurt('playerLife',7,12,false)
        },
        getRandom(min, max){
            const value = Math.random() * (max-min) + min
            return Math.round(value)
        },

    },
    watch:{
        hasResults(value) {
            if(value) this.running = false
        }
    }
})