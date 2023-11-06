English version

# Image Search Using Pixabay API

The project is a simple application for searching and browsing images using the
public Pixabay API. The application is built with the React framework and
utilizes components for easy image browsing and loading.

# Pixabay API instructions

For HTTP requests, use a public image search service Pixabay. Register and get a
private access key.

The URL string of the HTTP request.

https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

Pixabay API supports pagination, by default the page parameter is set to 1. Let
the response comes with 12 objects each, set to per_page. Don't Remember that
when you search for a new keyword, you have to reset the value of page to 1.

The response from the api comes an array of objects in which you are only
interested in the following properties.

id - a unique identifier

webformatURL - link to the small image for the list of cards

largeImageURL - link to the large image for the modal window

## Component Descriptions

- **Searchbar**: Component for searching images. The component takes one prop
  onSubmit - a function to pass the value of the iput When the form is
  submitted. Creates a DOM element of the following structure.

  ```html
  <header class="searchbar">
    <form class="form">
      <button type="submit" class="button">
        <span class="button-label">Search</span>
      </button>

      <input
        class="input"
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
  ```

- **ImageGallery**: A list of image cards. Creates a DOM element of the
  following structure.
  ```html
  <ul class="gallery">
    <!-- Zbiór <li> z obrazami -->
  </ul>
  ```
- **ImageGalleryItem**: A list item component with an image. Creates a DOM
  element of the following structure.
  ```html
  <li class="gallery-item">
    <img src="" alt="" />
  </li>
  ```
- **Button**: Pressing the Load more button should load the next batch of Images
  and rendered with the previous ones. The button should be rendered only when
  there are some loaded images. If the image array is empty, the button is not
  rendered.
- **Loader**: Spinner component, displays while images are being loaded. Use
  ready made component react-loader-spinner.
- **Modal**: Modal window for displaying the large version of an image

![App look](./assets/project_image_finder_pixabay.png)

## Installation

To run the Image Finder application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone [repository-url]
   ```

2. Change to the project directory:

   ```bash
   cd [repository-name]

   ```

3. Install and start dependencies:
   ```bash
   npm install
   npm run dev
   npm start
   ```

The application should now be accessible in your web browser at
http://localhost:3000.

## How it works

The main component is **App**, defined in **App.jsx**.

Polish version

# Wyszukiwanie obrazów przy użyciu interfejsu API Pixabay

Projekt jest prostą aplikacją służącą do wyszukiwania i przeglądania zdjęć za
pomocą publiczne API Pixabay. Aplikacja zbudowana jest w oparciu o framework
React i wykorzystuje komponenty do łatwego przeglądania i ładowania obrazów.

# Instrukcja Pixabay API

Dla zapytań HTTP wykorzystaj publiczny serwis wyszukiwania obrazów Pixabay.
Zarejestruj się i otrzymaj indywidualny klucz dostępu. Łańcuch URL zapytania
HTTP.

https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

Pixabay API wspiera paginację, domyślnie parametr page jest równy 1. Niech w
odpowiedzi przychodzi po 12 obiektów, ustanowionych w parametrze per_page. Nie
zapomnij, że w trakcie wyszukiwania po słowie kluczu należy wyrzucać wartość
page w 1.

W odpowiedzi od api przychodzi tablica obiektów, w których ważne są dla ciebie
tylko następujące właściwości.

id - unikalny identyfikator

webformatURL - odnośnik do miniatury dla listy obrazków

largeImageURL - odnośnik do dużej wersji dla okna modalnego

## Opisy komponentów

- **Pasek wyszukiwania**: Komponent przyjmuje jeden props onSubmit - funkcję dla
  przekazania wartości input przy submicie formularza.

```html
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
```

- **ImageGallery**: Lista kart graficznych.

```html
<ul class="gallery">
  <!-- Zbiór <li> z obrazami -->
</ul>
```

- **ImageGalleryItem**: Składnik elementu listy z obrazem.

```html
<li class="gallery-item">
  <img src="" alt="" />
</li>
```

- **Button**: Po naciśnięciu przycisku Load more powinna ładować się kolejna
  porcja obrazków i renderować się razem z poprzednimi. Przycisk powinien
  renderować się tylko wtedy, gdy istnieje jakieś obrazek do wyświetlenia. Jeśli
  tablica obrazków jest pusta, przycisk nie renderuje się.
- **Loader**: Komponent spinnera, wyświetlany jest w czasie ładowania obrazków.
  Wykorzystano gotowy komponent, react-loader-spinner.
- **Modal**: Modalne okno do wyświetlania większej wersji obrazu

![App look](./assets/project_image_finder_pixabay.png)

## Instalacja

Aby uruchomić aplikację Image Finder lokalnie, wykonaj następujące kroki:

1. Sklonuj repozytorium:

   ```bash
   git clone [adres repozytorium]
   ```

2. Przejdź do katalogu projektu:

   ```bash
   cd [nazwa-repozytorium]
   ```

3. Zainstaluj i uruchom zależności:
   ```bash
   npm install
   npm run dev
   npm start
   ```

Aplikacja powinna być teraz dostępna w Twojej przeglądarce internetowej pod
adresem http://localhost:3000.

## Jak to działa

Głównym komponentem jest **App** zdefiniowana w **App.jsx**.
