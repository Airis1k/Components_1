import { newsList } from "./news-object-item.js";

export function createNews() {
   return createHeaderNews();
}

function createHeaderNews() {
   // wrap all news
   const newsWrapper = createHtmlElement("div", "news-wrapper");
   // news header
   const h2Element = createHtmlElement("h2", "");
   h2Element.textContent = "Naujienos";
   // wrap all news except h2 elem
   const innerNewsWrapper = createHtmlElement("div", "inner-news-wrapper");
   //    header wrap
   const newsHeaderWrap = createHtmlElement("div", "news-header");

   console.log(newsList);
   for (let i = 0; i < 2; i++) {
      //    navigation
      const headerNav = createHtmlElement("a", "");
      headerNav.href = "#";
      //    inner-header
      const innerHeaderNews = createHtmlElement("div", "inner-header");
      //    img container
      const imgContainer = createHtmlElement("div", "img-container");
      //       img
      const imgElement = createHtmlElement("img", "");
      imgElement.src = newsList[i].image.src;
      imgElement.alt = newsList[i].image.alt;
      imgElement.width = newsList[i].image.width;

      imgContainer.append(imgElement);

      //    text container
      const textContainer = createHtmlElement("div", "text-container");
      //       info
      const textTopic = createHtmlElement("div", "text-topic");
      textTopic.textContent = newsList[i].topic;
      const textHeader = createHtmlElement("h3", "");
      textHeader.textContent = newsList[i].header;
      const textDate = createHtmlElement("div", "text-date");
      textDate.textContent = newsList[i].date;

      textContainer.append(textTopic, textHeader, textDate);


      innerHeaderNews.append(imgContainer, textContainer);
      headerNav.append(innerHeaderNews);
      newsHeaderWrap.append(headerNav);
   }

   innerNewsWrapper.append(newsHeaderWrap);
   newsWrapper.append(h2Element, innerNewsWrapper);

   return newsWrapper;
}

function createSubNews() {

}

function createHtmlElement(element, className) {
   const newElement = document.createElement(element);
   if (className) {
      newElement.classList.add(className);
   }

   return newElement;
}




/*

      <main>
         <div class="news-wrapper">
            <h2>Naujienos</h2>
            <div class="inner-news-wrapper">
               
               <div class="news-other">
                  <a href="#">
                     <div class="inner-news-wrapper-small">
                        <div class="img-wrapper-small">
                           <img src="https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1536x1024.jpg" alt="group" width="120px">
                        </div>
                        <div class="text-wrapper-small">
                           <div class="text-topic">Naujienos</div>
                           <h3>"CodeAcademy" projektine veikla - indelis i grazesne ateiti</h3>
                           <div class="text-date">2021-11-09</div>
                        </div>
                     </div>
                  </a>
                  <a href="#">
                     <div class="inner-news-wrapper-small">
                        <div class="img-wrapper-small">
                           <img src="https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1536x1024.jpg" alt="group" width="120px">
                        </div>
                        <div class="text-wrapper-small">
                           <div class="text-topic">IT</div>
                           <h3>"CodeAcademy" projektine veikla</h3>
                           <div class="text-date">2021-11-09</div>
                        </div>
                     </div>
                  </a>
                  <a href="#">
                     <div class="inner-news-wrapper-small">
                        <div class="img-wrapper-small">
                           <img src="https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1536x1024.jpg" alt="group" width="120px">
                        </div>
                        <div class="text-wrapper-small">
                           <div class="text-topic">Naujienos</div>
                           <h3>"CodeAcademy" projektine veikla - indelis i grazesne ateiti</h3>
                           <div class="text-date">2021-11-09</div>
                        </div>
                     </div>
                  </a>
                  <a href="#">
                     <div class="inner-news-wrapper-small">
                        <div class="img-wrapper-small">
                           <img src="https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1536x1024.jpg" alt="group" width="120px">
                        </div>
                        <div class="text-wrapper-small">
                           <div class="text-topic">IT</div>
                           <h3>"CodeAcademy" projektine veikla</h3>
                           <div class="text-date">2021-11-09</div>
                        </div>
                     </div>
                  </a>
               </div>
               <div class="press-more-news">
                  <a href="#">
                     <div class="block-element">
                        <h4>Visos naujienos</h4>
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </main>

*/
