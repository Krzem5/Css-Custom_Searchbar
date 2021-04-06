DATA=[
	{
		title:"Object #1",
		desc:"Ninja-Bananasaft",
		func:function(){
			var l=document.createElement("a")
			l.href="doc-1/"
			document.body.appendChild(l)
			l.click()
			document.body.removeChild(l)
		}
	}
]
window.onload=function(){
	var pr=document.getElementsByClassName("search-bar")[0]
	var cr=document.getElementsByClassName("search-bar")[0].childNodes[3]
	var inp=document.getElementsByClassName("search-bar")[0].childNodes[1]
	var sr=document.getElementsByClassName("search-bar")[0].childNodes[5].childNodes[1]
	var ot=document.getElementsByClassName("search-bar")[0].childNodes[7]
	pr.onkeypress=function(evt){
		var k=evt.key
		if (pr.classList.contains("s")&&pr.classList.contains("nsr")&&k=="Enter"){
			sr.onclick()
		}
	}
	sr.onclick=function(){
		if (pr.classList.contains("s")){
			function af(){
				pr.classList.remove("sr")
				pr.classList.add("nsr")
				pr.classList.remove("s")
				pr.classList.add("d")
				sr.removeEventListener("animationend",af)
				pr.style.height=`${110*(wg.length>0?wg.length:0.6)+40}px`
			}
			var str=inp.value
			pr.classList.add("sr")
			pr.classList.remove("nsr")
			sr.addEventListener("animationend",af)
			ot.innerText=str
			if (ot.innerText.length>38){ot.innerText=ot.innerText.substring(0,37)+"…"}
			var wg=[]
			for (var d of DATA){
				for (var s of str.split(" ")){
					if (d.title.toLowerCase().includes(s.toLowerCase())||d.desc.toLowerCase().includes(s.toLowerCase())){
						wg.push(d)
						break
					}
				}
			}
			for (var k of wg){
				var mn=document.createElement("div")
				mn.classList.add("o")
				var tt=document.createElement("div")
				tt.classList.add("t")
				tt.innerHTML=k.title
				var dc=document.createElement("div")
				dc.classList.add("d")
				dc.innerHTML=k.desc
				mn.onclick=function(){
					pr.classList.add("s")
					pr.classList.remove("d")
					pr.style.height="40px"
					for (var ci=pr.childNodes.length-1;ci>=0;ci--){
						var c=pr.childNodes[ci]
						if (c.classList&&(c.classList.contains("o")||c.classList.contains("nb")||c.classList.contains("ns"))){
							pr.removeChild(c)
						}
					}
					k.func()
				}
				mn.appendChild(tt)
				mn.appendChild(dc)
				pr.appendChild(mn)
			}
			if (wg.length==0){
				var bg=document.createElement("div")
				bg.classList.add("nb")
				bg.innerText="Oops!"
				var sm=document.createElement("div")
				sm.classList.add("ns")
				sm.innerText=`Nothing relates to "${str}"`
				pr.appendChild(bg)
				pr.appendChild(sm)
			}
		}
		else{
			pr.classList.add("s")
			pr.classList.remove("d")
			pr.style.height="40px"
			for (var ci=pr.childNodes.length-1;ci>=0;ci--){
				var c=pr.childNodes[ci]
				if (c.classList&&(c.classList.contains("o")||c.classList.contains("nb")||c.classList.contains("ns"))){
					pr.removeChild(c)
				}
			}
		}
	}
	cr.onclick=function(){
		inp.value=""
	}
}
