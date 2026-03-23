const input = document.getElementById('inputVal');
const unit = document.getElementById('unitSelect');
const resPing = document.getElementById('res-ping');
const resM2 = document.getElementById('res-m2');
const resCm2 = document.getElementById('res-cm2');

function calculate() {
  const val = parseFloat(input.value) || 0;
  const type = unit.value;
  
  let m2;
  // 統一轉換為平方公尺計算
  if (type === 'm2') m2 = val;
  else if (type === 'cm2') m2 = val / 10000;
  else if (type === 'ping') m2 = val * 3.30579;

  resM2.innerText = m2.toFixed(2);
  resCm2.innerText = (m2 * 10000).toLocaleString();
  resPing.innerText = (m2 / 3.30579).toFixed(2);
}

input.addEventListener('input', calculate);
unit.addEventListener('change', calculate);
