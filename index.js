document.addEventListener("DOMContentLoaded", function () {
  let mysteryBoxHTML = `
          <div class="mystery-box-container">
              <!-- Levá sekce: Popis -->
              <div class="mystery-box-text">
                  <h2>Co je Mystery Box?</h2>
                  <p><span>Mystery Box</span> je dárková krabice plná <span>mysteriózních předmětů.</span> Zjistíte <strong>co je uvnitř až po otevření! 🎁</strong></p>
                  
                  <h2>Co najdu uvnitř?</h2>
                  <ul>
                      <li><span>1.</span> Obsah krabice pečlivě sestavíme podle <span>zájmů</span>, <span>pohlaví</span> a <span>věku</span> budoucího majitele krabice.</li>
                      <li><span>2.</span> Uvnitř najde <span>zábavné</span>, <span>cenné</span>, <span>neobvyklé</span> a prostě skvělé předměty, <span>vybrané na míru</span> pro něj/ní. ❤️</li>
                      <li><span>3.</span> Zábavné a netrpělivé rozbalování krabice je doprovázeno <span>chvílemi napětí</span>, které vás vrátí do dětství. 😊</li>
                  </ul>
              </div>
  
              <!-- Pravá sekce: Video -->
              <div class="mystery-box-image">
                  <video style="width: 100%;" controls>
                    <source src="https://www.hracky-box.cz/user/documents/upload/756s2e.mp4" type="video/mp4">
                    Váš prohlížeč nepodporuje video tag.
                  </video>
              </div>
          </div>
      `;

  // Vložení Mystery Box pod .benefit-banners-full-width
  const guarantee = document.querySelector(".benefit-banners-full-width");
  guarantee.insertAdjacentHTML("afterend", mysteryBoxHTML);

  const mysteryBox = document.querySelector(".mystery-box-container");
  if (mysteryBox) {
    const tabSection = document.createElement("div");
    tabSection.classList.add("tab-section");

    const tabButtons = document.createElement("div");
    tabButtons.classList.add("tab-buttons");

    const tabContent = document.createElement("div");
    tabContent.classList.add("tab-content");
    tabContent.innerHTML = "Najděte obsah přejetím přes tlačítko";

    const tabs = [
      {
        label: "1",
        color: "green",
        content: `<h3>Velký Mystery Box</h3><p><strong>1 499 CZK  1 449 CZK</strong></p><p>Obsahuje 1 až 10 předmětů v hodnotě 1 499 CZK nebo více</p><ul><li>✅ Obsah podle pohlaví, věku a zájmů</li><li>✅ Hodnota obsahu vždy odpovídá ceně</li></ul><button class="butn">Koupit nyní</button>`,
      }
    ];

    tabs.forEach((tab, index) => {
        const button = document.createElement("button");
        button.classList.add("tab-button");
        button.textContent = `Záložka ${tab.label}`;
        button.style.backgroundColor = tab.color;
        tabButtons.appendChild(button);

        // Show first tab by default
        if (index === 0) {
            tabContent.innerHTML = tab.content;
        }
    });

    tabSection.appendChild(tabButtons);
    tabSection.appendChild(tabContent);
    mysteryBox.insertAdjacentElement("afterend", tabSection);
  }

  const btn = document.querySelector(".butn");
  console.log(btn);
  btn.addEventListener("click", function () {

    // Create the modal container
    const modal = document.createElement("div");
    modal.id = "popup-modal";
    modal.classList.add("modal");

    // Modal content
    modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Mini Mystery Box</h2>
                <p><strong>599 CZK</strong></p>

                <h3>Who is the Mystery Box for?</h3>
                <p>Select Gender</p>
                <div class="gender-options">
                    <img src="https://mystery-box.cz/wp-content/uploads/2021/03/pohlavi-zena.png" alt="Female">
                    <img src="https://mystery-box.cz/wp-content/uploads/2021/03/pohlavi-muz.png" alt="Male">
                    <img src="https://mystery-box.cz/wp-content/uploads/2021/03/gender-par.png" alt="Both">
                </div>

                <p>Select Age</p>
                <select class="age-options">
                    <option>Select an option</option>
                    <option value="5-6 years">5-6 years</option>
                    <option value="7-8 years>7-8 years</option>
                    <option value="9-13 years>9-13 years</option>
                    <option value="14-17 years>14-17 years old</option>
                    <option value="18-21 years>18-21 years old</option>
                    <option value="22-25 years>22-25 years old</option>
                    <option value="26-29 years>26-29 years old</option>
                    <option value="30-35 years>30-35 years old</option>
                    <option value="36-44 years>36-44 years old</option>
                    <option value="45-54 years>45-54 years old</option>
                    <option value="55-64 years>55-64 years old</option>
                    <option value="65-74 years>65-74 years old</option>
                    <option value="75 years+>75 years and over</option>
                </select>
                <!-- Quantity Selector -->
                <h3>Quantity</h3>
                <div class="quantity-container">
                    <button class="qty-btn minus">−</button>
                    <input id="product-quantity" type="number" class="quantity" value="1" min="1">
                    <button class="qty-btn plus">+</button>
                </div>

                <!-- Add to Cart Button -->
                <button id="add-to-cart-btn" class="btn add-to-cart">Přidat do košíku</button>
            </div>
        `;

        document.body.appendChild(modal);

    const addToCart = document.querySelector("#add-to-cart-btn");
    addToCart.addEventListener("click", function () {
    const productId = 45;
    const language = "cs";
    const quantity = document.getElementById("product-quantity").value;
    
    // Get selected variant
    const selectedGender = document.querySelector(".gender-options img.active")?.alt || "Male";
    const selectedAge = document.querySelector(".age-options").value || "5-6years";
    const variantKey = `${selectedGender}-${selectedAge}`;
    
    // Get correct priceId
    const variantMapping = {
        "Male-3years": 101, 
        "Male-5years": 102, 
        "Female-3years": 103, 
        "Female-5years": 104
    };
    const priceId = variantMapping[variantKey]; // Default variant
console.log(priceId);
    // Prepare form data
    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("priceId", priceId);
    formData.append("language", language);
    formData.append("amount", quantity);

    fetch("https://www.hracky-box.cz/action/Cart/addCartItem/?simple_ajax_cart=1", {
        method: "POST",
        body: formData,
        headers: { "X-Requested-With": "XMLHttpRequest" }
    })
    .then(response => response.json())
    .then(data => {
        if (data.code === 200) {
            alert("Product successfully added to cart!");
        } else {
            alert("Error adding product.");
            console.error(data);
        }
    })
    .catch(error => console.error("Fetch error:", error));
});



        // Add styles dynamically
        const style = document.createElement("style");
        style.innerHTML = `
            /* Modal Background */
            .modal {
                display: flex;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                align-items: center;
                justify-content: center;
            }

            /* Modal Content */
            .modal-content {
                background-color: #2F6C7E;
                color: white;
                padding: 20px;
                border-radius: 10px;
                width: 400px;
                text-align: center;
            }

             .modal-content h2, .modal-content h3  {
                color: white;
            }

            /* Close Button */
            .close {
                color: white;
                float: right;
                font-size: 24px;
                cursor: pointer;
            }

            .close:hover {
                color: red;
            }

            /* Gender Icons */
            .gender-options img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin: 5px;
                cursor: pointer;
                border: 2px solid transparent;
            }

            .gender-options img:hover,
            .gender-options img:active {
                border: 2px solid white;
            }

            /* Interests Styling */
            .interests label {
                display: block;
                background: #4C96AD;
                padding: 10px;
                margin: 5px;
                border-radius: 20px;
                cursor: pointer;
            }

            /* Quantity Selector */
            .quantity-container {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 10px 0;
            }

            .qty-btn {
                background: white;
                color: #2F6C7E;
                border: none;
                padding: 10px;
                cursor: pointer;
                font-size: 18px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin: 0 5px;
            }

            .qty-btn:hover {
                background: #4C96AD;
                color: white;
            }

            .quantity {
                width: 50px;
                text-align: center;
                font-size: 18px;
                color: black;
                border: none;
                padding: 5px;
                border-radius: 5px;
            }

            /* Add to Cart Button */
            .add-to-cart {
                margin-top: 10px;
                padding: 10px 20px;
                font-size: 18px;
                border: none;
                background-color: #4C96AD;
                color: white;
                cursor: pointer;
                border-radius: 5px;
            }

            .add-to-cart:hover {
                background-color: #2F6C7E;
            }
        `;
        document.head.appendChild(style);

        // Open modal
        modal.style.display = "flex";

        // Close modal event
        modal.querySelector(".close").addEventListener("click", function () {
            modal.style.display = "none";
        });

        // Close when clicking outside modal
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        // Quantity selector functionality
        const minusBtn = modal.querySelector(".minus");
        const plusBtn = modal.querySelector(".plus");
        const quantityInput = modal.querySelector(".quantity");
        const addToCartBtn = modal.querySelector(".add-to-cart");

        minusBtn.addEventListener("click", () => {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        plusBtn.addEventListener("click", () => {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });

        addToCartBtn.addEventListener("click", () => {
            alert(`Přidáno do košíku: ${quantityInput.value}x Mini Mystery Box`);
        });
    });


  // Po přidání Mystery Box vložte galerii
  const tabSection = document.querySelector(".tab-section");
  if (tabSection) {
    const galleryHTML = `
              <div class="gallery-container">
                  <div class="gallery-item">
                      <img src="https://cdn.myshoptet.com/usr/www.hracky-box.cz/user/shop/big/45-3_whatsapp-image-2025-03-08-at-21-15-42.jpg?67cd87dd" alt="Galerie obrázek">
                      <p>Mystérium čeká uvnitř! 🎁</p>
                  </div>
                  <div class="gallery-item">
                      <img src="https://cdn.myshoptet.com/usr/www.hracky-box.cz/user/shop/big/45-3_whatsapp-image-2025-03-08-at-21-15-42.jpg?67cd87dd" alt="Galerie obrázek">
                      <p>Rozbalte překvapení, které jste nikdy nečekali! 😲</p>
                  </div>
                  <div class="gallery-item">
                      <img src="https://cdn.myshoptet.com/usr/www.hracky-box.cz/user/shop/big/45-3_whatsapp-image-2025-03-08-at-21-15-42.jpg?67cd87dd" alt="Galerie obrázek">
                      <p>Co je uvnitř? Jen jeden způsob, jak to zjistit! 🔍</p>
                  </div>
                  <div class="gallery-item">
                      <img src="https://cdn.myshoptet.com/usr/www.hracky-box.cz/user/shop/big/45-3_whatsapp-image-2025-03-08-at-21-15-42.jpg?67cd87dd" alt="Galerie obrázek">
                      <p>Zaručené vzrušení s každou krabicí! 🎉</p>
                  </div>
                  <div class="gallery-item">
                      <img src="https://cdn.myshoptet.com/usr/www.hracky-box.cz/user/shop/big/45-3_whatsapp-image-2025-03-08-at-21-15-42.jpg?67cd87dd" alt="Galerie obrázek">
                      <p>Perfektní dárek pro milovníky vzrušení! 🎁</p>
                  </div>
                  <div class="gallery-item">
                      <img src="https://cdn.myshoptet.com/usr/www.hracky-box.cz/user/shop/big/45-3_whatsapp-image-2025-03-08-at-21-15-42.jpg?67cd87dd" alt="Galerie obrázek">
                      <p>Každá krabice vypráví jedinečný příběh! 📦</p>
                  </div>
                  <div class="gallery-item">
                      <img src="https://cdn.myshoptet.com/usr/www.hracky-box.cz/user/shop/big/45-3_whatsapp-image-2025-03-08-at-21-15-42.jpg?67cd87dd" alt="Galerie obrázek">
                      <p>Něco zábavného, něco cenného, něco zvláštního! ✨</p>
                  </div>
              </div>
          `;

    // Vložení galerie pod Mystery Box
    tabSection.insertAdjacentHTML("afterend", galleryHTML);
  }
  const gallery = document.querySelector(".gallery-container");
  if (gallery) {
    const testimonialsHTML = `
              <div class="testimonials-container">
                  <h2>Co říkají naši zákazníci</h2>
                  <div class="testimonials-carousel">
                      <div class="testimonial active">
                          <p>"Měla jsem takovou zábavu při otevírání mého Mystery Boxu! Všechny předměty uvnitř byly naprostým překvapením a každou jsem si zamilovala!"</p>
                          <strong>- Alice M.</strong>
                      </div>
                      <div class="testimonial">
                          <p>"Perfektní nápad na dárek! Objednala jsem jeden pro svého synovce a nemohl přestat mluvit o tom!"</p>
                          <strong>- David S.</strong>
                      </div>
                      <div class="testimonial">
                          <p>"Tak jedinečný koncept! Předměty byly dobře promyšlené a přizpůsobené mým zájmům!"</p>
                          <strong>- Emily R.</strong>
                      </div>
                  </div>
                  <button class="prev">&lt;</button>
                  <button class="next">&gt;</button>
              </div>
          `;

    gallery.insertAdjacentHTML("afterend", testimonialsHTML);

    // Logika karuselu
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    const totalTestimonials = testimonials.length;

    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove("active");
        if (i === index) {
          testimonial.classList.add("active");
        }
      });
    }

    document.querySelector(".prev").addEventListener("click", function () {
      currentTestimonial =
        (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
      showTestimonial(currentTestimonial);
    });

    document.querySelector(".next").addEventListener("click", function () {
      currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
      showTestimonial(currentTestimonial);
    });

    setInterval(function () {
      currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
      showTestimonial(currentTestimonial);
    }, 4000); // Automatické přepínání každé 4 sekundy
  }

  const faqs = [
    {
      question: "Jaká je vaše politika vracení zboží?",
      answer: "Můžete vrátit jakýkoli předmět do 30 dnů od nákupu.",
    },
    {
      question: "Nabízíte mezinárodní dopravu?",
      answer: "Ano, zasíláme do většiny zemí po celém světě.",
    },
    {
      question: "Jak mohu sledovat svou objednávku?",
      answer:
        "Jakmile bude vaše objednávka odeslána, obdržíte sledovací číslo e-mailem.",
    },
  ];

  const testimonialContainer = document.querySelector(
    ".testimonials-container"
  );
  if (testimonialContainer) {
    const accordionContainer = document.createElement("div");
    accordionContainer.classList.add("faq-container");

    // Přidání názvu sekce
    const sectionTitle = document.createElement("h2");
    sectionTitle.classList.add("faq-title");
    sectionTitle.textContent = "Často kladené otázky";
    accordionContainer.appendChild(sectionTitle);
    faqs.forEach((faq, index) => {
      const faqItem = document.createElement("div");
      faqItem.classList.add("faq-item");

      const question = document.createElement("button");
      question.classList.add("faq-question");
      question.textContent = faq.question;
      question.setAttribute("data-index", index);

      const answer = document.createElement("div");
      answer.classList.add("faq-answer");
      answer.textContent = faq.answer;
      answer.style.display = "none";

      question.addEventListener("click", function () {
        const isVisible = answer.style.display === "block";
        document
          .querySelectorAll(".faq-answer")
          .forEach((ans) => (ans.style.display = "none"));
        answer.style.display = isVisible ? "none" : "block";
      });

      faqItem.appendChild(question);
      faqItem.appendChild(answer);
      accordionContainer.appendChild(faqItem);
    });

    testimonialContainer.insertAdjacentElement("afterend", accordionContainer);
  }
});
