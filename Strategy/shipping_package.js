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
  calculate: package => {
    return package * 0.1
  }
}

const PAC = {
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
  console.log(`Frete via PAC no valor de: R$ ${shipping.calculate(PACKAGE)}`)

  shipping.setStrategy(sedex)
  console.log(`Frete via Sedex no valor de: R$ ${shipping.calculate(PACKAGE)}`)
}

run()
