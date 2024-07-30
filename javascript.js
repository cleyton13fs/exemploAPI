const botao = document.getElementById('botao');
const catImages = document.getElementById('catImagens');
botao.addEventListener('click', fetchCatImagens);

function fetchCatImagens(){
    fetch('https://api.thecatapi.com/v1/images/search?limit=2')
    .then(response =>{
        if (!response.ok){
            throw new Error('A vsolicitação não foi bem-sucedida');
        }
        return response.json()
    })
    .then(data =>{
        catImages.innerHTML = '';
        data.forEach(cat =>{
            const catImage = document.createElement('img');
            catImage.src = cat.url;
            catImage.alt = 'imagem do gato';
            catImages.appendChild(catImage);
        });
    })
    .catch(error =>{
        console.error('Erro: ',error);
    });
}