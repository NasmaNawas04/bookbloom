   const books = [

       {
           name: "The Kite Runner",
           category: "Fiction",
           price: 2870,
           image: "images/kiterunner.jpg",
           description:
               "A powerful story about friendship, family and redemption."
       },

       {
           name: "Can We Be Strangers Again",
           category: "Fiction",
           price: 1425,
           image: "images/canwe.jpg",
           description:
               "A college friendship turns when love,betrayal and heartbreak change everything."
       },

       {
           name: "Kalivarai Irukai",
           category: "Tamil Fiction",
           price: 4200,
           image: "images/kalivarai.jpg",
           description:
               "A tamil novel exploring human relationships, emotions and the struggle of life."
       },

       {
           name: "Ikigai",
           category: "Self-Help",
           price: 1680,
           image: "images/ikigai.jpg",
           description:
               "Discover the Japanese concept of finding purpose and happiness."
       },

       {
           name: "Harry Potter full set",
           category: "Fantasy",
           price: 25900,
           image: "images/hp.jpg",
           description:
               "A magical adventure about friendship, courage and wizardry."
       },

       {
           name: "It Ends With Us",
           category: "Fiction",
           price: 2100,
           image: "images/itends.jpg",
           description:
               "A deeply emotional story about love,relationships,difficult choices and breaking harmful cycles."
       },

       {
           name: "Sila nerangalil sila manidharhal",
           category: "Tamil Fiction",
           price: 1200,
           image: "images/snsm.jpg",
           description:
               "A womens life shaped by trauma, society, relationships and the difficult choiceqs she makes."
       },

       {
           name: "Rich Dad Poor Dad",
           category: "Finance",
           price: 3800,
           image: "images/rdpd.jpg",
           description:
               "A popular book about money, financial education and investing."
       }

   ];



   const bookGrid =
       document.getElementById("bookGrid");

   const searchInput =
       document.getElementById("searchInput");

   const categoryFilter =
       document.getElementById("categoryFilter");

   const sortFilter =
       document.getElementById("sortFilter");

   const loading =
       document.getElementById("loading");

   const noResults =
       document.getElementById("noResults");

   const themeButton =
       document.getElementById("themeButton");



   function displayBooks(bookList) {

       bookGrid.innerHTML = "";


       if (bookList.length === 0) {

           noResults.style.display = "block";

           return;
       }


       noResults.style.display = "none";


       bookList.forEach(function(book) {


           const card =
               document.createElement("div");

           card.className = "book-card";


           card.innerHTML = `

               <div class="book-image">

                   <img
                       src="${book.image}"
                       alt="${book.name}">
               
               </div>


               <div class="book-info">

                   <h2 class="book-title">
                       ${book.name}
                   </h2>


                   <span class="category">
                       ${book.category}
                   </span>


                   <p class="description">
                       ${book.description}
                   </p>


                   <div class="price">
                       Rs. ${book.price.toLocaleString()}
                   </div>

               </div>

           `;


           bookGrid.appendChild(card);

       });

   }

   function filterBooks() {


       const searchText =
           searchInput.value.toLowerCase();


       const selectedCategory =
           categoryFilter.value;


       let filteredBooks =
           books.filter(function(book) {


               const matchesSearch =
                   book.name
                   .toLowerCase()
                   .includes(searchText);


               const matchesCategory =
                   selectedCategory === "all" ||
                   book.category === selectedCategory;


               return (
                   matchesSearch &&
                   matchesCategory
               );

           });



       
       if (sortFilter.value === "price-low") {

           filteredBooks.sort(function(a, b) {

               return a.price - b.price;

           });

       }


       if (sortFilter.value === "price-high") {

           filteredBooks.sort(function(a, b) {

               return b.price - a.price;

           });

       }

       if (sortFilter.value === "name") {

           filteredBooks.sort(function(a, b) {

               return a.name.localeCompare(b.name);

           });

       }



       displayBooks(filteredBooks);

   }

   searchInput.addEventListener(
       "input",
       filterBooks
   );


   categoryFilter.addEventListener(
       "change",
       filterBooks
   );


   sortFilter.addEventListener(
       "change",
       filterBooks
   );


   themeButton.addEventListener(
       "click",
       function() {


           document.body.classList.toggle(
               "dark-mode"
           );


           if (
               document.body.classList
               .contains("dark-mode")
           ) {

               themeButton.textContent = "☀️";

           } else {

               themeButton.textContent = "🌙";

           }

       }
   );


   setTimeout(function() {


       loading.style.display = "none";


       displayBooks(books);


   }, 1000);


