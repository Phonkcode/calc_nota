function calcular() {
    const ap1 = Number(document.getElementById('ap1').value)
    const ap2 = Number(document.getElementById('ap2').value)
    const sa = Number(document.getElementById('sa').value)
  
    let nota = (ap1 + ap2 + sa) / 3
    if (nota >= 6) {
      alert('Você foi aprovado!')
    }
    else if (nota < 6) {
      alert('Você foi reprovado')
    }
    document.getElementById('nota').innerHTML = 'Nota: ' + nota
  }
  function clean() {
    document.getElementById('ap1').value = ''
    document.getElementById('ap2').value = ''
    document.getElementById('sa').value = ''
    document.getElementById('nota').innerHTML = 'Nota: '
  }
  function verificaAp1() {
    const ap1 = Number(document.getElementById('ap1').value)
    if (ap1 < 0 || ap1 > 10.0) {
      alert('Nota inválida')
      document.getElementById('ap1').focus()
      document.getElementById('ap1').value = ''
    }
  
  }
  function verificaAp2() {
    const sa = Number(document.getElementById('ap2').value)
    if (ap2 < 0 || ap2 > 10.0) {
      alert('Nota inválida')
      document.getElementById('ap2').focus()
      document.getElementById('ap2').value = ''
    }
  }
  function verificasa() {
    const sa = Number(document.getElementById('sa').value)
    if (sa < 0 || sa > 10.0) {
      alert('Nota inválida')
      document.getElementById('sa').focus()
      document.getElementById('sa').value = ''
    }
  }