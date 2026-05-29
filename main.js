import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

document.body.innerHTML = supabaseUrl ? '✅ ENV VARS LOADED<br><br><button id="test">Test Supabase Connection</button><p id="result"></p>' : '❌ ENV VARS MISSING'

if(supabaseUrl) {
  const supabase = createClient(supabaseUrl, supabaseKey)
  document.getElementById('test').onclick = async () => {
    const { error } = await supabase.from('test').select('*')
    document.getElementById('result').innerText = error ? '❌ ' + error.message : '✅ Supabase Connected!'
  }
}