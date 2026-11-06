const products = [
  {id:1,name:'Everyday Sneakers',category:'Fashion',price:6499,rating:'4.9',tag:'BESTSELLER',image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',stock:12,description:'Comfortable everyday sneakers with a clean, sporty look. Easy to pair with casual outfits.'},
  {id:2,name:'Classic Wristwatch',category:'Lifestyle',price:8999,rating:'4.8',tag:'POPULAR',image:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=85',stock:5,description:'A timeless wristwatch design that adds a polished finish to everyday and formal looks.'},
  {id:3,name:'Wireless Headphones',category:'Tech',price:7499,rating:'4.9',tag:'TOP PICK',image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85',stock:0,description:'Over-ear wireless headphones for music, calls, and focused listening throughout the day.'},
  {id:4,name:'Minimal Backpack',category:'Fashion',price:4299,rating:'4.7',tag:'NEW',image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',stock:9,description:'A versatile backpack with a simple silhouette for university, work, and weekend plans.'},
  {id:5,name:'Modern Sunglasses',category:'Fashion',price:2999,rating:'4.8',tag:'FAN FAVORITE',image:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85',stock:3,description:'Modern sunglasses with a versatile frame for sunny days and everyday styling.'},
  {id:6,name:'Smart Desk Lamp',category:'Lifestyle',price:3599,rating:'4.6',tag:'DESIGN PICK',image:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85',stock:7,description:'A neat desk lamp to brighten your study, reading, or work corner.'},
  {id:7,name:'Portable Speaker',category:'Tech',price:5199,rating:'4.8',tag:'TRENDING',image:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85',stock:14,description:'A compact portable speaker for enjoying your playlists at home or on the go.'},
  {id:8,name:'Canvas Tote Bag',category:'Lifestyle',price:1899,rating:'4.7',tag:'EASY EVERYDAY',image:'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85',stock:18,description:'A lightweight reusable tote for daily errands, books, and everyday essentials.'},
  {id:9,name:'Classic Denim Jacket',category:'Fashion',price:5799,rating:'4.8',tag:'JUST ADDED',image:'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=85',stock:6,description:'A classic denim layer that works across seasons and casual outfits.'},
  {id:10,name:'Running Shoes',category:'Fashion',price:7299,rating:'4.9',tag:'ACTIVE PICK',image:'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=85',stock:8,description:'Lightweight sporty shoes designed for comfortable walks and active days.'},
  {id:11,name:'Leather Wallet',category:'Lifestyle',price:2499,rating:'4.7',tag:'ESSENTIAL',image:'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85',stock:11,description:'A compact wallet to keep your everyday cards and cash organized.'},
  {id:12,name:'Smart Fitness Watch',category:'Tech',price:9999,rating:'4.8',tag:'SMART PICK',image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85',stock:4,description:'A sporty smartwatch style for checking activity, time, and daily notifications.'},
  {id:13,name:'Bluetooth Earbuds',category:'Tech',price:4599,rating:'4.8',tag:'WIRELESS',image:'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85',stock:0,description:'Compact wireless earbuds for calls, podcasts, and music while you are out.'},
  {id:14,name:'Ceramic Coffee Mug',category:'Lifestyle',price:1299,rating:'4.6',tag:'COZY PICK',image:'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=85',stock:20,description:'A simple ceramic mug for your morning coffee, tea, or desk-side drink.'},
  {id:15,name:'Everyday Hoodie',category:'Fashion',price:3899,rating:'4.7',tag:'COMFORT',image:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85',stock:2,description:'A comfortable casual hoodie for relaxed days and easy layering.'},
  {id:16,name:'Tabletop Plant Pot',category:'Lifestyle',price:1599,rating:'4.6',tag:'FRESH SPACE',image:'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85',stock:10,description:'A decorative planter to add a little greenery to your desk, shelf, or room.'}
];
let cart = [];
let activeCategory = 'All';
const money = value => `Rs. ${value.toLocaleString('en-PK')}`;
const grid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

function stockLabel(p){
  if(p.stock===0) return '<span class="stock out">Currently unavailable</span>';
  if(p.stock<=5) return `<span class="stock low">Only ${p.stock} left in stock</span>`;
  return '<span class="stock available">In stock · Available</span>';
}
function renderProducts(){
  const term = searchInput.value.trim().toLowerCase();
  let visible = products.filter(p => (activeCategory === 'All' || p.category === activeCategory) && `${p.name} ${p.category}`.toLowerCase().includes(term));
  if(sortSelect.value === 'low') visible.sort((a,b)=>a.price-b.price);
  if(sortSelect.value === 'high') visible.sort((a,b)=>b.price-a.price);
  document.getElementById('resultCount').textContent = `${visible.length} product${visible.length===1?'':'s'}`;
  document.getElementById('emptyState').hidden = visible.length !== 0;
  grid.innerHTML = visible.map(p=>`<article class="product-card" data-product="${p.id}" tabindex="0" role="button" aria-label="View details for ${p.name}">
    <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="product-tag">${p.tag}</span><button class="add-button" data-add="${p.id}" aria-label="Add ${p.name} to cart" ${p.stock===0?'disabled title="Out of stock"':''}>+</button></div>
    <div class="product-info"><span class="product-category">${p.category}</span><h3 class="product-name">${p.name}</h3><div class="product-bottom"><span class="product-price">${money(p.price)}</span><span class="product-rating">★ ${p.rating}</span></div><span class="card-stock ${p.stock===0?'out':p.stock<=5?'low':''}">${p.stock===0?'Out of stock':p.stock<=5?'Low stock':'Available'}</span></div>
  </article>`).join('');
}
function showProduct(id){
  const p=products.find(x=>x.id===id); if(!p)return;
  document.getElementById('productDetails').innerHTML=`<div class="detail-layout">
    <div class="detail-image"><img src="${p.image}" alt="${p.name}"></div>
    <div class="detail-copy"><p class="eyebrow">${p.category} · ${p.tag}</p><h2 id="detailName">${p.name}</h2><div class="detail-rating">★ ${p.rating} <span>Customer rating</span></div><div class="detail-price">${money(p.price)}</div>
      <p class="detail-description">${p.description}</p>
      <div class="detail-fact"><span>Availability</span>${stockLabel(p)}</div>
      <div class="detail-fact"><span>Estimated delivery</span><strong>3–5 working days in Karachi</strong></div>
      <div class="detail-fact"><span>Other cities</span><strong>4–7 working days</strong></div>
      <p class="delivery-note">Delivery times are estimates and may vary by area and courier service.</p>
      <button class="detail-add" data-detail-add="${p.id}" ${p.stock===0?'disabled':''}>${p.stock===0?'Currently unavailable':'Add to bag'} <span>→</span></button>
    </div></div>`;
  document.getElementById('productBackdrop').classList.add('show');
  document.getElementById('productModal').classList.add('open');
  document.getElementById('productModal').setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
}
function closeProduct(){
  document.getElementById('productBackdrop').classList.remove('show');
  document.getElementById('productModal').classList.remove('open');
  document.getElementById('productModal').setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}
function addToCart(id){const p=products.find(x=>x.id===id);if(!p||p.stock===0){showToast('Sorry, this product is currently unavailable');return;}const item=cart.find(x=>x.id===id);if(item)item.qty++;else cart.push({id,qty:1});renderCart();showToast(`${p.name} added to your bag`);}
function updateQty(id,change){const item=cart.find(x=>x.id===id);if(!item)return;item.qty+=change;if(item.qty<=0)cart=cart.filter(x=>x.id!==id);renderCart();}
function renderCart(){
  const count=cart.reduce((sum,x)=>sum+x.qty,0);const subtotal=cart.reduce((sum,x)=>sum+products.find(p=>p.id===x.id).price*x.qty,0);
  document.getElementById('cartCount').textContent=count;document.getElementById('drawerCount').textContent=`(${count})`;document.getElementById('cartSubtotal').textContent=money(subtotal);
  document.getElementById('cartItems').innerHTML=cart.length?cart.map(x=>{const p=products.find(p=>p.id===x.id);return `<div class="cart-item"><img src="${p.image}" alt="${p.name}"><div><h4>${p.name}</h4><p>${money(p.price)}</p><div class="quantity"><button data-qty="${p.id}" data-change="-1" aria-label="Decrease quantity">−</button><span>${x.qty}</span><button data-qty="${p.id}" data-change="1" aria-label="Increase quantity">+</button></div></div><span class="cart-item-price">${money(p.price*x.qty)}</span></div>`}).join(''):'<div class="empty-state"><span>🛍</span><h3>Your bag is empty</h3><p>Add something you love to get started.</p></div>';
}
function openCart(){document.getElementById('cartDrawer').classList.add('open');document.getElementById('cartOverlay').classList.add('show');document.getElementById('cartDrawer').setAttribute('aria-hidden','false');}
function closeCart(){document.getElementById('cartDrawer').classList.remove('open');document.getElementById('cartOverlay').classList.remove('show');document.getElementById('cartDrawer').setAttribute('aria-hidden','true');}
let toastTimer;function showToast(message){const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2200);}
grid.addEventListener('click',e=>{
  const btn=e.target.closest('[data-add]');if(btn){e.stopPropagation();addToCart(Number(btn.dataset.add));return;}
  const card=e.target.closest('[data-product]');if(card)showProduct(Number(card.dataset.product));
});
grid.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-product]')){e.preventDefault();showProduct(Number(e.target.dataset.product));}});
document.getElementById('productDetails').addEventListener('click',e=>{const btn=e.target.closest('[data-detail-add]');if(btn){addToCart(Number(btn.dataset.detailAdd));if(!btn.disabled)closeProduct();}});
document.getElementById('closeProduct').addEventListener('click',closeProduct);
document.getElementById('productBackdrop').addEventListener('click',closeProduct);
document.getElementById('cartItems').addEventListener('click',e=>{const btn=e.target.closest('[data-qty]');if(btn)updateQty(Number(btn.dataset.qty),Number(btn.dataset.change));});
document.getElementById('categoryFilters').addEventListener('click',e=>{const btn=e.target.closest('[data-category]');if(!btn)return;activeCategory=btn.dataset.category;document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===btn));renderProducts();});
searchInput.addEventListener('input',renderProducts);sortSelect.addEventListener('change',renderProducts);
document.getElementById('openCart').addEventListener('click',openCart);document.getElementById('closeCart').addEventListener('click',closeCart);document.getElementById('cartOverlay').addEventListener('click',closeCart);
document.getElementById('checkoutButton').addEventListener('click',()=>showToast(cart.length?'Checkout demo — payment is not connected.':'Your bag is empty'));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeCart();closeProduct();}});
renderProducts();renderCart();