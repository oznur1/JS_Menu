import fetchMenu from "./api.js";
import { elements, renderDetailPage, renderNotFound } from "./ui.js";

// Js içerisindeki URLSearchParams classı parametreleri alıp kullanmas noktasında bize kolaylık sağlar
const params = new URLSearchParams(window.location.search);

// Url'den gelen id parametresini number a çevir
const id = +params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  // Sayfa yüklendiğinde Api'a istek at
  const data = await fetchMenu("../db.json");

  // Url'den alınan id'ye sahip ürünü bul
  const product = data.find((item) => item.id === id);

  if (!product) {
    // Ürün bulunamadıysa Not Founded içeriğini render et
    renderNotFound(elements.detailContainer);
  } else {
    // Detay verisini bilinen ürün ile arayüzü renderla
    renderDetailPage(product, elements.detailContainer);
  }
});