export  function hovereffect(num) {
    // 모든 li 요소를 선택
    const items = document.querySelectorAll(".list li");
    // 현재 요소를 제외한 나머지 요소에 클래스 추가
    items.forEach((item, index) => {
      if (index !== num) {
        item.classList.add('red');
      }
    });
  }
  
export const leaveeffect = (num) => {
    // 모든 li 요소를 선택
    const items = document.querySelectorAll(".list li");
    // 현재 요소를 제외한 나머지 요소에서 클래스 제거
    items.forEach((item, index) => {
      if (index !== num) {
        item.classList.remove('red');
      }
    });
  }