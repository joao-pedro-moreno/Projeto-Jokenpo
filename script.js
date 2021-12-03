// ============================================================
// Constantes e Variáveis
// ============================================================

const outGame = document.querySelector('#out-game')
const inGame = document.querySelector('#in-game')

const howToPlay = document.querySelector('#how-to-play')

const playerChoice = document.querySelector('#player-choice-game')
const computerChoice = document.querySelector('#computer-choice-game')

const matchResult = document.querySelector('#match-result')

const backButton = document.querySelector('#button-back')

const totalPlayerPoints = document.querySelector('#player-points')
const totalComputerPoints = document.querySelector('#computer-points')

const gameStopwatch = document.querySelector('#game-stopwatch')
const stopwatch = document.querySelector('#stopwatch')

const gameWinner = document.querySelector('#winner')

let playerPoints = 0
let computerPoints = 0

const computerPossibleChoices = [
    'Pedra',
    'Papel',
    'Tesoura'
]

// ============================================================
// Iniciar o Jogo
// ============================================================

function start() {
    outGame.style.display = 'none'
    inGame.style.display = 'block'
    backButton.style.display = 'block'
    playerChoice.innerHTML = ''
    computerChoice.innerHTML = ''
}

// ============================================================
// Escolhas Player
// ============================================================

function pedra() {
    let randComputerChoices = computerPossibleChoices[Math.floor(Math.random() * computerPossibleChoices.length)]

    playerChoice.innerHTML = 'Pedra'
    computerChoice.innerHTML = randComputerChoices

    if (randComputerChoices == 'Papel') {
        matchResult.innerHTML = 'Derrota'
        matchResult.style.color = 'red'
        computerPoints++
    } else if (randComputerChoices == 'Tesoura') {
        matchResult.innerHTML = 'Vitória'
        matchResult.style.color = 'green'
        playerPoints++
    } else {
        matchResult.innerHTML = 'Empate'
        matchResult.style.color = 'gray'
    }

    totalComputerPoints.innerHTML = computerPoints
    totalPlayerPoints.innerHTML = playerPoints
    gameWinner.innerHTML = ''
    verifyWinner()
}

function papel() {
    let randComputerChoices = computerPossibleChoices[Math.floor(Math.random() * computerPossibleChoices.length)]

    playerChoice.innerHTML = 'Papel'
    computerChoice.innerHTML = randComputerChoices

    if (randComputerChoices == 'Tesoura') {
        matchResult.innerHTML = 'Derrota'
        matchResult.style.color = 'red'
        computerPoints++
    } else if (randComputerChoices == 'Pedra') {
        matchResult.innerHTML = 'Vitória'
        matchResult.style.color = 'green'
        playerPoints++
    } else {
        matchResult.innerHTML = 'Empate'
        matchResult.style.color = 'gray'
    }

    totalComputerPoints.innerHTML = computerPoints
    totalPlayerPoints.innerHTML = playerPoints
    gameWinner.innerHTML = ''
    verifyWinner()
}

function tesoura() {
    let randComputerChoices = computerPossibleChoices[Math.floor(Math.random() * computerPossibleChoices.length)]

    playerChoice.innerHTML = 'Tesoura'
    computerChoice.innerHTML = randComputerChoices

    if (randComputerChoices == 'Tesoura') {
        matchResult.innerHTML = 'Derrota'
        matchResult.style.color = 'red'
        computerPoints++
    } else if (randComputerChoices == 'Papel') {
        matchResult.innerHTML = 'Vitória'
        matchResult.style.color = 'green'
        playerPoints++
    } else {
        matchResult.innerHTML = 'Empate'
        matchResult.style.color = 'gray'
    }
    
    totalComputerPoints.innerHTML = computerPoints
    totalPlayerPoints.innerHTML = playerPoints
    gameWinner.innerHTML = ''
    verifyWinner()
}

// ============================================================
// Verificador de quem Venceu
// ============================================================

function verifyWinner() {
    if (playerPoints == 10 || computerPoints == 10) {
        if (playerPoints == 10) {
            gameWinner.innerHTML = 'VOCÊ'
        } else {
            gameWinner.innerHTML = 'COMPUTADOR'
        }
        computerPoints = 0
        playerPoints = 0
        totalComputerPoints.innerHTML = computerPoints
        totalPlayerPoints.innerHTML = playerPoints
        gameStopwatch.style.display = 'block'
        contador(10, stopwatch)
        setTimeout(() => {
            gameWinner.innerHTML = ''
            playerChoice.innerHTML = ''
            computerChoice.innerHTML = ''
            matchResult.innerHTML = ''
            gameStopwatch.style.display = 'none'
        }, 11000)
    }
}

// ============================================================
// Voltar para a Tela Inicial
// ============================================================

function voltar() {
    outGame.style.display = 'block'
    inGame.style.display = 'none'
    backButton.style.display = 'none'
    howToPlay.style.display = 'none'
    playerChoice.innerHTML = ''
    computerChoice.innerHTML = ''
    matchResult.innerHTML = ''
    computerPoints = 0
    playerPoints = 0
    totalComputerPoints.innerHTML = computerPoints
    totalPlayerPoints.innerHTML = playerPoints
}

// ============================================================
// Como Jogar
// ============================================================

function comoJogar() {
    howToPlay.style.display = 'block'
    outGame.style.display = 'none'
    backButton.style.display = 'block'
}

// ============================================================
// Contador
// ============================================================

function contador(duration, display) {
    gameStopwatch.style.display = 'block'

    var timer = duration, seconds

    setInterval(function() {
        seconds = parseInt(timer % 60, 10)

        seconds = seconds < 10 ? '0' + seconds : seconds

        display.textContent = '00:' + seconds

        if (--timer < 0) {
            timer = duration
        }
    }, 1000)
}