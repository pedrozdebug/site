const loadstringForm = document.getElementById('loadstring-form');
const loadstringInput = document.getElementById('loadstring-input');
const loadstringResult = document.getElementById('loadstring-result');

loadstringForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const url = loadstringInput.value.trim();

  if (!url) {
    loadstringResult.value = 'Place a valid URL Man🙏😭';
    return;
  }

  loadstringResult.value = `loadstring(game:HttpGet("${url}"))()`;
});

