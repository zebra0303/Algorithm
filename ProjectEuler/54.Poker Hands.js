const log = console.log;

// Need to add all text content
const txt = `8C TS KC 9H 4S 7D 2S 5D 3S AC
5C AD 5D AC 9C 7C 5H 8D TD KS
3H 7H 6S KC JS QH TD JC 2D 8S`;

const arr_txt = txt.split('\n');

function getScoreData(hand) {
  const arrOrder = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  const scores = {
    'Royal Flush': 10,
    'Straight Flush': 9,
    'Four of a Kind': 8,
    'Full House': 7,
    Flush: 6,
    Straight: 5,
    'Three of a Kind': 4,
    'Two Pair': 3,
    'One Pair': 2,
    'High End': 1,
  };

  // order of hand
  const orderOfHand = hand.sort((a, b) => {
    return arrOrder.indexOf(a[0]) - arrOrder.indexOf(b[0]);
  });

  let cntSame = 1;
  let cntPair = 0;
  let lastSuit = '';
  let cntFlush = 1;
  let cntStraight = 1;
  let isFullHouse = false;
  const lastIdx = orderOfHand.length - 1;
  const pairMax = [0, arrOrder.indexOf(orderOfHand[lastIdx][0])];
  for (let i = 0; i < lastIdx; i++) {
    if (orderOfHand[i][1] === orderOfHand[i + 1][1]) {
      cntFlush++;
    }

    if (orderOfHand[i][0] === orderOfHand[i + 1][0]) {
      pairMax[0] = arrOrder.indexOf(orderOfHand[i][0]);

      if (cntSame === 3) {
        // already checked if cntPair === 2
        isFullHouse = true;
      }

      cntSame = lastSuit !== orderOfHand[i][0] ? 2 : cntSame + 1;
      if (i === 0 || lastSuit !== orderOfHand[i][0]) {
        cntPair++;
      }

      lastSuit = orderOfHand[i][0];
    }

    if (arrOrder.indexOf(orderOfHand[i + 1][0]) - arrOrder.indexOf(orderOfHand[i][0]) === 1) {
      cntStraight++;
    }

    if (cntPair === 2 && cntSame === 3) {
      isFullHouse = true;
    }
  }

  let rankName = 'High End';
  if (cntStraight === 5 && cntFlush === 5) {
    if (orderOfHand[0][0] === 'T') {
      rankName = 'Royal Flush';
    } else if (cntStraight === 5 && cntFlush === 5) {
      rankName = 'Straight Flush';
    }
  } else if (isFullHouse) {
    rankName = 'Full House';
  } else if (cntFlush === 5) {
    rankName = 'Flush';
  } else if (cntStraight === 5) {
    rankName = 'Straight';
  } else if (cntSame === 4) {
    rankName = 'Four of a Kind';
  } else if (cntSame === 3) {
    rankName = 'Three of a Kind';
  } else if (cntPair === 2) {
    rankName = 'Two Pair';
  } else if (cntPair === 1) {
    rankName = 'One Pair';
  }

  return { score: scores[rankName], pairMax };
}

let cntWin = 0;
for (let i = 0; i < arr_txt.length; i++) {
  const arr_hand = arr_txt[i].split(' ');
  const hand01 = arr_hand.slice(0, 5);
  const hand02 = arr_hand.slice(5);

  const score01 = getScoreData(hand01);
  const score02 = getScoreData(hand02);
  if (score01.score > score02.score) {
    cntWin++;
  } else if (score01.score === score02.score) {
    if (score01.pairMax[0] > score02.pairMax[0]) {
      cntWin++;
    } else if (
      score01.pairMax[0] === score02.pairMax[0] &&
      score01.pairMax[1] > score02.pairMax[1]
    ) {
      cntWin++;
    }
  }
}

log('Player 1 wins: ', cntWin);
