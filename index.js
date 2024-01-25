// Your code here
  

function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left.replace('px', ''), 10);
  
    dodger.style.left = `${left - 1}px`;
  
    if (left < 0) {
      dodger.style.left = '0px';
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left.replace('px', ''), 10);
    const rightEdge = 400;
    const dodgerWidth = 40;
  
    dodger.style.left = `${left + 1}px`;
  
    if (left + dodgerWidth > rightEdge) {
      dodger.style.left = `${rightEdge - dodgerWidth}px`;
    }
  }
  
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (e.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });