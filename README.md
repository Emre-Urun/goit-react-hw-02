# Sip Happens Café - Geri Bildirim Widget'ı

[Canlı Demo](https://goitt-react-hw-02.vercel.app/)  

Bu proje, **Sip Happens Café** için geliştirilmiş modern ve responsive bir geri bildirim uygulamasıdır. Kullanıcılar, servis hakkında **Good**, **Neutral** veya **Bad** şeklinde geri bildirim bırakabilir. Uygulama, geri bildirimleri **anlık olarak gösterir**, sayfa yenilense bile verileri **localStorage** ile korur ve olumlu geri bildirim yüzdesini dinamik olarak renk kodlamasıyla belirtir.

---

## **Özellikler**

- Good, Neutral ve Bad kategorilerinde geri bildirim toplama.
- Toplam geri bildirim ve olumlu geri bildirim yüzdesi görüntüleme.
- Olumlu geri bildirim yüzdesine göre renk kodlaması:
  - %70 ve üzeri → Yeşil
  - %50 - 69 → Turuncu
  - %30 - 49 → Koyu Turuncu
  - %0 - 29 → Kırmızı
- Neutral (Orta) geri bildirim **total’e dahil edilmez**.
- Reset butonu ile tüm geri bildirimleri sıfırlama (kayma olmadan).
- Veriler **localStorage** ile saklanır.
- Modern, estetik ve **responsive tasarım**, mobil uyumlu.

---


## **Kullanılan Teknolojiler**

- React.js (Functional Components, Hooks)
- CSS Modules
- LocalStorage API
- Modern Responsive Tasarım

---

## **Kurulum ve Çalıştırma**

1. Depoyu klonlayın:

```bash
git clone https://github.com/username/sip-happens-feedback.git

2. Depoyu klonlayın:
cd sip-happens-feedback

3. Gerekli bağımlılıkları yükleyin:
npm install

4. Uygulamayı başlatın:
npm start

## **Kullanım**

1. “Good”, “Neutral” veya “Bad” butonlarına tıklayarak geri bildirim bırakın.

2. Toplam geri bildirim ve olumlu yüzdelik değer Feedback kutusunda gösterilecektir.

3. Reset butonuna tıklayarak tüm geri bildirimleri sıfırlayabilirsiniz. (Reset butonunun yeri sabittir, buton gizlense bile diğer butonlar kaymaz.)

4. Sayfa yenilense bile geri bildirimler kaybolmaz; localStorage üzerinden korunur.

## Geliştirme ve Katkı

Projeye katkı sağlamak isterseniz, pull request gönderebilirsiniz.

Hataları veya iyileştirme önerilerini issue olarak açabilirsiniz.
