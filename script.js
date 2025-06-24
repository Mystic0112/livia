document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');
    const videoContainer = document.getElementById('videoContainer');
    const myVideo = document.getElementById('myVideo');
    const myAudio = document.getElementById('myAudio');
    const petalsContainer = document.querySelector('.petals-container');

    // Função para criar e animar uma pétala
    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // Define tamanho e posição aleatórios
        const size = Math.random() * 20 + 20; // Tamanho agora entre 20px e 40px
        petal.style.width = `${size}px`;
        petal.style.height = `${size * 1.5}px`; // Pétala mais alongada
        petal.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
        
        // Define duração e delay da animação aleatórios
        const duration = Math.random() * 10 + 10; // Duração entre 10s e 20s (queda mais lenta)
        const delay = Math.random() * 8; // Delay entre 0s e 8s
        petal.style.animationDuration = `${duration}s`;
        petal.style.animationDelay = `${delay}s`;

        petalsContainer.appendChild(petal);

        // Remove a pétala depois que ela sair da tela para evitar sobrecarga
        petal.addEventListener('animationend', () => {
            petal.remove();
        });
    }

    // Cria pétalas mais frequentemente (a cada 200 milissegundos)
    setInterval(createPetal, 200);

    // --- SEU CÓDIGO DE REPRODUÇÃO DE MÍDIA ---
    if (playButton && videoContainer && myVideo && myAudio) {
        // NOVO: Define o volume do áudio.
        // O valor 0.5 significa 50% do volume máximo.
        // Você pode ajustar esse valor para o que preferir (ex: 0.3 para mais baixo, 0.7 para mais alto).
        myAudio.volume = 0.5; // <--- LINHA ADICIONADA AQUI

        playButton.addEventListener('click', () => {
            playButton.style.display = 'none';
            videoContainer.classList.remove('hidden');

            const playVideoPromise = myVideo.play();
            const playAudioPromise = myAudio.play();

            Promise.all([playVideoPromise, playAudioPromise])
                .then(() => {
                    console.log('Vídeo e áudio reproduzidos com sucesso!');
                })
                .catch(error => {
                    console.error('Erro ao tentar reproduzir vídeo ou áudio:', error);
                    alert('Por favor, clique na tela para permitir a reprodução de vídeo e áudio.');
                });
        });
    } else {
        console.error('Um ou mais elementos não foram encontrados no DOM.');
    }
});