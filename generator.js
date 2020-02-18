function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}
// main function
function generateRubbish(result) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    founder: [
      '週末加班',
      '要能賺錢',
      '想個 business model',
      '找 VC 募錢',
      '每天被夢想叫醒'
    ]
  };
  const phrase = ['很簡單', '很容易', '很快', '很正常'];
  let rubbish = '';

  // check number of target
  if (!result) {
    return 'You have to choose at least one person.';
  } else {
    rubbish = '身為一個';
    // get the target & random task
    // TODO: 資料結構改一下應該可以用loop完成，有空再處理
    if (result === 'engineer') {
      rubbish += '工程師，';
      let randomTask = task.engineer[getRandomIndex(task.engineer.length)];
      rubbish += randomTask + '，';
    } else if (result === 'designer') {
      rubbish += '設計師，';
      let randomTask = task.designer[getRandomIndex(task.designer.length)];
      rubbish += randomTask + '，';
    } else if (result === 'founder') {
      rubbish += '創業家，';
      let randomTask = task.founder[getRandomIndex(task.founder.length)];
      rubbish += randomTask + '，';
    }
    // combine a random phrase
    rubbish += phrase[[getRandomIndex(task.engineer.length)]] + '吧!';
    // random pick one task of target
    return rubbish;
  }
}
module.exports = generateRubbish;
