const personagem = document.querySelector('.personagem')
const posicao = { top: 0, left: 0 }

function left() {
  posicao.left = posicao.left - 10
}
function right() {
  posicao.left = posicao.left + 10
}
function up() {
  posicao.top = posicao.top - 10
}
function down() {
  posicao.top = posicao.top + 10
}

const movimentacao = {
  ArrowRight: right,
  ArrowLeft: left,
  ArrowUp: up,
  ArrowDown: down
}

window.addEventListener('keydown', event => {
  const teclaPressionada = event.key

  movimentacao[teclaPressionada]()

  personagem.style.top = `${posicao.top}px`
  personagem.style.left = `${posicao.left}px`
})
