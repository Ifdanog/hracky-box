document.addEventListener("DOMContentLoaded", function () {
  let mysteryBoxHTML = `
        <div class="mystery-box-container">
            <!-- Left Section: Description -->
            <div class="mystery-box-text">
                <h2>What is a Mystery Box?</h2>
                <p><span>Mystery Box</span> is a gift box full of <span>mysterious items.</span> You will only find out <strong>what is inside after you open it! 🎁</strong></p>
                
                <h2>What will I find inside?</h2>
                <ul>
                    <li><span>1.</span> We will carefully compile the content of the Box according to the <span>interests</span>, <span>gender</span>, and <span>age</span> of the future Box owner.</li>
                    <li><span>2.</span> Inside, he/she will find <span>fun</span>, <span>valuable</span>, <span>unusual</span>, and simply cool items, <span>custom</span>-selected for him/her. ❤️</li>
                    <li><span>3.</span> The fun and impatient unboxing of the Box is accompanied by <span>moments of tension</span> that will take you back to your childhood. 😊</li>
                </ul>
            </div>

            <!-- Right Section: Video -->
            <div class="mystery-box-image">
                <div style="width: 100%; height: 0px; position: relative; padding-bottom: 100.000%;">
                    <iframe src="https://streamable.com/e/756s2e?quality=highest" frameborder="0" width="100%" height="100%" allowfullscreen style="width: 100%; height: 100%; position: absolute;"></iframe>
                </div>
            </div>
        </div>
    `;

  // Insert Mystery Box below .benefit-banners-full-width
  const guarantee = document.querySelector(".benefit-banners-full-width");
  guarantee.insertAdjacentHTML("afterend", mysteryBoxHTML);

  // After Mystery Box is added, insert the Gallery
  const mysteryBox = document.querySelector(".mystery-box-container");
  if (mysteryBox) {
    const galleryHTML = `
            <div class="gallery-container">
                <div class="gallery-item">
                    <img src="https://cdn.myshoptet.com/usr/www.hracky-box.cz/user/shop/big/45-3_whatsapp-image-2025-03-08-at-21-15-42.jpg?67cd87dd" alt="Gallery Image">
                    <p>Mystery awaits inside! 🎁</p>
                </div>
                <div class="gallery-item">
                    <img src="https://cdn.myshoptet.com/usr/www.hracky-box.cz/user/shop/big/45-3_whatsapp-image-2025-03-08-at-21-15-42.jpg?67cd87dd" alt="Gallery Image">
                    <p>Unbox surprises you never expected! 😲</p>
                </div>
                <div class="gallery-item">
                    <img src="https://cdn.myshoptet.com/usr/www.hracky-box.cz/user/shop/big/45-3_whatsapp-image-2025-03-08-at-21-15-42.jpg?67cd87dd" alt="Gallery Image">
                    <p>What's inside? Only one way to find out! 🔍</p>
                </div>
                <div class="gallery-item">
                    <img src="https://cdn.myshoptet.com/usr/www.hracky-box.cz/user/shop/big/45-3_whatsapp-image-2025-03-08-at-21-15-42.jpg?67cd87dd" alt="Gallery Image">
                    <p>Guaranteed excitement with every box! 🎉</p>
                </div>
                <div class="gallery-item">
                    <img src="https://cdn.myshoptet.com/usr/www.hracky-box.cz/user/shop/big/45-3_whatsapp-image-2025-03-08-at-21-15-42.jpg?67cd87dd" alt="Gallery Image">
                    <p>Perfect gift for thrill seekers! 🎁</p>
                </div>
                <div class="gallery-item">
                    <img src="https://cdn.myshoptet.com/usr/www.hracky-box.cz/user/shop/big/45-3_whatsapp-image-2025-03-08-at-21-15-42.jpg?67cd87dd" alt="Gallery Image">
                    <p>Each box tells a unique story! 📦</p>
                </div>
                <div class="gallery-item">
                    <img src="https://cdn.myshoptet.com/usr/www.hracky-box.cz/user/shop/big/45-3_whatsapp-image-2025-03-08-at-21-15-42.jpg?67cd87dd" alt="Gallery Image">
                    <p>Something fun, something valuable, something special! ✨</p>
                </div>
            </div>
        `;

    // Insert Gallery below Mystery Box
    mysteryBox.insertAdjacentHTML("afterend", galleryHTML);
  }
  const gallery = document.querySelector(".gallery-container");
  if (gallery) {
    const testimonialsHTML = `
            <div class="testimonials-container">
                <h2>What Our Customers Say</h2>
                <div class="testimonials-carousel">
                    <div class="testimonial active">
                        <p>"I had so much fun opening my Mystery Box! Everything inside was a total surprise, and I loved each item!"</p>
                        <strong>- Alice M.</strong>
                    </div>
                    <div class="testimonial">
                        <p>"The perfect gift idea! I ordered one for my nephew, and he couldn't stop talking about it!"</p>
                        <strong>- David S.</strong>
                    </div>
                    <div class="testimonial">
                        <p>"Such a unique concept! The items were well thought out and personalized to my interests!"</p>
                        <strong>- Emily R.</strong>
                    </div>
                </div>
                <button class="prev">&lt;</button>
                <button class="next">&gt;</button>
            </div>
        `;

    gallery.insertAdjacentHTML("afterend", testimonialsHTML);

    // Carousel Logic
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
    }, 4000); // Auto-slide every 4 seconds
  }
  
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of purchase.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email.",
    },
  ];
  
const testimonialContainer = document.querySelector(".testimonials-container");
  if (testimonialContainer) {
const accordionContainer = document.createElement("div");
    accordionContainer.classList.add("faq-container");

    // Add Section Title
    const sectionTitle = document.createElement("h2");
    sectionTitle.classList.add("faq-title");
    sectionTitle.textContent = "Frequently Asked Questions";
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

  const faqContainer = document.querySelector(".faq-container");
  if(faqContainer) {
    const tabSection = document.createElement("div");
    tabSection.classList.add("tab-section");

    const tabButtons = document.createElement("div");
    tabButtons.classList.add("tab-buttons");

    const tabContent = document.createElement("div");
    tabContent.classList.add("tab-content");
    tabContent.textContent = "Hover over a button to see content";

    const tabs = [
        { label: "1", content: "This is content for Tab 1" },
        { label: "5", content: "This is content for Tab 5" }
    ];

    tabs.forEach(tab => {
        const button = document.createElement("button");
        button.classList.add("tab-button");
        button.textContent = tab.label;
        button.addEventListener("mouseenter", () => {
            tabContent.textContent = tab.content;
        });
        tabButtons.appendChild(button);
    });

    tabSection.appendChild(tabButtons);
    tabSection.appendChild(tabContent);
    accordionContainer.insertAdjacentElement("afterend", tabSection);
  }
});
