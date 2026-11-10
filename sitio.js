(function(){
// menú
var b=document.querySelector('.burger'),m=document.querySelector('.menu');
if(b)b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
document.querySelectorAll('.dropbtn').forEach(function(d){d.addEventListener('click',function(e){e.preventDefault();var p=d.parentNode,o=p.classList.toggle('open');d.setAttribute('aria-expanded',o)})});
document.addEventListener('click',function(e){document.querySelectorAll('.drop.open').forEach(function(p){if(!p.contains(e.target))p.classList.remove('open')})});
// slider
var s=[].slice.call(document.querySelectorAll('.slide')),dots=[].slice.call(document.querySelectorAll('.dot')),i=0,t;
function go(n){if(!s.length)return;s[i].classList.remove('on');dots[i]&&dots[i].classList.remove('on');i=(n+s.length)%s.length;s[i].classList.add('on');dots[i]&&dots[i].classList.add('on')}
function auto(){clearInterval(t);t=setInterval(function(){go(i+1)},5000)}
dots.forEach(function(d,k){d.addEventListener('click',function(){go(k);auto()})});
if(s.length){auto();var sl=document.querySelector('.slider'),sx=0;sl.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});sl.addEventListener('touchend',function(e){var d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50){go(i+(d<0?1:-1));auto()}})}
// visor de fotos
var figs=[].slice.call(document.querySelectorAll('.obra')),v=document.getElementById('visor');
if(v&&figs.length){var vi=v.querySelector('img'),vp=v.querySelector('p'),cur=0;
function show(k){cur=(k+figs.length)%figs.length;var f=figs[cur];vi.src=f.querySelector('a').getAttribute('href');vi.alt=f.querySelector('img').alt;vp.textContent=f.querySelector('figcaption').textContent;v.classList.add('open')}
figs.forEach(function(f,k){f.querySelector('a').addEventListener('click',function(e){e.preventDefault();show(k)})});
document.getElementById('vx').onclick=function(){v.classList.remove('open')};
document.getElementById('vp').onclick=function(e){e.stopPropagation();show(cur-1)};
document.getElementById('vn').onclick=function(e){e.stopPropagation();show(cur+1)};
v.addEventListener('click',function(e){if(e.target===v)v.classList.remove('open')});
document.addEventListener('keydown',function(e){if(!v.classList.contains('open'))return;if(e.key==='Escape')v.classList.remove('open');if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
var x0=0;v.addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});v.addEventListener('touchend',function(e){var d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50)show(cur+(d<0?1:-1))});}
// formulario a WhatsApp
var f=document.getElementById('consulta');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
var msg='Hola Estudio Teseo, vengo de la web.\nNombre: '+d.get('nombre')+(d.get('zona')?'\nZona: '+d.get('zona'):'')+'\nConsulta: '+d.get('tipo')+(d.get('detalle')?'\n'+d.get('detalle'):'');
var a=document.createElement('a');a.href='https://wa.me/5491122728265?text='+encodeURIComponent(msg);a.target='_blank';a.rel='noopener';document.body.appendChild(a);a.click();a.remove()});
})();
