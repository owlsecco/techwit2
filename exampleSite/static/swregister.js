<script>
        if ( "serviceWorker" in navigator ) {

            navigator.serviceWorker.register( "/sw.js" )
                .then( function ( registration ) { // Registration was successful

                    console.log( "TechWit Ke Service Worker Registration Successful with Scope: ", registration.scope );

                } ).catch( function ( err ) { // registration failed :(

                    console.log( "TechWit Ke Service Worker Registration Failed: ", err );

                } );

        }
    </script>
