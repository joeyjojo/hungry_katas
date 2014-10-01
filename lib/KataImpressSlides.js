var editors = {
  code: {},
  test: {}
}

function setUpEditor(name) {
  var code_div = document.getElementById(name + "_code")
  code_div.innerHTML = defaults[name].code

  var codeEditor = CodeMirror.fromTextArea(code_div, {
    lineNumbers: true,
    mode: "javascript",
    matchBrackets: true,
    viewTo: 100
  });


  var tests_div = document.getElementById(name + "_tests")
  tests_div.innerHTML = defaults[name].test
  var testEditor = CodeMirror.fromTextArea(tests_div, {
    lineNumbers: true,
    mode: "javascript",
    matchBrackets: true,
    viewTo: 100
  });

  testEditor.on('keyHandled', function(codeMirror, key) {
    if (key === 'Ctrl-T') {
      runTests(name)
    }
  })

  codeEditor.on('keyHandled', function(codeMirror, key) {
    if (key === 'Ctrl-T') {
      runTests(name)
    }
  })

  editors.code[name] = codeEditor
  editors.test[name] = testEditor
}


function runTests(editor) {
  var code = editors.code[editor].getValue()
  var tests = editors.test[editor].getValue()
  var allCode = code + '\n' + tests
  localStorage.setItem('tests', allCode)
  var jasmine = document.getElementById(editor + '_jasmine')
  jasmine.src = jasmine.src
}

var slides = []

function setUpSlides() {

}

function runOnHash() {
  var slide = location.hash.split('/')[1]
  if (slides.indexOf(slide) !== -1)
    runTests(slide)
}

window.onhashchange = function() {
  runOnHash()
}


function createCodingSlide(name) {
  // <div class='coder'>
  //         <div class='code'>
  //           <textarea id='decision_code'></textarea>
  //         </div>
  //         <div class='test'>
  //           <textarea id='decision_tests'></textarea>
  //         </div>
  //         <iframe class='jasmine' frameBorder="0" id='decision_jasmine' src="../../lib/KataSpec.html"></iframe>
  //       </div>

  var codeMirror = document.createElement('textarea')
  codeMirror.id = name + '_code'

  var code = document.createElement('div')
  code.className = 'code'
  code.appendChild(codeMirror)

  var testMirror = document.createElement('textarea')
  testMirror.id = name + '_tests'

  var test = document.createElement('div')
  test.className = 'test'
  test.appendChild(testMirror)

  var jasmine = document.createElement('iframe')
  jasmine.frameBorder = 0
  jasmine.id = name + '_jasmine'
  jasmine.src = '../../lib/KataSpec.html'
  jasmine.className = 'jasmine'

  var coder = document.createElement('div')
  coder.className = 'coder'
  coder.appendChild(code)
  coder.appendChild(test)
  coder.appendChild(jasmine)

  return coder
}

function createSlides() {
  CodeMirror.commands.transposeChars = function() {}
  for (var a in arguments) {
    var slide = arguments[a]
    document.getElementById(slide).appendChild(createCodingSlide(slide))
    slides.push(slide)
    setUpEditor(slide)
    runTests(slide)
  }
  runOnHash()
}