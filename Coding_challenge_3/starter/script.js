const dolphinFirstScore = 96;
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