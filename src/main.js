document.addEventListener('DOMContentLoaded', () => {
  // ============ Theme Switcher ============
  const themeBtn = document.getElementById('themeBtn');
  const themeIcon = document.getElementById('themeIcon');
  function setTheme(mode) {
    if (mode === 'dark') {
      document.body.classList.add('dark');
      themeIcon.textContent = '🌞';
    } else {
      document.body.classList.remove('dark');
      themeIcon.textContent = '🌙';
    }
    localStorage.setItem('theme', mode);
  }
  themeBtn.onclick = () => {
    const isDark = document.body.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  };
  setTheme(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');

  // ============ Section Navigation ============
  // Show section by section id
  function showSectionById(sectionId) {
    document.querySelectorAll('main > section').forEach(sec => {
      sec.classList.add('hidden-section');
      sec.classList.remove('active-section');
    });
    document.getElementById(sectionId).classList.remove('hidden-section');
    document.getElementById(sectionId).classList.add('active-section');
  }

  // Menu buttons navigation
  document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.onclick = () => showSectionById(btn.dataset.target);
  });
  // Back to home
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.onclick = () => showSectionById('home-section');
  });

  // ============ AES ============
  document.getElementById('encryptAESBtn').onclick = function() {
    const input = document.getElementById('aes-input').value;
    const key = document.getElementById('aes-key').value;
    if (!input || !key) {
      alert('Please enter text and a key.');
      return;
    }
    const ciphertext = CryptoJS.AES.encrypt(input, key).toString();
    document.getElementById('aes-output').value = ciphertext;
  };
  document.getElementById('decryptAESBtn').onclick = function() {
    const input = document.getElementById('aes-input').value;
    const key = document.getElementById('aes-key').value;
    if (!input || !key) {
      alert('Please enter the encrypted text and the key.');
      return;
    }
    try {
      const bytes  = CryptoJS.AES.decrypt(input, key);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      if (!originalText) throw new Error();
      document.getElementById('aes-output').value = originalText;
    } catch {
      document.getElementById('aes-output').value = 'Decryption failed!';
    }
  };

  // ============ DES ============
  document.getElementById('encryptDESBtn').onclick = function() {
    const input = document.getElementById('des-input').value;
    const key = document.getElementById('des-key').value;
    if (!input || !key) {
      alert('Please enter text and a key.');
      return;
    }
    const ciphertext = CryptoJS.DES.encrypt(input, key).toString();
    document.getElementById('des-output').value = ciphertext;
  };
  document.getElementById('decryptDESBtn').onclick = function() {
    const input = document.getElementById('des-input').value;
    const key = document.getElementById('des-key').value;
    if (!input || !key) {
      alert('Please enter the encrypted text and the key.');
      return;
    }
    try {
      const bytes = CryptoJS.DES.decrypt(input, key);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      if (!originalText) throw new Error();
      document.getElementById('des-output').value = originalText;
    } catch {
      document.getElementById('des-output').value = 'Decryption failed!';
    }
  };

  // ============ TripleDES ============
  document.getElementById('encryptTripleDESBtn').onclick = function() {
    const input = document.getElementById('tripledes-input').value;
    const key = document.getElementById('tripledes-key').value;
    if (!input || !key) {
      alert('Please enter text and a key.');
      return;
    }
    const ciphertext = CryptoJS.TripleDES.encrypt(input, key).toString();
    document.getElementById('tripledes-output').value = ciphertext;
  };
  document.getElementById('decryptTripleDESBtn').onclick = function() {
    const input = document.getElementById('tripledes-input').value;
    const key = document.getElementById('tripledes-key').value;
    if (!input || !key) {
      alert('Please enter the encrypted text and the key.');
      return;
    }
    try {
      const bytes = CryptoJS.TripleDES.decrypt(input, key);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      if (!originalText) throw new Error();
      document.getElementById('tripledes-output').value = originalText;
    } catch {
      document.getElementById('tripledes-output').value = 'Decryption failed!';
    }
  };

  // ============ RC4 ============
  document.getElementById('encryptRC4Btn').onclick = function() {
    const input = document.getElementById('rc4-input').value;
    const key = document.getElementById('rc4-key').value;
    if (!input || !key) {
      alert('Please enter text and a key.');
      return;
    }
    const ciphertext = CryptoJS.RC4.encrypt(input, key).toString();
    document.getElementById('rc4-output').value = ciphertext;
  };
  document.getElementById('decryptRC4Btn').onclick = function() {
    const input = document.getElementById('rc4-input').value;
    const key = document.getElementById('rc4-key').value;
    if (!input || !key) {
      alert('Please enter the encrypted text and the key.');
      return;
    }
    try {
      const bytes = CryptoJS.RC4.decrypt(input, key);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      if (!originalText) throw new Error();
      document.getElementById('rc4-output').value = originalText;
    } catch {
      document.getElementById('rc4-output').value = 'Decryption failed!';
    }
  };

  // ============ Rabbit ============
  document.getElementById('encryptRabbitBtn').onclick = function() {
    const input = document.getElementById('rabbit-input').value;
    const key = document.getElementById('rabbit-key').value;
    if (!input || !key) {
      alert('Please enter text and a key.');
      return;
    }
    const ciphertext = CryptoJS.Rabbit.encrypt(input, key).toString();
    document.getElementById('rabbit-output').value = ciphertext;
  };
  document.getElementById('decryptRabbitBtn').onclick = function() {
    const input = document.getElementById('rabbit-input').value;
    const key = document.getElementById('rabbit-key').value;
    if (!input || !key) {
      alert('Please enter the encrypted text and the key.');
      return;
    }
    try {
      const bytes = CryptoJS.Rabbit.decrypt(input, key);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      if (!originalText) throw new Error();
      document.getElementById('rabbit-output').value = originalText;
    } catch {
      document.getElementById('rabbit-output').value = 'Decryption failed!';
    }
  };

  // ============ Base64 ============
  document.getElementById('encodeBase64Btn').onclick = function() {
    const input = document.getElementById('base64-input').value;
    if (!input) {
      alert('Please enter text.');
      return;
    }
    const encoded = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(input));
    document.getElementById('base64-output').value = encoded;
  };
  document.getElementById('decodeBase64Btn').onclick = function() {
    const input = document.getElementById('base64-input').value;
    if (!input) {
      alert('Please enter the encoded text.');
      return;
    }
    try {
      const decoded = CryptoJS.enc.Base64.parse(input).toString(CryptoJS.enc.Utf8);
      document.getElementById('base64-output').value = decoded;
    } catch {
      document.getElementById('base64-output').value = 'Decoding failed!';
    }
  };

  // ============ Hex ============
  document.getElementById('encodeHexBtn').onclick = function() {
    const input = document.getElementById('hex-input').value;
    if (!input) {
      alert('Please enter text.');
      return;
    }
    const encoded = CryptoJS.enc.Hex.stringify(CryptoJS.enc.Utf8.parse(input));
    document.getElementById('hex-output').value = encoded;
  };
  document.getElementById('decodeHexBtn').onclick = function() {
    const input = document.getElementById('hex-input').value;
    if (!input) {
      alert('Please enter the encoded text.');
      return;
    }
    try {
      const decoded = CryptoJS.enc.Hex.parse(input).toString(CryptoJS.enc.Utf8);
      document.getElementById('hex-output').value = decoded;
    } catch {
      document.getElementById('hex-output').value = 'Decoding failed!';
    }
  };

  // ============ SHA256 ============
  document.getElementById('hashSHA256Btn').onclick = function() {
    const input = document.getElementById('sha256-input').value;
    if (!input) {
      alert('Please enter text.');
      return;
    }
    const hash = CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);
    document.getElementById('sha256-output').value = hash;
  };

  // ============ SHA1 ============
  document.getElementById('hashSHA1Btn').onclick = function() {
    const input = document.getElementById('sha1-input').value;
    if (!input) {
      alert('Please enter text.');
      return;
    }
    const hash = CryptoJS.SHA1(input).toString(CryptoJS.enc.Hex);
    document.getElementById('sha1-output').value = hash;
  };

  // ============ MD5 ============
  document.getElementById('hashMD5Btn').onclick = function() {
    const input = document.getElementById('md5-input').value;
    if (!input) {
      alert('Please enter text.');
      return;
    }
    const hash = CryptoJS.MD5(input).toString(CryptoJS.enc.Hex);
    document.getElementById('md5-output').value = hash;
  };

  // Show only home section at start
  showSectionById('home-section');
});
