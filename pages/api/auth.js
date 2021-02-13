export function signIn(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token:'fafdsafasfdsf45f554f5',
                user: {
                    name: 'Diego',
                    email:'diego@rocketseat.com.br',
                },
            });
        }, 2000);
    });
}