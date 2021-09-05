function calculateAttack(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth <= 0) {
        return { width: "0%" };
      } else {
        return { width: this.monsterHealth + "%" };
      }
    },
    playerBarStyles() {
      if (this.playerHealth <= 0) {
        return { width: "0%" };
      } else {
        return { width: this.playerHealth + "%" };
      }
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },

  methods: {
    attackMonster() {
      this.currentRound++;
      let attackValue = calculateAttack(12, 5);
      this.monsterHealth -= attackValue;
      this.addLogMessage("Player", "attacks", attackValue);

      this.attackPlayer();
    },
    attackPlayer() {
      let attackValue = calculateAttack(15, 8);
      this.playerHealth -= attackValue;
      this.addLogMessage("Monster", "attacks", attackValue);
    },
    specialAttack() {
      this.currentRound++;
      let attackValue = calculateAttack(25, 10);
      this.monsterHealth -= attackValue;
      this.addLogMessage("Player", "attacks", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      let healValue = calculateAttack(20, 8);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage("Player", "heals", healValue);
      this.attackPlayer();
    },
    startNewGame() {
      (this.playerHealth = 100),
        (this.monsterHealth = 100),
        (this.currentRound = 0),
        (this.winner = null);
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
