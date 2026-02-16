function go(encoded) {
  // убираем пробелы на случай копирования Base64
  const cleaned = encoded.replace(/\s/g, '');
  const url = atob(cleaned); // decode Base64
  window.open(url, '_blank');
}
