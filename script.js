
const dataSuit = {
  bgk: ['Batu', 'Gunting', 'Kertas'],
  gos: ['Gajah', 'Orang', 'Semut'],
  jari: ['Jempol', 'Telunjuk', 'Kelingking']
};

function gantiMode() {
  const mode = document.getElementById('pilihMode').value;
  const pilihan = dataSuit[mode];
  const area = document.getElementById('areaTombol');

  area.innerHTML = '';

  pilihan.forEach(item => {
    const tombol = document.createElement('button');
    tombol.textContent = item;
    tombol.onclick = () => mainkan(item, pilihan);
    area.appendChild(tombol);
  });

  document.getElementById('hasilUser').textContent = '-';
  document.getElementById('hasilComp').textContent = '-';
  document.getElementById('infoHasil').textContent =
    'Ayo mulai main!';
}

function mainkan(user, pilihan) {
  const comp = pilihan[
    Math.floor(Math.random() * pilihan.length)
  ];

  let hasil;

  if (user === comp) {
    hasil = 'SERI!';
  } else if (
    (user === 'Batu' && comp === 'Gunting') ||
    (user === 'Gunting' && comp === 'Kertas') ||
    (user === 'Kertas' && comp === 'Batu') ||
    (user === 'Gajah' && comp === 'Orang') ||
    (user === 'Orang' && comp === 'Semut') ||
    (user === 'Semut' && comp === 'Gajah') ||
    (user === 'Jempol' && comp === 'Telunjuk') ||
    (user === 'Telunjuk' && comp === 'Kelingking') ||
    (user === 'Kelingking' && comp === 'Jempol')
  ) {
    hasil = 'KAMU MENANG!';
  } else {
    hasil = 'KAMU KALAH!';
  }

  document.getElementById('hasilUser').textContent = user;
  document.getElementById('hasilComp').textContent = comp;
  document.getElementById('infoHasil').textContent = hasil;
}

window.onload = gantiMode;
