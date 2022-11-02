/*const dolphinFirstScore = 96;
const dolphinSecondScore = 108;
const dolphinThirdScore = 89;
const koalasFirstScore = 88;
const koalasSecondScore = 91;
const koalasThirdScore = 110;

const averageDolphinScore = (dolphinFirstScore + dolphinSecondScore + dolphinThirdScore) / 3;

const averageKoalasScore = (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;

if (averageDolphinScore > averageKoalasScore) {
    console.log("Team Dolphin wins");
} else if (averageDolphinScore = averageKoalasScore) {
    console.log("Both Team have same average score.It's a draw");
} else {
    console.log("Team Koalas Wins");
}
*/

const scoreDolphin = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphin, scoreKoalas);

if (scoreDolphin > scoreKoalas && scoreDolphin >= 100) {
    console.log("Team Dolphin wins the trophy 🏆");
} else if (scoreKoalas > scoreDolphin && scoreKoalas >= 100) {
    console.log("Team Koalas Wins the trophy 🏆");
} else {
    console.log("Both Teams Wins the trophy");
}

