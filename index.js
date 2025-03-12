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
        content: `<h3>Velký Mystery Box</h3><p><strong>1 499 CZK  1 449 CZK</strong></p><p>Obsahuje 1 až 10 předmětů v hodnotě 1 499 CZK nebo více</p><ul><li>✅ Obsah podle pohlaví, věku a zájmů</li><li>✅ Hodnota obsahu vždy odpovídá ceně</li></ul><button>Koupit nyní</button>`,
      },
      {
        label: "2",
        color: "orange",
        content: `<h3>Střední Mystery Box</h3><p><strong>999 CZK  949 CZK</strong></p><p>Obsahuje 1 až 7 předmětů v hodnotě 999 CZK nebo více</p><ul><li>✅ Překvapení na míru</li><li>✅ Skvělá hodnota zaručena</li></ul><button>Koupit nyní</button>`,
      },
      {
        label: "3",
        color: "blue",
        content: `<h3>Malý Mystery Box</h3><p><strong>499 CZK  449 CZK</strong></p><p>Obsahuje 1 až 5 předmětů v hodnotě 499 CZK nebo více</p><ul><li>✅ Zábavné a jedinečné předměty</li><li>✅ Vždy odpovídá ceně</li></ul><button>Koupit nyní</button>`,
      },
    ];

    tabs.forEach((tab) => {
      const button = document.createElement("button");
      button.classList.add("tab-button");
      button.textContent = `Záložka ${tab.label}`;
      button.style.backgroundColor = tab.color;
      button.addEventListener("mouseenter", () => {
        tabContent.innerHTML = tab.content;
      });
      tabButtons.appendChild(button);
    });

    tabSection.appendChild(tabButtons);
    tabSection.appendChild(tabContent);
    mysteryBox.insertAdjacentElement("afterend", tabSection);
  }

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
