
    /*function f(){
    console.log('Hola');
    }*/
   
   ////////////////
   /* try{
        f();
    }catch (e){
        console.log('Se ha producido una excepción: '+e);
    }finally{
        console.log('El finally se ejecuta sí o sí');
    }

    ////////////////////

    try {
        try_statements
    }
    [catch (exception_var_1) {
        catch_statements_1
    }]
    ...
    catch (exception_var_2) {
        catch_statements_2
    }


///////////////////////////

try {
    try_statements
}
[catch (exception_var_1) { 
    catch_statements_1
}]
...
[catch (exception_var_2) {
    catch_statements_2
}]
[finally {
    finally_statements
}]


/////////////// THROW ////////////////////

try {
    throw 'Error creado por Davinia';
} catch (e) {
    console.log('Se ha producido una excepción: ' + e);
} finally {
    console.log('El finally se ejecuta sí o sí');
}

///////////////////////////
try {
    throw { toString: function () { return "'Error creado por Davinia desde una función anónima";} };
} catch (e) {
    console.log('Se ha producido una excepción: ' + e);
} finally {
    console.log('El finally se ejecuta sí o sí');
} 

//////////////////////////
try {
    function f() { 
        return "'Error creado por Davinia desde una función"; 
    };
    throw { toString: f };
} catch (e) {
    console.log('Se ha producido una excepción: ' + e);
} finally {
    console.log('El finally se ejecuta sí o sí');
}
*/
//////////////// CREAR UNA EXCEPCION PERSONALIZADA ////////////////////////
/*
    // Crea un objeto tipo de UserException. Y funciona como constructor. 
    function UserException(message) {
        this.message = message;
        this.name = 'UserException';
    }
    // Prueba a ver esto para entender prototype: console.log(new UserException);
    
    
    // Hacer que la excepción se convierta en una cadena con formato cuando se usa como cadena
    // (por ejemplo, por la consola de errores)
    UserException.prototype.toString = function() {
        return '${this.name}: "${this.message}"';
    }
    
    // Crea una instancia del tipo de objeto y tírala
    throw new UserException('Valor incorrecto ');

    //o bien
    let e = new UserException('Valor incorrecto ');
    throw 3;
*/
////////También se puede preguntar por la excepción producida y manejarla de manera diferente en cada caso./////
//instanceof es un operador booleano.//

try {
    f();
} catch (e) {
    if (e instanceof ReferenceError) {
        console.log('Se ha producido una excepción: '+ e);
    }
} finally {
    console.log('El finally se ejecuta sí o sí');
}


