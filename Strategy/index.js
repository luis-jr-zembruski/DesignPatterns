const SHIPPING = {
  company: '',
  setStrategy: strategy => {
    company = strategy
  },
  calculate: package => {
    return company.calculate(package)
  }
}

const SEDEX = {
  name: 'SEDEX',
  calculate: package => {
    return package * 0.1
  }
}

const PAC = {
  name: 'PAC',
  calculate: package => {
    return package * 0.05
  }
}

function run() {
  const PACKAGE = 100

  const sedex = SEDEX
  const pac = PAC
  const shipping = SHIPPING

  shipping.setStrategy(pac)

  console.log(`Frete no valor de: R$ ${shipping.calculate(PACKAGE)}`)
}

run()
