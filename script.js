// DOM이 준비되면 실행
document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("nameInput");
  const moodSelect = document.getElementById("moodSelect");
  const fortuneBtn = document.getElementById("fortuneBtn");
  const resultCard = document.getElementById("resultCard");
  const resultText = document.getElementById("resultText");
  const resultHint = document.getElementById("resultHint");

  // 연애 운세 리스트
  const loveFortunes = [
    "{name}님, 오늘은 예상 못 한 사람에게서 {mood}한 마음을 느낄 수 있어요. 작은 대화가 인연의 시작이 될지도 몰라요. 💕",
    "평소와 비슷한 하루 같지만, {name}님의 따뜻한 한 마디가 누군가의 심장을 살짝 흔들 거예요. 부담 갖지 말고 솔직하게 표현해 보세요. 💌",
    "오늘 {name}님의 연애 운은 은근히 상승 중! {mood}인 만큼 웃는 얼굴을 많이 보여주면 좋은 에너지가 사람들을 끌어당길 거예요. ✨",
    "기대하지 않았던 연락이나 DM이 올 수 있는 날이에요. {name}님이 먼저 가볍게 안부를 물어봐도 좋아요. 대화의 물꼬를 트는 건 나쁘지 않거든요. 📱",
    "혹시 답장이 느리거나, 티가 안 나더라도 너무 불안해하지 마세요. {name}님이 가진 매력은 천천히 스며드는 타입! 여유를 가지는 게 오히려 연애 운을 올려줘요. 🌙",
    "오늘은 {name}님의 솔직함이 가장 큰 무기예요. 숨기기보다는 솔직하게 표현할 때, 상대도 마음의 문을 조금씩 열 거예요. 🔓",
    "{name}님 주변 사람들을 잘 살펴보세요. 이미 {name}님을 아끼는 시선이 가까운 곳에 있어요. 친구에서 연인으로 발전할 수 있는 기운이 보여요. 🌸",
  ];

  // 전체(일반) 운세 리스트
  const dailyFortunes = [
    "{name}님의 오늘 하루는 {mood}한 기분만큼 부드럽게 흘러갈 예정이에요. 너무 조급해하지 말고 천천히, 나만의 속도를 지켜보세요. 🌈",
    "오늘은 작은 선택 하나가 생각보다 크게 돌아올 수 있는 날이에요. {name}님이 하고 싶은 쪽으로 한 걸음 내딛어 보세요. 🚶‍♀️",
    "컨디션이 조금 {mood}더라도, 예상치 못한 응원이나 칭찬을 들을 수 있어요. 스스로를 과소평가하지 않는 게 포인트! ⭐",
    "오늘 {name}님은 평소보다 집중력이 좋아지는 운이에요. 과제나 공부를 조금만 더 밀어붙이면 성취감을 느낄 수 있어요. 📚",
    "마음이 살짝 흔들리는 일이 생길 수 있지만, 그 과정에서 {name}님이 정말 원하는 게 무엇인지 더 잘 알게 될 거예요. 🌱",
    "{name}님이 평소에 했던 노력들이 천천히 쌓여 결과로 드러나는 시기예요. 너무 급하게 결론을 내리지 말고 흐름을 지켜보세요. ⏳",
    "오늘은 주변 사람들과의 대화에서 힌트를 얻을 수 있는 날이에요. 사소한 농담 속에도 {name}님에게 필요한 메시지가 숨어 있을 수 있어요. 💬",
  ];

  // 힌트/팁 문장 (운세 밑에 깔리는 한 줄 조언)
  const loveHints = [
    "💡 너무 과하게 티내기보다는, 작은 관심 표현부터 시작해 보는 건 어떨까요?",
    "💡 연락 타이밍에 너무 집착하지 말기! 나만의 루틴을 지키는 게 더 매력적으로 보여요.",
    "💡 오늘은 내 매력 포인트 하나만 더 살려보기. 헤어/향수/패션 중 하나라도 신경 써봐요.",
  ];

  const dailyHints = [
    "💡 오늘 해야 할 일 중 하나만 확실하게 끝내도, 충분히 잘한 하루예요.",
    "💡 컨디션이 애매하면, 작은 휴식이나 간식으로 나를 먼저 챙겨보세요.",
    "💡 비교보다는 기록! 오늘 느낀 감정을 한 줄이라도 메모해보면 좋을 것 같아요.",
  ];

  // 배열에서 랜덤 요소 하나 뽑기
  function pickRandom(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  fortuneBtn.addEventListener("click", function () {
    let name = nameInput.value.trim();
    const mood = moodSelect.value;
    const type = document.querySelector('input[name="fortuneType"]:checked').value;

    // 이름이 비어 있으면 기본값 사용
    if (name === "") {
      name = "익명의 누군가";
    }

    let fortuneText = "";
    let hintText = "";

    if (type === "love") {
      const template = pickRandom(loveFortunes);
      fortuneText = template
        .replace(/{name}/g, name)
        .replace(/{mood}/g, mood);
      hintText = pickRandom(loveHints);
    } else {
      const template = pickRandom(dailyFortunes);
      fortuneText = template
        .replace(/{name}/g, name)
        .replace(/{mood}/g, mood);
      hintText = pickRandom(dailyHints);
    }

    // 결과 박스에 표시
    resultText.textContent = fortuneText;
    resultHint.textContent = hintText;

    // 처음 결과를 보여줄 때 hidden 해제
    resultCard.classList.remove("hidden");
    // 애니메이션 효과를 위한 클래스 토글
    // (강제로 리플로우 한 번 주고 show 클래스 추가)
    void resultCard.offsetWidth;
    resultCard.classList.add("show");
  });
});
