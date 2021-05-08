function helloWorld(language) {
    if (language == 'fr') {
       return( 'Bonjour tout le monde');
    }if (language == 'es') {
        return('Hola, Mundo');
    } if (language == 'en'){
       return('Hello, World');
    }
}
alert(helloWorld('en'));
alert(helloWorld('fr'));
alert(helloWorld('es'));