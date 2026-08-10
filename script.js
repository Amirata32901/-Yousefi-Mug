// سبد خرید ساده
let cartCount = 0;

// همه دکمه‌های خرید
const buttons = document.querySelectorAll('.card button');

// ساخت نمایشگر سبد خرید
const cart = document.createElement('div');
cart.innerHTML = '🛒 سبد خرید: 0';
cart.style.position = 'fixed';
cart.style.top = '90px';
cart.style.left = '20px';
cart.style.background = '#e53935';
cart.style.color = 'white';
cart.style.padding = '12px 18px';
cart.style.borderRadius = '16px';
cart.style.fontWeight = 'bold';
cart.style.boxShadow = '0 6px 18px rgba(0,0,0,.25)';
cart.style.zIndex = '9999';

document.body.appendChild(cart);

// کلیک روی خرید
buttons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;

    // اگر شمارنده وجود داشت
    const counter = document.getElementById('cart-count');
    if (counter) {
      counter.textContent = cartCount;
    }

    // باز شدن مودال خرید
    openModal();

    // انیمیشن کوچک
    cart.style.transform = 'scale(1.1)';
    setTimeout(() => {
      cart.style.transform = 'scale(1)';
    }, 150);
  });
});


// ================= جستجو =================

const search = document.getElementById('search');
const noResult = document.getElementById('no-result');

if (search) {
  search.addEventListener('input', function () {

    const value = this.value.toLowerCase().trim();
    let found = 0;

    document.querySelectorAll('.card').forEach(card => {

      const title = card.querySelector('h3').innerText.toLowerCase();

      if (title.includes(value)) {

        card.style.display = 'block';
        found++;

      } else {

        card.style.display = 'none';

      }

    });

    if (noResult) {
      if (found === 0 && value !== '') {
        noResult.style.display = 'block';
      } else {
        noResult.style.display = 'none';
      }
    }

  });
}


// ================= مودال خرید =================

function openModal() {
  document.getElementById('buyModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('buyModal').style.display = 'none';
}
