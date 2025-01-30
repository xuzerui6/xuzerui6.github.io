const cultivateBtn = document.getElementById('cultivate-btn');
const statusDiv = document.getElementById('status');
let spiritPower = 100;
let realm = '炼气';

cultivateBtn.addEventListener('click', () => {
    spiritPower += 10;
    statusDiv.innerHTML = `<p>境界: ${realm}</p><p>灵力: ${spiritPower}</p>`;
});
