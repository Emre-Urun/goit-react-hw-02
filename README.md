# Sip Happens Café - Geri Bildirim Widget'ı

![React](https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-purple?logo=vercel&logoColor=white)
![Issues](https://img.shields.io/github/issues/username/sip-happens-feedback)
![Last Commit](https://img.shields.io/github/last-commit/username/sip-happens-feedback)

---

## **📋 Proje Hakkında**

**Sip Happens Café Geri Bildirim Widget’ı**, kullanıcıların servis hakkında geri bildirim bırakmasını sağlayan modern ve responsive bir web uygulamasıdır.  

Kullanıcılar **Good**, **Neutral** veya **Bad** seçeneklerinden birini seçerek geri bildirim verebilir. Uygulama, geri bildirimleri anlık olarak gösterir ve sayfa yenilense bile verileri **localStorage** ile korur. Olumlu geri bildirim yüzdesi dinamik renk kodlamasıyla gösterilir.


---

## **✨ Özellikler**

- Good, Neutral ve Bad kategorilerinde geri bildirim toplama.
- Toplam geri bildirim ve olumlu geri bildirim yüzdesi görüntüleme.
- Olumlu geri bildirim yüzdesine göre renk kodlaması:
  - %70 ve üzeri → Yeşil ✅
  - %50 - 69 → Turuncu 🟧
  - %30 - 49 → Koyu Turuncu 🟠
  - %0 - 29 → Kırmızı 🔴
- Neutral (Orta) geri bildirim **total’e dahil edilmez**.
- Reset butonu ile tüm geri bildirimleri sıfırlama (kaymadan görünür).
- Veriler **localStorage** ile saklanır ve sayfa yenilense bile korunur.
- Modern, estetik ve **mobil uyumlu tasarım**.

---

## **⚙️ Teknolojiler**

- React.js (Functional Components, Hooks)
- CSS Modules
- LocalStorage API
- Modern Responsive Tasarım

---

## 🖥️ Kurulum ve Çalıştırma

1. Projeyi klonlayın:
   ```bash
   git clone https://github.com/Emre-Urun/goit-react-hw-02
   
2. Klasöre girin:
   ```bash
   cd goit-react-hw-02

4. Bağımlılıkları yükleyin:
   ```bash
   npm install

6. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev

8. Tarayıcınızda şu adrese gidin:
   ```bash
   http://localhost:5173


## 📜 Lisans

Bu proje eğitim amaçlı hazırlanmıştır.
© 2025 - Emre Ürün
