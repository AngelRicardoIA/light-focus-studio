// Esta página solo prepara un mensaje. El visitante decide si lo envía.
const privacyNumber = CONFIG.whatsapp;
const privacyUrl = `https://wa.me/${privacyNumber}?text=${encodeURIComponent('Hola, quisiera hacer una solicitud de privacidad y uso de imagen.')}`;
['privacy-contact', 'privacy-phone', 'privacy-request'].forEach(id => {
 const link = document.getElementById(id);
 link.href = privacyUrl; link.target = '_blank'; link.rel = 'noopener noreferrer';
});
document.getElementById('privacy-phone').textContent = privacyNumber === '523350517645' ? '33 5051 7645' : '+' + privacyNumber;
