let montoCofla = prompt("Ingrese el dinero de Cofla: ");


if (montoCofla >= 0.6 && montoCofla < 1) {
    montoCofla -= 0.6
    alert(`Roberto puede comprar un Palito de helado de agua y su cambio serían: $${montoCofla}`);        
}
else if (montoCofla >= 1 && montoCofla < 1.6) {
    montoCofla -= 1;
    alert(`Roberto puede comprar un Palito de helado de crema y su cambio serían: $${montoCofla}`);    
}
else if (montoCofla >= 1.6 && montoCofla < 1.7) {
    montoCofla -= 1.6;
    alert(`Roberto puede comprar un Bombón helado marca Heladix y su cambio serían: $${montoCofla}`);    
}
else if (montoCofla >= 1.7 && montoCofla < 1.8) {
    montoCofla -= 1.7;
    alert(`Roberto puede comprar un Bombón helado marca Heladovich y su cambio serían: $${montoCofla}`);    
}
else if (montoCofla >= 1.8 && montoCofla < 2.9) {
    montoCofla -= 1.8;
    alert(`Roberto puede comprar un Bombón helado marca Helardo y su cambio serían: $${montoCofla}`);    
}
else if (montoCofla >= 2.9) {
    montoCofla -= 2.9;
    alert(`Roberto puede comprar un Potecito de helado con cofites o un Pote de 1/4 y su cambio serían: $${montoCofla}`);    
}