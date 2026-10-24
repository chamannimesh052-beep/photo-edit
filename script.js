let photo = document.getElementById("photo");
let upload = document.getElementById("upload");

upload.onchange = function(){
 photo.src = URL.createObjectURL(upload.files[0]);
}

function filter1(){ photo.style.filter = "grayscale(100%)"; }
function filter2(){ photo.style.filter = "brightness(150%)"; }
function filter3(){ photo.style.filter = "blur(3px)"; }
function reset(){ photo.style.filter = "
// Chaman AI Pro MAX V3 - Main JS
const fileInput = document.getElementById('fileInput');
const vid = document.getElementById('vid');
const img = document.getElementById('img');
const cap = document.getElementById('cap');
const txtOver = document.getElementById('txtOver');

if(fileInput){
fileInput.addEventListener('change', e=>{
 const f=e.target.files[0]; if(!f) return;
 const u=URL.createObjectURL(f);
 if(f.type.startsWith('video')){vid.src=u;vid.style.display='block';img.style.display='none';vid.play();}
 else{img.src=u;img.style.display='block';vid.style.display='none';}
});
}

function show(id,el){
 document.querySelectorAll('.panel').forEach(p=>p.style.display='none');
 document.getElementById('p-'+id).style.display='block';
 document.querySelectorAll('.t').forEach(t=>t.classList.remove('active'));
 if(el) el.classList.add('active');
}
function bgAi(type,el){
 document.querySelectorAll('#p-ai .f').forEach(b=>b.classList.remove('active'));
 if(el) el.classList.add('active');
 if(type==='none'){img.style.filter='none';document.getElementById('box').style.background='#111';}
 if(type==='blur'){document.getElementById('box').style.background='url(https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600) center/cover'; img.style.filter='blur(0px)';}
 if(type==='remove'){document.getElementById('box').style.background='#fff';}
 if(type==='mountain'){document.getElementById('box').style.background='url(https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=600) center/cover';}
}
function aiEnh(type){
 if(type==='auto'){img.style.filter='contrast(1.3) brightness(1.1) saturate(1.4)'; vid.style.filter=img.style.filter;}
 if(type==='4k'){img.style.filter='contrast(1.2) saturate(1.3)';}
 if(type==='face'){img.style.filter='brightness(1.05) contrast(1.1)';}
 if(type==='hdr'){img.style.filter='contrast(1.4) saturate(1.6) brightness(1.1)';}
}
function applyCap(){cap.innerText=document.getElementById('capInput').value;}
function startVoice(){
 const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 const rec=new SR(); rec.lang='en-US'; rec.start();
 rec.onresult=e=>{cap.innerText=e.results[0][0].transcript; document.getElementById('capInput').value=cap.innerText;}
}
function exportFinal(){
 if(vid.style.display!=='none' && vid.src){
   const a=document.createElement('a'); a.href=vid.src; a.download='chaman-ai-video.mp4'; a.click();
 }else{
   const a=document.createElement('a'); a.href=img.src; a.download='chaman-ai-photo.jpg'; a.click();
 }
}
document.getElementById("download").onclick = function(){
 let link = document.createElement("a");
 link.download = "chaman-edit.png";
 link.href = photo.src;
 link.click();
}