// Navigation logging
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    console.log(`Navigated to: ${link.textContent}`);
  });
});

// Product buttons
document.querySelectorAll('.product-card button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Product added to cart!');
  });
});

// Dashboard card clicks
document.querySelectorAll('.dashboard-card').forEach(card => {
  card.addEventListener('click', () => {
    alert(`Opening: ${card.textContent.trim()}`);
  });
});
