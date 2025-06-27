# GreenCrypt

**GreenCrypt** is a simple, responsive web application for client-side encryption, decryption, and hashing using a variety of popular algorithms.  
Switch between light and dark themes and work securely with your data on any device.

## Features

- **Responsive Design** — Works great on desktop, tablet, and mobile.
- **Theme Switcher** — Switch between light and dark (green) modes.
- **Symmetric Encryption/Decryption:**  
  - AES
  - DES
  - TripleDES
  - RC4
  - Rabbit
- **Encoding/Decoding:**  
  - Base64
  - Hex
- **Hashing:**  
  - SHA256
  - SHA1
  - MD5
- **All operations happen client-side, in your browser**

## Usage

1. Clone or download this repository.
2. Open `index.html` in your web browser.
3. Select an algorithm from the main menu.
4. Enter your text (and key, if needed), then run the operation.

## Project Structure

```
├── index.html
├── README.md
├── LICENSE
└── src/
    ├── main.js
    └── styles.css
```

## Technology

- HTML, CSS, JavaScript
- [CryptoJS](https://github.com/brix/crypto-js) for algorithms

## License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for details.
